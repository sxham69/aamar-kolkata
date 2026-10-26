import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'outline-light';

const variants: Record<Variant, string> = {
  primary: 'bg-terracotta-600 text-ivory shadow-[0_10px_24px_-12px_rgba(142,70,48,0.8)] hover:bg-terracotta-700',
  secondary: 'border border-espresso/25 text-espresso hover:border-espresso hover:bg-espresso hover:text-cream',
  ghost: 'text-espresso underline-offset-[6px] hover:underline px-0',
  light: 'bg-cream text-espresso hover:bg-ivory',
  'outline-light': 'border border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-espresso',
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; icon?: ReactNode; external?: boolean };

/** Every CTA is a real link (anchor, tel: or maps URL), so it always does something. */
export function ButtonLink({ variant = 'primary', icon, external, className = '', children, ...rest }: Props) {
  return (
    <a
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[0.95rem] font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5 [&_svg]:h-[1.05rem] [&_svg]:w-[1.05rem]">{icon}</span>}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
