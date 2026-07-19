import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';
import { services } from '@/data/services';

const visible = services.slice(0, 9);

const palette: Record<string, { bg: string; icon: string }> = {
  Aquaculture: { bg: 'bg-secondary/10', icon: 'text-secondary' },
  Engineering: { bg: 'bg-primary/10', icon: 'text-primary dark:text-white' },
  Advisory: { bg: 'bg-accent/10', icon: 'text-accent' },
  Products: { bg: 'bg-clay/10', icon: 'text-clay' },
};

export function ServicePreview() {
  return (
    <section id="services" className="bg-gray-50 py-24 dark:bg-white/[0.02]">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Our Expertise"
            title="Six Pillars of Excellence"
            description="We operate across aquaculture, aquaponics and civil engineering — delivering comprehensive solutions that drive growth and sustainability."
            align="center"
            className="!mx-auto"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((s, i) => {
            const c = palette[s.category] ?? palette.Advisory;
            return (
              <AnimatedSection key={s.slug} delay={i * 80}>
                <div className="group flex h-full flex-col rounded-xl border border-primary/[0.08] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${c.bg} transition-transform duration-200 group-hover:scale-110`}
                  >
                    <s.icon size={22} className={c.icon} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary/50 dark:text-white/50">
                    {s.category}
                  </p>
                  <h3 className="mb-3 mt-1 text-lg font-bold text-primary dark:text-white">{s.title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-primary/60 dark:text-white/60">
                    {s.short}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
