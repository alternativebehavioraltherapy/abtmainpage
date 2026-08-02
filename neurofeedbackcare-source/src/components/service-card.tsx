import type { LucideIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href = "/services",
  hash,
  className,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  /** In-page section id on the destination (e.g. "mhbot" → /services#mhbot) */
  hash?: string;
  className?: string;
}) {
  // Support either hash prop or "/path#section" in href
  let path = href;
  let section = hash;
  if (!section && href.includes("#")) {
    const [p, h] = href.split("#");
    path = p || "/services";
    section = h || undefined;
  }

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-250 hover:-translate-y-0.5 hover:border-green/40 hover:shadow-md",
        className,
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-soft text-green">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="mt-5 font-display text-xl text-navy">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>
      <Link
        to={path}
        hash={section}
        hashScrollIntoView={{ behavior: "smooth", block: "start" }}
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-green transition-colors group-hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
        <span className="sr-only"> about {title}</span>
      </Link>
    </article>
  );
}
