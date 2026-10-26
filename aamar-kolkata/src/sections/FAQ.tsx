import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { faqs } from '../data/content';
import { business } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId().replace(/:/g, '');

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-ivory py-24 sm:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow="FAQ" title={<>Good to <span className="italic text-terracotta-600">know.</span></>} />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm leading-relaxed text-muted">
              Can’t find what you’re looking for? Call us on{' '}
              <a href={business.phoneHref} className="font-semibold text-espresso underline underline-offset-4">{business.phoneDisplay}</a>.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t border-espresso/15">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              const btnId = `${base}-q${i}`;
              const panelId = `${base}-a${i}`;
              return (
                <li key={f.q} className="border-b border-espresso/15">
                  <h3 className="font-sans">
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left text-[1.08rem] font-semibold text-espresso transition-colors hover:text-terracotta-600"
                    >
                      {f.q}
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-45 border-terracotta-600 bg-terracotta-600 text-ivory' : 'border-espresso/20'}`}>
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-prose pb-6 pr-12 leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
