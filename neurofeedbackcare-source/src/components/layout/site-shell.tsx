import type { ReactNode } from "react";
import { MessageSquare, Phone } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";
import { HashScroll } from "@/components/hash-scroll";
import { site } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <HashScroll />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pb-20 sm:pb-0" tabIndex={-1}>
        {children}
      </main>
      <Footer />

      {/* Mobile sticky Front Desk bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 p-2.5 backdrop-blur-md sm:hidden"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-2">
          <a
            href={site.phoneTel}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-green text-sm font-semibold text-white shadow-sm active:scale-[0.98]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call
          </a>
          <a
            href={site.phoneSms}
            className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy text-sm font-semibold text-navy active:scale-[0.98]"
          >
            <MessageSquare className="h-4 w-4" aria-hidden />
            Text
          </a>
        </div>
      </div>
    </div>
  );
}
