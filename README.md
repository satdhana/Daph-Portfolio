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
