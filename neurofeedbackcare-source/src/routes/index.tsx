import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  Brain,
  HeartPulse,
  GraduationCap,
  Phone,
  MessageSquare,
  ShieldCheck,
  Wind,
  ArrowRight,
  MapPin,
  Mail,
  Globe2,
  BookOpen,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { ImageCarousel } from "@/components/image-carousel";
import { homeCarouselSlides } from "@/lib/clinic-images";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title:
          "Alternative Behavioral Therapy | Neurofeedback & Counseling — Vancouver, WA",
      },
      {
        name: "description",
        content:
          "Neurofeedback, QEEG brain mapping, talk therapy (EMDR & IFS), limited M-HBOT, and mentoring in Vancouver, WA. Call or text (360) 553-1350 — AI-assisted Front Desk. No online booking.",
      },
    ],
  }),
});

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Leading clinical expertise",
    detail:
      "Nearly 15 years in neurofeedback. Joshua Moore, MA, LMHC, is Board Certified in Neurofeedback (BCN) through BCIA.",
  },
  {
    icon: Globe2,
    title: "International teaching",
    detail:
      "We train and consult with practitioners worldwide — including phenotype-model courses and publications.",
  },
  {
    icon: BookOpen,
    title: "Phenotype-informed care",
    detail:
      "We use the phenotype model to guide individualized protocols, and share that approach through trainings and writing.",
  },
  {
    icon: ShieldCheck,
    title: "Out-of-network · superbills",
    detail:
      "We do not bill insurance directly. Superbills are available so you can seek reimbursement from your plan.",
  },
  {
    icon: GraduationCap,
    title: "Teaching clinic",
    detail:
      "Supervised interns, associates, and technicians — lower-rate options when trainees are on staff.",
  },
];

const heroHighlights = [
  "Neurofeedback & QEEG brain mapping",
  "Talk therapy with EMDR & IFS",
  "Teaching clinic with supervised trainees",
  "Out-of-network · superbills available",
  `Session rates ${site.rates.range} by provider`,
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(ellipse 70% 50% at 15% 10%, var(--color-green) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 90% 0%, var(--color-navy) 0%, transparent 50%)",
          }}
        />

        {/* Brand mark — tight border hugging the logo, centered */}
        <div className="container-abt relative flex justify-center pt-10 md:pt-14">
          <div className="inline-flex max-w-[min(100%,28rem)] items-center justify-center rounded-2xl border border-border bg-surface px-4 py-3 shadow-card sm:max-w-[min(100%,32rem)] sm:px-5 sm:py-3.5 md:max-w-[36rem] md:px-6 md:py-4">
            <img
              src="/brand/logo-horizontal-color.jpg"
              alt={site.name}
              className="mx-auto block h-auto w-full object-contain"
              width={2500}
              height={720}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="container-abt relative grid items-stretch gap-12 py-12 md:grid-cols-2 md:gap-12 md:py-16 lg:gap-16">
          {/* Left column — balanced length, early CTAs, no rate/OON/teaching redundancy in body */}
          <div className="flex flex-col">
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-green/30 bg-green-soft/90 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-navy md:text-base">
              <span
                className="h-2 w-2 rounded-full bg-green"
                aria-hidden
              />
              Vancouver, WA
            </div>

            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-navy text-balance sm:text-5xl md:text-5xl lg:text-[3.5rem]">
              Healing that starts with how your brain works
            </h1>

            {/* Primary contact — high on page for phones & short viewports */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button asChild variant="phone" size="xl" className="shadow-md">
                <a href={site.phoneTel}>
                  <Phone className="h-5 w-5" aria-hidden />
                  Call or text {site.phone}
                </a>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={site.phoneSms}>
                  <MessageSquare className="h-5 w-5" aria-hidden />
                  Text Front Desk
                </a>
              </Button>
            </div>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
              Live receptionist most business hours. After hours—or if no one
              answers—our EHR-integrated AI handles appointments without delay.
              No online booking form.
            </p>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl md:leading-relaxed">
              Neurofeedback, QEEG brain mapping, and talk therapy with EMDR
              & IFS for ADHD, anxiety, PTSD, sleep concerns, and more —
              personalized care focused on lasting change.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              We help individuals heal, strengthen, and gain personal insight
              through brain-based training and a strong therapeutic
              relationship — care grounded in how your unique nervous system
              works.
            </p>

            <ul className="mt-7 space-y-3">
              {heroHighlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base text-navy md:text-lg"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-green md:h-6 md:w-6"
                    aria-hidden
                  />
                  <span className="font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold">
              <Link
                to="/front-desk"
                className="inline-flex items-center gap-1.5 text-green hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              >
                How Front Desk works
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-navy hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              >
                Explore services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-navy hover:text-green focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              >
                Contact us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="flex">
            <div className="relative mx-auto w-full max-w-lg md:mx-0 md:max-w-none">
              <div
                className="absolute -inset-3 rounded-[2rem] bg-green-soft/60 blur-2xl"
                aria-hidden
              />
              <div className="relative flex h-full flex-col rounded-3xl border border-border bg-surface p-7 shadow-lg md:p-9">
                <p className="text-lg font-semibold uppercase tracking-wider text-green md:text-xl">
                  Why families choose us
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                  Recognized expertise in neurofeedback — clinical care,
                  teaching, and training partnerships with major equipment
                  providers.
                </p>
                <ul className="mt-6 flex-1 space-y-5">
                  {trustPoints.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.title} className="flex gap-3.5">
                        <Icon
                          className="mt-0.5 h-6 w-6 shrink-0 text-green"
                          aria-hidden
                        />
                        <div className="min-w-0">
                          <p className="text-base font-semibold text-navy md:text-lg">
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-8 border-t border-border pt-6">
                  <a
                    href="https://beemedic.com/en/education"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 rounded-2xl bg-navy/95 px-4 py-6 transition-opacity hover:opacity-95 sm:flex-row sm:gap-6 sm:px-6 sm:py-5"
                  >
                    <img
                      src="/credentials/beemedic-partner.png"
                      alt="BEE Medic Authorized Training Partner — AUTHORIZED · BEEMEDIC · TRAINING PARTNER"
                      className="h-36 w-36 shrink-0 object-contain sm:h-40 sm:w-40 md:h-44 md:w-44"
                      width={176}
                      height={176}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="min-w-0 text-center sm:text-left">
                      <p className="text-xs font-semibold uppercase tracking-wider text-green-bright">
                        Partner credential
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-white md:text-xl">
                        Authorized BEE Medic Training Partner
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                        Acknowledged by a major neurofeedback equipment and
                        education provider — supporting our clinical teaching
                        and training work.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section-pad" aria-labelledby="who-heading">
        <div className="container-abt grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              Who we are
            </p>
            <h2
              id="who-heading"
              className="mt-2 font-display text-3xl text-navy text-balance md:text-4xl"
            >
              Holistic care rooted in the nervous system
            </h2>
          </div>
          <div className="space-y-4 text-muted leading-relaxed lg:col-span-7">
            <p>
              Our focus is to help individuals heal, strengthen, and gain
              personal insight through neurofeedback and counseling. We believe
              in the pursuit of holistic healing — growing from struggles,
              healing from pain, and moving forward to where you want to be.
            </p>
            <p>
              Therapists at Alternative Behavioral Therapy are passionate about
              neurofeedback and equally committed to the therapeutic
              relationship. Care is personalized, evidence-informed, and
              grounded in how your unique brain and nervous system work.
            </p>
            <p>
              With nearly 15 years of neurofeedback experience, Board
              Certification in Neurofeedback (BCN), and an international
              teaching practice, our clinic combines hands-on clinical care with
              the phenotype model used in our trainings and publications.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic photo carousel */}
      <section
        className="border-y border-border bg-surface section-pad !py-10 md:!py-12"
        aria-labelledby="clinic-photos-heading"
      >
        <div className="container-abt">
          <div className="mb-6 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green">
              In the clinic
            </p>
            <h2
              id="clinic-photos-heading"
              className="mt-2 font-display text-2xl text-navy md:text-3xl"
            >
              Real care, real sessions
            </h2>
            <p className="mt-2 text-sm text-muted md:text-base">
              Neurofeedback and QEEG work in a calm, professional setting —
              photos from our Vancouver office.
            </p>
          </div>
          <ImageCarousel slides={homeCarouselSlides} />
        </div>
      </section>

      {/* Teaching clinic */}
      <section
        className="border-b border-border bg-navy"
        aria-labelledby="teaching-heading"
      >
        <div className="container-abt flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-green-bright">
                <GraduationCap className="h-5 w-5" aria-hidden />
              </div>
              <h2
                id="teaching-heading"
                className="font-display text-xl text-white md:text-2xl"
              >
                A teaching clinic
              </h2>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
              We regularly train student interns, associate therapists, and
              technicians under clinical supervision. When a trainee is on
              staff, supervised neurofeedback may be available at a lower rate
              (as low as $65). Availability varies — ask the Front Desk.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button asChild variant="phone" size="lg">
              <a href={site.phoneTel}>Call {site.phone}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/35 text-white hover:bg-white hover:text-navy"
            >
              <Link to="/the-team">Meet the team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section
        className="section-pad bg-bg"
        aria-labelledby="services-heading"
      >
        <div className="container-abt">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-green">
                Services
              </p>
              <h2
                id="services-heading"
                className="mt-2 font-display text-3xl text-navy md:text-4xl"
              >
                How we help
              </h2>
              <p className="mt-3 text-muted">
                From brain mapping to talk therapy and mentoring — care that
                meets you where you are.
              </p>
            </div>
            <Button asChild variant="soft" size="lg">
              <Link to="/services">
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              title="Neurofeedback"
              description="EEG biofeedback custom-tuned to your nervous system. A natural approach for PTSD, anxiety, depression, ADHD, sleep, and overall wellbeing."
              icon={Brain}
              href="/services"
              hash="neurofeedback"
            />
            <ServiceCard
              title="QEEG Brain Mapping"
              description="About 20 minutes of recording from 19 sites. Careful analysis guides personalized neurofeedback protocols tailored to you."
              icon={Activity}
              href="/services"
              hash="qeeg"
            />
            <ServiceCard
              title="Talk Therapy · EMDR · IFS"
              description="Solution-focused counseling for anxiety, depression, PTSD, dissociation, postpartum, and more. Therapists trained in EMDR and Internal Family Systems."
              icon={HeartPulse}
              href="/services"
              hash="talk-therapy"
            />
            <ServiceCard
              title="Mild Hyperbaric Oxygen"
              description="Limited, medically supervised M-HBOT (sit-up system, ~35% oxygen at 2 ATA). Not available to all applicants — inquire with the office."
              icon={Wind}
              href="/services"
              hash="mhbot"
            />
            <ServiceCard
              title="Mentoring & Courses"
              description="QEEG and neurofeedback mentoring for clinicians worldwide, plus introductory workshops for practitioners expanding their scope."
              icon={GraduationCap}
              href="/services"
              hash="mentoring"
            />
            <article className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-green/40 bg-green-soft/40 p-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-green">
                  Next step
                </p>
                <h3 className="mt-3 font-display text-xl text-navy">
                  Start with a call or text
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  No online calendar. Reach the Front Desk to request a
                  consultation, ask about rates, or change an appointment.
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-2">
                <Button asChild variant="primary" className="w-full">
                  <a href={site.phoneTel}>
                    <Phone className="h-4 w-4" aria-hidden />
                    {site.phone}
                  </a>
                </Button>
                <Button asChild variant="ghost" className="w-full">
                  <Link to="/front-desk">Front Desk details</Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Front Desk + Contact strip */}
      <section className="section-pad" aria-labelledby="next-heading">
        <div className="container-abt">
          <h2 id="next-heading" className="sr-only">
            Front Desk and contact
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-surface p-7 shadow-card md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-green">
                Front Desk
              </p>
              <h3 className="mt-2 font-display text-2xl text-navy md:text-3xl">
                Appointments by phone or text
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                {site.frontDesk.body}
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-ink-soft">
                {[
                  "List, cancel, or reschedule appointments",
                  "Request a new consultation",
                  "Live staff during business hours",
                  "AI after hours — fully EHR integrated",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="primary" size="lg">
                  <Link to="/front-desk">Front Desk</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={site.phoneSms}>
                    <MessageSquare className="h-4 w-4" aria-hidden />
                    Text us
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-navy p-7 text-white md:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-green-bright">
                Contact
              </p>
              <h3 className="mt-2 font-display text-2xl text-white md:text-3xl">
                Visit or reach the office
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-white/85">
                <li className="flex gap-3">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-green-bright"
                    aria-hidden
                  />
                  <span>{site.address.full}</span>
                </li>
                <li>
                  <a
                    href={site.phoneTel}
                    className="flex gap-3 transition-colors hover:text-green-bright"
                  >
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-bright"
                      aria-hidden
                    />
                    <span>Office: {site.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.emailMailto}
                    className="flex gap-3 transition-colors hover:text-green-bright"
                  >
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-green-bright"
                      aria-hidden
                    />
                    <span>{site.email}</span>
                  </a>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="phone" size="lg">
                  <Link to="/contact">Contact page</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/35 text-white hover:bg-white hover:text-navy"
                >
                  <a href={site.phoneTel}>Call now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
