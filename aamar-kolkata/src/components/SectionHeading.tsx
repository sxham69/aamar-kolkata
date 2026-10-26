import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = { eyebrow: string; title: ReactNode; intro?: ReactNode; align?: 'left' | 'center'; tone?: 'dark' | 'light'; id?: string };

export function SectionHeading({ eyebrow, title, intro, align = 'left', tone = 'dark', id }: Props) {
  const center = align === 'center';
  return (
    <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className={`eyebrow ${center ? 'justify-center' : ''} ${tone === 'light' ? '!text-terracotta-light' : ''}`}>{eyebrow}</p>
      <h2 id={id} className={`mt-5 text-[2.35rem] font-medium leading-[1.06] sm:text-5xl lg:text-[3.6rem] ${tone === 'light' ? '!text-cream' : ''}`}>
        {title}
      </h2>
      {intro && <p className={`mt-5 max-w-prose text-[1.05rem] leading-relaxed ${center ? 'mx-auto' : ''} ${tone === 'light' ? 'text-cream/75' : 'text-muted'}`}>{intro}</p>}
    </Reveal>
  );
}
