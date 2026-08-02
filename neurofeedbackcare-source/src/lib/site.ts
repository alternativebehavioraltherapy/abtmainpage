export const site = {
  name: "Alternative Behavioral Therapy",
  shortName: "ABT",
  phone: "(360) 553-1350",
  phoneTel: "tel:+13605531350",
  phoneSms: "sms:+13605531350",
  email: "office@altbehtherapy.com",
  emailMailto: "mailto:office@altbehtherapy.com",
  fax: "(360) 233-4975",
  address: {
    line1: "3000 SE 164th Ave Suite 108",
    city: "Vancouver",
    state: "WA",
    zip: "98683",
    full: "3000 SE 164th Ave Suite 108, Vancouver, WA 98683",
  },
  rates: {
    range: "$65–$185",
    note: "Rates depend on the provider. The $65 rate is available only when a trainee is on staff.",
  },
  frontDesk: {
    headline: "Call or text (360) 553-1350",
    body: "A live receptionist is available during most business hours. When staff are unavailable or after hours, our advanced AI (fully integrated with the EHR) immediately handles your request — list your appointments, cancel, reschedule, or book new appointments with no delay.",
  },
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/front-desk", label: "Front Desk" },
  { to: "/the-team", label: "The Team" },
  { to: "/cost", label: "Cost" },
  { to: "/faq", label: "FAQ" },
  { to: "/affiliates", label: "Affiliates" },
  { to: "/resources", label: "Additional Resources" },
  { to: "/contact", label: "Contact" },
] as const;
