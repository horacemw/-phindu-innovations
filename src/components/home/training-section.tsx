import Image from 'next/image';
import { Users, Building2, GraduationCap, Briefcase, Award, Sprout, type LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';

const programmes: { icon: LucideIcon; title: string; format: string; body: string }[] = [
  { icon: Sprout, title: 'Farmer Field Schools', format: '5 days · In-person', body: 'Hands-on training at a working demonstration farm.' },
  { icon: Building2, title: 'Corporate Training', format: 'On-site · Custom', body: 'Modules for hatcheries, commercial farms and processors.' },
  { icon: GraduationCap, title: 'Online Courses', format: 'Self-paced', body: 'Video lessons, live cohorts and a digital certificate.' },
  { icon: Briefcase, title: 'Internships', format: '3 months · Paid', body: 'Structured rotation through design, build and operations.' },
  { icon: Users, title: 'Capacity Building', format: 'For NGOs · Custom', body: 'Multi-week programmes for extension teams and cooperatives.' },
  { icon: Award, title: 'Certification', format: 'Assessed · 2 days', body: 'Certified Aquaculture Technician track aligned to national standards.' },
];

export function TrainingSection() {
  return (
    <section id="training" className="bg-white py-24 dark:bg-bg-dark">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Training"
              title="Practical, certifiable training."
              description="From smallholder farmers to hatchery operators to NGO field officers — training that produces measurable, on-farm results."
            />
            <div className="mt-8 relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/services/training.svg"
                alt="Training session"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {programmes.map((p) => (
                <div
                  key={p.title}
                  className="group rounded-xl border border-primary/[0.08] bg-gray-50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03]"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <p.icon size={18} />
                  </div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-primary/50 dark:text-white/50">
                    {p.format}
                  </p>
                  <h3 className="mt-1 text-base font-bold text-primary dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-primary/70 dark:text-white/70">{p.body}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
