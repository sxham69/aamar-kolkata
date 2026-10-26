import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, Menu, Phone, X } from 'lucide-react';
import { business, links, navItems } from '../data/site';
import { useActiveSection, useScrolled } from '../hooks/useActiveSection';
import { Wordmark } from '../components/Wordmark';
import { ButtonLink } from '../components/Button';

const ids = navItems.map((n) => n.id);

export function Navbar() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        scrolled || open ? 'bg-ivory/90 shadow-[0_1px_0_rgba(52,35,31,0.08)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main" className={`container-page flex items-center justify-between transition-[height] duration-500 ${scrolled ? 'h-[4.25rem]' : 'h-20'}`}>
        <a href="#home" aria-label={`${business.name}, back to top`} onClick={() => setOpen(false)} className="relative z-10">
          <Wordmark />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'location' : undefined}
                className={`relative px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${active === item.id ? 'text-espresso' : 'text-espresso/65 hover:text-espresso'}`}
              >
                {item.label}
                {active === item.id && (
                  <motion.span layoutId="nav-dot" className="absolute inset-x-3.5 -bottom-0.5 h-px bg-terracotta" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ButtonLink href="#menu" className="hidden !min-h-11 !px-5 text-sm sm:inline-flex">
            Explore Menu
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-espresso/15 text-espresso transition hover:border-espresso/40 lg:hidden"
          >
            <AnimatePresence initial={false} mode="wait">
              <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full h-[calc(100dvh-100%)] overflow-y-auto bg-ivory lg:hidden"
          >
            <motion.ul
              className="container-page flex flex-col pt-6"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.12 } } }}
            >
              {navItems.map((item, i) => (
                <motion.li key={item.id} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }} className="border-b border-espresso/10">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === item.id ? 'location' : undefined}
                    className="flex items-baseline gap-4 py-4 font-display text-[1.9rem] text-espresso"
                  >
                    <span className="font-sans text-xs font-semibold tracking-widest text-terracotta-600">0{i + 1}</span>
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="container-page mt-8 flex flex-col gap-3 pb-10">
              <ButtonLink href="#menu" onClick={() => setOpen(false)}>Explore Menu</ButtonLink>
              <div className="grid grid-cols-2 gap-3">
                <ButtonLink href={business.phoneHref} variant="secondary" icon={<Phone />}>Call</ButtonLink>
                <ButtonLink href={links.directions} variant="secondary" icon={<MapPin />} external>Directions</ButtonLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
