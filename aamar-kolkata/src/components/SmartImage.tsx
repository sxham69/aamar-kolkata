import { useState, type ImgHTMLAttributes } from 'react';
import { Armchair, Bean, CakeSlice, Coffee, Croissant, CupSoda, Sandwich } from 'lucide-react';
import type { Motif, Tone } from '../data/images';
import { AlpanaPattern, Kulhar } from './Graphics';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
  alt: string;
  tone?: Tone;
  motif?: Motif;
  /** Classes for the wrapper (controls size, shape and aspect ratio). */
  wrapperClassName?: string;
  priority?: boolean;
};

const toneClasses: Record<Tone, { bg: string; fg: string }> = {
  espresso: { bg: 'bg-espresso', fg: 'text-cream' },
  coffee: { bg: 'bg-coffee', fg: 'text-cream' },
  terracotta: { bg: 'bg-terracotta', fg: 'text-ivory' },
  sage: { bg: 'bg-sage', fg: 'text-ivory' },
  cream: { bg: 'bg-cream-deep', fg: 'text-coffee' },
};

const icons = { cup: Coffee, cold: CupSoda, pastry: Croissant, sandwich: Sandwich, dessert: CakeSlice, beans: Bean, interior: Armchair };

function MotifIcon({ motif, className }: { motif: Motif; className: string }) {
  if (motif === 'chai') return <Kulhar className={className} />;
  const Icon = icons[motif];
  return <Icon className={className} strokeWidth={1.2} aria-hidden="true" />;
}

/**
 * Lazy image that reserves its space, fades in when loaded and falls back to a
 * branded illustrated panel (tone + alpana texture + motif) if it can't be fetched.
 */
export function SmartImage({ src, alt, tone = 'coffee', motif = 'cup', wrapperClassName = '', className = '', priority, ...rest }: Props) {
  const [state, setState] = useState<'loading' | 'loaded' | 'error'>('loading');
  const t = toneClasses[tone];

  return (
    <div className={`relative overflow-hidden ${t.bg} ${wrapperClassName}`}>
      {state === 'error' ? (
        <div role="img" aria-label={alt} className={`absolute inset-0 flex items-center justify-center ${t.fg}`}>
          <AlpanaPattern opacity={0.22} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
          <MotifIcon motif={motif} className="relative h-[28%] max-h-24 min-h-8 w-auto opacity-80" />
        </div>
      ) : (
        <>
          {state === 'loading' && <div className={`absolute inset-0 animate-pulse ${t.fg} opacity-30`}><AlpanaPattern opacity={0.3} /></div>}
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            {...(priority ? { fetchpriority: 'high' } : {})}
            onLoad={() => setState('loaded')}
            onError={() => setState('error')}
            className={`h-full w-full object-cover transition-opacity duration-700 ${state === 'loaded' ? 'opacity-100' : 'opacity-0'} ${className}`}
            {...rest}
          />
        </>
      )}
    </div>
  );
}
