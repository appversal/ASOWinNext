import { P } from "./release";

export const paid01 = [
  P({
    slug: "apple-ads-campaign-structure",
    title: "Apple Ads Campaign Structure: Brand, Category, Competitor, and Discovery",
    seoTitle: "Apple Ads Campaign Structure: Keywords, Match Types, Setup",
    description: "Structure Apple Ads (formerly Apple Search Ads) for control and scale: brand, category, competitor, and discovery campaigns, match types, and negatives.",
    primaryKeyword: "Apple Ads campaign structure",
    secondaryKeywords: ["Apple Search Ads structure", "Apple Ads keywords", "Search Match"],
    category: "Paid Acquisition",
    answer: "A proven Apple Ads structure separates search results campaigns by intent: brand (your own app name), category (generic terms that describe what you do), competitor (other apps' names, used carefully), and discovery (broad match and Search Match to find new terms). Use exact match in the first three, broad match and Search Match only in discovery, and add negative keywords so campaigns do not compete. This gives clean data, controlled bids, and a steady pipeline of new keywords.",
    sections: [
      ["What Apple Ads is and where ads appear", [
        "Apple Ads, formerly Apple Search Ads, is Apple's advertising platform for the App Store. Ads can appear at the top of search results, on the Search tab before a user types, on the Today tab, and on product pages in the You might also like section. Search results ads capture users at the moment of intent, which makes them the core of most Apple Ads programs.",
        "Search results ads use your App Store metadata and screenshots by default, and you can use [custom product pages](/blog/custom-product-pages-ios/) to match ads to specific keyword themes. Because ads draw on your listing, strong ASO improves ad performance, and ad data improves ASO, as explained in our comparison of [Apple Search Ads vs organic ASO](/blog/apple-search-ads-vs-organic-aso/).",
      ]],
      ["The four-campaign structure", [
        "Brand campaigns bid on your app name and close variations. They protect your brand from competitors and are usually the most efficient. Category campaigns bid on generic terms that describe your app, such as budget planner or habit tracker, where most new users come from. Competitor campaigns bid on other apps' names, which can work but often convert at lower rates and require care.",
        "Discovery campaigns use broad match keywords and Search Match, where Apple matches your ad to relevant searches automatically based on your metadata and category. Their job is to find new search terms, which you then move into exact match campaigns. Separating campaigns this way lets you set different bids, budgets, and goals for each intent.",
      ]],
      ["Match types and negative keywords", [
        "Exact match shows your ad only for the keyword and close variants such as plurals and misspellings. Broad match shows your ad for related searches, including synonyms and related phrases. Search Match requires no keywords and relies on Apple's matching. Use exact match for control and broad match plus Search Match for exploration.",
        "Add exact match keywords from your brand, category, and competitor campaigns as negative keywords in the discovery campaign, so discovery does not bid on terms you already manage. Add irrelevant terms as negatives everywhere. Without negatives, campaigns compete for the same searches and data becomes messy.",
      ]],
      ["Building the keyword list", [
        "Start with your [ASO keyword research](/blog/aso-keyword-research/), competitor analysis, and Apple's own keyword suggestions. Group keywords by theme within category campaigns, using ad groups such as features, use cases, and audiences, so you can match custom product pages and bids to each group.",
        "The search terms report shows which searches triggered your ads in broad match and Search Match. Review it weekly, promote converting terms to exact match in the right campaign, and add irrelevant terms as negatives. Over time, discovery feeds a growing list of proven keywords.",
      ]],
      ["Competitor keywords: use with care", [
        "Bidding on competitor names is allowed in Apple Ads, but results vary. Users searching for a specific app usually want that app, so conversion rates tend to be lower and costs can be high. Competitor campaigns work best when your app offers a clear alternative, such as a lower price or a specific feature, and your listing makes that difference visible.",
        "Keep competitor keywords separate so their lower conversion does not drag down category performance. Do not use competitor trademarks in your metadata or custom product page text in misleading ways. Our [competitor ASO analysis](/blog/competitor-aso-analysis/) guide explains how to find gaps without copying.",
      ]],
      ["Geography, devices, and audiences", [
        "Create separate campaigns for major countries or regions, because costs, keywords, and conversion vary. A keyword that works in the US may need different bids or wording in the UK or India. For localized markets, build keyword lists in local languages based on local research.",
        "You can refine audiences by device type, customer type (new users, returning users, or users of your other apps), and demographics where available. Most programs start with new users only in acquisition campaigns, and run separate re-engagement campaigns for returning users if needed.",
      ]],
      ["Common Apple Ads structure mistakes", [
        "Putting all keywords in one campaign is the most common mistake, making it impossible to set appropriate bids for brand and generic terms. Another is running broad match everywhere, which wastes budget on irrelevant searches. Missing negative keywords lets campaigns compete with each other.",
        "Advertisers also ignore the search terms report, missing new opportunities and failing to block waste. Finally, sending all keywords to the default product page misses the conversion gains from matching custom product pages to keyword themes.",
      ]],
      ["A worked example: setting up a budgeting app", [
        "A budgeting app launches Apple Ads in the US with four campaigns. Brand includes the app name and misspellings. Category has ad groups for budgeting, bill tracking, and saving goals, each with exact match keywords and a matching custom product page. Competitor includes three rival apps. Discovery uses broad match versions of category terms plus Search Match, with all exact keywords added as negatives.",
        "After two weeks, the search terms report reveals that paycheck planner converts well, so it moves to exact match in category. Several irrelevant searches about tax filing are added as negatives. Cost per acquisition in category falls, and the team expands to the UK with a localized keyword list.",
      ]],
    ],
    steps: [
      ["Create brand, category, competitor, and discovery campaigns", "Separate intent types so each has its own bids, budgets, and goals."],
      ["Use exact match outside discovery", "Add exact match keywords to brand, category, and competitor campaigns, grouped by theme."],
      ["Configure discovery", "Use broad match keywords and Search Match, and add all exact keywords as negatives."],
      ["Match custom product pages to themes", "Assign custom product pages to ad groups so ads reflect the search intent."],
      ["Mine search terms weekly", "Promote converting search terms to exact match and add irrelevant ones as negatives."],
    ],
    examples: [
      ["Campaign layout", "One campaign with every keyword in broad match.", "Brand, category, competitor, and discovery campaigns with exact match and negatives.", "Separation gives control over bids and clean data."],
      ["Ad group theme", "Mixed keywords: budget, bills, savings, invoices.", "Ad group for bill tracking with a custom product page showing bill reminders.", "Theme-matched pages raise conversion."],
      ["Discovery negatives", "No negatives in discovery.", "All exact match keywords added as negatives in discovery.", "Prevents discovery from competing with managed campaigns."],
    ],
    playbook: ["Separate campaigns by intent", "Use exact match for control", "Explore with broad match and Search Match", "Add negatives to prevent overlap", "Match custom product pages to ad groups", "Review search terms weekly"],
    metrics: ["Tap-through rate by campaign", "Conversion rate by keyword", "Cost per acquisition by campaign", "Impression share for priority keywords", "New converting keywords found per month"],
    faqs: [
      ["What is the best campaign structure for Apple Ads?", "A common structure separates brand, category, competitor, and discovery campaigns, using exact match in the first three and broad match plus Search Match in discovery."],
      ["Is Apple Ads the same as Apple Search Ads?", "Yes. Apple renamed Apple Search Ads to Apple Ads in 2025."],
      ["Should I bid on competitor app names?", "It is allowed and can work, but conversion is often lower. Keep competitor keywords in a separate campaign and make your differentiation clear."],
      ["What is Search Match in Apple Ads?", "Search Match automatically matches your ads to relevant searches using your app's metadata and category, without keywords. It is useful for discovery."],
    ],
    related: ["apple-ads-bidding-and-budgets", "apple-search-ads-vs-organic-aso", "custom-product-pages-ios", "aso-and-paid-user-acquisition"],
    serviceLinks: ["/services/paid-user-acquisition/", "/aso-agency-usa/"],
    sources: [
      { label: "Apple Ads", url: "https://ads.apple.com/app-store" },
    ],
  }),
  P({
    slug: "apple-ads-bidding-and-budgets",
    title: "Apple Ads Bidding and Budgets: Set CPT Bids, Scale Spend, and Protect ROI",
    seoTitle: "Apple Ads Bidding Strategy: CPT Bids, Budgets, and ROI",
    description: "How to bid and budget in Apple Ads: setting cost-per-tap bids from target CPA, adjusting by keyword performance, impression share, and scaling profitably.",
    primaryKeyword: "Apple Ads bidding strategy",
    secondaryKeywords: ["Apple Search Ads CPT bid", "Apple Ads budget", "Apple Ads CPA"],
    category: "Paid Acquisition",
    answer: "Apple Ads search results campaigns use cost-per-tap (CPT) bidding. Set an initial max CPT bid by working backward from your target cost per acquisition and expected conversion rate: target CPA multiplied by tap-to-install conversion. Then adjust bids by keyword based on actual CPA, conversion, and value. Use impression share and search terms data to find room to scale, and judge success by cost per retained or paying user, not just cost per install.",
    sections: [
      ["How Apple Ads pricing works", [
        "In search results campaigns, you pay when a user taps your ad, and you set a maximum CPT bid. Apple runs an auction that considers your bid and your ad's relevance to the search. You often pay less than your maximum, because the price depends on competition. Other placements, such as the Today tab, use different pricing, such as cost per thousand impressions.",
        "Relevance matters. If your app is not relevant to a search, a high bid may not win impressions. This is one reason strong ASO, with clear metadata and good conversion, makes Apple Ads more efficient. Our guide to [Apple Ads campaign structure](/blog/apple-ads-campaign-structure/) covers setup.",
      ]],
      ["Set starting bids from your target CPA", [
        "Work backward from what you can afford. If your target cost per install is $3 and you expect 50% of taps to become installs, your break-even CPT is about $1.50. If you optimize for a later action, such as a trial start, use the target cost for that action and the expected conversion from tap to that action.",
        "Your target should come from user value. Our [LTV calculation guide](/blog/mobile-app-ltv-calculation/) explains how to estimate value, and the [cost per install explainer](/blog/cost-per-install-cpi-explained/) shows how to convert LTV into CPI targets. Start slightly below the break-even bid and increase as you see data.",
      ]],
      ["Adjust bids by keyword performance", [
        "After a week or two of data, review each keyword's spend, taps, installs, CPA, and downstream value. Raise bids on keywords that convert well below target CPA and have limited impression share. Lower bids on keywords above target, or pause them if they do not improve. Brand keywords often deserve high bids because they convert well and protect your name.",
        "Make changes gradually, such as 10 to 20 percent at a time, and give each change enough data before judging it. Low-volume keywords need longer windows. Avoid reacting to daily noise.",
      ]],
      ["Use impression share to find room to grow", [
        "Impression share reports show how often your ads appeared relative to the available impressions for a keyword. Low impression share on a profitable keyword suggests room to scale by raising bids or budgets. High impression share with rising CPA suggests you are near the limit for that keyword.",
        "Combine impression share with Apple's popularity scores and your own conversion data to prioritize. Our guide to [keyword popularity and difficulty scores](/blog/keyword-popularity-and-difficulty-scores/) explains how popularity works.",
      ]],
      ["Budgets and pacing", [
        "Set daily budgets per campaign based on priorities. Brand campaigns usually need modest budgets but should never run out. Category campaigns get the largest share for growth. Discovery gets a smaller share for exploration. If a campaign regularly hits its daily cap early, you may be missing profitable traffic later in the day.",
        "Plan for seasonality. Costs and conversion change around holidays, New Year, back to school, and events in your category. Our [seasonal ASO calendar](/blog/app-seasonality-aso-calendar/) helps anticipate these shifts in both paid and organic channels.",
      ]],
      ["Measure value, not just installs", [
        "Install-based CPA can be misleading if some keywords bring users who never activate or pay. Connect Apple Ads data to in-app events through the AdServices attribution framework or your mobile measurement partner, and compare cost per trial, cost per subscriber, or revenue by keyword.",
        "Paid search can also lift organic installs by increasing visibility for keywords, or it can cannibalize organic installs on brand terms. Test with holdouts or geographic experiments to understand incrementality, as described in [attribution and organic uplift](/blog/attribution-and-organic-uplift/).",
      ]],
      ["Custom product pages and bid efficiency", [
        "Bids and creative interact. When an ad group shows a custom product page that matches its keywords, more taps turn into installs, so each tap is worth more and you can afford a higher CPT at the same CPA. A bill-tracking keyword group that lands on a page about bill reminders will usually beat the same group landing on a generic page.",
        "Measure conversion rate by ad group before and after assigning custom pages, and recalculate break-even bids with the new rate. Our guide to [custom product pages on iOS](/blog/custom-product-pages-ios/) explains setup, and [product page optimization](/blog/product-page-optimization-ios/) covers testing the default page that most ads still use.",
      ]],
      ["Common bidding mistakes", [
        "Setting one bid for all keywords is the most common mistake, overpaying for weak terms and underbidding on strong ones. Another is chasing installs without looking at downstream value. Advertisers also make large bid changes too frequently, never letting data settle.",
        "Ignoring brand campaigns leaves room for competitors to appear above your app on your own name. Finally, scaling budget on campaigns with poor relevance or weak product page conversion wastes money; fix the listing first.",
      ]],
      ["A worked example: scaling a fitness app", [
        "A fitness app targets a cost per trial of $12, with about 20% of taps leading to a trial. That suggests a starting CPT around $2.40. After two weeks, home workout keywords produce trials at $8 with low impression share, while gym tracker keywords cost $18 per trial.",
        "The team raises home workout bids by 15%, lowers gym tracker bids, and moves budget accordingly. Impression share for home workout terms rises, trials grow, and blended cost per trial stays near target. A geographic holdout test shows that brand campaigns add little incremental value, so the team trims brand bids while keeping protection.",
      ]],
    ],
    steps: [
      ["Define the target action and cost", "Choose the action you optimize for, such as install or trial, and set a target cost from LTV."],
      ["Calculate starting bids", "Multiply target cost by expected tap-to-action conversion to set initial max CPT bids."],
      ["Review keyword performance weekly", "Raise bids on keywords below target with low impression share; lower or pause those above target."],
      ["Allocate budgets by priority", "Protect brand, fund category growth, and keep discovery smaller but active."],
      ["Measure value and incrementality", "Connect downstream events and test incrementality with holdouts."],
    ],
    examples: [
      ["Starting bid", "Bid $5 on everything to win.", "Target CPA $3 x 50% tap-to-install = $1.50 starting CPT.", "Working backward from value prevents overspending."],
      ["Bid change", "Double bids on a strong keyword overnight.", "Raise bids 15% and review after seven days of data.", "Gradual changes produce clearer results."],
      ["Success metric", "Cost per install.", "Cost per trial and cost per subscriber by keyword.", "Value metrics reveal which keywords bring paying users."],
    ],
    playbook: ["Set bids from target CPA", "Adjust keyword bids gradually", "Use impression share to find headroom", "Protect brand with steady budgets", "Measure downstream value by keyword", "Test incrementality on brand terms"],
    metrics: ["Average CPT and CPA by keyword", "Impression share", "Tap-through and conversion rates", "Cost per trial or subscriber", "Incremental installs"],
    faqs: [
      ["How do I set my Apple Ads bid?", "Multiply your target cost per acquisition by the expected conversion rate from tap to that action. Adjust based on actual results."],
      ["What is a good CPT in Apple Ads?", "It depends on your category, country, and keyword. Judge CPT by whether resulting CPA and user value meet your targets."],
      ["Do I pay my maximum CPT bid?", "Not always. Apple Ads uses an auction, so you often pay less than your maximum, depending on competition and relevance."],
      ["Should I bid on my own brand name?", "Usually yes, to protect your name from competitors, but test incrementality to avoid overpaying for users who would install anyway."],
    ],
    related: ["apple-ads-campaign-structure", "cost-per-install-cpi-explained", "mobile-app-ltv-calculation", "apple-search-ads-vs-organic-aso"],
    serviceLinks: ["/services/paid-user-acquisition/", "/aso-agency-usa/"],
    sources: [
      { label: "Apple Ads", url: "https://ads.apple.com/app-store" },
    ],
  }),
  P({
    slug: "meta-ads-for-app-installs",
    title: "Meta Ads for App Installs: Facebook and Instagram Campaigns That Scale",
    seoTitle: "Meta Ads for App Installs: Facebook and Instagram Guide",
    description: "Run Meta app install campaigns on Facebook and Instagram: objectives, Advantage+ app campaigns, optimization events, iOS measurement, creative, and scaling.",
    primaryKeyword: "Meta ads for app installs",
    secondaryKeywords: ["Facebook app install ads", "Advantage+ app campaigns", "Instagram app ads"],
    category: "Paid Acquisition",
    answer: "Meta app campaigns use the App promotion objective to reach users across Facebook, Instagram, Messenger, and the Audience Network. Advantage+ app campaigns automate targeting, placements, and creative mixing, so your main levers are the optimization event, budget, and creative. Optimize for a meaningful in-app event rather than raw installs when you have enough volume, set up the Meta SDK or an MMP integration with SKAdNetwork for iOS, and refresh creative often.",
    sections: [
      ["How Meta app campaigns work", [
        "Meta's App promotion objective drives installs and in-app actions. You choose an optimization goal, such as app installs, a specific app event like a purchase or trial, or value, and Meta's delivery system finds people likely to take that action. Ads can run across Facebook, Instagram, Messenger, and the Audience Network, with placements such as Reels, Stories, and Feed.",
        "Advantage+ app campaigns automate much of the setup, including audience targeting, placements, and creative combinations. This reduces manual work and often improves performance, but it shifts your influence to the inputs: which event you optimize for, how much budget you allocate, and which creative you provide.",
      ]],
      ["Choose the right optimization event", [
        "Optimizing for installs brings the cheapest installs, but not always valuable users. Optimizing for a deeper event, such as completing onboarding, starting a trial, or making a purchase, usually brings better users at a higher cost per install. Choose the deepest event that still produces enough conversions for the system to learn.",
        "Meta's delivery system works best when each ad set gets enough conversions per week to exit the learning phase; Meta's guidance has commonly referred to around 50 optimization events per week. If a deep event is too rare, optimize for an earlier event that correlates with value. Our guide to [LTV calculation](/blog/mobile-app-ltv-calculation/) helps identify which events predict value.",
      ]],
      ["Measurement: SDK, MMP, and iOS", [
        "Install the Meta SDK or integrate through a mobile measurement partner to send app events to Meta. Accurate event data is essential for optimization and reporting. On iOS, App Tracking Transparency limits user-level tracking, so Meta relies on SKAdNetwork and modeled reporting for many conversions.",
        "Configure SKAdNetwork conversion values thoughtfully, often through your MMP, to capture the most important early signals. Our guide to [SKAdNetwork and AdAttributionKit](/blog/skadnetwork-adattributionkit-guide/) explains how iOS attribution works, and the [ATT prompt guide](/blog/att-prompt-opt-in-rate/) covers improving opt-in rates.",
      ]],
      ["Creative is the main lever", [
        "With automated targeting, creative largely determines who sees your ads and whether they install. Vertical video for Reels and Stories, with a strong hook in the first seconds, usually performs best. Show the app's outcome, real people using it, or gameplay for games. User-generated content and creator-style videos often outperform polished brand ads.",
        "Provide several distinct creative concepts, not just small variations, so the system can find what resonates with different audiences. Refresh creative regularly to fight fatigue. Our guide to [creative strategy for app install ads](/blog/creative-strategy-for-app-install-ads/) explains how to build and test a creative pipeline.",
      ]],
      ["Match the store page to the ad", [
        "Users who tap your ad land on your store page, so the listing must deliver the promise of the ad. On iOS, you can link ads to [custom product pages](/blog/custom-product-pages-ios/) that match each creative theme. On Google Play, [custom store listings](/blog/google-play-custom-store-listings-guide/) serve a similar purpose.",
        "Low store conversion raises your effective cost per install, even if the ad itself performs well. Monitor page conversion for paid traffic, and test screenshots that echo the ads' messages.",
      ]],
      ["Budgets, bidding, and scaling", [
        "Start with a budget large enough to generate meaningful conversion volume. Meta offers bid strategies such as highest volume, cost per result goal, and ROAS goal for value optimization. Many advertisers start with highest volume to learn, then add cost or ROAS controls once they understand performance.",
        "Scale gradually, increasing budgets in steps rather than sudden jumps, which can reset learning. Expand to new countries with separate campaigns or clear geographic targeting, since costs and user value vary widely by market.",
      ]],
      ["Android and Google Play specifics", [
        "On Android, measurement is less constrained than on iOS, and Meta can use install referrer data and SDK events directly. That often makes Android campaigns faster to optimize. Still, keep event definitions identical across platforms so results are comparable, and watch for differences in user value between Android and iOS audiences in each market.",
        "Run separate campaigns per platform when value or costs differ meaningfully, which is common. Budget shifts between platforms should follow cost per valuable user rather than raw install volume. Our guide to [cost per install](/blog/cost-per-install-cpi-explained/) explains why the cheapest installs are not always the best deal.",
      ]],
      ["Common Meta app campaign mistakes", [
        "Optimizing for installs when the business needs subscribers often produces cheap users who never pay. Another mistake is splitting budget across too many campaigns and ad sets, so none get enough conversions to learn. Poor event setup, such as missing or duplicated events, undermines optimization.",
        "Advertisers also run the same creative for months, letting fatigue raise costs. Finally, ignoring the store page wastes paid traffic, especially when ad messages and screenshots do not match.",
      ]],
      ["A worked example: a language app scales on Meta", [
        "A language app starts Meta campaigns optimized for installs and sees low trial conversion. It switches optimization to trial starts, consolidates into one Advantage+ app campaign per major region, and adds eight creative concepts, including creator videos of travelers speaking with locals.",
        "Cost per install rises, but cost per trial falls, and trial users retain better. The team links top creative themes to matching custom product pages on iOS and refreshes two concepts every two weeks. Meta becomes a profitable second channel after Apple Ads.",
      ]],
    ],
    steps: [
      ["Set up event tracking", "Install the Meta SDK or connect your MMP, and verify that key in-app events are sent correctly."],
      ["Choose the optimization event", "Pick the deepest event that still produces enough weekly conversions to learn."],
      ["Launch a consolidated campaign", "Start with an Advantage+ app campaign per major region to concentrate learning."],
      ["Supply diverse creative", "Provide several distinct concepts in vertical video, with strong hooks and clear outcomes."],
      ["Align store pages and scale gradually", "Match custom product pages to creative themes and increase budgets in steps."],
    ],
    examples: [
      ["Optimization event", "App installs.", "Trial started, with enough weekly volume to learn.", "Deeper events bring users closer to value."],
      ["Campaign structure", "Twelve ad sets with small budgets each.", "One consolidated campaign per region with sufficient budget.", "Concentrated data helps the system learn faster."],
      ["Creative", "Static app screenshot with logo.", "Creator video: I ordered dinner in Spanish after two weeks of 10-minute lessons.", "Authentic outcomes outperform static product images."],
    ],
    playbook: ["Verify SDK or MMP event tracking", "Optimize for the deepest viable event", "Consolidate campaigns for learning", "Feed diverse vertical video creative", "Match store pages to ad themes", "Scale budgets gradually"],
    metrics: ["Cost per install and per optimization event", "Store page conversion for paid traffic", "Retention and revenue by campaign", "Creative fatigue indicators", "ROAS by region"],
    faqs: [
      ["What are Advantage+ app campaigns?", "Meta's automated campaigns for app promotion, which handle targeting, placements, and creative combinations, leaving you to set budget, optimization event, and creative."],
      ["Should I optimize for installs or events on Meta?", "Optimize for the deepest event that still gets enough conversions to learn, such as a trial or purchase. Installs alone often bring lower-value users."],
      ["How does iOS tracking affect Meta app ads?", "App Tracking Transparency limits user-level tracking, so Meta relies on SKAdNetwork and modeled reporting for many iOS conversions."],
      ["What creative works best for Meta app ads?", "Vertical video with a strong hook, real outcomes, and creator or user-generated styles often performs best. Refresh creative regularly."],
    ],
    related: ["creative-strategy-for-app-install-ads", "tiktok-ads-for-app-installs", "skadnetwork-adattributionkit-guide", "custom-product-pages-ios"],
    serviceLinks: ["/services/paid-user-acquisition/", "/services/creative-ab-testing/"],
    sources: [
      { label: "Meta for Developers: App Events", url: "https://developers.facebook.com/docs/app-events/" },
    ],
  }),
  P({
    slug: "tiktok-ads-for-app-installs",
    title: "TikTok Ads for App Installs: Campaign Setup, Creative, and Measurement",
    seoTitle: "TikTok Ads for App Installs: Setup, Creative, Measurement",
    description: "Run TikTok app install campaigns: App Promotion objective, Smart+ automation, optimization goals, Spark Ads, creative refresh, and iOS attribution.",
    primaryKeyword: "TikTok ads for app installs",
    secondaryKeywords: ["TikTok app promotion campaign", "TikTok Spark Ads", "TikTok Smart+ app campaigns"],
    category: "Paid Acquisition",
    answer: "TikTok app campaigns use the App Promotion objective, with options for manual setup or automated Smart+ campaigns. Choose an optimization goal, such as installs, an in-app event, or value, connect measurement through TikTok's SDK or a mobile measurement partner with SKAdNetwork for iOS, and invest heavily in native, creator-style vertical video. Spark Ads let you boost organic and creator posts, which often outperform conventional ads. Refresh creative frequently.",
    sections: [
      ["How TikTok app campaigns work", [
        "TikTok's App Promotion objective drives app installs and re-engagement. You can build campaigns manually, choosing targeting, placements, and bids, or use Smart+ campaigns, which automate targeting, bidding, and creative optimization. As on Meta, automation shifts your influence to optimization goals, budgets, and creative.",
        "TikTok's audience skews younger than some platforms but spans many age groups, and its recommendation system can reach users far beyond your followers. Apps with visual, entertaining, or problem-solving value, such as games, creative tools, education, fitness, and shopping, often perform well.",
      ]],
      ["Measurement and optimization goals", [
        "Set up measurement through TikTok's SDK or, more commonly, a mobile measurement partner integration, and send in-app events so campaigns can optimize beyond installs. On iOS, TikTok supports SKAdNetwork-based campaigns, which require careful conversion value configuration. Our [SKAdNetwork and AdAttributionKit guide](/blog/skadnetwork-adattributionkit-guide/) explains the basics.",
        "Choose optimization goals based on value and volume. Install optimization finds cheap installs; event optimization, such as registration, purchase, or trial, finds more valuable users if there is enough conversion volume. Value optimization can work for apps with clear revenue events and sufficient data.",
      ]],
      ["Creative must feel native", [
        "TikTok users scroll quickly and skip anything that looks like a traditional ad. Successful app ads feel like TikTok content: vertical, sound-on, person-led, quick, and focused on a relatable moment or result. Hooks in the first second or two determine whether people watch.",
        "Use TikTok's Creative Center to see trending sounds, formats, and top ads in your category. Our guide to [TikTok marketing for apps](/blog/tiktok-marketing-for-apps/) covers organic formats that also work as paid creative, and [creative strategy for app install ads](/blog/creative-strategy-for-app-install-ads/) explains how to build a testing pipeline.",
      ]],
      ["Spark Ads and creator partnerships", [
        "Spark Ads let you promote existing organic posts, from your account or creators' accounts with permission, as ads. Because they keep the original post's likes, comments, and creator identity, they often feel more authentic and can perform better than standard ads.",
        "Partner with creators to produce content you can boost. Brief them on the problem and outcome rather than scripting, and secure usage rights for paid promotion. Our [influencer marketing guide](/blog/influencer-marketing-for-mobile-apps/) explains selection and briefing.",
      ]],
      ["Creative fatigue and refresh", [
        "Creative fatigue sets in quickly on TikTok because users see many ads and content moves fast. Watch for rising cost per result and falling click-through rates. Plan a steady pipeline of new concepts and variations, such as new hooks, creators, or formats, so you can rotate before performance drops sharply.",
        "Test new concepts in a controlled way, giving each enough spend to judge. Keep winning concepts running while testing new ones, and iterate on winners with fresh hooks or edits.",
      ]],
      ["Landing on the store page", [
        "TikTok ads send users to your store page, so the first screenshots should match the ad's promise. Use [custom product pages](/blog/custom-product-pages-ios/) on iOS and [custom store listings](/blog/google-play-custom-store-listings-guide/) on Google Play for major creative themes.",
        "Watch store conversion for TikTok traffic. Younger audiences may respond to different visuals and messages than your default listing, so a dedicated page can raise conversion significantly.",
      ]],
      ["Budgets, bidding, and the learning phase", [
        "TikTok campaigns need enough budget and conversions to exit the learning phase, during which delivery and costs fluctuate. Start with budgets large enough to generate steady conversions for your chosen event, and avoid frequent edits that restart learning. Bid strategies range from maximum delivery to cost caps, and most advertisers begin with maximum delivery to gather data before adding controls.",
        "Scale gradually, increasing budgets in measured steps. Separate campaigns by platform and major region when costs or user value differ, which is common between iOS and Android and between countries. Use [LTV estimates](/blog/mobile-app-ltv-calculation/) by region to set realistic cost targets.",
      ]],
      ["Common TikTok ads mistakes", [
        "Running repurposed TV or polished brand ads is the most common mistake; they look out of place and perform poorly. Another is not refreshing creative, letting costs climb. Weak measurement setup, especially for iOS, makes optimization unreliable.",
        "Advertisers also optimize for installs when they need paying users, and send traffic to store pages that do not match the ad's tone or promise. Finally, judging results too quickly, before campaigns exit learning, can lead to cutting campaigns that would have worked.",
      ]],
      ["A worked example: a photo editing app", [
        "A photo editing app runs TikTok ads using its App Store screenshots as a slideshow. Costs are high and installs few. The team commissions five creators to film quick before-and-after edits with trending sounds, and boosts the best organic posts with Spark Ads.",
        "Cost per install falls sharply, and optimization shifts to trial starts once volume allows. A custom product page with a before-and-after first screenshot lifts store conversion for TikTok traffic. The team refreshes two creatives weekly and keeps TikTok among its most efficient channels.",
      ]],
    ],
    steps: [
      ["Connect measurement", "Integrate TikTok via SDK or MMP, send in-app events, and configure iOS SKAdNetwork settings."],
      ["Choose campaign type and goal", "Start with Smart+ or a simple manual campaign, optimizing for installs or a valuable event with enough volume."],
      ["Produce native creative", "Create vertical, sound-on, creator-style videos with strong hooks."],
      ["Boost proven posts with Spark Ads", "Promote high-performing organic and creator posts with permission."],
      ["Refresh and align", "Rotate creative before fatigue and match store pages to creative themes."],
    ],
    examples: [
      ["Ad format", "Slideshow of App Store screenshots.", "Creator filming a five-second before-and-after edit with a trending sound.", "Native content holds attention on TikTok."],
      ["Optimization", "Installs only.", "Trial starts once weekly volume allows.", "Event optimization brings more valuable users."],
      ["Refresh cadence", "Same three ads for two months.", "Two new creatives every week, keeping winners running.", "Regular refresh fights fast creative fatigue."],
    ],
    playbook: ["Set up measurement before spending", "Optimize for valuable events when possible", "Make ads feel like TikTok content", "Use Spark Ads for proven posts", "Refresh creative frequently", "Match store pages to ad themes"],
    metrics: ["Cost per install and per event", "Hook rate and watch time", "Click-through rate trend", "Store conversion for TikTok traffic", "Retention by campaign"],
    faqs: [
      ["Are TikTok ads good for app installs?", "They can be, especially for apps with visual or entertaining value. Results depend heavily on native creative."],
      ["What are Spark Ads?", "Spark Ads promote existing organic TikTok posts, including creators' posts with permission, keeping their engagement and identity."],
      ["What is Smart+ on TikTok?", "Smart+ campaigns automate targeting, bidding, and creative optimization for app promotion, similar to automated campaigns on other platforms."],
      ["How do I measure TikTok app installs on iOS?", "Through SKAdNetwork-based reporting and your MMP integration, since App Tracking Transparency limits user-level tracking."],
      ["How much budget do I need to test TikTok ads?", "Enough to generate a steady flow of conversions for your optimization event so campaigns can exit learning. Many teams start with a modest test focused on one region and platform, judge results after the learning phase, and scale only when cost per valuable user meets target."],
    ],
    related: ["tiktok-marketing-for-apps", "meta-ads-for-app-installs", "creative-strategy-for-app-install-ads", "influencer-marketing-for-mobile-apps"],
    serviceLinks: ["/services/paid-user-acquisition/", "/services/creative-ab-testing/"],
    sources: [
      { label: "TikTok Ads Help Center", url: "https://ads.tiktok.com/help/" },
    ],
  }),
  P({
    slug: "creative-strategy-for-app-install-ads",
    title: "Creative Strategy for App Install Ads: Concepts, Hooks, and Testing at Scale",
    seoTitle: "App Install Ad Creative Strategy: Concepts, Hooks, Testing",
    description: "Build a creative strategy for app install ads: concepts vs variations, hooks, formats, testing frameworks, fatigue, and aligning ads with store pages.",
    primaryKeyword: "app install ad creative",
    secondaryKeywords: ["UA creative strategy", "mobile ad creative testing", "app ad hooks"],
    category: "Paid Acquisition",
    answer: "With automated targeting on major ad platforms, creative is the biggest lever in app install campaigns. Build a pipeline of distinct concepts, such as problem and solution, testimonial, demo, and gameplay, each with several hooks and variations. Test concepts with enough spend to judge, iterate on winners, and refresh before fatigue. Align winning creative with store pages through custom product pages, and measure by cost per valuable user, not just click-through rate.",
    sections: [
      ["Why creative is the main lever", [
        "Meta, TikTok, Google, and other platforms increasingly automate targeting and bidding. The algorithm uses your creative to find people who respond to it, so different creative effectively reaches different audiences. A strong new concept can lower costs dramatically; a stale library can make even well-structured campaigns expensive.",
        "This makes creative production a core growth capability, not an occasional design task. Teams that ship and test new creative every week tend to outperform teams that launch a few ads and leave them running.",
      ]],
      ["Concepts versus variations", [
        "A concept is a distinct idea: a core message, angle, or story. Examples include a problem and solution story, a user testimonial, a feature demo, a before-and-after transformation, gameplay footage, or a humorous skit. A variation changes elements within a concept, such as the hook, length, music, captions, or end card.",
        "New concepts find new audiences and big wins; variations optimize and extend winners. Balance both: a steady flow of new concepts plus variations on proven ones. Track performance at the concept level to learn which messages resonate.",
      ]],
      ["Hooks: the first seconds decide everything", [
        "Most viewers decide in the first second or two whether to keep watching. Strong hooks state a relatable pain, show a surprising result, ask a provocative question, or use a pattern interrupt. Test several hooks for the same body, because changing only the opening can multiply performance.",
        "Keep a hook library with results by audience and platform. Patterns that work in one app often transfer to related apps. The same thinking helps store creative, as covered in [screenshot caption copywriting](/blog/screenshot-captions-copywriting/).",
      ]],
      ["Formats by platform", [
        "Vertical video dominates on TikTok, Reels, Shorts, and Stories. Square and horizontal formats still matter for some placements, and static images can work for simple messages. Playable ads, which let users try a mini version of a game, are popular in game advertising networks. Interactive end cards can improve click-through.",
        "Design for sound-off viewing with captions, but use sound where platforms are sound-on, such as TikTok. Our guides to [Meta ads for app installs](/blog/meta-ads-for-app-installs/) and [TikTok ads for app installs](/blog/tiktok-ads-for-app-installs/) cover platform-specific details.",
      ]],
      ["A testing framework", [
        "Test new concepts in dedicated campaigns or ad sets with enough budget to reach meaningful results, then move winners into scaling campaigns. Define success metrics in advance: cost per install is a start, but cost per trial, purchase, or retained user is better. Avoid declaring winners on click-through rate alone.",
        "Use consistent naming conventions so you can analyze results by concept, hook, format, creator, and length. Over time, this builds a knowledge base of what works. Our guide to [creative testing backlog prioritization](/blog/creative-testing-backlog-prioritization/) explains how to rank ideas.",
      ]],
      ["Fatigue and refresh", [
        "Creative fatigue shows up as rising frequency, falling click-through rates, and rising costs. Refresh before performance collapses by rotating in new concepts and variations. High-spend campaigns fatigue faster and need more frequent refresh.",
        "Refreshing does not always mean starting from scratch. New hooks, creators, or edits on a winning concept can restore performance. Keep a backlog of ideas so production never stalls.",
      ]],
      ["Align ads with store pages", [
        "An ad that promises one thing and lands on a store page showing another wastes the click. Use [custom product pages](/blog/custom-product-pages-ios/) on iOS and [custom store listings](/blog/google-play-custom-store-listings-guide/) on Google Play to match top creative themes. The first screenshot should echo the ad's main message.",
        "Ad insights can also improve organic creative. If a particular message consistently wins in ads, test it in your default store screenshots through [product page optimization](/blog/product-page-optimization-ios/) or [store listing experiments](/blog/store-listing-experiments-google-play/).",
      ]],
      ["Common creative strategy mistakes", [
        "Producing only small variations of one idea is the most common mistake, limiting reach to one audience segment. Another is judging creative by click-through rate when the goal is valuable users. Many teams also lack naming conventions and lose track of what they learned.",
        "Teams sometimes stop testing once they find a winner, then scramble when it fatigues. Finally, ignoring the store page can make strong ads look weak because traffic converts poorly after the tap.",
      ]],
      ["A worked example: a budgeting app's creative pipeline", [
        "A budgeting app has run the same three static ads for months, with rising costs. The team builds a pipeline: each week, one new concept, such as a creator testimonial about paying off debt, and three new hooks for the best existing concept. Every ad follows a naming convention recording concept, hook, creator, and length.",
        "Within two months, a concept showing a user discovering forgotten subscriptions becomes the top performer. The team creates a matching custom product page and tests the message in default store screenshots, where it also lifts conversion. Paid costs fall and organic conversion rises.",
      ]],
    ],
    steps: [
      ["List concept types", "Brainstorm distinct concepts such as problem and solution, testimonial, demo, and transformation."],
      ["Write multiple hooks per concept", "Create several openings for each concept to test attention."],
      ["Test with clear metrics and naming", "Run tests with enough spend, judge by cost per valuable user, and name ads consistently."],
      ["Scale and iterate winners", "Move winners into scaling campaigns and create new variations from them."],
      ["Align store pages and refresh", "Match custom product pages to top themes and refresh creative before fatigue."],
    ],
    examples: [
      ["Concept diversity", "Ten color variations of one static ad.", "Five concepts: testimonial, demo, problem-solution, transformation, and humor, each with hooks.", "Distinct concepts reach different audiences."],
      ["Hook", "Meet BudgetApp, the smart budgeting app.", "I found $87 a month in subscriptions I forgot about.", "A specific, surprising result grabs attention."],
      ["Success metric", "Highest click-through rate wins.", "Lowest cost per trial with healthy day-7 retention wins.", "Value metrics reflect business goals."],
    ],
    playbook: ["Treat creative as a weekly pipeline", "Balance new concepts and variations", "Test multiple hooks per concept", "Judge by cost per valuable user", "Use consistent naming conventions", "Match store pages to winning themes"],
    metrics: ["Cost per install and per valuable event by concept", "Hook rate and watch time", "Click-through rate trend for fatigue", "Store conversion by creative theme", "Share of spend on new concepts"],
    faqs: [
      ["What makes a good app install ad?", "A strong hook, a clear outcome, a native format for the platform, and a promise the store page fulfills."],
      ["How often should I refresh app ad creative?", "It depends on spend and platform, but high-spend campaigns often need new creative weekly or every few weeks. Watch for rising costs and falling click-through."],
      ["What is the difference between a concept and a variation?", "A concept is a distinct idea or angle; a variation changes elements within it, such as the hook, length, or music."],
      ["Should ad creative match store screenshots?", "Yes. Matching messages between ads and store pages improves conversion, and custom product pages make this possible for multiple themes."],
    ],
    related: ["meta-ads-for-app-installs", "tiktok-ads-for-app-installs", "creative-testing-backlog-prioritization", "custom-product-pages-ios"],
    serviceLinks: ["/services/creative-ab-testing/", "/services/paid-user-acquisition/"],
    sources: [],
  }),
];
