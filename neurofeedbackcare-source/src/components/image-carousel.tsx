import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselSlide = {
  src: string;
  alt: string;
};

export function ImageCarousel({
  slides,
  className,
  intervalMs = 5000,
  aspectClass = "aspect-[16/10]",
  ariaLabel = "Clinic photos",
}: {
  slides: CarouselSlide[];
  className?: string;
  intervalMs?: number;
  aspectClass?: string;
  ariaLabel?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const count = slides.length;

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (paused || count <= 1) return;
    const id = window.setInterval(() => go(1), intervalMs);
    return () => window.clearInterval(id);
  }, [paused, count, intervalMs, go]);

  if (count === 0) return null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-navy shadow-card",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
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
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div className={cn("relative w-full overflow-hidden", aspectClass)}>
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              i === index ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            aria-hidden={i !== index}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent"
              aria-hidden
            />
          </figure>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-navy shadow-md backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-navy shadow-md backdrop-blur-sm transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green"
            aria-label="Next photo"
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div
            className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-1.5"
            role="tablist"
            aria-label="Slide indicators"
          >
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show photo ${i + 1}`}
                onClick={() => setIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green",
                  i === index
                    ? "w-6 bg-green"
                    : "w-2 bg-white/70 hover:bg-white",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
