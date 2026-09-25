// Copy for the paid-search landing pages, one page per keyword. Each page has
// its own angle, FAQs and steps so the six pages don't compete with each other
// in search. Results quoted here must match the published case studies under
// /success-stories.

const results = {
  lsm: {
    client: "LSM Apps",
    metric: "#10 → #2",
    label: "For “Phone” in the US Play Store, with 12,000 additional daily downloads reported.",
    href: "/success-stories/lsm-apps/",
  },
  indiabulls: {
    client: "Indiabulls Securities",
    metric: "50+",
    label: "Previously unranked keywords moved into the Top 50 across both app stores.",
    href: "/success-stories/indiabulls-securities/",
  },
  viker: {
    client: "Viker Games",
    metric: "#1",
    label: "Top Free Games in Australia, and 500,000+ installs in a single day.",
    href: "/success-stories/viker-games/",
  },
  bybit: {
    client: "Bybit",
    metric: "Top 3",
    label: "Rankings in Spain and Latin America through localized ASO.",
    href: "/success-stories/bybit/",
  },
  pepperfry: {
    client: "Pepperfry",
    metric: "3.9 → 4.4+",
    label: "App rating after ongoing review and reputation management.",
    href: "/success-stories/pepperfry/",
  },
};

export const landingPages = {
  // Keyword: App Store Optimization services. Angle: the full scope of services.
  appStoreOptimizationServices: {
    path: "/app-store-optimization-services/",
    serviceName: "App Store Optimization Services",
    seoTitle: "App Store Optimization Services for iOS & Android | ASOWin",
    description:
      "App Store Optimization services for the App Store and Google Play: keywords, metadata, creative testing, ratings and localization. Free audit in 24 hours.",
    eyebrow: "APP STORE OPTIMIZATION SERVICES",
    title: "App Store Optimization Services",
    titleEmphasis: "for iOS and Android.",
    intro:
      "ASOWin provides full-service App Store Optimization for the Apple App Store and Google Play: keyword research, metadata, screenshots and A/B tests, ratings management and localization. Tell us about your app and we’ll send a free audit of where it ranks today and what to fix first.",
    highlights: [
      "Keyword, metadata and creative audit for your app",
      "Separate strategies for the App Store and Google Play",
      "In-house design for icons, screenshots and video",
    ],
    formTitle: "Get a free ASO audit",
    formIntro: "Delivered within 24 hours by an ASO specialist.",
    ctaLabel: "Get my free ASO audit",
    proof: [results.indiabulls, results.lsm, results.viker],
    servicesTitle: "Six App Store Optimization services, one team.",
    servicesIntro:
      "Every lever that affects app store rankings and conversion, handled by one team so keyword, listing and creative decisions support each other.",
    services: [
      {
        title: "Keyword research & strategy",
        text: "We map the searches your users make, score each keyword on volume, relevance and difficulty, and build a target list per market.",
      },
      {
        title: "Metadata optimization",
        text: "Title, subtitle, keyword field, promotional text and descriptions, written to rank for target keywords while still reading well.",
      },
      {
        title: "Creative design & A/B testing",
        text: "Icons, screenshots and preview videos designed to convert, then tested with Apple product page optimization and Google Play experiments.",
      },
      {
        title: "Ratings & review management",
        text: "Review monitoring, replies and rating strategy. Ratings affect both ranking and whether a visitor installs.",
      },
      {
        title: "Localization",
        text: "Keyword research and metadata in each market’s language, rather than a translation of your English listing.",
      },
      {
        title: "Competitor benchmarking",
        text: "We track the keywords, creatives and ratings of the apps you compete with, and find the gaps they leave open.",
      },
    ],
    editorialEyebrow: "HOW THE SERVICES FIT TOGETHER",
    editorialTitle: "Rankings bring visitors. The listing turns them into installs.",
    editorial: [
      "App Store Optimization services only work when keywords, metadata, creatives and ratings are treated as one system. Ranking for a keyword is only valuable if the screenshots convince people to install.",
      "Install rate in turn feeds back into rankings, which is why we run metadata and creative work together, and why ratings management sits in the same team rather than with a separate vendor.",
    ],
    processTitle: "How we deliver App Store Optimization services.",
    steps: [
      { title: "Audit your listing", text: "We benchmark your rankings, metadata, creatives and ratings against your top competitors in each store." },
      { title: "Choose target keywords", text: "We pick the keywords your app can realistically win, per store and per market." },
      { title: "Rewrite metadata", text: "We place target keywords in the fields each store weights most, without hurting readability." },
      { title: "Test creatives", text: "We redesign screenshots and icons and A/B test them, so changes are backed by conversion data." },
    ],
    faqTitle: "Questions about our App Store Optimization services",
    faqs: [
      {
        question: "Which App Store Optimization services do you offer?",
        answer:
          "Keyword research and strategy, metadata optimization, creative design and A/B testing, ratings and review management, localization, and competitor benchmarking, for both the Apple App Store and Google Play.",
      },
      {
        question: "Do you optimize for both the App Store and Google Play?",
        answer:
          "Yes, with a separate strategy for each store because they rank apps differently. Google Play indexes your full description, while the App Store relies on the title, subtitle and a hidden 100-character keyword field.",
      },
      {
        question: "Can we buy a single service, like keyword research only?",
        answer:
          "Yes. Most clients choose the full service, but we also run standalone keyword research, creative design and testing, or review management. We scope it with you after the free audit.",
      },
      {
        question: "Do your services include screenshot and icon design?",
        answer:
          "Yes. Our in-house designers produce icons, screenshots and preview videos, and we A/B test them before rolling them out.",
      },
      {
        question: "What’s in the free ASO audit?",
        answer:
          "Where your app ranks today, gaps in your metadata, keyword opportunities your competitors rank for, creative and ratings issues, and a prioritized list of fixes. We send it within 24 hours of your request.",
      },
    ],
    ctaTitle: "See where your app can rank.",
    related: [
      { href: "/aso-services/", label: "Monthly ASO services" },
      { href: "/app-store-optimization/", label: "What is App Store Optimization?" },
      { href: "/google-play-store-optimization/", label: "Google Play Store optimization" },
    ],
  },

  // Keyword: aso services. Angle: ASO as an ongoing monthly program.
  asoServices: {
    path: "/aso-services/",
    serviceName: "ASO Services",
    seoTitle: "ASO Services: Monthly App Store Optimization | ASOWin",
    description:
      "ASO services run as a monthly program: keyword tracking, metadata updates, creative tests, review replies and reports. No minimum contract. Free ASO audit.",
    eyebrow: "ASO SERVICES · MONTHLY PROGRAM",
    title: "ASO Services That Keep",
    titleEmphasis: "Working Every Month.",
    intro:
      "App store rankings shift every week as competitors update and the stores change. Our ASO services run as an ongoing monthly program: we track your keywords, ship metadata and creative updates, test what converts and report on what moved.",
    highlights: [
      "Audit and strategy before any change goes live",
      "Metadata and creative updates every month",
      "No minimum contract. Pause or cancel any time",
    ],
    formTitle: "Start with a free ASO audit",
    formIntro: "We’ll send it within 24 hours, then suggest a monthly plan.",
    ctaLabel: "Get my free ASO audit",
    proof: [results.indiabulls, results.pepperfry, results.bybit],
    servicesEyebrow: "EVERY MONTH",
    servicesTitle: "What your ASO services include each month.",
    servicesIntro:
      "A steady cycle of research, updates, testing and reporting, so your listing keeps pace with competitors instead of going stale after a one-off project.",
    services: [
      {
        title: "Keyword rank tracking",
        text: "Weekly tracking of your target keywords in every store and market, with alerts when positions move.",
      },
      {
        title: "Metadata update cycle",
        text: "New keyword placements timed with your app releases on the App Store, and shipped directly on Google Play.",
      },
      {
        title: "Creative testing",
        text: "A continuous queue of screenshot, icon and video tests, so there is always an experiment learning something.",
      },
      {
        title: "Review replies",
        text: "Monitoring and replying to reviews, and flagging recurring complaints to your product team.",
      },
      {
        title: "Competitor watch",
        text: "Monthly checks of competitor keywords, creatives and ratings, so you see their changes before they cost you rankings.",
      },
      {
        title: "Monthly report & call",
        text: "A plain-language report of what we changed, what moved, and what we plan next, reviewed with you on a call.",
      },
    ],
    editorialEyebrow: "WHY ONGOING ASO",
    editorialTitle: "Why ASO services work better as a program than a project.",
    editorial: [
      "A one-off optimization gives you a better listing on day one, but competitors update theirs, search trends change with the seasons, and both stores change how they rank apps. Without ongoing work, rankings drift.",
      "Monthly ASO services also compound: every test result informs the next one, and every metadata update builds on data from the last. Most of the gains come from the second and third month onwards.",
    ],
    processEyebrow: "YOUR FIRST 90 DAYS",
    processTitle: "What the first three months look like.",
    steps: [
      { title: "Month 1: Audit & strategy", text: "Full audit, keyword research and a prioritized plan agreed with you." },
      { title: "Month 1–2: First release", text: "New metadata and refreshed creatives go live in both stores." },
      { title: "Month 2–3: Testing", text: "A/B tests on creatives and copy, with winners rolled out." },
      { title: "Month 3+: Scale", text: "Expand to new keywords and markets based on what is working." },
    ],
    faqTitle: "Questions about our ASO services",
    faqs: [
      {
        question: "What do your ASO services include each month?",
        answer:
          "Keyword rank tracking, a metadata update cycle, creative A/B tests, review replies, competitor monitoring, and a monthly report and review call.",
      },
      {
        question: "How often can you update our app metadata?",
        answer:
          "On the App Store, the title, subtitle and keyword field change with a new app version, so we time updates with your releases. Promotional text and all Google Play listing text can be updated at any time.",
      },
      {
        question: "Who works on our account?",
        answer:
          "A dedicated ASO team covering keyword research, copywriting and design, with one main point of contact for your team.",
      },
      {
        question: "How long until ASO services show results?",
        answer:
          "Metadata and creative changes can move conversion within weeks. Sustained ranking gains usually take 3–6 months, because the stores need time to register new relevance and install signals.",
      },
      {
        question: "Is there a minimum contract?",
        answer:
          "No. There is no minimum commitment and you can pause or cancel at any time. We recommend at least 3–6 months to judge results fairly.",
      },
    ],
    ctaTitle: "Put your app store listing on a monthly growth plan.",
    related: [
      { href: "/app-store-optimization-services/", label: "App Store Optimization services" },
      { href: "/aso-agency/", label: "ASO agency" },
      { href: "/success-stories/", label: "Case studies" },
    ],
  },

  // Keyword: App Store Optimization. Angle: how ranking works, then the offer.
  appStoreOptimization: {
    path: "/app-store-optimization/",
    serviceName: "App Store Optimization",
    seoTitle: "App Store Optimization (ASO): How to Rank Your App | ASOWin",
    description:
      "What App Store Optimization is, how the App Store and Google Play rank apps, and what to optimize first. Get a free ASO audit of your app from ASOWin.",
    eyebrow: "APP STORE OPTIMIZATION (ASO)",
    title: "App Store Optimization,",
    titleEmphasis: "Explained and Done for You.",
    intro:
      "App Store Optimization (ASO) is the work of ranking higher in App Store and Google Play search and turning more listing visits into installs. Here’s how the stores decide rankings, and how we improve them for your app.",
    highlights: [
      "Rank for the searches your users actually make",
      "Convert more listing visitors into installs",
      "Grow installs without paying for each one",
    ],
    formTitle: "Get a free ASO audit",
    formIntro: "See how your app scores on each ranking factor, within 24 hours.",
    ctaLabel: "Get my free ASO audit",
    proof: [results.viker, results.indiabulls, results.lsm],
    servicesEyebrow: "RANKING FACTORS",
    servicesTitle: "What App Store Optimization changes.",
    servicesIntro:
      "Both stores rank apps on relevance to the search and on signals that users like the app. ASO works on both.",
    services: [
      {
        title: "App title",
        text: "The strongest relevance signal in both stores. It needs your brand and your most important keyword, within 30 characters.",
      },
      {
        title: "Subtitle & short description",
        text: "The App Store subtitle and Google Play short description add keywords and tell searchers why to tap.",
      },
      {
        title: "Keyword field & description",
        text: "iOS uses a hidden 100-character keyword field and ignores the description. Google Play indexes the full description instead.",
      },
      {
        title: "Icon, screenshots & video",
        text: "They decide whether people install from search results and your listing, and install rate influences ranking.",
      },
      {
        title: "Ratings & reviews",
        text: "Higher ratings improve conversion, and both stores factor app quality into how visible an app is.",
      },
      {
        title: "Installs & engagement",
        text: "Install velocity, retention and uninstalls tell the stores whether users find what they searched for.",
      },
    ],
    editorialEyebrow: "ASO AND PAID ACQUISITION",
    editorialTitle: "App Store Optimization lowers the cost of every install.",
    editorial: [
      "Most people find apps by searching the store. Paid campaigns buy visibility for as long as you pay; App Store Optimization earns it, so organic installs keep coming without a cost per install.",
      "The two work together. A better-converting listing makes every paid click cheaper, and paid installs can help a new keyword gain ranking faster. We plan ASO with your paid campaigns in mind.",
    ],
    processEyebrow: "THE ASO LOOP",
    processTitle: "How App Store Optimization works in practice.",
    steps: [
      { title: "Find the keywords", text: "Research the searches your users make and which ones you can realistically rank for." },
      { title: "Place them where they count", text: "Put keywords in the fields each store weights most: title first, then subtitle or short description." },
      { title: "Earn the install", text: "Design and test the icon and screenshots so searchers choose your app." },
      { title: "Keep the signals strong", text: "Protect ratings and engagement, measure ranking changes and repeat." },
    ],
    faqTitle: "App Store Optimization FAQ",
    faqs: [
      {
        question: "What is App Store Optimization?",
        answer:
          "App Store Optimization (ASO) is the process of improving an app’s visibility in App Store and Google Play search and increasing the share of listing visitors who install. It covers keywords, metadata, creatives, and ratings.",
      },
      {
        question: "What are the most important ASO ranking factors?",
        answer:
          "Keyword relevance in the title and other indexed fields, install volume and velocity, conversion rate, ratings and reviews, and engagement signals such as retention. Their weight differs between the App Store and Google Play.",
      },
      {
        question: "Is ASO the same as SEO?",
        answer:
          "They share ideas like keyword research and relevance, but ASO targets app store search. The ranking factors, the metadata fields and the conversion step, where users decide to install from the listing, are specific to the app stores.",
      },
      {
        question: "Does the App Store use the app description for search?",
        answer:
          "No. The App Store ranks on the title, subtitle, keyword field and in-app purchase names, not the description. Google Play does index the full description.",
      },
      {
        question: "How long does App Store Optimization take to work?",
        answer:
          "Conversion improvements can show within weeks of new creatives. Ranking gains usually build over 3–6 months of consistent optimization.",
      },
    ],
    ctaTitle: "Find out how your app scores on every ranking factor.",
    related: [
      { href: "/app-store-optimization-services/", label: "App Store Optimization services" },
      { href: "/play-store-optimization/", label: "Play Store optimization" },
      { href: "/aso-agency/", label: "ASO agency" },
    ],
  },

  // Keyword: aso agency. Angle: choosing and working with an agency.
  asoAgency: {
    path: "/aso-agency/",
    serviceName: "ASO Agency",
    seoTitle: "ASO Agency | App Store Optimization Agency | ASOWin",
    description:
      "ASOWin is an ASO agency for the App Store and Google Play: one team for keywords, listings, creatives and reviews, with proven results. Free ASO audit.",
    eyebrow: "APP STORE OPTIMIZATION AGENCY",
    title: "The ASO Agency",
    titleEmphasis: "Measured by Rankings.",
    intro:
      "ASOWin is an App Store Optimization agency working with apps in gaming, finance, e-commerce and utilities. One team owns your keywords, store listings, creatives and reviews, and reports on exactly what moved. Start with a free audit of your app.",
    highlights: [
      "A dedicated ASO team for your app",
      "Offices in the US, Singapore, Indonesia and India",
      "No minimum commitment",
    ],
    formTitle: "Talk to our ASO team",
    formIntro: "Start with a free audit, delivered within 24 hours.",
    ctaLabel: "Get my free ASO audit",
    proof: [results.viker, results.bybit, results.pepperfry],
    servicesEyebrow: "WORKING WITH US",
    servicesTitle: "What you get when you work with ASOWin.",
    servicesIntro:
      "Specialists across keywords, copy, design and reputation working as one team, without having to hire and manage each role yourself.",
    services: [
      {
        title: "A dedicated ASO team",
        text: "A named team that learns your app, category and competitors, and is your single point of contact for store growth.",
      },
      {
        title: "Category experience",
        text: "Work across gaming, fintech and trading, e-commerce and utility apps, so we know what ranks and converts in your category.",
      },
      {
        title: "Multi-market reach",
        text: "Localized keyword research and listings for new markets, as with Bybit in Spain and Latin America.",
      },
      {
        title: "In-house creative team",
        text: "Designers producing icons, screenshots and videos, with A/B tests on both stores to prove what converts.",
      },
      {
        title: "Reputation management",
        text: "Review replies and rating strategy, including automated review replies for high-volume apps.",
      },
      {
        title: "Transparent reporting",
        text: "Keyword positions, conversion and installs reported regularly, with the actions behind every change.",
      },
    ],
    editorialEyebrow: "CHOOSING AN ASO AGENCY",
    editorialTitle: "How to judge an ASO agency before you hire one.",
    editorial: [
      "Ask for case studies with a clear starting point, the work delivered and the measured outcome, ideally in your category or market. Be wary of guaranteed rankings: no agency controls the App Store or Google Play algorithms.",
      "The right ASO agency should also explain its keyword choices, share the tests it runs and report on conversion as well as rankings. Our case studies show the starting point and results for every client.",
    ],
    processEyebrow: "GETTING STARTED",
    processTitle: "How to start working with our ASO agency.",
    steps: [
      { title: "Intro call", text: "We learn about your app, goals, markets and what you have tried so far." },
      { title: "Free audit", text: "You get an audit of your rankings, listing and competitors within 24 hours." },
      { title: "Scope & plan", text: "We propose the services, markets and priorities, with no minimum contract." },
      { title: "Onboarding", text: "We get store console access, agree reporting, and start on the highest-impact fixes." },
    ],
    faqTitle: "Questions about hiring an ASO agency",
    faqs: [
      {
        question: "Why hire an ASO agency instead of doing it in-house?",
        answer:
          "ASO needs keyword research, copywriting, design, testing and review management. An agency gives you all of those skills and the tools behind them immediately, plus experience of what has worked for other apps in your category.",
      },
      {
        question: "What kinds of apps does your agency work with?",
        answer:
          "Mobile games, fintech and trading apps, e-commerce, and utility apps, among others. See our case studies for Viker Games, Bybit, Indiabulls Securities, Pepperfry and LSM Apps.",
      },
      {
        question: "Do you guarantee rankings?",
        answer:
          "No. Neither Apple nor Google lets any agency control rankings, so a guarantee is a warning sign. We commit to the work, the tests and transparent reporting, and our case studies show the results that approach has produced.",
      },
      {
        question: "What access do you need to get started?",
        answer:
          "Read access to App Store Connect and Google Play Console for analytics, and permission to edit store listings once you approve changes. You stay in control of what goes live.",
      },
      {
        question: "Do we have to sign a long contract?",
        answer:
          "No. There is no minimum commitment, and you can pause or cancel at any time.",
      },
    ],
    ctaTitle: "Find out what an ASO agency can do for your app.",
    related: [
      { href: "/aso-services/", label: "ASO services" },
      { href: "/blog/how-to-choose-the-best-aso-agency/", label: "How to choose an ASO agency" },
      { href: "/success-stories/", label: "Case studies" },
    ],
  },

  // Keyword: google play store optimization. Angle: ranking in Google Play search.
  googlePlayStoreOptimization: {
    path: "/google-play-store-optimization/",
    serviceName: "Google Play Store Optimization",
    seoTitle: "Google Play Store Optimization Services | ASOWin",
    description:
      "Google Play Store optimization to rank higher in Play search: keyword research, title and descriptions, Android vitals and ratings. Free Google Play audit.",
    eyebrow: "GOOGLE PLAY STORE OPTIMIZATION",
    title: "Google Play Store Optimization",
    titleEmphasis: "to Rank Higher in Play Search.",
    intro:
      "Google Play ranks apps differently from the App Store. It reads your full description, has no hidden keyword field, and weighs app quality signals like crash rates. Our Google Play Store optimization is built around how Play search actually works.",
    highlights: [
      "Google Play keyword and ranking audit",
      "Title and descriptions rewritten for Play search",
      "#10 → #2 for “Phone” in the US Play Store for LSM Apps",
    ],
    formTitle: "Get a free Google Play audit",
    formIntro: "Delivered within 24 hours by a Google Play ASO specialist.",
    ctaLabel: "Get my free Google Play audit",
    proof: [results.lsm, results.indiabulls, results.viker],
    servicesTitle: "Google Play Store optimization for search ranking.",
    servicesIntro:
      "Every part of your Google Play presence that affects where you rank in Play search.",
    services: [
      {
        title: "Google Play keyword research",
        text: "Research based on how people search Google Play in your category and market, not reused App Store keywords.",
      },
      {
        title: "Title & short description",
        text: "Your 30-character title and 80-character short description carry the most keyword weight in Play search.",
      },
      {
        title: "Full description",
        text: "Up to 4,000 characters that Google Play indexes, with natural keyword placement and repetition that still reads well.",
      },
      {
        title: "Android vitals",
        text: "We monitor crash and ANR rates with your developers, since Google Play can show apps with poor vitals less often.",
      },
      {
        title: "Ratings & reviews",
        text: "Review replies and rating strategy to lift the quality signals Google Play uses in ranking.",
      },
      {
        title: "Localized listings",
        text: "Translated and locally researched listings for each country, so you rank in local-language Play search.",
      },
    ],
    editorialEyebrow: "HOW GOOGLE PLAY RANKS APPS",
    editorialTitle: "Google Play Store optimization is not App Store ASO with a different logo.",
    editorial: [
      "Google Play has no hidden keyword field. It reads your title, short description and full description, so keyword placement across the description matters far more than on iOS. The copy has to rank and still read well.",
      "Google Play also factors in installs, engagement, ratings and technical quality. Apps with high crash or ANR rates can be shown less often, so Google Play Store optimization looks beyond metadata to the app’s health.",
    ],
    processTitle: "How we improve your Google Play ranking.",
    steps: [
      { title: "Audit Play search", text: "We check where you rank today for your category’s main Google Play searches." },
      { title: "Map keywords to fields", text: "We assign each target keyword to the title, short description or full description." },
      { title: "Rewrite & publish", text: "Google Play listing changes don’t need an app update, so improvements go live quickly." },
      { title: "Track in Play Console", text: "We follow search acquisition by term in Play Console alongside keyword positions." },
    ],
    faqTitle: "Questions about Google Play Store optimization",
    faqs: [
      {
        question: "How is Google Play Store optimization different from App Store Optimization?",
        answer:
          "Google Play indexes your full description and has no keyword field, while the App Store relies on the title, subtitle and a hidden 100-character keyword field. Google Play also uses technical quality signals such as crash and ANR rates.",
      },
      {
        question: "Does Google Play index the full description?",
        answer:
          "Yes. The full description of up to 4,000 characters is indexed for search, so it should include your target keywords naturally, not just describe features.",
      },
      {
        question: "Do Android vitals affect Google Play ranking?",
        answer:
          "They can. Google Play says apps that exceed its bad behavior thresholds for crashes or ANRs may be less discoverable, so we include vitals in every audit.",
      },
      {
        question: "How quickly do Google Play listing changes take effect?",
        answer:
          "Listing updates go live after Google’s review, usually within days, and don’t need a new app release. Ranking changes then build over the following weeks.",
      },
      {
        question: "Do you also optimize for the Apple App Store?",
        answer:
          "Yes. Many clients optimize both stores with us, using a separate strategy for each.",
      },
    ],
    ctaTitle: "Rank higher on Google Play.",
    related: [
      { href: "/play-store-optimization/", label: "Play Store listing optimization" },
      { href: "/app-store-optimization-services/", label: "App Store Optimization services" },
      { href: "/success-stories/lsm-apps/", label: "LSM Apps case study" },
    ],
  },

  // Keyword: play store optimization. Angle: listing conversion.
  playStoreOptimization: {
    path: "/play-store-optimization/",
    serviceName: "Play Store Optimization",
    seoTitle: "Play Store Optimization: Listing & Conversion | ASOWin",
    description:
      "Play Store optimization that turns more visits into installs: icon, screenshots, feature graphic, listing experiments and custom listings. Free audit.",
    eyebrow: "PLAY STORE OPTIMIZATION · CONVERSION",
    title: "Play Store Optimization",
    titleEmphasis: "That Turns Visits into Installs.",
    intro:
      "Ranking gets people to your Play Store listing. The listing decides whether they install. We redesign and test your icon, screenshots, feature graphic, video and short description with Google Play’s store listing experiments, so more visitors become users.",
    highlights: [
      "Listing conversion audit against your competitors",
      "Store listing experiments designed and run for you",
      "Custom store listings for key countries",
    ],
    formTitle: "Get a free Play Store listing audit",
    formIntro: "See where your listing loses installs, within 24 hours.",
    ctaLabel: "Get my free listing audit",
    proof: [results.lsm, results.pepperfry, results.viker],
    servicesTitle: "Every part of your Play Store listing, optimized to convert.",
    servicesIntro:
      "The assets and copy people see before they install, designed from competitor research and proven with experiments.",
    services: [
      {
        title: "Icon & screenshots",
        text: "Screenshots that explain your app’s value in the first two frames, and an icon that stands out in search results.",
      },
      {
        title: "Feature graphic & video",
        text: "A feature graphic and promo video that show the app in use and give visitors a reason to install.",
      },
      {
        title: "Short description",
        text: "80 characters written as conversion copy, while still carrying a keyword for Play search.",
      },
      {
        title: "Store listing experiments",
        text: "A/B tests of graphics and localized text in Google Play Console, with results analysed and winners applied.",
      },
      {
        title: "Custom store listings",
        text: "Listings tailored to specific countries or campaigns, so each audience sees the most relevant message.",
      },
      {
        title: "Ratings & review replies",
        text: "Visible ratings and developer replies are part of the listing, so we manage both to build trust.",
      },
    ],
    editorialEyebrow: "WHY LISTING CONVERSION MATTERS",
    editorialTitle: "More installs from the same traffic, and better rankings as a result.",
    editorial: [
      "Improving your listing’s conversion rate means more installs from every visitor you already get, whether they come from Play search, browse, or your paid campaigns.",
      "It also helps ranking. Google Play weighs installs and engagement, so a listing that converts better for a keyword sends stronger signals for that keyword. Good Play Store optimization treats conversion as part of ranking, not an afterthought.",
    ],
    processTitle: "How we optimize your Play Store listing.",
    steps: [
      { title: "Benchmark your listing", text: "We compare your conversion rate and assets with competitors and Play Console peer data." },
      { title: "Design variants", text: "Our designers create new screenshots, icons and graphics, each testing one clear idea." },
      { title: "Run experiments", text: "We run store listing experiments long enough to reach a reliable result." },
      { title: "Roll out winners", text: "Winning variants go live, and the next round of tests starts." },
    ],
    faqTitle: "Questions about Play Store optimization",
    faqs: [
      {
        question: "What is a good Play Store conversion rate?",
        answer:
          "It varies widely by category, country and traffic source, so there is no single target. We benchmark your listing against peer apps using Play Console’s conversion data and competitor research.",
      },
      {
        question: "How do Google Play store listing experiments work?",
        answer:
          "Play Console splits listing visitors between your current listing and up to three variants, and reports which one produced more installs. You can test graphics and localized text.",
      },
      {
        question: "How long should a store listing experiment run?",
        answer:
          "At least seven days to cover weekday and weekend behaviour, and longer for apps with lower traffic, until the result is reliable.",
      },
      {
        question: "What are custom store listings?",
        answer:
          "Alternative versions of your Play Store listing shown to users in specific countries or arriving from specific campaigns, so each audience sees messaging written for it.",
      },
      {
        question: "Do you design the screenshots and graphics?",
        answer:
          "Yes. Our in-house designers produce all listing assets, including localized versions for each market.",
      },
    ],
    ctaTitle: "Turn more Play Store visitors into installs.",
    related: [
      { href: "/google-play-store-optimization/", label: "Google Play Store optimization" },
      { href: "/app-store-optimization/", label: "App Store Optimization" },
      { href: "/success-stories/lsm-apps/", label: "LSM Apps case study" },
    ],
  },
};

export function landingMetadata(page) {
  const url = `https://www.asowin.com${page.path}`;
  return {
    title: page.seoTitle,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.seoTitle,
      description: page.description,
      url,
      siteName: "ASOWin",
      type: "website",
      images: [{ url: "/success-stories-og.jpg", width: 1200, height: 630, alt: "ASOWin App Store Optimization client results" }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.seoTitle,
      description: page.description,
      images: ["/success-stories-og.jpg"],
      site: "@asowin",
    },
  };
}
