'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/section-heading';

const steps = [
  { title: 'Discover', body: 'A free introductory call and site walk to understand your goals, land and constraints.' },
  { title: 'Design', body: 'Detailed engineering, drawings, bills of quantities and permits — quoted upfront.' },
  { title: 'Build', body: 'Our own field crews and vetted contractors deliver to spec, on schedule.' },
  { title: 'Commission', body: 'Stocking, staff training, standard operating procedures and formal handover.' },
  { title: 'Support', body: 'Optional service contracts, farm visits and 24/7 emergency hotline for the life of your operation.' },
];

export function Process() {
  return (
    <section className="section border-t border-primary/[0.08] dark:border-white/[0.08]">
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)]">
          <SectionHeading
            eyebrow="How we work"
            title="A calm, structured process."
            description="Five stages, in the same order every time. Predictable delivery, transparent pricing, documented handover."
          />
          <ol className="divide-y divide-primary/10 dark:divide-white/10">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-[3rem_1fr] gap-6 py-6 md:grid-cols-[4rem_10rem_1fr]"
              >
                <span className="font-mono text-sm text-primary/40 dark:text-white/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl text-primary dark:text-white">{s.title}</h3>
                <p className="col-span-2 text-primary/70 dark:text-white/70 md:col-span-1">{s.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
