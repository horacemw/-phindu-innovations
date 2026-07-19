import { Marquee } from '@/components/ui/marquee';

const partners = [
  'Ministry of Fisheries',
  'LUANAR',
  'FAO Malawi',
  'World Vision',
  'GIZ',
  'Concern Universal',
  'Nutriflex',
  'AGRA',
  'Aquaculture Africa',
];

export function Partners() {
  return (
    <section className="border-y border-primary/[0.06] bg-white/40 py-10 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="container-wide">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-primary/50 dark:text-white/40">
          Trusted by leading organisations across Africa
        </p>
        <Marquee>
          {partners.map((p) => (
            <span
              key={p}
              className="whitespace-nowrap font-display text-2xl text-primary/40 transition hover:text-primary dark:text-white/40 dark:hover:text-white"
            >
              {p}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
