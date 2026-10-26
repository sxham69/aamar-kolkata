import { motion } from 'framer-motion';
import { Coffee, House, MessagesSquare, Sun } from 'lucide-react';
import { features } from '../data/content';
import { SectionHeading } from '../components/SectionHeading';
import { staggerChild, staggerParent } from '../components/Reveal';
import { AlpanaPattern } from '../components/Graphics';

const icons = { home: House, coffee: Coffee, chat: MessagesSquare, sun: Sun };

export function WhyVisit() {
  return (
    <section aria-labelledby="why-title" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <AlpanaPattern className="text-sage" opacity={0.18} />
      <div className="container-page relative">
        <SectionHeading
          id="why-title"
          align="center"
          eyebrow="Why Visit Us"
          title={
            <>
              Come for the coffee. <span className="italic text-coffee">Stay for the moment.</span>
            </>
          }
          intro="What we hope every visit to Aamar Kolkata feels like."
        />
        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid border-t border-espresso/15 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f, i) => {
            const Icon = icons[f.icon];
            return (
              <motion.li
                key={f.title}
                variants={staggerChild}
                className="group relative border-b border-espresso/15 px-2 py-10 sm:px-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:[&:not(:last-child)]:border-r"
              >
                <span className="font-display text-sm italic text-terracotta-600">0{i + 1}</span>
                <span className="mt-6 flex h-14 w-14 items-center justify-center rounded-full border border-sage/50 text-sage-600 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-terracotta group-hover:bg-terracotta-600 group-hover:text-ivory">
                  <Icon className="h-6 w-6" strokeWidth={1.4} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.text}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
