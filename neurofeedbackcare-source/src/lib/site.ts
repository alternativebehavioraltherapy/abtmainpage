import { FRONT_DESK_CHAT } from "@/lib/front-desk-chat-loader";

export const site = {
  name: "Alternative Behavioral Therapy",
  shortName: "ABT",
  /** Preferred scheduling line — AI Scheduling Agent (beta) */
  phone: "(360) 800-4066",
  phoneTel: "tel:+13608004066",
  phoneSms: "sms:+13608004066",
  phoneLabel: "AI Scheduling Agent",
  staff: {
    label: "Staff line",
    phone: "(360) 553-1350",
    tel: "tel:+13605531350",
    sms: "sms:+13605531350",
  },
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
    technician: "$65–$130",
    note: "Rates depend on the provider. Technicians and interns are $65–$130 depending on training, experience, and scope of work.",
  },
  qeeg: {
    initial: "$800",
    repeat: "$400",
    includes:
      "Initial testing includes additional assessments at no extra charge when needed — such as Creyos Cognitive Testing, questionnaires, QIK Continuous Performance Testing (CPT), and others depending on findings and client self-report. Repeat QEEG is half-off at $400.",
  },
  onlineBooking: {
    href: "https://app.frontdesk.care/online-booking",
    label: "Online booking",
    badge: "Beta",
  },
  frontDesk: {
    headline: "Call the AI Scheduling Agent: (360) 800-4066",
    body: "For most scheduling, call or text our AI Scheduling Agent at (360) 800-4066. This line is in beta — calling is the easiest path. Appointments are first come, first served by current availability. Use the staff line at (360) 553-1350 for significant scheduling obstacles, QEEG scheduling, or non-scheduling concerns — staff may face notable delays.",
  },
  /** Front Desk AI chat booking widget (book.frontdesk.care) */
  frontDeskChat: {
    scriptSrc: FRONT_DESK_CHAT.scriptSrc,
    practiceId: FRONT_DESK_CHAT.practiceId,
  },
} as const;

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about-neurofeedback", label: "Learn" },
  { to: "/front-desk", label: "Front Desk" },
  { to: "/the-team", label: "Team" },
  { to: "/cost", label: "Cost" },
  { to: "/faq", label: "FAQ" },
  { to: "/affiliates", label: "Affiliates" },
  { to: "/resources", label: "Resources" },
  { to: "/contact", label: "Contact" },
] as const;
