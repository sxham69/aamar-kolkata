import { useId, type SVGProps } from 'react';

/** Kulhar — the clay cup Kolkata drinks its chai from. Line drawing, inherits currentColor. */
export function Kulhar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M10 15h28l-4 25a3 3 0 0 1-3 2.5H17a3 3 0 0 1-3-2.5L10 15Z" />
      <path d="M9 15h30" />
      <path d="M13.2 24h21.6" opacity=".55" />
      <path d="M20 4c-1.5 2 1.5 3 0 5M26 3c-1.5 2 1.5 3 0 5" />
    </svg>
  );
}

/** Repeating alpana-inspired petal pattern used as a subtle texture. */
export function AlpanaPattern({ className = '', color = 'currentColor', opacity = 0.12 }: { className?: string; color?: string; opacity?: number }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden="true">
      <defs>
        <pattern id={`alpana-${id}`} width="64" height="64" patternUnits="userSpaceOnUse">
          <g fill="none" stroke={color} strokeWidth="1" opacity={opacity}>
            <circle cx="32" cy="32" r="3" />
            <path d="M32 18c4 5 4 9 0 14-4-5-4-9 0-14ZM32 46c4-5 4-9 0-14-4 5-4 9 0 14ZM18 32c5-4 9-4 14 0-5 4-9 4-14 0ZM46 32c-5-4-9-4-14 0 5 4 9 4 14 0Z" />
            <circle cx="0" cy="0" r="2" />
            <circle cx="64" cy="0" r="2" />
            <circle cx="0" cy="64" r="2" />
            <circle cx="64" cy="64" r="2" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#alpana-${id})`} />
    </svg>
  );
}

/** A single alpana rosette for decorative accents. */
export function Rosette({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth={1.2} className={className} aria-hidden="true" {...props}>
      <circle cx="60" cy="60" r="8" />
      <circle cx="60" cy="60" r="16" strokeDasharray="2 4" />
      {petals.map((deg) => (
        <path key={deg} d="M60 22c7 9 7 17 0 26-7-9-7-17 0-26Z" transform={`rotate(${deg} 60 60)`} />
      ))}
      <circle cx="60" cy="60" r="52" />
      <circle cx="60" cy="60" r="57" strokeDasharray="1 5" />
    </svg>
  );
}

/** Line silhouette of a bridge over the river — a nod to the city skyline. */
export function BridgeLine({ className = '', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 600 120" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" className={className} aria-hidden="true" {...props}>
      <path d="M0 96h600" />
      <path d="M0 104c40-4 80 4 120 0s80 4 120 0 80 4 120 0 80 4 120 0 80 4 120 0" opacity=".5" />
      {/* towers */}
      <path d="M150 96V18M164 96V18M436 96V18M450 96V18M150 18h14M436 18h14M150 40h14M436 40h14M150 64h14M436 64h14" />
      {/* main truss */}
      <path d="M40 96Q100 70 157 22Q300 84 443 22Q500 70 560 96" />
      <path d="M40 96Q100 80 157 52Q300 98 443 52Q500 80 560 96" opacity=".7" />
      {Array.from({ length: 23 }, (_, i) => {
        const x = 170 + i * 11.6;
        const t = (x - 157) / 286;
        const yTop = 22 + 62 * 4 * t * (1 - t);
        return <path key={i} d={`M${x} ${yTop}L${x + 5.8} 96`} opacity=".45" />;
      })}
      <path d="M60 96L157 30M80 96L157 44M540 96L443 30M520 96L443 44" opacity=".45" />
    </svg>
  );
}

/** Slowly rotating circular text badge. */
export function CircleBadge({ text, className = '' }: { text: string; className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="h-full w-full animate-spin-slow motion-reduce:animate-none">
        <defs>
          <path id={`circle-${id}`} d="M100 100m-78 0a78 78 0 1 1 156 0a78 78 0 1 1-156 0" />
        </defs>
        <text className="fill-current font-sans text-[15px] font-semibold uppercase" letterSpacing="5.2">
          <textPath href={`#circle-${id}`}>{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 m-auto flex h-[46%] w-[46%] items-center justify-center rounded-full bg-terracotta-600 text-ivory">
        <Kulhar className="h-1/2 w-1/2" />
      </div>
    </div>
  );
}
