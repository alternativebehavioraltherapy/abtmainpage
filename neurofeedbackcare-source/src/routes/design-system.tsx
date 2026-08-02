import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { TeamCard } from "@/components/team-card";
import { CtaBand } from "@/components/cta-band";
import { Brain } from "lucide-react";
import { site, navItems } from "@/lib/site";

export const Route = createFileRoute("/design-system")({
  component: DesignSystemPage,
  head: () => ({
    meta: [
      { title: "Design System | Alternative Behavioral Therapy" },
      {
        name: "description",
        content:
          "Internal design system reference for Alternative Behavioral Therapy — colors, type, components, and navigation.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

const swatches = [
  { name: "Navy", token: "--color-navy", hex: "#0A2C4E", className: "bg-navy" },
  {
    name: "Navy deep",
    token: "--color-navy-deep",
    hex: "#061F38",
    className: "bg-navy-deep",
  },
  {
    name: "Green",
    token: "--color-green",
    hex: "#3F9B2E",
    className: "bg-green",
  },
  {
    name: "Green bright",
    token: "--color-green-bright",
    hex: "#4AAF36",
    className: "bg-green-bright",
  },
  {
    name: "Green soft",
    token: "--color-green-soft",
    hex: "#E8F5E4",
    className: "bg-green-soft",
  },
  { name: "BG", token: "--color-bg", hex: "#F7F9F6", className: "bg-bg border" },
  {
    name: "Surface",
    token: "--color-surface",
    hex: "#FFFFFF",
    className: "bg-surface border",
  },
  { name: "Muted", token: "--color-muted", hex: "#5A6B76", className: "bg-muted" },
];

function DesignSystemPage() {
  return (
    <>
      <PageHero
        eyebrow="Internal"
        title="Design system"
        description="Brand tokens, components, and navigation for Alternative Behavioral Therapy. Not linked in the public menu."
      />

      <section className="section-pad">
        <div className="container-abt space-y-14">
          <div>
            <h2 className="font-display text-2xl text-navy">Logos</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["/brand/logo-circle-color.png", "Circle color"],
                ["/brand/logo-circle-bw.png", "Circle B&W"],
                ["/brand/logo-horizontal-color.jpg", "Horizontal color"],
                ["/brand/logo-horizontal-bw.png", "Horizontal B&W"],
              ].map(([src, label]) => (
                <figure
                  key={src}
                  className="rounded-2xl border border-border bg-surface p-6 text-center shadow-card"
                >
                  <img
                    src={src}
                    alt={label}
                    className="mx-auto max-h-20 w-auto object-contain"
                  />
                  <figcaption className="mt-4 text-xs font-semibold text-muted">
                    {label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">Color palette</h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {swatches.map((s) => (
                <div
                  key={s.name}
                  className="overflow-hidden rounded-xl border border-border bg-surface shadow-sm"
                >
                  <div className={`h-16 ${s.className}`} />
                  <div className="p-3 text-xs">
                    <p className="font-semibold text-navy">{s.name}</p>
                    <p className="text-muted">{s.hex}</p>
                    <p className="font-mono text-[10px] text-muted-light">
                      {s.token}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">Typography</h2>
            <div className="mt-6 space-y-3 rounded-2xl border border-border bg-surface p-6">
              <p className="font-display text-4xl text-navy">Fraunces display</p>
              <p className="text-lg text-ink">
                DM Sans body — calm, readable clinical copy at comfortable size.
              </p>
              <p className="text-sm text-muted">
                Muted secondary text for supporting detail and captions.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">Buttons</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="soft">Soft</Button>
              <Button variant="phone">Call {site.phone}</Button>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">Cards</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <ServiceCard
                title="Neurofeedback"
                description="Sample service card used across Home and Services."
                icon={Brain}
              />
              <TeamCard
                name="Sample Clinician"
                credentials="MA, LMHC"
                role="Example role"
                rate="$65–$185"
                bio="Team cards support photo or initials fallback with warm professional copy."
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-navy">Navigation map</h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex rounded-xl border border-border bg-surface px-4 py-3 text-sm font-semibold text-navy hover:border-green/40"
                  >
                    {item.label}
                    <span className="ml-auto text-muted">{item.to}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand title="CTA band preview" />
    </>
  );
}
