import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank you',
  description: 'Your message has been received. We will be in touch within one working day.',
};

const nextSteps = [
  { title: 'Read a case study', body: 'See how we delivered the 12-pond compound in Liwonde.', href: '/#projects', cta: 'View case study' },
  { title: 'Try a calculator', body: 'Estimate your pond size, feed schedule or ROI in minutes.', href: '/#contact', cta: 'Open calculators' },
  { title: 'Explore services', body: 'Twenty-two ways we can help you build.', href: '/#services', cta: 'See services' },
];

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 md:pt-48">
      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary dark:border-white/15 dark:text-white">
            <Sparkles className="h-3.5 w-3.5" /> Message received
          </span>
          <div className="mx-auto mt-8 grid h-16 w-16 place-items-center rounded-full bg-primary/5 text-primary dark:bg-white/5 dark:text-white">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-display-1 text-primary text-balance dark:text-white">
            Thank you. We'll be in touch shortly.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-primary/70 dark:text-white/70">
            A member of our team will reply within one working day. If your project is time-sensitive, please call
            our office on +265 999 515 333 — we're happy to jump on a quick call.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary">
              Back to home <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://wa.me/265999515333"
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {nextSteps.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group block border-t border-primary/15 pt-4 dark:border-white/15"
            >
              <h3 className="font-display text-xl text-primary dark:text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-primary/70 dark:text-white/70">{s.body}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 dark:text-white">
                {s.cta} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
