'use client';

import { ArrowRight, ChevronDown } from 'lucide-react';

const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
};

const sectors = ['Aquaculture', 'Aquaponics', 'Civil Engineering', 'Training', 'Products'];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary" />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-96 w-96 animate-pulse rounded-full bg-secondary/25 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-80 w-80 animate-pulse rounded-full bg-accent/15 blur-3xl [animation-delay:1s]" />
        <div className="absolute -bottom-20 left-1/3 h-72 w-72 animate-pulse rounded-full bg-secondary/20 blur-3xl [animation-delay:.5s]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-[0.04]" />

      {/* Content */}
      <div className="container-wide relative z-10 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-sm font-medium text-white/90">Lilongwe, Malawi</span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          WELCOME TO{' '}
          <span className="block text-accent-300">PHINDU INNOVATIONS</span>
          <span className="mt-2 block text-2xl font-light text-white/80 sm:text-3xl md:text-4xl">
            Engineering Sustainable Aquaculture
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-white/85 sm:text-xl md:text-2xl">
          Your trusted partner for fish ponds, aquaponics and civil engineering across{' '}
          <span className="font-semibold text-accent-300">Malawi</span> and{' '}
          <span className="font-semibold text-accent-300">beyond</span>.
        </p>

        {/* Sector pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {sectors.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-all duration-200 hover:border-accent/50 hover:bg-accent/20"
            >
              {s}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#about"
            onClick={scrollTo('about')}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:bg-accent-600 hover:shadow-xl"
          >
            Discover Our Story
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            onClick={scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
          >
            Our Services
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex animate-bounce flex-col items-center">
          <span className="mb-2 text-xs uppercase tracking-widest text-white/60">Scroll</span>
          <ChevronDown size={20} className="text-white/60" />
        </div>
      </div>
    </section>
  );
}
