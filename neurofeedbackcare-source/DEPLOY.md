# Deploy Alternative Behavioral Therapy (Netlify + optional Cloudflare)

**Site:** neurofeedbackcare.com  
**Business:** Alternative Behavioral Therapy, INC (Vancouver, WA)  
**Primary free host (demo / production):** **Netlify**  
**Optional alternate host:** Cloudflare Pages  
**Domain registrar (today):** GoDaddy — **do not change DNS until the demo looks right**  
**SSL:** Free via Netlify (or Cloudflare) once a custom domain is connected  

This marketing site builds for **Netlify** (TanStack Start official plugin) or **Cloudflare Pages**.  
You do **not** need GoDaddy Website Builder. Keep GoDaddy for **domain registration** (and email if used there).

---

## Product constraints (do not change)

- **Front Desk:** call or text the **AI Scheduling Agent (360) 800-4066** for routine scheduling. **Staff line (360) 553-1350** for QEEG, obstacles, and non-scheduling questions. Google Business primary phone stays **(360) 553-1350**.
- **Chat bubble (Front Desk AI):** optional additive channel. Embed is installed site-wide (practice id `7i5hlps1`). If the bubble does not appear on a host, assume vendor/service readiness or domain allowlist — **leave the embed code in place** until deliberately removed. See `src/lib/front-desk-chat-loader.ts`.
- **Contact:** phone, SMS, `office@altbehtherapy.com` (mailto). No Message Us form backend.
- **Assets:** only **owned** logos, clinic photos, team headshots, BCIA / QEEG Courses / BeeMedic credentials.
- **Rates:** $65–$185 depending on provider; $65 when a supervised trainee is available.

---

## 0) GitHub layout

Repo: `alternativebehavioraltherapy/abtmainpage`  

| Path on GitHub | Meaning |
| --- | --- |
| `neurofeedbackcare-source/` | Project root (`package.json`, `src/`, `netlify.toml`, …) |

Netlify **Base directory** must be: **`neurofeedbackcare-source`**

---

## 1) Netlify (recommended)

### Build scripts

| Goal | Command |
| --- | --- |
| Local development | `npm run dev` |
| Production build (Netlify) | `npm run build:netlify` |
| Typecheck | `npm run typecheck` |
| Production build (Cloudflare, optional) | `npm run build:cloudflare` |

### What `npm run build:netlify` produces

```text
dist/client/          ← static assets (publish directory)
```

### Netlify UI settings

| Field | Value |
| --- | --- |
| Base directory | `neurofeedbackcare-source` |
| Build command | `npm run build:netlify` |
| Publish directory | `dist/client` |
| Functions directory | *(empty / clear)* |

### Front Desk AI chat widget (optional)

- **Official script:** `https://book.frontdesk.care/chat-widget.js`
- **Practice ID:** `7i5hlps1` (`data-frontdesk-chat`)
- **Integration files:**  
  - `src/lib/front-desk-chat-loader.ts` (constants + bootstrap + checklist)  
  - `src/routes/__root.tsx` (`ScriptOnce` SSR)  
  - `src/components/front-desk-chat-widget.tsx` (client fallback)  
  - `src/components/layout/site-shell.tsx` (mounts widget)  
  - `src/styles.css` (mobile bottom offset above Call/Text bar)
- **Status:** keep installed. If bubble missing on live demo after deploy, check vendor first; do not thrash embed code.

---

## 2) Domain (later — not yet)

Keep `neurofeedbackcare.com` on GoDaddy until Netlify demo is approved.  
Then: Netlify custom domain + GoDaddy DNS (or forwarding) as documented by Netlify.

---

## 3) Cloudflare Pages (optional alternate)

| Field | Value |
| --- | --- |
| Root directory | `neurofeedbackcare-source` |
| Build command | `npm run build:cloudflare` |
| Output | `dist` / per `DEPLOY` notes for Pages |

Prefer Netlify for the current demo path.

---

## 4) Owned assets only

Do not replace clinic/team/brand images with stock. Public assets live under `public/`.

---

## 5) Quick smoke checklist after deploy

- [ ] Homepage loads (not 404)
- [ ] Services, Front Desk, Team, Cost, FAQ, Affiliates, Resources, Contact
- [ ] Call/text Front Desk still primary
- [ ] Deep links / hash sections still work
- [ ] (Optional) Chat bubble if Front Desk AI service is live for this practice/domain
