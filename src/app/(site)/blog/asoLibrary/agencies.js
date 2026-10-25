import { makeLibraryPost as P } from "./factory";

// Commercial-intent guides on choosing an ASO agency. Each targets a different search:
// top-aso-agencies = a researched list, best-aso-agency = how to judge any agency,
// best-app-store-optimization-agency = the right agency by app type and market.
// Facts about other agencies come from their own sites and public directories (checked October 2026).
const dates = { date: "October 25, 2026", publishedAt: "2026-10-25", updatedAt: "2026-10-25" };

export const agencyGuides = [
  P({
    ...dates,
    slug: "top-aso-agencies",
    title: "Top ASO Agencies in 2026: Who They Are and What They’re Best For",
    seoTitle: "Top ASO Agencies in 2026: 7 Agencies Compared",
    description: "A researched list of top app store optimization agencies in 2026, with where each is based, what it is known for, and which kind of app it suits best.",
    primaryKeyword: "top ASO agencies",
    secondaryKeywords: ["best ASO agencies", "app store optimization agencies", "ASO companies"],
    category: "Strategy and Operations",
    searchIntent: "Commercial",
    answer: "The top ASO agencies in 2026 include Phiture (Berlin and New York), Moburst (New York), Yodel Mobile (London), Gummicube (California, part of Airship), Studio Mosaic (New Delhi), Infidigit (Mumbai) and ASOWin (USA, India, Indonesia and Singapore). They differ in focus: some are full app-growth agencies, some are ASO specialists with their own software, and some are SEO agencies that also offer ASO. The right choice depends on your app category, your markets and whether you need ASO alone or ASO with paid acquisition.",
    sections: [
      ["How this list was put together", [
        "Every agency below offers app store optimization as a named service on its own website or in public directories such as Clutch, DesignRush and Business of Apps. Locations, founding years and service lists were checked in October 2026.",
        "This list is written by ASOWin, which is also on it. We describe other agencies only with facts they publish themselves, and we do not rank them by a score, because no public data compares agencies on the same apps.",
      ]],
      ["Phiture: ASO and mobile growth consultancy", [
        "Phiture is a mobile growth consultancy based in Berlin with an office in New York. It lists ASO alongside performance marketing, retention and CRM, subscription revenue and growth consulting.",
        "It is well known in the ASO community: it runs the annual ASO Conference in Berlin, and co-founder Moritz Daan wrote the Advanced ASO book. Best for subscription and consumer apps that want ASO as part of a broader growth program.",
      ]],
      ["Moburst: full-service mobile-first agency", [
        "Moburst is a mobile-first digital agency headquartered in New York, founded in 2013, with offices in the US, London and Israel. ASO sits within its organic growth services next to SEO, alongside user acquisition and creative.",
        "Best for brands that want ASO, paid acquisition and creative production from one larger agency.",
      ]],
      ["Yodel Mobile: app marketing agency in London", [
        "Yodel Mobile is a London-based app marketing agency. Its main ASO product is the ASO 360 programme, and it also offers paid user acquisition, CRM, creative, localisation and custom product pages.",
        "Best for UK and European apps that want an established app marketing agency covering both organic and paid growth.",
      ]],
      ["Gummicube: ASO software plus managed services", [
        "Gummicube was founded in 2009 and has been part of Airship since 2022. It combines its DATACUBE app store data platform with managed ASO services.",
        "Best for teams that want ASO software and an agency service from the same provider, especially in the US.",
      ]],
      ["Studio Mosaic: app marketing agency in New Delhi", [
        "Studio Mosaic is an app marketing and consulting agency based in New Delhi. It lists App Store Optimization and app audits among its services and names clients such as Yatra.",
        "Best for Indian and global apps that want a dedicated app marketing studio.",
      ]],
      ["Infidigit: SEO agency with an ASO service", [
        "Infidigit is a Mumbai-based digital marketing agency, founded in 2017 and known mainly for SEO. It offers app store optimization covering metadata, reviews and keyword rankings, with a dedicated project manager.",
        "Best for Indian brands that already work with an SEO agency and want ASO handled by the same team.",
      ]],
      ["ASOWin: global ASO agency with published case studies", [
        "ASOWin is a global App Store Optimization agency with teams in the USA, India, Indonesia and Singapore. It offers ASO, app reputation management, creative A/B testing, Apple Search Ads and paid UA, and its own AI Review Replies product.",
        "Its published case studies include Pepperfry (app rating from about 3.9 to 4.4+), Indiabulls Securities (50+ keywords from unranked into the Top 50), LSM Apps (#10 to #2 for “Phone” on US Google Play), Bybit (Top 3 in Spain and Latin America) and Viker Games (#1 Top Free Games in Australia). Best for fintech, e-commerce and gaming apps, and for teams growing in India, Southeast Asia and Spanish-speaking markets.",
      ]],
      ["Tools are not agencies", [
        "Lists of ASO agencies often mix in ASO software such as AppTweak, App Radar or Sensor Tower. These are data platforms that your team or your agency uses; they do not run your ASO for you.",
        "If you have an in-house ASO specialist, a tool may be enough. If you do not, compare agencies first and ask which tools they use.",
      ]],
    ],
    playbook: [
      "Shortlist three agencies that work in your app category and markets",
      "Ask each for one published case study with real numbers",
      "Check that ASO is a core service, not an add-on",
      "Ask how they research keywords for your specific markets and languages",
      "Confirm they never buy reviews or use incentivized ratings",
      "Compare proposals on scope and reporting, not on promised rankings",
    ],
    metrics: [
      "Published case studies with before and after numbers",
      "Experience in your category and markets",
      "Share of the agency’s work that is ASO",
      "Reporting cadence and the KPIs they report on",
    ],
    faqs: [
      ["Which is the best ASO agency?", "There is no single best ASO agency for every app. Phiture, Moburst, Yodel Mobile, Gummicube and ASOWin are strong in different situations. Choose by your category, your markets and whether you need ASO only or ASO with paid acquisition, and ask each one for a published case study with real numbers."],
      ["Are ASO tools the same as ASO agencies?", "No. Tools such as AppTweak or Sensor Tower provide keyword and ranking data. An agency uses tools like these to research, write metadata, test creatives and report results for you."],
      ["Is ASOWin on this list because ASOWin wrote it?", "ASOWin wrote this list and includes itself, which we state openly. Every other agency is described only with facts from its own website or public directories, and none is scored or ranked against ASOWin."],
      ["Which ASO agencies work with Indian apps?", "ASOWin, Studio Mosaic and Infidigit all have teams in India. ASOWin’s Indian case studies include Pepperfry and Indiabulls Securities."],
    ],
    related: ["best-aso-agency", "best-app-store-optimization-agency", "how-to-choose-the-best-aso-agency", "aso-roi-and-cost-benchmarks"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
  }),

  P({
    ...dates,
    slug: "best-aso-agency",
    title: "Best ASO Agency: How to Judge Any Agency Before You Sign",
    seoTitle: "Best ASO Agency: An 8-Point Checklist Before You Hire",
    description: "How to find the best ASO agency for your app: an 8-point checklist, questions to ask, red flags, pricing models, and when an agency beats in-house or tools.",
    primaryKeyword: "best ASO agency",
    secondaryKeywords: ["how to choose an ASO agency", "ASO agency checklist", "hire ASO agency"],
    category: "Strategy and Operations",
    searchIntent: "Commercial",
    answer: "The best ASO agency for your app is the one that can show published results in your category, explains exactly how it will research keywords and test creatives for your markets, reports on installs and conversion rather than rankings alone, and refuses to buy reviews or installs. Judge every agency on the same checklist: proof, process, policy, people, reporting and price.",
    sections: [
      ["Start with proof, not promises", [
        "Ask for at least one published case study with numbers you can check, such as a rating moving from 3.9 to 4.4+ or a keyword moving from #10 to #2. A case study should name the app, the store, the market and what the agency actually did.",
        "Be wary of agencies that promise a #1 ranking or a guaranteed timeline. Store algorithms change, competitors react, and no agency controls Apple or Google.",
      ]],
      ["Check the process for your markets", [
        "Good ASO starts with keyword research in each market and language you care about, not a translated keyword list. Ask how the agency researches Hindi, Bahasa Indonesia or Spanish searches if those markets matter to you.",
        "Ask how they handle the two stores differently. The App Store indexes the app name, subtitle and a hidden 100-character keyword field; Google Play indexes the title and descriptions. An agency that writes one set of metadata for both is not doing ASO properly.",
      ]],
      ["Make policy a hard filter", [
        "Apple and Google both prohibit paid, fake or incentivized ratings and reviews. Ask every agency directly whether they buy reviews, use review exchanges or run incentivized installs, and get the answer in writing.",
        "A policy-safe agency improves ratings with in-app review prompts, reply strategy and fixes to the issues behind bad reviews. Shortcuts can get an app removed from the store.",
      ]],
      ["Know who will do the work", [
        "Ask who will run your account day to day, how much ASO experience they have, and how many other apps they manage. A senior pitch followed by a junior team is a common gap.",
        "Ask how often you will meet and who signs off metadata and creative changes before release.",
      ]],
      ["Agree on reporting before you start", [
        "Rankings alone are a weak measure. Ask for reporting on impressions, product page views, conversion rate, first-time downloads and, where possible, retention for organic users.",
        "Agree on a baseline in the first two weeks so you can judge progress against your own numbers, not the agency’s.",
      ]],
      ["Understand the pricing model", [
        "Most ASO agencies charge a monthly retainer, a one-time audit and setup fee, or a project fee for a specific piece of work such as a creative test. Retainers suit ongoing optimization; projects suit a launch or a rebrand.",
        "Ask what is included: number of markets, languages, creative tests per month, and whether paid campaigns such as Apple Search Ads are part of the fee or billed separately.",
      ]],
      ["Agency, in-house or tools?", [
        "An agency makes sense when you need experience across many apps and markets quickly, or when you cannot hire an ASO specialist. In-house makes sense when ASO is core to growth and you can hire and train someone senior.",
        "ASO tools give you data, not decisions. Many teams combine one in-house owner, a tool, and an agency for markets or skills they lack.",
      ]],
    ],
    steps: [
      ["List what you need", "Write down your category, target markets and languages, both stores or one, and whether you need paid acquisition too."],
      ["Shortlist three agencies", "Pick agencies with published work in your category or markets. Our list of top ASO agencies is a starting point."],
      ["Send the same brief to each", "Ask for a short audit of your listing, their proposed first 90 days, the team, the reporting, and the price."],
      ["Ask the policy question in writing", "Confirm they do not buy reviews, use incentivized ratings or purchase installs."],
      ["Compare and decide", "Score each on proof, process, policy, people, reporting and price, then start with a defined first phase you can evaluate."],
    ],
    playbook: [
      "Ask for one published case study with numbers",
      "Ask how they research keywords in each of your markets",
      "Check they write separate metadata for each store",
      "Get their review and install policy in writing",
      "Meet the person who will run your account",
      "Agree on KPIs and a baseline before work starts",
      "Clarify what the fee includes",
      "Start with a phase you can evaluate in 90 days",
    ],
    metrics: [
      "Store impressions and product page views",
      "Conversion rate from page view to install",
      "First-time downloads by market",
      "Keyword rankings for your priority terms",
      "Rating and review trend",
    ],
    faqs: [
      ["How do I know if an ASO agency is good?", "A good ASO agency shows published case studies with real numbers, explains its keyword and creative-testing process for your markets, reports on installs and conversion, and confirms in writing that it never buys reviews or installs."],
      ["How much does an ASO agency cost?", "Most agencies charge a monthly retainer for ongoing work, or a one-time fee for an audit or project. The price depends on the number of markets, languages and creative tests. Ask each agency to list exactly what its fee includes."],
      ["What are red flags when hiring an ASO agency?", "Guaranteed #1 rankings, promises of results in a fixed number of days, buying reviews or installs, one set of metadata for both stores, and reporting that shows rankings but never installs."],
      ["Is an ASO agency better than doing ASO in-house?", "An agency is better when you need experience across many apps and markets quickly. In-house is better when ASO is central to your growth and you can hire a senior specialist. Many teams use both."],
    ],
    related: ["top-aso-agencies", "best-app-store-optimization-agency", "how-to-choose-the-best-aso-agency", "aso-kpis-metrics"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
  }),

  P({
    ...dates,
    slug: "best-app-store-optimization-agency",
    title: "Best App Store Optimization Agency for Your App Type and Market",
    seoTitle: "Best App Store Optimization Agency by App Type & Market",
    description: "The best app store optimization agency depends on your app. What to look for in an ASO agency for gaming, fintech, e-commerce, and India, US, SEA and LatAm.",
    primaryKeyword: "best app store optimization agency",
    secondaryKeywords: ["ASO agency for gaming apps", "ASO agency for fintech apps", "ASO agency India"],
    category: "Strategy and Operations",
    searchIntent: "Commercial",
    answer: "The best app store optimization agency is the one that has already solved your kind of problem: gaming apps need creative testing and chart strategy, fintech apps need trust and compliance-aware metadata, e-commerce apps need ratings and seasonal planning, and each market needs native-language keyword research. Match the agency’s proof to your category and markets before comparing price.",
    sections: [
      ["Gaming apps", [
        "Games compete on creative: the icon, the first screenshots and the video decide most installs. Look for an agency that runs structured creative tests and understands top charts in your target countries.",
        "Proof to ask for: a game that reached the top of a chart. ASOWin’s work with Viker Games reached #1 in Top Free Games in Australia, with 500,000+ installs in one day.",
      ]],
      ["Fintech and trading apps", [
        "Finance users search with high intent and decide on trust. Metadata must be accurate and compliant with financial-services rules, and screenshots must explain security and fees clearly.",
        "Proof to ask for: keyword growth in a competitive finance category. ASOWin moved 50+ previously unranked keywords into the Top 50 for Indiabulls Securities on both stores.",
      ]],
      ["E-commerce and marketplace apps", [
        "Shopping apps live on ratings and seasonality. A low rating cuts conversion in search results, and sale seasons change what people search for.",
        "Proof to ask for: rating improvement. Pepperfry’s app rating improved from about 3.9 to 4.4+, sustained month on month, through review replies and feedback-driven fixes.",
      ]],
      ["Utility and tool apps", [
        "Utilities often compete for one short, high-volume keyword such as “phone”, “scanner” or “VPN”, where small ranking moves matter a lot.",
        "Proof to ask for: movement on a single competitive keyword. ASOWin moved LSM Apps’ Easy Phone from #10 to #2 for “Phone” on US Google Play.",
      ]],
      ["India", [
        "Google Play dominates in India, users search in English, Hindi and Hinglish, and many use low-storage devices, so app size and clear value matter. An agency should research Indian search terms, not translate a US keyword list.",
        "Look for an agency with an Indian team and Indian case studies. ASOWin works from Mumbai and Noida, with case studies including Pepperfry and Indiabulls Securities.",
      ]],
      ["United States", [
        "The US App Store is highly competitive and Apple Search Ads strongly shapes search results. Look for an agency that plans organic ASO and Apple Search Ads together.",
        "Proof to ask for: a US ranking result, such as LSM Apps’ #2 for “Phone” on US Google Play.",
      ]],
      ["Southeast Asia and Indonesia", [
        "Indonesia and its neighbours need listings written in Bahasa Indonesia and other local languages, with local payment and data-cost concerns in mind.",
        "Look for an agency with a local team. ASOWin has teams in Jakarta and Singapore and a Bahasa Indonesia service page.",
      ]],
      ["Spain and Latin America", [
        "Spanish-speaking markets share a language but not identical search terms. Research Spain and each Latin American market separately.",
        "Proof to ask for: rankings across several Spanish-speaking countries. Bybit reached Top 3 rankings in Spain and Latin America through Spanish-language ASO with ASOWin.",
      ]],
    ],
    playbook: [
      "Name your category and top three markets first",
      "Ask each agency for a case study in that category",
      "Ask for one result in each of your priority markets",
      "Check they research keywords in each local language",
      "Prefer agencies that plan organic ASO and paid search together where it matters",
    ],
    metrics: [
      "Case studies in your category",
      "Results in your priority markets",
      "Native-language keyword research",
      "Creative testing capability for creative-led categories",
    ],
    faqs: [
      ["What is the best ASO agency for gaming apps?", "Choose an agency with proven creative testing and chart results in your target countries. Ask for a game case study with chart positions, such as Viker Games reaching #1 in Top Free Games in Australia with ASOWin."],
      ["What is the best ASO agency in India?", "Look for an agency with an Indian team that researches English, Hindi and Hinglish searches and has Indian case studies. ASOWin works from Mumbai and Noida, with results for Pepperfry and Indiabulls Securities."],
      ["Do I need a different ASO agency for each country?", "Not necessarily. One agency can cover several markets if it has native-language keyword research and local results in each of them. Ask for proof market by market."],
      ["Should my ASO agency also run Apple Search Ads?", "In competitive US categories it helps. Apple Search Ads data shows which keywords convert, and organic and paid placements appear on the same search results page."],
    ],
    related: ["top-aso-agencies", "best-aso-agency", "gaming-app-aso-strategies", "fintech-app-aso-strategies", "aso-for-indian-app-market"],
    serviceLinks: ["/services/app-store-optimization/", "/aso-agency-india/", "/aso-agency-usa/", "/contact/"],
  }),
];
