export default function Logo({ className = "h-8 w-8", title = "Rolando Mendoza Jr." }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <g fill="#2C46D1">
        {/* J: top bar + stem */}
        <path d="M20 6H40V58H28V20H20V6Z" />
        {/* J: bottom hook */}
        <path d="M6 36H22C24.5 36 26 38 26 41.5V50C26 56.5 16 60 6 55.5V36Z" />
        {/* i: square tittle */}
        <rect x="44" y="6" width="14" height="14" />
        {/* i: stem */}
        <path d="M44 28H58V51C58 57 51 60 44 57V28Z" />
      </g>
    </svg>
  );
}
