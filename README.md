# Satria Dafa — Portfolio

Single-page portfolio built with **Vite + React + Tailwind CSS**, animated with Framer Motion and smooth-scrolled with Lenis.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build locally
```

## Deploy to Vercel

**Option A — from the dashboard (easiest)**
1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New… → Project** → import the repo.
3. Vercel auto-detects Vite. Leave the defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**.

**Option B — from the terminal**
```bash
npm i -g vercel
vercel          # follow the prompts, then:
vercel --prod
```

`vercel.json` is already included so client-side routing / deep links resolve correctly.

## Before you deploy — checklist

- **Add your CV**: drop `CV-Satria-Dafa-Putra-Wardhana-2026.pdf` into `public/assets/`.
  The Download CV buttons point to `/assets/CV-Satria-Dafa-Putra-Wardhana-2026.pdf`.
- **Check the links** in `src/data/content.js` (Notion, LinkedIn, GitHub, WhatsApp).
- Project images currently load from external URLs (Unsplash/Pexels). To make them
  fully self-hosted, download them into `public/assets/` and update the `image`
  fields in `src/data/content.js`.

## Editing content

Almost all copy lives in **`src/data/content.js`** — projects, experience, stats,
skills, certifications, tools, and links. Edit there; you rarely need to touch the
components.

## Visual direction (Oct 2026 refresh)

- Palette comes from the portrait: scarf green, vest black, shirt off-white. Tokens live at the top of `src/index.css`.
- Fonts (Bricolage Grotesque + Newsreader) are self-hosted via `@fontsource-variable/*`; run `npm install` once after pulling.
- The three-strand cord (`public/assets/braid-*.svg`) stands for the three disciplines: product, design, engineering.
- Portrait: `public/assets/dafa-portrait.webp`. Link preview image: `public/assets/og.jpg`.
- Add `cover: "/assets/your-image.webp"` to any project in `src/data/content.js` to show a real screenshot in its detail view.
