// One source for each service page's visible FAQ and its Service / BreadcrumbList / FAQPage schema,
// so the structured data always matches what visitors see.
// An entry with `faqs: []` outputs only the Service and BreadcrumbList schema (no visible FAQ).

export const SERVICE_FAQS = {
  "app-store-optimization": {
    name: "App Store Optimization (ASO)",
    path: "/services/app-store-optimization/",
    serviceType: "App Store Optimization",
    description:
      "Keyword research, metadata optimization, creative testing and ratings strategy that grow app rankings and installs on the App Store and Google Play.",
    faqs: [
      {
        q: "What is App Store Optimization (ASO)?",
        a: "App Store Optimization is the process of improving an app's visibility and conversion on the App Store and Google Play. It covers keyword research, the app title, subtitle and description, screenshots and icons, and ratings, so the app ranks for the searches its users make and more visitors install it.",
      },
      {
        q: "How long does ASO take to show results?",
        a: "Most apps see early movement in keyword rankings within a few weeks of a metadata update, because both stores re-index listings after each release. Lasting gains in rankings and organic installs usually take three to six months of testing, iteration and tracking against competitors.",
      },
      {
        q: "What is the difference between ASO for the App Store and Google Play?",
        a: "The App Store indexes the app name, subtitle and a hidden 100-character keyword field, while Google Play indexes the title, short description and full description. Both reward conversion and ratings, so ASOWin writes separate metadata for each store and tests creatives on each one.",
      },
      {
        q: "Does ASO replace paid user acquisition?",
        a: "No. ASO grows organic installs from store search and browse, while paid campaigns buy additional reach. They work best together: a well-optimized listing converts paid traffic at a lower cost, and Apple Search Ads data shows which keywords are worth targeting organically.",
      },
      {
        q: "What does ASOWin need to start an ASO project?",
        a: "We need store links for your apps, access to App Store Connect and Google Play Console analytics, your target markets and languages, and your main competitors. We then deliver a free ASO audit covering keywords, metadata, creatives and ratings before agreeing a plan.",
      },
    ],
  },
  "app-reputation-management": {
    name: "App Reputation Management",
    path: "/services/app-reputation-management/",
    serviceType: "App review and rating management",
    description:
      "Review monitoring, reply strategy, in-app rating prompts and issue analysis that improve app ratings on the App Store and Google Play.",
    faqs: [
      {
        q: "What is app reputation management?",
        a: "App reputation management is the work of improving how an app is rated and reviewed on the App Store and Google Play. It includes monitoring reviews, replying to users, finding the issues behind negative feedback, and timing in-app rating prompts so satisfied users are asked to rate the app.",
      },
      {
        q: "How do app ratings affect rankings and installs?",
        a: "Ratings affect installs directly and rankings indirectly. Both stores show the star rating in search results, so a higher rating raises the share of visitors who install, and that engagement feeds ranking. Pepperfry's rating rose from about 3.9 to 4.4+ while working with ASOWin.",
      },
      {
        q: "Is it allowed to ask users for ratings?",
        a: "Yes, when you use the stores' own tools. Apple's in-app review prompt and Google Play's In-App Review API let apps ask users to rate without leaving the app. Paying for, incentivizing or faking ratings and reviews is prohibited by both stores, and ASOWin does not do it.",
      },
      {
        q: "Should we reply to every app review?",
        a: "Prioritize replies to negative and detailed reviews first, because users can update their rating after a helpful answer and future visitors read the replies. A short, specific reply that names the fix or the next step works better than a generic thank-you.",
      },
      {
        q: "How quickly can an app rating improve?",
        a: "Google Play weights recent ratings more heavily, so improvements can show within weeks once prompts and fixes are in place. The App Store average moves more slowly. The pace depends on review volume and on fixing the product issues that cause low ratings.",
      },
    ],
  },
  "creative-ab-testing": {
    name: "Creative A/B Testing & Design",
    path: "/services/creative-ab-testing/",
    serviceType: "App store creative design and A/B testing",
    description:
      "Icon, screenshot and preview video design with A/B testing on the App Store and Google Play to raise store listing conversion.",
    faqs: [
      {
        q: "What is app store creative A/B testing?",
        a: "Creative A/B testing compares two or more versions of an app's icon, screenshots or preview video with real store visitors to see which one gets more installs. Apple runs these tests through Product Page Optimization and Google Play through Store Listing Experiments.",
      },
      {
        q: "Which creative assets should we test first?",
        a: "Start with the icon and the first two or three screenshots, because they appear in search results and decide whether people open the listing at all. Preview videos and later screenshots matter mainly to visitors who are already on the product page.",
      },
      {
        q: "How long should an app store A/B test run?",
        a: "Run each test for at least seven days so it covers a full weekly cycle, and until the store reports a confident result. Low-traffic apps may need several weeks. Ending a test early often picks a winner that does not hold up.",
      },
      {
        q: "What are Custom Product Pages and Custom Store Listings?",
        a: "They are alternate versions of an app's store page. Apple's Custom Product Pages and Google Play's Custom Store Listings let you show different screenshots and messaging to different audiences, ads or countries, so each visitor sees the most relevant version.",
      },
    ],
  },
  "paid-user-acquisition": {
    name: "Paid User Acquisition & Apple Search Ads",
    path: "/services/paid-user-acquisition/",
    serviceType: "Mobile app user acquisition and Apple Search Ads management",
    description:
      "Apple Search Ads and paid user acquisition campaigns planned alongside ASO to grow app installs at a sustainable cost.",
    faqs: [
      {
        q: "What is Apple Search Ads?",
        a: "Apple Search Ads is Apple's advertising platform for promoting apps in App Store search results and other App Store placements. Advertisers bid on keywords, and ads appear at the top of results for people already searching for an app like theirs.",
      },
      {
        q: "How do paid campaigns and ASO work together?",
        a: "Paid campaigns bring extra visitors to the store listing, and ASO decides how many of them install. A better listing lowers the cost per install, while Apple Search Ads keyword data shows which search terms convert and are worth targeting in organic metadata.",
      },
      {
        q: "Which channels does ASOWin manage for user acquisition?",
        a: "ASOWin manages Apple Search Ads and plans paid acquisition across other app install channels, choosing the mix by market, budget and the cost per install or retention target you set. Campaigns are reported together with organic results so you see total growth.",
      },
      {
        q: "How should we measure paid user acquisition?",
        a: "Measure cost per install alongside what happens after the install: retention, activation and revenue per user. A cheap install that never opens the app twice costs more than it looks, so we optimize campaigns toward the in-app events that matter to your business.",
      },
    ],
  },
  "automated-aso-ai": {
    name: "Automated ASO with AI",
    path: "/services/automated-aso-ai/",
    serviceType: "AI-assisted app store optimization",
    description:
      "AI-assisted review analysis, reply workflows and ASO reporting that help app teams act on store data faster.",
    faqs: [
      {
        q: "What is automated ASO with AI?",
        a: "Automated ASO uses AI to handle repetitive store work: sorting and analyzing reviews, drafting replies in your brand voice, spotting rating and keyword changes, and building reports. ASOWin's team reviews the output and turns it into ASO decisions, so automation speeds up the work without replacing judgment.",
      },
      {
        q: "Can AI reply to app reviews for us?",
        a: "Yes. ASOWin's AI drafts replies that match your brand voice and can post routine replies automatically, while critical reviews are routed to your team or support tool. You decide which review types are answered automatically and which need a person.",
      },
      {
        q: "Does automation replace an ASO specialist?",
        a: "No. AI is good at volume work such as tagging thousands of reviews or tracking ranking changes. Choosing keywords, writing metadata and deciding what to test still need a specialist who understands your market, competitors and product roadmap.",
      },
      {
        q: "What insights does AI review analysis provide?",
        a: "It groups reviews by topic and sentiment, so you can see which bugs, features or pricing issues drive low ratings and how that changes after each release. Those insights guide product fixes, reply priorities and the messaging in your store listing.",
      },
    ],
  },
  "keyword-installs": {
    name: "Keyword Installs",
    path: "/services/keyword-installs/",
    serviceType: "Keyword-targeted app install campaigns",
    description:
      "Keyword install campaigns planned alongside ASO to support app rankings for target search terms.",
    faqs: [],
  },
  "automated-review-replies": {
    name: "AI Review Replies",
    path: "/automated-review-replies/",
    serviceType: "AI-powered app review reply automation",
    description:
      "ASOWin's AI product that drafts and posts app review replies in your brand voice and routes critical reviews to your support team.",
    faqs: [],
  },
};
