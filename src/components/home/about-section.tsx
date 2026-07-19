'use client';

import { CheckCircle, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';

const highlights = [
  'Aquaculture, aquaponics and civil engineering under one roof',
  'Serving farmers, NGOs, government and commercial enterprises',
  'Commitment to sustainability and community-first delivery',
  'Documented handover and 24/7 emergency support',
];

const scrollTo = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
};

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-bg-dark">
      <div className="container-wide">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left card */}
          <AnimatedSection>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-900 to-primary p-10 text-white shadow-2xl">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-300">
                  WHO WE ARE
                </p>
                <h3 className="mb-4 text-2xl font-bold leading-tight">
                  Engineering that shows up on site.
                </h3>
                <p className="text-sm leading-relaxed text-white/80">
                  Phindu Innovations is a multi-disciplinary engineering firm from Lilongwe, delivering
                  aquaculture engineering, aquaponics systems and civil engineering solutions. We integrate
                  design, build, train and support so you have one accountable partner from feasibility to
                  first harvest.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
                  {[
                    { label: 'Sectors', value: '3' },
                    { label: 'Founded', value: '2020' },
                    { label: 'Team', value: '38' },
                    { label: 'Districts', value: '12' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold text-accent-300">{stat.value}</p>
                      <p className="text-xs text-white/60">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 flex h-24 w-24 rotate-6 items-center justify-center rounded-xl bg-accent shadow-lg">
                <div className="-rotate-6 text-center text-white">
                  <p className="text-xs font-bold leading-tight">BUILDING</p>
                  <p className="text-xs leading-tight">FOR</p>
                  <p className="text-xs font-bold leading-tight">AFRICA</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right content */}
          <AnimatedSection delay={200}>
            <SectionHeading
              eyebrow="Our Identity"
              title="We don't just plan — we build."
              description="At Phindu Innovations, we're driven by a simple belief: progress is built through action, engineering integrity, and the discipline to do small things well every day."
            />

            <ul className="mb-8 mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-primary/80 dark:text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              onClick={scrollTo('services')}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-900"
            >
              Explore Our Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
