'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <section className={cn('relative pb-16 pt-40 md:pb-24 md:pt-48', className)}>
      <div className="container-wide relative">
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className={cn(
              'mb-6 flex flex-wrap items-center gap-1.5 text-xs text-primary/60 dark:text-white/60',
              align === 'center' && 'justify-center',
            )}
          >
            {breadcrumbs.map((b, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {b.href ? (
                  <Link href={b.href} className="hover:text-primary dark:hover:text-white">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-primary dark:text-white">{b.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center')}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 text-display-1 text-balance text-primary dark:text-white">{title}</h1>
          {description && (
            <p className="mt-6 max-w-2xl text-lg text-pretty text-primary/70 dark:text-white/70">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
