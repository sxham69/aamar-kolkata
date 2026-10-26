import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = HTMLMotionProps<'div'> & { delay?: number; y?: number };

/** Fades and lifts content into view once, as it enters the viewport. */
export function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Container + item variants for staggered card entrances. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};
