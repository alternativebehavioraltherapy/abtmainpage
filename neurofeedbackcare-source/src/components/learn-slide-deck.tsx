import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LearnSlide } from "@/lib/neurofeedback-learn";

/** Lecture-slide carousel: contain-fit so diagrams and captions stay readable. */
export function LearnSlideDeck({
  slides,
  heading,
  className,
  intervalMs = 14000,
}: {
  slides: LearnSlide[];
  heading?: string;
  className?: string;
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = slides.length;
  const headingId = heading
    ? `deck-${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
    : undefined;

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => go(1), intervalMs);
    return () => window.clearInterval(id);
  }, [paused, count, intervalMs, go]);

  if (count === 0) return null;
  const current = slides[index] ?? slides[0];

  return (
    <div
      className={cn(className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={headingId}
      aria-label={heading ?? "Lecture slides"}
    >
      {heading ? (
        <h3
          id={headingId}
          className="font-display text-2xl text-navy sm:text-3xl md:text-4xl"
        >
          {heading}
        </h3>
      ) : null}

      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-border bg-green-soft/40 shadow-card",
          heading && "mt-4",
        )}
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0]?.clientX ?? null;
          setPaused(true);
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current;
          const end = e.changedTouches[0]?.clientX;
          touchStartX.current = null;
          setPaused(false);
          if (start == null || end == null) return;
          const dx = end - start;
          if (Math.abs(dx) < 40) return;
          go(dx < 0 ? 1 : -1);
        }}
      >
        <img
          src={current.src}
          alt={current.alt}
          className="aspect-video w-full object-contain"
          width={1152}
          height={648}
          decoding="async"
        />
        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-navy shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-navy shadow-md hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </>
        ) : null}
      </div>

      <p className="mt-2 text-sm text-muted">
        {current.caption}{" "}
        {count > 1 ? (
          <span className="text-xs">
            ({index + 1} of {count})
          </span>
        ) : null}
      </p>

      {count > 1 ? (
        <div
          className="mt-3 flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Slide images"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show slide ${i + 1}: ${slide.caption}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green",
                i === index ? "w-6 bg-navy" : "w-2.5 bg-border hover:bg-muted",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
