import { P } from "./release";

export const platform03 = [
  P({
    slug: "google-play-account-suspension-recovery",
    title: "Google Play Developer Account Suspended or Terminated? How to Appeal and Prevent It",
    seoTitle: "Google Play Account Suspended? How to Appeal and Prevent It",
    description: "Why Google Play suspends apps and terminates developer accounts, how to file an effective appeal, and the compliance habits that prevent enforcement.",
    primaryKeyword: "Google Play account suspended",
    secondaryKeywords: ["Google Play developer account terminated", "Play Console appeal", "app suspended Google Play"],
    category: "Policy and Compliance",
    answer: "Google Play enforces policy in escalating steps: rejecting an update, removing an app, suspending it, and finally terminating the developer account. Suspensions count as strikes, and repeated or severe violations can end an account along with related accounts. To recover, read the notice in the Policy status page, fix the root cause across every app, and submit a specific appeal. Prevention depends on vetting SDKs, accurate declarations, and careful metadata.",
    sections: [
      ["Understand the enforcement ladder", [
        "Google Play's enforcement actions range from mild to severe. A rejection blocks a new release until you fix it. A removal takes an app off the store but does not count as a strike, and you can resubmit a compliant version. A suspension removes the app, counts as a strike against the account, and erases its install history, ratings, and reviews from the store. Limited visibility restricts where an app can be discovered.",
        "Account termination is the most serious step. It removes all apps, and Google may also terminate accounts it considers associated, for example those that share payment profiles, identity details, or devices. That is why a single non-compliant side project can endanger a company's main app if both live in the same account or share identity details.",
      ]],
      ["The violations that most often trigger action", [
        "Common triggers include undisclosed data collection, often by a third-party SDK; Data safety answers that do not match behavior; sensitive permissions such as SMS, call log, accessibility, or background location used without an approved case; deceptive or disruptive ads; impersonation or intellectual property infringement; and repetitive or low-quality apps published at scale.",
        "Metadata problems also count. Keyword stuffing, misleading screenshots, and promises the app cannot keep breach the metadata policy, as covered in our [white hat vs black hat ASO guide](/blog/aso-white-hat-vs-black-hat-guidelines/). Inactive accounts that never publish or update can also be closed under Google's account policies, so keep accounts in use and contact details current.",
      ]],
      ["How to read a policy notice", [
        "Every enforcement action appears in Play Console's Policy status page and is emailed to the account owner. The notice names the policy, the app and version, and often an example of the issue, such as a screenshot or a description of the SDK behavior. Read it twice and map each sentence to something concrete in your build, listing, or declarations.",
        "Do not assume the notice describes the only problem. Reviewers often cite the first issue they find. Audit the entire app and every other app in the account for the same pattern before you respond, because resubmitting with a partial fix can turn a rejection into a suspension.",
      ]],
      ["Write an appeal that can succeed", [
        "If you believe the decision was wrong, or you have fixed the problem and want the suspension reconsidered, submit an appeal through the link in the notice or the Policy status page. Effective appeals are short, factual, and specific: what the policy says, what your app does, what you changed, and how you will prevent recurrence. Attach evidence such as screenshots, video, or SDK versions.",
        "Avoid emotional language, threats, or repeated identical appeals, which slow everything down. If the appeal is denied and the suspension stands, do not create a new account to republish the same app; Google treats that as policy evasion and it can lead to termination of the new account as well.",
      ]],
      ["Prevent enforcement with a compliance routine", [
        "Keep a living inventory of every SDK, what data it collects, and why. Check the Google Play SDK Index for known issues before adding or updating an SDK, and reconcile your Data safety form after each change. Our guide to [privacy labels and Data safety](/blog/privacy-labels-data-safety-conversion/) explains how to keep disclosures accurate.",
        "Before each release, review sensitive permissions, ad placements, and store listing claims. Separate risky experiments from your main business account, and use organization accounts with verified details. If you rely on a single app for revenue, the cost of compliance work is tiny compared with the cost of losing the listing and its [ratings history](/blog/how-app-ratings-are-calculated/).",
      ]],
      ["A worked example: an SDK-triggered suspension", [
        "A photo app receives a suspension notice citing the User Data policy. The team discovers that an analytics SDK added months earlier collects installed-app lists without disclosure. They remove the SDK, update the Data safety form, revise the privacy policy, and check two other apps in the account that used the same SDK.",
        "The appeal explains the root cause, lists the removed SDK and version, links the updated privacy policy, and describes a new rule requiring a compliance review for every SDK change. The suspension is reversed. The team also adds a quarterly audit to its [ASO audit checklist](/blog/aso-audit-checklist/) so the problem cannot quietly return.",
      ]],
    ],
    steps: [
      ["Read the Policy status page", "Identify the exact policy, app, version, and evidence cited, and note every affected app in the account."],
      ["Find the root cause", "Audit code, SDKs, permissions, ads, declarations, and metadata for the cited pattern, not just the single example."],
      ["Fix across every app", "Ship compliant builds, update Data safety and privacy policies, and correct listings for all affected apps."],
      ["Appeal with evidence", "Submit one concise appeal explaining the policy, the fix, the evidence, and how you will prevent recurrence."],
      ["Install a prevention routine", "Maintain an SDK inventory, review permissions and claims before releases, and keep account details current."],
    ],
    examples: [
      ["Appeal text", "This is unfair. Our app is legitimate. Please restore it immediately.", "The notice cites undisclosed collection of installed-app data. We traced it to SDK X version 3.2, removed it in version 5.4.1, updated our Data safety form and privacy policy, and added an SDK review step to our release process.", "Specific cause, fix, and prevention give reviewers a reason to reverse the decision."],
      ["Permission declaration", "Request background location for convenience.", "Request foreground location only, and explain in-app why the map feature needs it.", "Sensitive permissions without an approved core use case are a frequent trigger."],
      ["Account structure", "Main app and experimental side projects in one personal account.", "Main app in a verified organization account; experiments reviewed before publishing.", "Associated-account enforcement can spread one violation across everything you own."],
    ],
    playbook: ["Read every notice in the Policy status page", "Audit all apps for the cited pattern", "Keep an SDK inventory and check the SDK Index", "Reconcile Data safety after every SDK change", "Appeal once, specifically, with evidence", "Never republish a suspended app on a new account"],
    metrics: ["Policy warnings per quarter", "Releases rejected for policy reasons", "SDKs reviewed versus added", "Days of revenue lost to enforcement"],
    faqs: [
      ["What is the difference between app removal and suspension?", "A removal takes the app down but does not count as a strike, and you can resubmit a compliant version. A suspension counts as a strike, removes the app's store history, and repeated suspensions can lead to account termination."],
      ["Can I recover a terminated Google Play developer account?", "Only through a successful appeal. Creating a new account to republish the same apps is treated as evasion and can lead to the new account being terminated too."],
      ["Why was my account terminated when only one app had a problem?", "Severe or repeated violations can lead to termination of the whole account, and Google may also act on accounts it considers associated with a terminated one."],
      ["How do I prevent Google Play suspensions?", "Vet SDKs, keep Data safety accurate, justify sensitive permissions, follow ads and metadata policies, and review every release against current policy."],
    ],
    related: ["aso-white-hat-vs-black-hat-guidelines", "privacy-labels-data-safety-conversion", "app-rejection-recovery-guide", "how-to-publish-app-on-google-play"],
    serviceLinks: ["/google-play-store-optimization/", "/contact/"],
    sources: [
      { label: "Google Play Developer Program Policy", url: "https://play.google/developer-content-policy/" },
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
    ],
  }),
  P({
    slug: "how-app-ratings-are-calculated",
    title: "How App Store and Google Play Ratings Are Calculated (and How to Move Them)",
    seoTitle: "How App Store and Google Play Ratings Are Calculated",
    description: "How Apple and Google calculate the star rating shown on your listing, why it differs by country and device, how resets work, and what moves it.",
    primaryKeyword: "how app ratings are calculated",
    secondaryKeywords: ["Google Play rating calculation", "App Store rating calculation", "app star rating"],
    category: "Ratings and Reviews",
    answer: "On the App Store, the rating shown is the average of ratings in that country or region since the last time the developer reset the summary rating, which is optional with each new version. On Google Play, the rating is weighted toward recent ratings rather than a lifetime average, and it is shown separately by country and device type. So a burst of recent ratings moves a Google Play score faster, while an iOS score moves slowly unless you reset it.",
    sections: [
      ["How Apple calculates the App Store rating", [
        "Apple displays a summary rating for each country or region storefront, calculated from ratings in that storefront. Ratings from the US do not affect the score shown in Germany. When you release a new version, you can choose to reset the summary rating. If you do, the displayed rating starts again from the new ratings, while written reviews remain visible on the product page.",
        "Without a reset, the average includes every rating in that storefront since the last reset, so an app with years of history moves slowly. A few hundred new five-star ratings barely change a score built from hundreds of thousands. Our guide to the [iOS ratings reset](/blog/app-store-ratings-reset-policy/) explains when a reset makes sense and when it backfires.",
      ]],
      ["How Google Play calculates the rating", [
        "Since 2019, Google Play has shown a rating that gives more weight to recent ratings, so the score reflects the current version of the app rather than its whole history. Google has also shown ratings specific to the user's country and device type, such as phone, tablet, Chromebook, or Wear OS, so a tablet user may see a different score from a phone user in the same country.",
        "This means improvements show up faster on Google Play, but so do problems. A buggy release can drag the visible rating down within weeks. In Play Console, compare the current rating with the lifetime average and break ratings down by device, Android version, app version, and country to see where a drop is coming from, as described in our guide to [Google Play Console store performance](/blog/google-play-console-store-performance/).",
      ]],
      ["Why the rating matters for ASO", [
        "The star rating appears next to your icon in search results, charts, and product pages, so it influences whether people tap and install. Higher conversion feeds the engagement signals both stores consider, and Apple lists ratings and reviews among the factors in App Store search. Google also uses quality signals such as stability. In practice, a rating drop often shows up first as lower conversion, then as lower visibility.",
        "Users also read recent reviews before deciding, especially in categories where trust matters, such as finance or health. That is why ratings management is part of ASO, not separate from it. See our guides to [improving app ratings](/blog/improve-app-ratings/) and [responding to negative reviews](/blog/respond-negative-app-reviews/).",
      ]],
      ["What actually moves the number", [
        "The biggest lever is who you ask and when. Prompting satisfied users right after a success moment, using Apple's rating API or Google's in-app review API, increases the share of ratings from happy users. Our guides to [rating prompt timing](/blog/in-app-rating-prompt-timing/), [iOS rating prompts](/blog/ios-rating-prompt-best-practices/), and the [Google Play in-app review API](/blog/google-play-in-app-review-api/) cover implementation.",
        "The second lever is product quality. Crashes, battery drain, billing confusion, and broken features generate one-star ratings faster than any prompt can offset. Fix the top complaint themes, reply to reviews when you ship a fix, and protect releases with staged rollouts. Stability matters enough that [crash rate is an ASO metric](/blog/crash-rate-and-store-ranking/).",
      ]],
      ["What does not work, and what is against the rules", [
        "Buying reviews, offering incentives for ratings, gating prompts so only happy users can reach the store, and asking friends to post fake reviews all violate store policies. Both stores detect and remove suspicious ratings, and enforcement can include removing the app. Even when undetected, fake ratings hide the problems that real users will keep reporting.",
        "Developers also cannot delete genuine negative reviews. You can report reviews that violate policy, such as spam or offensive content, and you can reply publicly. Our guide on [whether you can delete or report app reviews](/blog/delete-or-report-app-reviews/) explains the options on each store.",
      ]],
      ["A worked example: recovering from a bad release", [
        "A fitness app ships an update that breaks syncing with a popular watch. Within ten days, its Google Play rating falls from 4.5 to 4.2 because recent ratings carry more weight, while its iOS rating barely moves. The team pauses the staged rollout, ships a fix, and replies to affected reviewers explaining the fix.",
        "Over the next month, the Google Play rating recovers as new ratings outweigh the bad week. On iOS, the team considers a reset but declines because the long-run average of 4.6 is strong. The lesson is that the same incident behaves differently on each store, which is why ratings monitoring should be split by platform, country, and app version.",
      ]],
    ],
    steps: [
      ["Monitor ratings by platform and storefront", "Track the displayed rating per country on iOS, and per country and device type on Google Play, rather than a single global number."],
      ["Break down drops by version and device", "Use Play Console and App Store Connect filters to find whether a dip comes from one release, device, or market."],
      ["Fix the top complaint themes", "Tag reviews by issue, prioritize the themes driving one-star ratings, and ship fixes before asking for more ratings."],
      ["Prompt at success moments", "Use the official rating APIs after users complete something valuable, not at launch or after errors."],
      ["Decide on iOS resets deliberately", "Reset the iOS summary rating only when a major release fixes problems that dominate the old average."],
    ],
    examples: [
      ["Rating prompt trigger", "Ask for a rating on the third app launch.", "Ask after a user completes their fifth workout and views a progress summary.", "Success moments produce more positive, authentic ratings."],
      ["Reading a dip", "Our rating fell, so marketing should ask for more reviews.", "The drop is concentrated in version 6.1 on Android 15 tablets; fix the layout bug first.", "Segmenting the data points to a fixable cause."],
      ["Reset decision", "Reset on every release to keep the number fresh.", "Reset once, after the 7.0 rewrite fixed the crashes behind most low ratings.", "Frequent resets throw away good history and leave the page with few ratings."],
    ],
    playbook: ["Track ratings by storefront and device", "Segment rating drops by version", "Fix top complaint themes before prompting", "Use official rating APIs at success moments", "Reply to reviews when fixes ship", "Never buy, incentivize, or gate ratings"],
    metrics: ["Displayed rating by country and platform", "Recent rating versus lifetime average", "Share of one-star ratings by app version", "Ratings volume per thousand active users", "Product page conversion rate"],
    faqs: [
      ["Is the Google Play rating an average of all ratings?", "No. Google Play's displayed rating gives more weight to recent ratings, and it is shown by country and device type."],
      ["Does the App Store rating include ratings from all countries?", "No. Each storefront shows a rating calculated from ratings in that country or region."],
      ["Does resetting my iOS rating delete reviews?", "No. Resetting the summary rating starts the displayed average again, but written reviews stay on the product page."],
      ["How long does it take to improve an app rating?", "On Google Play, improvements can show within weeks because recent ratings are weighted. On iOS without a reset, a large rating history changes slowly."],
    ],
    related: ["improve-app-ratings", "app-store-ratings-reset-policy", "in-app-rating-prompt-timing", "delete-or-report-app-reviews"],
    serviceLinks: ["/services/app-reputation-management/", "/automated-review-replies/"],
    sources: [
      { label: "Apple: Ratings, reviews, and responses", url: "https://developer.apple.com/app-store/ratings-and-reviews/" },
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
    ],
  }),
  P({
    slug: "eu-alternative-app-marketplaces-dma",
    title: "Alternative App Marketplaces in the EU: What the DMA Means for App Distribution and ASO",
    seoTitle: "EU Alternative App Marketplaces: DMA Guide for Developers",
    description: "How the EU Digital Markets Act changed iOS and Android distribution: alternative marketplaces, web distribution, payments, fees, and what it means for ASO.",
    primaryKeyword: "alternative app marketplaces EU",
    secondaryKeywords: ["Digital Markets Act apps", "iOS alternative app stores", "DMA app distribution"],
    category: "Other App Stores",
    answer: "Since iOS 17.4, the EU's Digital Markets Act has let developers distribute iOS apps in the European Union through alternative app marketplaces and, for eligible developers, directly from their websites. These apps still need Apple's notarization. Developers can also use alternative payment options under Apple's EU business terms, which carry their own fees. For most apps, the App Store and Google Play remain the main discovery channels, so the DMA adds options rather than replacing ASO.",
    sections: [
      ["What changed for iOS in the EU", [
        "Before 2024, the App Store was the only way to distribute consumer iOS apps. Under the Digital Markets Act, Apple now allows alternative app marketplaces on iPhone and iPad for users in the EU, and web distribution for developers who meet eligibility criteria. Users can install marketplace apps after approving the marketplace in Settings.",
        "Apps distributed outside the App Store still go through notarization, a baseline review focused on security, privacy, and functionality rather than the full App Review Guidelines. Marketplace operators need Apple's authorization and handle their own content moderation, payments, and support. Apple publishes the current requirements on its developer site, and they have changed several times, so check them before planning.",
      ]],
      ["Payments and fees under the EU terms", [
        "Developers in the EU can use alternative payment service providers in the App Store or link users to purchase on the web, under Apple's EU business terms. Those terms carry their own fee structure, which Apple revised in 2025, and developers choose between options with different fees and benefits. The alternative paths are not fee-free.",
        "Before switching, model the total cost: store fees under the new terms, payment processing, fraud, tax handling, refunds, customer support, and the conversion you might lose by leaving the native purchase sheet. Our guide to [App Store and Google Play fees](/blog/app-store-and-google-play-fees/) explains the standard commissions to compare against.",
      ]],
      ["Android in the EU", [
        "Android has long allowed alternative app stores and direct installation, so the DMA's effect there is more about choice screens, billing, and interoperability. Google Play offers alternative billing options for users in the European Economic Area, with a reduced service fee when developers use their own billing. Device makers' stores, such as Samsung Galaxy Store and Huawei AppGallery, continue alongside Play.",
        "Google has also announced developer verification requirements for apps installed on certified Android devices outside Google Play, rolling out by region from 2026. If you distribute APKs directly or through smaller stores, follow these requirements closely. Our guides to [Samsung Galaxy Store ASO](/blog/samsung-galaxy-store-aso/) and [Huawei AppGallery ASO](/blog/huawei-appgallery-aso/) cover two of the larger alternatives.",
      ]],
      ["Should you list in an alternative marketplace?", [
        "For most consumer apps, the App Store still delivers the vast majority of EU iOS installs, because it is preinstalled, trusted, and integrated with search, editorial, and ads. Alternative marketplaces make sense when your app cannot exist on the App Store, when a marketplace offers a meaningful audience in your niche, such as games or emulators, or when the economics clearly favor it.",
        "Treat a marketplace as another storefront with its own audience. Test it with modest effort, measure installs and retention by source, and keep your App Store listing as the primary asset. Attribution matters: Apple's [AdAttributionKit](/blog/skadnetwork-adattributionkit-guide/) supports measurement across marketplaces, so set it up before spending on promotion.",
      ]],
      ["ASO when there is more than one store", [
        "Each marketplace has its own search, ranking signals, and page layout, but the fundamentals transfer: a clear name and subtitle, honest screenshots, strong ratings, and localized copy. Reuse your master creative and keyword research, then adapt to each store's fields and audience. Our [app store localization strategy](/blog/app-store-localization-strategy/) applies equally to marketplace listings in the EU's many languages.",
        "Keep messaging consistent across stores so users who see your app in several places recognize it. Different prices or features by store can create confusion and support issues. For a multi-country approach, see our guide to an [EU multi-country rollout](/blog/aso-for-european-multi-country-rollout/).",
      ]],
      ["Common mistakes when reacting to the DMA", [
        "The most common mistake is treating the DMA as a reason to abandon the App Store in Europe. Teams announce web-only purchasing, then discover that conversion drops, refunds and chargebacks rise, and support volume climbs. Others assume the rules are the same in every EU country or will never change, when Apple's terms and the European Commission's decisions have shifted more than once.",
        "Another mistake is neglecting measurement. Without source-level attribution, a team cannot tell whether a marketplace brings new users or simply moves existing ones, and it ends up debating anecdotes. Decide in advance what result would justify expansion, then run the pilot long enough to see retention and revenue, not just first-week installs.",
      ]],
      ["A worked example: a game evaluates EU distribution", [
        "A mid-size game studio wonders whether to publish in an alternative iOS marketplace in the EU. It models costs under Apple's EU terms, compares them with standard App Store terms, and estimates audience size from the marketplace's published figures and its own community surveys.",
        "The studio decides to keep the App Store as its main channel and run a limited pilot in one marketplace with an exclusive cosmetic bundle. It sets up AdAttributionKit, tracks installs and spend per user by source, and reviews the pilot after three months. Because the pilot is small and measured, the decision rests on data rather than headlines.",
      ]],
    ],
    steps: [
      ["Confirm eligibility and current rules", "Read Apple's current EU distribution documentation and Google's EEA billing and verification requirements before planning."],
      ["Model the economics", "Compare standard App Store terms with the EU alternative terms, including processing, fraud, support, and conversion effects."],
      ["Pick at most one pilot marketplace", "Choose a marketplace with a clear audience fit for your app rather than listing everywhere at once."],
      ["Instrument attribution", "Implement AdAttributionKit on iOS and source tracking on Android so installs and revenue are attributed by store."],
      ["Review after a fixed period", "Compare installs, retention, and net revenue per user by store after three months and decide whether to expand."],
    ],
    examples: [
      ["Distribution decision", "Move all EU iOS users to the web to avoid fees.", "Keep the App Store primary and pilot web purchases for returning subscribers.", "Moving everyone risks conversion loss and support costs that can exceed fee savings."],
      ["Marketplace listing", "Copy the App Store listing unchanged.", "Reuse creative and research, but adapt text to the marketplace's fields and audience.", "Each store has its own layout and expectations."],
      ["Measurement", "Count installs by store from download totals.", "Use AdAttributionKit and source parameters to measure installs, retention, and revenue by marketplace.", "Totals hide whether a channel brings valuable users."],
    ],
    playbook: ["Read current Apple and Google EU requirements", "Model full costs, not just fees", "Keep the App Store as the primary EU iOS channel", "Pilot one marketplace with clear audience fit", "Measure by source with AdAttributionKit", "Keep messaging consistent across stores"],
    metrics: ["Installs by store and country", "Retention and revenue per user by store", "Effective fee rate by distribution path", "Support tickets per thousand users by store"],
    faqs: [
      ["Can I distribute iOS apps outside the App Store in the EU?", "Yes. Under the Digital Markets Act, iOS apps can be distributed to EU users through authorized alternative marketplaces and, for eligible developers, web distribution. Apps still need Apple's notarization."],
      ["Are alternative distribution options fee-free?", "No. Apple's EU business terms carry their own fees, and you take on payment processing, fraud, and support costs."],
      ["Do alternative marketplaces affect App Store ASO?", "Not directly. The App Store's search and ranking are separate, and it remains the largest iOS channel in the EU for most apps."],
      ["Do these rules apply outside the EU?", "The DMA applies in the European Union. Other countries have introduced their own rules on payments and app distribution, so check each market."],
    ],
    related: ["app-store-and-google-play-fees", "samsung-galaxy-store-aso", "huawei-appgallery-aso", "aso-for-european-multi-country-rollout"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Apple: Update on apps distributed in the European Union", url: "https://developer.apple.com/support/dma-and-apps-in-the-eu/" },
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
    ],
  }),
  P({
    slug: "mac-app-store-optimization",
    title: "Mac App Store Optimization: How to Rank and Convert Desktop Users",
    seoTitle: "Mac App Store Optimization: Rank and Convert Mac Users",
    description: "Optimize a Mac App Store listing: keywords, 16:10 screenshots, pricing and trials for professional tools, and how web search fits into Mac app discovery.",
    primaryKeyword: "Mac App Store optimization",
    secondaryKeywords: ["macOS app ASO", "Mac App Store screenshots", "Mac app marketing"],
    category: "Other App Stores",
    answer: "Mac App Store optimization uses the same metadata fields as iOS (a 30-character name and subtitle, a 100-byte keyword field, and a description) but serves a different user. Mac buyers often research on the web first, compare professional tools, and care about workflows, integrations, and trials. Win with workflow-specific keywords, 16:10 screenshots that show real windows, clear pricing, and a website that ranks for the same problems.",
    sections: [
      ["How Mac discovery differs from iPhone", [
        "Mac users are more likely to arrive with a specific job in mind, such as resizing images in bulk, managing windows, or editing PDFs. Many search the web before the store, read comparison articles, and download from developer websites as well as the Mac App Store. Search volume inside the Mac App Store is smaller than on iPhone, but intent is often higher and willingness to pay is strong for tools that save time.",
        "That means Mac ASO works best alongside web SEO. Your website and the store listing should target the same problems with consistent language. Our guide to [web-to-app SEO](/blog/web-to-app-seo-indexing/) covers how websites and listings reinforce each other, and the [ASO vs SEO comparison](/blog/aso-vs-seo-differences/) explains which skills transfer.",
      ]],
      ["Metadata: the same fields, different vocabulary", [
        "The Mac App Store indexes the app name, subtitle, and keyword field like the iOS App Store does, with the same character and byte limits. The difference is vocabulary. Mac users search for tasks and workflows, such as menu bar, clipboard manager, or batch rename, and for file formats and integrations. Build keyword research from these terms rather than copying an iPhone listing.",
        "If you sell a universal purchase across iPhone, iPad, and Mac, each platform still has its own metadata and screenshots, so optimize the Mac listing on its own terms. Our guides to the [App Store keyword field](/blog/app-store-keyword-field/) and [long-tail app store keywords](/blog/long-tail-app-store-keywords/) apply directly, with workflow terms as the long tail.",
      ]],
      ["Screenshots that show the real desktop experience", [
        "Mac screenshots use a 16:10 aspect ratio, such as 2880 x 1800 or 1440 x 900, and you can upload up to ten. Show real windows in realistic contexts: a full workspace, a menu bar popover, a settings panel with meaningful options, or before-and-after results. Captions should name the workflow benefit, such as rename a thousand files in seconds.",
        "Avoid tiny interface text that becomes unreadable in the store's thumbnail view. Crop or zoom to the part of the window that matters, and include one screenshot that shows the app alongside tools users already rely on. See our [App Store screenshot sizes guide](/blog/app-store-screenshot-sizes/) for current dimensions.",
      ]],
      ["Pricing, trials, and professional buyers", [
        "Mac tools are often bought by professionals who want to evaluate before paying. Free downloads with an in-app trial or a free tier convert better than a paid upfront price for most utilities, because the store's paid-app flow does not offer a trial. Make trial length and pricing clear in screenshots and the description so buyers know what to expect.",
        "Team and business buyers may need invoices, volume licensing, or managed deployment, which you can handle on your website. Clear subscription messaging reduces refunds and negative reviews; see [subscription messaging in store listings](/blog/app-store-pricing-and-subscription-messaging/) and [freemium vs paid app pricing](/blog/freemium-vs-paid-app-pricing/).",
      ]],
      ["iPhone and iPad apps on Apple silicon Macs", [
        "Many iPhone and iPad apps can be available on Macs with Apple silicon by default unless the developer opts out. If your iOS app appears on Mac, check how it behaves with a keyboard, mouse, and resizable windows, because a poor experience generates low ratings visible to Mac users. Opt out if the app does not make sense on a Mac.",
        "If the Mac is a strategic platform, consider a native or Catalyst version with Mac-appropriate design, menus, and shortcuts. A dedicated Mac experience earns better reviews, editorial attention, and word of mouth than a phone layout stretched across a large screen.",
      ]],
      ["Common Mac App Store mistakes", [
        "Copying the iPhone listing is the most frequent error. Phone-style screenshots, consumer vocabulary, and a subtitle that ignores workflows all signal that the Mac version is an afterthought. Another mistake is charging upfront without a trial, which pushes careful professional buyers to competitors that let them evaluate first.",
        "Developers also forget the listing after launch. Mac users leave fewer reviews than iPhone users, so each review carries more weight, and an unanswered complaint can sit at the top of the page for months. Reply to reviews, ask for ratings at moments of clear value, and refresh screenshots when the interface changes with a new macOS release.",
      ]],
      ["A worked example: a window-management utility", [
        "A window-management app lists itself with the subtitle Productivity tool and screenshots of its settings window. Searches for its core tasks bring few impressions, and conversion is low. The team rewrites the subtitle as Snap windows with shortcuts, fills the keyword field with workflow terms such as tile, resize, split, monitor, and layout, and replaces settings screenshots with workspace shots showing tiled windows.",
        "It switches from a paid upfront price to a free download with a 14-day trial and states the trial in the first screenshot. It also publishes web guides for each workflow that link to the store. Over the next quarter, store impressions and trial starts rise, and refund requests fall because buyers know what they are getting.",
      ]],
    ],
    steps: [
      ["Research workflow vocabulary", "List tasks, file formats, and integrations your users search for, using web search data, support tickets, and competitor listings."],
      ["Write Mac-specific metadata", "Use the 30-character name and subtitle and 100-byte keyword field for workflow terms rather than reusing iPhone metadata."],
      ["Capture real desktop screenshots", "Create 16:10 screenshots that show working windows and outcomes, with captions naming the workflow benefit."],
      ["Offer a clear trial", "Use a free download with an in-app trial or free tier, and state the terms in the listing."],
      ["Align your website", "Publish web pages targeting the same workflows and link them to the Mac App Store listing."],
    ],
    examples: [
      ["Subtitle", "Productivity tool", "Snap windows with shortcuts", "A specific workflow matches how Mac users search."],
      ["First screenshot", "Settings window with dozens of toggles.", "A tiled workspace with the caption Organize any screen in one shortcut.", "Outcomes sell better than configuration."],
      ["Pricing", "$29.99 upfront with no trial.", "Free download, 14-day full trial, then $29.99 one-time unlock.", "Professionals want to evaluate before buying, and the store has no built-in trial for paid apps."],
    ],
    playbook: ["Research workflow and integration keywords", "Optimize Mac metadata separately from iOS", "Show real windows in 16:10 screenshots", "Offer an in-app trial or free tier", "Check how iOS apps behave on Apple silicon Macs", "Pair the listing with web pages for each workflow"],
    metrics: ["Mac App Store impressions and product page views", "Product page conversion rate", "Trial start to purchase rate", "Refund rate", "Web referral installs"],
    faqs: [
      ["Is the Mac App Store worth optimizing?", "Yes, for apps with clear Mac use cases. Search volume is smaller than on iPhone, but intent and willingness to pay are often higher."],
      ["What screenshot size does the Mac App Store use?", "A 16:10 ratio, at 1280 x 800, 1440 x 900, 2560 x 1600, or 2880 x 1800 pixels."],
      ["Does the Mac App Store use the same keyword field as iOS?", "Yes. The Mac App Store indexes the name, subtitle, and 100-byte keyword field, with platform-specific metadata for each."],
      ["Should a Mac app be sold outside the App Store too?", "Many developers sell both in the store and directly from their websites with notarized builds. The store adds discovery and trust; direct sales add licensing flexibility."],
    ],
    related: ["app-store-keyword-field", "web-to-app-seo-indexing", "freemium-vs-paid-app-pricing", "app-store-screenshot-sizes"],
    serviceLinks: ["/services/app-store-optimization/", "/aso-agency-usa/"],
    sources: [
      { label: "App Store Connect Help", url: "https://developer.apple.com/help/app-store-connect/" },
      { label: "Apple: Screenshot specifications", url: "https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications" },
    ],
  }),
  P({
    slug: "chrome-web-store-extension-optimization",
    title: "Chrome Web Store Optimization: How to Rank a Browser Extension",
    seoTitle: "Chrome Web Store Optimization: Rank Your Chrome Extension",
    description: "Optimize a Chrome extension listing: name, summary, description, screenshots, promo tiles, ratings, badges, and the policies that protect your ranking.",
    primaryKeyword: "Chrome Web Store optimization",
    secondaryKeywords: ["Chrome extension SEO", "rank Chrome extension", "Chrome Web Store listing"],
    category: "Other App Stores",
    answer: "Chrome Web Store optimization starts with a clear name and a 132-character summary that state the extension's job, a detailed description written for people rather than keyword stuffing, and screenshots at 1280 x 800 that show the extension working on real pages. Ratings, active users, and engagement influence visibility. Featured and Established Publisher badges add trust. Single-purpose design, minimal permissions, and accurate privacy disclosures keep the listing safe.",
    sections: [
      ["How people find extensions", [
        "Users discover extensions through Chrome Web Store search, category pages, editorial collections, and the Featured badge, but also heavily through web search, articles, and recommendations. Search queries are usually task-based, such as block ads, dark mode, save to notes, or grammar checker. The store's ranking considers relevance along with quality signals such as ratings, user counts, and engagement.",
        "Because so much discovery starts outside the store, the listing must convert visitors who arrive from a blog post or a search result. A clear summary, strong screenshots, and visible ratings do most of that work, much like a mobile listing. Our [app store conversion rate optimization](/blog/app-store-conversion-rate-optimization/) principles apply directly.",
      ]],
      ["Name, summary, and description", [
        "The name should combine the brand with the core function where it reads naturally, such as Brand: PDF Editor. The summary, taken from the manifest description field and limited to 132 characters, appears in search results and should state the job and the key benefit. The detailed description supports keywords too, but write it for people: what it does, how it works, privacy practices, and support links.",
        "The Chrome Web Store's spam policy prohibits keyword stuffing, misleading descriptions, and unattributed testimonials, and violations can lead to removal. Use natural language and include the terms users actually search, a balance covered in our guide to [Google Play keyword optimization](/blog/google-play-keyword-optimization/), which follows a similar philosophy.",
      ]],
      ["Images: icon, screenshots, and promo tiles", [
        "Provide a 128 x 128 store icon (with artwork around 96 x 96 and transparent padding), at least one screenshot at 1280 x 800 or 640 x 400, up to five in total, and a 440 x 280 small promo tile. A 1400 x 560 marquee image is optional but used if the extension is featured in a carousel. A YouTube video can also be added.",
        "Screenshots should show the extension working on a familiar page with a short caption explaining the benefit, not just the settings popup. Use high contrast and real content so the result is obvious at a glance. The creative principles in our [first three screenshots strategy](/blog/first-three-screenshots-strategy/) translate well to extension listings.",
      ]],
      ["Ratings, reviews, users, and badges", [
        "Ratings and reviews appear prominently and influence both ranking and conversion. Ask for reviews at success moments, such as after the extension saves time for the tenth time, and reply to reviews, especially critical ones. Our guide to [review reply templates](/blog/review-reply-templates-that-convert/) works for extension developers too.",
        "Two badges add credibility. The Featured badge is granted to extensions that follow technical best practices and offer a strong user experience. The Established Publisher badge recognizes publishers with verified identity and a good track record with the store. Both can lift conversion, so meet their criteria as part of your roadmap.",
      ]],
      ["Policies that protect your ranking", [
        "Extensions must have a single, narrow purpose that is easy to understand, and request only the permissions they need. Broad host permissions trigger warnings at install and closer review. Every extension must complete privacy practices disclosures, and those that handle user data must follow the limited use requirements.",
        "Extensions built on outdated platforms lose reach as Chrome evolves, as the Manifest V3 migration showed. Keep the codebase current, respond quickly to policy notices, and avoid monetization through injected ads or affiliate redirects without clear disclosure, which can lead to removal and a loss of all ratings.",
      ]],
      ["Common extension listing mistakes", [
        "Many developers treat the listing as an afterthought and paste the manifest description into every field. The result is a vague summary, a description with no structure, and a single settings screenshot. Others chase ranking by repeating keywords or naming competitors, which breaches the spam policy and puts the whole extension at risk.",
        "Permission creep is the quieter mistake. Each new feature adds a permission, the install warning grows more alarming, and conversion falls without anyone connecting the two. Review permissions with every release, move rarely used features to optional permissions, and explain in the description exactly why each remaining permission is needed.",
      ]],
      ["A worked example: a tab manager extension", [
        "A tab manager lists itself as TabPro with the summary The best extension for productivity. It ranks poorly for tab-related searches. The team renames it TabPro: Tab Manager & Session Saver, rewrites the summary as Group, save, and restore tabs in one click to reduce memory use, and replaces settings screenshots with before-and-after images of a crowded tab bar.",
        "It removes an unused all-sites permission that triggered an alarming install warning, adds a privacy section to the description, and starts prompting for reviews after users restore a saved session. Over two months, store impressions rise for tab manager searches, install conversion improves, and the extension qualifies for the Featured badge.",
      ]],
    ],
    steps: [
      ["Define the single purpose", "Write one sentence describing what the extension does, and remove features or permissions that do not serve it."],
      ["Write the name and 132-character summary", "Combine brand and function in the name, and state the job and benefit in the summary."],
      ["Create benefit-led images", "Produce 1280 x 800 screenshots of the extension working on real pages, plus the 440 x 280 promo tile."],
      ["Minimize permissions and disclose privacy", "Request only required permissions and complete privacy practices accurately."],
      ["Build ratings at success moments", "Prompt for reviews after users experience the core benefit, and reply to every critical review."],
    ],
    examples: [
      ["Summary", "The best extension for productivity!", "Group, save, and restore tabs in one click to reduce memory use.", "A specific job and benefit outperform vague superlatives and avoid spam-policy risk."],
      ["Permissions", "Read and change all your data on all websites.", "Access only the tabs API, with optional site access requested when needed.", "Broad permissions scare users at install and invite closer review."],
      ["Screenshot", "The extension's settings popup.", "Before and after: 40 tabs collapsed into four named groups.", "Users install outcomes, not settings."],
    ],
    playbook: ["Keep one clear purpose", "Use brand plus function in the name", "Write the 132-character summary as a value proposition", "Show the extension working on real pages", "Request minimal permissions", "Work toward Featured and Established Publisher badges"],
    metrics: ["Store listing views and install conversion", "Weekly active users", "Average rating and review volume", "Uninstall rate in the first week", "Badge status"],
    faqs: [
      ["How do Chrome Web Store rankings work?", "Ranking considers relevance to the search query along with quality signals such as ratings, user counts, and engagement. Exact weights are not published."],
      ["What size are Chrome Web Store screenshots?", "1280 x 800 or 640 x 400 pixels. You can upload up to five, and a 440 x 280 small promo tile is required."],
      ["How long can a Chrome extension summary be?", "Up to 132 characters, taken from the description field in the extension's manifest."],
      ["How do I get the Featured badge?", "Follow Chrome's technical best practices, provide a strong user experience and clear listing, and keep privacy and permissions minimal. Google grants the badge after review."],
    ],
    related: ["app-store-conversion-rate-optimization", "web-to-app-seo-indexing", "review-reply-templates-that-convert", "mac-app-store-optimization"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Chrome for Developers: Chrome Web Store documentation", url: "https://developer.chrome.com/docs/webstore/" },
    ],
  }),
];
