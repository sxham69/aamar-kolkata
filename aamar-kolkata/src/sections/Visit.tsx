import { useState } from 'react';
import { Clock, MapPin, Navigation, Phone } from 'lucide-react';
import { business, links, openingHours } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { AlpanaPattern, BridgeLine } from '../components/Graphics';

const disableMap = import.meta.env.VITE_NO_MAP === '1';

function MapPanel() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative h-full min-h-[22rem] overflow-hidden bg-cream-deep">
      {/* Placeholder shown until (or instead of) the embed */}
      <div className={`absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 text-center transition-opacity duration-700 ${loaded ? 'opacity-0' : 'opacity-100'}`}>
        <AlpanaPattern className="text-coffee" opacity={0.14} />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-terracotta-600 text-ivory shadow-lg">
          <MapPin className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="relative max-w-xs font-display text-xl text-espresso">{business.addressLines[0]}</p>
        <a href={links.mapSearch} target="_blank" rel="noopener noreferrer" className="relative text-sm font-semibold text-terracotta-600 underline underline-offset-4">
          Open in Google Maps<span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      {!disableMap && (
        <iframe
          title={`Map showing ${business.name}, ${business.address}`}
          src={links.mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full border-0 grayscale-[35%] sepia-[15%] transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
    </div>
  );
}

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-title" className="bg-cream py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          id="visit-title"
          eyebrow="Visit Us"
          title={
            <>
              Pull up a chair. <span className="italic text-terracotta-600">We’ll keep it warm.</span>
            </>
          }
          intro="Whether you’re in the neighbourhood or making the trip across town, we’d love to see you. Stop by for a cup and stay as long as you like."
        />

        <div className="mt-14 grid overflow-hidden bg-ivory shadow-[0_30px_60px_-40px_rgba(52,35,31,0.45)] lg:grid-cols-5">
          <Reveal className="relative flex flex-col justify-between p-8 sm:p-12 lg:col-span-2">
            <div>
              <p className="font-display text-3xl font-medium italic text-espresso">{business.name}</p>
              <p className="mt-1 text-sm text-muted">{business.category} · Satpukur, Kolkata</p>

              <dl className="mt-9 space-y-6">
                <div className="flex gap-4">
                  <dt className="mt-0.5 text-terracotta-600"><MapPin className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Address</span></dt>
                  <dd>
                    <address className="not-italic leading-relaxed text-espresso">
                      {business.addressLines.map((l) => <span key={l} className="block">{l}</span>)}
                    </address>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="mt-0.5 text-terracotta-600"><Phone className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Phone</span></dt>
                  <dd>
                    <a href={business.phoneHref} className="text-lg font-semibold text-espresso underline-offset-4 hover:underline">{business.phoneDisplay}</a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="mt-0.5 text-terracotta-600"><Clock className="h-5 w-5" aria-hidden="true" /><span className="sr-only">Opening hours</span></dt>
                  <dd className="leading-relaxed text-muted">{openingHours || 'Opening hours to be confirmed. Please call before visiting.'}</dd>
                </div>
              </dl>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={links.directions} icon={<Navigation />} external>Get Directions</ButtonLink>
              <ButtonLink href={business.phoneHref} variant="secondary" icon={<Phone />}>Call the Café</ButtonLink>
            </div>
            <BridgeLine className="pointer-events-none mt-10 w-full text-sage/45" />
          </Reveal>

          <div className="lg:col-span-3">
            <MapPanel />
          </div>
        </div>
        <p className="mt-4 text-xs text-muted">Map and directions are generated from the café’s supplied address via Google Maps.</p>
      </div>
    </section>
  );
}
