'use client';

import { useEffect, useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { navigation, site } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { useTheme } from '@/components/theme-provider';

export function Header() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navigation.map((n) => n.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onHero = !scrolled;

  const anchor = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-white/95 py-3 shadow-lg backdrop-blur dark:bg-bg-dark/95' : 'bg-transparent py-5',
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          <Logo variant={onHero ? 'light' : 'default'} />

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={anchor(item.href)}
                  className={cn(
                    'rounded-md px-4 py-2 text-sm font-medium transition-all duration-200',
                    onHero
                      ? cn('text-white/90 hover:bg-accent hover:text-white', isActive && 'text-white')
                      : cn('text-primary/70 hover:bg-accent hover:text-white dark:text-white/70', isActive && 'text-primary dark:text-white'),
                  )}
                >
                  {item.name}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={anchor('#contact')}
              className="ml-4 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow transition-colors duration-200 hover:bg-accent-600"
            >
              Get In Touch
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md transition',
                onHero ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-primary/[0.06] dark:text-white dark:hover:bg-white/[0.06]',
              )}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className={cn(
                'inline-flex h-10 w-10 items-center justify-center rounded-md transition',
                onHero ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-primary/[0.06] dark:text-white',
              )}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md transition',
                onHero ? 'text-white/80 hover:bg-white/10 hover:text-white' : 'text-primary/60 hover:bg-primary/[0.06] hover:text-primary dark:text-white/60',
              )}
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="border-t border-primary/[0.08] bg-white shadow-lg dark:border-white/[0.08] dark:bg-bg-dark lg:hidden">
          <nav className="container-wide flex flex-col gap-1 py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={anchor(item.href)}
                className="rounded-md px-4 py-3 text-sm font-medium text-primary/75 transition-colors hover:bg-primary/5 hover:text-primary dark:text-white/75 dark:hover:bg-white/5 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={anchor('#contact')}
              className="mt-2 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-600"
            >
              Get In Touch
            </a>
            <a
              href={`tel:${site.phoneRaw}`}
              className="rounded-md border border-primary/15 px-4 py-3 text-center text-sm font-semibold text-primary transition-colors hover:bg-primary/5 dark:border-white/15 dark:text-white"
            >
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
