'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';

function initials(name: string) {
  return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
}

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const active = testimonials[idx];
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white py-24 dark:bg-bg-dark">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What Clients Say"
            title="Trusted by farmers, NGOs and government."
            description="Six years of engineering credibility, community trust and repeat clients."
            align="center"
            className="!mx-auto"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mx-auto mt-14 max-w-3xl">
            <div className="relative rounded-2xl border border-primary/[0.08] bg-gray-50 p-8 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.03] md:p-12">
              <Quote className="absolute -top-4 left-8 h-10 w-10 rounded-full bg-accent p-2 text-white shadow-lg" />
              <blockquote>
                <p className="text-xl leading-snug text-primary dark:text-white md:text-2xl">
                  “{active.quote}”
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {initials(active.name)}
                  </div>
                  <div>
                    <p className="font-bold text-primary dark:text-white">{active.name}</p>
                    <p className="text-sm text-primary/60 dark:text-white/60">{active.role}</p>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/15 text-primary transition hover:bg-primary/5 dark:border-white/15 dark:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <p className="text-sm text-primary/60 dark:text-white/60">
                {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </p>
              <button
                onClick={next}
                aria-label="Next"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition hover:bg-primary-900"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
