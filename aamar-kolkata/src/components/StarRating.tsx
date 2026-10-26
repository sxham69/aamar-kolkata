import { Star } from 'lucide-react';

/** Five stars with a precise partial fill for fractional ratings (e.g. 4.3). */
export function StarRating({ value, size = 18, className = '' }: { value: number; size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} role="img" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <Star className="absolute inset-0 text-terracotta/30" style={{ width: size, height: size }} strokeWidth={1.5} aria-hidden="true" />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="fill-terracotta text-terracotta" style={{ width: size, height: size }} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </span>
        );
      })}
    </span>
  );
}
