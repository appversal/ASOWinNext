// Market-specific copy for the USA, India and Indonesia landing pages, so each
// page is built around its own market and proof instead of a shared template.
// Every number comes from a published case study (see ../proofFacts.js).

export const MARKETS = {
  usa: {
    subheadline:
      "ASO, Apple Search Ads and ratings management for US apps, run from our headquarters in Fremont, California.",
    badge: "Headquartered in Fremont, California",
    resultsBadge: "Published results",
    resultsHeading: "Results from ASOWin case studies",
    metrics: [
      { value: "#10 → #2", label: "For “Phone” on US Google Play", sublabel: "LSM Apps case study" },
      { value: "+12,000", label: "Daily downloads", sublabel: "LSM Apps case study" },
      { value: "4.4+", label: "App rating, up from ~3.9", sublabel: "Pepperfry case study" },
      { value: "#1", label: "Top Free Games, Australia", sublabel: "Viker Games case study" },
    ],
    local: {
      id: "us-market",
      badge: "The US market",
      heading: "How ASO works in the US App Store and Google Play",
      intro:
        "The US is the most competitive storefront for most categories. Search results pages are crowded with paid placements and established brands, so small gains in keyword rank and conversion rate are worth a lot of installs.",
      points: [
        {
          title: "Two languages in one storefront",
          text: "The US App Store also indexes metadata from the Spanish (Mexico) localization. We use that second set of fields for extra keywords and for Spanish-speaking US users, without repeating the English keywords.",
        },
        {
          title: "Apple Search Ads alongside organic",
          text: "Paid placements sit above the first organic result in App Store search. We plan Apple Search Ads and ASO together, use search term data to choose organic keywords, and point ads at custom product pages that match each keyword theme.",
        },
        {
          title: "Ratings decide the click",
          text: "US users compare star ratings before they install. We set up in-app rating prompts at moments of success, reply to reviews and feed recurring complaints back to the product team.",
        },
        {
          title: "Google Play listing experiments",
          text: "On Google Play we test icons, screenshots and short descriptions with store listing experiments, and use custom store listings for high-value audiences and campaigns.",
        },
        {
          title: "Proof from US Google Play",
          text: "For LSM Apps, Easy Phone moved from #10 to #2 for “Phone” on US Google Play, with 12,000 additional daily downloads reported.",
          href: "/success-stories/lsm-apps/",
          linkText: "Read the LSM Apps case study",
        },
      ],
    },
  },
  india: {
    subheadline:
      "Google Play-first ASO, regional-language listings and ratings management for Indian apps, from our offices in Mumbai and Noida.",
    badge: "Offices in Mumbai and Noida",
    resultsBadge: "Published results",
    resultsHeading: "Results for Indian app brands",
    metrics: [
      { value: "4.4+", label: "App rating, up from ~3.9", sublabel: "Pepperfry case study" },
      { value: "50+", label: "Keywords into the Top 50", sublabel: "Indiabulls Securities case study" },
      { value: "~3.9", label: "Pepperfry's starting rating", sublabel: "Pepperfry case study" },
      { value: "2", label: "App stores optimized", sublabel: "Indiabulls Securities case study" },
    ],
    local: {
      id: "india-market",
      badge: "The Indian market",
      heading: "What makes ASO in India different",
      intro:
        "Most smartphones in India run Android, users search in English, Hindi and regional languages, and many install on budget phones with limited storage. An ASO plan for India has to start from those facts.",
      points: [
        {
          title: "Google Play first",
          text: "Google Play drives most installs in India, and it indexes the title, short description and full description. We write those fields for Indian search behaviour, then adapt the App Store listing for iOS users.",
        },
        {
          title: "Hindi and regional-language listings",
          text: "Google Play supports listings in Hindi, Bengali, Marathi, Tamil, Telugu, Kannada, Malayalam, Gujarati and other Indian languages. We research keywords in each language, including Hinglish and transliterated searches, rather than translating English keywords.",
        },
        {
          title: "Fintech and lending compliance",
          text: "Finance apps in India face extra Google Play declarations and close review of claims. We keep listings accurate, avoid return or approval promises, and check them against current policy. Our Indiabulls Securities work moved 50+ unranked keywords into the Top 50.",
          href: "/success-stories/indiabulls-securities/",
          linkText: "Read the Indiabulls Securities case study",
        },
        {
          title: "Ratings at scale",
          text: "High-volume Indian apps collect thousands of reviews a month. For Pepperfry, review replies and feedback-driven fixes took the app rating from about 3.9 to 4.4+, and the rating has held month on month.",
          href: "/success-stories/pepperfry/",
          linkText: "Read the Pepperfry case study",
        },
        {
          title: "App size and seasonality",
          text: "Download size affects conversion on budget phones and slow networks, so we flag size in audits. We also plan creative and keyword updates around festival sales and big sporting events, when search demand shifts.",
        },
      ],
    },
  },
  indonesia: {
    subheadline:
      "ASO dalam Bahasa Indonesia, manajemen rating, dan Apple Search Ads untuk aplikasi di Indonesia, dari kantor kami di Jakarta.",
    badge: "Kantor di Jakarta",
    resultsBadge: "Hasil yang dipublikasikan",
    resultsHeading: "Hasil dari studi kasus ASOWin",
    metrics: [
      { value: "50+", label: "Kata kunci masuk Top 50", sublabel: "Studi kasus Indiabulls Securities" },
      { value: "4.4+", label: "Rating aplikasi, naik dari ~3.9", sublabel: "Studi kasus Pepperfry" },
      { value: "Top 3", label: "Peringkat di Spanyol dan Amerika Latin", sublabel: "Studi kasus Bybit (lokalisasi)" },
      { value: "#1", label: "Top Free Games, Australia", sublabel: "Studi kasus Viker Games" },
    ],
    local: {
      id: "pasar-indonesia",
      badge: "Pasar Indonesia",
      heading: "ASO untuk pasar aplikasi Indonesia",
      intro:
        "Sebagian besar pengguna smartphone di Indonesia memakai Android, dan banyak yang mencari aplikasi dalam Bahasa Indonesia, bahasa Inggris, atau campuran keduanya. Strategi ASO harus mengikuti cara pengguna lokal mencari.",
      points: [
        {
          title: "Google Play sebagai prioritas",
          text: "Google Play menyumbang sebagian besar instalasi di Indonesia. Kami menulis judul, deskripsi singkat, dan deskripsi lengkap untuk pencarian lokal, lalu menyesuaikan listing App Store untuk pengguna iOS.",
        },
        {
          title: "Riset kata kunci Bahasa Indonesia",
          text: "Kami meneliti kata kunci langsung dalam Bahasa Indonesia, termasuk istilah sehari-hari dan campuran bahasa Inggris, bukan sekadar menerjemahkan kata kunci bahasa Inggris.",
        },
        {
          title: "Rating dan ulasan",
          text: "Kami membalas ulasan dalam Bahasa Indonesia, mengatur waktu permintaan rating di dalam aplikasi, dan meneruskan keluhan yang berulang ke tim produk.",
        },
        {
          title: "Ukuran aplikasi dan jaringan",
          text: "Ukuran unduhan memengaruhi konversi di ponsel dengan penyimpanan terbatas dan jaringan lambat, jadi kami memeriksanya dalam setiap audit.",
        },
        {
          title: "Pengalaman lokalisasi",
          text: "Untuk Bybit, ASO berbahasa Spanyol menghasilkan peringkat Top 3 di Spanyol dan Amerika Latin. Pendekatan lokalisasi yang sama kami terapkan untuk Bahasa Indonesia.",
          href: "/success-stories/bybit/",
          linkText: "Baca studi kasus Bybit",
        },
      ],
    },
  },
};
