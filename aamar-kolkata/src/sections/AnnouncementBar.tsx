import { Phone } from 'lucide-react';
import { business } from '../data/site';

export function AnnouncementBar() {
  return (
    <div className="relative z-50 bg-espresso text-cream">
      <div className="container-page flex h-10 items-center justify-center gap-4 text-[0.8rem] sm:justify-between">
        <p className="flex items-center gap-3 text-[0.78rem] tracking-wide sm:text-[0.8rem]">
          <span className="hidden font-bangla text-[0.95rem] text-terracotta-light sm:inline" lang="bn">{business.nameBangla}</span>
          <span className="hidden h-3 w-px bg-cream/25 sm:inline" aria-hidden="true" />
          <span>Your neighbourhood coffee escape in Kolkata.</span>
        </p>
        <a href={business.phoneHref} className="hidden items-center gap-2 text-cream/80 transition hover:text-cream sm:inline-flex">
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          {business.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
