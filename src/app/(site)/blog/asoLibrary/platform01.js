import { P } from "./release";

export const platform01 = [
  P({
    slug: "how-to-publish-app-on-google-play",
    title: "How to Publish an App on Google Play: The Complete Step-by-Step Guide",
    seoTitle: "How to Publish an App on Google Play (Step-by-Step Guide)",
    description: "Publish an Android app on Google Play step by step: developer account, testing rules, store listing, policy forms, release tracks, and review times.",
    primaryKeyword: "how to publish an app on Google Play",
    secondaryKeywords: ["publish app on Play Store", "Google Play Console setup", "upload app to Play Store"],
    category: "Platform Guides",
    answer: "To publish on Google Play, create a Play Console developer account (a one-time $25 fee plus identity verification), create the app, upload a signed Android App Bundle, and complete the store listing and the App content declarations. Then test on a testing track and roll out to production. New personal accounts must first run a closed test with at least 12 testers for 14 days before they can apply for production access.",
    sections: [
      ["Choose the right account type before anything else", [
        "Play Console offers personal and organization developer accounts, and the choice matters more than most first-time publishers expect. An organization account needs a D-U-N-S number and verified business details, but it is exempt from the closed-testing requirement for new personal accounts. Google also expects apps in certain regulated categories, such as financial services, health, and VPNs, to come from organization accounts. If you are a company, register as one from the start rather than migrating later.",
        "Whichever type you choose, the developer name appears publicly on your listing and in search, so treat it as a brand asset. Use the name users will recognize, keep contact details accurate, and expect identity verification to take anywhere from a few days to a couple of weeks. Starting verification early is the simplest way to avoid a launch-week bottleneck.",
      ]],
      ["Prepare a build Google Play will accept", [
        "New apps must be uploaded as Android App Bundles (AAB), not APKs, and most teams enroll in Play App Signing so Google manages the distribution key while you keep an upload key. Pick your package name carefully, because it is permanent once you publish: it becomes the app's ID in the Play Store URL and cannot be changed or reused.",
        "Google also enforces a minimum target API level for new apps and updates, typically within a year of the latest Android release. Check the current requirement in the Android developer documentation before you build, and run the pre-launch report on a testing track. It installs your app on real devices and flags crashes, accessibility problems, and security warnings before reviewers or users find them.",
      ]],
      ["Build a store listing that ranks and converts", [
        "The main store listing has three text fields: an app name of up to 30 characters, a short description of up to 80, and a full description of up to 4,000. All three are indexed for search on Google Play, so they deserve real [Google Play keyword research](/blog/google-play-keyword-optimization/) rather than a last-minute paste from your website. The short description is especially valuable because it sits right under the screenshots; our guide to [writing the Google Play short description](/blog/google-play-short-description-writing/) covers proven patterns.",
        "Graphics carry most of the conversion weight. You need a 512 x 512 icon, a 1024 x 500 feature graphic, and at least two screenshots, with at least four high-resolution screenshots recommended so the app is eligible for more promotional surfaces. Our [Google Play screenshot sizes and asset specs](/blog/google-play-screenshot-sizes-and-assets/) guide lists every dimension, and the [feature graphic guide](/blog/feature-graphic-google-play/) explains how to design the banner that frames the listing.",
      ]],
      ["Complete the App content declarations honestly", [
        "Before you can publish, Play Console asks you to complete the App content section: a privacy policy URL, app access instructions for reviewers, an ads declaration, the IARC content rating questionnaire, target audience and content, and the Data safety form. Apps in some categories, such as finance, health, news, or government, have extra declarations. Each answer must match what the app really does, and mismatches are one of the most common reasons for rejection.",
        "Treat the Data safety form as a product document, not a checkbox. It is shown to users on the listing and can affect conversion, and it must account for data collected by third-party SDKs as well as your own code. Our guide to [privacy labels and Data safety](/blog/privacy-labels-data-safety-conversion/) explains how to keep it accurate, and the [age rating guide](/blog/age-rating-and-content-ratings-aso/) shows how content ratings affect reach.",
      ]],
      ["Use testing tracks, including the 12-tester rule", [
        "Play Console has three testing tracks. Internal testing reaches up to 100 testers and is available almost immediately, which makes it ideal for fast QA. Closed testing reaches a list of email addresses or a Google Group, and open testing lets anyone join from the store listing. Builds on testing tracks can still be reviewed, so keep them policy-compliant.",
        "If you created a personal developer account after November 13, 2023, you must run a closed test with at least 12 testers who stay opted in for at least 14 continuous days before you can apply for production access. You then answer questions about the test and what you changed. Our dedicated guide to the [Google Play closed testing requirement](/blog/google-play-closed-testing-requirement/) explains how to recruit testers who give useful feedback instead of simply meeting the count.",
      ]],
      ["Release to production and understand review", [
        "When you create a production release, you choose the countries and regions, add release notes, and decide whether to roll out to everyone or start with a percentage. A staged rollout limits the damage from a bad build, and our guide to [staged rollouts and ratings protection](/blog/version-rollout-ratings-protection/) shows how to use percentages safely. Managed publishing lets you hold an approved release and publish it at a time you choose, which is useful for coordinated launches.",
        "Google says most reviews complete within a few days but some can take seven days or longer, especially for new developer accounts, sensitive permissions, or apps in regulated categories. Plan a buffer of at least a week for the first submission, and read our guide to [app review times](/blog/app-store-review-time/) for ways to avoid delays.",
      ]],
      ["Why first submissions get rejected", [
        "The most common problems are predictable. Reviewers cannot log in because test credentials are missing or expired. The Data safety answers do not match what an SDK collects. The listing uses restricted words such as best or number one in the title, or the screenshots show functions the app does not have. Sensitive permissions such as SMS, call log, background location, or all-files access are requested without an approved use case.",
        "Each of these is avoidable with a pre-submission checklist. Walk through the app as a reviewer would, starting from a fresh install, and confirm that every claim in the listing is visible in the product within a minute or two. Our [white hat vs black hat ASO guide](/blog/aso-white-hat-vs-black-hat-guidelines/) covers the metadata practices that keep listings safe.",
      ]],
      ["What to do in the first 30 days after launch", [
        "Publishing is the start of ASO, not the end. In the first month, watch Android vitals for crash and ANR rates, read every review, and compare store listing visitors with installers in the [Google Play Console store performance](/blog/google-play-console-store-performance/) reports. Stability problems at launch can depress both ratings and visibility, which is why [crash rate is an ASO metric](/blog/crash-rate-and-store-ranking/).",
        "Once you have steady traffic, run [store listing experiments](/blog/store-listing-experiments-google-play/) on the icon, screenshots, and short description, one change at a time. Use the [app launch ASO checklist](/blog/app-launch-aso-checklist/) to make sure nothing important was skipped during the rush to ship.",
      ]],
    ],
    steps: [
      ["Register and verify a developer account", "Choose personal or organization, pay the one-time $25 registration fee, and complete identity verification. Organizations need a D-U-N-S number, so request one early if you do not have it."],
      ["Create the app and lock the package name", "In Play Console, create the app, set the default language, and confirm whether it is an app or game and free or paid. Double-check the package name in your build, because it cannot be changed after publishing."],
      ["Upload a signed App Bundle to internal testing", "Enroll in Play App Signing, upload the AAB to the internal testing track, and review the pre-launch report for crashes and warnings before inviting anyone else."],
      ["Finish the store listing and App content", "Write the name, short description, and full description, upload the icon, feature graphic, and screenshots, then complete every App content declaration, including Data safety and the content rating."],
      ["Run the required closed test if it applies", "New personal accounts need 12 or more testers opted in for 14 continuous days. Collect feedback, fix issues, and document what you changed for the production access questions."],
      ["Create a production release with a staged rollout", "Select countries, add release notes, start with a small rollout percentage, and expand only when crash rates and early reviews look healthy."],
    ],
    examples: [
      ["App name", "Best Budget App - #1 Free Money Tracker", "Pennywise: Budget & Bill Planner", "Google Play metadata policy restricts terms like best, #1, and free in titles. A brand plus a clear keyword phrase is compliant and still descriptive."],
      ["App access instructions", "Login required.", "Use demo account review@example.com / password Review2026. Sample data is preloaded. The premium tab is unlocked for this account.", "Reviewers who cannot reach the core features will reject the app. Specific credentials and notes remove the guesswork."],
      ["Short description", "The ultimate app for all your needs. Download now!", "Track spending, plan bills, and get reminders before payments are due.", "It states concrete benefits with natural keywords instead of vague hype or a call to action."],
    ],
    playbook: ["Register as an organization if you are a company", "Start identity verification at least two weeks before launch", "Lock the package name and enroll in Play App Signing", "Write metadata from keyword research, not the website", "Complete Data safety including all SDK data collection", "Plan for the 14-day closed test on new personal accounts", "Launch with a staged rollout and watch vitals daily"],
    metrics: ["Time from first submission to approval", "Pre-launch report crash and warning count", "Store listing visitor to installer conversion", "User-perceived crash and ANR rates", "Average rating in the first 30 days"],
    faqs: [
      ["How much does it cost to publish an app on Google Play?", "Registering a developer account costs a one-time $25 fee. There is no annual renewal. Google takes a service fee on paid apps and in-app purchases, covered in our guide to [App Store and Google Play fees](/blog/app-store-and-google-play-fees/)."],
      ["How long does Google Play review take?", "Many reviews finish within a few days, but Google says some take seven days or longer. New accounts, sensitive permissions, and regulated categories tend to take longest, so plan at least a week for the first submission."],
      ["Do I need 12 testers to publish on Google Play?", "Only if you have a personal developer account created after November 13, 2023. Those accounts must run a closed test with at least 12 opted-in testers for 14 continuous days before applying for production access. Organization accounts are exempt."],
      ["Can I change my app's package name after publishing?", "No. The package name is permanent and cannot be reused, even if you unpublish the app. Changing it means publishing a new app with new reviews and rankings."],
      ["Do I need a privacy policy for a Google Play app?", "Yes. Google requires a privacy policy link in Play Console, and its contents must match your Data safety declarations and what the app and its SDKs actually do."],
    ],
    related: ["how-to-publish-app-on-app-store", "google-play-closed-testing-requirement", "google-play-keyword-optimization", "app-launch-aso-checklist"],
    serviceLinks: ["/google-play-store-optimization/", "/services/app-store-optimization/"],
    sources: [
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
      { label: "Android Developers: Target API level requirements", url: "https://developer.android.com/google/play/requirements/target-sdk" },
      { label: "Google Play Developer Program Policy", url: "https://play.google/developer-content-policy/" },
    ],
  }),
  P({
    slug: "how-to-publish-app-on-app-store",
    title: "How to Publish an App on the Apple App Store: A Step-by-Step Guide",
    seoTitle: "How to Publish an App on the App Store (Step-by-Step)",
    description: "Publish an iOS app on the Apple App Store: Developer Program enrollment, App Store Connect setup, metadata, privacy details, TestFlight, and App Review.",
    primaryKeyword: "how to publish an app on the App Store",
    secondaryKeywords: ["submit app to App Store", "App Store Connect submission", "Apple Developer Program"],
    category: "Platform Guides",
    answer: "To publish on the App Store, enroll in the Apple Developer Program ($99 per year), create an app record in App Store Connect, and upload a build from Xcode. Then complete the metadata, screenshots, App Privacy details, and age rating, test with TestFlight, and submit for App Review. Apple says most submissions are reviewed within 24 hours. You can release automatically, manually, or with a phased release.",
    sections: [
      ["Enroll in the Apple Developer Program", [
        "You can enroll as an individual or as an organization. Individuals publish under their personal legal name, while organizations publish under the company name and need a D-U-N-S number plus authority to bind the company to Apple's agreements. The membership costs $99 per year, and Apple offers fee waivers for eligible nonprofits, accredited educational institutions, and government entities in some regions.",
        "The seller name on your listing comes from this enrollment, so choose deliberately. A company enrolled as an individual will show a person's name, which can undermine trust in categories like finance or health. If you distribute in the European Union, you will also need to declare your trader status under the Digital Services Act. Apps without that declaration can be removed from EU storefronts.",
      ]],
      ["Create the app record in App Store Connect", [
        "In App Store Connect, create a new app with its platform, primary language, bundle ID, and an internal SKU. The bundle ID must match your Xcode project and cannot be changed after you upload a build. The app name you enter here reserves the name across the store, and a name can only be held by one app at a time.",
        "Pick your primary and optional secondary category now, because category affects where you appear in browsing and charts. Our [category selection framework](/blog/app-category-selection-aso/) walks through the trade-off between competition and relevance. Set pricing and availability by country, and decide whether the app is part of a universal purchase across iPhone, iPad, Mac, and Apple TV.",
      ]],
      ["Write metadata that earns search relevance", [
        "The App Store indexes a short list of fields: the app name (up to 30 characters), the subtitle (up to 30), and the hidden keyword field (up to 100 bytes). The description is not used as a search keyword source in the same way, but it still persuades visitors who scroll. Our guides to the [App Store keyword field](/blog/app-store-keyword-field/), [subtitle formulas](/blog/app-store-subtitle-formulas/), and the [App Store character limits cheat sheet](/blog/app-store-character-limits-cheat-sheet/) show how to use every character.",
        "Promotional text (up to 170 characters) appears above the description and can be updated without a new app version, which makes it the best place for timely messages. Name, subtitle, keywords, and screenshots change only with a new version submission, so get them right before launch with proper [ASO keyword research](/blog/aso-keyword-research/).",
      ]],
      ["Prepare screenshots, previews, and the icon", [
        "Each localization needs at least one screenshot and supports up to ten per device size, plus up to three app preview videos of 15 to 30 seconds. You no longer need a separate set for every iPhone size: providing the largest required size lets App Store Connect scale it down for smaller devices. Our [App Store screenshot sizes guide](/blog/app-store-screenshot-sizes/) lists the exact pixel dimensions.",
        "The first three screenshots do most of the work because they appear in search results. Treat them as a storyboard, as covered in [App Store screenshot design](/blog/app-store-screenshot-design/), and provide a 1024 x 1024 icon without transparency that remains legible at small sizes. See our [app icon sizes guide](/blog/app-icon-sizes-guide/) for current requirements, including dark and tinted appearances.",
      ]],
      ["Complete App Privacy, age rating, and compliance", [
        "App Privacy details, often called privacy nutrition labels, describe what data you and your third-party partners collect and whether it is used to track users. They appear on your product page, so accuracy matters for both compliance and conversion. If your app tracks users across other companies' apps or websites, you also need the App Tracking Transparency prompt, covered in our guide to the [ATT prompt and opt-in rates](/blog/att-prompt-opt-in-rate/).",
        "The age rating questionnaire was expanded in 2025 with new 13+, 16+, and 18+ tiers, so answer it carefully. You will also answer export compliance questions about encryption and confirm content rights for any third-party material. Read our [age rating guide](/blog/age-rating-and-content-ratings-aso/) before you submit, because a rating that is higher than necessary can limit reach.",
      ]],
      ["Upload, test with TestFlight, and submit for review", [
        "Archive the app in Xcode and upload it to App Store Connect, either from Xcode or with the Transporter app. Apple periodically raises the minimum Xcode and SDK version accepted for uploads, so check current requirements before your release window. Once the build processes, you can distribute it with [TestFlight](/blog/testflight-beta-testing-guide/) to up to 100 internal testers and up to 10,000 external testers.",
        "When you submit for review, add notes and a demo account if any feature sits behind a login. Apple states that on average 90% of submissions are reviewed in under 24 hours, but complex apps or apps with guideline questions can take longer. Our explainer on the [App Store Review Guidelines](/blog/app-store-review-guidelines-explained/) covers the rules behind most rejections.",
      ]],
      ["Choose how to release", [
        "After approval, you can release immediately, release manually at a time you choose, or schedule a date. For updates, a phased release spreads automatic updates over seven days to a growing share of users with automatic updates turned on, and you can pause it if a problem appears. Anyone can still download the new version manually during the phase.",
        "Launch is when ASO measurement begins. Annotate the release date, then track impressions, product page views, and conversion in [App Store Connect Analytics](/blog/app-store-connect-analytics/). Use the [app launch ASO checklist](/blog/app-launch-aso-checklist/) to confirm the essentials, and plan your first [product page optimization](/blog/product-page-optimization-ios/) test once traffic is stable.",
      ]],
    ],
    steps: [
      ["Enroll in the Apple Developer Program", "Choose individual or organization, request a D-U-N-S number if needed, and pay the $99 annual fee. Enrollment for organizations can take several days."],
      ["Create the app record and reserve the name", "In App Store Connect, add a new app with its bundle ID, SKU, primary language, and name. Set categories, pricing, and availability."],
      ["Upload a build and test it in TestFlight", "Archive in Xcode, upload, and invite internal testers first. Add external testers after the first build passes Beta App Review."],
      ["Complete metadata, media, and privacy details", "Add the subtitle, keywords, description, screenshots, and previews for each localization, then complete App Privacy, the age rating questionnaire, and export compliance."],
      ["Submit for App Review with clear notes", "Include a working demo account, explain any non-obvious features, and list hardware or location requirements so the reviewer can test everything."],
      ["Release deliberately", "Pick manual, automatic, or scheduled release, and use phased release for updates so you can pause if crash rates rise."],
    ],
    examples: [
      ["App Review notes", "Please approve quickly.", "Demo login: review@example.com / Review2026. To see the premium workout library, tap Profile, then Subscription. Bluetooth heart-rate features need a compatible strap; a video demo is linked here.", "Reviewers need a path through every feature. Specific steps prevent guideline 2.1 rejections for incomplete information."],
      ["Subtitle", "The best app for everyone", "Meal plans for busy families", "Apple's guidelines discourage unverifiable superlatives, and a specific audience and outcome earn search relevance."],
      ["Keyword field", "recipes, recipe, meal plan, meal planner, food app", "dinner,weekly,planner,grocery,list,healthy,family,batch,prep", "Commas without spaces save bytes, and repeating words from the name or plurals wastes space Apple already covers."],
    ],
    playbook: ["Enroll as an organization if you are a company", "Reserve the app name early in App Store Connect", "Choose categories with a competition-relevance trade-off", "Write name, subtitle, and keywords from research", "Upload the largest required screenshot size per device", "Complete App Privacy and the new age rating questions", "Use phased release for every update"],
    metrics: ["Review turnaround time per submission", "Rejections by guideline number", "Impressions to product page view rate", "Product page conversion rate", "TestFlight crash reports before release"],
    faqs: [
      ["How much does it cost to publish on the App Store?", "The Apple Developer Program costs $99 per year. Apple also takes a commission on paid apps and in-app purchases, typically 15% or 30%, as explained in our guide to [App Store and Google Play fees](/blog/app-store-and-google-play-fees/)."],
      ["How long does App Store review take?", "Apple says that on average 90% of submissions are reviewed in less than 24 hours. Apps with complex features, missing information, or guideline questions can take longer, and you can request an expedited review for critical fixes."],
      ["Can I publish an iOS app without a Mac?", "Building and uploading normally requires Xcode on a Mac, although cloud build services can compile and upload on your behalf. App Store Connect itself works in any browser."],
      ["Can I change my app name after publishing?", "Yes, with a new version submission, but changes can affect brand search and rankings. Read our guide to [changing your app name](/blog/app-name-change-risks/) before you rename."],
      ["Do I need a privacy policy for an iOS app?", "Yes. Every app needs a privacy policy URL in App Store Connect, and the App Privacy details must match what your app and its third-party SDKs collect."],
    ],
    related: ["how-to-publish-app-on-google-play", "testflight-beta-testing-guide", "app-store-review-guidelines-explained", "app-store-keyword-field"],
    serviceLinks: ["/services/app-store-optimization/", "/aso-agency-usa/"],
    sources: [
      { label: "Apple Developer Program", url: "https://developer.apple.com/programs/" },
      { label: "Apple: App Review overview", url: "https://developer.apple.com/distribute/app-review/" },
      { label: "App Store Connect Help", url: "https://developer.apple.com/help/app-store-connect/" },
    ],
  }),
  P({
    slug: "app-store-review-guidelines-explained",
    title: "App Store Review Guidelines Explained: The Rules Behind Most Rejections",
    seoTitle: "App Store Review Guidelines Explained: Avoid Rejections",
    description: "A plain-English guide to Apple's App Store Review Guidelines: the five sections, the rules behind most rejections, and how to fix and prevent each one.",
    primaryKeyword: "App Store review guidelines",
    secondaryKeywords: ["App Store rejection reasons", "guideline 2.1", "guideline 4.3 spam"],
    category: "Policy and Compliance",
    answer: "Apple's App Store Review Guidelines are organized into five sections: Safety, Performance, Business, Design, and Legal. Most rejections come from a handful of rules: incomplete apps or missing demo accounts (2.1), inaccurate metadata (2.3), copycat or spam apps (4.3), thin web wrappers (4.2), digital goods sold outside in-app purchase (3.1.1), and privacy problems such as missing account deletion (5.1.1). Reading those rules before you build prevents most delays.",
    sections: [
      ["How the guidelines are organized", [
        "The guidelines open with a short introduction and then five numbered sections. Safety (1) covers objectionable content, user-generated content, kids, and physical harm. Performance (2) covers completeness, beta builds, accurate metadata, and hardware compatibility. Business (3) covers payments and in-app purchase. Design (4) covers copycats, minimum functionality, spam, and sign-in. Legal (5) covers privacy, intellectual property, and gambling.",
        "Rejection messages cite a guideline number, so learning the structure turns a confusing notice into a specific to-do. Apple updates the document several times a year, often after WWDC, and changes can affect apps that were approved before. Subscribe to the developer news feed and re-read the sections relevant to your business model after each update.",
      ]],
      ["2.1 App Completeness: the most common rejection", [
        "Guideline 2.1 requires that the submitted build is final, works, and can be fully reviewed. Crashes, placeholder text, broken links, empty screens, and features that require a login without a demo account all fall here. Apple's own transparency reporting has repeatedly listed performance and completeness issues among the top reasons apps are rejected.",
        "Prevent it by testing a fresh install on a real device, providing a working demo account with sample data, and describing any hardware, location, or account requirements in the review notes. If a feature depends on a server, confirm that the server is reachable from outside your network. A short screen recording linked in the notes can resolve questions before they become rejections.",
      ]],
      ["2.3 Accurate Metadata: your listing is reviewed too", [
        "Guideline 2.3 covers the name, subtitle, keywords, description, screenshots, and previews. Screenshots must show the app in use, not just splash screens or marketing art. Keywords must not include other apps' trademarks or irrelevant popular terms, and the name and subtitle should not be stuffed with generic phrases. References to other platforms, such as Android, are not allowed in metadata.",
        "Metadata rejections are a reminder that [white hat ASO](/blog/aso-white-hat-vs-black-hat-guidelines/) is also faster ASO. Keep claims verifiable, avoid unprovable superlatives, and make sure every feature in the screenshots exists in the build. Our guides to the [App Store keyword field](/blog/app-store-keyword-field/) and [screenshot captions](/blog/screenshot-captions-copywriting/) show how to stay persuasive within the rules.",
      ]],
      ["3.1.1 In-App Purchase and payments", [
        "If you sell digital goods or services used inside the app, such as premium features, subscriptions, or virtual currency, guideline 3.1.1 generally requires Apple's in-app purchase. Physical goods and services consumed outside the app, such as rides or groceries, use other payment methods. Reader apps, some business apps, and certain regions have exceptions, and court rulings and regulation have changed the rules on linking to external purchases in the United States and the European Union.",
        "Because this area changes often, check the current guideline text and Apple's regional pages before designing a paywall. The way you describe pricing also matters: subscription terms must be clear before purchase. Our guides to [subscription messaging](/blog/app-store-pricing-and-subscription-messaging/) and [App Store fees](/blog/app-store-and-google-play-fees/) cover the commercial side.",
      ]],
      ["4.2 and 4.3: minimum functionality and spam", [
        "Guideline 4.2 rejects apps that are little more than a repackaged website, a simple list, or a marketing brochure. Apple wants apps to offer native features and lasting value beyond what a browser provides. If your app is mostly web content, add capabilities that justify an app, such as offline access, notifications, device integrations, or personalized tools.",
        "Guideline 4.3 targets spam: many near-identical apps, template apps with only cosmetic changes, and saturated categories with nothing new. Agencies and white-label developers hit this often. Consolidate variants into a single app with in-app configuration, or publish from the client's own account, as Apple's guidelines expect for template-based apps.",
      ]],
      ["5.1 Privacy: data collection, account deletion, and tracking", [
        "Guideline 5.1.1 requires a privacy policy, permission requests that explain why data is needed, and data minimization. Since 2022, apps that let users create an account must also let them start account deletion from within the app. Requests for permissions such as location or contacts must be tied to features the user can see.",
        "Guideline 5.1.2 covers data use and sharing, including App Tracking Transparency. Apps may not require tracking consent to access features, and must not offer incentives for allowing tracking. Make sure your App Privacy details match what SDKs actually collect; inconsistencies are increasingly caught in review. See our [ATT prompt guide](/blog/att-prompt-opt-in-rate/) for compliant pre-permission screens.",
      ]],
      ["How to respond to a rejection", [
        "Read the message carefully and reply in the Resolution Center if something is unclear. Often a rejection is resolved by adding information rather than changing code, such as a demo account or an explanation of how a feature works. If you believe the reviewer misunderstood the app, explain it politely with screenshots or a video.",
        "If you disagree with a decision, you can file an appeal with the App Review Board, and you can suggest changes to the guidelines themselves. Bug-fix submissions are generally not held up for unrelated guideline issues, except legal ones. Our [app rejection recovery guide](/blog/app-rejection-recovery-guide/) covers the full diagnose, fix, and resubmit process.",
      ]],
    ],
    steps: [
      ["Read sections 2, 3, and 5 before building", "These cover completeness, payments, and privacy, which drive most rejections. Note any rules that affect your business model or data use."],
      ["Run a reviewer-style test pass", "Install the build fresh on a real device, sign in with the demo account, and open every screen shown in your screenshots."],
      ["Audit metadata against guideline 2.3", "Remove trademarks, competitor names, platform references, and unverifiable superlatives from the name, subtitle, keywords, and screenshots."],
      ["Reconcile privacy disclosures with SDKs", "List every SDK, record what it collects, and update App Privacy details and the privacy policy to match."],
      ["Write complete review notes", "Provide credentials, explain non-obvious features, and link a short video for hardware-dependent or location-dependent functions."],
    ],
    examples: [
      ["Rejection under 2.1", "Resubmit the same build with no notes.", "Add a demo account with preloaded content, explain where the subscription screen is, and attach a 60-second walkthrough video.", "Most completeness rejections are about the reviewer's access, not your code."],
      ["Metadata under 2.3", "Keywords: tiktok,instagram,capcut,editor,video", "Keywords: reels,shorts,trim,captions,transitions,templates,music,vlog", "Competitor trademarks invite rejection; feature and use-case terms are allowed and attract the same intent."],
      ["Account deletion under 5.1.1", "Email support@example.com to delete your account.", "Settings, then Account, then Delete account, with a confirmation step and a clear note about retained data.", "Apple requires apps with account creation to let users initiate deletion in the app."],
    ],
    playbook: ["Learn the five sections and their numbers", "Provide a working demo account every time", "Keep metadata free of trademarks and platform names", "Use in-app purchase for digital goods unless an exception applies", "Offer in-app account deletion", "Reconcile App Privacy details with every SDK", "Reply in the Resolution Center before resubmitting"],
    metrics: ["First-pass approval rate", "Rejections by guideline number", "Average days lost per rejection", "Share of rejections fixed without a new build"],
    faqs: [
      ["What is the most common reason for App Store rejection?", "Performance and completeness issues under guideline 2.1, such as crashes, placeholder content, broken links, and missing demo accounts, are consistently among the most frequent rejection reasons Apple reports."],
      ["Can I mention Android in my App Store listing?", "No. Guideline 2.3 does not allow references to other mobile platforms in metadata, unless there is specific interactive functionality that requires it."],
      ["Do I have to offer account deletion in my app?", "Yes, if users can create an account in your app. Apple requires that they can start account deletion from inside the app, not only by email or a website form."],
      ["How do I appeal an App Store rejection?", "Reply in App Store Connect's Resolution Center first. If you still disagree, submit an appeal to the App Review Board with a clear explanation of why the app complies."],
    ],
    related: ["app-rejection-recovery-guide", "aso-white-hat-vs-black-hat-guidelines", "how-to-publish-app-on-app-store", "app-store-review-time"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Apple: App Store Review Guidelines", url: "https://developer.apple.com/app-store/review/guidelines/" },
      { label: "Apple: App Review overview", url: "https://developer.apple.com/distribute/app-review/" },
    ],
  }),
  P({
    slug: "app-store-review-time",
    title: "How Long Does App Store and Google Play Review Take? Timelines and Fixes",
    seoTitle: "How Long Does App Store and Google Play Review Take?",
    description: "Typical App Store and Google Play review times, what slows them down, how to request an expedited review, and how to plan releases around approval.",
    primaryKeyword: "App Store review time",
    secondaryKeywords: ["Google Play review time", "how long does app review take", "expedited app review"],
    category: "Platform Guides",
    answer: "Apple says that on average 90% of App Store submissions are reviewed in less than 24 hours. Google Play reviews often finish within a few days, but Google warns that some take seven days or longer. New developer accounts, sensitive permissions, regulated categories, and incomplete review information cause most delays. Plan at least a week of buffer for launches, and use Apple's expedited review only for critical fixes.",
    sections: [
      ["What Apple and Google actually say", [
        "Apple's App Review page states that on average 90% of submissions are reviewed in less than 24 hours. In practice, simple updates are often approved within hours, while new apps, large feature changes, and apps in sensitive categories can take longer. Review times can also stretch around major holidays and right after big OS releases, when submission volume spikes.",
        "Google does not publish a typical figure in the same way. Its help center says reviews may take up to seven days or longer in exceptional cases. Updates from established accounts with a clean history usually move faster than first submissions from new accounts. Both stores review updates as well as new apps, so a policy problem can delay a routine bug fix.",
      ]],
      ["Why reviews take longer than expected", [
        "The biggest avoidable delay is missing information. If reviewers cannot log in, cannot find a feature, or need hardware they do not have, the submission is rejected or held while they ask questions. Each round trip adds a day or more. Detailed notes and a working demo account are the cheapest way to speed up review.",
        "Other delays are structural. Apps requesting sensitive Android permissions, such as SMS, call log, background location, or accessibility services, go through additional checks. Financial, health, gambling, VPN, and kids apps attract closer scrutiny on both stores. New Google Play personal accounts must also complete a 14-day [closed testing requirement](/blog/google-play-closed-testing-requirement/) before production access, which is a separate wait from review itself.",
      ]],
      ["How to request an expedited App Store review", [
        "Apple lets developers request an expedited review for urgent situations, such as a critical bug fix that affects many users or a time-sensitive event tied to a release. You submit the request through the contact form with the app, the reason, and the impact. Apple reviews requests case by case and does not guarantee approval.",
        "Use expedites sparingly. Requesting them for routine updates erodes their value, and they cannot fix a build that will be rejected anyway. For predictable events, such as a holiday campaign or an [in-app event](/blog/in-app-events-aso-strategy/), submit early and use manual release to publish on the day.",
      ]],
      ["Plan releases around review, not against it", [
        "The safest pattern is to decouple approval from launch. On iOS, submit early and choose manual or scheduled release so the approved build waits for your date. On Google Play, managed publishing lets you hold an approved release and publish it when you are ready. Both approaches turn review time into a predictable buffer instead of a launch risk.",
        "Coordinate store assets with the build. Screenshots, subtitles, and keyword changes on iOS ship only with a new version, so a metadata test may wait for your release cycle. Promotional text can change anytime, and our guide to [promotional text](/blog/promotional-text-app-store/) explains how to use it for time-sensitive messages without waiting for review.",
      ]],
      ["Common mistakes that cost days", [
        "Teams often submit on a Friday afternoon before a Monday launch, discover a rejection over the weekend, and lose the launch date. Others change backend behavior after submission, so the reviewer sees a different app from the one described. Expired demo accounts and two-factor login prompts sent to an employee's phone are frequent blockers.",
        "A pre-submission checklist prevents most of these. Confirm the demo account works from outside the office network, disable two-factor prompts for it, freeze backend changes during review, and check that metadata matches the build. Our explainer on the [App Store Review Guidelines](/blog/app-store-review-guidelines-explained/) lists the rules behind the most common rejections.",
      ]],
      ["A worked example: launch timeline for a seasonal campaign", [
        "Imagine a shopping app planning a holiday sale that starts on a Thursday. The team submits the iOS update and the Google Play release the Monday of the previous week, with clear notes and a demo account. Apple approves the build within a day and the team sets manual release. Google takes four days, and managed publishing holds the approved release.",
        "On the Thursday, both releases go live together with refreshed screenshots and promotional text. Because the team planned a full week of buffer, a one-day rejection on Google Play for a missing Data safety detail did not threaten the date. Pairing this with a [seasonal ASO calendar](/blog/app-seasonality-aso-calendar/) makes the process repeatable every year.",
      ]],
    ],
    steps: [
      ["Freeze the build a week before launch", "Treat the submission date, not the launch date, as your deadline, and leave at least five business days for review and one rejection cycle."],
      ["Prepare reviewer access", "Create a demo account without two-factor prompts, preload sample data, and test it from outside your corporate network."],
      ["Write precise review notes", "Explain non-obvious features, hardware requirements, and where to find premium content. Link a short video if needed."],
      ["Hold approval with manual release", "Use manual or scheduled release on iOS and managed publishing on Google Play so approval and launch are separate."],
      ["Reserve expedites for emergencies", "Request an expedited App Store review only for critical fixes or genuine time-bound events, with a clear explanation of user impact."],
    ],
    examples: [
      ["Submission timing", "Submit Friday at 6pm for a Monday launch.", "Submit Monday of the prior week, set manual release, and publish Monday morning.", "A full buffer absorbs one rejection without moving the launch."],
      ["Demo account", "Use your own email to sign in.", "review@example.com / Review2026, two-factor disabled, premium unlocked, sample orders preloaded.", "Reviewers cannot receive your verification codes, and empty accounts hide features."],
      ["Expedite request", "Please review faster, we have a launch.", "Version 4.2.1 fixes a crash on launch affecting about 12% of iOS 26 users since yesterday's release. Crash logs attached.", "Specific user impact is what qualifies a request for expedited review."],
    ],
    playbook: ["Plan a five-business-day review buffer", "Decouple approval from launch with manual release", "Keep a permanent reviewer demo account", "Freeze backend behavior during review", "Track review times per platform in a release log", "Request expedites only for critical issues"],
    metrics: ["Hours from submission to decision per platform", "Rejections per release", "Launch dates missed due to review", "Expedite requests made versus granted"],
    faqs: [
      ["How long does App Store review take in 2026?", "Apple states that on average 90% of submissions are reviewed in less than 24 hours. New apps and complex submissions can take longer, especially around holidays and major OS launches."],
      ["How long does Google Play review take?", "Often a few days, though Google says some reviews take seven days or longer. First submissions from new accounts and apps with sensitive permissions usually take longest."],
      ["Why is my app stuck in review?", "It may be waiting in a queue, under additional checks for sensitive features, or held because the reviewer needs information. Check for messages in App Store Connect or Play Console before contacting support."],
      ["Do app updates need review?", "Yes. Both stores review updates. On iOS, only promotional text can change without a new version; on Google Play, store listing changes are also reviewed, usually quickly."],
    ],
    related: ["how-to-publish-app-on-app-store", "how-to-publish-app-on-google-play", "app-rejection-recovery-guide", "app-launch-aso-checklist"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Apple: App Review overview", url: "https://developer.apple.com/distribute/app-review/" },
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
    ],
  }),
  P({
    slug: "app-store-and-google-play-fees",
    title: "App Store and Google Play Fees Explained: Developer Costs and Commissions",
    seoTitle: "App Store and Google Play Fees: Costs and Commissions",
    description: "What it costs to publish and sell apps: developer account fees, 15% and 30% commissions, subscription rates, and how to model app store fees in pricing.",
    primaryKeyword: "App Store and Google Play fees",
    secondaryKeywords: ["Apple commission", "Google Play service fee", "app store fees 15%"],
    category: "Platform Guides",
    answer: "Apple charges $99 per year for the Developer Program, and Google charges a one-time $25 registration fee. On sales of digital goods, both stores take a commission. It is typically 30%, falling to 15% for qualifying small developers (Apple's Small Business Program and Google's first $1 million in yearly earnings) and for subscriptions (from day one on Google Play, and after a subscriber's first year on Apple). Regional rules, especially in the US and EU, have added alternative options.",
    sections: [
      ["Account fees: the fixed costs", [
        "Publishing on the App Store requires the Apple Developer Program, which costs $99 per year for individuals and organizations, with fee waivers for some nonprofits, educational institutions, and government entities. If the membership lapses, your apps are removed from sale until you renew. Google Play has a one-time $25 registration fee with no renewal.",
        "These fixed costs are small compared with commissions, but they shape some decisions. Enrolling as an organization on both platforms is better for companies even though it takes longer to verify, because the seller name builds trust and some categories effectively require it. Our step-by-step guides to [publishing on Google Play](/blog/how-to-publish-app-on-google-play/) and [publishing on the App Store](/blog/how-to-publish-app-on-app-store/) cover enrollment in detail.",
      ]],
      ["Commission on digital goods: 30% and 15%", [
        "When users buy paid apps, in-app purchases, or subscriptions for digital content, both stores take a commission. The standard rate on Apple is 30%. Developers who earned up to $1 million in proceeds in the prior calendar year can join Apple's Small Business Program and pay 15%. On Google Play, the service fee is 15% on the first $1 million of earnings each year for developers who enroll, and 30% above that.",
        "Physical goods and services consumed outside the app, such as food delivery, rides, or retail orders, generally do not use the stores' billing systems and carry no commission. Ad-supported apps also pay nothing on ad revenue. That is why monetization model, not just price, determines how much of your revenue goes to the platform.",
      ]],
      ["Subscriptions: the 15% rate", [
        "Subscriptions have their own rates. On Google Play, auto-renewing subscriptions carry a 15% service fee from the first day. On Apple, the commission on an auto-renewable subscription drops from 30% to 15% after the subscriber completes one year of paid service, and Small Business Program members pay 15% throughout.",
        "This makes retention financially valuable twice: you keep the customer and a larger share of each payment. It is one reason subscription apps invest in [free trials](/blog/free-trial-strategies/), [win-back offers](/blog/subscription-offer-codes-win-back-offers/), and clear [subscription messaging](/blog/app-store-pricing-and-subscription-messaging/) that reduces early cancellations.",
      ]],
      ["Regional changes: US, EU, and alternative billing", [
        "Regulation and litigation have changed the rules in several markets. In the European Union, the Digital Markets Act lets developers use alternative app marketplaces and payment options on iOS under separate business terms with their own fee structure, which Apple revised in 2025. In the United States, court rulings have allowed developers to link users to external purchase options, and Google has introduced alternative billing and external offer programs in some countries.",
        "These options can reduce fees but add costs and complexity: payment processing, fraud, refunds, tax, and support you would otherwise not handle, plus potential conversion loss from leaving the native purchase flow. Model the full cost before switching, and check each platform's current regional terms. Our guide to [alternative app marketplaces in the EU](/blog/eu-alternative-app-marketplaces-dma/) covers the European options.",
      ]],
      ["Taxes, currency, and price tiers", [
        "Both stores act as the merchant of record in most countries and handle sales tax or VAT on your behalf, deducting it before calculating proceeds. That means the commission applies to the price excluding tax, and your proceeds vary by country even at the same nominal price. Both platforms provide price points per currency and can generate localized prices from a base price.",
        "Price localization is a real lever. A price that converts in the United States can be expensive in India or Brazil. Use regional pricing deliberately, and see our guide to [freemium vs paid app pricing](/blog/freemium-vs-paid-app-pricing/) for choosing a monetization model in the first place.",
      ]],
      ["A worked example: net revenue per subscriber", [
        "Suppose a subscription costs $9.99 per month in the US, excluding tax. A Small Business Program member keeps about $8.49 per payment on iOS (85%). A larger developer keeps about $6.99 (70%) during the subscriber's first year and about $8.49 after it. On Google Play, every developer keeps about $8.49 from the first month because subscriptions carry a 15% fee.",
        "Over a subscriber who stays 18 months with a larger iOS developer, the first 12 payments net about $83.88 and the next six about $50.94, for $134.82 total. This is why [LTV calculations](/blog/mobile-app-ltv-calculation/) should always use net proceeds, not list price, and why retention improvements raise revenue faster than a simple count of subscribers suggests.",
      ]],
    ],
    steps: [
      ["Confirm your fee tier on each platform", "Check whether you qualify for Apple's Small Business Program and enroll in Google's 15% tier. Neither applies automatically."],
      ["Classify what you sell", "Separate digital goods consumed in the app from physical goods, services, and ad revenue, because only digital goods carry store commission."],
      ["Model net proceeds by market", "Use price excluding tax, the applicable commission, and currency conversion to estimate what you keep per sale in each priority country."],
      ["Evaluate regional alternatives honestly", "If you consider external payments or alternative marketplaces, include processing fees, fraud, support, and conversion loss in the model."],
      ["Feed net revenue into LTV and CPI decisions", "Use proceeds, not list prices, when setting paid acquisition targets."],
    ],
    examples: [
      ["Financial model", "Revenue = subscribers x $9.99", "Net revenue = subscribers x ($9.99 excluding tax) x (1 - commission), with commission set by platform, tier, and subscriber tenure", "Ignoring commission and tax can overstate revenue by a third or more."],
      ["Pricing page copy", "Only $59.99!", "$59.99 per year, billed annually after a 7-day free trial. Cancel anytime.", "Clear terms reduce refunds, which erode net proceeds and ratings."],
      ["Small Business Program", "Assume 15% automatically.", "Apply to Apple's Small Business Program and enroll in Google's 15% tier, then set a calendar reminder to recheck eligibility each year.", "Both reduced rates require action; missing them doubles the fee."],
    ],
    playbook: ["Enroll in reduced-fee programs on both stores", "Separate digital and physical revenue in reporting", "Model net proceeds by market and tenure", "Use net revenue in LTV and CPI targets", "Review regional terms after major rulings", "Reduce refunds with clear pricing disclosures"],
    metrics: ["Effective commission rate by platform", "Net proceeds per paying user", "Share of subscribers past one year on iOS", "Refund rate by product", "Net revenue by country"],
    faqs: [
      ["How much does Apple take from app sales?", "Typically 30% of digital sales, or 15% for Small Business Program members and for auto-renewing subscriptions after a subscriber's first paid year. Regional terms can differ."],
      ["How much does Google Play take?", "Google's service fee is 15% on the first $1 million of yearly earnings for enrolled developers and 30% above that. Auto-renewing subscriptions carry a 15% fee from day one."],
      ["Do I pay commission on ads or physical goods?", "No. Ad revenue and payments for physical goods or services consumed outside the app do not go through store billing and carry no store commission."],
      ["Is the Apple developer fee one-time?", "No. The Apple Developer Program is $99 per year. Google Play's $25 registration fee is one-time."],
    ],
    related: ["freemium-vs-paid-app-pricing", "app-store-pricing-and-subscription-messaging", "mobile-app-ltv-calculation", "how-to-publish-app-on-app-store"],
    serviceLinks: ["/services/app-store-optimization/", "/services/paid-user-acquisition/"],
    sources: [
      { label: "Apple: App Store Small Business Program", url: "https://developer.apple.com/app-store/small-business-program/" },
      { label: "Apple Developer Program", url: "https://developer.apple.com/programs/" },
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
    ],
  }),
];
