import Image from 'next/image';
import { MapPin, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';
import { projects } from '@/data/projects';

const project = projects[0];
const others = projects.slice(1);

export function FeatureProject() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-bg-dark">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work across Malawi."
            description="Aquaculture compounds, aquaponics facilities, hatcheries, flood protection and civil engineering — delivered from design to commissioning."
            align="center"
            className="!mx-auto"
          />
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Featured Case Study</span>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-primary dark:text-white md:text-3xl">
                {project.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-primary/60 dark:text-white/60">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} className="text-accent" /> {project.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={14} className="text-accent" /> {project.year}
                </span>
              </div>
              <p className="mt-5 leading-relaxed text-primary/70 dark:text-white/70">{project.summary}</p>
              <dl className="mt-8 grid grid-cols-2 gap-6 rounded-xl border border-primary/[0.08] bg-gray-50 p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:grid-cols-4">
                {project.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="text-xs uppercase tracking-widest text-primary/50 dark:text-white/50">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-xl font-bold text-primary dark:text-white">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </AnimatedSection>

        {/* Other projects */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 80}>
                <article className="group h-full overflow-hidden rounded-xl border border-primary/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.cover}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {p.category}
                    </p>
                    <h4 className="mt-2 text-lg font-bold leading-tight text-primary dark:text-white">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-xs text-primary/60 dark:text-white/60">
                      {p.location} · {p.year}
                    </p>
                    <p className="mt-3 text-sm text-primary/70 dark:text-white/70">{p.summary}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
