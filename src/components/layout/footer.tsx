'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { site, navigation } from '@/lib/site';

const services = [
  'Aquaculture Engineering',
  'Aquaponics Systems',
  'Fish Pond Construction',
  'Flood Protection',
  'Water Supply Systems',
  'Training',
];

const socials = [
  { icon: Facebook, href: site.socials.facebook, name: 'Facebook' },
  { icon: Twitter, href: site.socials.twitter, name: 'Twitter' },
  { icon: Linkedin, href: site.socials.linkedin, name: 'LinkedIn' },
  { icon: Instagram, href: site.socials.instagram, name: 'Instagram' },
  { icon: Youtube, href: site.socials.youtube, name: 'YouTube' },
];

export function Footer() {
  const year = new Date().getFullYear();

  const anchor = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <span className="text-sm font-bold text-white">P</span>
              </div>
              <div>
                <p className="text-sm font-bold leading-tight">PHINDU</p>
                <p className="text-xs leading-tight text-white/60">Innovations Ltd</p>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-white/75">
              Engineering sustainable aquaculture, aquaponics and civil engineering solutions across Malawi
              and beyond.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors duration-200 hover:bg-accent"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Quick Links</h3>
            <ul className="space-y-2.5">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={anchor(link.href)}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-accent-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    onClick={anchor('#services')}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-accent-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform group-hover:scale-150" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-sm text-white/75">{site.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href={`tel:${site.phoneRaw}`} className="text-sm text-white/75 transition-colors hover:text-accent-300">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href={`mailto:${site.email}`} className="break-all text-sm text-white/75 transition-colors hover:text-accent-300">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p className="text-white/60">© {year} {site.name}. All rights reserved.</p>
          <p className="flex gap-4 text-white/50">
            <Link href="/legal/privacy" className="hover:text-accent-300">Privacy</Link>
            <Link href="/legal/terms" className="hover:text-accent-300">Terms</Link>
            <span>Lilongwe, Malawi</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
