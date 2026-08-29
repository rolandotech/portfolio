export default function Logo({ className = "h-8 w-8", title = "Rolando Mendoza Jr." }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 72 72"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <path fill="#2B46D2" d="M6 6h32v14H20v40a6 6 0 0 1-6 6H6V6Z" />
      <path fill="#2B46D2" d="M24 6h14v60H24V6Z" />
      <path fill="#2B46D2" d="M42 6h14v14H42V6Z" />
      <path fill="#2B46D2" d="M42 24h14v36a6 6 0 0 1-6 6H42V24Z" />
    </svg>
  );
}
