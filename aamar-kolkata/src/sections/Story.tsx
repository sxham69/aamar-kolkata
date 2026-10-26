import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { story } from '../data/content';
import { images } from '../data/images';
import { business } from '../data/site';
import { SmartImage } from '../components/SmartImage';
import { Reveal } from '../components/Reveal';
import { Rosette } from '../components/Graphics';

export function Story() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const ySmall = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [60, -60]);

  return (
    <section id="story" ref={ref} aria-labelledby="story-title" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="container-page grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        {/* Images */}
        <Reveal className="relative order-2 lg:order-1 lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:mx-0">
            <SmartImage {...images.story} wrapperClassName="aspect-[3/4] w-[82%] rounded-arch" />
            <motion.div style={{ y: ySmall }} className="absolute -right-0 bottom-[-8%] w-[46%]">
              <SmartImage {...images.storySmall} wrapperClassName="aspect-[4/5] w-full border-[6px] border-cream" />
            </motion.div>
            <Rosette className="absolute -left-10 -top-10 h-28 w-28 text-terracotta/35" />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="relative order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <span aria-hidden="true" className="pointer-events-none absolute -top-16 right-0 select-none font-display text-[8rem] italic leading-none text-terracotta/10 sm:text-[11rem]">
            adda
          </span>
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h2 id="story-title" className="mt-5 text-[2.35rem] font-medium leading-[1.06] sm:text-5xl lg:text-[3.4rem]">
              More Than Coffee. <span className="italic text-coffee">A Little Piece of Kolkata.</span>
            </h2>
          </Reveal>
          {story.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p className={`mt-6 max-w-prose leading-[1.8] ${i === 0 ? 'text-lg text-espresso/85' : 'text-muted'}`}>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <figure className="mt-10 flex items-center gap-5 border-l-2 border-terracotta pl-5">
              <span lang="bn" className="whitespace-nowrap font-bangla text-2xl text-terracotta-600 sm:text-3xl">{business.nameBangla}</span>
              <figcaption className="text-sm leading-snug text-muted">
                <span className="block font-semibold text-espresso">“My Kolkata”</span>
                A café named for the city it calls home.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
