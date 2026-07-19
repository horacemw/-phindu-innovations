'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export function NewsletterForm({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    await new Promise((r) => setTimeout(r, 700));
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3500);
  };

  const isDark = variant === 'dark';

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div
        className={cn(
          'flex items-center gap-2 border-b py-2 transition-colors',
          isDark
            ? 'border-white/25 focus-within:border-white'
            : 'border-primary/20 focus-within:border-primary dark:border-white/20 dark:focus-within:border-white',
        )}
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className={cn(
            'flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-current/40',
            isDark ? 'text-white' : 'text-primary dark:text-white',
          )}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className={cn(
            'inline-flex items-center gap-2 text-sm font-medium transition disabled:opacity-70',
            isDark ? 'text-white' : 'text-primary dark:text-white',
          )}
        >
          {status === 'success' ? (
            <>
              <Check className="h-4 w-4" /> Subscribed
            </>
          ) : (
            <>
              Subscribe <ArrowRight className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>
      <p className={cn('mt-2 text-xs', isDark ? 'text-white/50' : 'text-primary/50 dark:text-white/50')}>
        One article a month. Unsubscribe any time.
      </p>
    </form>
  );
}
