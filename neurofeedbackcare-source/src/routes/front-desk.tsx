import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bot,
  MessageSquare,
  Phone,
  CalendarCheck,
  UserRound,
  ShieldCheck,
  Clock,
  Users,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/front-desk")({
  component: FrontDeskPage,
  head: () => ({
    meta: [
      { title: "Front Desk | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Call or text (360) 553-1350. Live receptionist most business hours; AI-assisted Front Desk after hours. No online booking.",
      },
    ],
  }),
});

function FrontDeskPage() {
  return (
    <>
      <PageHero
        eyebrow="Front Desk"
        title="Call or text (360) 553-1350"
        description="A live receptionist is available during most business hours. When staff are unavailable or after hours, our advanced AI (fully integrated with the EHR) immediately handles your request — list your appointments, cancel, reschedule, or book new appointments with no delay."
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
        <p className="mt-4 text-sm text-muted">
          No online booking form. Phone and text are the fastest path.
        </p>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt">
          <h2 className="font-display text-2xl text-navy md:text-3xl">
            Simple, reassuring, always reachable
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: UserRound,
                title: "Live receptionist",
                body: "During most business hours, a person answers to help with scheduling, consultations, and general office questions.",
              },
              {
                icon: Bot,
                title: "AI when staff are busy",
                body: "If no one can answer—or after hours—advanced AI steps in immediately. It is fully integrated with our EHR for accurate, real-time schedule help.",
              },
              {
                icon: CalendarCheck,
                title: "Full schedule control",
                body: "List appointments, cancel, reschedule, or request new bookings by call or text. No portal required for routine changes.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-border bg-surface p-6 shadow-card"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft text-green">
                  <card.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-xl text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.body}
                </p>
              </article>
            ))}
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
              We want the right fit from the start. Please use phone or text —
              not an online form.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                A consultation is required before intake and ongoing services.
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                Call or text to ask about clinician availability, waitlists, and
                trainee options.
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                For in-person consults about children 12 or younger, please do
                not bring the child to the initial consult.
              </li>
              <li className="flex gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                We will help you understand rates, services, and next steps.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg p-6 md:p-8">
            <div className="flex items-center gap-3">
              <CalendarCheck className="h-6 w-6 text-green" aria-hidden />
              <h3 className="font-display text-xl text-navy md:text-2xl">
                Existing clients
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted">
              Manage your schedule quickly without waiting for a callback when
              AI can help.
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-soft">
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                Call or text anytime to list upcoming appointments.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                Cancel or reschedule with no delay when AI or staff can assist.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                Request additional sessions or a different clinician as
                appropriate.
              </li>
              <li className="flex gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                Clinical questions may still need a staff or clinician follow-up.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-abt max-w-3xl text-center">
          <h2 className="font-display text-2xl text-navy md:text-3xl">
            Why we moved away from online booking
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            As we change EHR systems, online self-scheduling is being replaced
            by a phone- and text-first Front Desk. You get faster answers, fewer
            portal hurdles, and AI that is wired into the same system our staff
            use — so nothing falls through the cracks.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="phone" size="xl">
              <a href={site.phoneTel}>
                <Phone className="h-5 w-5" aria-hidden />
                Call {site.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/contact">
                Contact details
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-center text-white md:py-16">
        <div className="container-abt max-w-2xl">
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Call or text {site.phone}
          </h2>
          <p className="mt-4 text-white/80">
            Live help most business hours. AI-assisted Front Desk after hours.
            Fully EHR integrated. No online booking form.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="phone" size="xl">
              <a href={site.phoneTel}>Call now</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="xl"
              className="border-white/40 text-white hover:bg-white hover:text-navy"
            >
              <a href={site.phoneSms}>Send a text</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
