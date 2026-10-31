import { released } from "./release";

const P = released("2026-10-30");

export const ops01 = [
  P({
    slug: "how-much-does-it-cost-to-make-an-app",
    title: "How Much Does It Cost to Make an App? A Realistic Budget Breakdown",
    seoTitle: "How Much Does It Cost to Make an App? Full Breakdown",
    description: "What drives app development cost: features, platforms, design, backend, team location, launch and marketing, plus ongoing costs most budgets forget.",
    primaryKeyword: "how much does it cost to make an app",
    secondaryKeywords: ["app development cost", "cost to build an app", "app budget"],
    category: "Strategy and Operations",
    answer: "App costs vary from a few thousand dollars for a simple prototype to hundreds of thousands for complex products, because cost depends on features, platforms, design depth, backend and integrations, and where your team is based. As a rough orientation, simple apps often fall in the tens of thousands of dollars, mid-complexity apps in the higher tens to low hundreds of thousands, and complex apps above that. Budget separately for launch, marketing, and ongoing maintenance, which many teams underestimate.",
    sections: [
      ["Why there is no single price", [
        "Asking how much an app costs is like asking how much a house costs. A single-screen utility and a two-sided marketplace with payments, chat, and real-time maps are both apps, but they differ by orders of magnitude in effort. The useful question is what your specific scope will cost, and which choices drive that cost up or down.",
        "The figures in this guide are broad, illustrative ranges to help with early planning, not quotes. Get estimates from several teams based on a written scope, and expect them to vary.",
      ]],
      ["The biggest cost drivers", [
        "Features and complexity are the largest driver. Each screen, user role, integration, and edge case adds design, development, and testing time. User accounts, payments, chat, offline sync, real-time location, video, and AI features each add significant work.",
        "Platforms matter too: building native apps for both iOS and Android costs more than one platform, while cross-platform frameworks such as Flutter or React Native can reduce duplication for many apps. The backend, including servers, databases, admin dashboards, and APIs, is often a large hidden cost.",
      ]],
      ["Rough cost ranges by complexity", [
        "Simple apps, such as a basic utility or content app with few screens and no complex backend, often cost in the low to mid tens of thousands of dollars with an experienced team. Mid-complexity apps, with accounts, payments, an admin panel, and several integrations, often fall in the higher tens of thousands to low hundreds of thousands.",
        "Complex apps, such as marketplaces, fintech, real-time apps, or products with heavy AI or media processing, can cost well into the hundreds of thousands or more. These ranges vary widely with team location and quality, so treat them only as orientation.",
      ]],
      ["Team location and type", [
        "Hourly rates differ greatly between regions and between freelancers, agencies, and in-house teams. Rates in North America and Western Europe are typically higher than in Eastern Europe, Latin America, or South and Southeast Asia. Lower rates can reduce cost, but communication, time zones, and quality control also matter.",
        "Freelancers can be cost-effective for small, well-defined projects. Agencies provide complete teams and project management. In-house teams cost more upfront but build long-term capability. Choose based on scope, timeline, and how central the app is to your business.",
      ]],
      ["Design and user experience", [
        "Good design is not decoration; it determines whether users understand and keep using the app. Budget for user research, wireframes, visual design, and usability testing. Skimping on design often leads to costly rework after launch.",
        "Design also affects store conversion. Your screenshots and icon come from your product's design, as explained in our guides to [App Store screenshot design](/blog/app-store-screenshot-design/) and [app icon design](/blog/app-icon-design-tips-and-practices/).",
      ]],
      ["Testing and quality assurance", [
        "Testing across devices, operating system versions, screen sizes, and network conditions takes real time. Automated tests reduce regressions; manual testing catches usability issues. Budget for QA throughout development, not just at the end.",
        "Quality affects ratings and visibility. Crashes and bugs at launch generate one-star reviews that are hard to recover from, as covered in [crash rate and store ranking](/blog/crash-rate-and-store-ranking/).",
      ]],
      ["Launch costs", [
        "Launch costs include developer accounts ($99 per year for Apple, a one-time $25 for Google Play), store assets such as screenshots and preview videos, legal documents like a privacy policy, and pre-launch testing. Our guides to [publishing on Google Play](/blog/how-to-publish-app-on-google-play/) and [publishing on the App Store](/blog/how-to-publish-app-on-app-store/) walk through the steps.",
        "Plan time and budget for app store optimization before launch: keyword research, metadata, and creative. Our [app launch ASO checklist](/blog/app-launch-aso-checklist/) lists the essentials.",
      ]],
      ["Marketing and user acquisition", [
        "Building the app is only half the investment. Users do not arrive automatically. Budget for ASO, content, community building, and paid acquisition. Many teams spend as much or more on growth as on development over the app's life.",
        "Our [app marketing budget](/blog/app-marketing-budget/) guide explains how to plan spend, and the [mobile app marketing strategy](/blog/mobile-app-marketing-strategy/) guide covers which channels to prioritize.",
      ]],
      ["Ongoing costs most budgets forget", [
        "After launch, apps need maintenance: bug fixes, updates for new OS versions and devices, security patches, and new store requirements such as target API levels. A common planning rule is to budget a meaningful share of the initial build cost each year for maintenance, often cited in the range of 15 to 25 percent, depending on complexity.",
        "Hosting, third-party services, analytics, customer support, and AI or API usage add recurring costs that grow with users. Factor these into pricing and monetization decisions, as covered in [how to make money from an app](/blog/how-to-make-money-from-an-app/).",
      ]],
      ["How to reduce cost without cutting quality", [
        "Start with a minimum viable product focused on one core job and one audience. Validate demand before building every feature. Use cross-platform frameworks where they fit, managed backend services instead of custom infrastructure, and proven third-party tools for payments, analytics, and authentication.",
        "Research the market first so you build the right thing. Our [app market research guide](/blog/app-market-research-complete-guide/) and [pre-launch ASO strategy](/blog/pre-launch-aso-strategy/) explain how to validate demand and keywords before investing heavily.",
      ]],
      ["Common budgeting mistakes", [
        "The most common mistake is budgeting only for development and leaving nothing for marketing and maintenance. Others include vague scopes that invite surprise costs, choosing the cheapest quote without checking quality, and building too many features before validating demand.",
        "Teams also underestimate backend and admin tools, and forget the cost of store requirements and OS updates that arrive every year.",
      ]],
      ["A worked example: budgeting a fitness MVP", [
        "A founder plans a fitness app with workout plans, progress tracking, and subscriptions. Instead of building for both platforms with custom features, they scope a cross-platform MVP with one workout program, basic tracking, and in-app subscriptions, using managed backend services.",
        "They budget separately for design, development, QA, launch assets, and three months of marketing, plus an annual maintenance reserve. After launch, retention data guides which features to build next, avoiding spend on features users do not want.",
      ]],
    ],
    steps: [
      ["Write a clear scope", "List core features, user roles, platforms, integrations, and must-have versus nice-to-have items."],
      ["Choose platforms and tech approach", "Decide between native and cross-platform, and managed or custom backend."],
      ["Get several estimates", "Request quotes from multiple teams based on the same written scope."],
      ["Budget beyond development", "Include design, QA, launch, marketing, and an annual maintenance reserve."],
      ["Start with an MVP", "Build the core job first, validate demand, then expand based on data."],
    ],
    examples: [
      ["Scope", "An app like Uber for pet care.", "Customers book vetted pet sitters in one city; sitters accept jobs; in-app payment; ratings.", "A specific scope enables accurate estimates."],
      ["Budget plan", "Development only.", "Design, development, QA, launch assets, three months of marketing, and a maintenance reserve.", "Full budgets prevent stalling after launch."],
      ["Feature set", "Twenty features at launch.", "Five core features at launch, with more after validating demand.", "MVPs reduce cost and risk."],
    ],
    playbook: ["Define a written scope", "Start with an MVP", "Compare several estimates", "Budget for marketing and maintenance", "Use managed services where possible", "Validate demand before scaling features"],
    metrics: ["Cost per feature delivered", "Budget variance from estimate", "Time to launch", "Post-launch maintenance spend", "Cost per retained user after launch"],
    faqs: [
      ["How much does a simple app cost?", "Simple apps with few screens and minimal backend often cost in the low to mid tens of thousands of dollars with an experienced team, though ranges vary widely by region."],
      ["Is it cheaper to build for one platform?", "Usually yes. Cross-platform frameworks can also reduce cost when building for both iOS and Android."],
      ["What are the ongoing costs of an app?", "Maintenance, OS and store updates, hosting, third-party services, support, and marketing. Many teams reserve a share of the build cost each year for maintenance."],
      ["How much do developer accounts cost?", "Apple charges $99 per year; Google Play charges a one-time $25 registration fee."],
      ["How can I reduce app development cost?", "Start with an MVP, use cross-platform frameworks and managed services where suitable, and validate demand before building more features."],
      ["Should I budget for marketing before launch?", "Yes. ASO, content, and early marketing should be planned alongside development, because users do not arrive automatically."],
    ],
    related: ["app-marketing-budget", "how-to-make-money-from-an-app", "app-market-research-complete-guide", "app-launch-aso-checklist"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Apple Developer Program", url: "https://developer.apple.com/programs/" },
    ],
  }),
  P({
    slug: "app-marketing-budget",
    title: "App Marketing Budget: How Much to Spend and Where It Should Go",
    seoTitle: "App Marketing Budget: How Much to Spend and Where",
    description: "Plan an app marketing budget: methods to set spend, splitting ASO, content, creative, and paid UA, launch versus scale budgets, and measuring return.",
    primaryKeyword: "app marketing budget",
    secondaryKeywords: ["how much to spend on app marketing", "app marketing cost", "user acquisition budget"],
    category: "Strategy and Operations",
    answer: "Set an app marketing budget from what a user is worth, not from a guess. Estimate lifetime value, decide the payback period you can afford, and work backward to a cost per user and total spend. Early on, put most of the budget into foundations such as ASO, store creative, and testing small channels; scale paid acquisition only after organic users retain well. Review spend monthly and move budget to the channels with the lowest cost per retained or paying user.",
    sections: [
      ["Why most app budgets are guesses", [
        "Many teams set a marketing budget as a round number left over after development, then spread it across channels hoping something works. Without a link to user value, there is no way to know whether spending more would be profitable or wasteful.",
        "A value-based budget connects spend to outcomes. It tells you how much you can afford per user, which channels pay back, and when to scale. Our guide to [mobile app LTV calculation](/blog/mobile-app-ltv-calculation/) explains how to estimate user value.",
      ]],
      ["Method 1: value-based budgeting", [
        "Estimate lifetime value (LTV) per user using net revenue after store fees. Decide how quickly you need spend to pay back, for example within six months. Your maximum cost per user is the value a user generates within that window. Multiply by the number of users you want to acquire to get a budget.",
        "This method scales naturally: when channels deliver users below your target cost, you can spend more. Our [cost per install explainer](/blog/cost-per-install-cpi-explained/) shows how to translate value into bid targets.",
      ]],
      ["Method 2: percentage of revenue", [
        "Established apps often allocate a share of revenue to marketing. This is simple and keeps spending proportional, but it can underinvest in growth when user value is high or overspend when channels are inefficient. Use it as a ceiling or sanity check alongside value-based targets.",
        "Pre-revenue apps cannot use this method. They should start with a test budget sized to learn, not to scale.",
      ]],
      ["Method 3: test-and-learn budgets", [
        "Before you know your LTV, allocate a fixed test budget to learn: enough to run meaningful experiments in two or three channels and gather retention data. The goal is information, not volume. Decide in advance what results would justify scaling each channel.",
        "Our [ASO experimentation roadmap](/blog/aso-experimentation-roadmap/) explains how to plan tests that produce clear decisions.",
      ]],
      ["Where the money should go at launch", [
        "In the first months, prioritise foundations that improve the return on every channel: keyword research and metadata, high-converting screenshots and icon, rating prompts, and analytics. A store listing that converts better lowers the cost of every install, paid or organic.",
        "Then test a small number of channels where your audience already is: Apple Ads for high-intent search, content or short video for awareness, and community channels for niche audiences. Our [mobile app marketing strategy](/blog/mobile-app-marketing-strategy/) guide explains how to pick.",
      ]],
      ["Where the money should go at scale", [
        "Once organic users retain well and you know your user value, scale paid acquisition in the channels with the best cost per retained user. Keep investing in creative production, because creative fatigue raises costs over time. Continue ASO and creative testing to keep conversion high.",
        "Our guides to [Apple Ads campaign structure](/blog/apple-ads-campaign-structure/), [Meta ads for app installs](/blog/meta-ads-for-app-installs/), and [creative strategy for app install ads](/blog/creative-strategy-for-app-install-ads/) cover scaling paid channels.",
      ]],
      ["Do not forget non-media costs", [
        "Marketing budgets include more than ad spend: ASO tools, creative design and video production, agency or freelancer fees, analytics and attribution tools, and team time. These costs are easy to underestimate.",
        "Our guides to [best ASO tools](/blog/best-aso-tools-compared/), [mobile measurement partners](/blog/mobile-measurement-partners-compared/), and [ASO freelancer vs agency](/blog/aso-freelancer-vs-agency/) help estimate these costs.",
      ]],
      ["Balancing organic and paid", [
        "Organic growth through ASO, content, and word of mouth compounds over time and lowers blended acquisition cost. Paid acquisition scales faster but stops when spending stops. Healthy apps balance both, using paid to accelerate and organic to sustain.",
        "Our guide to [paid vs organic user acquisition](/blog/paid-vs-organic-user-acquisition-balance/) explains how to find the right balance, and [attribution and organic uplift](/blog/attribution-and-organic-uplift/) explains measuring their interaction.",
      ]],
      ["Seasonal budgeting", [
        "Acquisition costs and user intent change through the year. The fourth quarter often brings higher ad prices, while January is a peak for fitness, finance, and learning apps. Plan budgets around your category's seasonal patterns.",
        "Our [seasonal ASO calendar](/blog/app-seasonality-aso-calendar/) helps map peaks for both organic and paid planning.",
      ]],
      ["Measuring return", [
        "Track cost per install, cost per activated user, cost per retained user, cost per paying user, and return on ad spend by channel. Review monthly and move budget toward channels that deliver valuable users at sustainable cost.",
        "Include organic results in the picture: if a paid campaign lifts organic installs, the true cost of growth is lower than paid metrics suggest. Test incrementality to avoid overclaiming.",
      ]],
      ["Common budgeting mistakes", [
        "Spending heavily on paid acquisition before retention is healthy is the most expensive mistake. Others include spreading a small budget across too many channels, ignoring creative production costs, and judging channels by cost per install instead of user value.",
        "Teams also set an annual budget and never revisit it, missing opportunities to scale winners or cut losers.",
      ]],
      ["A worked example: a meditation app's first-year budget", [
        "A meditation app starts with a modest test budget: a share for ASO and creative, a share for Apple Ads on exact-match sleep and meditation keywords, and a share for short-video content and creator tests. After three months, retention data shows users are worth enough to afford a higher cost per install in the US.",
        "The team increases Apple Ads and creator spend, keeps investing in screenshot tests, and reallocates budget monthly based on cost per subscriber. Blended acquisition cost falls as organic installs grow from better ratings and rankings.",
      ]],
    ],
    steps: [
      ["Estimate user value", "Calculate LTV with net revenue, or set a test budget if you lack data."],
      ["Set a payback window", "Decide how quickly acquisition spend must be recovered."],
      ["Fund foundations first", "Invest in ASO, creative, ratings, and analytics before scaling paid."],
      ["Test a few channels", "Run focused tests in two or three channels with clear success criteria."],
      ["Reallocate monthly", "Move budget toward channels with the lowest cost per retained or paying user."],
    ],
    examples: [
      ["Budget setting", "We will spend $10,000 a month on marketing.", "Users are worth $12 within six months, so we can spend up to about $10 per install while keeping payback within target.", "Value-based targets connect spend to outcomes."],
      ["Early allocation", "Split equally across eight channels.", "Fund ASO and creative first, then test Apple Ads and short video.", "Concentrated tests produce clearer answers."],
      ["Success metric", "Lowest cost per install.", "Lowest cost per subscriber with healthy retention.", "Cheap installs can be expensive users."],
    ],
    playbook: ["Base budgets on user value", "Fund ASO and creative first", "Test before scaling", "Include non-media costs", "Balance organic and paid", "Reallocate monthly by user value"],
    metrics: ["Cost per retained user by channel", "Cost per paying user", "Payback period", "Return on ad spend", "Blended acquisition cost"],
    faqs: [
      ["How much should I spend on app marketing?", "Enough to acquire users below what they are worth within your payback window. Start with a test budget if you do not yet know user value."],
      ["What should a small app marketing budget focus on?", "ASO, store creative, ratings, and one or two well-chosen channels such as Apple Ads or community content."],
      ["When should I increase paid acquisition spend?", "When organic users retain well and paid channels deliver valuable users at a cost that pays back within your target."],
      ["Should I spend on marketing before launch?", "Yes, on foundations such as ASO, a landing page, waitlist building, and store creative."],
      ["How do I measure app marketing return?", "Track cost per retained and paying user, payback period, and return on ad spend by channel, and test incrementality."],
      ["Is ASO part of the marketing budget?", "Yes. ASO improves conversion for every channel and drives organic installs, so it belongs in every app marketing budget."],
    ],
    related: ["mobile-app-marketing-strategy", "mobile-app-ltv-calculation", "cost-per-install-cpi-explained", "aso-roi-and-cost-benchmarks"],
    serviceLinks: ["/services/paid-user-acquisition/", "/services/app-store-optimization/"],
    sources: [],
  }),
  P({
    slug: "app-privacy-policy-guide",
    title: "App Privacy Policy Guide: What Your App Needs and How to Write It",
    seoTitle: "App Privacy Policy: What Your App Needs and How to Write It",
    description: "What an app privacy policy must cover for the App Store and Google Play: data collected, SDKs, user rights, children, account deletion, and where to host it.",
    primaryKeyword: "app privacy policy",
    secondaryKeywords: ["privacy policy for app", "mobile app privacy policy requirements", "privacy policy URL app store"],
    category: "Policy and Compliance",
    answer: "Both the App Store and Google Play require a privacy policy link for apps. The policy should explain what personal data the app and its third-party SDKs collect, why it is collected, how it is used and shared, how long it is kept, how users can access or delete it, and how to contact you, plus any extra rules for children or specific regions. Host it at a public, stable URL, link it in the store listing and inside the app, and keep it consistent with your App Privacy details and Data safety form.",
    sections: [
      ["Why every app needs a privacy policy", [
        "Apple requires every app to provide a privacy policy URL in App Store Connect, and Google Play requires a privacy policy for apps, displayed in the store listing and accessible inside the app. Privacy laws in many regions, such as the GDPR in Europe and state laws in the United States, also require clear privacy notices when personal data is processed.",
        "Even apps that collect little data usually rely on SDKs for analytics, crash reporting, or ads that do collect data. A privacy policy that accurately describes this protects users, your listing, and your business. This guide is general information, not legal advice; consult a qualified lawyer for your situation.",
      ]],
      ["What the policy should cover", [
        "At a minimum, describe what personal data you collect, including data collected automatically and by third-party SDKs; why you collect it; how you use it; who you share it with and why; how long you keep it; how you protect it; and how users can exercise their rights, such as access, correction, and deletion.",
        "Include your identity and contact details, the date of the latest update, and how you will notify users of changes. Write in plain language. Users and reviewers should be able to understand it without legal training.",
      ]],
      ["Account third-party SDKs", [
        "Analytics, attribution, ads, crash reporting, payment, and social login SDKs may collect device identifiers, usage data, location, or other information. Your policy must account for this data, not just data your own code collects.",
        "Keep an inventory of every SDK, what it collects, and why. Review it whenever you add or update SDKs. Our guide to [privacy labels and Data safety](/blog/privacy-labels-data-safety-conversion/) explains the same inventory approach for store disclosures.",
      ]],
      ["Keep it consistent with store disclosures", [
        "Your App Privacy details on the App Store and Data safety form on Google Play summarise data practices for users. They must match your privacy policy and your app's actual behaviour. Inconsistencies are a common reason for rejection or enforcement.",
        "When practices change, update the policy, the store disclosures, and the app together. Our guide to [Google Play account suspensions](/blog/google-play-account-suspension-recovery/) explains how data disclosure problems can lead to enforcement.",
      ]],
      ["User rights and account deletion", [
        "Many privacy laws give users rights to access, correct, delete, or port their data, and to object to certain processing. Explain how users can exercise these rights and how quickly you will respond.",
        "Apple requires apps that support account creation to let users initiate account deletion from within the app, and Google Play requires apps that allow account creation to provide a way to request account and data deletion, including a web resource. Describe these options in your policy. Our [App Store Review Guidelines explained](/blog/app-store-review-guidelines-explained/) guide covers the Apple requirement.",
      ]],
      ["Children's data", [
        "If your app targets children or is likely to be used by them, stricter rules apply, such as COPPA in the United States and the GDPR's protections for children in Europe. Both stores also have specific policies for apps in kids or family categories, including limits on ads and data collection.",
        "Our [kids and family app ASO](/blog/kids-family-app-aso/) playbook covers store requirements for children's apps. Seek legal advice before collecting data from children.",
      ]],
      ["Tracking and advertising", [
        "If your app tracks users across other companies' apps or websites for advertising, explain this in your policy, and on iOS request permission through App Tracking Transparency. Describe advertising partners and how users can opt out where applicable.",
        "Our [ATT prompt guide](/blog/att-prompt-opt-in-rate/) explains Apple's tracking rules, and our [AdMob ad monetization guide](/blog/admob-ad-monetization-guide/) covers consent for ads.",
      ]],
      ["Where and how to host it", [
        "Host your privacy policy at a public, stable URL on your website, not a document that requires login or changes location. Google Play requires the policy to be at an active, publicly accessible, non-geofenced URL that is not a PDF. Link it in your store listing, inside the app, and on your website.",
        "Make the policy easy to find in the app, for example in settings or account screens. Translate it into the languages your app supports where practical.",
      ]],
      ["Region-specific requirements", [
        "Different regions add specific requirements: the GDPR requires a legal basis for processing and information about international data transfers; several US state privacy laws require disclosures about selling or sharing personal information and opt-out mechanisms; other countries have their own rules.",
        "If you operate in many markets, consider a policy structure with a global section plus region-specific sections. Our [European multi-country rollout](/blog/aso-for-european-multi-country-rollout/) guide touches on privacy expectations in Europe.",
      ]],
      ["Privacy as a conversion factor", [
        "Users increasingly read privacy labels before installing, especially in health, finance, messaging, and kids categories. Collecting less data and explaining it clearly can support conversion and trust. Privacy-forward positioning is a genuine differentiator in some categories.",
        "Our guides to [password manager and security app ASO](/blog/password-manager-security-app-aso/) and [messaging app ASO](/blog/messaging-chat-app-aso/) show how privacy supports growth.",
      ]],
      ["Common privacy policy mistakes", [
        "Copying a generic template that does not match your app's real data practices is the most common mistake. Others include forgetting SDK data collection, hosting the policy as a PDF or behind a login, failing to describe account deletion, and letting the policy drift out of sync with store disclosures.",
        "Teams also forget to update the policy when adding new features, SDKs, or markets.",
      ]],
      ["A worked example: a fitness app's privacy update", [
        "A fitness app adds a new analytics SDK and a social login option. During its release review, the team updates its SDK inventory, revises the privacy policy to describe the new data flows, updates the App Privacy details and Data safety form, and adds an in-app account deletion option.",
        "The update passes review without questions, and the team adds a clear privacy summary to its onboarding. Users who care about health data privacy see consistent information across the store listing, policy, and app.",
      ]],
    ],
    steps: [
      ["Inventory data and SDKs", "List all personal data your app and its SDKs collect, why, and where it goes."],
      ["Draft in plain language", "Cover collection, use, sharing, retention, security, rights, contact, and updates."],
      ["Add special sections", "Include children's data, tracking and ads, account deletion, and region-specific rights as needed."],
      ["Host and link it", "Publish at a public, stable, non-PDF URL and link it in the listing, app, and website."],
      ["Keep everything in sync", "Update the policy, store disclosures, and app together whenever practices change."],
    ],
    examples: [
      ["Data description", "We may collect some information.", "We collect your email to create your account and workout history to show your progress. Crash data is collected by our crash reporting provider to fix bugs.", "Specific descriptions build trust and meet requirements."],
      ["Hosting", "Privacy policy as a downloadable PDF.", "Privacy policy at example.com/privacy, publicly accessible.", "Google Play requires a public, non-PDF URL."],
      ["Account deletion", "Email us to delete your account.", "Settings, then Account, then Delete account, or use our web form at example.com/delete.", "Stores require in-app or web deletion options."],
    ],
    playbook: ["Inventory every SDK's data collection", "Write in plain language", "Describe user rights and deletion", "Host at a public, stable URL", "Keep store disclosures consistent", "Review with each release"],
    metrics: ["Policy and disclosure consistency checks per release", "App review rejections related to privacy", "Account deletion requests handled on time", "Privacy-related reviews and support tickets"],
    faqs: [
      ["Do all apps need a privacy policy?", "Apple requires a privacy policy URL for every app, and Google Play requires a privacy policy for apps. Privacy laws may also require one."],
      ["What should an app privacy policy include?", "What data is collected, why, how it is used and shared, retention, security, user rights, children's data if relevant, and contact details."],
      ["Can my privacy policy be a PDF?", "Google Play requires a public, active URL that is not a PDF. A web page is the safest option for both stores."],
      ["Do I need to mention third-party SDKs?", "Yes. Your policy and store disclosures must account for data collected by SDKs in your app."],
      ["Do apps need account deletion?", "Apps that allow account creation must offer a way to delete accounts under Apple's rules and Google Play's requirements."],
      ["Can I use a privacy policy template?", "Templates can help with structure, but the content must match your app's real practices. Consider legal review."],
    ],
    related: ["privacy-labels-data-safety-conversion", "app-store-review-guidelines-explained", "att-prompt-opt-in-rate", "google-play-account-suspension-recovery"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Apple: User privacy and data use", url: "https://developer.apple.com/app-store/user-privacy-and-data-use/" },
      { label: "Google Play Developer Program Policy", url: "https://play.google/developer-content-policy/" },
    ],
  }),
  P({
    slug: "how-to-unpublish-or-remove-an-app",
    title: "How to Unpublish or Remove an App From the App Store and Google Play",
    seoTitle: "How to Unpublish or Remove an App From App Stores",
    description: "How to unpublish, remove from sale, or delete an app on Google Play and the App Store, what happens to existing users and data, and how to do it safely.",
    primaryKeyword: "how to unpublish an app",
    secondaryKeywords: ["remove app from app store", "unpublish app Google Play", "delete app from App Store Connect"],
    category: "Platform Guides",
    answer: "On Google Play, you unpublish an app in Play Console so new users cannot find or install it, while existing users can usually keep it; apps that have been published cannot simply be deleted, and the package name can never be reused. On the App Store, you remove an app from sale in App Store Connect by changing its availability, and you can later remove the app record if it meets Apple's conditions. Before removing an app, plan for existing users, subscriptions, data, and communication.",
    sections: [
      ["Unpublish, remove from sale, or delete?", [
        "These terms mean different things. Unpublishing on Google Play, or removing from sale on the App Store, hides the app from new users but keeps the app record, so you can republish later. Deleting or removing the app record is more permanent and has stricter conditions.",
        "Choose based on your goal: pausing distribution temporarily, ending an app permanently, replacing it with a new app, or removing it from specific countries only.",
      ]],
      ["Unpublishing on Google Play", [
        "In Play Console, you can unpublish an app from the app's publishing settings. Once unpublished, it is no longer available to new users on Google Play, but existing users who installed it can typically keep using it and may still receive updates in some cases. You can republish later.",
        "Apps that have ever been published generally cannot be deleted from Play Console, and their package names cannot be reused for a different app. Draft apps that were never published can be deleted. Check the current Play Console help for exact steps, because the interface changes over time.",
      ]],
      ["Removing an app from sale on the App Store", [
        "In App Store Connect, you remove an app from sale by changing its availability in Pricing and Availability so it is not available in any country, or by choosing to remove it from sale. The app disappears from the App Store for new users, while existing users usually keep the app on their devices and can often redownload it from their purchase history.",
        "Apple also allows you to remove an app record from App Store Connect under certain conditions, and the bundle ID cannot be reused for a new app. Review Apple's current documentation before taking this step.",
      ]],
      ["Removing from specific countries", [
        "You do not have to remove an app everywhere. Both stores let you choose the countries where the app is available. This is useful when a service ends in one market, regulations change, or you are consolidating regional apps.",
        "Removing countries affects rankings and visibility only in those storefronts. Communicate clearly with users in affected markets.",
      ]],
      ["What happens to existing users", [
        "Existing users usually keep the installed app, but it may stop working if it depends on your servers. If you are shutting down a service, give users advance notice in the app, by email, and in the store listing description while it is still visible, and explain what will happen to their data.",
        "Offer data export where possible and provide a clear end date. Abrupt shutdowns lead to angry reviews that remain visible if the app returns, and can damage your brand.",
      ]],
      ["Subscriptions and purchases", [
        "If your app sells subscriptions, removing it from sale does not automatically cancel existing subscriptions in all cases. Plan how to stop renewals, communicate with subscribers, and handle refunds according to store rules and local consumer law. Check Apple's and Google's current guidance on ending subscriptions when an app is discontinued.",
        "Our [subscription offer codes and win-back offers](/blog/subscription-offer-codes-win-back-offers/) guide covers subscription tools, and our [App Store and Google Play fees](/blog/app-store-and-google-play-fees/) guide covers the commercial context.",
      ]],
      ["Data and account deletion obligations", [
        "Privacy laws and your privacy policy may require you to delete user data when the service ends, or to honour deletion requests. Store requirements for account deletion continue to apply while the app is available. Plan data retention and deletion as part of the shutdown.",
        "Our [app privacy policy guide](/blog/app-privacy-policy-guide/) explains data obligations to consider.",
      ]],
      ["Replacing an app with a new one", [
        "If you are replacing an old app with a new one, keep the old app available long enough to migrate users, add in-app messages pointing to the new app, and consider updating the old app's listing to explain the change. Ratings, reviews, and rankings do not transfer to a new app ID, so think carefully before starting fresh.",
        "Often it is better to update the existing app rather than publish a new one, preserving its history. Our [app name change risks](/blog/app-name-change-risks/) and [developer account transfer](/blog/developer-account-transfer-aso/) guides explain alternatives.",
      ]],
      ["Unpublishing because of policy problems", [
        "If an app was removed or suspended by a store for a policy violation, that is different from voluntarily unpublishing. Read the enforcement notice, fix the problem, and appeal if appropriate. Republishing a removed app under a new package name to avoid enforcement can lead to account termination.",
        "Our [Google Play account suspension](/blog/google-play-account-suspension-recovery/) and [app rejection recovery](/blog/app-rejection-recovery-guide/) guides explain how to respond.",
      ]],
      ["Keep developer accounts healthy", [
        "If you unpublish all apps and leave an account inactive, stores may eventually close it under their account policies. If you plan to publish again in the future, keep account details current and sign in periodically.",
        "Keeping at least one maintained app also preserves your developer reputation for future launches.",
      ]],
      ["Common mistakes when removing apps", [
        "Removing an app without warning users, leaving subscriptions renewing, deleting data that users expected to export, and publishing a replacement app that loses all ratings and history are the most common mistakes.",
        "Teams also forget that package names and bundle IDs cannot be reused, which can complicate future relaunches.",
      ]],
      ["A worked example: retiring a regional app", [
        "A company decides to merge two regional apps into one global app. It updates the regional app with an in-app message and a migration path, edits the store description to explain the change, and keeps the regional app available for three months.",
        "It then removes the regional app from sale in each country, stops new subscriptions, honours existing ones until expiry, and deletes data according to its privacy policy. Most users migrate smoothly, and the global app inherits users without a wave of negative reviews.",
      ]],
    ],
    steps: [
      ["Decide your goal", "Choose between unpublishing temporarily, removing from some countries, replacing, or ending the app."],
      ["Plan for users and subscriptions", "Set a timeline, notify users, handle renewals and refunds, and offer data export."],
      ["Change availability in the console", "Unpublish in Play Console or remove from sale in App Store Connect."],
      ["Handle data obligations", "Delete or retain data according to your privacy policy and applicable laws."],
      ["Keep accounts and identifiers in mind", "Remember package names and bundle IDs cannot be reused, and keep developer accounts active if you plan to publish again."],
    ],
    examples: [
      ["User notice", "App removed without warning.", "In-app message: This app will stop working on March 31. Export your data in Settings.", "Advance notice protects trust and reviews."],
      ["Replacement strategy", "Publish a new app and delete the old one.", "Update the existing app where possible, or migrate users with a clear transition period.", "Ratings and history do not transfer to new app IDs."],
      ["Country removal", "Remove the app worldwide.", "Remove availability only in the country where the service ends.", "Targeted removal preserves other markets."],
    ],
    playbook: ["Choose the right removal type", "Notify users in advance", "Handle subscriptions and refunds", "Meet data deletion obligations", "Prefer updating over replacing", "Remember identifiers cannot be reused"],
    metrics: ["Users migrated to replacement app", "Subscription renewals stopped", "Data export and deletion requests completed", "Reviews during the transition period"],
    faqs: [
      ["How do I unpublish an app on Google Play?", "Use the unpublish option in Play Console. The app becomes unavailable to new users, while existing users can usually keep it."],
      ["How do I remove an app from the App Store?", "Change its availability in App Store Connect so it is not available in any country, or remove it from sale."],
      ["Can I delete an app permanently from Google Play?", "Apps that have been published generally cannot be deleted, and their package names cannot be reused. Draft apps can be deleted."],
      ["Do users lose the app when I unpublish it?", "Usually not. Existing users typically keep the installed app, but it may stop working if it depends on your servers."],
      ["What happens to subscriptions when I remove an app?", "They may not cancel automatically. Plan how to stop renewals and handle refunds under store rules and local law."],
      ["Can I republish an app later?", "Yes, if you unpublished or removed it from sale rather than deleting the record."],
    ],
    related: ["how-to-publish-app-on-google-play", "how-to-publish-app-on-app-store", "developer-account-transfer-aso", "app-privacy-policy-guide"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
      { label: "App Store Connect Help", url: "https://developer.apple.com/help/app-store-connect/" },
    ],
  }),
  P({
    slug: "how-to-update-an-app",
    title: "How to Update an App on the App Store and Google Play (Safely)",
    seoTitle: "How to Update an App on the App Store and Google Play",
    description: "Release app updates safely: version numbers, submitting on both stores, phased and staged rollouts, in-app update prompts, release notes, and metadata changes.",
    primaryKeyword: "how to update an app",
    secondaryKeywords: ["update app on App Store", "update app on Google Play", "staged rollout"],
    category: "Platform Guides",
    answer: "To update an app, increase its version number, build and upload the new binary, add release notes, and submit for review: through App Store Connect on iOS and a new release in Play Console on Android. Use Apple's phased release and Google Play's staged rollout to limit risk, watch crash rates and reviews before expanding, and prompt users to update when necessary. On iOS, most metadata changes ship with a new version; on Google Play, listing changes can be made independently.",
    sections: [
      ["Versioning basics", [
        "Each update needs a higher version identifier. On iOS, you set a version number visible to users and a build number that must increase with each upload. On Android, you set a versionName shown to users and a versionCode, an integer that must increase with each release.",
        "Use a consistent versioning scheme, such as major.minor.patch, so your team and users can understand what changed. Track versions alongside release notes and analytics annotations.",
      ]],
      ["Updating on the App Store", [
        "Create a new version in App Store Connect, upload the build from Xcode or Transporter, choose the build for the version, update What's New text and any metadata or screenshots you want to change, and submit for review. After approval, release automatically, manually, or on a scheduled date.",
        "Remember that on iOS the app name, subtitle, keyword field, and screenshots change only with a new version, while promotional text can change anytime. Our guide to [promotional text](/blog/promotional-text-app-store/) explains the field you can update between releases.",
      ]],
      ["Updating on Google Play", [
        "In Play Console, create a new release on the production track, or test it first on internal, closed, or open testing tracks. Upload the new app bundle, add release notes, choose a rollout percentage, and submit for review.",
        "Store listing text and graphics on Google Play can be changed without a new app release, though changes are reviewed. This lets you test metadata independently, as covered in our [store listing experiments](/blog/store-listing-experiments-google-play/) guide.",
      ]],
      ["Phased and staged rollouts", [
        "Apple's phased release gradually delivers an update to users with automatic updates turned on over seven days, and you can pause it if problems appear. Google Play's staged rollout lets you release to a percentage of users and increase the percentage over time, or halt the rollout.",
        "Start small, monitor crash rates, ANRs, and reviews, then expand. Our [staged rollouts and ratings protection](/blog/version-rollout-ratings-protection/) guide explains how to use these tools safely.",
      ]],
      ["Testing before release", [
        "Test updates with TestFlight on iOS and testing tracks on Google Play before production. Check upgrade paths from older versions, data migrations, and behaviour on older OS versions and low-end devices.",
        "Our [TestFlight beta testing guide](/blog/testflight-beta-testing-guide/) and [Google Play closed testing](/blog/google-play-closed-testing-requirement/) guide explain testing tracks.",
      ]],
      ["Prompting users to update", [
        "Not all users update promptly. On Android, the Play In-App Updates API supports flexible updates, which download in the background, and immediate updates, which require users to update before continuing. On iOS, there is no equivalent system API, so apps typically check the current version against a minimum supported version from their server and show a prompt.",
        "Use forced updates sparingly, for critical security or compatibility issues. Frequent forced updates frustrate users.",
      ]],
      ["Writing release notes", [
        "Release notes tell users what changed and show that the app is actively maintained. Be specific about new features and important fixes, and keep notes short. Generic notes such as bug fixes and improvements waste the opportunity.",
        "Our [release notes and What's New](/blog/whats-new-release-notes-aso/) guide explains how to write notes that support retention and trust.",
      ]],
      ["Updating metadata and creative with releases", [
        "Plan ASO changes alongside app releases, especially on iOS. A release can include a new subtitle test, updated screenshots showing new features, or a refreshed preview video. Change a few elements at a time so you can attribute results.",
        "Our guide on [whether updates improve rankings](/blog/app-update-frequency-and-rankings/) explains how releases affect ASO, and the [ASO experimentation roadmap](/blog/aso-experimentation-roadmap/) explains planning tests.",
      ]],
      ["Store requirements that force updates", [
        "Stores periodically raise technical requirements, such as Google Play's target API level requirement and Apple's minimum Xcode and SDK versions for uploads. Apps that fall behind may be unable to publish updates or may lose visibility on newer devices.",
        "Track these requirements and plan updates ahead of deadlines. Our guides to [publishing on Google Play](/blog/how-to-publish-app-on-google-play/) and [publishing on the App Store](/blog/how-to-publish-app-on-app-store/) mention where to check current requirements.",
      ]],
      ["Monitoring after release", [
        "After each release, monitor crash-free users, ANR rate, ratings, reviews, conversion, and key product metrics. Compare with the previous version. Respond quickly to new issues, and reply to reviews about bugs once fixes are available.",
        "Our [Android vitals thresholds](/blog/android-vitals-anr-crash-thresholds/) guide explains Google Play's quality thresholds, and [how app ratings are calculated](/blog/how-app-ratings-are-calculated/) explains why a bad release can quickly affect your rating.",
      ]],
      ["Common update mistakes", [
        "Releasing to everyone at once without a staged rollout, skipping upgrade testing, writing generic release notes, and forcing updates too often are the most common mistakes.",
        "Teams also change many metadata elements at once with an app update, making it impossible to tell what improved or hurt performance.",
      ]],
      ["A worked example: a safe major update", [
        "A notes app ships a redesigned editor. It tests with TestFlight and an internal track, then releases with a 5% staged rollout on Google Play and phased release on iOS. Crash rates stay low, but reviews mention a missing shortcut, which the team restores in a quick patch.",
        "The team expands the rollout, updates screenshots to show the new editor in the next iOS version, and writes specific release notes. Ratings stay stable, and conversion improves as screenshots reflect the better design.",
      ]],
    ],
    steps: [
      ["Increment version identifiers", "Raise version and build numbers on iOS, and versionName and versionCode on Android."],
      ["Test the update", "Use TestFlight and testing tracks to check upgrades, migrations, and older devices."],
      ["Submit with release notes", "Upload builds, write specific notes, and update metadata or screenshots if planned."],
      ["Roll out gradually", "Use phased release and staged rollout, monitoring crashes and reviews before expanding."],
      ["Monitor and follow up", "Track stability, ratings, and conversion, fix issues quickly, and reply to affected reviewers."],
    ],
    examples: [
      ["Rollout", "Release version 5.0 to 100% immediately.", "Start at 5% on Google Play and phased release on iOS, then expand.", "Gradual rollouts limit damage from bugs."],
      ["Release notes", "Bug fixes and improvements.", "New editor with faster formatting; fixed sync delays on tablets.", "Specific notes build trust."],
      ["Forced update", "Force every update.", "Force updates only for critical security or compatibility fixes.", "Rare forced updates reduce frustration."],
    ],
    playbook: ["Use consistent versioning", "Test upgrades before release", "Roll out gradually", "Write specific release notes", "Plan ASO changes with releases", "Monitor stability and reviews after every release"],
    metrics: ["Crash-free users by version", "ANR rate by version", "Rating trend after releases", "Adoption rate of new versions", "Conversion after metadata updates"],
    faqs: [
      ["How do I update an app on the App Store?", "Create a new version in App Store Connect, upload a new build, add release notes, and submit for review."],
      ["How do I update an app on Google Play?", "Create a new release in Play Console, upload a new app bundle with a higher versionCode, add release notes, and submit."],
      ["What is a staged rollout?", "A Google Play feature that releases an update to a percentage of users, which you can increase or halt."],
      ["Can I force users to update?", "On Android, the In-App Updates API supports immediate updates. On iOS, apps typically implement their own minimum version check."],
      ["Do updates need review?", "Yes. Both stores review app updates, and Google Play also reviews store listing changes."],
      ["Can I change my App Store keywords without an update?", "No. The name, subtitle, and keyword field change with a new version; promotional text can change anytime."],
    ],
    related: ["version-rollout-ratings-protection", "whats-new-release-notes-aso", "app-update-frequency-and-rankings", "testflight-beta-testing-guide"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Android Developers: In-app updates", url: "https://developer.android.com/guide/playcore/in-app-updates" },
      { label: "App Store Connect Help", url: "https://developer.apple.com/help/app-store-connect/" },
    ],
  }),
];
