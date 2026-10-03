import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { LearnSlideDeck } from "@/components/learn-slide-deck";
import {
  learnConditions,
  overviewCitations,
  overviewCopy,
  overviewSlides,
  type LearnCondition,
  type LearnProtocol,
} from "@/lib/neurofeedback-learn";
import { site } from "@/lib/site";
import { pageHead, pagesSeo } from "@/lib/seo";

export const Route = createFileRoute("/about-neurofeedback")({
  component: AboutNeurofeedbackPage,
  head: () => pageHead(pagesSeo.aboutNeurofeedback),
});

function Protocols({ protocols }: { protocols?: LearnProtocol[] }) {
  if (!protocols?.length) return null;
  return (
    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-green">
        Common protocols
      </p>
      <p className="mt-1 text-xs text-muted">
        Names used in the literature. Not a protocol prescription.
      </p>
      <ul className="mt-3 space-y-2">
        {protocols.map((item) => (
          <li key={item.name} className="text-sm leading-relaxed">
            <span className="font-semibold text-navy">{item.name}. </span>
            <span className="text-ink-soft">{item.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ConditionCard({ condition }: { condition: LearnCondition }) {
  const soon = condition.status === "soon";
  return (
    <article
      id={condition.id}
      className={
        soon
          ? "flex flex-col scroll-mt-40 rounded-2xl border border-dashed border-border bg-bg p-5 md:p-6"
          : "scroll-mt-40 rounded-2xl border border-border bg-surface p-5 shadow-card md:col-span-2 md:p-7"
      }
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-display text-2xl text-navy sm:text-3xl md:text-4xl">
          {condition.title}
        </h3>
        {condition.rating ? (
          <p className="rounded-full bg-navy px-4 py-2 text-lg font-semibold leading-none text-white sm:text-xl">
            {condition.rating.score} · {condition.rating.label}
          </p>
        ) : null}
      </div>
      {condition.rating ? (
        <p className="mt-3 text-sm text-muted">
          <a
            href={condition.rating.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-green underline-offset-2 hover:text-navy"
          >
            {condition.rating.source}
          </a>
        </p>
      ) : null}
      {condition.blurb ? (
        <p className="mt-2 text-sm text-ink-soft">{condition.blurb}</p>
      ) : null}
      <Protocols protocols={condition.protocols} />
      {condition.slides?.length ? (
        <LearnSlideDeck slides={condition.slides} className="mt-6" />
      ) : null}
      {condition.studies?.length ? (
        <ul className="mt-4 space-y-3">
          {condition.studies.map((study) => (
            <li
              key={study.id}
              className="border-t border-border pt-3 text-sm leading-relaxed"
            >
              <span className="font-semibold text-green">{study.kind}. </span>
              {study.href ? (
                <a
                  href={study.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-navy underline decoration-green underline-offset-2"
                >
                  {study.cite}
                </a>
              ) : (
                <span className="font-medium text-navy">{study.cite}</span>
              )}
              <span className="text-ink-soft"> — {study.point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {condition.citations?.length ? (
        <div className="mt-6 border-t border-border pt-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            Citations
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-xs leading-relaxed text-muted">
            {condition.citations.map((cite) => (
              <li key={cite.text.slice(0, 48)}>
                {cite.href ? (
                  <a
                    href={cite.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-green underline-offset-2 hover:text-navy"
                  >
                    {cite.text}
                  </a>
                ) : (
                  cite.text
                )}
              </li>
            ))}
          </ol>
        </div>
      ) : null}
      {soon ? (
        <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-green">
          Graphics coming soon
        </p>
      ) : null}
    </article>
  );
}

function AboutNeurofeedbackPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="About neurofeedback"
        description="EEG neurofeedback is a form of biofeedback. Sensors on the scalp read brain electrical activity and return sound or visuals in real time so a person can practice self-regulation. Educational overview — not a promise of individual results."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Bot className="h-4 w-4" aria-hidden />
              Call AI {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services" hash="neurofeedback">
              Neurofeedback services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section id="overview" className="border-b border-border bg-surface section-pad scroll-mt-40">
        <div className="container-abt">
          <LearnSlideDeck slides={overviewSlides} heading="Overview" />
          <ul className="mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-ink-soft">
            {overviewCopy.map((p) => (
              <li key={p.slice(0, 40)}>{p}</li>
            ))}
          </ul>
          <div className="mt-8 max-w-3xl border-t border-border pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-green">
              Citations
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-xs leading-relaxed text-muted">
              {overviewCitations.map((cite) => (
                <li key={cite.text.slice(0, 40)}>
                  {cite.href ? (
                    <a
                      href={cite.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-green underline-offset-2 hover:text-navy"
                    >
                      {cite.text}
                    </a>
                  ) : (
                    cite.text
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="evidence" className="section-pad scroll-mt-40">
        <div className="container-abt">
          <p className="text-xs font-semibold uppercase tracking-wider text-green">
            Applications
          </p>
          <h2 className="mt-2 font-display text-3xl text-navy md:text-4xl">
            What the evidence says
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            AAPB field ratings from the 4th edition handbook. Protocol names
            are from the literature — not a prescription. Graphics for ADHD,
            epilepsy, depression, and anxiety can be added as lecture slides
            are ready.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {learnConditions.map((condition) => (
              <ConditionCard key={condition.id} condition={condition} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface section-pad">
        <div className="container-abt flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl text-navy md:text-3xl">
              Ready to talk about training here?
            </h2>
            <p className="mt-2 text-sm text-muted">
              Call the AI Scheduling Agent for a consult. Protocol choice is a
              clinical decision after assessment — including QEEG when
              appropriate.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="phone" size="lg">
              <a href={site.phoneTel}>Call AI {site.phone}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/resources">
                Field resources
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
