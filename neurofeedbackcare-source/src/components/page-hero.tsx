import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border bg-gradient-to-b from-green-soft/50 to-bg",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 10% 0%, var(--color-green) 0%, transparent 55%), radial-gradient(ellipse 40% 40% at 95% 10%, var(--color-navy) 0%, transparent 50%)",
        }}
      />
      <div className="container-abt relative py-12 md:py-16">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-green">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl font-display text-4xl text-navy text-balance md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
