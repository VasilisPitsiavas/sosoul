# So Soul Place — redesign (sosoul-redesign)

Copy of `../sosoul` with fixes from the Nov 2026 review. The live site is untouched.

## Where to edit things

| What | File |
|------|------|
| Email, phone, Instagram, weekly class schedule | `src/data/site.ts` |
| All wording, Greek + English | `src/i18n/content.ts` |
| Photos | drop files in `public/photos/` (names listed in `public/photos/README.md`); captions in `src/data/photos.ts` |
| Your domain | `CUSTOM_DOMAIN` at the top of `vite.config.ts` |

Greek is the main language (`/`, `/events` …). English lives under `/en` (`/en/events` …). The ΕΛ / EN button switches between the same page in each language.

## What changed vs. the live site

- Greek + English versions with a language switch.
- No address, map or prices anywhere.
- Setup notes no longer shown to visitors; contact form opens the visitor's email app until Formspree is connected.
- New homepage: full-width photo hero, photo cards for classes, deep-blue weekly schedule band, reviews, FAQ, baby-blue booking band.
- Colours: logo blue with baby-blue shades, all defined at the top of `src/index.css`.
- Compact header with mobile menu; footer with contact details.
- Each page returns HTTP 200 (deploy writes a real HTML file per route).
- Per-page titles, Open Graph tags, skip link, smaller logo file.

## Develop

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

### Contact form & Calendly

Copy `.env.example` to `.env`:

- **`VITE_FORMSPREE_ENDPOINT`** — Formspree form URL (required for the contact form to submit).
- **`VITE_CALENDLY_URL`** — Optional full Calendly link; when set, Home and Contact show an “Open calendar” / “Pick a time” button that opens it in a new tab (no embed script).

Restart the dev server after changing env vars.

## Deploy

### GitHub Pages (this repo)

Production builds use Vite `base` **`/sosoul/`** so the site works as a project site at:

**https://vasilispitsiavas.github.io/sosoul/**

1. Push `main` (the **Deploy to GitHub Pages** workflow runs on every push to `main`).
2. On GitHub: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch”).
3. After the first successful run, open the URL above. Client-side routes use `404.html` + `.nojekyll` from the workflow.

When you connect a custom domain, set `CUSTOM_DOMAIN` in `vite.config.ts` (this switches `base` to `/` and updates the share-preview links).

### Other hosts

`dist/` after `npm run build` can also go to [Vercel](https://vercel.com), [Netlify](https://netlify.com), etc. Use **`/`** as base for a root domain; keep **`/sosoul/`** only for `*.github.io/sosoul/`.

## Ideas to add later

- **Schedule** — Embedded calendar (e.g. Cal.com / Calendly) or a simple “this week’s classes” block you edit in code or a headless CMS.
- **Real testimonials** — Replace placeholder quotes on Home with client feedback.
- **FAQ** — Pricing, what to bring, cancellation policy.
- **Language** — Greek/English toggle if you serve both audiences.
- **Instagram** — Embed or a small feed of recent posts next to Events.
- **SEO** — Per-route titles/descriptions and Open Graph images for sharing.

Replace Unsplash URLs with your own files under `public/` (e.g. `public/photos/...`) and point `src/data/placeholders.ts` (or new components) at those paths.
