import { P } from "./release";

export const stores01 = [
  P({
    slug: "huawei-appgallery-aso",
    title: "Huawei AppGallery ASO: How to Reach Users on Huawei Devices",
    seoTitle: "Huawei AppGallery ASO: Optimize Listings for Huawei Users",
    description: "Optimize an app for Huawei AppGallery: HMS Core integration, listing metadata, screenshots, reviews, promotion options, and HarmonyOS considerations.",
    primaryKeyword: "Huawei AppGallery ASO",
    secondaryKeywords: ["AppGallery optimization", "HMS Core apps", "publish app on AppGallery"],
    category: "Other App Stores",
    answer: "Huawei AppGallery is the default store on Huawei devices, many of which ship without Google Mobile Services. To succeed, make sure the app works without Google services by integrating HMS Core kits for push, payments, maps, and sign-in where needed. Then localize a keyword-led title and description, use clear screenshots, and actively manage reviews. In mainland China, new Huawei phones run HarmonyOS NEXT, which needs a native HarmonyOS app rather than an Android APK.",
    sections: [
      ["Why AppGallery matters", [
        "Since 2019, new Huawei phones sold outside China have shipped without Google Mobile Services, so Google Play is not preinstalled and apps that depend on Google APIs may fail. AppGallery became the main store for those users. Huawei's installed base remains significant in China, parts of Europe, the Middle East, Africa, and Southeast Asia, which makes AppGallery worth evaluating for apps with users in those regions.",
        "Competition inside AppGallery is often lower than on Google Play for many categories, especially outside China. A well-localized, fully functional app can reach visible positions with less effort, and Huawei runs developer campaigns and promotional placements that can amplify launches.",
      ]],
      ["Make the app work without Google services", [
        "Before thinking about rankings, check that the app runs properly on a Huawei device without Google Mobile Services. Push notifications, in-app purchases, maps, location, sign-in, and analytics commonly break. Huawei provides HMS Core kits, such as Push Kit, IAP Kit, Map Kit, Location Kit, and Account Kit, which can sit alongside Google services in one codebase with a detection layer.",
        "A broken experience on Huawei devices generates low ratings that hurt you in AppGallery and anywhere users see them. Test on real Huawei hardware, and treat the integration as part of the launch scope. Our guide to [crash rate and store ranking](/blog/crash-rate-and-store-ranking/) explains why stability is an ASO concern on every store.",
      ]],
      ["Listing metadata and keywords", [
        "AppGallery Connect lets you set the app name, a short introduction, a full description, and localized versions for each language. Search inside AppGallery relies on these text fields, so apply the same discipline as for [Google Play keyword optimization](/blog/google-play-keyword-optimization/): state the core job in the name where natural, then expand features and use cases in the introduction and description.",
        "Localize for the markets you target rather than relying on English everywhere. AppGallery users in the Middle East, Europe, and Asia search in their own languages. Our [app store localization strategy](/blog/app-store-localization-strategy/) guide explains how to prioritize languages by opportunity rather than by translation count.",
      ]],
      ["Creative, ratings, and trust", [
        "Screenshots, the icon, and an optional video drive conversion just as on other stores. Reuse your master creative, but check that screenshots do not show Google-specific features, such as Google sign-in buttons, that will not work on Huawei devices. Captions should be localized and benefit-led, following the patterns in [screenshot caption copywriting](/blog/screenshot-captions-copywriting/).",
        "Ratings and reviews are visible and influence downloads. Reply to reviews, especially those reporting Huawei-specific problems, and fix the root causes quickly. A smaller review base means each review carries more weight, so early users' experience matters more than on larger stores.",
      ]],
      ["Promotion options inside the Huawei ecosystem", [
        "Huawei offers promotional channels such as featured placements, campaigns, and Petal Ads, its advertising platform that serves ads within AppGallery and other Huawei services. Petal Search, Huawei's search app, can also surface apps. Editorial teams look for quality, localization, and HMS integration, so prepare a pitch with what makes your app relevant to Huawei users in a specific market.",
        "Measure paid and organic installs separately so you know what promotion is really adding. The logic is the same as in our guide to [ASO and paid user acquisition](/blog/aso-and-paid-user-acquisition/): paid can kick-start visibility, but organic growth depends on conversion and retention.",
      ]],
      ["HarmonyOS NEXT and mainland China", [
        "In mainland China, Huawei has moved new devices to HarmonyOS NEXT, which no longer runs Android APKs. Reaching those users requires building a native HarmonyOS app with Huawei's development tools. This is a larger investment and usually makes sense only for apps with meaningful Chinese audiences.",
        "Publishing in China also involves local requirements, such as a Chinese business entity or publisher partner, an ICP filing for the app, and privacy compliance. Our guide to [Chinese Android app stores](/blog/china-android-app-stores-aso/) covers the wider market, including other device makers' stores.",
      ]],
      ["Common AppGallery mistakes", [
        "The biggest mistake is uploading the Google Play build unchanged. The app installs, but push notifications never arrive, purchases fail, and maps are blank. Users leave one-star reviews, and the listing never recovers. Another mistake is an English-only listing in markets where most AppGallery users search in other languages.",
        "Teams also treat AppGallery as a one-time upload and forget it. Updates lag behind Google Play, review replies go unanswered, and the listing slowly falls behind competitors that maintain it. If you decide AppGallery is worth entering, assign an owner and include it in your regular release process.",
      ]],
    ],
    steps: [
      ["Test on a Huawei device without Google services", "Install the current build and check push, purchases, maps, sign-in, and analytics. List everything that breaks."],
      ["Integrate HMS Core kits where needed", "Add Push Kit, IAP Kit, Map Kit, or Account Kit behind a detection layer so one codebase serves both ecosystems."],
      ["Create the listing in AppGallery Connect", "Write a localized name, short introduction, and description from keyword research for each priority market."],
      ["Adapt creative", "Remove Google-specific features from screenshots, localize captions, and upload the icon and video."],
      ["Launch, then promote and maintain", "Reply to reviews, keep updates in sync with Google Play, and evaluate featured placements or Petal Ads."],
    ],
    examples: [
      ["Push notifications", "Rely only on Firebase Cloud Messaging.", "Detect HMS availability and use Huawei Push Kit on Huawei devices.", "Without Google services, Firebase messaging may not deliver on Huawei phones."],
      ["Screenshot", "Shows a Sign in with Google button.", "Shows email and Huawei ID sign-in options.", "Showing unavailable features creates confusion and bad reviews."],
      ["Listing language", "English-only listing for Saudi Arabia and the UAE.", "Arabic listing with right-to-left screenshots and an English secondary listing.", "Users search and decide in their own language."],
    ],
    playbook: ["Confirm the app works without Google services", "Integrate HMS Core behind a detection layer", "Localize the listing per priority market", "Remove Google-only features from creative", "Reply to Huawei-specific reviews quickly", "Keep releases in sync with Google Play"],
    metrics: ["AppGallery impressions and downloads by country", "Conversion rate from listing views", "Rating and review volume", "Crash-free users on Huawei devices", "Paid versus organic installs"],
    faqs: [
      ["Do I need HMS Core to publish on AppGallery?", "Not always, but apps that depend on Google services for push, payments, maps, or sign-in usually need HMS Core equivalents to work on Huawei devices without Google Mobile Services."],
      ["Is AppGallery worth it outside China?", "It can be for apps with users in markets where Huawei devices are common, such as parts of Europe, the Middle East, Africa, and Southeast Asia. Competition is often lower than on Google Play."],
      ["Can Android apps run on HarmonyOS NEXT?", "No. HarmonyOS NEXT, used on new Huawei devices in mainland China, requires native HarmonyOS apps. Huawei devices outside China continue to run Android-based apps from AppGallery."],
      ["Does ASO work the same on AppGallery as on Google Play?", "The fundamentals are similar: relevant text, strong creative, and good ratings. The fields, audience, and promotion options differ, so adapt rather than copy."],
    ],
    related: ["samsung-galaxy-store-aso", "china-android-app-stores-aso", "google-play-keyword-optimization", "app-store-localization-strategy"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Huawei Developers", url: "https://developer.huawei.com/consumer/en/" },
    ],
  }),
  P({
    slug: "samsung-galaxy-store-aso",
    title: "Samsung Galaxy Store ASO: Reach Galaxy Users Beyond Google Play",
    seoTitle: "Samsung Galaxy Store ASO: Optimize Apps, Games, Watch Faces",
    description: "How to publish and optimize apps, games, themes, and watch faces on Samsung Galaxy Store: metadata, creative, promotions, and when it is worth the effort.",
    primaryKeyword: "Samsung Galaxy Store ASO",
    secondaryKeywords: ["Galaxy Store optimization", "Samsung Seller Portal", "publish app on Galaxy Store"],
    category: "Other App Stores",
    answer: "Samsung Galaxy Store comes preinstalled on Galaxy phones, tablets, and watches. It is especially strong for games, watch faces, and themes, where Samsung curates collections and runs promotions. To optimize, publish through Samsung Seller Portal with localized titles and descriptions, device-appropriate screenshots, and Samsung in-app purchase if you sell digital goods. Then pitch for featured placements. For most apps it supplements Google Play rather than replacing it.",
    sections: [
      ["Where Galaxy Store fits", [
        "Galaxy Store sits alongside Google Play on Samsung devices, so most Galaxy users have access to both. Its real strengths are categories Samsung invests in: games, Galaxy Watch faces, and phone themes and icon packs. In those categories, Galaxy Store can deliver meaningful installs, especially through Samsung's promotions and curated collections.",
        "For general apps, Galaxy Store usually brings a smaller share of installs than Google Play. It can still be worthwhile when competition in your category is lower, when Samsung's audience in a market is large, or when you want an additional promotional channel. Evaluate it with the same discipline as any new channel: expected installs, effort, and maintenance.",
      ]],
      ["Publishing through Samsung Seller Portal", [
        "You publish through Samsung Seller Portal, where you register as a seller, upload the binary, and set the listing for each country and language. Samsung reviews submissions, including checks on device compatibility, so test on the Galaxy devices you target, including foldables and tablets if you support them.",
        "If you sell digital content, Samsung's in-app purchase system is typically required for Galaxy Store distribution in the same way Google Play Billing is for Play. Plan the integration early, and check Samsung's current policies on payments and commission before launch.",
      ]],
      ["Metadata and search on Galaxy Store", [
        "Galaxy Store search draws on your title, description, and tags, so use the vocabulary your users search with, in their language. Lead with the core benefit, keep the title readable, and avoid keyword stuffing, which also hurts conversion. The research method in [ASO keyword research](/blog/aso-keyword-research/) works here; just check results in Galaxy Store's own search suggestions.",
        "Localization matters because Samsung's audience is global. A localized title and description in your priority markets will usually outperform an English-only listing. For Korea, where Samsung is particularly strong, read our guide to [ASO for South Korea](/blog/aso-for-south-korea/), which also covers local stores.",
      ]],
      ["Creative for phones, foldables, and watches", [
        "Screenshots should show the app on Galaxy-style devices and highlight features that matter to Samsung users, such as foldable layouts, S Pen support, or watch integration. For watch faces, show the face on a realistic watch in several settings and lighting conditions, because buyers judge style at a glance.",
        "Themes and icon packs live or die on visual previews. Show the home screen, lock screen, and app icons together so the overall look is clear. The same creative principles apply as in our guide to [the first three screenshots](/blog/first-three-screenshots-strategy/): make the first image self-explanatory.",
      ]],
      ["Promotions and featured placements", [
        "Samsung runs regular promotions, sales, and curated collections, especially for games and watch faces. Getting featured can produce large spikes, so prepare a short pitch with your app's relevance to Galaxy users, exclusive content or offers, and evidence of quality, such as strong ratings and low crash rates.",
        "Coordinate promotions with Google Play activity rather than splitting effort randomly. If you run a seasonal campaign, update Galaxy Store creative too. Our [seasonal ASO calendar](/blog/app-seasonality-aso-calendar/) helps plan these moments across stores.",
      ]],
      ["Ratings and maintenance", [
        "Galaxy Store has its own ratings and reviews, separate from Google Play. Reply to reviews and fix device-specific issues. Because review counts are often smaller, a few negative reviews can weigh heavily on the displayed rating and on conversion.",
        "Keep releases in sync with your main Android build where possible. A Galaxy Store version that lags behind Google Play invites complaints about missing features and bugs that are already fixed elsewhere.",
      ]],
      ["A worked example: a watch face studio", [
        "A small studio sells premium watch faces on Google Play and sees steady but modest sales. It adds Galaxy Store, where watch faces are a featured category, and redesigns screenshots to show each face on a realistic Galaxy Watch in daylight and at night, with complications filled in. Titles are rewritten around style and function, such as Minimal Analog Face with Steps and Weather.",
        "The studio pitches a seasonal collection to Samsung with a Galaxy-exclusive launch week and receives a placement in a curated row. Downloads spike during the promotion and settle at a higher baseline than before, because ratings and reviews from the promotion keep the listing visible. The studio now plans a Galaxy Store release for every new collection.",
      ]],
      ["Common Galaxy Store mistakes", [
        "Developers often upload the Play build without testing on Galaxy-specific hardware, then receive reviews about broken foldable layouts or watch connectivity. Others skip Samsung's payment requirements and face rejection or removal. Both are avoidable with a short pre-launch checklist.",
        "Another mistake is listing and forgetting. Without updated creative, localized text, and responses to reviews, the listing falls behind competitors who treat Galaxy Store as a real channel, and Samsung's editors are unlikely to feature an app that looks neglected.",
      ]],
    ],
    steps: [
      ["Decide whether your category fits", "Check whether your app is a game, watch face, theme, or another category where Galaxy Store performs well, and estimate the opportunity."],
      ["Register in Samsung Seller Portal", "Create a seller account, review policies, and confirm payment and commission terms."],
      ["Test on Galaxy devices", "Check phones, foldables, tablets, and watches you support, and fix layout or connectivity issues."],
      ["Create localized listings and creative", "Write titles and descriptions per market and design screenshots that show Galaxy-relevant features."],
      ["Pitch promotions and maintain", "Prepare a featuring pitch, reply to reviews, and keep the build in sync with your main Android release."],
    ],
    examples: [
      ["Watch face screenshot", "A flat image of the face on a white background.", "The face on a realistic watch, shown in daylight, at night, and with complications active.", "Buyers judge watch faces by how they look in real use."],
      ["Featuring pitch", "Please feature our game.", "Our puzzle game launches a Galaxy-exclusive level pack, supports Fold layouts, and holds a 4.6 rating with 99.7% crash-free users.", "Specific relevance and quality signals give editors a reason to say yes."],
      ["Title", "Best Weather App Free 2026", "Brand Weather: Radar & Alerts", "A clear brand and benefit reads better and avoids spammy terms."],
    ],
    playbook: ["Prioritize games, watch faces, and themes", "Test on Galaxy-specific hardware", "Use Samsung in-app purchase where required", "Localize listings for priority markets", "Pitch for promotions with specific relevance", "Keep builds in sync with Google Play"],
    metrics: ["Galaxy Store downloads by country", "Listing conversion rate", "Rating and review count", "Installs during promotions versus baseline", "Crash-free users on Galaxy devices"],
    faqs: [
      ["Is Samsung Galaxy Store worth it?", "For games, watch faces, and themes it often is, because Samsung promotes those categories. For other apps it is usually a supplement to Google Play."],
      ["Do I need Samsung in-app purchase?", "If you sell digital content in an app distributed through Galaxy Store, Samsung's in-app purchase is typically required. Check Samsung's current policies."],
      ["Do Galaxy Store reviews affect Google Play?", "No. Each store has its own ratings and reviews."],
      ["How do I get featured on Galaxy Store?", "Build a high-quality, well-localized app, offer Galaxy-relevant features or content, and pitch Samsung with evidence of quality and relevance."],
    ],
    related: ["huawei-appgallery-aso", "aso-for-south-korea", "get-featured-app-store-google-play", "tablet-foldable-store-assets"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Samsung Galaxy Store Seller Portal", url: "https://seller.samsungapps.com/" },
    ],
  }),
  P({
    slug: "amazon-appstore-fire-tv-aso",
    title: "Amazon Appstore and Fire TV ASO: Where It Still Matters and How to Optimize",
    seoTitle: "Amazon Appstore and Fire TV ASO: Optimize Fire TV Apps",
    description: "What changed with the Amazon Appstore, where it still reaches users on Fire TV and Fire tablets, and how to optimize listings, assets, and voice discovery.",
    primaryKeyword: "Amazon Appstore ASO",
    secondaryKeywords: ["Fire TV app optimization", "Fire tablet apps", "Amazon Appstore listing"],
    category: "Other App Stores",
    answer: "Amazon ended the Amazon Appstore on non-Amazon Android devices in August 2025, and on Windows 11 earlier that year. It remains the store on Fire TV and Fire tablets, where it reaches large streaming and family audiences. To optimize, write clear titles, descriptions, and feature bullets, provide high-quality 16:9 assets for Fire TV, support remote and voice navigation, and make sign-in and trials easy on a TV screen.",
    sections: [
      ["What changed and what remains", [
        "For years, the Amazon Appstore was available as an alternative store on Android phones. Amazon ended support for the Appstore on non-Amazon Android devices on August 20, 2025, after ending the Windows Subsystem for Android and the Appstore on Windows 11 in March 2025. Apps distributed only through the Appstore on those devices lost that channel.",
        "The Appstore continues on Amazon's own devices: Fire TV streaming devices and TVs, and Fire tablets. These are substantial audiences, especially for streaming, games, kids, and family apps. Amazon has also introduced its Vega OS on some newer Fire TV devices, which uses a different app framework, so check which platforms your target devices run before you build.",
      ]],
      ["How users discover Fire TV apps", [
        "On Fire TV, discovery happens through the home screen, Find and search menus, editorial rows, and Alexa voice search. Many users never type a search; they say the app or content name to Alexa, or pick from rows of featured and recommended apps. That makes the app name, aliases, and content metadata important for voice and browse discovery.",
        "Streaming services can also integrate their catalogs so content appears in Fire TV's universal browse and search experiences, which drives deep links into the app. For video apps, this integration often matters more than the store listing itself. Our guide to [smart TV app store optimization](/blog/smart-tv-app-store-optimization/) covers similar dynamics across TV platforms.",
      ]],
      ["Listing text: title, descriptions, and feature bullets", [
        "Amazon's developer console asks for a title, short description, long description, feature bullets, and keywords. Use the title for the brand and core purpose, the short description for the main benefit, and feature bullets for scannable reasons to install. Write for people browsing on a TV screen from several feet away, where long paragraphs go unread.",
        "Keep keywords relevant and avoid competitor names, which can breach Amazon's content policies. The principles in [ASO keyword research](/blog/aso-keyword-research/) apply, but focus on content and use-case terms, such as live sports, kids cartoons, or workouts, which are how TV users think.",
      ]],
      ["Assets for a 10-foot experience", [
        "Fire TV listings need large, high-quality images, including 1920 x 1080 screenshots and background art, plus icons in the sizes the console specifies. Images are seen on large screens, so low-resolution or text-heavy assets look worse than on a phone. Show real in-app screens with clear focus states that demonstrate remote navigation.",
        "For Fire tablets, provide tablet-appropriate screenshots and consider the Amazon Kids experience if your app targets families. Content and privacy rules for children's apps are strict, so review our [kids and family app ASO](/blog/kids-family-app-aso/) guide before targeting that audience.",
      ]],
      ["Conversion on TV: sign-in, trials, and remote control", [
        "TV users abandon apps that make them type passwords with a remote. Offer sign-in by QR code or device code on a phone, and make free trials or free tiers obvious. The first screen after opening should show content, not a wall of forms.",
        "Test navigation with the Fire TV remote and voice. Every action should be reachable with the directional pad, and focus should always be visible. Poor TV usability shows up quickly in reviews, which affect both ranking and conversion. Our [app onboarding best practices](/blog/app-onboarding-best-practices/) guide covers the first-session principles that apply here too.",
      ]],
      ["Ratings, updates, and Amazon promotions", [
        "Ratings and reviews on Amazon's devices are visible and influence installs. Reply where possible and fix device-specific issues, such as playback problems on older Fire TV sticks. Keep the app updated for new Fire OS versions and device models.",
        "Amazon offers developer promotions, featured placements, and advertising options on Fire TV. If you invest in them, measure installs and retention against an organic baseline, using the approach in [attribution and organic uplift](/blog/attribution-and-organic-uplift/).",
      ]],
      ["A worked example: a fitness streaming app on Fire TV", [
        "A home workout service with strong mobile adoption launches a Fire TV app. Its first version mirrors the phone layout and requires email sign-in, and early reviews complain about typing passwords with the remote. Installs from the store are decent, but fewer than half of installers ever start a class.",
        "The team rebuilds the first screen around a row of featured classes, adds QR-code sign-in, and rewrites feature bullets around class types and durations. It also checks that Alexa recognizes the app name and common requests. Within two months, the share of installers starting a class rises sharply, ratings improve, and the app earns a spot in a fitness editorial row.",
      ]],
      ["Common Fire TV app mistakes", [
        "The most common mistake is porting a phone app to TV without redesign. Touch-first layouts, tiny text, and keyboard-heavy sign-in produce frustrated users and poor ratings. Another is assuming the Appstore still reaches all Android users, which can leave marketing plans pointing users to a store they no longer have.",
        "Teams also neglect voice. If Alexa cannot match your app's name or content, users who ask for it end up somewhere else. Test voice commands with real users and accents, and check how your app name is pronounced and recognized.",
      ]],
    ],
    steps: [
      ["Confirm your target devices", "Decide whether you target Fire TV, Fire tablets, or both, and check which operating system each target device runs."],
      ["Design for remote and voice", "Make every action reachable with the directional pad, show clear focus states, and test Alexa voice commands."],
      ["Write TV-friendly listing text", "Use a clear title, a benefit-led short description, and scannable feature bullets with content and use-case terms."],
      ["Produce 1920 x 1080 assets", "Create large screenshots and background art showing real screens with visible focus states."],
      ["Simplify sign-in and trials", "Offer QR or device-code sign-in and make free trials or tiers obvious from the first screen."],
    ],
    examples: [
      ["Sign-in", "Email and password typed with the remote.", "Scan a QR code or enter a short code at a web address on your phone.", "Typing with a remote is slow and a major cause of abandonment."],
      ["Feature bullets", "Our app has many great features for everyone.", "Live and on-demand yoga classes; 10 to 60 minute sessions; new classes every week; works with Alexa.", "Scannable bullets suit TV browsing from a distance."],
      ["Screenshot", "Phone UI scaled to 16:9 with tiny text.", "Native TV layout at 1920 x 1080 with a highlighted focus state.", "TV users judge whether the app is built for the big screen."],
    ],
    playbook: ["Confirm which Amazon devices you target", "Design for remote, focus, and voice", "Write scannable TV-friendly listing text", "Provide full HD 16:9 assets", "Offer QR or device-code sign-in", "Integrate content with Fire TV browse where possible"],
    metrics: ["Installs by device type", "First-session completion on TV", "Sign-in success rate", "Rating and review count", "Voice-initiated launches where measurable"],
    faqs: [
      ["Is the Amazon Appstore shutting down?", "Amazon ended the Appstore on non-Amazon Android devices in August 2025 and on Windows 11 in March 2025. It continues on Fire TV and Fire tablets."],
      ["Is Fire TV worth building for?", "For streaming, fitness, games, and family apps, often yes. Fire TV has a large audience and discovery through voice and browse can drive installs."],
      ["What size are Fire TV screenshots?", "Fire TV uses 1920 x 1080 images for screenshots and background art. Check Amazon's console for current icon and asset sizes."],
      ["How do users find Fire TV apps?", "Through home screen rows, search, editorial collections, and Alexa voice requests. Content integration can also surface apps in universal browse."],
    ],
    related: ["smart-tv-app-store-optimization", "kids-family-app-aso", "video-streaming-app-aso", "app-onboarding-best-practices"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Amazon Appstore developer portal", url: "https://developer.amazon.com/apps-and-games" },
    ],
  }),
  P({
    slug: "china-android-app-stores-aso",
    title: "ASO for China: How to Publish and Rank in Chinese Android App Stores",
    seoTitle: "ASO for China: Chinese Android App Stores Explained",
    description: "How to reach users in mainland China: major Android stores by device maker, ICP filing, software copyright, game licenses, local ASO, and App Store China.",
    primaryKeyword: "ASO for China",
    secondaryKeywords: ["Chinese Android app stores", "publish app in China", "App Store China ASO"],
    category: "Other App Stores",
    answer: "Google Play is not available in mainland China, so Android apps reach users through device makers' stores, such as Huawei, Honor, Xiaomi, OPPO, and vivo, and through platforms like Tencent MyApp. Publishing usually requires a Chinese business entity or a local publisher, an ICP filing for the app, a software copyright certificate in many stores, privacy compliance, and a license for monetized games. Each store has its own listing rules, review process, and paid promotion options.",
    sections: [
      ["How the Chinese app market is structured", [
        "With Google Play unavailable, Android distribution in mainland China is split across stores run by phone makers and internet companies. Device makers' stores, including those of Huawei, Honor, Xiaomi, OPPO, and vivo, are preinstalled on their phones and together reach most Android users. Tencent's MyApp (Yingyongbao) and other platforms add further reach.",
        "The App Store also operates in China with Apple's standard tools, but with local legal requirements. Because there are many Android stores, each with its own developer console, review process, and promotion system, launching in China is an operational project as much as a marketing one.",
      ]],
      ["Legal and documentation requirements", [
        "Most stores require apps to be published by a Chinese entity, so foreign companies typically set up a local entity or work with a licensed publisher. Since 2023, apps in China need an ICP filing with the Ministry of Industry and Information Technology, and the App Store in China has required filing information as well. Many Android stores also ask for a software copyright certificate.",
        "Privacy compliance under China's Personal Information Protection Law is strictly enforced, including rules on permission requests, privacy policy pop-ups at first launch, and SDK disclosures. Games that monetize need an approval number from the National Press and Publication Administration and must implement real-name registration and anti-addiction systems for minors. Work with local legal advisers before committing to a launch date.",
      ]],
      ["Local ASO: language, keywords, and creative", [
        "Keyword research must be done in Simplified Chinese, using local data sources and store search suggestions. Users often search with short, colloquial phrases, and pinyin input means near-homophones matter. Translation of your Western keyword list will miss most real queries. Local ASO tools provide store-specific data that Western tools rarely cover.",
        "Creative also needs culturalization. Visual styles, color meanings, celebrity and festival references, and social proof work differently in China. Our guide to [app store creative culturalization](/blog/culturalization-app-store-creatives/) explains how to adapt beyond translation, and the [localization strategy](/blog/app-store-localization-strategy/) guide covers prioritization.",
      ]],
      ["Store-by-store differences", [
        "Each store has its own listing fields, screenshot specifications, review standards, and ranking signals. Some emphasize downloads and active users, others weight ratings or editorial selection more heavily. Review times and the strictness of privacy checks also vary, and rejections often cite specific permission or pop-up issues.",
        "Plan a matrix of stores with their requirements, owners, and update cadence. Keeping a dozen listings current is real work, so prioritize the stores that match your users' devices. A simpler path is to start with the largest device-maker stores and expand based on results.",
      ]],
      ["Paid promotion inside stores", [
        "Chinese app stores offer paid placements, including search ads and cost-per-download promotions, as well as first-launch programs that give featured exposure in exchange for releasing first or exclusively on a store for a period. These programs can drive large initial volumes, especially for games.",
        "Measure promoted installs carefully against organic baselines and retention, because inexpensive installs that churn on day one do not build a business. The principles in [paid vs organic user acquisition](/blog/paid-vs-organic-user-acquisition-balance/) apply in China too, even though the channels differ.",
      ]],
      ["App Store China specifics", [
        "On the App Store in China, ASO uses the same fields as elsewhere: name, subtitle, keyword field, and screenshots. Simplified Chinese metadata and localized creative are essential. Character-based languages fit more meaning into the 30-character name and subtitle and the 100-byte keyword field, although each Chinese character uses several bytes in the keyword field.",
        "Apple applies Chinese legal requirements in this storefront, including filing information and, for games, license numbers. Apps can be removed if requirements are not met. Our [App Store keyword field](/blog/app-store-keyword-field/) guide explains byte limits and allocation.",
      ]],
      ["A worked example: a language app enters China", [
        "A language-learning app with a strong global presence plans a China launch. It partners with a licensed local publisher, completes the ICP filing and software copyright, and replaces Google sign-in and push with local equivalents. It also rewrites the privacy flow to show the policy at first launch with clear consent, as stores require.",
        "Local research shows that users search for exam names and short phrases such as daily English practice rather than the brand's global tagline. The team builds store-specific listings around those terms, launches on the three largest device-maker stores first, and joins one store's first-launch program. Retention by store guides where it expands next.",
      ]],
      ["Common mistakes when entering China", [
        "Foreign teams often underestimate documentation and assume a translated listing is enough. They submit to stores without an ICP filing or software copyright, face rejection after rejection, and lose months. Others integrate Google services that do not work in China, leaving push, maps, and sign-in broken.",
        "Another mistake is treating China as a single store. Launching on one device maker's store reaches only that brand's users. Successful launches plan for several stores, local SDKs for push and payments, and a local team or partner who can respond to store feedback quickly.",
      ]],
    ],
    steps: [
      ["Decide on entity or publisher", "Set up a Chinese entity or sign with a licensed local publisher who can submit to stores."],
      ["Complete legal requirements", "Prepare the ICP filing, software copyright, privacy policy, and, for games, the publishing license and anti-addiction systems."],
      ["Replace unavailable services", "Swap Google services for local SDKs for push, maps, payments, and sign-in, and test on Chinese devices."],
      ["Localize ASO for each store", "Research Simplified Chinese keywords per store, culturalize creative, and prepare store-specific assets."],
      ["Launch in priority stores and measure", "Start with the largest device-maker stores, evaluate first-launch programs, and track retention by store."],
    ],
    examples: [
      ["Keyword research", "Translate the English keyword list into Chinese.", "Research store search suggestions and local tools in Simplified Chinese for each store.", "Real Chinese queries are colloquial and store-specific; translation misses them."],
      ["Push notifications", "Firebase Cloud Messaging for all users.", "Device-maker push channels and local push SDKs.", "Google services are not available on most Android phones in mainland China."],
      ["Launch scope", "Publish on one store and wait.", "Publish on the top device-maker stores with a store-by-store requirements matrix.", "Each store reaches mainly its own brand's users."],
    ],
    playbook: ["Secure a local entity or publisher", "Complete ICP filing and software copyright", "Obtain a game license if you monetize a game", "Replace Google services with local SDKs", "Research keywords per store in Simplified Chinese", "Measure retention by store, not just downloads"],
    metrics: ["Downloads and active users by store", "Day 1 and day 7 retention by store", "Review approval rate and time", "Cost per retained user for paid placements", "Rating by store"],
    faqs: [
      ["Is Google Play available in China?", "No. Android users in mainland China install apps from device makers' stores and other local platforms."],
      ["Do I need a Chinese company to publish apps in China?", "Most Android stores require a Chinese entity or a licensed local publisher. Apps also need an ICP filing."],
      ["What is required for games in China?", "Monetized games need an approval number from the National Press and Publication Administration, plus real-name registration and anti-addiction systems for minors."],
      ["Does App Store ASO in China use the same fields?", "Yes, the App Store uses the same name, subtitle, keyword field, and screenshots, but Chinese legal requirements and local keyword research apply."],
    ],
    related: ["huawei-appgallery-aso", "aso-for-traditional-chinese-markets", "culturalization-app-store-creatives", "app-store-localization-strategy"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Huawei Developers", url: "https://developer.huawei.com/consumer/en/" },
      { label: "App Store Connect Help", url: "https://developer.apple.com/help/app-store-connect/" },
    ],
  }),
  P({
    slug: "smart-tv-app-store-optimization",
    title: "Smart TV App Store Optimization: Roku, Fire TV, Google TV, Apple TV, and More",
    seoTitle: "Smart TV App Store Optimization: Roku, Google TV, Apple TV",
    description: "How to get a TV app discovered on Roku, Fire TV, Google TV, Apple TV, Samsung, and LG: listings, artwork, content integration, voice search, and conversion.",
    primaryKeyword: "smart TV app store optimization",
    secondaryKeywords: ["Roku channel store optimization", "Apple TV app store", "Google TV app discovery"],
    category: "Other App Stores",
    answer: "Smart TV app discovery depends less on keyword search and more on home screen placement, content integration, voice search, and editorial rows. Optimize each platform's listing with clear names and descriptions and large 16:9 artwork, then integrate your catalog with universal search and browse where offered, such as Google TV, Apple's TV app, and Fire TV. Finally, remove friction on the TV itself with QR sign-in, obvious trials, and remote-friendly navigation.",
    sections: [
      ["Why TV discovery is different", [
        "People rarely type long searches with a TV remote. They browse home screen rows, use voice search, follow recommendations, and open apps they already know. Platforms promote apps through featured rows, curated collections, and partnerships, and content-level search often matters more than app-level search, because users look for a show or a sport rather than an app.",
        "This shifts the ASO playbook. Store listings still matter for conversion and for the users who do search, but integrating your content into the platform's universal browse and search experiences can drive far more launches. Brand recognition from other channels also carries over, because many TV installs start with someone looking for a service they already know.",
      ]],
      ["The major TV platforms", [
        "Roku has its own store and a large share of US streaming devices. Amazon Fire TV uses the Amazon Appstore, covered in our [Amazon Appstore and Fire TV ASO](/blog/amazon-appstore-fire-tv-aso/) guide. Google TV and Android TV use Google Play with TV-specific listing assets. Apple TV uses the tvOS App Store. Samsung and LG smart TVs run their own platforms, Tizen and webOS, with their own app stores.",
        "Each platform has its own developer program, technical requirements, review process, and listing format. Prioritize by where your audience watches. Analytics from your web or mobile product, plus market data on TV platform share in your countries, will usually point to two or three platforms worth doing well rather than six done poorly.",
      ]],
      ["Listings and artwork for the big screen", [
        "TV listings use large, landscape artwork: screenshots, background images, banners, and posters, typically at 16:9 and full HD or higher. Android TV requires a 1280 x 720 banner, Apple TV uses 1920 x 1080 or 3840 x 2160 screenshots and top shelf imagery, and other platforms have their own sizes. Follow each platform's specifications exactly, because poorly sized art looks especially bad on a large screen.",
        "Keep text minimal and readable from across a room. Show real in-app screens with content, not abstract branding, and make sure screenshots reveal what users can watch or do. For details on TV assets in the Apple ecosystem, see our [App Store screenshot sizes](/blog/app-store-screenshot-sizes/) guide, and for Google TV, our [Google Play asset specs](/blog/google-play-screenshot-sizes-and-assets/).",
      ]],
      ["Content integration and voice search", [
        "Google TV, Apple's TV app, Fire TV, and Roku offer ways for streaming services to surface their content in universal browse, watch lists, and search results, with deep links straight into playback. Implementing these integrations requires catalog feeds and deep link support, but it can make your content discoverable to users who never open the store.",
        "Voice search depends on clear app and content names. If your app's name is hard to pronounce or easily confused with common words, voice assistants may struggle to match it. Test voice queries on each platform and consider how users will naturally ask for your content. Deep links also matter outside TV; see our [deep linking guide](/blog/deep-linking-and-deferred-deep-links/).",
      ]],
      ["Conversion on the TV: sign-in, trials, and navigation", [
        "TV users quit when asked to type credentials with a remote. Offer sign-in with a QR code or a short device code entered on a phone, and support platform account linking where available. Show content before asking for anything, and make trial terms and pricing clear on the first screen.",
        "Remote navigation must be flawless: logical focus order, visible focus states, and every action reachable with the directional pad. Poor TV usability generates low ratings that hurt both ranking and conversion. Our [onboarding best practices](/blog/app-onboarding-best-practices/) apply, adapted for a lean-back experience.",
      ]],
      ["Measuring TV app performance", [
        "TV platforms provide varying analytics, and attribution is harder than on mobile. Combine store metrics, in-app analytics, and campaign data, and track activation by platform: the share of installs that sign in and start playback. For subscription services, compare trial conversion and retention by platform.",
        "Use consistent definitions across platforms so you can compare them. Our guide to [ASO KPIs](/blog/aso-kpis-metrics/) offers a framework that adapts well to TV, with playback starts or first sessions as the activation event.",
      ]],
      ["Common TV app mistakes", [
        "The most common mistake is stretching a mobile app onto a TV with minimal changes. Tiny text, touch-based controls, and keyboard-heavy sign-in drive users away. Another is treating the store listing as the only lever and ignoring content integration, which is where much of the discovery happens.",
        "Teams also launch on every platform at once with thin resources, then struggle to maintain quality and updates everywhere. A focused launch on the platforms where your audience watches, done well, beats a broad launch that leaves users with buggy apps and unanswered reviews.",
      ]],
    ],
    steps: [
      ["Prioritize platforms by audience", "Use your user data and market share in your countries to pick two or three TV platforms to launch on first."],
      ["Build for the remote", "Design focus states, directional navigation, and lean-back layouts, and test with real remotes."],
      ["Create platform-specific listings", "Produce artwork at each platform's required sizes and write short, clear descriptions."],
      ["Integrate content discovery", "Implement catalog feeds and deep links for universal browse and search on platforms that support them."],
      ["Remove sign-in friction and measure", "Offer QR or device-code sign-in, then track installs, sign-ins, and playback starts by platform."],
    ],
    examples: [
      ["Store artwork", "Logo on a gradient with a slogan.", "A full HD screen showing the content library with the caption Live sports and on-demand replays.", "TV users want to see what they can watch."],
      ["Sign-in", "Type your email and password.", "Visit example.com/tv on your phone and enter code K4X9.", "Device-code sign-in removes the hardest step on TV."],
      ["Content discovery", "Rely on users searching for the app name.", "Publish a catalog feed so shows appear in universal search with deep links into playback.", "Most TV searches are for content, not apps."],
    ],
    playbook: ["Pick platforms by audience share", "Design for remote navigation first", "Follow each platform's artwork specs exactly", "Integrate with universal browse and search", "Offer QR or device-code sign-in", "Track activation by platform"],
    metrics: ["Installs by platform", "Sign-in completion rate", "Playback starts per install", "Trial conversion by platform", "Rating by platform"],
    faqs: [
      ["How do people find apps on smart TVs?", "Mostly through home screen rows, voice search, recommendations, and content search, rather than typed app searches."],
      ["What image sizes do TV app stores use?", "Most use 16:9 artwork at full HD or higher. Android TV needs a 1280 x 720 banner, and Apple TV uses 1920 x 1080 or 3840 x 2160 screenshots. Check each platform's specifications."],
      ["Is ASO important for TV apps?", "Yes, for conversion and for users who search, but content integration, voice, and editorial placement often drive more discovery."],
      ["Which TV platform should I launch on first?", "The one where your audience watches most. User data and regional platform share usually narrow it to two or three."],
    ],
    related: ["amazon-appstore-fire-tv-aso", "video-streaming-app-aso", "deep-linking-and-deferred-deep-links", "app-onboarding-best-practices"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Android Developers: Android TV", url: "https://developer.android.com/tv" },
      { label: "Apple: tvOS", url: "https://developer.apple.com/tvos/" },
      { label: "Roku Developer", url: "https://developer.roku.com/" },
    ],
  }),
];
