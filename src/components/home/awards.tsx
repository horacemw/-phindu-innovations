import { Award, Trophy, ShieldCheck, Medal, BadgeCheck } from 'lucide-react';

const awards = [
  { icon: Trophy, title: 'National Aquaculture Award', body: 'Best emerging aquaculture engineering firm — 2024' },
  { icon: Medal, title: 'Innovation Prize', body: 'FAO Malawi Aquaponics Innovation Grant — 2023' },
  { icon: Award, title: 'Community Impact', body: 'District Council Recognition — Liwonde Compound' },
  { icon: BadgeCheck, title: 'Certified Consultants', body: 'Board of Engineers Malawi · MAAS Member' },
  { icon: ShieldCheck, title: 'ISO 9001-aligned', body: 'Quality management systems in place across delivery' },
];

export function Awards() {
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="grid gap-8 rounded-4xl border border-primary/[0.06] bg-white p-8 shadow-soft dark:border-white/[0.06] dark:bg-white/[0.02] md:p-12 lg:grid-cols-[1.1fr_1.5fr]">
          <div>
            <span className="eyebrow">Recognition</span>
            <h2 className="mt-4 text-display-2 text-primary dark:text-white">
              Awards, certifications and standards that back our work.
            </h2>
            <p className="mt-5 text-primary/70 dark:text-white/70">
              We invest in the quality systems, memberships and continuing education that keep our engineering
              accountable and credible.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {awards.map((a) => (
              <li key={a.title} className="group flex gap-4 rounded-3xl border border-primary/5 bg-bg p-5 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-white/5 dark:bg-white/[0.02]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent/15 text-accent transition group-hover:scale-110">
                  <a.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-primary dark:text-white">{a.title}</p>
                  <p className="mt-1 text-sm text-primary/70 dark:text-white/70">{a.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
