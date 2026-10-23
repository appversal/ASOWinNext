// Single source of truth for client results quoted on the site.
// Every number here comes from a published case study under /success-stories/.
// Update the case study first, then this file; never add a number without a source page.
export const PROOF = {
  pepperfry: {
    name: "Pepperfry",
    href: "/success-stories/pepperfry/",
    summary: "App rating from about 3.9 to 4.4+",
    stats: [
      { value: "4.4+", label: "App rating" },
      { value: "~3.9", label: "Starting rating" },
    ],
    bullets: [
      "App rating improved from about 3.9 to 4.4+",
      "4.4+ rating sustained month on month",
      "Review replies and feedback-driven fixes",
    ],
  },
  indiabulls: {
    name: "Indiabulls Securities",
    href: "/success-stories/indiabulls-securities/",
    summary: "50+ keywords from unranked into the Top 50",
    summaryId: "50+ kata kunci dari tidak berperingkat masuk Top 50",
    stats: [
      { value: "50+", label: "Keywords into the Top 50" },
      { value: "2", label: "App stores" },
    ],
    bullets: [
      "50+ previously unranked keywords moved into the Top 50",
      "Results across both the App Store and Google Play",
      "Finance keyword research, creative testing and review management",
    ],
  },
  lsm: {
    name: "LSM Apps",
    href: "/success-stories/lsm-apps/",
    summary: "#10 to #2 for “Phone” on US Google Play",
    stats: [
      { value: "#10 → #2", label: "For “Phone”, US Play Store" },
      { value: "+12,000", label: "Daily downloads" },
    ],
    // Compact form for narrow stat columns (homepage teal box).
    shortStat: { value: "#2", from: "#10" },
    bullets: [
      "Easy Phone moved from #10 to #2 for “Phone” on the US Play Store",
      "12,000 additional daily downloads reported",
      "Keyword, metadata and creative testing work",
    ],
  },
  viker: {
    name: "Viker Games",
    href: "/success-stories/viker-games/",
    summary: "#1 Top Free Games in Australia",
    stats: [
      { value: "#1", label: "Top Free Games, Australia" },
      { value: "500,000+", label: "Installs in one day" },
    ],
  },
  bybit: {
    name: "Bybit",
    href: "/success-stories/bybit/",
    summary: "Top 3 rankings in Spain and Latin America",
    summaryId: "Peringkat Top 3 di Spanyol dan Amerika Latin",
    stats: [{ value: "Top 3", label: "Rankings in Spain and Latin America" }],
  },
};

// Display order for lists of all case studies.
export const CASE_STUDY_ORDER = ["pepperfry", "bybit", "indiabulls", "lsm", "viker"];
