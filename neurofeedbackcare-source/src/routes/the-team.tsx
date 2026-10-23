import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TeamCard } from "@/components/team-card";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { pageHead, pagesSeo, SITE_ORIGIN } from "@/lib/seo";
import { JsonLd } from "@/components/json-ld";

export const Route = createFileRoute("/the-team")({
  component: TeamPage,
  head: () => pageHead(pagesSeo.team),
});

function TeamPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Clinical team",
          itemListElement: [
            {
              "@type": "Person",
              name: "Joshua Moore",
              jobTitle: "Licensed Mental Health Counselor",
              honorificSuffix: "MA, LMHC, BCN",
              worksFor: { "@id": `${SITE_ORIGIN}/#clinic` },
              url: `${SITE_ORIGIN}/the-team`,
              image: `${SITE_ORIGIN}/team/joshua.jpg`,
              knowsAbout: [
                "Neurofeedback",
                "QEEG",
                "EMDR",
                "PTSD",
                "ADHD",
              ],
            },
            {
              "@type": "Person",
              name: "Michelle Moore",
              jobTitle: "Licensed Mental Health Counselor",
              honorificSuffix: "MA, LMHC",
              worksFor: { "@id": `${SITE_ORIGIN}/#clinic` },
              url: `${SITE_ORIGIN}/the-team`,
              image: `${SITE_ORIGIN}/team/michelle.jpg`,
              knowsAbout: [
                "Psychotherapy",
                "Neurofeedback",
                "EMDR",
                "Postpartum",
                "Anxiety",
              ],
            },
          ],
        }}
      />
      <PageHero
        eyebrow="The Team"
        title="Clinicians, technicians, and a teaching clinic"
        description={`Licensed counselors plus supervised technicians and interns. Session rates range ${site.rates.range}. Joshua Moore is ${site.rates.joshua}. Michelle Moore is ${site.rates.michelle}. Technicians in training and interns are ${site.rates.technician}.`}
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
              Ask Front Desk about availability
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            Licensed clinicians
          </p>
          <div className="mt-5 grid gap-6 lg:grid-cols-2">
            <TeamCard
              name="Joshua Moore"
              credentials="MA, LMHC, BCN"
              role="Licensed Mental Health Counselor · Board Certified in Neurofeedback"
              rate="$195"
              imageSrc="/team/joshua.jpg"
              bio="I am a licensed mental health counselor who incorporates talk therapy, EMDR, QEEG brain mapping, family systems work, and neurofeedback. I am passionate about the growing field of neurofeedback and the many ways we can use this approach for mental and physical ailments. I provide psycho-education so clients feel safe, confident, and hopeful. I often work with difficult cases — including dissociative identity disorder, PTSD, traumatic brain injuries, and complex or mystery presentations. Master's in Counseling from Multnomah University; Bachelor's in Theology; board certified in neurofeedback. I also offer mentoring and courses for practitioners."
            />
            <TeamCard
              name="Michelle Moore"
              credentials="MA, LMHC"
              role="Licensed Mental Health Counselor"
              rate="$175"
              imageSrc="/team/michelle.jpg"
              bio="I am a licensed mental health counselor focused on building a safe environment where clients feel heard and valued. I specialize in combining talk therapy, neurofeedback, and EMDR, and believe the most effective treatment often weaves all three together — though I also offer neurofeedback alone for clients already working with another therapist. I incorporate story work to understand behavior and build coping strategies. I have a particular passion for supporting mothers of young children, and work with anxiety, panic, PTSD, emotional imbalance, depression, codependency, and postpartum concerns. Master's in Counseling from Multnomah University; Bachelor's in Psychology from Hope International University."
            />
          </div>
        </div>
      </section>

      <section
        id="technicians"
        className="section-pad border-t border-border bg-surface scroll-mt-40"
      >
        <div className="container-abt">
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            Technicians & interns
          </p>
          <h2 className="mt-2 font-display text-3xl text-navy md:text-4xl">
            Supervised care at a lower rate
          </h2>
          <article className="mt-8 overflow-hidden rounded-3xl border border-border bg-bg shadow-card">
            <div className="grid lg:grid-cols-2">
              <figure className="relative min-h-[16rem] bg-navy/5 lg:min-h-full">
                <img
                  src="/team/technician-room.jpg"
                  alt="Neurofeedback session room with recliner, feedback monitor, and training desk"
                  className="h-full w-full object-cover object-center"
                  width={960}
                  height={960}
                  decoding="async"
                />
              </figure>
              <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
                <p className="inline-flex w-fit rounded-full bg-green-soft px-3 py-1 text-xs font-semibold text-navy">
                  Per session: {site.rates.technician}
                </p>
                <h3 className="mt-4 font-display text-2xl text-navy md:text-3xl">
                  Technicians in training and interns
                </h3>
                <p className="mt-2 text-sm font-medium text-muted">
                  Teaching clinic · supervised by ABT clinicians
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">
                  Our technicians in training and student interns deliver
                  neurofeedback under clinical supervision. Those sessions are{" "}
                  <strong className="text-navy">{site.rates.technician}</strong>
                  .
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  Availability varies with the teaching calendar. Ask Front
                  Desk whether a technician or intern option is open for your
                  sessions.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild variant="soft">
                    <Link to="/cost">View cost details</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/front-desk">Check availability</Link>
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="section-pad border-t border-border">
        <div className="container-abt">
          <div className="grid gap-8 rounded-3xl border border-border bg-surface p-6 md:grid-cols-[auto_1fr] md:items-start md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-soft text-green">
              <GraduationCap className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy md:text-3xl">
                Teaching clinic
              </h2>
              <p className="mt-4 max-w-3xl text-muted leading-relaxed">
                Alternative Behavioral Therapy regularly includes student
                interns, associate therapists, and technicians supervised by
                administrative therapists at ABT. That is how we can offer
                lower-rate neurofeedback without changing the clinical
                oversight of your care.
              </p>
              <p className="mt-3 max-w-3xl text-sm text-muted">
                Overall session rates range{" "}
                <strong className="text-navy">{site.rates.range}</strong>.
                Assessments such as QEEG are billed separately. See the{" "}
                <Link
                  to="/cost"
                  className="font-semibold text-green hover:underline"
                >
                  Cost
                </Link>{" "}
                page for QEEG fees and a full overview.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for the right clinician?"
        description="Call the AI Scheduling Agent at (360) 800-4066. Front Desk can explain availability, waitlists, and whether a technician or intern option is open right now."
      />
    </>
  );
}
