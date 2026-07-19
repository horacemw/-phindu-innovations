'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { products, productCategories } from '@/data/products';

export function ProductGrid() {
  const [active, setActive] = useState<(typeof productCategories)[number]>('All');
  const visible = active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <>
      <div className="container-wide">
        <div className="inline-flex flex-wrap gap-1 rounded-full border border-primary/[0.08] p-1 dark:border-white/[0.08]">
          {productCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === c
                  ? 'bg-primary text-bg dark:bg-white dark:text-primary'
                  : 'text-primary/70 hover:text-primary dark:text-white/70 dark:hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="container-wide mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <motion.article
            key={p.slug}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            className="group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary/50 dark:text-white/50">
              {p.category}
            </p>
            <h3 className="mt-2 font-display text-2xl leading-tight text-primary dark:text-white">
              {p.name}
            </h3>
            <p className="mt-3 text-primary/70 dark:text-white/70">{p.description}</p>
            <div className="mt-5 flex items-baseline justify-between border-t border-primary/10 pt-4 dark:border-white/10">
              <p className="font-display text-2xl text-primary dark:text-white">{p.price}</p>
              <p className="text-xs text-primary/50 dark:text-white/50">{p.unit}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </>
  );
}
