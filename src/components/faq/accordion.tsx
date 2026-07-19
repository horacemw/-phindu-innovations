'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export type FaqItem = { q: string; a: React.ReactNode };

export function Accordion({ items, defaultOpen = 0 }: { items: FaqItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="divide-y divide-primary/[0.08] overflow-hidden rounded-xl border border-primary/[0.08] bg-white shadow-sm dark:divide-white/[0.08] dark:border-white/[0.08] dark:bg-white/[0.03]">
      {items.map((it, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-gray-50 dark:hover:bg-white/[0.02]"
            aria-expanded={open === i}
          >
            <span className="text-base font-bold text-primary dark:text-white md:text-lg">{it.q}</span>
            <span
              className={cn(
                'grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-primary/15 text-primary transition-all duration-200 dark:border-white/15 dark:text-white',
                open === i && 'rotate-45 border-accent bg-accent text-white',
              )}
            >
              <Plus className="h-4 w-4" />
            </span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pr-14 text-primary/75 dark:text-white/75">{it.a}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
