import type { ReactNode } from "react";
import { Bot, Phone } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";
import { HashScroll } from "@/components/hash-scroll";
import { FrontDeskChatWidget } from "@/components/front-desk-chat-widget";
import { SchedulingBanner } from "@/components/scheduling-banner";
import { JsonLd } from "@/components/json-ld";
import { localBusinessJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col">
      <HashScroll />
      <FrontDeskChatWidget />
      <JsonLd data={localBusinessJsonLd()} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-green focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>
      <div className="sticky top-0 z-50">
        <Header />
        <SchedulingBanner />
      </div>
      <main id="main-content" className="flex-1 pb-20 sm:pb-0" tabIndex={-1}>
        {children}
      </main>
      <Footer />

      {/* Mobile sticky — AI scheduling line first */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-surface/95 p-2.5 backdrop-blur-md sm:hidden"
        style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
      >
        <div className="flex gap-2">
          <a
            href={site.phoneTel}
            className="flex min-h-12 flex-1 flex-col items-center justify-center rounded-full bg-green px-2 text-white shadow-sm active:scale-[0.98]"
          >
            <span className="inline-flex items-center gap-1 text-sm font-semibold">
              <Bot className="h-4 w-4" aria-hidden />
              AI Agent
            </span>
            <span className="text-[11px] font-medium leading-none opacity-95">
              {site.phone}
            </span>
          </a>
          <a
            href={site.staff.tel}
            className="flex min-h-12 flex-1 flex-col items-center justify-center rounded-full border-2 border-navy px-2 text-navy active:scale-[0.98]"
          >
            <span className="inline-flex items-center gap-1 text-sm font-semibold">
              <Phone className="h-4 w-4" aria-hidden />
              Staff
            </span>
            <span className="text-[11px] font-medium leading-none">
              {site.staff.phone}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
