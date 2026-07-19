import { cn } from '@/lib/utils';

export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('mask-fade-r flex overflow-hidden', className)}>
      <div
        className={cn('flex shrink-0 items-center gap-16 pr-16 animate-marquee', reverse && '[animation-direction:reverse]')}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn('flex shrink-0 items-center gap-16 pr-16 animate-marquee', reverse && '[animation-direction:reverse]')}
      >
        {children}
      </div>
    </div>
  );
}
