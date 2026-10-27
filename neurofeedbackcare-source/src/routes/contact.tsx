import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Bot,
  ExternalLink,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { pageHead, pagesSeo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => pageHead(pagesSeo.contact),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Reach the right line"
        description="Most scheduling goes through our energy-efficient AI Scheduling Agent. The staff line is for QEEG, HBOT, obstacles, and non-scheduling concerns."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="xl" className="shadow-md">
            <a href={site.phoneTel}>
              <Bot className="h-5 w-5" aria-hidden />
              Call AI {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={site.staff.tel}>
              <Phone className="h-5 w-5" aria-hidden />
              Staff {site.staff.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt grid gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            <a
              href={site.phoneTel}
              className="flex items-start gap-4 rounded-2xl border-2 border-green/40 bg-green-soft/40 p-6 shadow-card transition-colors hover:border-green"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green text-white">
                <Bot className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-green">
                  Primary · AI Scheduling Agent
                </p>
                <h2 className="font-display text-xl text-navy">
                  Call or text
                </h2>
                <p className="mt-1 text-lg font-semibold text-green">
                  {site.phone}
                </p>
                <p className="mt-1 text-sm text-muted">
                  Fastest path for listing, booking, canceling, or rescheduling
                </p>
              </div>
            </a>

            <a
              href={site.staff.tel}
              className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6 shadow-card transition-colors hover:border-green/40"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <Phone className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy">
                  Staff line
                </p>
                <h2 className="font-display text-xl text-navy">
                  Personal / office
                </h2>
                <p className="mt-1 text-lg font-semibold text-navy">
                  {site.staff.phone}
                </p>
                <p className="mt-1 text-sm text-muted">
                  QEEG scheduling, significant obstacles, or non-scheduling
                  questions. May have notable delays.
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
                Times are first come, first served. If the AI Agent has no
                openings, call the staff line.{" "}
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
                  <a href={site.phoneTel}>Call AI Agent</a>
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
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            Beta
          </p>
          <h2 className="mt-2 font-display text-2xl text-navy md:text-3xl">
            Online booking is optional
          </h2>
          <p className="mt-3 text-muted">
            Calling the AI Agent at {site.phone} is still the easiest path. Online
            booking is a beta product if you prefer a visual calendar.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="phone" size="lg">
              <a href={site.phoneTel}>Call AI now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={site.onlineBooking.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Online booking
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
