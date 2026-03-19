import { useState } from "react";

// ─── SVG Icon Components ─────────────────────────────────

function RankingIcon({ hovered }: { hovered: boolean }) {
  const bars = [
    { idleH: 14, activeH: 32, delay: "0ms", fill: "hsl(73 100% 50%)" },
    { idleH: 24, activeH: 44, delay: "50ms", fill: "hsl(73 80% 40%)" },
    { idleH: 36, activeH: 40, delay: "100ms", fill: "hsl(73 100% 50%)" },
    { idleH: 20, activeH: 36, delay: "150ms", fill: "hsl(73 60% 35%)" },
    { idleH: 30, activeH: 28, delay: "200ms", fill: "hsl(73 100% 50%)" },
  ];
  const BASE = 68;
  return (
    <svg viewBox="0 0 72 72" className="w-full h-full">
      <line x1="4" y1={BASE} x2="68" y2={BASE} stroke="hsl(var(--border))" strokeWidth="1" />
      {bars.map((b, i) => {
        const h = hovered ? b.activeH : b.idleH;
        return (
          <rect
            key={i}
            x={6 + i * 13}
            y={BASE - h}
            width="9"
            height={h}
            rx="2"
            fill={b.fill}
            style={{ transition: `all 0.4s ease ${b.delay}` }}
          />
        );
      })}
      <text x="62" y="12" fill="hsl(73 100% 50%)" fontSize="8" fontWeight="bold" textAnchor="end">
        $24.10
      </text>
    </svg>
  );
}

function RadarIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg viewBox="0 0 72 72" className="w-full h-full">
      <circle cx="36" cy="36" r="28" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      <circle cx="36" cy="36" r="18" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      <circle cx="36" cy="36" r="8" fill="none" stroke="hsl(var(--border))" strokeWidth="0.5" />
      <line x1="36" y1="8" x2="36" y2="64" stroke="hsl(var(--border))" strokeWidth="0.5" />
      <line x1="8" y1="36" x2="64" y2="36" stroke="hsl(var(--border))" strokeWidth="0.5" />
      {/* Sweep */}
      <g style={{
        transformOrigin: "36px 36px",
        animation: hovered ? "radarSweep 2s linear infinite" : "none",
      }}>
        <line x1="36" y1="36" x2="36" y2="8" stroke="hsl(73 100% 50%)" strokeWidth="1.5" opacity="0.8" />
        <path d="M36,36 L36,8 A28,28 0 0,1 56,14 Z" fill="hsl(73 100% 50%)" opacity="0.15" />
      </g>
      {/* Ping rings */}
      {[0, 0.6, 1.2].map((delay, i) => (
        <circle
          key={i}
          cx="36"
          cy="36"
          r="4"
          fill="none"
          stroke="hsl(73 100% 50%)"
          strokeWidth="1"
          opacity="0"
          style={{
            animation: hovered ? `radarPing 2s ease-out ${delay}s infinite` : "none",
          }}
        />
      ))}
      <circle cx="36" cy="36" r="2" fill="hsl(73 100% 50%)" />
      {/* Blips */}
      <circle cx="26" cy="22" r="2" fill="hsl(73 100% 50%)" opacity={hovered ? 1 : 0.3} style={{ transition: "opacity 0.3s" }} />
      <circle cx="50" cy="30" r="2" fill="hsl(73 100% 50%)" opacity={hovered ? 1 : 0.3} style={{ transition: "opacity 0.3s" }} />
      <circle cx="42" cy="52" r="2" fill="hsl(73 100% 50%)" opacity={hovered ? 1 : 0.3} style={{ transition: "opacity 0.3s" }} />
    </svg>
  );
}

function SignalIcon({ hovered }: { hovered: boolean }) {
  const bars = [
    { x: 10, y: 52, h: 10, delay: "0ms" },
    { x: 24, y: 42, h: 20, delay: "70ms" },
    { x: 38, y: 30, h: 32, delay: "140ms" },
    { x: 52, y: 16, h: 46, delay: "210ms" },
  ];
  return (
    <svg viewBox="0 0 72 72" className="w-full h-full">
      <defs>
        <linearGradient id="signalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(73 100% 50%)" />
          <stop offset="100%" stopColor="hsl(73 80% 35%)" />
        </linearGradient>
      </defs>
      {bars.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={hovered ? b.y : 62 - 8}
          width="10"
          height={hovered ? b.h : 8}
          rx="2"
          fill="url(#signalGrad)"
          style={{ transition: `all 0.4s ease ${b.delay}` }}
        />
      ))}
      {/* Ping on tallest bar */}
      <circle
        cx="57"
        cy="14"
        r="2"
        fill="hsl(73 100% 50%)"
        style={{
          animation: hovered ? "signalPing 1.5s ease-out infinite" : "none",
        }}
      />
    </svg>
  );
}

function FreshDataIcon({ hovered }: { hovered: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      {/* Calendar body */}
      <rect x="8" y="14" width="38" height="38" rx="4" fill="none" stroke="hsl(var(--border))" strokeWidth="1.5" />
      {/* Header */}
      <rect x="8" y="14" width="38" height="10" rx="4" fill="hsl(73 100% 50%)" opacity="0.2" />
      <line x1="8" y1="24" x2="46" y2="24" stroke="hsl(var(--border))" strokeWidth="1" />
      {/* Rings */}
      <line x1="18" y1="10" x2="18" y2="18" stroke="hsl(73 100% 50%)" strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="10" x2="36" y2="18" stroke="hsl(73 100% 50%)" strokeWidth="2" strokeLinecap="round" />
      {/* Date dots */}
      {[
        { cx: 18, cy: 32 }, { cx: 27, cy: 32 }, { cx: 36, cy: 32 },
        { cx: 18, cy: 41 }, { cx: 27, cy: 41 }, { cx: 36, cy: 41 },
      ].map((d, i) => (
        <circle
          key={i}
          cx={d.cx}
          cy={d.cy}
          r="2"
          fill="hsl(73 100% 50%)"
          opacity={hovered ? 1 : 0.4}
          style={{
            animation: hovered ? `dateBlink 1.2s ease-in-out ${i * 0.1}s infinite` : "none",
            transition: "opacity 0.3s",
          }}
        />
      ))}
      {/* Refresh arrow */}
      <g style={{
        transformOrigin: "52px 44px",
        animation: hovered ? "refreshSpin 1.5s ease-in-out infinite" : "none",
      }}>
        <path d="M52,36 a8,8 0 1,1 -6,6" fill="none" stroke="hsl(73 100% 50%)" strokeWidth="2" strokeLinecap="round" />
        <polygon points="44,40 46,44 42,44" fill="hsl(73 100% 50%)" />
      </g>
    </svg>
  );
}

// ─── Exported icon map for use in SolutionSection ─────────
export const featureIcons = [
  (hovered: boolean) => <RankingIcon hovered={hovered} />,
  (hovered: boolean) => <RadarIcon hovered={hovered} />,
  (hovered: boolean) => <SignalIcon hovered={hovered} />,
  (hovered: boolean) => <FreshDataIcon hovered={hovered} />,
];

// ─── Keyframes (injected once) ────────────────────────────
export function FeatureCardKeyframes() {
  return (
    <style>{`
      @keyframes radarSweep {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes radarPing {
        0%   { r: 4;  opacity: 0.8; }
        100% { r: 28; opacity: 0; }
      }
      @keyframes signalPing {
        0%   { r: 2; opacity: 0; }
        50%  { opacity: 1; }
        100% { r: 8; opacity: 0; }
      }
      @keyframes refreshSpin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
      @keyframes dateBlink {
        0%, 100% { opacity: 1; }
        50%       { opacity: 0.35; }
      }
    `}</style>
  );
}

export default function FeatureCards() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    { title: "Ranking de precios", icon: featureIcons[0] },
    { title: "Búsqueda por región", icon: featureIcons[1] },
    { title: "Hecho para el campo", icon: featureIcons[2] },
    { title: "Datos frescos", icon: featureIcons[3] },
  ];

  return (
    <>
      <FeatureCardKeyframes />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cards.map((card, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`group relative bg-card rounded-2xl border border-border p-5 cursor-pointer overflow-hidden transition-all duration-300 hover:border-primary hover:-translate-y-1`}
            style={{ isolation: "isolate" }}
          >
            {/* Glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(73 100% 50% / 0.08), transparent 70%)",
              }}
            />
            {/* Icon */}
            <div className="relative w-full aspect-square mb-3">
              {card.icon(hovered === i)}
            </div>
            {/* Title */}
            <p className="font-heading font-bold text-sm text-foreground relative">{card.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
