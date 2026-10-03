# Alternative Behavioral Therapy — website

Marketing site for **Alternative Behavioral Therapy, INC** (Vancouver, WA).  
Domain: **neurofeedbackcare.com** (registrar: GoDaddy).  
**Primary free host:** Netlify · **Optional:** Cloudflare Pages.

## Quick start

```bash
npm install
npm run dev              # local preview
npm run typecheck
npm run build:netlify    # production build for Netlify
```

Full deploy instructions: **[DEPLOY.md](./DEPLOY.md)**

## Product rules

- **Scheduling:** AI Scheduling Agent **(360) 800-4066** (beta). Staff line **(360) 553-1350** for QEEG, obstacles, and non-scheduling questions.
- Contact: phone, SMS, `office@altbehtherapy.com`. No Message Us form backend required.
- Use **owned** brand, clinic, team, and credential assets only (see `public/`).

## Stack

React 19 · TypeScript · Vite · TanStack Start/Router · Tailwind v4  
Netlify (`@netlify/vite-plugin-tanstack-start`) · optional Cloudflare Pages (Nitro)

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build:netlify` | Production build for Netlify → `dist/client` + SSR function |
| `npm run build:cloudflare` | Production build for Cloudflare Pages → `dist/` |
| `npm run typecheck` | TypeScript check |
| `npm run export:netlify` | Zip source for GitHub (`neurofeedbackcare-source/`) |
| `npm run export:cloudflare` | Zip Cloudflare `dist/` + source into `exports/` |
