const SITE_MAX_WIDTH = "max-w-[1440px]";

export { SITE_MAX_WIDTH };

export default function Container({ children, className = "", narrow = false }) {
  return (
    <div
      className={`mx-auto w-full px-6 lg:px-8 ${
        narrow ? "max-w-3xl" : SITE_MAX_WIDTH
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({ children, className = "", id }) {
  return (
    <section id={id} className={`w-full py-10 ${className}`}>
      <div className="flex flex-col items-center">{children}</div>
    </section>
  );
}

export function PageHeader({ children, className = "" }) {
  return (
    <section className={`w-full pt-24 pb-10 ${className}`}>
      <div className="flex flex-col items-center">{children}</div>
    </section>
  );
}

export function FlexCards({ children, className = "", cols = 3 }) {
  const itemClass =
    cols === 4
      ? "[&>*]:w-full [&>*]:max-w-[280px] [&>*]:sm:flex-[1_1_220px] [&>*]:lg:flex-[1_1_240px]"
      : "[&>*]:w-full [&>*]:max-w-[420px] [&>*]:md:flex-[1_1_320px] [&>*]:lg:flex-[1_1_360px]";

  return (
    <div
      className={`flex flex-wrap justify-center items-stretch gap-6 w-full ${itemClass} ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionAction({ children }) {
  return (
    <div className="flex justify-center mt-12 w-full">
      {children}
    </div>
  );
}
