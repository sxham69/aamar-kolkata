import { ArrowRight, Navigation, Phone } from 'lucide-react';
import { images } from '../data/images';
import { business, links } from '../data/site';
import { SmartImage } from '../components/SmartImage';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';

export function FinalCTA() {
  return (
    <section aria-labelledby="cta-title" className="bg-ivory px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <SmartImage {...images.finalCta} wrapperClassName="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/75 to-espresso/40" aria-hidden="true" />
        <div className="container-page relative py-28 sm:py-36">
          <Reveal className="max-w-2xl">
            <p className="eyebrow !text-terracotta-light">See you soon</p>
            <h2 id="cta-title" className="mt-6 text-[2.5rem] font-medium leading-[1.05] !text-cream sm:text-6xl lg:text-[4.2rem]">
              Your Next Favourite <span className="italic text-terracotta-light">Coffee Moment</span> Starts Here.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cream/80">{business.addressLines.join(', ')}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#menu" icon={<ArrowRight />}>Explore the Menu</ButtonLink>
              <ButtonLink href={links.directions} variant="light" icon={<Navigation />} external>Get Directions</ButtonLink>
              <ButtonLink href={business.phoneHref} variant="outline-light" icon={<Phone />}>Call the Café</ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
