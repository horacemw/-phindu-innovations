'use client';

import { cn } from '@/lib/utils';

export function Logo({ className, variant = 'default' }: { className?: string; variant?: 'default' | 'light' }) {
  const isLight = variant === 'light';
  return (
    <a
      href="#top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={cn('flex items-center gap-3', className)}
      aria-label="Phindu Innovations home"
    >
      <div
        className={cn(
          'grid h-10 w-10 place-items-center rounded-full bg-accent transition-colors',
          isLight ? '' : '',
        )}
      >
        <span className="text-sm font-bold text-white">P</span>
      </div>
      <div>
        <p className={cn('text-sm font-bold leading-tight', isLight ? 'text-white' : 'text-primary dark:text-white')}>
          PHINDU
        </p>
        <p className={cn('text-xs leading-tight', isLight ? 'text-white/70' : 'text-primary/60 dark:text-white/60')}>
          Innovations Ltd
        </p>
      </div>
    </a>
  );
}
