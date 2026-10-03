import { site } from "@/lib/site";

/** Intended public domain (GoDaddy). Used for canonical, sitemap, and JSON-LD. */
export const SITE_ORIGIN = "https://neurofeedbackcare.com";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export function absoluteUrl(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p === "/" ? "/" : p}`;
}

export function pageHead({ title, description, path }: PageSeo) {
  const url = absoluteUrl(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const pagesSeo = {
  home: {
    title:
      "Neurofeedback, QEEG & Psychotherapy in Vancouver, WA | Alternative Behavioral Therapy",
    description:
      "EEG neurofeedback, QEEG brain mapping, and psychotherapy (EMDR & IFS) for ADHD, PTSD, anxiety, depression, and sleep. Teaching clinic in Vancouver, WA. Call the AI Scheduling Agent at (360) 800-4066.",
    path: "/",
  },
  services: {
    title:
      "Neurofeedback, QEEG, EMDR & IFS Therapy Services | Vancouver, WA",
    description:
      "Clinical neurofeedback, QEEG brain mapping ($800 initial / $400 repeat), talk therapy with EMDR and Internal Family Systems, limited M-HBOT, and clinician mentoring in Vancouver, WA.",
    path: "/services",
  },
  aboutNeurofeedback: {
    title:
      "What Is Neurofeedback? Evidence for PTSD, ADHD & Anxiety | Vancouver, WA",
    description:
      "Learn how EEG neurofeedback works, AAPB efficacy ratings, and research on PTSD, ADHD, epilepsy, depression, and anxiety. Educational overview from Alternative Behavioral Therapy.",
    path: "/about-neurofeedback",
  },
  frontDesk: {
    title: "Schedule Neurofeedback | AI Front Desk Vancouver, WA",
    description:
      "Book neurofeedback and counseling with our AI Scheduling Agent at (360) 800-4066. Staff line (360) 553-1350 for QEEG and special situations. First come, first served.",
    path: "/front-desk",
  },
  team: {
    title:
      "Neurofeedback Team — Joshua Moore, BCN & Michelle Moore, LMHC | Vancouver, WA",
    description:
      "Meet Joshua Moore, MA, LMHC, BCN, Michelle Moore, MA, LMHC, and supervised technicians and interns. Board-certified neurofeedback and psychotherapy in Vancouver, WA.",
    path: "/the-team",
  },
  cost: {
    title:
      "Neurofeedback Cost & QEEG Fees ($800 / $400) | Vancouver, WA",
    description:
      "Session rates $65–$185. Technicians and interns $65–$130. Initial QEEG $800 includes Creyos, QIK CPT, and questionnaires when needed; repeat QEEG $400. Out-of-network superbills.",
    path: "/cost",
  },
  faq: {
    title:
      "Neurofeedback FAQ — Insurance, Superbills, Rates | Vancouver, WA",
    description:
      "Answers about scheduling, out-of-network insurance, superbills, QEEG fees, teaching-clinic rates, and how to start neurofeedback or psychotherapy at Alternative Behavioral Therapy.",
    path: "/faq",
  },
  affiliates: {
    title: "Affiliates & Neurofeedback Training Partners | Vancouver, WA",
    description:
      "Teaching clinic affiliates, BEE Medic authorized training partnership, and professional connections around neurofeedback and QEEG education.",
    path: "/affiliates",
  },
  resources: {
    title:
      "Neurofeedback Resources — BCIA, AAPB, EEG Info, QEEG Courses",
    description:
      "Professional neurofeedback and biofeedback resources: BCIA certification, AAPB, ISNR, EEG Info, BEE Medic, and QEEG Courses. From Alternative Behavioral Therapy in Vancouver, WA.",
    path: "/resources",
  },
  contact: {
    title:
      "Contact a Vancouver WA Neurofeedback Clinic | Alternative Behavioral Therapy",
    description:
      "Call the AI Scheduling Agent at (360) 800-4066 or the staff line at (360) 553-1350. Visit 3000 SE 164th Ave Suite 108, Vancouver, WA 98683. Email office@altbehtherapy.com.",
    path: "/contact",
  },
} as const satisfies Record<string, PageSeo>;

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_ORIGIN}/#clinic`,
    name: site.name,
    legalName: "Alternative Behavioral Therapy, INC.",
    url: SITE_ORIGIN,
    telephone: "+1-360-553-1350",
    email: site.email,
    faxNumber: site.fax,
    image: `${SITE_ORIGIN}/og.jpg`,
    logo: `${SITE_ORIGIN}/brand/logo-circle-color.png`,
    priceRange: site.rates.range,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.line1,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-360-800-4066",
        contactType: "reservations",
        areaServed: "US",
        availableLanguage: "English",
        description:
          "AI Scheduling Agent (beta) for new appointments, cancellations, and reschedules",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-360-553-1350",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
        description:
          "Staff line for QEEG scheduling, scheduling obstacles, and non-scheduling questions",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5893,
      longitude: -122.503,
    },
    areaServed: [
      { "@type": "City", name: "Vancouver, WA" },
      { "@type": "City", name: "Portland, OR" },
      { "@type": "AdministrativeArea", name: "Clark County" },
    ],
    medicalSpecialty: [
      "Neurofeedback",
      "Psychotherapy",
      "Quantitative Electroencephalography",
    ],
    knowsAbout: [
      "Neurofeedback",
      "EEG biofeedback",
      "QEEG brain mapping",
      "EMDR",
      "Internal Family Systems",
      "ADHD",
      "PTSD",
      "Anxiety",
      "Depression",
      "Sleep disorders",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Clinical services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTherapy",
            name: "Neurofeedback (EEG biofeedback)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "MedicalTest",
            name: "QEEG brain mapping",
          },
          price: "800",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "PsychologicalTreatment",
            name: "Psychotherapy with EMDR and IFS",
          },
        },
      ],
    },
    sameAs: [
      "https://www.qeegcourses.com",
      "https://beemedic.com/en/joshua-moore-ma-lmhc-bcn",
    ],
  };
}

export const sitemapPaths = [
  "/",
  "/services",
  "/about-neurofeedback",
  "/front-desk",
  "/the-team",
  "/cost",
  "/faq",
  "/affiliates",
  "/resources",
  "/contact",
] as const;
