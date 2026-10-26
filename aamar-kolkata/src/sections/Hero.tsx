import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { business, formattedReviewCount } from '../data/site';
import { images } from '../data/images';
import { SmartImage } from '../components/SmartImage';
import { ButtonLink } from '../components/Button';
import { StarRating } from '../components/StarRating';
import { CircleBadge, Rosette } from '../components/Graphics';

const ease = [0.22, 1, 0.36, 1] as const;
const rise = (delay: number) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yMain = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);
  const yCup = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const scaleMain = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.04, 1.14]);

  return (
    <section id="home" ref={ref} aria-labelledby="hero-title" className="relative -mt-20 overflow-hidden bg-ivory pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-36">
      {/* Oversized Bengali watermark */}
      <p
        aria-hidden="true"
        lang="bn"
        className="pointer-events-none absolute -right-4 bottom-0 select-none whitespace-nowrap font-bangla text-[6rem] leading-none text-transparent sm:text-[9rem] lg:right-0 lg:text-[11rem]"
        style={{ WebkitTextStroke: '1px rgba(185,101,72,0.14)' }}
      >
        {business.nameBangla}
      </p>
      <div className="absolute inset-y-0 right-0 hidden w-[38%] bg-cream lg:block" aria-hidden="true" />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="relative z-10 lg:col-span-6 xl:col-span-6">
          <motion.p {...rise(0.05)} className="eyebrow">A little taste of Kolkata</motion.p>
          <motion.h1 {...rise(0.15)} id="hero-title" className="mt-6 text-[2.75rem] font-medium leading-[1.04] tracking-[-0.015em] sm:text-[3.8rem] lg:text-[4rem] xl:text-[4.5rem]">
            Good Coffee.
            <br />
            Great Company.
            <br />
            <span className="italic text-terracotta-600">Kolkata</span> at Heart.
          </motion.h1>
          <motion.p {...rise(0.3)} className="mt-7 max-w-[34rem] text-[1.08rem] leading-relaxed text-muted sm:text-lg">
            A warm neighbourhood café on Northern Avenue, made for unhurried cups, easy conversation and the gentle art of taking a break.
          </motion.p>

          <motion.div {...rise(0.42)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#menu" icon={<ArrowRight />}>Explore Our Menu</ButtonLink>
            <ButtonLink href="#visit" variant="secondary" icon={<MapPin />}>Find Our Café</ButtonLink>
          </motion.div>

          <motion.a
            {...rise(0.55)}
            href="#reviews"
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-espresso/10 bg-ivory/80 py-2 pl-2 pr-5 backdrop-blur transition hover:border-terracotta/40"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso font-display text-lg font-semibold text-cream">{business.rating}</span>
            <span className="flex flex-col gap-1">
              <StarRating value={business.rating} size={15} />
              <span className="text-[0.8rem] text-muted">
                <strong className="font-semibold text-espresso">{formattedReviewCount}</strong> customer reviews
              </span>
            </span>
          </motion.a>
        </div>

        {/* Imagery */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-[86%] max-w-[30rem] sm:w-full lg:ml-auto lg:mr-6">
            <motion.div
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0 round 999px 999px 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0 round 999px 999px 0 0)' }}
              transition={{ duration: 1.3, delay: 0.1, ease }}
              style={{ y: yMain }}
              className="absolute inset-0 overflow-hidden rounded-arch"
            >
              <motion.div style={{ scale: scaleMain }} className="h-full w-full">
                <SmartImage {...images.heroMain} priority wrapperClassName="h-full w-full" />
              </motion.div>
            </motion.div>
            {/* Offset outline arch */}
            <div className="absolute -bottom-4 -left-4 -z-0 h-full w-full rounded-arch border border-terracotta/40" aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7, ease }}
              style={{ y: yCup }}
              className="absolute -bottom-8 -left-5 w-[42%] sm:-left-14"
            >
              <SmartImage {...images.heroCup} priority wrapperClassName="aspect-square w-full rounded-full border-[6px] border-ivory shadow-[0_24px_50px_-24px_rgba(52,35,31,0.55)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: -40 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.9, ease }}
              className="absolute -right-5 top-[8%] h-24 w-24 text-espresso sm:-right-10 sm:h-36 sm:w-36"
            >
              <div className="h-full w-full rounded-full bg-ivory/90 p-1 backdrop-blur">
                <CircleBadge text="Coffee · Conversation · Kolkata · " />
              </div>
            </motion.div>

            <Rosette className="absolute -bottom-10 right-2 h-24 w-24 text-sage/60" />
          </div>
        </div>
      </div>

      <a
        href="#story"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-espresso/55 transition hover:text-espresso lg:flex"
      >
        <span className="flex h-9 w-5 justify-center rounded-full border border-current pt-1.5">
          <span className="h-1.5 w-1 animate-scroll-dot rounded-full bg-current" />
        </span>
        Scroll
      </a>
    </section>
  );
}
