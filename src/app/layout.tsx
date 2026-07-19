import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from '@/components/theme-provider';
import { SmoothScroll } from '@/components/smooth-scroll';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { BackToTop } from '@/components/back-to-top';
import { ScrollProgress } from '@/components/scroll-progress';
import { CookieConsent } from '@/components/cookie-consent';
import { AiAssistant } from '@/components/ai-assistant';
import { site } from '@/lib/site';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FBF7EC' },
    { media: '(prefers-color-scheme: dark)', color: '#08181D' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'aquaculture Malawi',
    'aquaponics Africa',
    'fish pond construction',
    'civil engineering Malawi',
    'fish farming',
    'flood protection',
    'drainage design',
    'fingerlings Malawi',
    'fish feed',
    'Phindu Innovations',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og-image.svg'],
    creator: '@phinduinnovations',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/logo.svg`,
  description: site.description,
  email: site.email,
  telephone: site.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lilongwe',
    addressCountry: 'Malawi',
  },
  areaServed: 'Africa',
  sameAs: [
    site.socials.facebook,
    site.socials.linkedin,
    site.socials.twitter,
    site.socials.instagram,
    site.socials.youtube,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
      <body className="min-h-screen bg-bg text-primary antialiased dark:bg-bg-dark dark:text-white">
        <Script id="ld-json" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(jsonLd)}
        </Script>
        <ThemeProvider>
          <SmoothScroll />
          <ScrollProgress />
          <Header />
          <main className="relative">{children}</main>
          <Footer />
          <FloatingWhatsApp />
          <BackToTop />
          <AiAssistant />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
