import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Img } from '../data/images';
import { SmartImage } from './SmartImage';

type Props = { items: Img[]; index: number | null; onClose: () => void; onChange: (i: number) => void };

/** Accessible image viewer: focus trap, Escape to close, arrow keys to browse. */
export function Lightbox({ items, index, onClose, onChange }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = '';
      prevFocus?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (index === null) return;
    const step = (d: number) => onChange((index + d + items.length) % items.length);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'Tab') {
        const nodes = dialogRef.current?.querySelectorAll<HTMLElement>('button');
        if (!nodes?.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index, items.length, onClose, onChange]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-espresso-900/95 p-4 backdrop-blur-sm sm:p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-cream hover:text-espresso"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative flex w-full max-w-5xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={item.src.replace(/w=\d+/, 'w=1800')}
              alt={item.alt}
              tone={item.tone}
              motif={item.motif}
              wrapperClassName="aspect-[4/3] w-full max-h-[76vh] rounded-sm sm:aspect-[3/2]"
              className="object-contain"
              priority
            />
            <figcaption className="mt-4 text-center text-sm text-cream/75">
              {item.alt} <span className="text-cream/45">· {index + 1} / {items.length} · Representative image</span>
            </figcaption>
          </motion.figure>

          {([-1, 1] as const).map((d) => (
            <button
              key={d}
              type="button"
              aria-label={d < 0 ? 'Previous image' : 'Next image'}
              onClick={(e) => {
                e.stopPropagation();
                onChange((index + d + items.length) % items.length);
              }}
              className={`absolute bottom-5 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition hover:bg-terracotta-600 sm:top-1/2 sm:-translate-y-1/2 ${
                d < 0 ? 'left-[calc(50%-56px)] sm:left-6' : 'right-[calc(50%-56px)] sm:right-6'
              }`}
            >
              {d < 0 ? <ChevronLeft className="h-5 w-5" aria-hidden="true" /> : <ChevronRight className="h-5 w-5" aria-hidden="true" />}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
