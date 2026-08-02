import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Phone, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { TeamCard } from "@/components/team-card";
import { CtaBand } from "@/components/cta-band";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const Route = createFileRoute("/the-team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "The Team | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Meet Joshua Moore, MA, LMHC, BCN, Michelle Moore, MA, LMHC, and our teaching clinic team. Rates $65–$185 depending on provider.",
      },
    ],
  }),
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="The Team"
        title="Clinicians, mentors, and a teaching clinic"
        description="Warm, professional care from licensed counselors and supervised trainees. Rates range $65–$185 depending on the provider — the lowest rates are available when a trainee is on staff."
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
              Ask Front Desk about availability
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </PageHero>

      <section className="section-pad">
        <div className="container-abt grid gap-6 lg:grid-cols-2">
          <TeamCard
            name="Joshua Moore"
            credentials="MA, LMHC, BCN"
            role="Licensed Mental Health Counselor · Board Certified in Neurofeedback"
            rate="Up to $185"
            imageSrc="/team/joshua.jpg"
            bio="I am a licensed mental health counselor who incorporates talk therapy, EMDR, QEEG brain mapping, family systems work, and neurofeedback. I am passionate about the growing field of neurofeedback and the many ways we can use this approach for mental and physical ailments. I provide psycho-education so clients feel safe, confident, and hopeful. I often work with difficult cases — including dissociative identity disorder, PTSD, traumatic brain injuries, and complex or mystery presentations. Master's in Counseling from Multnomah University; Bachelor's in Theology; board certified in neurofeedback. I also offer mentoring and courses for practitioners."
          />
          <TeamCard
            name="Michelle Moore"
            credentials="MA, LMHC"
            role="Licensed Mental Health Counselor"
            rate="$165"
            imageSrc="/team/michelle.jpg"
            bio="I am a licensed mental health counselor focused on building a safe environment where clients feel heard and valued. I specialize in combining talk therapy, neurofeedback, and EMDR, and believe the most effective treatment often weaves all three together — though I also offer neurofeedback alone for clients already working with another therapist. I incorporate story work to understand behavior and build coping strategies. I have a particular passion for supporting mothers of young children, and work with anxiety, panic, PTSD, emotional imbalance, depression, codependency, and postpartum concerns. Master's in Counseling from Multnomah University; Bachelor's in Psychology from Hope International University."
          />
        </div>
      </section>

      <section className="section-pad border-t border-border bg-surface">
        <div className="container-abt">
          <div className="grid gap-8 rounded-3xl border border-border bg-bg p-6 md:grid-cols-[auto_1fr] md:items-start md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-soft text-green">
              <GraduationCap className="h-7 w-7" aria-hidden />
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy md:text-3xl">
                Teaching clinic · supervised trainees
              </h2>
              <p className="mt-4 max-w-3xl text-muted leading-relaxed">
                Alternative Behavioral Therapy is a teaching clinic. We
                regularly include student interns, associate therapists
                (therapists in training), and technicians who are supervised by
                administrative therapists at ABT.
              </p>
              <p className="mt-3 max-w-3xl text-muted leading-relaxed">
                That structure allows us to offer neurofeedback at a
                significantly lower rate when trainees are available — often as
                low as <strong className="text-navy">$65</strong>. Trainee
                availability is not constant; ask your clinician or call the
                Front Desk to check current options.
              </p>
              <p className="mt-3 max-w-3xl text-sm text-muted">
                Overall session rates range{" "}
                <strong className="text-navy">{site.rates.range}</strong>{" "}
                depending on credentials, experience, and availability.
                Assessments are billed separately. See the{" "}
                <Link to="/cost" className="font-semibold text-green hover:underline">
                  Cost
                </Link>{" "}
                page for a clear overview.
              </p>
              <div className="mt-6">
                <Button asChild variant="soft">
                  <Link to="/cost">View cost details</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for the right clinician?"
        description="Call or text (360) 553-1350. Front Desk can explain availability, waitlists, and whether a supervised trainee option is open right now."
      />
    </>
  );
}
