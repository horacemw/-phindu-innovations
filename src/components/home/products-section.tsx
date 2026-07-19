import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';
import { products } from '@/data/products';

const showcase = products.slice(0, 6);

export function ProductsSection() {
  return (
    <section id="products" className="bg-gray-50 py-24 dark:bg-white/[0.02]">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Products"
            title="Stock, feed and tools your farm needs."
            description="Certified fingerlings, extruded feeds, farm equipment and water-testing kits — sourced from tested suppliers, delivered nationwide."
            align="center"
            className="!mx-auto"
          />
        </AnimatedSection>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {showcase.map((p, i) => (
            <AnimatedSection key={p.slug} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-xl border border-primary/[0.08] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-primary dark:text-white">{p.name}</h3>
                  <div className="mt-4 flex items-baseline justify-between border-t border-primary/[0.08] pt-4 dark:border-white/[0.08]">
                    <p className="text-xl font-bold text-primary dark:text-white">{p.price}</p>
                    <p className="text-xs text-primary/50 dark:text-white/50">{p.unit}</p>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
