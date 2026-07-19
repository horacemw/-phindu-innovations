import { AnimatedSection } from '@/components/ui/animated-section';

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '2,400+', label: 'Farmers Trained' },
  { value: '12', label: 'Districts Served' },
  { value: '2020', label: 'Year Founded' },
];

export function ImpactStats() {
  return (
    <section className="bg-primary-900 py-14">
      <div className="container-wide">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 100}>
              <div className="text-center">
                <p className="mb-2 text-4xl font-extrabold text-accent-300 md:text-5xl">{s.value}</p>
                <p className="text-sm font-medium uppercase tracking-wider text-white/70">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
