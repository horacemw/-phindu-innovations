# /public/images/

Branded placeholder illustrations for the Phindu Innovations site.

## To swap for real photos

Drop your JPGs/PNGs into the matching subfolders and update the filename in
the data file:

- `services/*.svg` → referenced from `src/data/services.ts`
- `projects/*.svg` → referenced from `src/data/projects.ts`
- `products/*.svg` → referenced from `src/data/products.ts`
- `blog/*.svg` → referenced from `src/data/blog.ts`
- `gallery/*.svg` → referenced from `src/data/gallery.ts`
- `hero.jpg` (drop your Liwonde drone photo here to replace) — referenced from `src/components/home/hero.tsx`

For images used with `next/image`, keep the same filename and extension change
will just require editing the string in the data file.

Recommended dimensions:

- Hero: 2400 × 1600 (16:9-ish landscape)
- Service / product / project cards: 1200 × 900 (4:3)
- Blog covers: 1600 × 900 (16:9)
- Gallery: mixed — 800×1200 (portrait), 1200×800 (landscape), 1000×1000 (square)
