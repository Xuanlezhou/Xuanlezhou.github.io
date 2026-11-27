# xuanlezhou.github.io

Personal portfolio — Next.js 13 (static export) + Tailwind, deployed to GitHub Pages by `.github/workflows/nextjs.yml` on every push to `main` or `master`.

## Editing content
- **About, experience, skills, contact details:** `src/app/data/site.ts`
- **Projects:** `src/app/data/projects.ts` — each entry becomes `/projects/<slug>`.
  Put photos in `public/photos/projects/<slug>/photo-01.jpg`, `photo-02.jpg`… and set `cover`.
- **Résumé button:** add `public/resume.pdf` and set `resumeUrl: "/resume.pdf"` in `site.ts`.

## Run locally
```bash
npm ci
npm run dev   # http://localhost:3000
```
