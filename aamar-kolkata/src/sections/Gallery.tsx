import { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { gallery } from '../data/images';
import { SectionHeading } from '../components/SectionHeading';
import { SmartImage } from '../components/SmartImage';
import { Lightbox } from '../components/Lightbox';
import { staggerChild, staggerParent } from '../components/Reveal';

/** Editorial grid placements (desktop: 4 columns, mobile: 2). */
const spans = [
  'col-span-2 row-span-2',
  'row-span-2',
  '',
  '',
  'row-span-2',
  'lg:col-span-2',
  'lg:row-span-2',
  'col-span-2',
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="gallery-title"
            eyebrow="Gallery"
            title={
              <>
                Moments worth <span className="italic text-terracotta-600">lingering over.</span>
              </>
            }
          />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            Representative imagery for this design. To be replaced with photographs of Aamar Kolkata.
          </p>
        </div>

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid grid-flow-row-dense auto-rows-[9.5rem] grid-cols-2 gap-3 sm:auto-rows-[12rem] sm:gap-4 lg:auto-rows-[13.5rem] lg:grid-cols-4"
        >
          {gallery.map((img, i) => (
            <motion.li key={img.src} variants={staggerChild} className={spans[i] ?? ''}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View larger: ${img.alt}`}
                className="group relative block h-full w-full overflow-hidden"
              >
                <SmartImage {...img} wrapperClassName="h-full w-full" className="transition-transform duration-[1.4s] ease-out group-hover:scale-[1.07]" />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/25" aria-hidden="true" />
                <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-ivory/90 text-espresso opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <Lightbox items={gallery} index={index} onClose={close} onChange={setIndex} />
    </section>
  );
}
