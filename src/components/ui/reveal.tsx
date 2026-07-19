'use client';

import { motion, type Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
  }),
};

type RevealTag = 'div' | 'li' | 'section' | 'article';

export function Reveal({
  children,
  index = 0,
  as = 'div',
  className,
}: {
  children: React.ReactNode;
  index?: number;
  as?: RevealTag;
  className?: string;
}) {
  const shared = {
    className: cn(className),
    custom: index,
    variants,
    initial: 'hidden' as const,
    whileInView: 'show' as const,
    viewport: { once: true, amount: 0.2 },
  };

  if (as === 'li') return <motion.li {...shared}>{children}</motion.li>;
  if (as === 'section') return <motion.section {...shared}>{children}</motion.section>;
  if (as === 'article') return <motion.article {...shared}>{children}</motion.article>;
  return <motion.div {...shared}>{children}</motion.div>;
}
