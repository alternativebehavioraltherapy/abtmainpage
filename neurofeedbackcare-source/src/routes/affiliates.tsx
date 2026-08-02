import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/affiliates")({
  component: AffiliatesPage,
  head: () => ({
    meta: [
      { title: "Affiliates | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Affiliate partners of Alternative Behavioral Therapy — neurofeedback, psychiatry, nutrition, and holistic care in the Pacific Northwest.",
      },
    ],
  }),
});

const affiliates = [
  {
    name: "Neurofeedback For All, LLC",
    description:
      "A non-directive neurofeedback approach used in a cost-effective non-clinical model.",
    phone: "360-209-2140",
    url: "https://www.brainbalancenw.com/",
  },
  {
    name: "NeuroTek NW",
    description:
      "Support related to sleep problems, anger, ADHD, addictions, and emotional reactivity.",
    phone: "360-207-3100",
    url: "https://www.neuroteknw.com/",
  },
  {
    name: "Mike Tremko, PMHNP-BC",
    description:
      "Psychiatric nurse practitioner specializing in holistic approaches and medication management.",
    phone: "(503) 364-6093",
    url: "http://mvcounseling.com/Providers/Mike-Tremko.html",
  },
  {
    name: "Bluestem Curative Nutrition",
    description: "Functional healthcare is where healing begins.",
    phone: "360.798.9238",
    url: "http://www.bluestemnutrition.com/",
  },
  {
    name: "Megan Gallegos",
    description:
      "Family medicine practitioner offering IV therapy and holistic healing approaches.",
    url: "http://www.pearlfamilyhealth.com",
  },
  {
    name: "Abundant Wellness with Andrea",
    description:
      "Functional hormone practitioner specializing in holistic healing of body, emotions, and mind through targeted nutrition and inner work.",
    url: "https://www.abundantwellnesswithandrea.com/",
  },
];

function AffiliatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliates"
        title="Trusted partners in care"
        description="We collaborate with complementary providers across the region. Interested in becoming an affiliate? Call or text our Front Desk."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="phone" size="lg">
            <a href={site.phoneTel}>
              <Phone className="h-4 w-4" aria-hidden />
              Call or text {site.phone}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              Contact ABT
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {affiliates.map((a) => (
            <article
              key={a.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-green/35 hover:shadow-md"
            >
              <h3 className="font-display text-xl text-navy">{a.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {a.description}
              </p>
              <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
                {a.phone && (
                  <a
                    href={`tel:${a.phone.replace(/[^\d+]/g, "")}`}
                    className="block font-semibold text-green hover:underline"
                  >
                    {a.phone}
                  </a>
                )}
                {a.url && (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-green"
                  >
                    Visit website
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="container-abt mt-10">
          <div className="rounded-2xl border border-dashed border-green/40 bg-green-soft/40 px-6 py-8 text-center">
            <h2 className="font-display text-xl text-navy">
              Stay tuned for more
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted">
              We are always seeking thoughtful new affiliates who share our
              commitment to integrative, client-centered care.
            </p>
            <Button asChild variant="soft" className="mt-5">
              <a href={site.phoneTel}>Call to discuss a partnership</a>
            </Button>
          </div>
        </div>
      </section>

      <CtaBand title="Need a referral or partnership conversation?" />
    </>
  );
}
