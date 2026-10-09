/**
 * Abstract cross-section of a plywood panel: alternating veneer plies above a
 * solid core. Decorative only — it stands in for product photography.
 */
export default function PlywoodArt() {
  const plies = [
    { y: 10, h: 16, fill: "#d9b182" },
    { y: 28, h: 10, fill: "#c08e55" },
    { y: 40, h: 16, fill: "#e3c49c" },
    { y: 58, h: 10, fill: "#b8803f" },
    { y: 70, h: 16, fill: "#d9b182" },
    { y: 88, h: 10, fill: "#c08e55" },
    { y: 100, h: 16, fill: "#e8d2b2" },
  ];

  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="Cross-section of a layered plywood panel">
      <defs>
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.45" />
          <stop offset="55%" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#8c5a2b" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {plies.map((ply) => (
        <g key={ply.y}>
          <rect x="18" y={ply.y} width="284" height={ply.h} rx="2" fill={ply.fill} />
          <rect
            x="18"
            y={ply.y}
            width="284"
            height={ply.h}
            rx="2"
            fill="url(#sheen)"
          />
        </g>
      ))}

      {/* grain hints */}
      {[16, 46, 76, 106].map((y) => (
        <path
          key={y}
          d={`M30 ${y} C 90 ${y - 3}, 150 ${y + 3}, 290 ${y}`}
          stroke="#8c5a2b"
          strokeOpacity="0.2"
          strokeWidth="1"
          fill="none"
        />
      ))}

      {/* measure line */}
      <line x1="18" y1="132" x2="302" y2="132" stroke="#d8cfc0" strokeWidth="1" />
      <line x1="18" y1="127" x2="18" y2="137" stroke="#8a8276" strokeWidth="1" />
      <line x1="302" y1="127" x2="302" y2="137" stroke="#8a8276" strokeWidth="1" />
      <text
        x="160"
        y="156"
        textAnchor="middle"
        fontSize="12"
        fill="#8a8276"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        letterSpacing="2"
      >
        CORE · PLY · FACE
      </text>
    </svg>
  );
}
