import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  CalendarCheck,
  Clock,
  ExternalLink,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  ArrowRight,
  AlertCircle,
  CalendarClock,
  ListChecks,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { pageHead, pagesSeo } from "@/lib/seo";

export const Route = createFileRoute("/front-desk")({
  component: FrontDeskPage,
  head: () => pageHead(pagesSeo.frontDesk),
});

function FrontDeskPage() {
  return (
    <>
      <PageHero
        eyebrow="Front Desk"
        title="Scheduling has changed"
        description="Most appointments now go through our energy-efficient AI Scheduling Agent — faster, 24/7, and connected to our calendar. The personal staff line remains for special situations."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild variant="phone" size="xl" className="shadow-md">
            <a href={site.phoneTel}>
              <Bot className="h-5 w-5" aria-hidden />
              Call AI Agent {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="xl">
            <a href={site.phoneSms}>
              Text AI {site.phone}
            </a>
          </Button>
          <Button asChild variant="soft" size="xl">
            <a href={site.staff.tel}>
              <Phone className="h-5 w-5" aria-hidden />
              Staff {site.staff.phone}
            </a>
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted">
          The AI line is the fastest path for listing, booking, canceling, or
          rescheduling. Appointments are first come, first served.
        </p>
      </PageHero>

      <section id="lines" className="section-pad scroll-mt-40">
        <div className="container-abt">
          <h2 className="font-display text-2xl text-navy md:text-3xl">
            Two lines — use the right one
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Start with the AI Scheduling Agent whenever you can. It is built
            for routine scheduling and saves time for both families and staff.
          </p>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="relative overflow-hidden rounded-3xl border-2 border-green/40 bg-green-soft/40 p-7 shadow-card md:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-green px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Primary · recommended
              </p>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green text-white">
                  <Bot className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy">
                    AI Scheduling Agent
                  </h3>
                  <a
                    href={site.phoneTel}
                    className="mt-1 block font-display text-3xl font-semibold text-green md:text-4xl"
                  >
                    {site.phone}
                  </a>
                  <p className="mt-2 text-sm font-medium text-navy">
                    Call or text · energy-efficient · 24/7
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
                {[
                  "List, book, cancel, or reschedule appointments",
                  "Faster than waiting for a callback",
                  "Connected to our live calendar",
                  "Best first step for most scheduling",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-2 sm:flex-row">
                <Button asChild variant="phone" className="flex-1">
                  <a href={site.phoneTel}>Call AI Agent</a>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <a href={site.phoneSms}>Text AI Agent</a>
                </Button>
              </div>
            </article>

            <article className="rounded-3xl border border-border bg-surface p-7 shadow-card md:p-8">
              <p className="inline-flex items-center gap-2 rounded-full bg-navy px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Personal / staff line
              </p>
              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
                  <Phone className="h-6 w-6" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-navy">
                    Staff line
                  </h3>
                  <a
                    href={site.staff.tel}
                    className="mt-1 block font-display text-3xl font-semibold text-navy md:text-4xl"
                  >
                    {site.staff.phone}
                  </a>
                  <p className="mt-2 text-sm font-medium text-muted">
                    Still reaches staff · may have notable delays
                  </p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm text-ink-soft">
                {[
                  "Significant scheduling obstacles the AI cannot resolve",
                  "Scheduling QEEGs (brain mapping)",
                  "Non-scheduling questions (billing, clinical, general office)",
                  "If no openings appear on the AI line — availability is first come, first served",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button asChild variant="secondary" className="w-full sm:w-auto">
                  <a href={site.staff.tel}>Call staff {site.staff.phone}</a>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface section-pad">
        <div className="container-abt">
          <h2 className="font-display text-2xl text-navy md:text-3xl">
            How Front Desk works
          </h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Call the AI Agent first",
                body: `Use ${site.phone} to list, book, cancel, or reschedule. It is energy-efficient and connected to our calendar.`,
              },
              {
                step: "2",
                title: "Times are first come, first served",
                body: "Openings depend on current availability. Book as soon as you see a time that works.",
              },
              {
                step: "3",
                title: "Staff line when needed",
                body: `If there are no openings, you need a QEEG, or the issue is not scheduling — call ${site.staff.phone}. Delays are possible.`,
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-border bg-bg p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green text-sm font-semibold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-display text-xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="availability"
        className="border-y border-border bg-green-soft/30 section-pad scroll-mt-40"
      >
        <div className="container-abt grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              How openings work
            </p>
            <h2 className="mt-2 font-display text-2xl text-navy md:text-3xl">
              First come, first served
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Scheduling options depend on current availability. Times are
              offered on a first-come, first-served basis. If the AI Agent
              shows no suitable openings — or you need a QEEG or a more
              complex change — contact the staff line at {site.staff.phone}.
            </p>
          </div>
          <div className="rounded-2xl border border-green/30 bg-surface p-6 shadow-card lg:col-span-5">
            <Clock className="h-6 w-6 text-green" aria-hidden />
            <p className="mt-3 font-display text-xl text-navy">
              Lack of availability?
            </p>
            <p className="mt-2 text-sm text-muted">
              Call the staff line. Do not wait on a callback from the old
              number for routine booking — use the AI Agent first.
            </p>
            <a
              href={site.staff.tel}
              className="mt-4 inline-flex font-semibold text-navy hover:text-green"
            >
              Staff {site.staff.phone}
              <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      <section id="online-booking" className="section-pad scroll-mt-40">
        <div className="container-abt">
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-card">
            <div className="grid lg:grid-cols-5">
              <div className="p-7 md:p-9 lg:col-span-3">
                <span className="inline-flex items-center rounded-full bg-green-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy">
                  {site.onlineBooking.badge}
                </span>
                <h2 className="mt-4 font-display text-2xl text-navy md:text-3xl">
                  Online booking is available
                </h2>
                <p className="mt-3 max-w-xl text-muted">
                  You can request times in the browser. This is a beta product.
                  For ease and efficiency we still recommend calling or texting
                  the AI Scheduling Agent at {site.phone}.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="phone" size="lg">
                    <a href={site.phoneTel}>
                      <Bot className="h-4 w-4" aria-hidden />
                      Call AI (recommended)
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href={site.onlineBooking.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open online booking
                      <ExternalLink className="h-4 w-4" aria-hidden />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 border-t border-border bg-navy p-7 text-white lg:col-span-2 lg:border-l lg:border-t-0 md:p-9">
                <div className="flex items-center gap-3">
                  <CalendarClock className="h-5 w-5 text-green-bright" aria-hidden />
                  <p className="font-semibold">When to use it</p>
                </div>
                <p className="text-sm leading-relaxed text-white/80">
                  Helpful if you prefer a visual calendar. If nothing fits,
                  call the AI line — or the staff line for QEEG and special
                  requests.
                </p>
                <a
                  href={site.onlineBooking.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-bright hover:underline"
                >
                  app.frontdesk.care
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-border bg-surface">
        <div className="container-abt grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-bg p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-green" aria-hidden />
              <h3 className="font-display text-xl text-navy md:text-2xl">
                New clients
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted">
              Start with a consultation. Call the AI Agent to request a time,
              or use online booking (beta). A consult is required before
              ongoing services.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                For in-person consults about children 12 or younger, please do
                not bring the child to the initial consult.
              </li>
              <li className="flex gap-2.5">
                <ListChecks className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                Ask about clinician availability, waitlists, and trainee
                options.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg p-6 md:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-green" aria-hidden />
              <h3 className="font-display text-xl text-navy md:text-2xl">
                Existing clients
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted">
              List, cancel, or reschedule through the AI Agent. Use the staff
              line if you hit an obstacle the AI cannot resolve.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                First come, first served — book as soon as you see a time
                that works.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                QEEG mapping is scheduled on the staff line.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-abt">
          <div className="rounded-2xl border border-green/25 bg-green-soft/60 p-6 md:p-8">
            <h2 className="font-display text-2xl text-navy">
              Start with the AI Agent
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              {site.frontDesk.body}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="phone" size="lg">
                <a href={site.phoneTel}>
                  <Bot className="h-4 w-4" aria-hidden />
                  {site.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={site.staff.tel}>
                  <Phone className="h-4 w-4" aria-hidden />
                  Staff {site.staff.phone}
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link to="/contact">
                  Contact details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
