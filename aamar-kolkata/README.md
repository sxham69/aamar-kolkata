# Aamar Kolkata — Café Website

A premium, single-page website for **Aamar Kolkata**, a neighbourhood café in Satpukur, Kolkata.
Built with React 18, Vite 5, TypeScript, Tailwind CSS 3, Framer Motion and Lucide icons. No backend.

## Quick start

Requires Node.js 18+.

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:5173
npm run typecheck  # TypeScript check
npm run build      # production build into dist/
npm run preview    # serve the production build at http://localhost:4173
```

## Deploy to Vercel

1. Push this folder to a GitHub repository (or run `npx vercel` inside it).
2. On vercel.com choose **Add New → Project** and import the repo.
3. Vercel reads `vercel.json`: framework *Vite*, build `npm run build`, output `dist`.

Prefer no build step? The `dist/` folder in the zip is already built and can be uploaded as a static site
(Vercel CLI: `npx vercel deploy dist --prod`, or drag `dist/` onto app.netlify.com/drop).

After deploying, replace `https://aamarkolkata.example.com` in `index.html` (canonical, Open Graph,
structured data) with the real domain.

## Where to edit things

| What | File |
| --- | --- |
| Phone, address, map links, opening hours, full-menu link, reviews link, social links | `src/data/site.ts` |
| Menu categories, items, descriptions, prices, photos | `src/data/menu.ts` |
| Hero, story, gallery and closing photos | `src/data/images.ts` |
| Story copy, "Why Visit" features, FAQ | `src/data/content.ts` |
| Colours and fonts | `tailwind.config.js`, `index.html` (Google Fonts link) |
| Title, meta description, Open Graph, structured data | `index.html` |
| Favicon, touch icon, social share image | `public/` |

To use the café's own photos, put them in `public/photos/` and set e.g. `src: '/photos/interior.jpg'`.

## Verified vs. sample content

**Supplied by the business (used as-is):** name, category, phone 09123820184, address
28 J, Northern Ave, Satpukur, Kolkata, West Bengal 700030, rating 4.3/5 and 1,354 reviews.

**Placeholder — confirm before launch:**
- **Menu:** every item, description and price in `src/data/menu.ts` is a sample. Cards show a "Sample" tag and
  the section shows a notice while `menuIsSample = true`. Set a price to `null` to show "Price on request".
- **Photography:** representative stock from Unsplash (Unsplash License), not the café. Captions say so.
- **Opening hours:** empty, so the site asks visitors to call. Fill `openingHours` in `site.ts`.
- **Full menu link:** empty, so the menu says "coming soon" with a call button. Fill `links.fullMenu`.
- **Reviews link:** empty, so the button opens a Google Maps search for the café. Put the exact Google
  Business Profile link in `links.reviews`.
- **Social links:** none shown. Add only genuine profiles to `socials`.
- **Brand story:** written as proposed brand storytelling. It contains no founding dates, founders, awards
  or sourcing claims.
- **Map:** a Google Maps embed of the supplied address (no coordinates were invented). Check the pin lands on
  the café once live.

## Notes

- No individual reviews, names or dates are shown. The 4.3 / 1,354 figures appear as an aggregate.
- `aggregateRating` is deliberately **not** in the structured data: Google treats ratings a business
  publishes about itself on its own site as self-serving and does not show them as review stars.
- Respects `prefers-reduced-motion` (Framer Motion `reducedMotion="user"` plus CSS fallbacks).
- Every image has a branded fallback (colour panel, alpana pattern, motif icon) if it fails to load.
- Set `VITE_NO_MAP=1` at build time to replace the map embed with a styled placeholder (used for sandboxed previews).
