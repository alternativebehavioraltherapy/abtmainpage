import { Link } from "@tanstack/react-router";
import { Bot, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function CtaBand({
  title = "Ready to take the next step?",
  description = "Call or text our AI Scheduling Agent at (360) 800-4066. Appointments are first come, first served. Use the staff line for QEEG, scheduling obstacles, or non-scheduling concerns.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section
      className="section-pad bg-navy text-white"
      aria-labelledby="cta-band-heading"
    >
      <div className="container-abt max-w-3xl text-center">
        <h2
          id="cta-band-heading"
          className="font-display text-3xl text-white md:text-4xl"
        >
          {title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="phone" size="xl">
            <a href={site.phoneTel}>
              <Bot className="h-5 w-5" aria-hidden />
              Call AI {site.phone}
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="xl"
            className="border-white/40 text-white hover:bg-white hover:text-navy"
          >
            <a href={site.staff.tel}>
              <Phone className="h-5 w-5" aria-hidden />
              Staff {site.staff.phone}
            </a>
          </Button>
        </div>
        <p className="mt-5">
          <Link
            to="/front-desk"
            className="text-sm font-semibold text-green-bright underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright"
          >
            Learn how Front Desk works
          </Link>
        </p>
      </div>
    </section>
  );
}
