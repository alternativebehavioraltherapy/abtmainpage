# Alternative Behavioral Therapy — website

Marketing site for **Alternative Behavioral Therapy, INC** (Vancouver, WA).  
Domain: **neurofeedbackcare.com** (registrar: GoDaddy). Host on **Cloudflare Pages** (free).

## Quick start

```bash
npm install
npm run dev          # local preview
npm run typecheck
npm run build:cloudflare
```

Full deploy instructions: **[DEPLOY.md](./DEPLOY.md)**

## Product rules

- **No online booking.** Front Desk = call/text **(360) 553-1350** (+ AI when staff unavailable).
- Contact: phone, SMS, `office@altbehtherapy.com`. No Message Us form backend required.
- Use **owned** brand, clinic, team, and credential assets only (see `public/`).

## Stack

React 19 · TypeScript · Vite · TanStack Start/Router · Tailwind v4 · Cloudflare Pages (Nitro)

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server |
| `npm run build:cloudflare` | Production build → `dist/` |
| `npm run deploy:cloudflare` | Build + Wrangler Pages deploy |
| `npm run typecheck` | TypeScript check |
| `npm run export:cloudflare` | Zip built `dist/` into `exports/` |
