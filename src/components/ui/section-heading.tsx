import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={cn(
          'mt-3 text-3xl leading-tight md:text-4xl lg:text-5xl',
          'font-extrabold text-balance',
          light ? 'text-white' : 'text-primary dark:text-white',
        )}
      >
        {title}
      </h2>
      <div className={cn('section-title-underline mt-5', align === 'center' && 'justify-center')}>
        <span />
        <span />
      </div>
      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-base leading-relaxed md:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-white/80' : 'text-primary/70 dark:text-white/70',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
