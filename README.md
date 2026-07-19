# Phindu Innovations · Website

> Engineering Sustainable Aquaculture for Africa

A production-ready, premium, responsive marketing website for **Phindu Innovations** — an aquaculture, aquaponics and civil engineering firm based in Lilongwe, Malawi.

## Highlights

- **10 fully-designed pages** — Home, About, Services, Projects, Products, Training, Gallery, Blog (+ dynamic post routes), FAQ, Contact
- **Award-worthy design** inspired by Apple, Stripe, Tesla, Arc, Framer & Webflow showcases
- **Glassmorphism, gradients, soft shadows, animated counters, scroll progress, parallax and micro-interactions**
- **Dark & light mode** with system preference detection
- **AI Chat Assistant, WhatsApp float, Cookie Consent, Back-to-top, Newsletter, Search-ready nav, Language switcher**
- **Interactive tools** — Pond size, Water volume, Fish feed, ROI and Cost calculators
- **Before/After slider**, interactive Malawi map, masonry gallery with lightbox
- **Full SEO** — metadata, sitemap.xml, robots.txt, JSON-LD Organization schema, Open Graph, Twitter cards
- **Utility pages** — 404, Thank You, Privacy, Terms
- **Accessible** — semantic HTML, reduced-motion support, focus states, ARIA labelling

## Tech stack

- **Next.js 14** (App Router, React 18, TypeScript)
- **Tailwind CSS** with a bespoke design token system
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **Lucide** for icons
- **next/font** with Playfair Display + Inter

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
src/
├─ app/                     # App Router pages (route-driven)
│  ├─ page.tsx              # Home
│  ├─ about/                # About
│  ├─ services/             # Services
│  ├─ projects/             # Projects (feature case study + all)
│  ├─ products/             # Products catalogue
│  ├─ training/             # Training programmes
│  ├─ gallery/              # Masonry gallery
│  ├─ blog/                 # Blog listing + [slug]/ post
│  ├─ faq/                  # Categorised FAQ
│  ├─ contact/              # Contact form + Calculators
│  ├─ legal/{privacy,terms} # Legal pages
│  ├─ thank-you/            # Post-submit confirmation
│  ├─ not-found.tsx         # 404
│  ├─ sitemap.ts, robots.ts # SEO
│  └─ layout.tsx, globals.css
├─ components/              # Design system + section components
├─ data/                    # Structured content (services, projects, products, blog, gallery, testimonials)
└─ lib/                     # Site config + utilities
```

## Design tokens

Configured in `tailwind.config.ts`:

| Token       | Hex       | Purpose                              |
|-------------|-----------|--------------------------------------|
| primary     | `#15323B` | Deep aquatic teal — headlines, ink   |
| secondary   | `#1F6E8C` | Bright teal — accents, links         |
| accent      | `#9A7B2E` | Warm gold — highlights, CTAs         |
| bg          | `#FCFAF5` | Warm off-white — light surfaces      |
| bg.dark     | `#0A1519` | Dark surface for dark mode           |

Typography:

- **Playfair Display** — headings (h1–h6)
- **Inter** — body & UI (semi-bold weight for buttons)

## Brand direction

- **Voice** — professional, confident, friendly, technical, trustworthy, evidence-based. No marketing fluff.
- **Photography** — real work, warm mid-morning light. Ponds, farmers, engineers, drone imagery.
- **Illustrations** — subtle line/gradient. Occasional water motifs (waves, ripples).

## Deployment

Deploy to Vercel with zero config:

```bash
npx vercel --prod
```

Or any Node host that supports Next.js 14:

```bash
npm run build && npm start
```

## Contact

Phindu Innovations · Lilongwe, Malawi
- Email: phinduinnovations26@gmail.com
- Phone: +265 999 515 333
- 24/7 Emergency Hotline

---

Built with care. Every pixel considered.
