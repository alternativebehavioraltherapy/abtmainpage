import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Phone, ArrowRight, BookOpen } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/resources")({
  component: ResourcesPage,
  head: () => ({
    meta: [
      { title: "Additional Resources | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Neurofeedback and biofeedback resources: EEG Info, AAPB, ISNR, BCIA, BEE Medic, and QEEG Courses. Call Alternative Behavioral Therapy at (360) 553-1350.",
      },
    ],
  }),
});

const resources = [
  {
    name: "EEG Info",
    description:
      "Education and information on EEG and neurofeedback for clinicians and the public.",
    url: "https://www.eeginfo.com",
    tag: "Education",
  },
  {
    name: "AAPB",
    description:
      "Association for Applied Psychophysiology and Biofeedback — professional standards, advocacy, and education.",
    url: "https://www.aapb.org",
    tag: "Professional org",
  },
  {
    name: "ISNR",
    description:
      "International Society for Neuroregulation & Research — research community and professional development.",
    url: "https://isnr.org",
    tag: "Research",
  },
  {
    name: "QEEG Courses",
    description:
      "Workshop series and mentoring pathways for practitioners entering or expanding neurofeedback practice.",
    url: "http://www.qeegcourses.com",
    tag: "Training",
  },
  {
    name: "BEE Medic",
    description:
      "Neurofeedback equipment, education, and authorized training partner network.",
    url: "https://beemedic.com/en",
    tag: "Equipment & training",
  },
];

const credentials = [
  {
    name: "BCIA",
    description:
      "Board Certified in Neurofeedback (BCN) — certification through the Biofeedback Certification International Alliance.",
    href: "https://www.bcia.org",
    img: "/credentials/bcia-badge.png",
    imgClass: "h-20 w-20 object-contain",
    alt: "BCIA Biofeedback Certification International Alliance seal",
  },
  {
    name: "BEE Medic",
    description:
      "Authorized Training Partner — recognized by a major neurofeedback equipment and education provider.",
    href: "https://beemedic.com/en/education",
    img: "/credentials/beemedic-partner.png",
    imgClass: "h-20 w-20 object-contain",
    alt: "BEE Medic Authorized Training Partner badge",
  },
  {
    name: "QEEG Courses",
    description:
      "Training and workshop pathways for QEEG and neurofeedback practitioners.",
    href: "http://www.qeegcourses.com",
    img: "/credentials/qeeg-courses.png",
    imgClass: "h-14 w-auto max-w-[180px] object-contain",
    alt: "QEEG Courses logo",
  },
];

function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Additional Resources"
        title="Learn more about neurofeedback"
        description="A short, clean set of external references. This page is designed to grow over time — without clutter or outdated downloads."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Phone className="h-4 w-4" aria-hidden />
              Call or text {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/services">
              Our services
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt">
          {/* Credential / partner marks */}
          <div className="mb-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {credentials.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-md"
              >
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                  <img
                    src={c.img}
                    alt={c.alt}
                    className={c.imgClass}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="font-display text-xl text-navy group-hover:text-green">
                      {c.name}
                    </h2>
                    <ExternalLink
                      className="mt-1 h-4 w-4 shrink-0 text-muted"
                      aria-hidden
                    />
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {c.description}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-navy group-hover:text-green">
                    Visit site
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-soft text-green">
              <BookOpen className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-xl text-navy">
                Organizations & education
              </h2>
              <p className="text-sm text-muted">
                External sites open in a new tab
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {resources.map((r) => (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-green/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-green">
                      {r.tag}
                    </span>
                    <h3 className="mt-1 font-display text-xl text-navy group-hover:text-green">
                      {r.name}
                    </h3>
                  </div>
                  <ExternalLink
                    className="mt-1 h-4 w-4 shrink-0 text-muted"
                    aria-hidden
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {r.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-navy group-hover:text-green">
                  Visit site
                </p>
              </a>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-bg px-6 py-5 text-sm text-muted">
            <p>
              This page intentionally omits staff training materials and the
              DID article PDF formerly offered for download. If you need a
              clinician-to-clinician resource, call or text the Front Desk and
              we will point you in the right direction.
            </p>
          </div>
        </div>
      </section>

      <CtaBand title="Questions about care or training pathways?" />
    </>
  );
}
