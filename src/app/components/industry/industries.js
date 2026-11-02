// Copy for the industry pages. Numbers must match the published case studies
// (see ../proofFacts.js); client names must appear in the homepage client list.
export const INDUSTRIES = {
  fintech: {
    path: "/industries/fintech-aso/",
    name: "Fintech ASO",
    faqSlug: "fintech-aso",
    title: "ASO Agency for Fintech Apps | Finance & Crypto ASO | ASOWin",
    description:
      "App Store Optimization for fintech, trading, crypto and lending apps: compliant metadata, trust-led creatives and ratings work, with published results.",
    h1: "ASO Agency for Fintech Apps",
    intro:
      "ASOWin grows rankings, ratings and installs for banking, trading, crypto, payments and lending apps on the App Store and Google Play, with listings that stay accurate and within store finance policies.",
    cta: "Get a free fintech ASO audit",
    proofHeading: "Results for finance apps",
    proof: [
      { client: "Indiabulls Securities", metric: "50+", label: "Previously unranked keywords moved into the Top 50 on both app stores.", href: "/success-stories/indiabulls-securities/" },
      { client: "Bybit", metric: "Top 3", label: "Rankings in Spain and Latin America through Spanish-language ASO for a crypto platform.", href: "/success-stories/bybit/" },
    ],
    clients: "Finance clients also include Bajaj Finserv, Volt Money and Ring (by Kissht).",
    differentHeading: "What makes fintech ASO different",
    differentIntro:
      "Finance is one of the most competitive and most closely reviewed categories in both stores. Users install only when they trust the app, and the stores check finance claims carefully.",
    points: [
      { title: "Trust decides the install", text: "Security, regulation and brand recognition carry more weight than features. We lead screenshots with the trust signals users look for and keep them consistent with the app itself." },
      { title: "Claims that pass review", text: "Promises of guaranteed returns, instant approval or risk-free investing can get a listing rejected and erode trust. We write metadata that is specific and accurate, and check it against current store policy." },
      { title: "Finance declarations and licences", text: "Google Play asks every app to complete a financial features declaration, and lending, trading and crypto apps face extra licensing requirements in many countries. We plan listings around what each market allows." },
      { title: "Ratings around KYC and payouts", text: "Reviews in finance spike around onboarding, verification and payout issues. We reply quickly, route recurring problems to product and time rating prompts after successful transactions." },
      { title: "Keywords people actually search", text: "Users search for jobs to be done, like sending money, buying stocks or checking a credit score, more than for product names. We map those intents to each store's indexed fields." },
      { title: "Localized finance terms", text: "Finance vocabulary differs between markets and languages. For Bybit, Spanish-language crypto keywords drove Top 3 rankings in Spain and Latin America." },
    ],
    guidesHeading: "Fintech ASO guides",
    services: [
      { href: "/services/app-store-optimization/", label: "App Store Optimization" },
      { href: "/services/app-reputation-management/", label: "app reputation management" },
      { href: "/services/app-store-localization/", label: "localization" },
    ],
    guides: [
      { href: "/blog/fintech-app-aso-strategies/", label: "App Store Optimization for fintech apps" },
      { href: "/blog/investing-trading-app-aso/", label: "ASO for investing and trading apps" },
      { href: "/blog/crypto-wallet-exchange-app-aso/", label: "ASO for crypto wallets and exchanges" },
      { href: "/blog/banking-neobank-app-aso/", label: "ASO for banking and neobank apps" },
      { href: "/blog/lending-loan-app-aso/", label: "ASO for lending and loan apps" },
      { href: "/blog/payments-wallet-app-aso/", label: "ASO for payments and wallet apps" },
    ],
  },
  gaming: {
    path: "/industries/gaming-aso/",
    name: "Gaming ASO",
    faqSlug: "gaming-aso",
    title: "ASO Agency for Mobile Games | Game ASO & Creatives | ASOWin",
    description:
      "App Store Optimization for mobile games: genre keywords, creative testing, in-app events, localization and ratings, from the team behind a #1 Top Free Games result.",
    h1: "ASO Agency for Mobile Games",
    intro:
      "ASOWin helps game studios rank and convert on the App Store and Google Play with genre keyword research, icon and video testing, live events and localization.",
    cta: "Get a free game ASO audit",
    proofHeading: "Results for games",
    proof: [
      { client: "Viker Games", metric: "#1", label: "Top Free Games in Australia, with 500,000+ installs in a single day.", href: "/success-stories/viker-games/" },
      { client: "Viker Games", metric: "500,000+", label: "Installs in one day, plus rankings for multiple high-value gaming keywords.", href: "/success-stories/viker-games/#results" },
    ],
    clients: "Gaming clients also include Zupee.",
    differentHeading: "What makes game ASO different",
    differentIntro:
      "Players decide in seconds, mostly from the icon, the first screenshots and the video. Games also change constantly, so the store listing has to keep up with events and updates.",
    points: [
      { title: "Creative-led conversion", text: "Icon, preview video and the first two screenshots do most of the work. We test them with product page optimization on the App Store and store listing experiments on Google Play." },
      { title: "Genre and mechanic keywords", text: "Players search by genre, mechanic and theme, such as merge, idle, word or racing, as well as by game names. We build keyword sets around those terms for each store." },
      { title: "Events that refresh the listing", text: "Apple in-app events and Google Play promotional content appear on the store and in search. We plan them around updates and seasons to bring back lapsed players and win new ones." },
      { title: "Launches and pre-registration", text: "Soft launches and Google Play pre-registration give early data on creatives and keywords before a global launch, when rankings matter most." },
      { title: "Localization for global charts", text: "Charts are country by country. Localized keywords and screenshots help a game compete in each market it targets." },
      { title: "Ratings after updates", text: "Bugs and balance changes show up in ratings within hours of an update. We monitor reviews by version, reply quickly and prompt for ratings after wins, not losses." },
    ],
    guidesHeading: "Game ASO guides",
    services: [
      { href: "/services/creative-ab-testing/", label: "creative A/B testing" },
      { href: "/services/app-store-optimization/", label: "App Store Optimization" },
      { href: "/services/app-store-localization/", label: "localization" },
    ],
    guides: [
      { href: "/blog/gaming-app-aso-strategies/", label: "ASO strategies for mobile games" },
      { href: "/blog/game-keyword-research/", label: "Game keyword research" },
      { href: "/blog/game-app-store-creatives/", label: "Game app store creatives" },
      { href: "/blog/game-live-ops-events-aso/", label: "Live ops events and ASO" },
      { href: "/blog/game-localization-aso/", label: "Game localization and ASO" },
      { href: "/blog/game-soft-launch-strategy/", label: "Game soft launch strategy" },
    ],
  },
};
