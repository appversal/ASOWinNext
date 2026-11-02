// Comparison tables for guides where a side-by-side answer is what searchers and
// answer engines want. Rendered after the quick answer; first column is the row label.
// Keep every cell consistent with the guide's own text and official store docs.
export const tables = {
  "aso-vs-seo-differences": {
    title: "ASO vs SEO at a glance",
    headers: ["", "ASO (app stores)", "SEO (web search)"],
    rows: [
      ["Where you rank", "App Store and Google Play search, charts and browse", "Google, Bing and other web search engines"],
      ["Text that is indexed", "App Store: app name, subtitle, 100-character keyword field. Google Play: title, short and full description", "Page titles, headings, body copy, metadata and structured data"],
      ["Main ranking inputs", "Keyword relevance, conversion rate, ratings, downloads and engagement", "Relevance, links from other sites, content quality and page experience"],
      ["What converts", "Icon, screenshots, preview video and star rating on the same page", "Search snippet, then the landing page"],
      ["How you measure", "App Store Connect and Play Console: impressions, page views, conversion, first-time downloads", "Search Console and web analytics: impressions, clicks, rankings, conversions"],
      ["How fast changes show", "Rankings can move within weeks of a metadata update", "Usually weeks to months, depending on crawl and competition"],
    ],
    verdict: "Use both: SEO captures demand on the web and sends people to the store, and ASO converts them once they arrive.",
  },
  "in-house-aso-team-vs-agency": {
    title: "In-house team vs agency vs hybrid vs tool only",
    headers: ["", "In-house team", "Agency", "Hybrid", "Tool only"],
    rows: [
      ["Best for", "Apps where ASO is core to growth and releases ship monthly or faster", "Teams without an ASO specialist, or with many apps and markets", "Mid-market apps that want product context and specialist capacity", "Early-stage apps or teams with an experienced ASO owner"],
      ["Strengths", "Deep product knowledge, fast reaction to releases", "Cross-client experience, testing and localization capacity from day one", "Combines in-house strategy with agency execution", "Low cost, full control of data"],
      ["Trade-offs", "Hiring, training and tooling costs; single point of failure", "Less product context; quality depends on who runs the account", "Needs clear ownership to avoid duplicated work", "Data without decisions; no creative or localization capacity"],
      ["Cost structure", "Salaries plus tools", "Monthly retainer or project fees", "One salary plus a smaller retainer", "Tool subscription"],
    ],
    verdict: "If ASO is core to growth and you can hire senior talent, build in-house. If not, or if you need many markets quickly, use an agency, and many teams end up hybrid.",
  },
  "aso-roi-and-cost-benchmarks": {
    title: "What ASO costs, by engagement type",
    intro: "Prices vary by market, number of apps and languages, so compare what each model includes rather than headline fees.",
    headers: ["", "How it is usually priced", "What is typically included", "What drives the cost up"],
    rows: [
      ["One-off ASO audit", "Fixed fee", "Keyword, metadata, creative and ratings review with a prioritized plan", "Number of apps, stores and markets reviewed"],
      ["Ongoing ASO retainer", "Monthly fee", "Keyword tracking, metadata updates, creative tests, review management and reporting", "Markets and languages, test volume, creative production"],
      ["Project work", "Per project", "A launch, rebrand, localization rollout or creative overhaul", "Scope, number of locales and assets"],
      ["Creative production", "Per asset set or per test", "Icons, screenshots and preview videos", "Number of variants, video, localized versions"],
      ["In-house specialist", "Salary plus tools", "Day-to-day ownership inside the team", "Seniority, tool stack, creative support"],
      ["ASO tools", "Monthly subscription", "Keyword volumes, rankings, competitor tracking", "Number of apps, keywords and markets tracked"],
    ],
    verdict: "Count every cost (fees, tools, creative, localization, test traffic) and judge ROI on incremental installs and their retention, not on total organic installs.",
  },
  "custom-product-pages-ios": {
    title: "Custom product pages and related store tools compared",
    headers: ["", "What it is", "How many", "How people reach it"],
    rows: [
      ["Custom product pages (App Store)", "Alternate product pages with their own screenshots, previews and promotional text", "Up to 70 per app", "Unique URL from ads or links, Apple Search Ads ad variations, or assigned keywords in search"],
      ["Product page optimization (App Store)", "A/B test of the default page's icon, screenshots and previews", "Up to 3 treatments against the original", "Random share of App Store visitors"],
      ["Custom store listings (Google Play)", "Alternate listings for a country, audience or campaign", "Up to 50 per app", "Targeted by country, pre-registration status, Google Ads campaigns or unique URL"],
      ["Store listing experiments (Google Play)", "A/B test of listing graphics and text", "Up to 3 variants against the current listing", "Random share of Google Play visitors"],
    ],
    verdict: "Use custom pages when an audience needs different proof, and use the testing tools to improve the default page that most visitors see.",
  },
  "how-app-ratings-are-calculated": {
    title: "App Store vs Google Play ratings",
    headers: ["", "App Store", "Google Play"],
    rows: [
      ["What the score reflects", "Average of ratings in that country or region since the last reset", "Weighted toward recent ratings"],
      ["Split by", "Country or region storefront", "Country and device type (phone, tablet, Chromebook, Wear OS)"],
      ["Can you reset it?", "Yes, optionally, with each new version; written reviews stay visible", "No"],
      ["How fast it moves", "Slowly for apps with a long history, unless reset", "Quickly, in both directions"],
      ["Ask for a rating in the app", "Apple's rating prompt, shown at most three times in 365 days per user", "Google Play In-App Review API, with a quota Google does not publish"],
      ["Reply to reviews", "Yes, in App Store Connect", "Yes, in Play Console"],
    ],
  },
  "best-aso-agency": {
    title: "Types of ASO agencies and who they suit",
    headers: ["", "Typical offer", "Suits", "Check before you sign"],
    rows: [
      ["ASO specialist agency", "Keyword research, metadata, creative tests, ratings work", "Apps that want depth on store performance", "Published case studies in your category and markets"],
      ["Full-service mobile agency", "ASO plus paid UA, creative and influencer work", "Brands that want one partner for paid and organic", "Who actually runs ASO day to day, and how much attention it gets"],
      ["ASO software company with services", "Managed ASO on top of its own tool", "Teams already using, or happy to adopt, that tool", "Whether advice stays tool-neutral"],
      ["SEO or digital agency with ASO", "ASO as one service among many", "Small budgets that already use the agency for web", "Store-specific skills: keyword field, experiments, custom pages"],
      ["Freelance ASO consultant", "Audits and part-time optimization", "Early-stage apps and one-off projects", "Capacity for creative production and localization"],
    ],
    verdict: "Whichever type you choose, apply the same checklist: proof, process, policy, people, reporting and price.",
  },
};
