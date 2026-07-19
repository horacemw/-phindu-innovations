'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { site } from '@/lib/site';

const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById('contact');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
};

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary" />
      <div className="absolute inset-0 grid-overlay opacity-[0.04]" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" />

      <div className="container-wide relative z-10 max-w-4xl text-center">
        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.15em] text-accent-300">
          Let's work together
        </span>
        <h2 className="mb-6 text-3xl font-extrabold leading-tight text-white md:text-4xl lg:text-5xl">
          Ready to build the future?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/85">
          Whether you're an NGO planning a project, a farmer scaling a pond or an investor funding
          infrastructure — Phindu Innovations is here to turn your goals into reality.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:bg-accent-600 hover:shadow-xl"
          >
            Get In Touch
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-white/20"
          >
            <Phone size={16} />
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
