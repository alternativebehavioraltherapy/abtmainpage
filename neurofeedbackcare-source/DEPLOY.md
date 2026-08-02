# Deploy Alternative Behavioral Therapy to Cloudflare Pages (free)

**Site:** neurofeedbackcare.com  
**Business:** Alternative Behavioral Therapy, INC (Vancouver, WA)  
**Hosting:** Cloudflare Pages (free tier)  
**Domain registrar (today):** GoDaddy  
**SSL:** Free, automatic via Cloudflare once the custom domain is connected  

This marketing site is configured to build for **Cloudflare Pages**. You do **not** need GoDaddy Website Builder, Managed WordPress, or paid GoDaddy web hosting for the site itself. Keep GoDaddy for **domain registration** (and email if you use it there).

---

## 0) Package contents (this export)

Two archives may be provided under `exports/`:

| Archive | Use |
| --- | --- |
| **`neurofeedbackcare-source.zip`** | Full project source for GitHub + Cloudflare Git deploy, or local editing |
| **`neurofeedbackcare-cloudflare-pages.zip`** | Built `dist/` only — upload directly in Cloudflare Pages “Upload assets” |

**No Message Us / contact form backend** is included. Contact is **call/text + mailto** only.  
**No extra environment variables** are required for the public marketing site.

---

## 1) Install, build, and preview locally

Requires **Node.js 22+**.

```bash
# From the project root (unzipped source)
npm install

# Typecheck
npm run typecheck

# Local development (http://0.0.0.0:8080)
npm run dev

# Production build for Cloudflare Pages
npm run build:cloudflare

# Optional: preview the Cloudflare build (after build)
npx wrangler pages dev dist
```

| Goal | Command |
| --- | --- |
| Local development | `npm run dev` |
| Production build (Cloudflare) | `npm run build:cloudflare` |
| Typecheck | `npm run typecheck` |
| Deploy with Wrangler | `npm run deploy:cloudflare` |
| Zip built `dist/` only | `npm run export:cloudflare` |

---

## 2) What to deploy

### Build output

```bash
npm install
npm run build:cloudflare
```

Produces:

```text
dist/
  assets/           ← JS & CSS
  brand/            ← logos (owned)
  clinic/           ← clinic photography (owned)
  credentials/      ← BCIA, QEEG Courses, BeeMedic badge (owned)
  team/             ← clinician headshots (owned)
  _worker.js/       ← Cloudflare Pages server renderer
  _headers
  _routes.json
  _redirects
```

### Deploy with Wrangler (CLI)

```bash
npx wrangler login
npx wrangler pages deploy dist --project-name=neurofeedbackcare
# or:
npm run deploy:cloudflare
```

Preview URL example: `https://neurofeedbackcare.pages.dev`  
Confirm the site there **before** changing GoDaddy DNS.

---

## 3) Recommended: Git + Cloudflare (long-term)

1. Create a free [Cloudflare account](https://dash.cloudflare.com/sign-up).
2. Put **source** (`neurofeedbackcare-source.zip` contents) in a free GitHub/GitLab repo.
3. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Build settings:

| Setting | Value |
| --- | --- |
| Framework preset | None / Other |
| Build command | `npm run build:cloudflare` |
| Build output directory | `dist` |
| Root directory | `/` (project root) |
| Node version | `22` (`NODE_VERSION=22` if prompted) |

5. Save and deploy. Pushes to `main` can auto-publish.

### Manual upload (no Git)

1. Unzip **`neurofeedbackcare-cloudflare-pages.zip`** (contents of `dist/`), **or** run `npm run build:cloudflare` on a machine with Node 22.
2. Cloudflare → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
3. Upload the **contents** of `dist` (or the pages zip root).

---

## 4) Connect `neurofeedbackcare.com` (custom domain)

In Cloudflare Pages project **neurofeedbackcare**:

1. **Custom domains** → **Set up a custom domain**
2. Add `neurofeedbackcare.com` and `www.neurofeedbackcare.com`
3. Follow the **exact DNS records** Cloudflare shows

---

## 5) DNS at GoDaddy

### Option A — Keep DNS at GoDaddy

1. GoDaddy → **My Products** → **neurofeedbackcare.com** → **DNS**
2. Remove old website A/CNAME records for `@` and `www` that point at GoDaddy hosting/builder. **Do not delete MX** if you use email on this domain.
3. Add records Cloudflare lists (typical pattern):

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `neurofeedbackcare.pages.dev` | 1 hour |
| CNAME or A | `@` | As Cloudflare shows for apex | 1 hour |

4. Wait for propagation (often 15–60 minutes; up to 24–48 hours).
5. Wait until Cloudflare shows domain **Active**.

### Option B — Free Cloudflare DNS (recommended)

1. Cloudflare **Add a site** → `neurofeedbackcare.com` (Free).
2. Copy Cloudflare’s two nameservers into GoDaddy → Nameservers → Custom.
3. Keep **registration** at GoDaddy; only DNS moves.
4. Attach apex + www in Pages; preserve **MX/TXT** for email.

---

## 6) Free SSL

Cloudflare Pages provisions **free Universal SSL** for custom domains.  
Use `https://neurofeedbackcare.com` — no separate GoDaddy SSL purchase for Pages.

---

## 7) Product / content constraints (do not change)

- **No online booking.** Front Desk is **call or text (360) 553-1350** + AI after hours / if no answer. Fully EHR-integrated description on the Front Desk page.
- **Contact:** phone, SMS, `office@altbehtherapy.com` (mailto). No Message Us form / form API keys required.
- **Assets:** only **owned** logos, clinic photos, team headshots, BCIA / QEEG Courses / BeeMedic credentials. Do **not** replace with stock photography.
- **Rates:** $65–$185 depending on provider; $65 when a supervised trainee is available (teaching clinic).

---

## 8) Go-live checklist

### Before DNS cutover

- [ ] `npm run build:cloudflare` succeeds
- [ ] Site correct on `*.pages.dev`
- [ ] Pages load: Home, Services, Front Desk, Team, Cost, FAQ, Affiliates, Resources, Contact
- [ ] Phone/text CTAs show **(360) 553-1350**
- [ ] No online booking form
- [ ] Logos, clinic photos, team photos, BeeMedic/BCIA badges load
- [ ] Mobile usable (sticky Call/Text bar)
- [ ] Screenshot GoDaddy DNS (especially **MX**)

### DNS cutover

- [ ] Pages project deployed
- [ ] Custom domains: apex + www
- [ ] GoDaddy DNS/nameservers updated; old web A/CNAME removed
- [ ] MX preserved if email stays on GoDaddy
- [ ] Domain **Active** + HTTPS padlock

### After cutover

- [ ] Call/text links work on a real phone
- [ ] Cancel unneeded GoDaddy **web hosting** products only after ~48h of stable new site
- [ ] Keep domain registration (and email products if used)

---

## 9) Support notes

- Free Cloudflare Pages is enough for this clinic marketing site.
- No paid Cloudflare plan required for SSL or custom domains on Pages.
- If email breaks after DNS changes, restore **MX** from your pre-cutover screenshot first.
- Future edits: change source → rebuild → redeploy (or push if Git auto-deploy is on).
