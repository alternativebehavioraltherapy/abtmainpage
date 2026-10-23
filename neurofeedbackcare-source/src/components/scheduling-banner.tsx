import { CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

export function SchedulingBanner() {
  return (
    <div className="border-b border-green/25 bg-navy text-white">
      <div className="container-abt flex items-center justify-between gap-3 py-2">
        <p className="min-w-0 text-sm leading-snug">
          <span className="font-semibold text-green-bright">
            Our scheduling system has changed.
          </span>
          <span className="hidden sm:inline">
            {" "}
            Book and manage visits in the Client Portal.
          </span>
        </p>
        <a
          href={site.clientPortal.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-full bg-green px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-green-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden />
          Client Portal
        </a>
      </div>
    </div>
  );
}
