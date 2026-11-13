import { released } from "./release";

const P = released("2026-11-13");

const s = (heading, ...paragraphs) => [heading, paragraphs];

// Store page, marketing and analytics guides.
const base = [
  P({
    slug: "app-product-page-anatomy",
    title: "Anatomy of an App Store Product Page: Every Element and What It Does",
    seoTitle: "App Store Product Page Anatomy: Every Element Explained",
    description: "Every element of App Store and Google Play product pages explained: what is indexed, what drives conversion, and how to optimize each one in the right order.",
    primaryKeyword: "app store product page",
    secondaryKeywords: ["app store listing elements", "Google Play store listing", "product page optimization"],
    category: "Conversion Optimization",
    answer: "An app store product page has two jobs: help the app rank in search and convince visitors to install. On the App Store, the app name, subtitle and keyword field affect search, while the icon, screenshots, preview video, ratings and promotional text drive conversion. On Google Play, the title and descriptions affect search, and the icon, feature graphic, screenshots, video and ratings drive conversion. Optimize ranking fields and the first visible creatives first.",
    sections: [
      s("Two jobs: ranking and conversion", "Every element on a product page either helps the app appear in search, helps visitors decide to install, or both. Knowing which is which tells you where to spend effort.", "Search fields are limited and powerful; creatives decide whether impressions turn into installs. Our [ASO guide](/blog/app-store-optimization-guide/) explains how both feed rankings."),
      s("App name and title", "The App Store app name and the Google Play title are the strongest ranking fields and the first words users read. Both allow up to 30 characters. Combine the brand with the most important keyword where it reads naturally.", "See [app title naming strategy](/blog/app-title-naming-strategy/) and the [character limits cheat sheet](/blog/app-store-character-limits-cheat-sheet/)."),
      s("Subtitle and short description", "The App Store subtitle (30 characters) is indexed and appears under the name in search. The Google Play short description (80 characters) is indexed and appears near the top of the listing.", "Use them to state the main benefit with a secondary keyword. See [subtitle formulas](/blog/app-store-subtitle-formulas/) and [short description writing](/blog/google-play-short-description-writing/)."),
      s("Keyword field (App Store only)", "The App Store's hidden 100-character keyword field adds search terms users never see. Use commas without spaces, avoid repeating words already in the name or subtitle, and skip plurals and the app category name.", "See our [App Store keyword field](/blog/app-store-keyword-field/) guide."),
      s("Long description", "On Google Play, the full description (up to 4,000 characters) is indexed for search, so it should use relevant keywords naturally. On the App Store, the description is not used for search ranking but still persuades readers.", "See [Google Play long description writing](/blog/google-play-long-description-writing/)."),
      s("Icon", "The icon appears everywhere: search results, charts, the home screen. It must be recognisable at small sizes and stand out against competitors. Icon tests can move conversion significantly.", "See [app icon A/B testing](/blog/app-icon-ab-testing-guide/)."),
      s("Screenshots", "Screenshots are the main conversion element. The first two or three appear in search results on the App Store, so they must communicate the core benefit at a glance with clear captions.", "See [first three screenshots strategy](/blog/first-three-screenshots-strategy/) and [screenshot sizes](/blog/app-store-screenshot-sizes/)."),
      s("Preview video and feature graphic", "App previews on the App Store autoplay muted in some places; the first seconds must show the app in action. Google Play uses a promo video and a feature graphic that appears in some layouts.", "See [preview video first seconds](/blog/preview-video-first-seconds/) and [feature graphic](/blog/feature-graphic-google-play/)."),
      s("Ratings and reviews", "The star rating and rating count appear in search results and on the page, and recent reviews appear lower down. Both stores also show AI-generated review summaries for many apps.", "See [how app ratings are calculated](/blog/how-app-ratings-are-calculated/) and [AI review summaries](/blog/ai-review-summaries-app-store-google-play/)."),
      s("Promotional text and what's new", "The App Store's promotional text (170 characters) can change without a new app version and is ideal for timely messages. Release notes show what changed and signal an active app.", "See [promotional text](/blog/promotional-text-app-store/) and [what's new release notes](/blog/whats-new-release-notes-aso/)."),
      s("In-app events and promotional content", "App Store in-app events and Google Play promotional content appear on the product page and can show in search and browse. They give users a timely reason to install or return.", "See [in-app events](/blog/in-app-events-aso-strategy/) and [Google Play promotional content](/blog/google-play-promotional-content/)."),
      s("Privacy and safety sections", "App Store privacy labels and Google Play's data safety section show what data the app collects. Clear, minimal data collection can reassure cautious users.", "See [privacy labels and data safety](/blog/privacy-labels-data-safety-conversion/)."),
      s("Custom pages", "Custom product pages on the App Store and custom store listings on Google Play let you show different versions of the page to different audiences, such as an ad campaign or a country.", "See [custom product pages](/blog/custom-product-pages-ios/) and [custom store listings](/blog/google-play-custom-store-listings-guide/)."),
      s("The order to optimize", "Start with name, subtitle and keyword field or Google Play title and short description, then the icon and first screenshots, then ratings, then the remaining assets. Test creatives with native A/B tools.", "Use our [ASO checklist](/blog/app-store-optimization-checklist-2026/) to work through each element."),
    ],
    steps: [
      ["Audit every element", "List each field and creative and its current state."],
      ["Fix ranking fields first", "Name, subtitle, keyword field or title and descriptions."],
      ["Strengthen icon and first screenshots", "They decide most installs."],
      ["Improve ratings", "Prompt satisfied users and reply to reviews."],
      ["Test and refresh", "Use native A/B tests and timely promotional assets."],
    ],
    examples: [
      ["Subtitle", "The best app ever", "Budget planner for couples", "A benefit with a keyword ranks and converts."],
      ["First screenshot", "Login screen.", "Main benefit with a short caption.", "Visitors decide in seconds."],
      ["Promotional text", "Never updated.", "Seasonal message updated monthly.", "Fresh messages support conversion."],
    ],
    playbook: ["Separate ranking and conversion elements", "Optimize indexed fields", "Lead with strong creatives", "Protect ratings", "Use events and promo text", "Test continuously"],
    metrics: ["Impressions", "Product page views", "Conversion rate", "Keyword rankings", "Average rating"],
    faqs: [
      ["What elements are on an App Store product page?", "App name, subtitle, icon, screenshots, preview videos, description, promotional text, ratings and reviews, privacy details, in-app events and more."],
      ["Which elements affect App Store search ranking?", "Mainly the app name, subtitle and keyword field, plus performance signals such as downloads and ratings."],
      ["Is the App Store description indexed?", "It is not used for search ranking, but it still persuades users."],
      ["Which Google Play elements affect ranking?", "The title, short description and full description, plus performance and quality signals."],
      ["What is the most important conversion element?", "Usually the icon and first screenshots, along with the rating."],
      ["Can I change promotional text without an update?", "Yes, App Store promotional text can be changed without a new app version."],
    ],
    related: ["app-store-optimization-guide", "first-three-screenshots-strategy", "app-store-keyword-field", "app-store-conversion-rate-optimization"],
    serviceLinks: ["/services/app-store-optimization/", "/services/creative-ab-testing/"],
  }),
  P({
    slug: "linkedin-marketing-for-apps",
    title: "LinkedIn Marketing for Apps: Reach Professionals and B2B Users",
    seoTitle: "LinkedIn Marketing for Apps: B2B and Pro User Growth",
    description: "Use LinkedIn to grow a professional or B2B app: founder content, company pages, ads, employee advocacy and measurement, with examples and common mistakes.",
    primaryKeyword: "LinkedIn marketing for apps",
    secondaryKeywords: ["LinkedIn ads for apps", "B2B app marketing", "promote app on LinkedIn"],
    category: "App Marketing",
    answer: "LinkedIn works best for apps whose users are professionals: productivity, B2B SaaS companions, recruiting, finance and learning apps. Grow there with founder and team posts that share useful insights, a company page with clear product updates, and LinkedIn ads targeted by job title, industry or company size. Send traffic to a landing page or store listing that speaks to professionals, and measure installs and activation, not likes.",
    sections: [
      s("Who LinkedIn is right for", "LinkedIn reaches people in a work mindset. Apps that help them do their jobs, manage careers, learn skills or run businesses fit naturally.", "Consumer entertainment apps rarely perform well there; see [mobile app marketing strategy](/blog/mobile-app-marketing-strategy/) for choosing channels."),
      s("Founder and team content", "Posts from founders and team members usually reach more people than company page posts. Share lessons learned, data from building the product, customer stories and practical tips related to the problem your app solves.", "Consistency matters more than polish: regular, useful posts build an audience over months."),
      s("Company page", "Keep the company page complete, with a clear description, link to the app or website, and regular updates on releases and customer results.", "Use the same company description everywhere, as recommended in our [ASO and AI search discoverability](/blog/aso-and-ai-search-discoverability/) guide."),
      s("LinkedIn ads", "LinkedIn ads can target by job title, function, seniority, industry and company size. This precision suits B2B apps, though costs per click are often higher than on other networks.", "Start with a small test, measure cost per activated user, and compare with other channels in [app user acquisition strategies](/blog/app-user-acquisition-strategies/)."),
      s("Where to send traffic", "Many professionals browse LinkedIn on desktop, so a landing page with clear store badges and a QR code often works better than a direct store link.", "See [app landing page best practices](/blog/app-landing-page-best-practices/)."),
      s("Employee advocacy", "Team members sharing product updates expands reach to their networks. Make it easy with short suggested posts, but let people write in their own voice.", "Authentic posts perform better than copied text."),
      s("Video and documents", "Short product demos and carousel-style document posts showing how the app solves a problem can perform well. Keep them focused on outcomes.", "Reuse the same messages in your store screenshots to keep the story consistent."),
      s("Communities and comments", "Thoughtful comments on posts from people in your target audience build visibility without ads. Join relevant conversations rather than pitching.", "Relationships built there often lead to partnerships and press."),
      s("Measuring results", "Track clicks, landing page visits, store visits, installs and activation from LinkedIn using UTM parameters and attribution where possible. Likes and impressions are early signals only.", "See [mobile measurement partners compared](/blog/mobile-measurement-partners-compared/)."),
      s("Connecting LinkedIn and ASO", "Professional users may search the store for your brand after seeing posts. Make sure your app ranks first for its name and that screenshots speak to professional outcomes.", "See [B2B SaaS mobile app ASO](/blog/b2b-saas-mobile-app-aso/)."),
      s("Common mistakes", "Common mistakes include posting only promotional content, using company pages instead of personal voices, sending desktop users to a mobile store page, and judging success by likes.", "Another is targeting ads too broadly, which wastes LinkedIn's main strength."),
      s("A worked example: a meeting notes app", "A meeting notes app's founder posts weekly about running better meetings, with short clips of the app. A LinkedIn ad campaign targets operations managers at mid-sized companies, linking to a landing page with a QR code.", "Installs from LinkedIn are fewer than from other channels, but activation and paid conversion are much higher."),
    ],
    steps: [
      ["Confirm audience fit", "Professionals using the app for work or careers."],
      ["Post founder content weekly", "Share useful insights and product stories."],
      ["Complete the company page", "Clear description and links."],
      ["Test targeted ads", "Job titles, industries and company size."],
      ["Measure activation", "Track installs and paid conversion from LinkedIn."],
    ],
    examples: [
      ["Post", "Download our app now!", "Three changes that cut our meetings by 30 minutes, and the tool we built for it.", "Useful content earns attention."],
      ["Ad landing", "Direct App Store link for desktop users.", "Landing page with QR code and store badges.", "Matches how people browse LinkedIn."],
      ["Metric", "Post likes.", "Activated users from LinkedIn.", "Value matters more than engagement."],
    ],
    playbook: ["Check audience fit", "Lead with founder voices", "Keep the company page current", "Target ads precisely", "Use landing pages", "Measure downstream value"],
    metrics: ["Click-through rate", "Landing page conversion", "Installs from LinkedIn", "Activation rate", "Cost per activated user"],
    faqs: [
      ["Is LinkedIn good for app marketing?", "Yes for apps used by professionals or businesses; less so for general consumer apps."],
      ["Do LinkedIn ads work for apps?", "They can for B2B and professional apps, with precise targeting, though costs are often higher."],
      ["Should I post from a personal or company account?", "Both, but personal posts from founders and team often reach more people."],
      ["Where should LinkedIn ads send users?", "Often a landing page with store badges and a QR code, since many users are on desktop."],
      ["How do I measure LinkedIn results?", "Use UTM links and attribution to track installs and activation."],
      ["How often should I post?", "Regularly, such as weekly, with useful content rather than constant promotion."],
    ],
    related: ["b2b-saas-mobile-app-aso", "mobile-app-marketing-strategy", "app-landing-page-best-practices", "app-user-acquisition-strategies"],
    serviceLinks: ["/services/paid-user-acquisition/"],
  }),
  P({
    slug: "x-twitter-marketing-for-apps",
    title: "X (Twitter) Marketing for Apps: Build Buzz, Community and Installs",
    seoTitle: "X (Twitter) Marketing for Apps: A Practical Guide",
    description: "Use X (Twitter) to grow an app: building in public, launch threads, replies, creators and ads, plus how to track installs and avoid common mistakes.",
    primaryKeyword: "Twitter marketing for apps",
    secondaryKeywords: ["X marketing for apps", "promote app on Twitter", "build in public"],
    category: "App Marketing",
    answer: "X (formerly Twitter) works well for apps that appeal to tech, gaming, finance, crypto, creator or developer audiences. Grow with consistent posts from the founder or team, building in public, launch threads with demos, fast and helpful replies, and partnerships with creators. Use ads selectively. Link to a landing page or store listing that matches the post, and track installs with UTM links.",
    sections: [
      s("Which apps suit X", "X rewards timely, conversational content. Apps for tech-savvy users, developers, traders, gamers and creators often find early adopters there.", "Use it alongside other channels from our [app marketing strategy](/blog/mobile-app-marketing-strategy/)."),
      s("Building in public", "Sharing progress, metrics, mistakes and design decisions while building attracts followers who care about the product. They become early testers and launch supporters.", "Be honest; audiences notice inflated claims quickly."),
      s("Launch threads", "A launch thread explains the problem, shows the app in a short video or GIF, lists key features and links to the store. Pin it to your profile during launch week.", "Coordinate it with other launch channels, as in our [Product Hunt launch](/blog/product-hunt-app-launch/) guide."),
      s("Replies and conversations", "Replying helpfully to people discussing the problem your app solves builds visibility. Answer questions, share tips and mention the app only when it truly helps.", "Fast, friendly replies to users mentioning your app build trust publicly."),
      s("Customer support on X", "Users often complain publicly. Quick, constructive replies can turn frustration into goodwill and prevent negative store reviews.", "See [app review management](/blog/app-review-management/) for consistent tone across channels."),
      s("Creators and influencers", "Creators with engaged audiences in your niche can introduce your app credibly. Give them early access and let them share honest impressions.", "See [influencer marketing for mobile apps](/blog/influencer-marketing-for-mobile-apps/)."),
      s("Visual content", "Short videos and GIFs showing the app solving a problem outperform text-only posts for product announcements.", "Reuse winning clips in your store preview videos and ads."),
      s("Ads on X", "X ads can drive app installs with targeting by interests, keywords and follower lookalikes. Test small budgets and judge on activated users.", "Compare channels in [app user acquisition strategies](/blog/app-user-acquisition-strategies/)."),
      s("Links and landing", "Link to the store directly on mobile-focused posts, or to a landing page that detects the device. Match the message of the post to the first screenshots.", "See [deep linking](/blog/deep-linking-and-deferred-deep-links/)."),
      s("Measuring results", "Track link clicks, installs and activation using UTM parameters and attribution. Engagement alone does not show business impact.", "Watch for branded search increases in store analytics after viral posts."),
      s("Common mistakes", "Common mistakes include posting only promotions, ignoring replies, inconsistent posting, and arguing with critics.", "Another is chasing viral moments without a product ready to retain new users."),
      s("A worked example: a trading journal app", "A founder shares weekly lessons from building a trading journal app and short clips of features. A launch thread with a demo video reaches traders who share it.", "Installs spike, branded store searches rise, and the founder answers questions in replies for a week, collecting feature requests."),
    ],
    steps: [
      ["Check audience fit", "Tech, finance, gaming, creators or developers."],
      ["Build in public", "Share progress and lessons regularly."],
      ["Plan a launch thread", "Problem, demo video, features and link."],
      ["Reply quickly", "Support users and join conversations."],
      ["Track installs", "UTM links and activation, not just likes."],
    ],
    examples: [
      ["Launch post", "We launched! Download now.", "Thread: the problem, a 20-second demo, three features, link.", "Showing beats telling."],
      ["Complaint", "No reply.", "Quick reply with a fix and thanks.", "Public support builds trust."],
      ["Content mix", "Only promotions.", "Lessons, tips, demos and occasional promotion.", "Value keeps followers."],
    ],
    playbook: ["Build in public", "Launch with a demo thread", "Reply helpfully", "Partner with creators", "Test ads carefully", "Measure installs"],
    metrics: ["Profile visits", "Link clicks", "Installs from X", "Activation rate", "Branded search lift"],
    faqs: [
      ["Is X good for marketing apps?", "Yes for apps with tech, finance, gaming, creator or developer audiences."],
      ["What is building in public?", "Openly sharing progress, decisions and lessons while building a product."],
      ["Should I run X ads for my app?", "Test small budgets and judge them on activated users."],
      ["How do I track installs from X?", "Use UTM links, attribution tools and store analytics."],
      ["How should I handle complaints on X?", "Reply quickly and helpfully, then follow up privately if needed."],
      ["What content performs best?", "Short demos, honest lessons and useful tips usually perform well."],
    ],
    related: ["mobile-app-marketing-strategy", "product-hunt-app-launch", "influencer-marketing-for-mobile-apps", "app-growth-hacking-strategies"],
    serviceLinks: ["/services/paid-user-acquisition/"],
  }),
  P({
    slug: "app-launch-press-release",
    title: "How to Write an App Launch Press Release That Journalists Actually Read",
    seoTitle: "App Launch Press Release: Template and Tips",
    description: "Write an app launch press release that gets coverage: structure, headline, quotes, assets, timing, pitching journalists, and a reusable template with examples.",
    primaryKeyword: "app launch press release",
    secondaryKeywords: ["app press release template", "press release for new app", "app PR"],
    category: "App Marketing",
    answer: "An effective app launch press release has a clear news headline, a first paragraph that states who launched what and why it matters, a short explanation of the problem and solution, a quote from the founder, key details such as platforms, price and availability, and links to a press kit with screenshots and video. Send it with a short personal pitch to journalists who cover your category, timed before the launch date.",
    sections: [
      s("Do you need a press release?", "A press release gives journalists the facts in a standard format and creates a public record of your launch. It works best when combined with personal pitches to relevant writers.", "It also gives AI assistants and search engines a clear, citable description of your app."),
      s("The headline", "State the news plainly: who, what and the main benefit. Avoid hype words that journalists ignore.", "For example: “MealMate launches app that plans a week of family dinners in five minutes.”"),
      s("The first paragraph", "Answer who, what, when, where and why in two or three sentences. Many readers stop here, so include the essentials.", "Mention platforms and availability, such as App Store and Google Play in the US and UK."),
      s("Problem and solution", "Explain the problem in concrete terms, ideally with a short, sourced fact, then how the app solves it. Focus on outcomes for users.", "Avoid long feature lists; pick the two or three that matter most."),
      s("The quote", "A quote from the founder should add perspective, such as why they built the app, not repeat the facts.", "Keep it human and specific."),
      s("Details and availability", "Include price, free trial, supported devices, languages and launch offers. Journalists need these to write accurately.", "Link directly to the store listings."),
      s("Press kit and assets", "Provide a press kit with logos, the app icon, screenshots, a demo video, founder photos and a short company description.", "See our [app press kit and media outreach](/blog/app-press-kit-media-outreach/) guide."),
      s("Boilerplate", "End with a short paragraph about the company, using the same one-sentence description you use on your website and profiles, plus press contact details.", "Consistent descriptions help search engines and AI assistants understand your company."),
      s("Timing and embargoes", "Pitch journalists one to two weeks before launch, offering early access under embargo if appropriate. Publish the release on launch day.", "Coordinate with your launch plan from [best time to launch an app](/blog/best-time-to-launch-an-app/)."),
      s("Pitching journalists", "Send a short personal email explaining why the story fits the journalist's beat, with the release and press kit linked. Follow up once.", "Target writers who covered similar apps rather than mass emailing."),
      s("After publication", "Share coverage on your website and social channels, and add quotes from reviews to your store listing where appropriate.", "Press coverage can lift branded searches; check store analytics during launch week."),
      s("A simple template", "Headline. Subheadline with the main benefit. First paragraph: who, what, when, where, why. Problem and solution paragraph. Founder quote. Key features (three bullets). Price and availability with store links. Press kit link. Company boilerplate. Press contact.", "Adapt it for updates and milestones, not just launches."),
      s("Common mistakes", "Common mistakes include vague headlines, long feature lists, missing links and assets, sending to irrelevant journalists, and claims you cannot support.", "Another is publishing the release with no personal outreach."),
    ],
    steps: [
      ["Write a plain news headline", "Who launched what and why it matters."],
      ["Cover the essentials first", "Who, what, when, where and why."],
      ["Add a quote and details", "Founder perspective, price and availability."],
      ["Prepare a press kit", "Icon, screenshots, video and description."],
      ["Pitch personally before launch", "Relevant journalists, with a follow-up."],
    ],
    examples: [
      ["Headline", "Revolutionary app changes everything!", "MealMate launches app that plans family dinners in five minutes.", "Specific news gets read."],
      ["Quote", "We are excited to launch.", "I built this after spending every Sunday planning meals for three kids.", "Human stories stand out."],
      ["Pitch", "Mass email to 500 outlets.", "Personal note to 20 writers who cover family tech.", "Relevance earns replies."],
    ],
    playbook: ["Lead with clear news", "Keep it concise", "Provide assets", "Pitch personally", "Time it before launch", "Reuse coverage"],
    metrics: ["Journalist replies", "Articles published", "Referral traffic", "Branded search lift", "Installs during launch week"],
    faqs: [
      ["Do apps still need press releases?", "Yes, as a clear factual source for journalists and search engines, combined with personal pitches."],
      ["How long should a press release be?", "Usually one page, around 400 to 600 words."],
      ["When should I send it?", "Pitch one to two weeks before launch and publish on launch day."],
      ["What should a press kit include?", "Logos, icon, screenshots, a demo video, founder photos and a company description."],
      ["Should I use a wire service?", "It can help distribution, but personal pitches to relevant journalists usually matter more."],
      ["Can a press release help ASO?", "Coverage can raise branded searches and installs, which support visibility."],
    ],
    related: ["app-press-kit-media-outreach", "best-time-to-launch-an-app", "product-hunt-app-launch", "app-launch-aso-checklist"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "app-affiliate-marketing",
    title: "Affiliate Marketing for Apps: How to Launch a Program That Drives Quality Installs",
    seoTitle: "Affiliate Marketing for Apps: Setup and Best Practices",
    description: "Launch an app affiliate program: commission models, tracking, recruiting partners, fraud prevention, store rules and measuring partner quality.",
    primaryKeyword: "affiliate marketing for apps",
    secondaryKeywords: ["app affiliate program", "mobile app affiliates", "pay per install affiliate"],
    category: "Paid Acquisition",
    answer: "An app affiliate program pays partners, such as bloggers, creators, comparison sites and publishers, for installs, sign-ups or purchases they drive. Choose a commission tied to value, such as a paid subscription rather than an install, track conversions with deep links and attribution, recruit relevant partners, and watch closely for fraud. Make sure incentives never break store rules on fake or incentivised installs.",
    sections: [
      s("How app affiliate programs work", "Affiliates promote your app to their audience with tracked links. When users install and complete a qualifying action, the affiliate earns a commission.", "It is performance-based, so you pay for results rather than impressions."),
      s("Choosing what to pay for", "Paying per install is simple but attracts low-quality traffic and fraud. Paying for sign-ups, first purchases or paid subscriptions aligns partners with value.", "Use your [LTV calculation](/blog/mobile-app-ltv-calculation/) to set sustainable commissions."),
      s("Commission models", "Common models include a fixed amount per conversion, a percentage of first payment, or recurring revenue share for subscriptions. Recurring share motivates partners to send users who stay.", "Keep terms simple so partners understand them."),
      s("Tracking", "Use deep links that survive the store install and attribute the conversion to the affiliate. Mobile measurement partners and affiliate platforms support this.", "See [deep linking](/blog/deep-linking-and-deferred-deep-links/) and [mobile measurement partners](/blog/mobile-measurement-partners-compared/)."),
      s("Recruiting the right partners", "Look for partners whose audience matches your users: niche blogs, review sites, newsletters, YouTube creators and comparison sites. Quality matters more than reach.", "Start with a small group and expand as you learn."),
      s("Giving partners what they need", "Provide clear messaging, screenshots, demo videos, promo codes and a description of who the app is for. Partners who understand the product promote it better.", "Reuse assets from your press kit."),
      s("Fraud prevention", "Affiliate programs attract fraud: fake installs, click spamming and incentivised traffic. Monitor install-to-activation ratios, retention by partner and unusual spikes.", "Pay after a holding period so fraudulent conversions can be detected and reversed."),
      s("Store rules", "Both stores prohibit manipulating rankings with fake or incentivised installs. Make sure partners do not reward users for installing or rating the app.", "See [white hat vs black hat ASO](/blog/aso-white-hat-vs-black-hat-guidelines/)."),
      s("Subscription apps and web checkout", "Some subscription apps let affiliate traffic subscribe on the web before downloading, where store rules allow. This can simplify tracking and payouts.", "See [web-to-app funnels](/blog/web-to-app-funnels-web-checkout/)."),
      s("Measuring partner quality", "Compare partners on activation, retention, paid conversion and refunds, not just conversions. Reward the best partners with higher commissions.", "Drop partners whose users churn quickly."),
      s("Affiliates and ASO", "Affiliate traffic lands on your store listing, so conversion matters. Custom product pages can match partner messaging.", "See [custom product pages](/blog/custom-product-pages-ios/)."),
      s("Common mistakes", "Common mistakes include paying per install, launching without fraud checks, recruiting irrelevant partners, and giving partners no assets.", "Another is slow or unclear payouts, which drive good partners away."),
      s("A worked example: a budgeting app", "A budgeting app pays personal finance bloggers a share of the first year of each subscription they refer, with a 30-day holding period. Partners get screenshots, a demo video and a promo code for an extended trial.", "Two niche blogs drive users with much higher retention than paid social, and the app raises their commission."),
    ],
    steps: [
      ["Choose the paid action", "Sign-up, purchase or subscription, not just install."],
      ["Set commissions from LTV", "Fixed, percentage or recurring share."],
      ["Set up tracking", "Deep links and attribution."],
      ["Recruit relevant partners", "Match audiences to your users."],
      ["Monitor quality and fraud", "Hold payouts and compare retention by partner."],
    ],
    examples: [
      ["Commission", "Pay per install.", "Share of first-year subscription revenue.", "Aligns partners with value."],
      ["Partner choice", "Large generic coupon site.", "Niche blog read by your target users.", "Relevance beats reach."],
      ["Payouts", "Pay instantly.", "Pay after a 30-day holding period.", "Allows fraud detection."],
    ],
    playbook: ["Pay for value", "Track with deep links", "Recruit niche partners", "Equip partners", "Prevent fraud", "Reward quality"],
    metrics: ["Conversions by partner", "Activation and retention by partner", "Paid conversion", "Refunds and fraud rate", "Cost per paying user"],
    faqs: [
      ["What is app affiliate marketing?", "Paying partners for installs, sign-ups or purchases they drive through tracked links."],
      ["Should I pay per install?", "Usually no. Paying for sign-ups or purchases aligns partners with real value and reduces fraud."],
      ["How do I track affiliate installs?", "With deep links and attribution through an affiliate platform or measurement partner."],
      ["Can affiliates offer rewards for installs?", "Incentivised installs can break store rules, so prohibit them."],
      ["How do I prevent affiliate fraud?", "Monitor activation and retention by partner and hold payouts for a period."],
      ["What commission should I offer?", "Base it on lifetime value, leaving margin after the commission."],
    ],
    related: ["mobile-app-ltv-calculation", "deep-linking-and-deferred-deep-links", "app-user-acquisition-strategies", "influencer-marketing-for-mobile-apps"],
    serviceLinks: ["/services/paid-user-acquisition/"],
  }),
  P({
    slug: "podcast-advertising-for-apps",
    title: "Podcast Advertising for Apps: Host Reads, Promo Codes and Measurement",
    seoTitle: "Podcast Advertising for Apps: How to Make It Work",
    description: "Advertise an app on podcasts: choosing shows, host-read versus produced ads, scripts, promo codes and vanity URLs, measuring installs and judging lift.",
    primaryKeyword: "podcast advertising for apps",
    secondaryKeywords: ["podcast ads app installs", "host read ads", "podcast marketing app"],
    category: "Paid Acquisition",
    answer: "Podcast advertising works for apps when the show's audience matches your users and the host genuinely uses and explains the app. Host-read ads usually outperform produced spots. Because listeners cannot tap an ad, give them an easy way to act: a memorable brand name to search in the store, a vanity URL or a promo code. Measure with codes, surveys and branded search lift, not only click attribution.",
    sections: [
      s("Why podcasts can work for apps", "Podcast listeners often trust hosts and listen for long periods, so a genuine recommendation can drive strong intent.", "Results depend heavily on audience fit and how the host talks about the app."),
      s("Choosing shows", "Pick shows whose listeners match your target users by interest, profession or life stage. Smaller niche shows can outperform large general shows.", "Ask for audience data and past advertiser results where available."),
      s("Host-read versus produced ads", "Host-read ads, where the host describes the app in their own words, usually perform better than produced spots because they carry the host's credibility.", "Give hosts talking points and let them try the app first."),
      s("Writing the script", "Lead with the problem the audience has, explain how the app helps in one or two sentences, mention a simple offer and repeat how to get it.", "Keep the app name easy to spell and say."),
      s("Making it easy to act", "Listeners cannot tap, so tell them to search the app name in the App Store or Google Play, visit a short vanity URL, or use a promo code.", "Make sure your app ranks first for its name, as covered in [app title naming strategy](/blog/app-title-naming-strategy/)."),
      s("Promo codes and offer codes", "Unique codes per show help measure results and give listeners a reason to act. Subscription apps can use store offer codes.", "See [subscription offer codes](/blog/subscription-offer-codes-win-back-offers/)."),
      s("Measuring results", "Combine promo code redemptions, vanity URL visits, a “how did you hear about us” question in onboarding, and branded search lift in store analytics.", "Attribution will undercount podcast impact, so look at trends around air dates."),
      s("Testing and scaling", "Start with a few episodes on several shows, compare cost per activated user, then buy more on shows that work.", "Compare with other channels in [app user acquisition strategies](/blog/app-user-acquisition-strategies/)."),
      s("Your app's own podcast", "Some apps run their own podcast to build an audience around the problem they solve. It is slower but builds lasting trust.", "See [content and community](/blog/community-building-for-apps/)."),
      s("Store listing readiness", "Listeners who search your name land on your product page. Clear screenshots and strong ratings convert that intent.", "See [App Store conversion rate optimization](/blog/app-store-conversion-rate-optimization/)."),
      s("Common mistakes", "Common mistakes include buying broad shows with mismatched audiences, using generic produced ads, hard-to-spell app names, and judging campaigns on a single episode.", "Another is ignoring branded search lift."),
      s("A worked example: a sleep app", "A sleep app sponsors several wellness podcasts with host reads from hosts who used the app for a week. Each show has its own code for an extended trial.", "Two shows produce strong code redemptions and branded search rises after each episode, so the app buys a longer run on those shows."),
    ],
    steps: [
      ["Pick matching shows", "Audience fit over size."],
      ["Prefer host reads", "Let hosts try the app first."],
      ["Give one simple action", "Search the name, vanity URL or promo code."],
      ["Use unique codes per show", "For measurement."],
      ["Scale winners", "Compare cost per activated user."],
    ],
    examples: [
      ["Ad style", "Produced 30-second spot.", "Host shares how they used the app for a week.", "Trust drives action."],
      ["Call to action", "Visit our long website link.", "Search SleepWell in the App Store and use code CALM.", "Simple actions convert."],
      ["Measurement", "Only click attribution.", "Codes, survey answers and branded search lift.", "Podcasts are hard to click-track."],
    ],
    playbook: ["Match audiences", "Use host reads", "Make the action simple", "Track with codes", "Watch branded search", "Scale proven shows"],
    metrics: ["Promo code redemptions", "Vanity URL visits", "Branded search lift", "Survey attributions", "Cost per activated user"],
    faqs: [
      ["Do podcast ads work for apps?", "They can when the audience matches and hosts read ads authentically."],
      ["Are host-read ads better?", "Usually, because listeners trust the host's recommendation."],
      ["How do I track podcast ad installs?", "Use promo codes, vanity URLs, onboarding surveys and branded search trends."],
      ["What should a podcast ad say?", "The problem, how the app helps, a simple offer and how to get it."],
      ["How many episodes should I test?", "Several episodes across a few shows before deciding."],
      ["Does podcast advertising help ASO?", "It can increase branded searches and installs, which support visibility."],
    ],
    related: ["app-user-acquisition-strategies", "subscription-offer-codes-win-back-offers", "app-title-naming-strategy", "mobile-app-marketing-strategy"],
    serviceLinks: ["/services/paid-user-acquisition/"],
  }),
  P({
    slug: "app-marketing-plan-template",
    title: "App Marketing Plan Template: A 90-Day Plan From Pre-Launch to Growth",
    seoTitle: "App Marketing Plan Template: 90-Day Plan",
    description: "A practical 90-day app marketing plan template: goals, audience, positioning, ASO, channels, budget, launch calendar, metrics and weekly rituals you can copy.",
    primaryKeyword: "app marketing plan template",
    secondaryKeywords: ["app marketing plan", "mobile app marketing plan", "app launch plan"],
    category: "App Marketing",
    answer: "A good app marketing plan sets one measurable goal, defines the target user and positioning, gets the store listing ready, picks two or three channels to start, sets a budget and calendar, and agrees weekly metrics. Run it in three phases: 30 days of pre-launch preparation, a launch month concentrating effort, and a growth month scaling what works and cutting what does not.",
    sections: [
      s("Start with one goal", "Pick one measurable goal for 90 days, such as a number of activated users or paying subscribers, rather than downloads alone.", "Tie it to your [north star metric](/blog/north-star-metric-for-apps/)."),
      s("Define the target user", "Describe who the app is for, their problem, where they look for solutions and what words they use. This shapes keywords, messaging and channels.", "Validate assumptions with the methods in [how to validate an app idea](/blog/how-to-validate-an-app-idea/)."),
      s("Positioning", "Write one sentence: for whom, the problem, the main benefit and why your app is different. Use it consistently on the store listing, website and campaigns.", "Consistent descriptions also help AI assistants describe the app correctly."),
      s("Store listing readiness", "Prepare keywords, title, subtitle, screenshots, video and description before launch. The listing converts traffic from every channel.", "Follow the [app launch ASO checklist](/blog/app-launch-aso-checklist/)."),
      s("Choose two or three channels", "Pick channels where your target users already spend time, such as store search, creators, communities or search ads. Avoid spreading thin.", "See [app user acquisition strategies](/blog/app-user-acquisition-strategies/)."),
      s("Budget", "Split budget across creative production, paid tests and tools. Keep a reserve for scaling what works in the growth phase.", "See [app marketing budget](/blog/app-marketing-budget/)."),
      s("Phase 1: days 1 to 30, pre-launch", "Finish the listing, build a waitlist or pre-registration, prepare press and creator outreach, set up analytics and attribution, and create launch content.", "See [pre-launch ASO strategy](/blog/pre-launch-aso-strategy/)."),
      s("Phase 2: days 31 to 60, launch", "Launch early in the week, activate press, creators and communities together, run search ads on core keywords, reply to every review and fix issues fast.", "See [best time to launch an app](/blog/best-time-to-launch-an-app/)."),
      s("Phase 3: days 61 to 90, growth", "Review channel performance by activated user cost, scale the best, run the first store A/B test, start a referral loop and plan the next quarter.", "See [app growth hacking strategies](/blog/app-growth-hacking-strategies/)."),
      s("Weekly metrics", "Track impressions, conversion, installs, activation, retention and cost per activated user each week, with notes on what changed.", "See [ASO KPIs](/blog/aso-kpis-metrics/)."),
      s("Weekly rituals", "Hold a short weekly review: what moved, what we learned, what we will change. Keep a running log of tests and results.", "This turns a plan into a learning system."),
      s("Common mistakes", "Common mistakes include too many goals, too many channels, launching before the listing is ready, no analytics, and no plan after launch week.", "Another is judging channels on installs instead of activated users."),
      s("A one-page template", "Goal. Target user. Positioning sentence. Store listing checklist. Channels with owner and budget. 90-day calendar by week. Weekly metrics. Risks and contingency.", "Fit it on one page so everyone can see it."),
    ],
    steps: [
      ["Set one 90-day goal", "Activated or paying users."],
      ["Define user and positioning", "One clear sentence."],
      ["Ready the store listing", "Keywords, creatives and ratings plan."],
      ["Pick channels and budget", "Two or three channels, with a reserve."],
      ["Run three phases with weekly reviews", "Pre-launch, launch, growth."],
    ],
    examples: [
      ["Goal", "Get lots of downloads.", "2,000 activated users in 90 days.", "Measurable goals guide decisions."],
      ["Channels", "Every social network at once.", "Store search, two creators and Apple Ads.", "Focus beats spread."],
      ["Review", "Monthly check-in.", "Weekly 30-minute review with a test log.", "Faster learning."],
    ],
    playbook: ["Set one goal", "Write positioning", "Ready the listing", "Focus channels", "Run phases", "Review weekly"],
    metrics: ["Activated users", "Conversion rate", "Cost per activated user", "Retention", "Channel share of installs"],
    faqs: [
      ["What should an app marketing plan include?", "A goal, target user, positioning, store listing plan, channels, budget, calendar and metrics."],
      ["How long should a marketing plan cover?", "A 90-day plan is practical, reviewed weekly and refreshed quarterly."],
      ["When should I start marketing an app?", "Weeks before launch, with the store listing and pre-registration."],
      ["How many channels should I use?", "Start with two or three and scale what works."],
      ["What metrics matter most?", "Activated users, retention and cost per activated user."],
      ["Is ASO part of the marketing plan?", "Yes, it converts traffic from every channel and drives organic installs."],
    ],
    related: ["mobile-app-marketing-strategy", "app-marketing-budget", "pre-launch-aso-strategy", "app-launch-aso-checklist"],
    serviceLinks: ["/services/app-store-optimization/", "/services/paid-user-acquisition/"],
  }),
  P({
    slug: "app-analytics-tracking-plan",
    title: "App Analytics Tracking Plan: Events, Properties and Naming That Scale",
    seoTitle: "App Analytics Tracking Plan: Events and Naming Guide",
    description: "Build an app analytics tracking plan: which events and properties to track, naming conventions, funnels, privacy, QA and how to connect store and in-app data.",
    primaryKeyword: "app analytics tracking plan",
    secondaryKeywords: ["mobile event tracking", "analytics events naming", "tracking plan template"],
    category: "Strategy and Operations",
    answer: "A tracking plan is a shared document listing every analytics event your app sends, its properties, when it fires and why it matters. Start from the questions you need answered: activation, retention, conversion and revenue. Use one consistent naming convention, track a small set of meaningful events well, document privacy considerations, and test events before each release.",
    sections: [
      s("Why a tracking plan matters", "Without a plan, events multiply with inconsistent names and missing properties, making data hard to trust. A plan keeps product, marketing and engineering aligned.", "Reliable data is the basis for every decision in [ASO KPIs](/blog/aso-kpis-metrics/)."),
      s("Start from questions", "List the questions you need to answer: where do users drop in onboarding, which features predict retention, which channels bring paying users? Each event should help answer one.", "Avoid tracking everything just in case."),
      s("Core events", "Most apps need events for app open, sign-up, onboarding steps, the activation action, key feature usage, paywall view, trial start, purchase, subscription renewal and cancellation.", "See [app activation](/blog/app-activation-aha-moment/) for defining the activation event."),
      s("Properties", "Properties add context: plan type, price, content category, screen, source. Define allowed values so reports stay clean.", "User properties such as country, platform and acquisition channel enable segmentation."),
      s("Naming conventions", "Choose one style, such as object and action in past tense (“workout completed”, “subscription started”), and apply it everywhere. Inconsistent names are the most common analytics problem.", "Document the convention at the top of the plan."),
      s("Funnels", "Define the funnels you will watch: store visit to install (from store analytics), install to activation, activation to paid. Each step should map to an event.", "See [app store connect analytics](/blog/app-store-connect-analytics/) for the store side."),
      s("Connecting store and in-app data", "Store analytics show impressions, page views and installs; in-app analytics show behaviour after install. Attribution connects them by channel and campaign.", "See [mobile measurement partners](/blog/mobile-measurement-partners-compared/)."),
      s("Privacy", "Track only what you need, avoid sending personal data in event properties, respect consent, and reflect tracking in privacy labels and policies.", "See [privacy labels and data safety](/blog/privacy-labels-data-safety-conversion/) and [ATT](/blog/att-prompt-opt-in-rate/)."),
      s("QA before releases", "Test new and changed events on test devices before release, checking names, properties and timing. Broken tracking discovered weeks later leaves gaps you cannot fill.", "Add analytics checks to your release checklist."),
      s("Ownership", "Assign an owner for the plan who approves new events. This prevents duplicate and inconsistent tracking.", "Review the plan quarterly and remove unused events."),
      s("Tools", "Product analytics tools, attribution platforms and data warehouses each play a role. Choose tools that fit your team size.", "See [app analytics tools compared](/blog/app-analytics-tools-compared/)."),
      s("Common mistakes", "Common mistakes include tracking too many events, inconsistent naming, missing properties, sending personal data, and no QA.", "Another is tracking without a question to answer."),
      s("A simple template", "For each event: name, description, trigger, properties with allowed values, platforms, owner, and the question it answers.", "Keep it in a shared spreadsheet or tracking tool."),
    ],
    steps: [
      ["List key questions", "Activation, retention, conversion, revenue."],
      ["Define core events", "Map each to a question."],
      ["Set naming and properties", "One convention with allowed values."],
      ["Document privacy", "Track only what you need."],
      ["QA every release", "Test events before shipping."],
    ],
    examples: [
      ["Naming", "btnClick1, purchase_done, SubStart.", "button tapped, purchase completed, subscription started.", "Consistency makes data usable."],
      ["Properties", "Free-text plan names.", "plan: monthly | yearly | lifetime.", "Allowed values keep reports clean."],
      ["Scope", "200 events.", "30 well-defined events.", "Fewer, better events."],
    ],
    playbook: ["Start from questions", "Track core events", "Use one naming convention", "Define properties", "Protect privacy", "QA and review"],
    metrics: ["Event coverage of key funnels", "Tracking errors per release", "Activation rate", "Conversion by step", "Data freshness"],
    faqs: [
      ["What is an analytics tracking plan?", "A document listing every event an app tracks, with properties, triggers and purpose."],
      ["Which events should an app track?", "Sign-up, onboarding steps, activation, key features, paywall, purchases and cancellations."],
      ["What naming convention should I use?", "Any consistent one, such as object plus past-tense action."],
      ["Should I track personal data?", "Avoid sending personal data in events and respect consent rules."],
      ["How do store analytics fit in?", "They cover the funnel before install; attribution connects them to in-app data."],
      ["How often should I update the plan?", "Whenever features change, with a quarterly cleanup."],
    ],
    related: ["app-analytics-tools-compared", "aso-kpis-metrics", "app-activation-aha-moment", "mobile-measurement-partners-compared"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "ltv-cac-ratio-for-apps",
    title: "LTV to CAC Ratio for Apps: How to Calculate It and What Good Looks Like",
    seoTitle: "LTV:CAC Ratio for Apps: Calculation and Benchmarks",
    description: "Calculate the LTV to CAC ratio for a mobile app, understand payback period, set acquisition budgets, and improve it with retention, pricing and ASO.",
    primaryKeyword: "LTV CAC ratio",
    secondaryKeywords: ["LTV to CAC", "customer acquisition cost app", "payback period"],
    category: "Strategy and Operations",
    answer: "The LTV to CAC ratio compares the lifetime value of a user with the cost of acquiring them. Divide expected lifetime value per user by customer acquisition cost for the same group. A ratio around three to one is a common target for healthy growth, but payback period matters too. Improve the ratio by raising retention and monetization and by lowering acquisition cost through ASO and organic channels.",
    sections: [
      s("What LTV and CAC mean", "Lifetime value (LTV) is the revenue, or better the gross margin, a user is expected to generate over their time using the app. Customer acquisition cost (CAC) is what you spend to acquire one user or one paying user.", "See [mobile app LTV calculation](/blog/mobile-app-ltv-calculation/) for LTV methods."),
      s("How to calculate CAC", "Divide acquisition spend for a period, including ad spend and often creative and tools, by the number of new users or paying users acquired in that period.", "Calculate blended CAC (all users) and paid CAC (paid channels only) separately."),
      s("Calculating the ratio", "Divide LTV by CAC for the same cohort and definition. If LTV is measured per paying user, use CAC per paying user.", "Mixing definitions is the most common error."),
      s("What good looks like", "A ratio around three to one is often cited as healthy, meaning each user brings three times their cost. Below one means you lose money on each user; very high ratios may mean you are under-investing in growth.", "Treat these as rules of thumb and compare with your own margins."),
      s("Payback period", "Payback period is how long it takes for a user's revenue to cover their acquisition cost. Short payback reduces cash risk, especially for subscription apps with monthly billing.", "Track payback by channel to decide where to scale."),
      s("Organic installs and blended CAC", "Organic installs from store search and word of mouth lower blended CAC. Strong ASO therefore improves the ratio for the whole business.", "See [organic app installs](/blog/organic-app-installs/)."),
      s("Improving LTV", "Raise retention, improve paywall conversion, offer annual plans, reduce involuntary churn and add relevant upsells.", "See [involuntary churn](/blog/involuntary-churn-billing-retry/) and [subscription pricing](/blog/subscription-app-pricing-strategy/)."),
      s("Lowering CAC", "Improve store conversion so every paid click converts better, refresh ad creatives, focus on high-intent channels and build referral loops.", "See [App Store conversion rate optimization](/blog/app-store-conversion-rate-optimization/)."),
      s("Using the ratio to set budgets", "Scale channels with a healthy ratio and acceptable payback, and reduce channels below target. Recalculate monthly as costs and retention change.", "See [app user acquisition strategies](/blog/app-user-acquisition-strategies/)."),
      s("Segmenting the ratio", "Calculate LTV:CAC by channel, country, platform and campaign. A healthy average can hide unprofitable segments.", "Country-level differences in pricing and costs are often large."),
      s("Common mistakes", "Common mistakes include using revenue instead of margin, overestimating LTV from short data, mixing user definitions, ignoring payback, and not segmenting.", "Another is treating early estimates as fact."),
      s("A worked example: a meditation app", "A meditation app estimates 12-month gross margin per paying user and divides by paid CAC per paying user from each channel. Apple Ads has the best ratio and fastest payback; one social channel is below one.", "The team moves budget to Apple Ads and improves screenshots, lowering CAC across all channels."),
    ],
    steps: [
      ["Define LTV and CAC consistently", "Same cohort, same user definition."],
      ["Calculate by channel", "Paid and blended CAC."],
      ["Check payback period", "How long until cost is recovered."],
      ["Set targets", "A healthy ratio and acceptable payback."],
      ["Improve both sides", "Retention and pricing; conversion and creatives."],
    ],
    examples: [
      ["Definition", "LTV per paying user ÷ CAC per install.", "LTV per paying user ÷ CAC per paying user.", "Matching definitions gives real ratios."],
      ["Decision", "Scale the channel with most installs.", "Scale the channel with best ratio and payback.", "Profitability beats volume."],
      ["LTV", "Revenue.", "Gross margin after store fees.", "Margin reflects real value."],
    ],
    playbook: ["Define metrics carefully", "Segment by channel", "Track payback", "Improve retention", "Lower CAC with ASO", "Recalculate monthly"],
    metrics: ["LTV:CAC ratio", "Payback period", "Blended CAC", "Paid CAC", "Retention by cohort"],
    faqs: [
      ["What is a good LTV to CAC ratio?", "Around three to one is a common rule of thumb, adjusted for your margins and payback."],
      ["How do I calculate CAC for an app?", "Divide acquisition spend by new users or paying users acquired in the same period."],
      ["Should LTV use revenue or margin?", "Margin after store fees and costs gives a more accurate picture."],
      ["What is payback period?", "The time until a user's revenue covers their acquisition cost."],
      ["How does ASO affect LTV:CAC?", "Organic installs and higher conversion lower blended CAC."],
      ["How often should I recalculate?", "Monthly, by channel and country."],
    ],
    related: ["mobile-app-ltv-calculation", "cost-per-install-cpi-explained", "app-user-acquisition-strategies", "organic-app-installs"],
    serviceLinks: ["/services/paid-user-acquisition/", "/services/app-store-optimization/"],
  }),
];

const EXTRA = {
  "app-product-page-anatomy": [
    [
      "How search results show your page",
      "In App Store search results, users see the icon, name, subtitle, rating and the first screenshots or preview video. On Google Play, results show the icon, title, rating and sometimes the feature graphic or screenshots. Many users decide from this view without opening the full page.",
      "Design the first screenshots and name for this compact view first, then for the full page."
    ],
    [
      "Localized product pages",
      "Each element can be localized for every language and country you target. Localized names, subtitles, keywords and screenshots improve both ranking and conversion in each market.",
      "See [app store localization strategy](/blog/app-store-localization-strategy/) and [cross-localization keywords](/blog/app-store-cross-localization-keywords/)."
    ],
    [
      "Common product page mistakes",
      "Common mistakes include keyword-stuffed names, screenshots that show settings screens, outdated promotional text, ignoring the rating, and the same creatives in every country.",
      "Another is changing many elements at once, which makes results impossible to read."
    ],
    [
      "Key takeaways",
      "Ranking fields decide whether the page appears; creatives and ratings decide whether visitors install. Optimize the name and indexed text first, then the icon and first screenshots, then ratings, and test everything with the stores' own tools."
    ]
  ],
  "linkedin-marketing-for-apps": [
    [
      "Content ideas that work",
      "Useful post formats include lessons from customer conversations, before-and-after workflows, short product demos, data you collected, behind-the-scenes decisions, and answers to common questions in your field.",
      "Each post should give the reader something useful even if they never install the app."
    ],
    [
      "LinkedIn newsletters and events",
      "LinkedIn newsletters let you send articles to subscribers' notifications and email. Live events and webinars let you demonstrate the app to an interested audience.",
      "Both build a relationship over time, which suits considered B2B decisions."
    ],
    [
      "Retargeting",
      "LinkedIn's website retargeting can show ads to people who visited your landing page but did not install. Use a clear reminder of the main benefit and an offer if you have one.",
      "Keep frequency moderate to avoid fatigue."
    ],
    [
      "Partnerships",
      "Co-host content with complementary companies or communities that serve the same professionals. Joint webinars and posts reach new audiences with built-in trust.",
      "Partners often share results and customer stories you can reuse."
    ],
    [
      "A 30-day LinkedIn starter plan",
      "Week one: complete the company page and write three founder posts about the problem. Week two: publish a short demo video and comment daily on posts from target users. Week three: launch a small ad test to one job title. Week four: review installs and activation from LinkedIn and decide what to continue.",
      "This keeps effort small while producing data to judge the channel."
    ],
    [
      "Key takeaways",
      "LinkedIn suits apps for professionals. Founder voices, useful posts, precise ads and landing pages built for desktop browsing work best. Judge the channel on activated and paying users, not likes."
    ],
    [
      "LinkedIn for recruiting and career apps",
      "Job search, recruiting and learning apps can reach candidates and hiring managers directly. Share career advice, salary insights from your own data where you can support it, and success stories from users who found jobs or new skills.",
      "These topics are highly shareable among professionals and build trust in the app."
    ]
  ],
  "x-twitter-marketing-for-apps": [
    [
      "Posting rhythm",
      "Post regularly, mixing tips, progress updates, demos and replies. Consistency over months matters more than single viral posts.",
      "Schedule key announcements for when your audience is most active."
    ],
    [
      "Communities and Spaces",
      "X Communities group people around topics, and live audio Spaces let founders talk with users directly. Both build relationships and surface feedback.",
      "Host a Space around launches or major updates."
    ],
    [
      "Profile optimisation",
      "Your profile should say what the app does, link to the store or landing page, and pin your best demo or launch post.",
      "Use the same app description you use elsewhere so the story stays consistent."
    ],
    [
      "Handling negative attention",
      "Criticism on X spreads fast. Respond calmly, acknowledge real issues, explain fixes and avoid arguments.",
      "Track recurring complaints and feed them into your product roadmap and [review management](/blog/app-review-management/)."
    ],
    [
      "Turning followers into users",
      "Offer followers early access, beta invites or launch codes. They often become your first reviewers and advocates.",
      "Ask them for honest store reviews after they have used the app, without offering rewards."
    ],
    [
      "Ads and organic together",
      "Promote posts that already perform well organically, since they have proven messaging. Use ads to extend reach for launches and major updates rather than for every post.",
      "Compare paid results with other channels using cost per activated user."
    ],
    [
      "A 30-day X starter plan",
      "Week one: optimise your profile and post daily about what you are building. Week two: share a short demo and reply to people discussing the problem. Week three: post a launch or update thread with video. Week four: review clicks, installs and activation, and decide what to keep.",
      "Small, consistent steps show whether X fits your audience."
    ],
    [
      "Key takeaways",
      "X rewards consistent, honest and timely posting. Build in public, launch with demo threads, reply quickly, partner with creators and judge results on installs and activation."
    ],
    [
      "Measuring brand interest",
      "Track mentions of your app name, follower growth from your target audience, and branded searches in App Store Connect and Play Console. Rising branded search after posts shows that X is building awareness even when links are not clicked.",
      "Combine these signals with installs from tagged links for a complete picture of the channel's impact over time. Report them monthly alongside other channels so decisions are based on comparable numbers."
    ],
    [
      "Questions to ask before investing",
      "Are our target users active on X? Can the founder or team post consistently? Do we have demos worth sharing? How will we measure installs and activation from the channel?",
      "If most answers are yes, X deserves a three-month test with a clear review date."
    ]
  ],
  "app-launch-press-release": [
    [
      "Where to publish the release",
      "Publish the release on your website's press page so journalists and search engines can find it, and link to it from your [media kit](/media-kit/). Wire services can add distribution but rarely replace personal pitches.",
      "Keep older releases online as a record of milestones."
    ],
    [
      "Press releases for updates and milestones",
      "Major updates, funding, partnerships, new markets and notable user milestones are also news. Use the same structure for each, with a clear headline and facts.",
      "Each release adds to the public record that AI assistants use to describe your company; see [GEO and AEO for mobile apps](/blog/geo-aeo-for-mobile-apps/)."
    ],
    [
      "Coordinating with your store listing",
      "Make sure your store listing is ready before journalists visit: updated screenshots, a clear description and a strong first impression.",
      "See the [app launch ASO checklist](/blog/app-launch-aso-checklist/) and [first three screenshots strategy](/blog/first-three-screenshots-strategy/)."
    ],
    [
      "Measuring coverage",
      "Track articles published, referral traffic, store visits and installs during launch week, and branded search in store analytics.",
      "See [ASO KPIs](/blog/aso-kpis-metrics/) for store-side measurement."
    ],
    [
      "Writing for AI and search",
      "Clear facts, consistent company descriptions and specific numbers you can support make a release easy for search engines and AI assistants to quote accurately.",
      "Avoid vague superlatives that cannot be verified."
    ],
    [
      "Key takeaways",
      "Lead with plain news, keep the release short and factual, supply a complete press kit, pitch relevant journalists personally before launch, and publish the release on your own site so search engines and AI assistants can cite it."
    ],
    [
      "Press releases in other languages",
      "If you launch in several markets, translate the release and pitch local journalists in their language. Local angles, such as a local founder story or market-specific features, improve the chance of coverage.",
      "Localized releases also help local search and AI answers describe the app accurately in each language."
    ],
    [
      "Questions journalists ask",
      "Journalists want to know why the app matters now, who it is for, what makes it different, and whether there is a story behind it, such as a founder's experience or a new trend. Answer these in the pitch email, not only in the release."
    ]
  ],
  "app-affiliate-marketing": [
    [
      "Affiliate platforms and networks",
      "Affiliate platforms handle tracking, partner management and payouts. Some networks also bring a marketplace of publishers. Choose based on mobile tracking support and your volume.",
      "Check that the platform integrates with your attribution setup."
    ],
    [
      "Promo codes as tracking",
      "Unique promo codes per partner provide a simple tracking method that survives cross-device journeys, and give users a reason to act.",
      "Subscription apps can use store offer codes; see [subscription offer codes](/blog/subscription-offer-codes-win-back-offers/)."
    ],
    [
      "Partner agreements",
      "Write clear terms covering what counts as a conversion, commission, payout timing, holding periods, prohibited traffic and brand guidelines.",
      "Clear rules prevent disputes and fraud."
    ],
    [
      "Content partners and SEO",
      "Review sites and comparison articles that rank in search can send steady affiliate traffic for years. Help them with accurate information and updates.",
      "Accurate third-party content also improves how AI assistants describe your app."
    ],
    [
      "A worked example of fraud detection",
      "An app notices one affiliate's installs rising sharply while activation stays near zero. Holding payouts gives time to investigate, which reveals click spamming. The partner is removed and the conversions reversed before payment.",
      "Monitoring activation by partner caught the problem that install counts alone would have hidden."
    ],
    [
      "Key takeaways",
      "Pay affiliates for valuable actions, track with deep links and codes, recruit niche partners, give them good assets, and protect the program with holding periods and quality checks. Never allow incentivised installs."
    ],
    [
      "Scaling the program",
      "Once a few partners prove profitable, recruit similar ones, offer top performers higher commissions and exclusive offers, and add new content types such as video reviews.",
      "Grow carefully, keeping quality checks in place as volume increases."
    ],
    [
      "Affiliate programs for different app types",
      "Finance and subscription apps often suit content and comparison partners. Games may suit creators and streamers. Shopping apps may suit cashback and deal sites, with care to avoid incentivised installs.",
      "Match the partner type to how your users choose apps in your category, and review the rules for each partner type before launch."
    ],
    [
      "Questions to ask before launching",
      "What action will we pay for? What can we afford per action? How will we track it across install? How will we detect fraud? Which ten partners would we approach first? Write the answers into the partner agreement.",
      "Clear answers make the program profitable from the start."
    ]
  ],
  "podcast-advertising-for-apps": [
    [
      "Buying options",
      "You can buy podcast ads directly from hosts, through networks that sell many shows, or through programmatic audio platforms. Direct deals with niche hosts often give the best authenticity.",
      "Programmatic buys scale reach but usually lack host endorsement."
    ],
    [
      "Episode timing",
      "Pre-roll ads play before the episode, mid-roll during it and post-roll at the end. Mid-roll host reads usually get the most attention.",
      "Ask hosts where the read will appear and how long it will be."
    ],
    [
      "Evergreen versus dynamic insertion",
      "Some ads are recorded into the episode permanently and keep playing to future listeners; others are inserted dynamically for a time period. Evergreen reads can keep driving installs long after release.",
      "Ask which type you are buying and price accordingly."
    ],
    [
      "Creative testing",
      "Test different openings, offers and calls to action across shows. Give hosts a few angles and compare code redemptions.",
      "Share learnings across hosts to improve future reads."
    ],
    [
      "Seasonality",
      "Some categories perform better at certain times, such as fitness in January. Align podcast campaigns with your app's seasonal demand.",
      "See the [app seasonality calendar](/blog/app-seasonality-aso-calendar/)."
    ],
    [
      "Key takeaways",
      "Choose shows by audience fit, use authentic host reads, make the action simple, give each show its own code, and measure with codes, surveys and branded search lift. Scale the shows that bring activated users at an acceptable cost."
    ],
    [
      "Questions to ask before buying",
      "Who listens to this show and how do you know? Will the host use the app before reading? Where will the ad play in the episode? Is the read evergreen or time-limited? What results have similar advertisers seen?",
      "Clear answers reduce the risk of a wasted test."
    ],
    [
      "Working with hosts on the read",
      "Send hosts a short brief with the problem, two key benefits, the offer and the exact name to search, plus a link to try the app. Ask them to share a personal experience rather than read a script word for word.",
      "Review early reads together and refine talking points for later episodes, keeping what drove the most code redemptions."
    ],
    [
      "Podcasts and AI search",
      "Many podcasts publish transcripts and show notes, which search engines and AI assistants index. A clear mention of your app with a link in show notes can keep sending visitors and help AI tools describe your app.",
      "Ask hosts to include a link and a one-line description in the show notes."
    ]
  ],
  "app-marketing-plan-template": [
    [
      "Roles and owners",
      "Name an owner for each part of the plan: store listing, each channel, analytics, community and support. Clear ownership prevents tasks falling between people.",
      "Small teams may have one person owning several parts; write it down anyway."
    ],
    [
      "Content calendar",
      "Plan content for each week: social posts, creator collaborations, blog articles, emails and store updates. Align them with launch and seasonal moments.",
      "Reuse strong assets across channels for consistency."
    ],
    [
      "Risk planning",
      "List the main risks, such as store rejection, a critical bug, slow early reviews or an underperforming channel, with a response for each.",
      "See [app rejection recovery](/blog/app-rejection-recovery-guide/)."
    ],
    [
      "Budget checkpoints",
      "Set checkpoints, such as day 45 and day 75, where you review spend against results and decide whether to scale, change or stop each channel.",
      "Keep the reserve for channels that prove themselves."
    ],
    [
      "Planning the next quarter",
      "At day 90, write a short review: what worked, what did not, what you learned about users and channels. Use it to set the next goal and plan.",
      "Each quarter builds on real data rather than assumptions."
    ],
    [
      "A worked example: a habit tracker's 90 days",
      "A habit tracker sets a goal of 3,000 activated users. In the first month it finishes its listing and builds a waitlist through a creator partnership. Launch month combines the creator video, a Product Hunt launch and Apple Ads on habit keywords.",
      "In the growth month, Apple Ads and the creator channel show the best cost per activated user, so budget shifts there and a referral prompt is added after day seven streaks."
    ],
    [
      "Key takeaways",
      "Set one goal, write a positioning sentence, ready the store listing first, focus on two or three channels, run the plan in three phases and review weekly. Judge everything on activated users."
    ],
    [
      "Plan template fields",
      "Goal and deadline. Target user. Positioning. Store listing tasks. Channels with owner, budget and success metric. Weekly calendar. Metrics dashboard link. Risks and responses. Review dates.",
      "Copy these headings into a shared document to start."
    ],
    [
      "Adapting the plan after launch",
      "After launch, real data replaces assumptions. Move budget to channels with the best cost per activated user, update the positioning sentence if users describe the app differently, and refresh screenshots to match what users value.",
      "A plan that changes with evidence beats one followed rigidly, as long as each change is logged with its reason and result."
    ],
    [
      "Questions to ask each week",
      "What moved our goal this week? Which channel produced activated users at the best cost? What did we learn from reviews? What is the one change we will make next week?",
      "Short, repeated answers keep the plan focused."
    ]
  ],
  "app-analytics-tracking-plan": [
    [
      "Event examples by app type",
      "A fitness app might track workout started, workout completed and plan created. A marketplace might track listing viewed, message sent and order placed. A subscription app should track paywall viewed, trial started and subscription renewed.",
      "Each set focuses on the actions that show users getting value."
    ],
    [
      "Identifying users",
      "Decide how to identify users across sessions and devices, such as an internal user ID after sign-in, while respecting privacy. Consistent identity makes retention and LTV analysis accurate.",
      "Avoid using emails or phone numbers as identifiers in analytics tools."
    ],
    [
      "Server-side events",
      "Some events, such as subscription renewals and refunds, happen on the server or store side. Send them from your backend so revenue data is complete.",
      "See [involuntary churn](/blog/involuntary-churn-billing-retry/) for subscription states."
    ],
    [
      "Dashboards",
      "Build a small set of dashboards: acquisition and store funnel, activation, retention, monetization. Each should answer a recurring question.",
      "See [ASO reporting dashboard setup](/blog/aso-reporting-dashboard-setup/)."
    ],
    [
      "Documenting changes",
      "Log every change to events with the date and app version. When numbers shift, you can tell whether behaviour changed or tracking did.",
      "This log saves hours of confusion later."
    ],
    [
      "A worked example: fixing messy tracking",
      "A meditation app finds three different events for the same session start, created by different developers. It writes a tracking plan, merges them into one event with a source property, and adds QA to releases.",
      "Retention reports become consistent, and the team finally sees which sessions predict subscriptions."
    ],
    [
      "Key takeaways",
      "Start from questions, track a focused set of core events with consistent names and defined properties, connect store and in-app data, protect privacy, test every release and keep one owner for the plan."
    ],
    [
      "Questions to ask your team",
      "Which decisions did analytics change last month? Which reports do people not trust? Which events are never used? Who approves new events?",
      "The answers show where the tracking plan needs work."
    ],
    [
      "Tracking plans for small teams",
      "Small teams can start with ten to fifteen events covering sign-up, activation, key features, paywall and purchase, in a simple shared spreadsheet. Add events only when a new question needs answering.",
      "Starting small keeps data clean and makes the plan easy to maintain as the app and team grow, and saves engineering time on events nobody reads."
    ],
    [
      "Analytics and store experiments",
      "Store A/B tests change who installs. Track whether users from a winning screenshot variant activate and retain as well as before, using install date and campaign properties. Review it after every major store test, alongside retention cohorts.",
      "This confirms that higher conversion brings the right users, not just more users."
    ]
  ],
  "ltv-cac-ratio-for-apps": [
    [
      "Estimating LTV early",
      "New apps lack long histories, so estimate LTV from early retention curves and revenue per user, then update as data grows. Use conservative assumptions.",
      "Overestimated LTV leads to overspending on acquisition."
    ],
    [
      "Store fees and LTV",
      "Remember that the App Store and Google Play take a commission on most digital purchases and subscriptions, so revenue after fees is lower than gross revenue.",
      "See [App Store and Google Play fees](/blog/app-store-and-google-play-fees/)."
    ],
    [
      "Cohorts and seasonality",
      "Users acquired in different months can have very different LTV, for example during a holiday sale. Compare cohorts rather than averaging across seasons.",
      "See [cohort analysis](/blog/cohort-analysis-for-mobile-apps/)."
    ],
    [
      "Communicating the ratio",
      "Share LTV:CAC and payback with the team and investors with clear definitions and assumptions. Transparent definitions build trust in the numbers.",
      "Show trends over time rather than a single snapshot."
    ],
    [
      "When the ratio is too high",
      "A very high ratio can mean you are missing growth by spending too little. Test higher budgets on your best channels and watch whether the ratio stays healthy.",
      "Growth and efficiency need balancing, not maximising one alone."
    ],
    [
      "Key takeaways",
      "Use consistent definitions, calculate by channel and country, pair the ratio with payback period, use margin rather than gross revenue, and improve both sides: retention and pricing raise LTV, while conversion and organic growth lower CAC."
    ],
    [
      "Questions to ask",
      "Which channels pay back fastest? Which countries have the best ratio? How confident are we in our LTV estimate? What would raise LTV the most this quarter?",
      "Revisit them monthly as data matures."
    ],
    [
      "LTV:CAC for free and ad-supported apps",
      "For ad-supported apps, LTV comes from ad revenue per user over their lifetime, which depends on retention and ad yield. CAC is usually low per user, so small changes in retention can swing the ratio a lot. Share the result with the whole growth team every month.",
      "Track ad revenue per daily active user and retention together, and see [ad mediation](/blog/ad-mediation-bidding-vs-waterfall/) for raising yield without hurting retention or ratings."
    ],
    [
      "LTV:CAC for subscription apps",
      "Subscription apps can estimate LTV from trial-to-paid conversion, average plan price after store fees and expected months retained. Annual plans raise early cash and shorten payback. Recalculate after each pricing change, because plan mix and renewal rates can shift quickly.",
      "Improve the ratio by testing paywalls, offering annual plans and reducing involuntary churn."
    ]
  ]
};

export const growth04 = base.map((post) =>
  EXTRA[post.slug]
    ? { ...post, sections: [...post.sections, ...EXTRA[post.slug].map(([heading, ...paragraphs]) => ({ heading, paragraphs }))] }
    : post,
);
