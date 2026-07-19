import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Phindu Innovations collects, uses, stores and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated: 18 July 2026. This policy describes how we collect, use and protect your personal information."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Privacy' }]}
      />
      <article className="pb-24">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-8 text-primary/80 dark:text-white/80">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="font-display text-2xl text-primary dark:text-white">{s.title}</h2>
                <div className="mt-3 space-y-3">{s.body}</div>
              </section>
            ))}
            <p className="rounded-2xl border border-primary/5 bg-white p-6 text-sm dark:border-white/5 dark:bg-white/[0.02]">
              Questions about privacy? Contact us at{' '}
              <a href="mailto:phinduinnovations26@gmail.com" className="font-semibold text-secondary underline underline-offset-4">
                phinduinnovations26@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

const sections = [
  {
    title: 'What we collect',
    body: (
      <>
        <p>
          We collect the information you give us directly — name, organisation, email, phone number and message
          content — when you fill in a form, subscribe to our newsletter or contact us. We also collect basic
          analytics data (pages viewed, device type) to improve the site.
        </p>
      </>
    ),
  },
  {
    title: 'How we use it',
    body: (
      <>
        <p>
          We use your information to respond to your enquiry, deliver services you engage us for, send occasional
          updates you have opted into, and comply with legal obligations. We never sell your personal information.
        </p>
      </>
    ),
  },
  {
    title: 'Cookies',
    body: (
      <>
        <p>
          We use essential cookies to run the site (theme preference, cookie consent state) and optional analytics
          cookies to understand how the site is used. You can decline optional cookies at any time.
        </p>
      </>
    ),
  },
  {
    title: 'Sharing your data',
    body: (
      <>
        <p>
          We share personal information only with service providers under contract (email hosting, analytics) and
          when legally required. Any provider must handle your data under equivalent protections to those set out
          here.
        </p>
      </>
    ),
  },
  {
    title: 'Your rights',
    body: (
      <>
        <p>
          You may request access to, correction of, or deletion of your personal information at any time. Contact us
          and we will respond within 30 days.
        </p>
      </>
    ),
  },
  {
    title: 'Security',
    body: (
      <>
        <p>
          We use industry-standard measures to protect your information — encrypted connections, restricted access
          and secure hosting. No online service is 100% secure, but we take this responsibility seriously.
        </p>
      </>
    ),
  },
];
