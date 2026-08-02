import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  FileText,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/cost")({
  component: CostPage,
  head: () => ({
    meta: [
      { title: "Cost | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Session rates $65–$185 depending on provider. Out-of-network with superbills. Call or text (360) 553-1350 for current availability.",
      },
    ],
  }),
});

function CostPage() {
  return (
    <>
      <PageHero
        eyebrow="Cost"
        title="Clear rates, no surprises"
        description={`Session fees range ${site.rates.range} depending on the provider. The lowest rate is available only when a supervised trainee is on staff. We are out-of-network and can provide superbills.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Phone className="h-4 w-4" aria-hidden />
              Call or text {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/front-desk">
              Ask about current rates
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
            <div className="border-b border-border bg-navy px-5 py-4 text-white md:px-6">
              <h2 className="font-display text-xl text-white">
                Session rate overview
              </h2>
              <p className="mt-1 text-sm text-white/75">
                Exact fees depend on provider, service, and availability
              </p>
            </div>
            <div className="divide-y divide-border">
              {[
                {
                  title: "Supervised trainee / technician",
                  detail:
                    "Available only when a trainee is currently on staff (teaching clinic).",
                  rate: "From $65",
                },
                {
                  title: "Licensed clinicians",
                  detail:
                    "Most counselors fall in the mid range based on credentials and experience.",
                  rate: "Mid range within $65–$185",
                },
                {
                  title: "Senior / BCN-level care",
                  detail:
                    "Including Joshua Moore, MA, LMHC, BCN and comparable seniority.",
                  rate: "Up to $185",
                },
                {
                  title: "Assessments (e.g. QEEG)",
                  detail:
                    "Brain mapping and specialized evaluations are billed separately from sessions.",
                  rate: "Separate fee",
                  href: "/services" as const,
                  hash: "qeeg",
                },
              ].map((row) => (
                <div
                  key={row.title}
                  className="grid gap-2 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center md:px-6"
                >
                  <div>
                    <p className="font-semibold text-navy">{row.title}</p>
                    <p className="mt-1 text-sm text-muted">{row.detail}</p>
                    {"hash" in row && row.hash && (
                      <Link
                        to={row.href}
                        hash={row.hash}
                        hashScrollIntoView={{
                          behavior: "smooth",
                          block: "start",
                        }}
                        className="mt-2 inline-flex text-sm font-semibold text-green hover:underline"
                      >
                        About QEEG brain mapping
                      </Link>
                    )}
                  </div>
                  <p className="text-base font-semibold text-green sm:text-right">
                    {row.rate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <GraduationCap className="h-6 w-6 text-green" aria-hidden />
              <h3 className="mt-3 font-display text-lg text-navy">
                Teaching clinic
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Lower rates exist because supervised trainees and technicians
                help deliver care. Ask whether a trainee option is open right
                now.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-green" aria-hidden />
              <h3 className="mt-3 font-display text-lg text-navy">
                Out-of-network
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We do not bill insurance directly. Superbill paperwork is
                available so you can seek reimbursement from your plan.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <FileText className="h-6 w-6 text-green" aria-hidden />
              <h3 className="mt-3 font-display text-lg text-navy">
                Ask Front Desk
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Current fees and trainee availability change. Call or text for
                the most accurate quote for your situation.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="phone" size="lg">
              <a href={site.phoneTel}>
                <Phone className="h-4 w-4" aria-hidden />
                Call {site.phone}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={site.phoneSms}>
                <MessageSquare className="h-4 w-4" aria-hidden />
                Text us
              </a>
            </Button>
            <Button asChild variant="soft" size="lg">
              <Link to="/services">Browse services</Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand title="Questions about fees or superbills?" />
    </>
  );
}
