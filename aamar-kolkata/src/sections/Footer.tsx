import { business, links, navItems, socials } from '../data/site';
import { Wordmark } from '../components/Wordmark';
import { BridgeLine } from '../components/Graphics';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-espresso text-cream">
      <div className="container-page relative pt-20">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-sm leading-relaxed text-cream/70">
              A warm neighbourhood café in Satpukur, Kolkata, for good coffee, easy company and a comfortable break from the everyday.
            </p>
            <p lang="bn" className="mt-6 font-bangla text-2xl text-terracotta-light">{business.nameBangla}</p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-cream/50">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((n) => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-cream/80 transition hover:text-cream">{n.label}</a>
                </li>
              ))}
              <li><a href="#faq" className="text-cream/80 transition hover:text-cream">FAQ</a></li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-cream/50">Find us</h2>
            <address className="mt-5 not-italic leading-relaxed text-cream/80">
              {business.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
            <a href={links.directions} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-terracotta-light underline-offset-4 hover:underline">
              Get directions<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-cream/50">Call</h2>
            <a href={business.phoneHref} className="mt-5 inline-block font-display text-2xl text-cream transition hover:text-terracotta-light">
              {business.phoneDisplay}
            </a>
            {socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-4">
                {socials.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-cream/80 hover:text-cream">{s.label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <BridgeLine className="mx-auto w-full max-w-2xl text-cream/15" />
        <div className="flex flex-col gap-2 border-t border-cream/10 py-7 text-xs text-cream/50 sm:flex-row sm:justify-between">
          <p>© {year} {business.name}. All rights reserved.</p>
          <p>Photography shown is representative.</p>
        </div>
      </div>
    </footer>
  );
}
