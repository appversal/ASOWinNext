// Single source of truth for how ASOWin describes itself. AI engines combine
// every description they find, so the homepage, About, media kit, llms.txt,
// schema and off-site profiles should all use these exact words.

// Group relationship. Set to null if leadership changes how ASOWin and
// AppVersal relate; every mention on the site and in schema reads from here.
export const PARENT = {
  name: "AppVersal",
  url: "https://appversal.com/",
};

export const ENTITY_DEFINITION = `ASOWin is a global App Store Optimization agency${
  PARENT ? `, part of the ${PARENT.name} group,` : ""
} with teams in the USA, India, Indonesia and Singapore, that grows app rankings, ratings and installs on the Apple App Store and Google Play.`;

// Fremont is the headquarters. Delaware is where ASOWin Inc. is registered,
// not an office, so it is described as a registration and not listed here.
export const OFFICES = [
  { name: "Fremont, California", city: "Fremont", region: "CA", country: "US", hq: true },
  { name: "Mumbai", city: "Mumbai", region: "MH", country: "IN" },
  { name: "Noida", city: "Noida", region: "UP", country: "IN" },
  { name: "Jakarta", city: "Jakarta", country: "ID" },
  { name: "Singapore", city: "Singapore", country: "SG" },
];

const SITE = "https://www.asowin.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": `${SITE}/#organization`,
  name: "ASOWin",
  legalName: "ASOWin Inc.",
  url: `${SITE}/`,
  logo: `${SITE}/ASOWin.png`,
  image: `${SITE}/og-image.jpg`,
  description: ENTITY_DEFINITION,
  email: "support@asowin.com",
  telephone: "+1-510-365-7173",
  priceRange: "$$",
  areaServed: "Worldwide",
  knowsAbout: [
    "App Store Optimization",
    "Google Play Store Optimization",
    "App reputation management",
    "Apple Search Ads",
    "App store localization",
    "Creative A/B testing",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Fremont",
    addressRegion: "CA",
    addressCountry: "US",
  },
  location: OFFICES.map((o) => ({
    "@type": "Place",
    name: `ASOWin ${o.city}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: o.city,
      ...(o.region && { addressRegion: o.region }),
      addressCountry: o.country,
    },
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-510-365-7173",
    contactType: "customer service",
    email: "support@asowin.com",
    areaServed: "Worldwide",
    availableLanguage: ["English", "Indonesian"],
  },
  sameAs: ["https://www.linkedin.com/company/asowin/"],
  ...(PARENT && {
    parentOrganization: { "@type": "Organization", name: PARENT.name, url: PARENT.url },
  }),
};

// Fits a meta description (under 160 characters).
export const ENTITY_SHORT =
  "ASOWin is a global App Store Optimization agency growing app rankings, ratings and installs on the Apple App Store and Google Play.";
