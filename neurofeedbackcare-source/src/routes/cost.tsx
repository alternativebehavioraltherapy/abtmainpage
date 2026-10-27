import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  FileText,
  GraduationCap,
  ArrowRight,
  Activity,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { pageHead, pagesSeo } from "@/lib/seo";

export const Route = createFileRoute("/cost")({
  component: CostPage,
  head: () => pageHead(pagesSeo.cost),
});

function CostPage() {
  return (
    <>
      <PageHero
        eyebrow="Cost"
        title="Clear rates, no surprises"
        description={`Session fees range ${site.rates.range} depending on the provider. Joshua Moore is ${site.rates.joshua}. Michelle Moore is ${site.rates.michelle}. Technicians in training and interns are ${site.rates.technician}. Initial QEEG is ${site.qeeg.initial}; repeats are ${site.qeeg.repeat}. We are out-of-network. Superbills are available for some services, not all.`}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Phone className="h-4 w-4" aria-hidden />
              Call AI {site.phone}
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
                  title: "Technicians in training & interns",
                  detail:
                    "Supervised teaching-clinic providers. Availability varies.",
                  rate: site.rates.technician,
                  href: "/the-team" as const,
                  hash: "technicians",
                  linkLabel: "Meet technicians & interns",
                },
                {
                  title: "Michelle Moore, MA, LMHC",
                  detail: "Licensed mental health counselor.",
                  rate: site.rates.michelle,
                },
                {
                  title: "Joshua Moore, MA, LMHC, BCN",
                  detail:
                    "Licensed mental health counselor and Board Certified in Neurofeedback.",
                  rate: site.rates.joshua,
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
                        {row.linkLabel}
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

          <div
            id="qeeg-fees"
            className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-card scroll-mt-40"
          >
            <div className="border-b border-border bg-green-soft/50 px-5 py-4 md:px-6">
              <div className="flex items-center gap-3">
                <Activity className="h-5 w-5 text-green" aria-hidden />
                <h2 className="font-display text-xl text-navy">
                  QEEG assessments
                </h2>
              </div>
              <p className="mt-1 text-sm text-muted">
                Brain mapping is billed separately from session rates. Schedule
                QEEG on the staff line.
              </p>
            </div>
            <div className="divide-y divide-border">
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-start md:px-6">
                <div>
                  <p className="font-semibold text-navy">Initial QEEG testing</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    Includes additional assessments at no extra charge when
                    needed — such as Creyos Cognitive Testing, questionnaires,
                    QIK Continuous Performance Testing (CPT), and others
                    depending on findings and client self-report.
                  </p>
                  <Link
                    to="/services"
                    hash="qeeg"
                    hashScrollIntoView={{ behavior: "smooth", block: "start" }}
                    className="mt-2 inline-flex text-sm font-semibold text-green hover:underline"
                  >
                    About QEEG brain mapping
                  </Link>
                </div>
                <p className="text-base font-semibold text-green sm:text-right">
                  {site.qeeg.initial}
                </p>
              </div>
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center md:px-6">
                <div>
                  <p className="font-semibold text-navy">Repeat QEEG</p>
                  <p className="mt-1 text-sm text-muted">
                    Half-off follow-up mapping after an initial QEEG at this
                    clinic.
                  </p>
                </div>
                <p className="text-base font-semibold text-green sm:text-right">
                  {site.qeeg.repeat}
                </p>
              </div>
            </div>
          </div>

          <div
            id="hbot-fees"
            className="mt-8 overflow-hidden rounded-2xl border border-border bg-surface shadow-card scroll-mt-40"
          >
            <div className="border-b border-border bg-green-soft/50 px-5 py-4 md:px-6">
              <h2 className="font-display text-xl text-navy">HBOT</h2>
              <p className="mt-1 text-sm text-muted">
                General wellness only. Medically screened and medically supervised.
                Not booked through the AI scheduler — call the staff line.
              </p>
            </div>
            <div className="divide-y divide-border">
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center md:px-6">
                <div>
                  <p className="font-semibold text-navy">HBOT session</p>
                  <Link
                    to="/services"
                    hash="hbot"
                    hashScrollIntoView={{ behavior: "smooth", block: "start" }}
                    className="mt-2 inline-flex text-sm font-semibold text-green hover:underline"
                  >
                    About HBOT
                  </Link>
                </div>
                <p className="text-base font-semibold text-green sm:text-right">
                  {site.hbot.session}
                </p>
              </div>
              <div className="grid gap-2 px-5 py-5 sm:grid-cols-[1fr_auto] sm:items-center md:px-6">
                <div>
                  <p className="font-semibold text-navy">Medical screening</p>
                  <p className="mt-1 text-sm text-muted">{site.hbot.screening}</p>
                </div>
                <p className="text-base font-semibold text-green sm:text-right">
                  Set by provider
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <GraduationCap className="h-6 w-6 text-green" aria-hidden />
              <h3 className="mt-3 font-display text-lg text-navy">
                Teaching clinic
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Technicians in training and interns are {site.rates.technician}{" "}
                because supervised trainees help deliver care. Ask whether that
                option is open right now.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-green" aria-hidden />
              <h3 className="mt-3 font-display text-lg text-navy">
                Out-of-network
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                We do not bill insurance directly. Superbills are available for
                some services, not all, so you may seek reimbursement from your
                plan.
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

      <CtaBand title="Questions about fees or reimbursement?" />
    </>
  );
}
