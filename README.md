# So Soul Place (sosoul)

Website for **So Soul Place** / yoga with **Konstantina**: minimal layout, logo-led palette, and clear navigation.

## What’s included

- **Home** — Hero, short bio, and highlights (group classes, workshops, privates).
- **Events** — Photo grid for past events (swap images in `src/data/placeholders.ts`).
- **Studio** — Studio story plus a second gallery for the space.
- **Contact** — Booking-oriented form (wired for [Formspree](https://formspree.io); optional env var).

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

### Contact form

Copy `.env.example` to `.env`, set `VITE_FORMSPREE_ENDPOINT` to your Formspree URL, restart the dev server. Until then, the page explains how to enable submissions.

## Deploy

### GitHub Pages (this repo)

Production builds use Vite `base` **`/sosoul/`** so the site works as a project site at:

**https://vasilispitsiavas.github.io/sosoul/**

1. Push `main` (the **Deploy to GitHub Pages** workflow runs on every push to `main`).
2. On GitHub: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch”).
3. After the first successful run, open the URL above. Client-side routes use `404.html` + `.nojekyll` from the workflow.

When you add a custom domain later, set `base` in `vite.config.ts` to `'/'` and update the workflow if needed.

### Other hosts

`dist/` after `npm run build` can also go to [Vercel](https://vercel.com), [Netlify](https://netlify.com), etc. Use **`/`** as base for a root domain; keep **`/sosoul/`** only for `*.github.io/sosoul/`.

## Ideas to add later

- **Schedule** — Embedded calendar (e.g. Cal.com / Calendly) or a simple “this week’s classes” block you edit in code or a headless CMS.
- **Testimonials** — Short quotes under the bio or on Home.
- **FAQ** — Pricing, what to bring, cancellation policy.
- **Language** — Greek/English toggle if you serve both audiences.
- **Instagram** — Embed or a small feed of recent posts next to Events.
- **SEO** — Per-route titles/descriptions and Open Graph images for sharing.

Replace Unsplash URLs with your own files under `public/` (e.g. `public/photos/...`) and point `src/data/placeholders.ts` (or new components) at those paths.
