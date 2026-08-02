import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy text-white">
      <div className="container-abt section-pad !py-12 md:!py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              aria-label={`${site.name} home`}
            >
              <img
                src="/brand/logo-circle-color.png"
                alt=""
                className="h-12 w-12 rounded-full bg-white p-0.5"
                width={48}
                height={48}
              />
              <div>
                <p className="font-display text-lg font-semibold leading-tight text-white">
                  Alternative
                </p>
                <p className="text-sm font-medium tracking-wide text-green-bright">
                  Behavioral Therapy
                </p>
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              Neurofeedback, QEEG brain mapping, and counseling in Vancouver,
              WA. A teaching clinic focused on lasting, natural change.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-green-bright">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li className="flex gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-green-bright"
                  aria-hidden
                />
                <span>{site.address.full}</span>
              </li>
              <li>
                <a
                  href={site.phoneTel}
                  className="flex gap-2.5 transition-colors hover:text-green-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-bright"
                    aria-hidden
                  />
                  <span>Office: {site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.phoneSms}
                  className="flex gap-2.5 transition-colors hover:text-green-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  <MessageSquare
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-bright"
                    aria-hidden
                  />
                  <span>Text: {site.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={site.emailMailto}
                  className="flex gap-2.5 transition-colors hover:text-green-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                >
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-green-bright"
                    aria-hidden
                  />
                  <span>{site.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-green-bright">
              Explore
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-1 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-block rounded py-1.5 text-white/80 transition-colors hover:text-green-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-green-bright">
              Front Desk
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Call or text for appointments. Live staff during most business
              hours; AI assists after hours — fully integrated with our EHR. No
              online booking form.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={site.phoneTel}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-green px-5 text-sm font-semibold text-white transition-colors hover:bg-green-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Call or text {site.phone}
              </a>
              <Link
                to="/front-desk"
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-bright"
              >
                How Front Desk works
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Out-of-network practice · Superbills available</p>
        </div>
      </div>
    </footer>
  );
}
