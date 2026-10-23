import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Bot, Menu, X } from "lucide-react";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header className="border-b border-border/80 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-[76rem] items-center gap-2 px-4 md:h-[4.25rem] md:gap-3 md:px-5 xl:px-6">
        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2"
          aria-label={`${site.name} home`}
        >
          <img
            src="/brand/logo-horizontal-color.jpg"
            alt={site.name}
            className="h-8 w-auto max-w-[min(48vw,200px)] object-contain object-left sm:h-9 sm:max-w-[220px] lg:h-9 lg:max-w-[200px] xl:h-10 xl:max-w-[240px]"
            height={40}
          />
        </Link>

        <nav
          className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto whitespace-nowrap lg:flex xl:justify-center xl:gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            const active =
              item.to === "/"
                ? pathname === "/"
                : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-2 py-1.5 text-[13px] font-medium leading-none transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 xl:px-2.5 xl:py-2 xl:text-sm",
                  active
                    ? "bg-green-soft text-navy"
                    : "text-ink-soft hover:bg-green-soft/60 hover:text-navy",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <Button
            asChild
            variant="phone"
            size="sm"
            className="hidden min-[380px]:inline-flex"
          >
            <a
              href={site.phoneTel}
              aria-label={`Call AI Scheduling Agent ${site.phone}`}
            >
              <Bot className="h-4 w-4" aria-hidden />
              <span className="hidden 2xl:inline">AI Agent · </span>
              <span className="hidden lg:inline 2xl:hidden">AI </span>
              {site.phone}
            </a>
          </Button>
          <Button
            asChild
            variant="phone"
            size="icon"
            className="min-[380px]:hidden"
          >
            <a
              href={site.phoneTel}
              aria-label={`Call AI Scheduling Agent ${site.phone}`}
            >
              <Bot className="h-4 w-4" aria-hidden />
            </a>
          </Button>
          <Button
            variant="soft"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden />
            ) : (
              <Menu className="h-5 w-5" aria-hidden />
            )}
          </Button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto border-t border-border bg-surface lg:hidden"
        >
          <nav
            className="container-abt flex flex-col gap-1 py-3"
            aria-label="Mobile"
          >
            {navItems.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "min-h-12 rounded-xl px-4 py-3 text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green",
                    active
                      ? "bg-green-soft text-navy"
                      : "text-ink-soft hover:bg-green-soft/50",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={site.phoneTel}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-full bg-green px-4 py-3.5 text-base font-semibold text-white"
            >
              <Bot className="h-4 w-4" aria-hidden />
              AI Agent {site.phone}
            </a>
            <a
              href={site.staff.tel}
              className="flex min-h-11 items-center justify-center rounded-full border-2 border-navy px-4 py-3 text-sm font-semibold text-navy"
            >
              Staff line {site.staff.phone}
            </a>
            <Link
              to="/front-desk"
              className="flex min-h-11 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold text-green"
            >
              Front Desk details
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
