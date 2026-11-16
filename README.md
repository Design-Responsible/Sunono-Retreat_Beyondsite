# Sunono Retreat — beyond the website

A coded rebuild of the Understorey layout, interface and motion as the base for the Sunono Retreat site. It is built from scratch with [Astro](https://astro.build), as a static site with no server.

**Status:** it still has the template's original look and placeholder copy. Each section gets replaced one at a time. Don't publish the placeholder content: the reviews, ratings, prices and distances are demo values.

## Where things live

| What | File |
|---|---|
| All page copy, one block per section | `src/data/content.ts` |
| Colours, type scale, spacing | `src/styles/global.css` (the `:root` tokens) |
| Sections | `src/components/*.astro` (Hero, House, Plan, Gallery, Amenities, Location, Guestbook, Know, Book, Closer, Footer) |
| All motion and interactions | `src/scripts/motion.ts` |
| Photos and brand assets | `public/images`, `public/brand` |

Photos are currently crops of the Sunono estate photo. Replace them in `public/images` and update the paths in `content.ts`.

## Motion

- Hero: photos change with a slatted wipe, with progress bars.
- 01: the statement lights up word by word as you scroll.
- 02 and 05: carousels with arrows.
- 03: hover captions and a lightbox.
- 04: tabs that cross-fade the photo.
- 05: place names in the photo band light up in turn.
- 07: accordion.
- 08: live price estimate, and a "day" photo strip that expands on hover.
- Closer: the small photo chip grows into a full-screen window as you scroll.
- Footer: the name rises in, fitted to the page width.
- Everything respects reduced-motion settings.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

## Deploy

- **Vercel:** import the repo. It detects Astro on its own.
- **Netlify:** import the repo. `netlify.toml` sets `npm run build` and `dist`.

Each push to a branch gets a preview link.
