import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import appCss from "@/styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      {
        title:
          "Alternative Behavioral Therapy | Neurofeedback in Vancouver, WA",
      },
      {
        name: "description",
        content:
          "Neurofeedback, QEEG brain mapping, and counseling at Alternative Behavioral Therapy in Vancouver, WA. Call or text (360) 553-1350 — AI-assisted Front Desk. No online booking.",
      },
      { name: "theme-color", content: "#0a2c4e" },
      { name: "author", content: "Alternative Behavioral Therapy, INC." },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:site_name",
        content: "Alternative Behavioral Therapy",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap",
      },
      { rel: "icon", href: "/brand/logo-circle-color.png", type: "image/png" },
      {
        rel: "apple-touch-icon",
        href: "/brand/logo-circle-color.png",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <SiteShell>
        <Outlet />
      </SiteShell>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
