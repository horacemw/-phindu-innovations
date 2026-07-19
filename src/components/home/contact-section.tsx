'use client';

import { Mail, Phone, MapPin, Clock, MessageCircle, PhoneCall } from 'lucide-react';
import { ContactForm } from '@/components/contact/contact-form';
import { Calculators } from '@/components/calculators/calculators';
import { SectionHeading } from '@/components/ui/section-heading';
import { AnimatedSection } from '@/components/ui/animated-section';
import { site } from '@/lib/site';

const details = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: 'Phone', value: site.phone, href: `tel:${site.phoneRaw}` },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${site.whatsapp}` },
  { icon: MapPin, label: 'Office', value: site.location },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-24 dark:bg-white/[0.02]">
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's talk about what you're building."
            description="Send us the outline of your project — location, land size, goals — and we'll reply within one working day. For emergencies, call our hotline."
            align="center"
            className="!mx-auto"
          />
        </AnimatedSection>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {details.map((d, i) => {
            const Content = (
              <div className="group h-full rounded-xl border border-primary/[0.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-md dark:border-white/[0.08] dark:bg-white/[0.03]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <d.icon size={18} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/50 dark:text-white/50">
                  {d.label}
                </p>
                <p className="mt-1 font-bold text-primary dark:text-white">{d.value}</p>
              </div>
            );
            return (
              <AnimatedSection key={d.label} delay={i * 60}>
                {d.href ? <a href={d.href}>{Content}</a> : Content}
              </AnimatedSection>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <AnimatedSection>
            <div className="rounded-2xl border border-primary/[0.08] bg-white p-6 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.03] md:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-2xl border border-primary/[0.08] shadow-sm dark:border-white/[0.08]">
                <iframe
                  title="Phindu Innovations office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15486.86749547473!2d33.7666!3d-13.9822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLilongwe!5e0!3m2!1sen!2smw!4v1700000000000!5m2!1sen!2smw"
                  width="100%"
                  height="300"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0"
                />
              </div>

              <div className="rounded-2xl border border-primary/[0.08] bg-white p-6 shadow-sm dark:border-white/[0.08] dark:bg-white/[0.03]">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">Office Hours</p>
                <ul className="mt-4 space-y-2 text-sm text-primary/80 dark:text-white/80">
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary/40 dark:text-white/40" /> {site.hours.weekdays}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary/40 dark:text-white/40" /> {site.hours.saturday}
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary/40 dark:text-white/40" /> {site.hours.sunday}
                  </li>
                </ul>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-600"
                >
                  <PhoneCall className="h-4 w-4" /> 24/7 · {site.phone}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Calculators */}
        <div className="mt-24">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Free Tools"
              title="Estimate before you even call."
              description="Ballpark your pond, water volume, feed needs, ROI and construction budget in a couple of minutes."
              align="center"
              className="!mx-auto"
            />
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <div className="mt-12">
              <Calculators />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
