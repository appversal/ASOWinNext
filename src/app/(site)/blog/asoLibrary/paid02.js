import { P } from "./release";

export const paid02 = [
  P({
    slug: "cost-per-install-cpi-explained",
    title: "Cost Per Install (CPI) Explained: Calculate It, Benchmark It, and Lower It",
    seoTitle: "Cost Per Install (CPI): Calculate, Benchmark, and Lower It",
    description: "What cost per install means, how to calculate CPI and effective CPI, what drives it by platform and country, and how to lower it without losing user quality.",
    primaryKeyword: "cost per install",
    secondaryKeywords: ["CPI mobile apps", "app install cost", "effective CPI"],
    category: "Paid Acquisition",
    answer: "Cost per install (CPI) is ad spend divided by the installs it produced. If you spend $5,000 and get 2,000 installs, CPI is $2.50. CPI varies widely by platform, country, category, creative, and season. iOS and high-income markets usually cost more. Lower CPI through better creative, stronger store page conversion, and smarter targeting, but judge campaigns by cost per valuable user, because the cheapest installs are often the least valuable.",
    sections: [
      ["How to calculate CPI and related metrics", [
        "CPI equals total spend divided by attributed installs. Related metrics include cost per tap or click (CPT or CPC), cost per thousand impressions (CPM), and cost per action (CPA) for events such as registration, trial, or purchase. Each tells part of the story: CPM reflects how expensive the audience is, click-through rate reflects creative appeal, and store conversion turns clicks into installs.",
        "The relationship is simple: CPI equals CPM divided by 1,000, divided by click-through rate, divided by install rate. If CPM is $10, click-through is 1%, and 25% of clickers install, CPI is $4. Improving any of these levers lowers CPI. That is why store page conversion is as much a paid acquisition lever as an ASO one.",
      ]],
      ["Effective CPI and organic uplift", [
        "Effective CPI (eCPI) divides spend by all installs that resulted from a campaign, sometimes including estimated organic uplift. Paid campaigns can raise visibility, rankings, and brand search, producing extra organic installs. Including some of that uplift can show the true cost of growth, but estimates must be honest and tested.",
        "Use holdout tests or geographic experiments to measure incremental installs. Our guide to [attribution and organic uplift](/blog/attribution-and-organic-uplift/) explains methods that avoid overclaiming. Brand search campaigns, for example, may capture users who would have installed anyway.",
      ]],
      ["What drives CPI up or down", [
        "Platform matters: iOS installs usually cost more than Android installs in the same country, reflecting audience value and competition. Country matters: high-income markets such as the US, UK, Australia, and Japan typically cost far more than emerging markets. Category matters: finance, subscription, and some game genres face intense competition.",
        "Seasonality affects costs too. The fourth quarter, especially around major shopping holidays, often brings higher CPMs as retail advertisers compete for attention. Creative quality, audience targeting, and optimization events also shape CPI. Optimizing for deeper events usually raises CPI but improves user value.",
      ]],
      ["Why benchmarks mislead", [
        "Published CPI benchmarks can help with rough planning, but they vary by source, method, and date, and they average across very different apps. A finance app comparing itself with a casual game benchmark, or a US campaign with a global average, will draw the wrong conclusions.",
        "The benchmark that matters is your own: the CPI at which a channel and market are profitable, based on user value. Our [LTV calculation guide](/blog/mobile-app-ltv-calculation/) shows how to set a maximum CPI by segment.",
      ]],
      ["How to lower CPI", [
        "Creative is the strongest lever. New concepts and hooks can cut costs dramatically, as explained in [creative strategy for app install ads](/blog/creative-strategy-for-app-install-ads/). Better click-through lowers cost per click, and clearer ads attract users more likely to install.",
        "Store page conversion is the next lever. If more visitors install, CPI falls without touching the ad. Match pages to campaigns with [custom product pages](/blog/custom-product-pages-ios/) and improve default screenshots through testing. Finally, refine targeting and optimization events, and shift budget toward markets and placements with better economics.",
      ]],
      ["CPI versus user value", [
        "Low CPI is good only if users are valuable. A campaign with a $1 CPI and almost no retention can be worse than a $4 CPI campaign whose users subscribe. Track cost per retained user, cost per trial, cost per payer, and return on ad spend alongside CPI.",
        "This is why many teams optimize campaigns for in-app events once they have enough volume, accepting higher CPI for better users. Our guides to [cohort analysis](/blog/cohort-analysis-for-mobile-apps/) and [retention rate](/blog/mobile-app-retention-rate-benchmarks/) explain how to compare user quality by source.",
      ]],
      ["CPI and ASO together", [
        "ASO and paid acquisition reinforce each other. Strong organic conversion lowers paid CPI because paid traffic lands on the same listing. Paid campaigns can also lift keyword rankings and brand search. Our guide to [ASO and paid user acquisition](/blog/aso-and-paid-user-acquisition/) explains how to run them as one system.",
        "Share insights in both directions. Ad creative tests reveal messages that may improve store screenshots, and ASO keyword research reveals intents that may deserve Apple Ads campaigns.",
      ]],
      ["Common CPI mistakes", [
        "Optimizing for the lowest CPI without tracking downstream value is the most common mistake. Another is comparing CPI across platforms or countries without adjusting for user value. Teams also ignore store conversion, trying to fix CPI only through bids and targeting.",
        "Relying on generic benchmarks to judge performance leads to cutting profitable campaigns or scaling unprofitable ones. Finally, counting all organic installs during a campaign as paid uplift overstates performance.",
      ]],
      ["A worked example: diagnosing a high CPI", [
        "A fitness app's Meta campaigns show a CPI of $6, above its $4 target. Breaking it down, CPM is $12, click-through is 1.2%, and only 17% of clickers install. The store page converts poorly for paid traffic because the default first screenshot shows a settings screen.",
        "The team tests a custom product page with a workout result as the first screenshot, raising install rate to 26%, and adds two new creative concepts that lift click-through to 1.6%. CPI falls to about $2.90, and because the new page sets clear expectations, day-7 retention for paid users also improves.",
      ]],
    ],
    steps: [
      ["Break CPI into components", "Calculate CPM, click-through rate, and install rate to see which lever is weakest."],
      ["Set a maximum CPI from value", "Use LTV by platform and market to define what each install can cost."],
      ["Improve creative", "Test new concepts and hooks to raise click-through and attract better-fit users."],
      ["Raise store conversion", "Match custom product pages to campaigns and test default screenshots."],
      ["Track cost per valuable user", "Measure retention and revenue by campaign, and optimize for events when volume allows."],
    ],
    examples: [
      ["Metric focus", "Our CPI is $1.20, the lowest ever.", "CPI is $1.20, but day-30 retention is 2%; cost per retained user is $60.", "Cheap installs can be expensive users."],
      ["Diagnosis", "CPI is high, so lower bids.", "CPM is fine; install rate is 17%, so fix the store page.", "Breaking CPI into components points to the real problem."],
      ["Benchmark use", "Industry average CPI is $2, so our $4 is bad.", "Our max profitable CPI for US iOS is $5, so $4 is healthy.", "Your economics matter more than averages."],
    ],
    playbook: ["Break CPI into CPM, CTR, and install rate", "Set maximum CPI from LTV", "Refresh creative regularly", "Improve store conversion for paid traffic", "Measure cost per retained or paying user", "Test incrementality honestly"],
    metrics: ["CPI by channel, platform, and country", "CPM and click-through rate", "Store install rate for paid traffic", "Cost per retained user", "Return on ad spend"],
    faqs: [
      ["What is cost per install?", "CPI is total ad spend divided by the number of installs attributed to those ads."],
      ["What is a good CPI for an app?", "A good CPI is one below the value of the users you acquire. It varies by platform, country, and category, so set targets from your own LTV."],
      ["Why is iOS CPI higher than Android?", "iOS audiences often have higher spending power and competition for them is intense, which raises costs in many markets."],
      ["How can I lower my CPI?", "Improve creative, raise store page conversion, refine targeting, and shift budget toward efficient markets and placements."],
    ],
    related: ["mobile-app-ltv-calculation", "creative-strategy-for-app-install-ads", "aso-and-paid-user-acquisition", "apple-ads-bidding-and-budgets"],
    serviceLinks: ["/services/paid-user-acquisition/", "/services/app-store-optimization/"],
    sources: [],
  }),
  P({
    slug: "skadnetwork-adattributionkit-guide",
    title: "SKAdNetwork and AdAttributionKit: A Practical Guide to iOS Attribution",
    seoTitle: "SKAdNetwork and AdAttributionKit: iOS Attribution Guide",
    description: "How SKAdNetwork and AdAttributionKit work: postbacks, conversion values, windows, privacy thresholds, schema design, and how to make decisions with iOS data.",
    primaryKeyword: "SKAdNetwork",
    secondaryKeywords: ["AdAttributionKit", "SKAN 4", "iOS conversion values"],
    category: "Paid Acquisition",
    answer: "SKAdNetwork and its successor framework AdAttributionKit are Apple's privacy-preserving systems for attributing iOS app installs to ads without identifying individual users. After an install, Apple sends delayed postbacks to the ad network, and optionally to you, with campaign information and a conversion value you define to describe early user behavior. SKAdNetwork 4 added up to three postbacks across measurement windows. Data detail depends on privacy thresholds, so design conversion values carefully.",
    sections: [
      ["Why SKAdNetwork exists", [
        "Since App Tracking Transparency arrived with iOS 14.5, apps must ask permission before tracking users across other companies' apps and websites, and many users decline. Without the device advertising identifier, traditional user-level attribution is not possible for most iOS users. SKAdNetwork lets ad networks measure campaign performance in aggregate without revealing who installed.",
        "AdAttributionKit, introduced in iOS 17.4, builds on the same ideas and is interoperable with SKAdNetwork. It supports attribution for apps distributed through alternative marketplaces in the EU as well as the App Store, and Apple has added capabilities such as re-engagement attribution and more configuration options in later releases. Our [ATT prompt guide](/blog/att-prompt-opt-in-rate/) explains the consent side.",
      ]],
      ["How the flow works", [
        "When a user sees or taps an ad from a registered ad network, the ad is signed with campaign information. If the user installs and opens the app within the attribution window, the app updates conversion values as the user takes actions. After the measurement window ends and a random delay passes, Apple sends a postback to the ad network with the campaign identifier and conversion data, and you can receive a copy.",
        "Postbacks do not include user identifiers, and timing is deliberately delayed and randomized. This protects privacy but means you see results later and in aggregate. Campaign optimization on iOS therefore relies more on modeling, early signals, and testing than on real-time user-level data.",
      ]],
      ["SKAdNetwork 4: three postbacks and two value types", [
        "SKAdNetwork 4, introduced with iOS 16.1, supports up to three postbacks for successive windows: roughly days 0 to 2, days 3 to 7, and days 8 to 35 after install. The first postback can carry a fine conversion value, a number from 0 to 63, if privacy thresholds allow. Later postbacks carry only a coarse value: low, medium, or high.",
        "SKAdNetwork 4 also introduced a hierarchical source identifier of up to four digits, replacing the older campaign ID, with the number of digits returned depending on crowd anonymity. Developers can lock a conversion value early to receive a postback sooner. These changes let you see a longer view of user value than earlier versions allowed.",
      ]],
      ["Crowd anonymity and privacy thresholds", [
        "Apple applies crowd anonymity tiers based on how many installs a campaign generates. Small campaigns receive less detail, such as only coarse values and fewer source identifier digits. Larger campaigns can receive fine values and full source identifiers.",
        "This means structure matters. Splitting budgets into many small campaigns can reduce the detail you receive. Consolidating spend into fewer, larger campaigns often produces more useful data. Work with your ad networks and mobile measurement partner to understand how their campaign structures interact with these thresholds.",
      ]],
      ["Designing a conversion value schema", [
        "Your conversion value schema maps user actions to values. Common approaches encode revenue ranges, key funnel events such as registration, tutorial completion, or trial start, or a mix of both. The goal is to capture early signals that predict long-term value, because the first window is short.",
        "Use your data to find predictive events. If users who start a trial on day 1 are far more valuable, encode trial start prominently. Define coarse values for later windows, such as low for engaged, medium for trial, and high for paying. Most mobile measurement partners provide tools to design and manage schemas; see our [MMP comparison](/blog/mobile-measurement-partners-compared/).",
      ]],
      ["Making decisions with aggregated data", [
        "With delayed, aggregated data, decisions require patience and triangulation. Combine SKAdNetwork postbacks with ad network reporting, store analytics, overall install trends, and incrementality tests. Media mix modeling and geographic experiments can complement attribution for large budgets.",
        "Avoid over-reacting to daily swings. Judge campaigns over weeks, compare trends against organic baselines, and validate assumptions with holdout tests. Our guide to [attribution and organic uplift](/blog/attribution-and-organic-uplift/) covers these methods.",
      ]],
      ["Where Apple Ads fits", [
        "Apple Ads uses its own attribution through the AdServices framework, which can attribute installs from Apple Ads campaigns without requiring ATT consent, within Apple's privacy rules. This makes Apple Ads measurement more direct than many other networks on iOS.",
        "Combine Apple Ads attribution with SKAdNetwork data from other networks in your MMP or reporting to see the full picture. Our guides to [Apple Ads campaign structure](/blog/apple-ads-campaign-structure/) and [bidding](/blog/apple-ads-bidding-and-budgets/) explain how to manage that channel.",
      ]],
      ["Common SKAdNetwork mistakes", [
        "Designing a conversion value schema without data is the most common mistake, encoding events that do not predict value. Another is fragmenting campaigns so much that crowd anonymity thresholds hide most detail. Teams also expect real-time, user-level reporting and become frustrated with delays.",
        "Some apps never update their schema as the product changes, so values drift away from what matters. Finally, relying on a single data source rather than triangulating leads to poor budget decisions.",
      ]],
      ["A worked example: a subscription app's schema", [
        "A subscription app analyzes its data and finds that users who start a trial within 48 hours convert to paid at a much higher rate. It designs a fine conversion value schema for the first window that encodes onboarding completion, trial start, and early paid conversion, with revenue ranges for direct purchases.",
        "Coarse values for later windows mark engaged users as low, active trials as medium, and paying subscribers as high. The app consolidates campaigns to meet privacy thresholds, and within a month can compare networks by the share of installs reaching trial and paid. Budget shifts toward networks with higher medium and high coarse values.",
      ]],
    ],
    steps: [
      ["Register ad networks and enable postbacks", "Add ad network identifiers to your app and configure developer postback copies."],
      ["Find predictive early events", "Analyze which actions in the first days predict long-term value."],
      ["Design fine and coarse value schemas", "Map key events and revenue ranges to fine values for window one and coarse values for later windows."],
      ["Consolidate campaigns", "Structure campaigns to meet crowd anonymity thresholds and receive more detail."],
      ["Triangulate and test", "Combine postbacks, network data, store trends, and holdout tests before making budget decisions."],
    ],
    examples: [
      ["Schema design", "Encode every in-app event as a separate value.", "Encode onboarding complete, trial start, and paid conversion, with revenue ranges.", "Focus on events that predict value."],
      ["Campaign structure", "Thirty small campaigns per network.", "Five larger campaigns per network.", "Larger campaigns pass privacy thresholds and return more detail."],
      ["Decision timing", "Cut a campaign after one day of postbacks.", "Judge after two to three weeks, comparing with organic trends.", "Delayed data needs longer evaluation windows."],
    ],
    playbook: ["Register networks and enable developer postbacks", "Design schemas from predictive events", "Use coarse values for later windows", "Consolidate campaigns for crowd anonymity", "Triangulate with network and store data", "Review schemas as the product changes"],
    metrics: ["Postback volume by network and campaign", "Share of fine versus coarse values received", "Distribution of conversion values", "Cost per high-value conversion", "Incremental installs from tests"],
    faqs: [
      ["What is SKAdNetwork?", "Apple's privacy-preserving framework that attributes iOS app installs to ad campaigns without identifying individual users."],
      ["What is AdAttributionKit?", "A newer Apple attribution framework, introduced in iOS 17.4, that is interoperable with SKAdNetwork and supports alternative app marketplaces in the EU."],
      ["How many postbacks does SKAdNetwork 4 send?", "Up to three, covering successive windows after install. The first can include a fine conversion value; later ones include coarse values."],
      ["Do I need SKAdNetwork if I only run Apple Ads?", "Apple Ads uses its own AdServices attribution. SKAdNetwork matters when you run campaigns on other ad networks."],
    ],
    related: ["att-prompt-opt-in-rate", "mobile-measurement-partners-compared", "attribution-and-organic-uplift", "meta-ads-for-app-installs"],
    serviceLinks: ["/services/paid-user-acquisition/", "/contact/"],
    sources: [
      { label: "Apple Developer Documentation: SKAdNetwork", url: "https://developer.apple.com/documentation/storekit/skadnetwork" },
      { label: "Apple Developer Documentation: AdAttributionKit", url: "https://developer.apple.com/documentation/adattributionkit" },
    ],
  }),
  P({
    slug: "att-prompt-opt-in-rate",
    title: "App Tracking Transparency Prompt: Improve Opt-In Rates Within Apple's Rules",
    seoTitle: "ATT Prompt Guide: Improve Opt-In Rates Within Apple's Rules",
    description: "How the App Tracking Transparency prompt works, when you need it, Apple's rules for pre-prompts, how to improve opt-in rates, and how to measure without it.",
    primaryKeyword: "App Tracking Transparency prompt",
    secondaryKeywords: ["ATT opt-in rate", "ATT pre-prompt", "IDFA permission"],
    category: "Paid Acquisition",
    answer: "Apps must show Apple's App Tracking Transparency (ATT) prompt and receive permission before tracking users across other companies' apps and websites or accessing the advertising identifier (IDFA). You can show an explanation screen before the system prompt to describe the benefit, but you cannot incentivize consent, mimic the system dialog, or restrict features for users who decline. Timing the prompt after users see value and writing a clear purpose string improve opt-in rates.",
    sections: [
      ["What ATT requires", [
        "Since iOS 14.5, apps must request permission through the AppTrackingTransparency framework before tracking. Apple defines tracking as linking user or device data collected from your app with data from other companies' apps, websites, or offline properties for targeted advertising or advertising measurement, or sharing such data with data brokers. Accessing the IDFA requires permission.",
        "If your app does not track, you do not need to show the prompt, and your App Privacy details should say so. If it does, you must include a purpose string explaining why, and respect the user's choice. Users can also turn off tracking requests globally, in which case apps cannot show the prompt.",
      ]],
      ["Apple's rules for prompts and pre-prompts", [
        "You may show a screen before the system prompt to explain why you ask, such as supporting free content through relevant ads. Apple's guidelines prohibit offering incentives for allowing tracking, such as rewards or features, and prohibit restricting functionality for users who decline. Pre-prompt screens must not look like the system dialog or use confusing language.",
        "The system prompt itself shows your app name and your purpose string, with options to allow or ask the app not to track. You can show it only once per install; afterward, users must change the setting in iOS Settings. That makes timing and context critical. See our explainer on the [App Store Review Guidelines](/blog/app-store-review-guidelines-explained/) for related privacy rules.",
      ]],
      ["When to show the prompt", [
        "Showing ATT on first launch, before users understand the app, tends to produce lower opt-in rates. Many apps wait until after onboarding or a first success moment, when users trust the app more. However, delaying too long can miss users who churn early, and some ad networks benefit from consent early in the lifecycle.",
        "Test timing. Compare opt-in rates and downstream metrics for prompts after onboarding, after a key action, or at a natural pause. Our [onboarding best practices](/blog/app-onboarding-best-practices/) guide covers sequencing permission requests so they do not overwhelm new users.",
      ]],
      ["Write a clear purpose string and pre-prompt", [
        "The purpose string should explain the benefit in plain language, such as This helps us show you ads that are more relevant and keep the app free. Avoid vague or misleading text. Apple reviews purpose strings, and unclear ones can lead to rejection.",
        "A pre-prompt can expand on the explanation with friendly visuals and honest framing. Keep it short, make the choice clear, and avoid pressure. Some apps let users dismiss the pre-prompt without showing the system prompt, preserving the one-time opportunity for a better moment.",
      ]],
      ["What opt-in rates look like", [
        "Opt-in rates vary widely by category, audience, region, and prompt design. Industry reports from attribution providers have commonly shown average opt-in rates among users who see the prompt in roughly the 20 to 40 percent range, with games often higher than some other categories. Your own rate depends heavily on trust, timing, and messaging.",
        "Treat external figures as context, not targets. Track your opt-in rate by app version, prompt timing, and country, and test improvements. Even a modest increase can improve ad measurement and targeting for networks that use consented data.",
      ]],
      ["Measuring without consent", [
        "For users who decline, measurement relies on privacy-preserving methods such as SKAdNetwork and AdAttributionKit for ad attribution, aggregated store analytics, and modeled reporting from ad platforms. Apple Ads uses the AdServices framework, which can attribute installs from its campaigns within Apple's privacy rules.",
        "Build your measurement strategy assuming many users will decline. Our [SKAdNetwork and AdAttributionKit guide](/blog/skadnetwork-adattributionkit-guide/) explains how to design conversion values, and [attribution and organic uplift](/blog/attribution-and-organic-uplift/) covers incrementality testing.",
      ]],
      ["Android: advertising ID and privacy", [
        "Android does not have an identical system prompt, but users can delete or reset their advertising ID, and apps targeting Android 13 and later must declare the AD_ID permission to access it. Google Play's policies govern how advertising IDs and user data may be used, and the Data safety form must reflect your practices.",
        "Treat privacy consistently across platforms. Users increasingly expect transparency, and regulators in many regions enforce consent rules such as the GDPR. Our guide to [privacy labels and Data safety](/blog/privacy-labels-data-safety-conversion/) explains disclosure.",
      ]],
      ["Common ATT mistakes", [
        "Showing the prompt immediately on first launch with no context is the most common mistake. Another is designing pre-prompts that resemble the system dialog or pressure users, which breaches Apple's guidelines. Some apps offer rewards for consent, which is prohibited.",
        "Teams also show the prompt when they do not actually track, adding friction for no reason, or fail to update App Privacy details to match tracking behavior. Finally, building measurement that depends on high consent leaves campaigns blind for the majority who decline.",
      ]],
      ["A worked example: a free puzzle game", [
        "A free puzzle game shows the ATT prompt on first launch and sees low opt-in. It moves the prompt to after the player completes the third level, preceded by a friendly screen explaining that ads keep the game free and allowing tracking makes ads more relevant.",
        "The purpose string is rewritten in plain language. Opt-in rises meaningfully, and ad revenue per user improves for consenting players. The team also redesigns its SKAdNetwork schema to capture level completion and first purchase, improving measurement for players who decline.",
      ]],
    ],
    steps: [
      ["Confirm whether you track", "Review SDKs and data flows to determine if your app tracks under Apple's definition."],
      ["Write a clear purpose string", "Explain the benefit honestly in plain language."],
      ["Design a compliant pre-prompt", "Explain why you ask without incentives, pressure, or system-like design."],
      ["Test prompt timing", "Compare first launch, post-onboarding, and post-success moment prompts on opt-in and retention."],
      ["Build consent-independent measurement", "Set up SKAdNetwork or AdAttributionKit and aggregated reporting for users who decline."],
    ],
    examples: [
      ["Purpose string", "We need this permission.", "This helps us show you ads that are more relevant and keep the game free.", "A clear benefit improves trust and meets Apple's expectations."],
      ["Timing", "Prompt on first launch.", "Prompt after the third level, preceded by a short explanation.", "Users who enjoy the app first are more likely to allow tracking."],
      ["Pre-prompt", "A screen styled like the system alert with a big Allow button.", "A friendly branded screen explaining ads, with a clear Continue button.", "Mimicking the system dialog breaches guidelines."],
    ],
    playbook: ["Show ATT only if you track", "Write an honest purpose string", "Use a compliant pre-prompt", "Test prompt timing", "Never incentivize consent", "Measure with SKAdNetwork for users who decline"],
    metrics: ["ATT opt-in rate", "Opt-in rate by prompt timing and country", "Ad revenue per user by consent status", "Share of installs attributed via SKAdNetwork", "App Review rejections related to privacy"],
    faqs: [
      ["Do all iOS apps need the ATT prompt?", "No. Only apps that track users across other companies' apps and websites, or access the IDFA, need it."],
      ["Can I explain ATT before showing the prompt?", "Yes. A pre-prompt explanation is allowed if it is honest, does not mimic the system dialog, and does not offer incentives."],
      ["What is a typical ATT opt-in rate?", "It varies widely. Industry reports have commonly shown averages roughly in the 20 to 40 percent range among users who see the prompt, with large differences by category."],
      ["Can I restrict features if users decline tracking?", "No. Apple's guidelines prohibit restricting functionality for users who decline tracking."],
    ],
    related: ["skadnetwork-adattributionkit-guide", "privacy-labels-data-safety-conversion", "app-onboarding-best-practices", "meta-ads-for-app-installs"],
    serviceLinks: ["/services/paid-user-acquisition/", "/contact/"],
    sources: [
      { label: "Apple Developer Documentation: App Tracking Transparency", url: "https://developer.apple.com/documentation/apptrackingtransparency" },
      { label: "Apple: User privacy and data use", url: "https://developer.apple.com/app-store/user-privacy-and-data-use/" },
    ],
  }),
  P({
    slug: "mobile-measurement-partners-compared",
    title: "Mobile Measurement Partners Compared: How to Choose an MMP",
    seoTitle: "Mobile Measurement Partners Compared: How to Choose an MMP",
    description: "What mobile measurement partners do, how AppsFlyer, Adjust, Branch, Singular, and Kochava differ by strength, and a framework to choose the right MMP.",
    primaryKeyword: "mobile measurement partner",
    secondaryKeywords: ["MMP comparison", "AppsFlyer vs Adjust", "mobile attribution tools"],
    category: "Paid Acquisition",
    answer: "A mobile measurement partner (MMP) provides independent attribution for app installs and in-app events across ad networks, plus deep linking, SKAdNetwork management, fraud protection, and data exports. Well-known MMPs include AppsFlyer, Adjust, Branch, Singular, and Kochava, with others such as Tenjin and Airbridge serving specific segments. Choose based on your channels, iOS measurement needs, deep linking, fraud protection, data integration, privacy requirements, and pricing at your volume.",
    sections: [
      ["What an MMP does", [
        "When you advertise on several networks, each network reports its own results and may claim credit for the same install. An MMP sits in the middle as a neutral party, attributing installs and in-app events to the source that drove them according to consistent rules. This gives you comparable data across channels and prevents double counting.",
        "MMPs also provide deep linking and deferred deep linking, SKAdNetwork and AdAttributionKit conversion value management, fraud detection, cost aggregation, audience segmentation, and raw data exports to warehouses. Some offer incrementality testing and analytics dashboards.",
      ]],
      ["Do you need an MMP yet?", [
        "If you do not run paid campaigns, or run only Apple Ads and Google App Campaigns at small scale, you may not need an MMP yet. Store analytics, platform reporting, and campaign links can cover early needs. Our [app analytics tools comparison](/blog/app-analytics-tools-compared/) explains how the layers fit together.",
        "An MMP becomes valuable when you spend across several networks, need consistent attribution for budget decisions, want fraud protection, or rely on deep links for campaigns, referrals, and influencers. Many MMPs offer free or low-cost entry plans for small volumes, which lowers the barrier.",
      ]],
      ["How the major MMPs differ", [
        "AppsFlyer is widely used, with broad integrations across ad networks and strong tooling for SKAdNetwork, fraud protection, and data products. Adjust, owned by AppLovin, is popular with games and apps and offers attribution, fraud prevention, and analytics features. Branch is known for deep linking and cross-platform linking, with attribution capabilities built around links.",
        "Singular emphasizes cost aggregation and marketing ROI, combining spend data with attribution for unified reporting. Kochava offers attribution and measurement with flexible configuration and connected TV support. Tenjin targets smaller developers and games with simpler, lower-cost measurement. Capabilities evolve quickly, so evaluate current features with demos and trials.",
      ]],
      ["Selection criteria", [
        "Start with your channels: confirm that the MMP integrates well with every network you use or plan to use. Evaluate iOS measurement: SKAdNetwork and AdAttributionKit support, conversion value tools, and modeling. Check deep linking quality if links drive referrals, influencers, or web-to-app flows; see our [deep linking guide](/blog/deep-linking-and-deferred-deep-links/).",
        "Consider fraud protection, data exports and warehouse integrations, dashboards, privacy and compliance features such as consent handling and data residency, support quality, and pricing at your expected volume. Ask for references from apps similar to yours in category and scale.",
      ]],
      ["Implementation and data quality", [
        "Implementing an MMP involves adding its SDK, configuring events, setting up network integrations, defining attribution windows, and designing SKAdNetwork schemas. Plan carefully: inconsistent event names or duplicate events undermine optimization and reporting.",
        "Disclose MMP data collection accurately in App Privacy details and the Data safety form. Test attribution with sample campaigns before scaling spend, and compare MMP data with store analytics and network reports to catch discrepancies early.",
      ]],
      ["Using MMP data for decisions", [
        "Use MMP data to compare channels by cost per install, cost per valuable event, retention, and return on ad spend. Combine with cohort analysis to see long-term value by source, as explained in [cohort analysis for mobile apps](/blog/cohort-analysis-for-mobile-apps/).",
        "Remember that attribution is not the same as incrementality. Last-touch attribution can credit channels for installs that would have happened anyway. Use holdout tests and experiments, as described in [attribution and organic uplift](/blog/attribution-and-organic-uplift/), to check whether channels create new users.",
      ]],
      ["Switching MMPs", [
        "Switching MMPs is possible but takes planning. You need to update SDKs, reconfigure integrations and events, migrate links, and run both systems in parallel for a period to compare data. Historical data may not transfer cleanly, so export what you need before switching.",
        "Switch only for clear reasons, such as missing capabilities, poor support, or significant cost savings. The disruption to reporting and campaign optimization can be meaningful.",
      ]],
      ["Common MMP mistakes", [
        "Buying an MMP before running paid campaigns at meaningful scale wastes money and setup time. Another mistake is poor event design, sending dozens of inconsistent events that confuse optimization. Some teams treat MMP attribution as the full truth and never test incrementality.",
        "Others neglect SKAdNetwork configuration, leaving iOS measurement weak, or forget to disclose MMP data collection in privacy labels. Finally, choosing based on price alone can leave gaps in integrations or support.",
      ]],
      ["A worked example: choosing an MMP", [
        "A subscription app runs Apple Ads, Meta, and TikTok, and plans to add influencer campaigns. It needs reliable iOS measurement, deep links for creators, and warehouse exports. The team shortlists three MMPs, runs demos, checks integrations with all three networks, and reviews SKAdNetwork tools and deep linking features.",
        "It chooses the MMP with the strongest SKAdNetwork tooling and good deep links, negotiates pricing based on expected volume, and implements it with a tracking plan of 15 events. After a month of parallel testing against store data, it uses the MMP to shift budget toward the network with the best cost per trial.",
      ]],
    ],
    steps: [
      ["Confirm the need", "Assess paid spend, number of networks, deep linking needs, and fraud risk."],
      ["List requirements", "Define channels, iOS measurement, deep linking, fraud, data export, privacy, and budget needs."],
      ["Shortlist and demo", "Evaluate several MMPs with demos, trials, and references from similar apps."],
      ["Implement with a tracking plan", "Configure SDK, events, integrations, attribution windows, and SKAdNetwork schemas carefully."],
      ["Validate and use", "Compare MMP data with store and network data, then use it for budget decisions alongside incrementality tests."],
    ],
    examples: [
      ["Timing", "Buy an MMP at launch with no paid spend.", "Add an MMP when running campaigns across several networks.", "MMP value grows with paid complexity."],
      ["Event design", "Send 60 events with inconsistent names.", "Send 15 core events defined in a tracking plan.", "Clean events improve optimization and reporting."],
      ["Decision making", "Trust last-touch attribution completely.", "Use MMP data plus holdout tests for incrementality.", "Attribution and incrementality answer different questions."],
    ],
    playbook: ["Add an MMP when paid complexity requires it", "Choose by integrations and iOS measurement", "Evaluate deep linking quality", "Design a clean tracking plan", "Disclose MMP data collection", "Test incrementality alongside attribution"],
    metrics: ["Attributed installs by network", "Cost per valuable event by network", "Retention and ROAS by source", "Fraud rate detected", "Data discrepancy versus store analytics"],
    faqs: [
      ["What is a mobile measurement partner?", "An independent service that attributes app installs and in-app events to ad sources across networks, with features such as deep linking and fraud protection."],
      ["Which MMP is best?", "It depends on your channels, iOS needs, deep linking, data integration, and budget. AppsFlyer, Adjust, Branch, Singular, and Kochava each have different strengths."],
      ["Do small apps need an MMP?", "Not always. If you run little paid acquisition, store analytics and platform reporting may be enough until you spend across several networks."],
      ["Can an MMP measure iOS installs after ATT?", "Yes, using SKAdNetwork and AdAttributionKit for aggregated attribution, plus consented data where available."],
    ],
    related: ["skadnetwork-adattributionkit-guide", "deep-linking-and-deferred-deep-links", "app-analytics-tools-compared", "attribution-and-organic-uplift"],
    serviceLinks: ["/services/paid-user-acquisition/", "/contact/"],
    sources: [],
  }),
  P({
    slug: "deep-linking-and-deferred-deep-links",
    title: "Deep Linking and Deferred Deep Links: Universal Links, App Links, and Beyond",
    seoTitle: "Deep Linking Guide: Universal Links, App Links, Deferred",
    description: "How deep links work on iOS and Android: Universal Links, App Links, deferred deep links, Firebase Dynamic Links replacements, use cases, and testing.",
    primaryKeyword: "deep linking",
    secondaryKeywords: ["deferred deep links", "Universal Links", "Android App Links"],
    category: "Paid Acquisition",
    answer: "Deep links send users to a specific place inside an app instead of the home screen. On iOS, Universal Links use your website domain and an apple-app-site-association file; on Android, App Links use a verified assetlinks.json file. Deferred deep links remember the destination through an install, so new users land on the right content after downloading. Firebase Dynamic Links shut down in 2025, so teams now use MMP or dedicated linking providers, or build their own.",
    sections: [
      ["Why deep links matter", [
        "Without deep links, a user who taps a link to a product, article, or invite lands on the app's home screen or the store page, and must find the content again. Many give up. Deep links remove that friction, improving conversion for ads, emails, referrals, influencer campaigns, QR codes, and web-to-app flows.",
        "Deep links also improve attribution, because the link can carry campaign information through to the app. Our guides to [referral programs](/blog/app-referral-program-design/) and [influencer marketing](/blog/influencer-marketing-for-mobile-apps/) rely on deep links to deliver personalized experiences.",
      ]],
      ["Types of deep links", [
        "Custom URL schemes, such as myapp://product/123, are the oldest method. They are easy to set up but not unique, can be claimed by other apps, and fail with an error if the app is not installed. Modern apps use them only as a fallback.",
        "Universal Links on iOS and App Links on Android use standard web URLs on your own domain. If the app is installed, the link opens the app at the right place; if not, it opens the web page, which can redirect to the store. Because they rely on domain verification, they are secure and reliable.",
      ]],
      ["Setting up Universal Links and App Links", [
        "For Universal Links, host an apple-app-site-association file on your domain listing your app identifiers and the paths the app handles, and add the Associated Domains entitlement to your app. For Android App Links, host an assetlinks.json file on your domain with your app's package name and signing certificate fingerprint, and declare intent filters with autoVerify in your manifest.",
        "Test on real devices after every change to domains, app identifiers, or signing keys. A silent failure falls back to the web, which looks like the link works but loses the in-app experience. Our [web-to-app SEO](/blog/web-to-app-seo-indexing/) guide covers related website setup.",
      ]],
      ["Deferred deep links", [
        "Deferred deep links handle users who do not have the app installed. The link sends them to the store, and after they install and open the app, it routes them to the original destination. This is essential for campaigns that target new users, such as referrals and ads.",
        "On Android, the Google Play Install Referrer API can pass referral information through the install. On iOS, deferred linking is more constrained by privacy rules, and providers use privacy-compliant matching methods. Most teams use a mobile measurement partner or linking provider for deferred deep links; see our [MMP comparison](/blog/mobile-measurement-partners-compared/).",
      ]],
      ["After Firebase Dynamic Links", [
        "Firebase Dynamic Links, a popular free solution, was shut down by Google in August 2025. Apps that relied on it needed to migrate to alternatives: MMP-provided links, dedicated linking providers such as Branch, or self-built solutions using Universal Links, App Links, and the Install Referrer API.",
        "When migrating, inventory every place links appear, including emails, QR codes, printed materials, and partner sites, and set up redirects where possible. Test deferred flows end to end, and update analytics so campaign tracking continues.",
      ]],
      ["Use cases across the funnel", [
        "Paid ads can deep link to specific products or content shown in the creative, improving conversion. Email and push campaigns can link to personalized screens. Referral links can open a welcome screen naming the inviter. QR codes in stores or events can open relevant features.",
        "Web-to-app flows benefit too: a user reading an article on your site can open it in the app with one tap. On iOS, Smart App Banners can prompt Safari users to open or install the app. Our [app landing page best practices](/blog/app-landing-page-best-practices/) guide covers web flows.",
      ]],
      ["Deep links and the store page", [
        "When users without the app tap a deep link, they see your store page before installing. Matching the store page to the link context improves conversion: [custom product pages](/blog/custom-product-pages-ios/) on iOS and [custom store listings](/blog/google-play-custom-store-listings-guide/) on Google Play can reflect campaign themes.",
        "After install, the deferred deep link should deliver the promised content immediately. A user who tapped a link for a specific recipe expects to see that recipe, not a generic onboarding flow.",
      ]],
      ["Common deep linking mistakes", [
        "Broken association files after domain or signing changes are the most common issue, causing links to fall back to the web silently. Another is relying only on custom URL schemes, which fail when the app is not installed. Many teams also forget deferred deep linking, losing context for new users.",
        "After the Firebase Dynamic Links shutdown, some apps still have old links in circulation that no longer work. Finally, failing to test on multiple devices, OS versions, and apps such as email clients and social apps, which sometimes open links in in-app browsers, leads to unexpected failures.",
      ]],
      ["A worked example: a recipe app's link strategy", [
        "A recipe app shares links to recipes on social media and in emails, but links open the home screen, and new users land on a generic store page. The team sets up Universal Links and App Links on its domain, and uses a linking provider for deferred deep links.",
        "Now existing users open the exact recipe, and new users install and land on that recipe after a short welcome. Conversion from shared links rises, and attribution shows which recipes drive installs. The team uses those insights to choose recipes for screenshots and ads.",
      ]],
    ],
    steps: [
      ["Map link destinations", "List the screens and content you want links to open, and where links will appear."],
      ["Set up Universal Links and App Links", "Host association files on your domain and configure entitlements and intent filters."],
      ["Add deferred deep linking", "Use an MMP, linking provider, or the Install Referrer API to preserve destinations through install."],
      ["Migrate legacy links", "Replace Firebase Dynamic Links and custom schemes, with redirects for old links."],
      ["Test across devices and apps", "Verify links on real devices, OS versions, and apps with in-app browsers."],
    ],
    examples: [
      ["Link type", "myapp://recipe/42 shared in emails.", "https://example.com/recipe/42 as a Universal Link and App Link.", "Web URLs work whether or not the app is installed."],
      ["New user experience", "Install, then land on the home screen.", "Install, then land on the shared recipe after a short welcome.", "Deferred deep links preserve intent and improve activation."],
      ["Migration", "Leave old Firebase Dynamic Links in place.", "Replace them with new links and redirect where possible.", "Firebase Dynamic Links no longer work after the 2025 shutdown."],
    ],
    playbook: ["Use Universal Links and App Links", "Add deferred deep linking for new users", "Replace Firebase Dynamic Links", "Match store pages to link context", "Deliver promised content after install", "Test after every domain or signing change"],
    metrics: ["Deep link success versus fallback rate", "Install conversion from links", "Activation of deep-linked new users", "Installs by link source", "Broken link reports"],
    faqs: [
      ["What is a deferred deep link?", "A link that remembers its destination through an app install, so new users land on the intended content after downloading and opening the app."],
      ["What replaced Firebase Dynamic Links?", "Google shut down Firebase Dynamic Links in August 2025. Teams now use MMP links, dedicated linking providers, or build their own with Universal Links, App Links, and the Install Referrer API."],
      ["What is the difference between Universal Links and URL schemes?", "Universal Links use verified web URLs and fall back to the website if the app is not installed; URL schemes are app-specific and fail if the app is missing."],
      ["Do deep links help app store optimization?", "Indirectly. They improve conversion and activation from campaigns and web traffic, and support web-to-app discovery."],
    ],
    related: ["app-referral-program-design", "mobile-measurement-partners-compared", "web-to-app-seo-indexing", "app-landing-page-best-practices"],
    serviceLinks: ["/services/paid-user-acquisition/", "/services/app-store-optimization/"],
    sources: [
      { label: "Apple: Supporting associated domains", url: "https://developer.apple.com/documentation/xcode/supporting-associated-domains" },
      { label: "Android Developers: App Links", url: "https://developer.android.com/training/app-links" },
      { label: "Firebase: Dynamic Links deprecation FAQ", url: "https://firebase.google.com/support/dynamic-links-faq" },
    ],
  }),
];
