import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

/**
 * Scrolls to the URL hash target after navigation / load.
 * Respects sticky header via CSS scroll-mt on targets.
 */
export function HashScroll() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    if (!id) return;

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return true;
    };

    // Immediate attempt + short retries for late-mounted content
    if (scrollToTarget()) return;
    const t1 = window.setTimeout(scrollToTarget, 50);
    const t2 = window.setTimeout(scrollToTarget, 200);
    const t3 = window.setTimeout(scrollToTarget, 400);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [hash, pathname]);

  return null;
}
