# N. Patel & Co. — Marketing Site

A single-page marketing site for **N. Patel & Co.**, a furniture material
supplier (plywood, veneer, laminate and timber) established in Ahmedabad on
9 August 2000.

## Stack

- **Next.js 16** (App Router) with static export (`output: "export"`)
- **TypeScript**
- Plain CSS with custom properties — no UI framework
- Self-hosted Google Fonts via `next/font` (Fraunces + Inter)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
```

The static site is emitted to `out/` and can be served by any static host
(GitHub Pages, Netlify, Vercel, S3, nginx).

## Structure

```
src/
  app/
    layout.tsx      fonts, metadata, viewport
    page.tsx        the single marketing page (all sections)
    globals.css     design tokens + every component style
  components/
    Header.tsx      sticky header with responsive mobile nav
    Footer.tsx
    PlywoodArt.tsx  decorative plywood cross-section SVG
    Icons.tsx       inline product icons
```

## Editing content

All copy lives in `src/app/page.tsx` as plain arrays near the top of the file
(`STATS`, `PRODUCTS`, `TIMELINE`, `REASONS`) — edit those to change what the
page says. Colours, spacing and type are set as custom properties in the
`:root` block of `src/app/globals.css`.

## Note

By request, the site carries **no contact details** — no phone number, email
address or postal address.
