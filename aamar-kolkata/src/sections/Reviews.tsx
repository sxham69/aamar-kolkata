import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { business, formattedReviewCount, links } from '../data/site';
import { StarRating } from '../components/StarRating';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { Rosette } from '../components/Graphics';

export function Reviews() {
  const hasReviewsLink = Boolean(links.reviews);
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32">
      <Rosette className="absolute -left-24 -top-24 h-80 w-80 text-cream/[0.06]" />
      <Rosette className="absolute -bottom-32 -right-20 h-96 w-96 text-terracotta/15" />
      <div className="container-page relative grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow !text-terracotta-light">Reviews</p>
          <h2 id="reviews-title" className="mt-5 text-[2.35rem] font-medium leading-[1.06] !text-cream sm:text-5xl lg:text-[3.6rem]">
            Loved by <span className="italic text-terracotta-light">Café Lovers.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-cream/75">
            Thank you to everyone who has stopped by, shared a table and taken the time to tell others about their visit.
          </p>
          <div className="mt-9">
            <ButtonLink href={hasReviewsLink ? links.reviews : links.mapSearch} variant="outline-light" icon={<ArrowUpRight />} external>
              {hasReviewsLink ? 'Read Our Reviews' : 'Find Us on Google Maps'}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto flex max-w-md flex-col items-center border border-cream/15 px-8 py-12 text-center sm:px-14">
            <span className="absolute -top-3 bg-espresso px-4 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-cream/60">Average rating</span>
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-baseline gap-2 font-display text-[7rem] font-medium leading-none text-cream sm:text-[8.5rem]"
            >
              {business.rating}
              <span className="font-sans text-2xl font-normal text-cream/50">/ 5</span>
            </motion.p>
            <StarRating value={business.rating} size={28} className="mt-5" />
            <p className="mt-5 text-lg">
              Based on <strong className="font-semibold text-terracotta-light">{formattedReviewCount}</strong> reviews
            </p>
            <p className="mt-6 border-t border-cream/15 pt-5 text-xs leading-relaxed text-cream/55">
              Rating and review count as provided by Aamar Kolkata from its public listing.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
