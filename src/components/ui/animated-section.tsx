'use client';

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function AnimatedSection({
  children,
  className,
  delay = 0,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'li';
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), delay);
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  const Tag = as as 'div';
  return (
    <Tag
      // @ts-expect-error refs across dynamic tags
      ref={ref}
      className={cn('section-fade-in', className)}
    >
      {children}
    </Tag>
  );
}
