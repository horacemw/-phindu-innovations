'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Truly integrated team',
    body: 'Aquaculture specialists, civil engineers and agronomists under one roof — no finger-pointing when things get technical.',
  },
  {
    title: 'Field-tested designs',
    body: 'Every design we sign has been built and measured. We know what works in Malawian soils and climates.',
  },
  {
    title: 'Transparent pricing',
    body: 'Detailed BoQs, fixed-price options and clear change management. No surprises on invoice day.',
  },
  {
    title: 'Community-first delivery',
    body: 'We hire, train and buy locally. Projects leave stronger communities in their wake.',
  },
  {
    title: '24/7 emergency support',
    body: "Fish farms don't take weekends off. Neither does our hotline for project clients.",
  },
  {
    title: 'Documented handover',
    body: 'As-built drawings, standard operating procedures and training records for every project.',
  },
];

export function WhyUs() {
  return (
    <section className="section border-t border-primary/[0.08] dark:border-white/[0.08]">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <span className="eyebrow">Why Phindu</span>
            <h2 className="mt-6 text-display-2 text-balance text-primary dark:text-white">
              Six reasons clients choose us — and stay with us.
            </h2>
            <div className="mt-8 relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src="/images/services/farm-visit.svg"
                alt="Phindu engineering team on site"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <ol className="divide-y divide-primary/10 dark:divide-white/10">
            {reasons.map((r, i) => (
              <motion.li
                key={r.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="grid grid-cols-[3rem_1fr] gap-4 py-6"
              >
                <span className="font-mono text-sm text-primary/40 dark:text-white/40">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-xl text-primary dark:text-white">{r.title}</h3>
                  <p className="mt-2 text-primary/70 dark:text-white/70">{r.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
