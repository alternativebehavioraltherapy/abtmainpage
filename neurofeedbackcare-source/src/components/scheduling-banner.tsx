import { Link } from "@tanstack/react-router";
import { ArrowRight, Bot } from "lucide-react";
import { site } from "@/lib/site";

export function SchedulingBanner() {
  return (
    <div className="border-b border-green/30 bg-navy text-white">
      <div className="container-abt flex flex-col gap-2.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="flex items-start gap-2.5 text-sm leading-snug sm:items-center md:text-[0.95rem]">
          <Bot
            className="mt-0.5 h-5 w-5 shrink-0 text-green-bright sm:mt-0"
            aria-hidden
          />
          <span>
            <span className="font-semibold text-green-bright">
              Scheduling has changed.
            </span>{" "}
            Call our energy-efficient{" "}
            <span className="font-semibold">AI Scheduling Agent</span> at{" "}
            <a
              href={site.phoneTel}
              className="whitespace-nowrap font-semibold text-green-bright underline-offset-2 hover:underline"
            >
              {site.phone}
            </a>
            . Staff line {site.staff.phone} for QEEG or special situations.
          </span>
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <a
            href={site.phoneTel}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-green px-4 text-sm font-semibold text-white hover:bg-green-bright"
          >
            Call AI {site.phone}
          </a>
          <Link
            to="/front-desk"
            className="inline-flex min-h-10 items-center gap-1 px-2 text-sm font-semibold text-green-bright underline-offset-2 hover:underline"
          >
            More information
            <ArrowRight className="h-3.5 w-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
