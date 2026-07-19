import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the Phindu Innovations website and services.',
};

const sections = [
  {
    title: '1. Acceptance',
    body: (
      <p>
        By using our website, requesting a quote or engaging our services, you agree to these terms. If you do not
        agree, please do not use the site or engage our services.
      </p>
    ),
  },
  {
    title: '2. Services',
    body: (
      <p>
        Phindu Innovations delivers engineering, aquaculture, aquaponics and civil engineering services, along with
        training, products and advisory. Every project is governed by a separate signed contract that overrides
        these general terms where they conflict.
      </p>
    ),
  },
  {
    title: '3. Website content',
    body: (
      <p>
        All content on this site — text, images, logos, illustrations — is the property of Phindu Innovations or its
        licensors. You may share links and short excerpts with attribution but not republish substantial portions
        without written permission.
      </p>
    ),
  },
  {
    title: '4. Warranties & disclaimers',
    body: (
      <p>
        Calculators and general guidance on this site are provided for indicative purposes only. Design decisions
        must be based on formal engineering studies for your specific site. We disclaim liability for outcomes based
        on informal use of this material.
      </p>
    ),
  },
  {
    title: '5. Payments',
    body: (
      <p>
        Product purchases are payable upfront by bank transfer or mobile money. Project payments follow a milestone
        schedule set out in the contract. Late payment attracts interest at the Reserve Bank of Malawi base rate + 5%.
      </p>
    ),
  },
  {
    title: '6. Limitation of liability',
    body: (
      <p>
        To the extent permitted by law, our liability under any project is limited to the fees paid to us under
        that project. We are not liable for indirect, incidental or consequential losses.
      </p>
    ),
  },
  {
    title: '7. Governing law',
    body: (
      <p>
        These terms are governed by the laws of the Republic of Malawi. Disputes will be resolved by arbitration in
        Lilongwe unless the parties agree otherwise.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="Last updated: 18 July 2026. These are the general terms that govern your use of our website and services."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Terms' }]}
      />
      <article className="pb-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-8 text-primary/80 dark:text-white/80">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-2xl text-primary dark:text-white">{s.title}</h2>
                <div className="mt-3">{s.body}</div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
