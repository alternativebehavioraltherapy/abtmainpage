import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { site } from "@/lib/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "FAQ for Alternative Behavioral Therapy in Vancouver, WA: insurance, superbills, rates, teaching clinic, and how to start. Call or text (360) 553-1350.",
      },
    ],
  }),
});

const faqGroups = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do I schedule or change an appointment?",
        a: "Call or text the office. There is no online booking calendar. A live receptionist is available most business hours; after hours—or if no one answers—our EHR-integrated AI can list, cancel, reschedule, or request new appointments.",
      },
      {
        q: "Do you accept insurance?",
        a: "We are out-of-network. We can provide superbills so you may seek reimbursement from your insurance plan, depending on your benefits.",
      },
      {
        q: "What are your rates?",
        a: `Rates range ${site.rates.range} depending on the credentials and experience of the provider and current availability. Assessments (such as QEEG) are a separate cost. The lowest rates apply when a supervised trainee is on staff. See the Cost page for a clear overview.`,
      },
      {
        q: "What is a superbill?",
        a: "A superbill is a detailed receipt of services that you can submit to your insurance company for possible out-of-network reimbursement. We can provide this paperwork on request.",
      },
      {
        q: "What is a Release of Information (ROI)?",
        a: "A release of information is signed by the client to authorize sharing pertinent information with another provider (or receiving it from them). It may also be needed when an older teen wants a parent to help with payments and scheduling. If a client is over 14, a release generally must be signed by the client before we can talk with parents about care or release certain documents.",
      },
    ],
  },
  {
    title: "Care & clinic",
    items: [
      {
        q: "Is this a teaching clinic?",
        a: "Yes. We regularly include student interns, associate therapists, and technicians supervised by administrative therapists. That structure allows lower-rate neurofeedback options when trainees are available. Availability varies — ask the Front Desk.",
      },
      {
        q: "What services do you offer?",
        a: "Neurofeedback, QEEG brain mapping, talk therapy (including EMDR and Internal Family Systems), limited mild hyperbaric oxygen therapy (M-HBOT) with medical screening, and mentoring/consulting for clinicians. Visit the Services page for details.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Answers before you call"
        description="Insurance, superbills, rates, releases, and how to start. When you are ready, call or text the Front Desk — no online booking."
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
              Front Desk
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt max-w-3xl space-y-12">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="font-display text-xl text-navy md:text-2xl">
                {group.title}
              </h2>
              <Accordion
                type="single"
                collapsible
                className="mt-4 space-y-3"
              >
                {group.items.map((item, i) => (
                  <AccordionItem key={item.q} value={`${group.title}-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>
                      {item.a}
                      {item.q.includes("rates") && (
                        <span className="mt-3 block">
                          <Link
                            to="/cost"
                            className="font-semibold text-green hover:underline"
                          >
                            View the Cost page
                          </Link>
                        </span>
                      )}
                      {item.q.includes("services") && (
                        <span className="mt-3 block space-y-1">
                          <Link
                            to="/services"
                            className="block font-semibold text-green hover:underline"
                          >
                            Browse all services
                          </Link>
                          <Link
                            to="/services"
                            hash="neurofeedback"
                            hashScrollIntoView={{
                              behavior: "smooth",
                              block: "start",
                            }}
                            className="block text-sm font-semibold text-green hover:underline"
                          >
                            Neurofeedback
                          </Link>
                          <Link
                            to="/services"
                            hash="qeeg"
                            hashScrollIntoView={{
                              behavior: "smooth",
                              block: "start",
                            }}
                            className="block text-sm font-semibold text-green hover:underline"
                          >
                            QEEG brain mapping
                          </Link>
                          <Link
                            to="/services"
                            hash="mhbot"
                            hashScrollIntoView={{
                              behavior: "smooth",
                              block: "start",
                            }}
                            className="block text-sm font-semibold text-green hover:underline"
                          >
                            M-HBOT
                          </Link>
                        </span>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface section-pad">
        <div className="container-abt flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-bg p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h2 className="font-display text-xl text-navy md:text-2xl">
              Still have a question?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Call or text {site.phone}. Live staff most business hours; AI
              assists after hours — fully integrated with our EHR.
            </p>
          </div>
          <Button asChild variant="phone" size="lg" className="shrink-0">
            <a href={site.phoneTel}>
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </Button>
        </div>
      </section>

      <CtaBand title="Ready to talk with Front Desk?" />
    </>
  );
}
