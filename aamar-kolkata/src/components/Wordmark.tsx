import { business } from '../data/site';

/** Typographic wordmark: italic Playfair "Aamar" over a tracked "KOLKATA", with an arch monogram. */
export function Wordmark({ tone = 'dark', className = '' }: { tone?: 'dark' | 'light'; className?: string }) {
  const main = tone === 'dark' ? 'text-espresso' : 'text-cream';
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 40 48" className="h-9 w-auto shrink-0" aria-hidden="true">
        <path d="M2 46V20a18 18 0 0 1 36 0v26Z" className="fill-terracotta-600" />
        <path d="M8 46V21a12 12 0 0 1 24 0v25" fill="none" stroke="#F8F1E7" strokeWidth="1.2" opacity=".7" />
        <text x="20" y="38" textAnchor="middle" className="fill-ivory font-display" fontSize="17" fontStyle="italic" fontWeight="600">
          ak
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.45rem] font-semibold italic tracking-tight ${main}`}>Aamar</span>
        <span className={`mt-0.5 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.42em] ${tone === 'dark' ? 'text-terracotta-600' : 'text-terracotta-light'}`}>
          Kolkata
        </span>
      </span>
      <span className="sr-only">{business.name}</span>
    </span>
  );
}
