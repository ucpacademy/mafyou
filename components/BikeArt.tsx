export default function BikeArt({ accent, className = "" }: { accent: string; className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} role="img" aria-label="Motorbike illustration">
      <defs>
        <radialGradient id={`g${accent.slice(1)}`} cx="50%" cy="60%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.45" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="130" rx="190" ry="100" fill={`url(#g${accent.slice(1)})`} />
      <g fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="85" cy="150" r="42" />
        <circle cx="315" cy="150" r="42" />
        <path d="M85 150 L150 90 L230 90 L315 150" />
        <path d="M150 90 L185 150 L240 150 L230 90" />
        <path d="M230 90 L262 62 L292 62" />
        <path d="M150 90 L130 78 L180 78" />
      </g>
      <circle cx="85" cy="150" r="6" fill={accent} />
      <circle cx="315" cy="150" r="6" fill={accent} />
    </svg>
  );
}
