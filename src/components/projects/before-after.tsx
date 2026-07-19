'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';

export function BeforeAfter({
  before,
  after,
  labelBefore = 'Before',
  labelAfter = 'After',
}: {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent | TouchEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const percent = ((clientX - rect.left) / rect.width) * 100;
      setPos(Math.max(2, Math.min(98, percent)));
    };
    const up = () => setDragging(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('touchmove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchend', up);
    };
  }, [dragging]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full select-none overflow-hidden rounded-3xl"
      onMouseDown={() => setDragging(true)}
      onTouchStart={() => setDragging(true)}
      style={{ cursor: 'ew-resize' }}
    >
      <Image src={after} alt={labelAfter} fill sizes="100vw" className="object-cover" priority />

      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <div
          className="absolute inset-y-0 left-0"
          style={{ width: `${100 / (pos / 100)}%` }}
        >
          <Image src={before} alt={labelBefore} fill sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-10 flex items-center justify-center"
        style={{ left: `calc(${pos}% - 1px)` }}
      >
        <div className="h-full w-0.5 bg-white/90 shadow-[0_0_18px_rgba(0,0,0,0.35)]" />
        <div className="absolute grid h-10 w-10 place-items-center rounded-full border border-white/50 bg-white/95 text-primary shadow-card">
          <GripVertical className="h-4 w-4" />
        </div>
      </div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur">
        {labelBefore}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
        {labelAfter}
      </span>
    </div>
  );
}
