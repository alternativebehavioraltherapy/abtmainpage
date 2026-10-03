# Cut over neurofeedbackcare.com (same domain)

This is a hosting change on the same domain. It is not a domain change.
Do not use the Search Console “Change of address” tool.

Google’s business listing already uses the office number. Do not change the Google Business primary phone to the AI line.

| Line | Number | Use |
| --- | --- | --- |
| AI Scheduling Agent (beta) | (360) 800-4066 | New appointments, cancellations, reschedules. Preferred. |
| Staff / office | (360) 553-1350 | QEEG scheduling, scheduling obstacles, non-scheduling questions. May be delayed. This stays the Google Business phone. |
| Fax | (360) 233-4975 | Unchanged |

## Before you touch DNS

1. Screenshot every record on the GoDaddy DNS page for neurofeedbackcare.com. Save that screenshot.
2. Confirm the new site looks right at `https://abt-website-main.netlify.app` (Home, Services, Team, Cost, Front Desk).
3. In Netlify, add both `neurofeedbackcare.com` and `www.neurofeedbackcare.com`. Wait until Netlify shows the DNS records it wants and HTTPS is ready. Use those records, not a guessed address.

## What to change at GoDaddy

Do not change nameservers.
Do not change MX, SPF, DKIM, or DMARC. Those are email.
Do not use GoDaddy domain forwarding.

Only replace the website records:

- The A record for `@` (it may be labeled Website Builder).
- The CNAME for `www`.

Point them at the values Netlify shows. Remove the old Website Builder address so both old and new addresses are not answering at once.

## After it resolves

- `https://neurofeedbackcare.com` shows this site.
- `https://www.neurofeedbackcare.com` redirects once to the address without www.
- `https://neurofeedbackcare.com/neurofeedback` redirects once to `/about-neurofeedback`.
- Resubmit `https://neurofeedbackcare.com/sitemap.xml` in Search Console.

Leave GoDaddy Website Builder on for 1–2 weeks. Cancel it only after Search Console looks stable.
