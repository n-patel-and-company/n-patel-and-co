type IconProps = { className?: string };

const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PlywoodIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M3 7h18M3 12h18M3 17h18" />
      <path d="M3 7v10M21 7v10" />
    </svg>
  );
}

export function VeneerIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <path d="M4 18c3-9 9-13 16-13-1 9-6 14-13 14H4z" />
      <path d="M4 18c4-4 8-6 12-7" />
    </svg>
  );
}

export function LaminateIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 17.5h4" />
    </svg>
  );
}

export function TimberIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className} aria-hidden="true">
      <ellipse cx="7" cy="12" rx="3" ry="7" />
      <path d="M7 5h10c1.5 0 3 3.1 3 7s-1.5 7-3 7H7" />
      <ellipse cx="7" cy="12" rx="1" ry="2.5" />
    </svg>
  );
}
