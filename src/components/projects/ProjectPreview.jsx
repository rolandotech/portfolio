import { useEffect, useRef, useState } from "react";
import { placeholderImage } from "../../data/placeholder.js";

const DESKTOP_WIDTH = 1280;
const DESKTOP_HEIGHT = 800;
const LOAD_TIMEOUT_MS = 10000;

function hostname(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function ProjectPreview({
  src,
  title,
  embed = true,
  interactive = false,
  className = "",
}) {
  const containerRef = useRef(null);
  const [frameScale, setFrameScale] = useState(0.32);
  const [shouldLoad, setShouldLoad] = useState(Boolean(interactive && embed && src));
  const [failed, setFailed] = useState(!src || !embed);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(!src || !embed);
    setShouldLoad(Boolean(interactive && embed && src));
  }, [src, embed, interactive]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || interactive) return undefined;

    const update = () => {
      const width = el.clientWidth;
      if (width > 0) setFrameScale(width / DESKTOP_WIDTH);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [interactive]);

  useEffect(() => {
    if (interactive || shouldLoad || failed || !src) return undefined;

    const el = containerRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [interactive, shouldLoad, failed, src]);

  useEffect(() => {
    if (!shouldLoad || failed || loaded) return undefined;
    const timer = window.setTimeout(() => setFailed(true), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [shouldLoad, failed, loaded]);

  const showIframe = shouldLoad && !failed && src;

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden bg-[#0b1020] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-2 px-3 h-8 border-b border-white/10 bg-[#12182b]">
        <span className="flex gap-1.5 shrink-0" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-red-400/90" />
          <span className="w-2 h-2 rounded-full bg-amber-400/90" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/90" />
        </span>
        <span className="min-w-0 truncate text-[11px] text-gray-300 font-medium">
          {src ? hostname(src) : title}
        </span>
      </div>

      {showIframe && (
        <iframe
          src={src}
          title={`${title} live preview`}
          loading="lazy"
          referrerPolicy="no-referrer"
          sandbox="allow-scripts allow-same-origin"
          tabIndex={interactive ? 0 : -1}
          aria-hidden={!interactive}
          onLoad={(event) => {
            try {
              const href = event.currentTarget.contentWindow?.location?.href;
              const html = event.currentTarget.contentDocument?.body?.innerHTML?.trim();
              if (!href || href === "about:blank" || html === "") {
                setFailed(true);
                return;
              }
            } catch {
              // Cross-origin page rendered inside the iframe.
            }
            setLoaded(true);
          }}
          onError={() => setFailed(true)}
          className={
            interactive
              ? "absolute top-8 right-0 bottom-0 left-0 w-full border-0 bg-white"
              : "absolute top-8 left-0 border-0 origin-top-left pointer-events-none bg-white"
          }
          style={
            interactive
              ? undefined
              : {
                  width: DESKTOP_WIDTH,
                  height: DESKTOP_HEIGHT,
                  transform: `scale(${frameScale})`,
                }
          }
        />
      )}

      {(failed || !src) && (
        <div className="absolute inset-0 top-8 flex flex-col items-center justify-center">
          <img
            src={placeholderImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <p className="relative z-10 px-3 py-1 rounded-full text-[11px] text-gray-300 bg-black/50">
            Live preview unavailable
          </p>
        </div>
      )}

      {showIframe && !loaded && (
        <div className="absolute inset-0 top-8 flex items-center justify-center bg-[#0b1020]/80 pointer-events-none">
          <span className="w-8 h-8 rounded-full border-2 border-white/15 border-t-accent-indigo animate-spin" />
        </div>
      )}

      {!interactive && (
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
    </div>
  );
}
