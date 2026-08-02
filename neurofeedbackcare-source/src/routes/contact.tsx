import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ArrowRight,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Call or text (360) 553-1350. Alternative Behavioral Therapy, 3000 SE 164th Ave Suite 108, Vancouver, WA. Email office@altbehtherapy.com.",
      },
    ],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Call or text first — we’re ready to help"
        description="Phone and text are the fastest ways to reach our Front Desk. Live receptionist most business hours; AI assists after hours or when staff cannot answer."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="xl" className="shadow-md">
            <a href={site.phoneTel}>
              <Phone className="h-5 w-5" aria-hidden />
              Call {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={site.phoneSms}>
              <MessageSquare className="h-5 w-5" aria-hidden />
              Text {site.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            <a
              href={site.phoneTel}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-green/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green text-white">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green">
                  Primary
                </p>
                <h2 className="font-display text-xl text-navy">Call</h2>
                <p className="mt-1 text-lg font-semibold text-green">
                  {site.phone}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Live receptionist during most business hours
                </p>
              </div>
            </a>

            <a
              href={site.phoneSms}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-green/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft text-green">
                <MessageSquare className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green">
                  Primary
                </p>
                <h2 className="font-display text-xl text-navy">Text</h2>
                <p className="mt-1 text-lg font-semibold text-green">
                  {site.phone}
                </p>
                <p className="mt-1 text-sm text-muted">
                  AI-assisted Front Desk when staff are unavailable — fully EHR
                  integrated
                </p>
              </div>
            </a>

            <a
              href={site.emailMailto}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-green/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-soft text-green">
                <Mail className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="font-display text-xl text-navy">Email</h2>
                <p className="mt-1 text-lg font-semibold text-green">
                  {site.email}
                </p>
                <p className="mt-1 text-sm text-muted">
                  General office questions · staff typically reply in 1–3
                  business days
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3 rounded-2xl border border-border bg-bg px-5 py-4 text-sm text-muted">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden />
              <p>
                For appointments, cancellations, and reschedules, prefer call or
                text so Front Desk (live or AI) can help immediately.{" "}
                <Link
                  to="/front-desk"
                  className="font-semibold text-green hover:underline"
                >
                  How Front Desk works
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex flex-1 flex-col rounded-2xl border border-border bg-navy p-7 text-white md:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-green-bright">
                <MapPin className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-5 font-display text-2xl text-white">Visit us</h2>
              <p className="mt-3 text-base text-white/90">
                {site.address.line1}
              </p>
              <p className="text-base text-white/90">
                {site.address.city}, {site.address.state} {site.address.zip}
              </p>
              <p className="mt-5 text-sm text-white/65">Fax: {site.fax}</p>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <Button asChild variant="phone" size="lg" className="w-full">
                  <a href={site.phoneTel}>Call Front Desk</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-white/40 text-white hover:bg-white hover:text-navy"
                >
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(site.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
              <h3 className="font-display text-lg text-navy">Quick links</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  { to: "/front-desk", label: "Front Desk" },
                  { to: "/services", label: "Services" },
                  { to: "/cost", label: "Cost & insurance" },
                  { to: "/faq", label: "FAQ" },
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1.5 font-semibold text-green hover:text-navy"
                    >
                      {item.label}
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-green-soft/30 py-12">
        <div className="container-abt max-w-2xl text-center">
          <h2 className="font-display text-2xl text-navy md:text-3xl">
            No online booking form
          </h2>
          <p className="mt-3 text-muted">
            Reach us by call or text at {site.phone}. That is the intentional
            path for scheduling and changes as we transition EHR systems.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="phone" size="lg">
              <a href={site.phoneTel}>Call now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.phoneSms}>Send a text</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
