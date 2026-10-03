import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Brain,
  HeartPulse,
  GraduationCap,
  Wind,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Bot,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/image-carousel";
import {
  neurofeedbackStill,
  servicesCarouselSlides,
} from "@/lib/clinic-images";
import { site } from "@/lib/site";
import { pageHead, pagesSeo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => pageHead(pagesSeo.services),
});

const services = [
  {
    id: "neurofeedback",
    icon: Brain,
    title: "Neurofeedback",
    summary:
      "EEG biofeedback that trains mental states and brainwave patterns for lasting regulation.",
    body: [
      "Neurofeedback (EEG biofeedback) is a natural way to improve conditions such as PTSD, anxiety, depression, ADHD, sleep disturbance, and overall wellbeing.",
      "A QEEG helps identify where training is likely to help. Protocols use researched modalities custom-tuned to your nervous system. If you have responded well to a particular approach elsewhere, we can often recreate it here.",
      "Modalities may include amplitude training, SMR / vigilance regulation, z-score and sLORETA approaches, infra-low / infra-slow work, alpha-theta, and multi-variance coherence training when appropriate.",
    ],
    points: [
      "Non-invasive, drug-free brain training",
      "Protocols guided by assessment and clinical judgment",
      "Often paired with counseling for best results",
    ],
  },
  {
    id: "qeeg",
    icon: Activity,
    title: "QEEG Brain Mapping",
    summary:
      "A structured look at your brainwave patterns to inform personalized care.",
    body: [
      "A quantitative EEG is typically a ~20-minute recording of brainwaves from 19 sites using 22 sensors.",
      "Data is carefully reviewed and cleaned (including independent component analysis). Interpretation draws on known neuro-markers and phenotype models, and findings are corroborated with client report and tools such as Creyos or other cognitive evaluations when useful.",
      `Initial QEEG testing is ${site.qeeg.initial} and includes additional assessments at no extra charge when needed — Creyos Cognitive Testing, questionnaires, QIK Continuous Performance Testing (CPT), and others depending on findings and client self-report. Repeat QEEG is half-off at ${site.qeeg.repeat}.`,
      "Results guide neurofeedback protocol recommendations and help you understand the “why” behind the plan.",
    ],
    points: [
      "19-site clinical mapping process",
      "Informs custom training plans",
      `Initial QEEG ${site.qeeg.initial} · repeat ${site.qeeg.repeat} (half-off)`,
      "Consultation required before scheduling related services",
    ],
  },
  {
    id: "talk-therapy",
    icon: HeartPulse,
    title: "Talk Therapy · EMDR · IFS",
    summary:
      "Relationship-centered counseling that can stand alone or integrate with neurofeedback.",
    body: [
      "Our therapists hold specialties across solution-focused brief therapy, anxiety, depression, PTSD, dissociation, postpartum concerns, and more.",
      "All therapists are trained in EMDR and Internal Family Systems (IFS). We believe the therapeutic relationship — challenge, expertise, feedback, and psycho-education — is essential for lasting change.",
      "Neurofeedback alone is available for clients already working with another therapist; many people benefit most from combining talk therapy with brain training.",
    ],
    points: [
      "EMDR and IFS trained clinicians",
      "Trauma-informed, collaborative care",
      "Individual focus with optional neurofeedback",
    ],
  },
  {
    id: "mhbot",
    icon: Wind,
    title: "Mild Hyperbaric Oxygen Therapy (M-HBOT)",
    summary:
      "Limited, medically supervised oxygen therapy for qualifying individuals.",
    body: [
      "We offer mild hyperbaric oxygen therapy with medical screening and supervision. Availability is extremely limited and not open to all applicants.",
      "Our system is a “sit-up” chamber with manufacturer-installed audio for intercom and media access. It provides approximately 35% blow-by oxygen through a mask at 2 atmospheric pressure (2 ATA).",
      "Acceptance is at the sole discretion of ABT and the medical provider. Please inquire through the Front Desk if you are interested.",
    ],
    points: [
      "Medical screening required",
      "Limited slots — inquire early",
      "Not a substitute for primary medical care",
    ],
  },
  {
    id: "mentoring",
    icon: GraduationCap,
    title: "Mentoring & Consulting",
    summary:
      "Support for clinicians expanding neurofeedback and QEEG practice.",
    body: [
      "We consult on neurofeedback and QEEGs with practitioners around the world. Joshua Moore, MA, LMHC, BCN offers mentoring for qualifying individuals — drawing on nearly 15 years of neurofeedback experience and Board Certification through BCIA.",
      "Periodic courses have included introductions to neurofeedback (including NBCC-certified offerings), BeeLab, phenotype-model trainings, and beginner-friendly pathways into the field. Mentoring groups run on a recurring basis when space allows.",
      "As an Authorized BEE Medic Training Partner, we are recognized by a major neurofeedback equipment and education provider. If you are a clinician seeking consultation or training, call or text the office to discuss fit and availability.",
    ],
    points: [
      "Clinician mentoring and case consultation",
      "Workshops, phenotype model, and beginner pathways",
      "International consult options",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Care designed around your nervous system"
        description="Neurofeedback, QEEG brain mapping, psychotherapy with EMDR & IFS, limited M-HBOT, and professional mentoring in Vancouver, WA. Call the AI Scheduling Agent — online booking is a beta option."
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

      <section className="border-b border-border bg-surface py-4">
        <div className="container-abt flex flex-wrap gap-2">
          {services.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-xs font-semibold text-navy transition-colors hover:border-green/40 hover:bg-green-soft"
            >
              {s.title.split("·")[0].trim().split("(")[0].trim()}
            </a>
          ))}
        </div>
      </section>

      <section
        className="border-b border-border bg-bg section-pad !py-10 md:!py-12"
        aria-labelledby="process-photos-heading"
      >
        <div className="container-abt">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              In session
            </p>
            <h2
              id="process-photos-heading"
              className="mt-2 font-display text-2xl text-navy md:text-3xl"
            >
              Neurofeedback and QEEG in practice
            </h2>
            <p className="mt-2 text-sm text-muted md:text-base">
              EEG cap fitting, electrode prep, and brain-map analysis from our
              clinic — calm, clinical care without flash.
            </p>
          </div>
          <ImageCarousel
            slides={servicesCarouselSlides}
            ariaLabel="Neurofeedback and QEEG process photos"
          />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-abt space-y-10">
          {services.map((s) => {
            const Icon = s.icon;
            const isNeurofeedback = s.id === "neurofeedback";
            const isMentoring = s.id === "mentoring";
            return (
              <article
                key={s.id}
                id={s.id}
                className="scroll-mt-28 grid gap-6 rounded-3xl border border-border bg-surface p-6 shadow-card md:grid-cols-[auto_1fr] md:gap-8 md:p-8"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-soft text-green">
                  <Icon className="h-7 w-7" aria-hidden />
                </div>
                <div>
                  <h2 className="font-display text-2xl text-navy md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-base font-medium text-ink-soft">
                    {s.summary}
                  </p>
                  {isNeurofeedback && (
                    <figure className="mt-5 overflow-hidden rounded-2xl border border-border bg-bg">
                      <img
                        src={neurofeedbackStill.src}
                        alt={neurofeedbackStill.alt}
                        className="aspect-[16/10] w-full max-h-72 object-cover object-center md:max-h-80"
                        loading="lazy"
                        decoding="async"
                        width={960}
                        height={600}
                      />
                    </figure>
                  )}
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted md:text-base">
                    {s.body.map((para) => (
                      <p key={para.slice(0, 40)}>{para}</p>
                    ))}
                  </div>
                  {isNeurofeedback && (
                    <p className="mt-5">
                      <Link
                        to="/about-neurofeedback"
                        className="inline-flex items-center gap-1.5 font-semibold text-green hover:text-navy"
                      >
                        About neurofeedback — evidence and how it works
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </p>
                  )}
                  {isMentoring && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <a
                        href="https://beemedic.com/en/education"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-4 rounded-2xl border border-border bg-bg p-5 transition-all hover:border-green/40 hover:shadow-md sm:flex-row sm:items-center"
                      >
                        <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-xl bg-black p-3 sm:h-32 sm:w-32">
                          <img
                            src="/credentials/beemedic-partner.png"
                            alt="BEE Medic Authorized Training Partner"
                            className="h-full w-auto max-h-28 object-contain sm:max-h-28"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-green">
                                Credential
                              </p>
                              <h3 className="mt-1 font-display text-lg text-navy group-hover:text-green">
                                BEE Medic Training Partner
                              </h3>
                            </div>
                            <ExternalLink
                              className="mt-1 h-4 w-4 shrink-0 text-muted"
                              aria-hidden
                            />
                          </div>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">
                            Authorized training partner for a major
                            neurofeedback equipment and education provider.
                          </p>
                        </div>
                      </a>
                      <a
                        href="http://www.qeegcourses.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col gap-4 rounded-2xl border border-border bg-bg p-5 transition-all hover:border-green/40 hover:shadow-md sm:flex-row sm:items-center"
                      >
                        <div className="flex h-20 w-full shrink-0 items-center justify-center rounded-xl bg-white p-3 sm:h-24 sm:w-44">
                          <img
                            src="/credentials/qeeg-courses.png"
                            alt="QEEG Courses logo"
                            className="h-14 w-auto max-w-full object-contain"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-green">
                                Training partner
                              </p>
                              <h3 className="mt-1 font-display text-lg text-navy group-hover:text-green">
                                QEEG Courses
                              </h3>
                            </div>
                            <ExternalLink
                              className="mt-1 h-4 w-4 shrink-0 text-muted"
                              aria-hidden
                            />
                          </div>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">
                            Workshop series and mentoring pathways for
                            practitioners expanding QEEG and neurofeedback.
                          </p>
                        </div>
                      </a>
                    </div>
                  )}
                  <ul className="mt-5 grid gap-2 sm:grid-cols-3">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2 rounded-xl bg-bg px-3 py-2.5 text-sm text-ink-soft"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-green"
                          aria-hidden
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section-pad border-t border-border bg-green-soft/30">
        <div className="container-abt grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              Getting started
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              A consultation is required before intake and ongoing services.
              Calling the AI Scheduling Agent is the easiest path. Online
              booking is available as a beta option. Use the staff line for
              QEEG scheduling, scheduling obstacles, or non-scheduling questions.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-ink-soft">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green" />
                New clients: start with a consult (call or text)
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green" />
                Existing clients: list, cancel, or reschedule by phone/text
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green" />
                Teaching clinic rates available when trainees are on staff
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card md:p-8">
            <h3 className="font-display text-xl text-navy">
              Reach the Front Desk
            </h3>
            <p className="mt-2 text-sm text-muted">
              Live receptionist most business hours. AI assists after hours or
              when staff cannot answer — fully integrated with our EHR.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="phone" size="lg" className="w-full">
                <a href={site.phoneTel}>
                  <Phone className="h-4 w-4" aria-hidden />
                  Call {site.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href={site.phoneSms}>
                  <MessageSquare className="h-4 w-4" aria-hidden />
                  Text {site.phone}
                </a>
              </Button>
              <Button asChild variant="soft" size="lg" className="w-full">
                <Link to="/front-desk">Learn how Front Desk works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to explore the right service?" />
    </>
  );
}
