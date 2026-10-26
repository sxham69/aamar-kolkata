import { useMemo, useRef, useState, type KeyboardEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Info, Phone } from 'lucide-react';
import { categories, menuIsSample, menuItems, type CategoryId } from '../data/menu';
import { business, links } from '../data/site';
import { SectionHeading } from '../components/SectionHeading';
import { SmartImage } from '../components/SmartImage';
import { ButtonLink } from '../components/Button';
import { Reveal } from '../components/Reveal';

const formatPrice = (p: number | null) => (p === null ? 'Price on request' : `₹${p}`);

export function Menu() {
  const [active, setActive] = useState<CategoryId>('coffee');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const items = useMemo(() => menuItems.filter((m) => m.category === active), [active]);

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = categories.length - 1;
    const next = e.key === 'ArrowRight' ? (i === last ? 0 : i + 1) : e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1) : e.key === 'Home' ? 0 : e.key === 'End' ? last : null;
    if (next === null) return;
    e.preventDefault();
    setActive(categories[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="menu" aria-labelledby="menu-title" className="relative bg-ivory py-24 sm:py-32">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="menu-title"
            eyebrow="Signature Menu"
            title={
              <>
                Small pleasures, <span className="italic text-terracotta-600">served warm.</span>
              </>
            }
            intro="A preview of the kind of cups and bites to slow down with. Choose a category to browse."
          />
          {menuIsSample && (
            <Reveal className="flex max-w-sm items-start gap-3 border border-sage/40 bg-sage/10 p-4 text-sm leading-relaxed text-sage-600">
              <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>
                <strong className="font-semibold">Sample menu.</strong> Items, descriptions and prices are placeholders awaiting confirmation by Aamar Kolkata.
              </p>
            </Reveal>
          )}
        </div>

        {/* Tabs */}
        <Reveal className="-mx-5 mt-12 overflow-x-auto px-5 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div role="tablist" aria-label="Menu categories" className="inline-flex min-w-max gap-1 rounded-full border border-espresso/10 bg-cream p-1.5">
            {categories.map((c, i) => {
              const selected = c.id === active;
              return (
                <button
                  key={c.id}
                  ref={(el) => (tabRefs.current[i] = el)}
                  role="tab"
                  id={`tab-${c.id}`}
                  aria-selected={selected}
                  aria-controls="menu-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(c.id)}
                  onKeyDown={(e) => onTabKey(e, i)}
                  className={`relative min-h-11 rounded-full px-5 text-sm font-semibold transition-colors ${selected ? 'text-cream' : 'text-espresso/70 hover:text-espresso'}`}
                >
                  {selected && <motion.span layoutId="menu-pill" className="absolute inset-0 rounded-full bg-espresso" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                  <span className="relative">{c.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Items */}
        <div id="menu-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-10">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {items.map((item) => (
                <motion.li
                  key={item.name}
                  variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                  className="group flex flex-col bg-cream/60 transition-colors duration-500 hover:bg-cream"
                >
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src={item.image}
                      alt={`${item.name} (representative photo)`}
                      tone={item.tone}
                      motif={item.motif}
                      wrapperClassName="aspect-[4/3] w-full"
                      className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                    />
                    {menuIsSample && (
                      <span className="absolute left-3 top-3 bg-ivory/90 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-espresso backdrop-blur">
                        Sample
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-[1.45rem] font-medium">{item.name}</h3>
                      <span className="mb-1 flex-1 border-b border-dotted border-espresso/25" aria-hidden="true" />
                      <p className="font-semibold text-terracotta-600">
                        {formatPrice(item.price)}
                        {menuIsSample && item.price !== null && <span className="sr-only"> (sample price)</span>}
                      </p>
                    </div>
                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
          {links.fullMenu ? (
            <ButtonLink href={links.fullMenu} variant="secondary" external>Explore Full Menu</ButtonLink>
          ) : (
            <>
              <p className="font-display text-xl italic text-coffee">The complete menu is coming soon.</p>
              <ButtonLink href={business.phoneHref} variant="secondary" icon={<Phone />}>Call to Ask About Today’s Menu</ButtonLink>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
