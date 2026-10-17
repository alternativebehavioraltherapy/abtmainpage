import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Bot } from "lucide-react";
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
import { pageHead, pagesSeo, SITE_ORIGIN } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => pageHead(pagesSeo.faq),
});

const faqGroups = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do I schedule or change an appointment?",
        a: `Call or text the energy-efficient AI Scheduling Agent at ${site.phone}. That is the fastest path for listing, booking, canceling, or rescheduling. Appointments are first come, first served by current availability. If there are no openings — or you need QEEG scheduling, a significant obstacle resolved, or a non-scheduling question — use the staff line at ${site.staff.phone} (may have notable delays). Online booking is a beta option; we still recommend the AI line.`,
      },
      {
        q: "What is the difference between the AI line and the staff line?",
        a: `The AI Scheduling Agent (${site.phone}) handles most scheduling 24/7. The staff line (${site.staff.phone}) still reaches people in the office and should be used for QEEG scheduling, significant scheduling obstacles, or non-scheduling concerns.`,
      },
      {
        q: "Do you accept insurance?",
        a: "We are out-of-network and do not bill insurance directly. Superbills are available for some services, not all, so you may seek reimbursement from your plan depending on your benefits.",
      },
      {
        q: "What are your rates?",
        a: `Rates range ${site.rates.range} depending on the credentials and experience of the provider and current availability. Technicians and interns are ${site.rates.technician} depending on training, experience, and scope of work. HBOT sessions are ${site.hbot.session}; ${site.hbot.screening} Initial QEEG testing is ${site.qeeg.initial} and includes extra assessments when needed (Creyos, questionnaires, QIK CPT, and others). Repeat QEEG is half-off at ${site.qeeg.repeat}. See the Cost page for a clear overview.`,
      },
      {
        q: "What is a superbill?",
        a: "A superbill is a detailed receipt you can submit to your insurance company for possible reimbursement. It is available for some services, not all, and only on request.",
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
        a: "Yes. We regularly include student interns, associate therapists, and technicians supervised by administrative therapists. Technician and intern sessions are $65–$130 depending on training, experience, and scope of work. Availability varies — ask the Front Desk.",
      },
      {
        q: "Can neurofeedback help with ADHD, PTSD, anxiety, or depression?",
        a: "Neurofeedback is used clinically for ADHD, PTSD, anxiety, depression, sleep concerns, and related regulation issues. Published AAPB field ratings treat ADHD and depression as efficacious and specific (5/5) and PTSD and anxiety as efficacious (4/5). Those are field ratings of the literature — not a promise of individual results. Care is individualized after assessment, including QEEG when appropriate. See About Neurofeedback for the evidence overview.",
      },
      {
        q: "What is the difference between neurofeedback, QEEG, and psychotherapy?",
        a: "Neurofeedback (EEG biofeedback) trains brain electrical activity in real time. A QEEG is a brain-map assessment that can guide protocols. Psychotherapy here includes talk therapy with EMDR and Internal Family Systems; it can stand alone or be combined with neurofeedback.",
      },
      {
        q: "What services do you offer?",
        a: "Neurofeedback, QEEG brain mapping, talk therapy (including EMDR and Internal Family Systems), HBOT (a general wellness service only, medically screened and medically supervised), and mentoring/consulting for clinicians. Visit the Services page for details, or About Neurofeedback for evidence and how EEG training works.",
      },
    ],
  },
];

function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    ),
    url: `${SITE_ORIGIN}/faq`,
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero
        eyebrow="FAQ"
        title="Answers before you call"
        description="Insurance, superbills, rates, releases, and how to start. For scheduling, call the AI Agent first."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Bot className="h-4 w-4" aria-hidden />
              Call AI {site.phone}
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
              <h2 className="font-display text-2xl text-navy">{group.title}</h2>
              <Accordion type="single" collapsible className="mt-4">
                {group.items.map((item, i) => (
                  <AccordionItem key={item.q} value={`${group.title}-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent>{item.a}</AccordionContent>
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
            <h2 className="font-display text-2xl text-navy">Still have a question?</h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              Call or text the AI Scheduling Agent at {site.phone}. Use the staff
              line at {site.staff.phone} for QEEG or non-scheduling concerns.
            </p>
          </div>
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Phone className="h-4 w-4" aria-hidden />
              {site.phone}
            </a>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
