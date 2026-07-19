import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Accordion } from '@/components/faq/accordion';

const faqs = [
  {
    q: 'How long does a fish pond take to build?',
    a: (
      <p>
        A single 20 × 40 m earthen pond typically takes 3–5 weeks. A 12-pond compound is a 5–9 month
        programme depending on soils and access. We provide a written schedule with every quote.
      </p>
    ),
  },
  {
    q: 'Do you deliver fingerlings countrywide?',
    a: (
      <p>
        Yes. We deliver in aerated transport tanks across Malawi and to select cross-border destinations.
        A survival guarantee applies to scheduled deliveries over 500 fingerlings.
      </p>
    ),
  },
  {
    q: 'What is included in a construction quote?',
    a: (
      <p>
        Site preparation, earthworks, inlet and outlet structures, access roads, spillways where required,
        and a 12-month workmanship guarantee. Every line item is disclosed.
      </p>
    ),
  },
  {
    q: 'Do you handle permits?',
    a: (
      <p>
        Yes — we handle environmental screening, water permits and municipal approvals as part of the design phase.
      </p>
    ),
  },
  {
    q: 'What counts as an emergency?',
    a: (
      <p>
        Fish mortality events, sudden water losses, dam or bund failures, flood incidents and structural failures on
        any Phindu-built asset. Call our hotline for triage and dispatch.
      </p>
    ),
  },
  {
    q: 'Are training certificates recognised?',
    a: (
      <p>
        Yes. Our certificates are recognised by leading NGOs and the Department of Fisheries. The Certified
        Aquaculture Technician track is aligned with national vocational standards.
      </p>
    ),
  },
  {
    q: 'Can you work outside Malawi?',
    a: (
      <p>
        We take selected regional projects. Contact us with your brief and we will confirm capacity within 48 hours.
      </p>
    ),
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-gray-50 py-24 dark:bg-white/[0.02]">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="FAQ"
            title="Everything worth asking, answered."
            description="If you don't find your question here, our team replies to WhatsApp and email within a few hours during office hours."
            align="center"
            className="!mx-auto"
          />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
