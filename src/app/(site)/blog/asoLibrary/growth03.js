import { released } from "./release";

const P = released("2026-11-13");

// Monetization and product-growth guides: answer-first, with steps, examples
// and FAQs, linking into the existing ASO library.
const base = [
  P({
    slug: "in-app-purchase-types-explained",
    title: "In-App Purchase Types Explained: Consumable, Non-Consumable and Subscriptions",
    seoTitle: "In-App Purchase Types Explained: Which to Use",
    description: "The four in-app purchase types explained: consumables, non-consumables, auto-renewing and non-renewing subscriptions, and when to use each one.",
    primaryKeyword: "in-app purchase types",
    secondaryKeywords: ["consumable vs non-consumable", "auto-renewable subscription", "IAP types"],
    category: "Monetization",
    answer: "There are four in-app purchase types. Consumables are used up and can be bought again, such as coins or credits. Non-consumables are bought once and kept forever, such as removing ads or unlocking a pro feature. Auto-renewable subscriptions charge on a schedule until cancelled. Non-renewing subscriptions give access for a fixed period without renewing. Choose the type that matches how users get value from what they buy.",
    sections: [
      ["Why the purchase type matters", [
        "The purchase type decides how the store handles billing, restoring purchases on a new device, refunds and reporting. Picking the wrong type creates support problems: a lifetime unlock set up as a consumable cannot be restored, and users who reinstall lose what they paid for.",
        "It also shapes your business model. Consumables and subscriptions create repeat revenue; non-consumables create one-time revenue. Our guide on [how to make money from an app](/blog/how-to-make-money-from-an-app/) compares the models.",
      ]],
      ["Consumables", [
        "Consumables are items used up after purchase, such as game currency, extra lives, boosts, hints or credits for AI generations. Users can buy them again and again, and they are not restored on a new device because they were spent.",
        "Track the balance on your own server so it survives reinstalls, and design pricing tiers so larger packs offer better value without making small packs feel like a trap.",
      ]],
      ["Non-consumables", [
        "Non-consumables are bought once and owned permanently: removing ads, unlocking a premium filter pack, or a lifetime pro upgrade. The store lets users restore them on new devices, so your app needs a visible restore purchases option.",
        "They suit apps where value is delivered once rather than continuously, and they are simple for users to understand.",
      ]],
      ["Auto-renewable subscriptions", [
        "Auto-renewable subscriptions charge on a regular schedule, such as weekly, monthly or yearly, until the user cancels. They suit apps that deliver ongoing value: content, cloud services, fitness programs, productivity tools or AI features with running costs.",
        "Both stores support free trials, introductory prices, subscription groups for tiers, and win-back offers. See [subscription app pricing strategy](/blog/subscription-app-pricing-strategy/) for structuring plans.",
      ]],
      ["Non-renewing subscriptions", [
        "Non-renewing subscriptions give access for a fixed period, such as a season pass or a three-month course, and do not renew automatically. Users must buy again to extend.",
        "They fit time-boxed content, but you must manage the expiry date yourself and sync access across devices through your own account system.",
      ]],
      ["Mixing types in one app", [
        "Many apps combine types: a subscription for core features plus consumables for extras, or a lifetime non-consumable alongside monthly and yearly subscriptions. Keep the offer simple enough that users understand what they get.",
        "Our [lifetime deal vs subscription](/blog/lifetime-deal-vs-subscription/) guide covers when a one-time option helps.",
      ]],
      ["Store rules to know", [
        "Digital goods and features unlocked in the app generally must use the store's billing system, with regional exceptions that change over time. Physical goods and real-world services usually use other payment methods.",
        "Read [App Store and Google Play fees](/blog/app-store-and-google-play-fees/) and check the current guidelines for your countries before choosing a payment flow.",
      ]],
      ["Showing purchases on your store listing", [
        "Both stores show that an app offers in-app purchases. On the App Store you can also promote specific in-app purchases on the product page, which can appear in search.",
        "Our guide to [promoted in-app purchases](/blog/promoted-in-app-purchases-ios/) explains how to use them for discovery.",
      ]],
      ["Testing and verification", [
        "Test every purchase type in the stores' sandbox or test tracks, including purchase, restore, renewal, cancellation and refund cases. Verify receipts or purchase tokens on your server rather than trusting the device alone.",
        "Broken restore and renewal flows are a common cause of one-star reviews, so test them before every major release.",
      ]],
      ["Common mistakes", [
        "Common mistakes include using a consumable for a permanent unlock, hiding the restore option, charging a subscription for something that delivers no ongoing value, and making prices confusing across tiers.",
        "Another is ignoring how purchases appear in reviews: unclear renewals lead to complaints that hurt ratings.",
      ]],
      ["A worked example: a photo editor's purchase setup", [
        "A photo editing app sells a monthly and yearly subscription for all premium tools, a non-consumable to remove ads for users who do not want to subscribe, and consumable credits for AI background generation, which has a real cost per use.",
        "Each type matches how value is delivered: ongoing tools, a one-time preference, and a metered cost. Support tickets about lost purchases fall once restore works for the ad removal and subscriptions.",
      ]],
    ],
    steps: [
      ["Map how users get value", "Ongoing, one-time, metered or time-limited."],
      ["Pick the matching purchase type", "Subscription, non-consumable, consumable or non-renewing."],
      ["Design simple tiers", "Keep the offer easy to understand."],
      ["Build restore and server verification", "Protect purchases across devices."],
      ["Test every billing case", "Purchase, renewal, cancellation and refund."],
    ],
    examples: [
      ["Ad removal", "Set up as a consumable.", "Set up as a non-consumable with restore.", "Permanent unlocks must restore on new devices."],
      ["AI credits", "Unlimited AI in a cheap one-time unlock.", "Consumable credits or a subscription.", "Metered costs need repeat revenue."],
      ["Season pass", "Auto-renewing subscription.", "Non-renewing subscription with clear end date.", "Time-boxed content should not renew unexpectedly."],
    ],
    playbook: ["Match type to value", "Offer a restore option", "Verify purchases server-side", "Keep tiers simple", "Test billing edge cases", "Explain renewals clearly"],
    metrics: ["Conversion to paid", "Average revenue per paying user", "Restore success rate", "Refund rate", "Purchase-related review complaints"],
    faqs: [
      ["What is a consumable in-app purchase?", "An item that is used up and can be bought again, such as coins, credits or extra lives."],
      ["What is a non-consumable in-app purchase?", "A one-time purchase the user keeps forever, such as removing ads or unlocking a feature."],
      ["What is the difference between auto-renewing and non-renewing subscriptions?", "Auto-renewing subscriptions charge until cancelled; non-renewing ones give access for a fixed period without renewing."],
      ["Do consumables get restored on a new device?", "No. Consumables are used up, so track balances on your own server."],
      ["Can one app use several purchase types?", "Yes. Many apps combine subscriptions with consumables or a lifetime unlock."],
      ["Do in-app purchases affect ASO?", "They appear on the listing, and promoted in-app purchases on the App Store can help discovery."],
    ],
    related: ["how-to-make-money-from-an-app", "subscription-app-pricing-strategy", "promoted-in-app-purchases-ios", "app-store-and-google-play-fees"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "involuntary-churn-billing-retry",
    title: "Involuntary Churn in Subscription Apps: Billing Retry, Grace Periods and Recovery",
    seoTitle: "Involuntary Churn in Apps: Billing Retry and Recovery",
    description: "Recover subscription revenue lost to failed payments: billing retry, grace periods, in-app messages and how to measure involuntary churn.",
    primaryKeyword: "involuntary churn subscription app",
    secondaryKeywords: ["billing retry", "grace period subscriptions", "failed payment recovery"],
    category: "Monetization",
    answer: "Involuntary churn happens when a subscriber's payment fails, for example because a card expired, rather than because they chose to cancel. Both the App Store and Google Play retry failed payments for a period, and you can enable a grace period so users keep access while billing is retried. Add in-app messages asking users to update their payment method, and track recovered subscriptions as a separate metric.",
    sections: [
      ["Voluntary versus involuntary churn", [
        "Voluntary churn is a user deciding to cancel. Involuntary churn is a subscription lapsing because payment failed: an expired card, insufficient funds or a bank decline. The user often still wants the app.",
        "Because these users did not choose to leave, involuntary churn is usually the easiest subscription revenue to win back.",
      ]],
      ["How billing retry works", [
        "When a renewal payment fails, the stores keep trying to charge the user for a period of time. If a retry succeeds, the subscription continues. Store notifications tell your server when a subscription enters billing retry and when it recovers or expires.",
        "Listen to these server notifications so your app knows the subscription state accurately rather than guessing from the device.",
      ]],
      ["Grace periods", [
        "A grace period lets users keep access for a short time after a failed payment while the store retries. It prevents a paying user from losing access because of a temporary card problem, and it gives them time to fix payment details.",
        "Enable grace periods in App Store Connect and Play Console if they suit your app; for most subscription apps they reduce lost subscribers and frustrated reviews.",
      ]],
      ["Ask users to fix payment", [
        "Show a clear in-app message when a subscription is in a grace period or billing retry, explaining what happened and linking to the store's payment settings. Keep the tone helpful, not alarming.",
        "Apple and Google also notify users about billing problems, but an in-app message at the right moment adds a strong nudge.",
      ]],
      ["Use email and push carefully", [
        "If users opted in, email and push can remind them to update payment details. Send a small number of messages across the retry window rather than many in a few days.",
        "See our [push notification strategy](/blog/push-notification-strategy/) and [email marketing for apps](/blog/email-marketing-for-mobile-apps/) guides.",
      ]],
      ["Win back users after expiry", [
        "When retries end and the subscription expires, the user becomes a win-back candidate. Win-back offers and offer codes can bring them back with a discount or free period.",
        "See [subscription offer codes and win-back offers](/blog/subscription-offer-codes-win-back-offers/).",
      ]],
      ["Measuring involuntary churn", [
        "Track the number of subscriptions entering billing retry, the share recovered during grace or retry, and the share that expires. Separate these from voluntary cancellations in reports.",
        "Recovered revenue is a direct way to raise lifetime value, explained in [mobile app LTV calculation](/blog/mobile-app-ltv-calculation/).",
      ]],
      ["Prevent payment failures", [
        "Encourage annual plans for loyal users, which reduces renewal events, and remind users before an annual renewal so the charge is expected.",
        "Clear renewal information on your paywall reduces disputes and refunds. See [paywall design best practices](/blog/paywall-design-best-practices/).",
      ]],
      ["Effects on reviews and ratings", [
        "Users who lose access unexpectedly often leave angry reviews. Grace periods and clear messaging prevent many of these.",
        "Reply to billing-related reviews with steps to fix payment, using our [review reply templates](/blog/review-reply-templates-that-convert/).",
      ]],
      ["Common mistakes", [
        "Common mistakes include cutting off access immediately on failure, not listening to store server notifications, showing scary error messages, and counting involuntary churn as normal cancellation.",
        "Another is spamming users with reminders, which drives them to cancel deliberately.",
      ]],
      ["A worked example: a fitness subscription", [
        "A fitness app enables grace periods and adds a banner during billing retry linking to payment settings. It sends one email at the start of retry and one near the end.",
        "A meaningful share of failed renewals now recover before expiry, and reviews about lost access drop.",
      ]],
    ],
    steps: [
      ["Listen to store notifications", "Track billing retry, grace and recovery states."],
      ["Enable grace periods", "Keep access while payment is retried."],
      ["Show an in-app fix-payment message", "Link to store payment settings."],
      ["Add light reminders", "One or two emails or pushes across the window."],
      ["Measure recovery", "Report involuntary churn separately."],
    ],
    examples: [
      ["Failed payment", "Access cut off immediately.", "Grace period with a fix-payment banner.", "Users keep value and fix their card."],
      ["Message", "Payment error! Subscription cancelled.", "Your payment didn't go through. Update it to keep your plan.", "Calm, helpful messages recover more users."],
      ["Reporting", "All churn in one number.", "Voluntary and involuntary churn tracked separately.", "Different causes need different fixes."],
    ],
    playbook: ["Track subscription states server-side", "Enable grace periods", "Message users in-app", "Remind lightly", "Win back expired users", "Report recovery separately"],
    metrics: ["Subscriptions entering billing retry", "Recovery rate during grace", "Involuntary churn rate", "Win-back conversion", "Billing-related review share"],
    faqs: [
      ["What is involuntary churn?", "Subscription loss caused by failed payments rather than a user choosing to cancel."],
      ["What is a billing grace period?", "A period where users keep access after a failed payment while the store retries billing."],
      ["Do the App Store and Google Play retry failed payments?", "Yes. Both retry failed renewals for a period before the subscription expires."],
      ["How do I know a payment failed?", "Use the stores' server notifications for subscription status changes."],
      ["Can I message users about failed payments?", "Yes. In-app messages and opted-in email or push can ask users to update payment details."],
      ["How do I recover users after expiry?", "Use win-back offers or offer codes to invite them back."],
    ],
    related: ["subscription-offer-codes-win-back-offers", "mobile-app-ltv-calculation", "paywall-design-best-practices", "subscription-app-pricing-strategy"],
    serviceLinks: ["/services/app-reputation-management/"],
  }),
  P({
    slug: "lifetime-deal-vs-subscription",
    title: "Lifetime Purchase vs Subscription: Which Pricing Works Better for Your App?",
    seoTitle: "Lifetime Purchase vs Subscription for Apps",
    description: "Lifetime purchase, subscription or both? Compare revenue, user trust, running costs and store rules, with pricing tactics and a decision framework.",
    primaryKeyword: "lifetime purchase vs subscription",
    secondaryKeywords: ["lifetime deal app", "one-time purchase vs subscription", "app pricing lifetime"],
    category: "Monetization",
    answer: "Subscriptions suit apps with ongoing costs or continuously updated value, and produce predictable recurring revenue. A lifetime purchase suits apps whose value is delivered once, and it appeals to users who dislike subscriptions. Many apps offer both: monthly and yearly plans plus a higher-priced lifetime option that anchors the yearly plan and converts subscription-averse users.",
    sections: [
      ["Why the choice matters", [
        "Pricing model affects revenue, cash flow, user trust and reviews. Users increasingly push back on subscriptions for simple tools, while apps with servers, content or AI costs need recurring revenue to stay sustainable.",
        "The right model matches how you deliver value over time.",
      ]],
      ["When subscriptions fit", [
        "Subscriptions fit apps that deliver ongoing value or carry ongoing costs: content libraries, cloud sync, coaching programs, AI features and services that improve regularly. They create predictable revenue to fund development.",
        "See [subscription app pricing strategy](/blog/subscription-app-pricing-strategy/) for plan structure.",
      ]],
      ["When a lifetime purchase fits", [
        "A lifetime purchase fits utilities and tools with low running costs, where users expect to buy once, such as a calculator, a scanner without cloud features, or a pro unlock for a simple editor.",
        "It is set up as a non-consumable purchase, explained in [in-app purchase types](/blog/in-app-purchase-types-explained/).",
      ]],
      ["Offering both", [
        "Offering a lifetime option alongside subscriptions converts users who will never subscribe. A higher lifetime price also makes the yearly plan look like good value.",
        "Price the lifetime option at a multiple of the yearly plan high enough to protect recurring revenue, and test it.",
      ]],
      ["Costs you must cover", [
        "If each user costs you money every month, such as storage or AI processing, a lifetime price can become unprofitable as heavy users stay for years. Model the cost per user over time before offering lifetime access.",
        "Our [how much it costs to make an app](/blog/how-much-does-it-cost-to-make-an-app/) guide covers running costs.",
      ]],
      ["User trust and reviews", [
        "Unexpected subscriptions and confusing renewals cause one-star reviews. Clear pricing, honest trial terms and a fair one-time option reduce complaints.",
        "Monitor reviews mentioning price, as covered in [improving app ratings](/blog/improve-app-ratings/).",
      ]],
      ["How it shows on the store listing", [
        "Your screenshots and description should state what is free and what is paid. Mismatches between listing and paywall frustrate users.",
        "See [paywall and store listing alignment](/blog/paywall-and-store-listing-alignment/).",
      ]],
      ["Testing your pricing", [
        "Test price points and plan mixes with paywall experiments, measuring conversion and revenue per user over time, not just initial conversion.",
        "A lifetime plan can raise initial revenue but lower long-term revenue if it replaces subscriptions that would have continued.",
      ]],
      ["Common mistakes", [
        "Common mistakes include putting a simple tool behind an expensive weekly subscription, offering a cheap lifetime deal for an app with high running costs, and hiding the price until after onboarding.",
        "Another is never revisiting pricing as the app adds value.",
      ]],
      ["A simple decision framework", [
        "Ask three questions: does the user get value continuously, does each user cost you money over time, and do your users accept subscriptions in this category? Yes to the first two points to subscriptions; no to both points to a one-time price.",
        "Mixed answers suggest offering both and testing.",
      ]],
      ["A worked example: a PDF scanner", [
        "A PDF scanner with on-device processing offers a yearly subscription and a lifetime unlock. The lifetime option converts users who left negative reviews about subscriptions, and reviews mentioning price improve.",
        "When the app adds cloud sync with ongoing costs, it keeps lifetime for core features and adds a subscription for sync.",
      ]],
    ],
    steps: [
      ["Map value over time", "Continuous or one-time?"],
      ["Model cost per user", "Include storage, servers and AI."],
      ["Choose a model or both", "Subscriptions, lifetime or a mix."],
      ["Price the lifetime anchor", "Set it high enough to protect recurring revenue."],
      ["Test and monitor reviews", "Measure revenue over time and price complaints."],
    ],
    examples: [
      ["Utility app", "Weekly subscription for a simple tool.", "One-time pro unlock.", "Matches user expectations for the category."],
      ["AI app", "Cheap lifetime unlimited AI.", "Subscription with usage limits.", "Ongoing costs need recurring revenue."],
      ["Paywall", "Monthly plan only.", "Monthly, yearly and a higher lifetime option.", "Choice converts more users."],
    ],
    playbook: ["Match pricing to value delivery", "Model long-term costs", "Offer choice where it fits", "Anchor with lifetime pricing", "Test revenue over time", "Watch price-related reviews"],
    metrics: ["Paywall conversion by plan", "Revenue per user over 12 months", "Lifetime plan share", "Refund rate", "Price-related review complaints"],
    faqs: [
      ["Is a lifetime purchase better than a subscription?", "It depends on whether value and costs are ongoing. Many apps offer both."],
      ["How should I price a lifetime plan?", "Set it at a multiple of the yearly price high enough to protect recurring revenue, then test."],
      ["Do users prefer one-time purchases?", "Many users dislike subscriptions for simple tools, so a one-time option can convert them."],
      ["Can lifetime plans hurt revenue?", "Yes, if they replace subscriptions that would have renewed for years or if users cost money every month."],
      ["How do I set up a lifetime purchase?", "As a non-consumable in-app purchase with a restore option."],
      ["Does pricing affect reviews?", "Yes. Confusing or unfair pricing is a common cause of negative reviews."],
    ],
    related: ["subscription-app-pricing-strategy", "in-app-purchase-types-explained", "paywall-design-best-practices", "freemium-vs-paid-app-pricing"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "hard-vs-soft-paywall",
    title: "Hard Paywall vs Soft Paywall: Which Converts Better for Your App?",
    seoTitle: "Hard Paywall vs Soft Paywall: Which to Choose",
    description: "Hard and soft paywalls compared: how each works, when each converts better, effects on retention and reviews, and how to test placement.",
    primaryKeyword: "hard paywall vs soft paywall",
    secondaryKeywords: ["hard paywall", "soft paywall", "paywall placement"],
    category: "Monetization",
    answer: "A hard paywall blocks the app until the user starts a trial or subscribes. A soft paywall lets users use some features for free and asks them to upgrade later. Hard paywalls often convert more installs to trials in apps with a clear, immediate promise, such as fitness programs or education. Soft paywalls suit apps that need habit or trust first. Test both, judging revenue and retention over time.",
    sections: [
      ["What a hard paywall is", [
        "A hard paywall appears during or right after onboarding and requires a trial or purchase to continue. Users who do not pay cannot use the core app.",
        "It works when the store listing and onboarding have already convinced users of the value, and the app's promise is clear from the start.",
      ]],
      ["What a soft paywall is", [
        "A soft paywall gives free access to part of the app and shows upgrade prompts at natural moments, such as when users reach a limit or try a premium feature. Users can dismiss it and keep using the free version.",
        "It suits apps where value builds over time, and freemium models covered in [freemium vs paid pricing](/blog/freemium-vs-paid-app-pricing/).",
      ]],
      ["Conversion trade-offs", [
        "Hard paywalls typically convert a higher share of installs to trials quickly but lose users who want to try first. Soft paywalls keep more users but convert a smaller share, often later.",
        "The right choice depends on how quickly users can see value and on your category.",
      ]],
      ["Retention and reviews", [
        "Users who hit a hard paywall unexpectedly may leave negative reviews saying the app is not free. Clear messaging on the listing reduces this.",
        "Soft paywalls risk users never upgrading. Monitor both conversion and reviews, using our [improve app ratings](/blog/improve-app-ratings/) guide.",
      ]],
      ["Align with your store listing", [
        "If the app requires a subscription, your screenshots and description should say so, for example by mentioning the free trial. Misleading listings lead to complaints and refunds.",
        "See [paywall and store listing alignment](/blog/paywall-and-store-listing-alignment/).",
      ]],
      ["Designing the paywall screen", [
        "Whichever model you choose, the paywall should state benefits clearly, show prices and trial terms, offer plan choices and include restore and terms links.",
        "Our [paywall design best practices](/blog/paywall-design-best-practices/) guide covers layout.",
      ]],
      ["Hybrid approaches", [
        "Many apps combine both: a paywall in onboarding that can be closed, followed by limits on free usage. Others show a hard paywall only for some features.",
        "Hybrid models let you capture motivated users early while keeping others in the funnel.",
      ]],
      ["How to test", [
        "Run paywall placement tests with enough users, comparing trial starts, paid conversions, revenue per install and retention over several weeks.",
        "Short tests can favour hard paywalls on trial starts while long-term revenue tells a different story.",
      ]],
      ["Store rules", [
        "Paywalls must show prices and terms clearly and follow store guidelines for subscriptions. Apps that pretend to be free and hide all value behind a paywall risk review issues.",
        "Read [App Store review guidelines explained](/blog/app-store-review-guidelines-explained/).",
      ]],
      ["Common mistakes", [
        "Common mistakes include showing a hard paywall before explaining value, hiding the close button in a soft paywall, mismatching listing and paywall, and judging tests on trial starts alone.",
        "Another is never re-testing as the product changes.",
      ]],
      ["A worked example: a language app", [
        "A language app tests a hard paywall after a short placement quiz against a soft paywall after the first lesson. The hard paywall gets more trial starts; the soft paywall retains more users who convert later.",
        "After eight weeks, revenue per install is similar, but the soft paywall produces better reviews, so the team keeps it with a stronger upgrade moment after lesson three.",
      ]],
    ],
    steps: [
      ["Assess time to value", "How quickly can users see the benefit?"],
      ["Choose a starting model", "Hard, soft or hybrid."],
      ["Align the store listing", "State trials and paid features clearly."],
      ["Design a clear paywall", "Benefits, prices, terms and restore."],
      ["Test over several weeks", "Compare revenue and retention, not just trials."],
    ],
    examples: [
      ["Fitness program", "Soft paywall with endless free content.", "Hard paywall after a personalised plan preview.", "A clear promise supports a hard paywall."],
      ["Note-taking app", "Hard paywall on first launch.", "Soft paywall when users hit the free note limit.", "Habit-based value needs time."],
      ["Test metric", "Trial starts after one week.", "Revenue per install after eight weeks.", "Long-term value decides."],
    ],
    playbook: ["Match model to time to value", "Align listing with paywall", "Design clearly", "Consider hybrids", "Test long enough", "Monitor reviews"],
    metrics: ["Trial start rate", "Trial-to-paid conversion", "Revenue per install", "Day 30 retention", "Paywall-related reviews"],
    faqs: [
      ["What is a hard paywall?", "A paywall that blocks the app until the user starts a trial or subscribes."],
      ["What is a soft paywall?", "A paywall that lets users use some features free and asks them to upgrade later."],
      ["Which paywall converts better?", "Hard paywalls often convert more installs to trials; soft paywalls retain more users. Test for your app."],
      ["Do hard paywalls hurt reviews?", "They can if users expect a free app, so state paid access clearly on the listing."],
      ["Can I use both?", "Yes. Hybrid approaches combine an early paywall with free usage limits."],
      ["How long should a paywall test run?", "Several weeks, so you can compare revenue and retention, not just trial starts."],
    ],
    related: ["paywall-design-best-practices", "paywall-and-store-listing-alignment", "freemium-vs-paid-app-pricing", "subscription-app-pricing-strategy"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "ad-mediation-bidding-vs-waterfall",
    title: "Ad Mediation Explained: In-App Bidding vs Waterfall for Higher Ad Revenue",
    seoTitle: "Ad Mediation: In-App Bidding vs Waterfall Explained",
    description: "How in-app ad mediation works, waterfall vs in-app bidding, hybrid setups, and how to raise ad revenue without hurting retention or ratings.",
    primaryKeyword: "in-app bidding vs waterfall",
    secondaryKeywords: ["ad mediation", "in-app bidding", "waterfall mediation"],
    category: "Monetization",
    answer: "Ad mediation lets an app request ads from several ad networks to fill each slot at the best price. In a waterfall, networks are called one after another in a fixed priority order. In in-app bidding, networks bid at the same time and the highest bid wins. Bidding usually raises competition and simplifies setup, and many apps run a hybrid. Balance revenue with ad frequency so ratings stay healthy.",
    sections: [
      ["What ad mediation does", [
        "Mediation platforms connect your app to multiple ad networks through one SDK. For each ad opportunity, the platform decides which network serves the ad, aiming for the highest revenue.",
        "Without mediation, you depend on a single network's demand and prices. See [AdMob ad monetization](/blog/admob-ad-monetization-guide/) for one common starting point.",
      ]],
      ["How the waterfall works", [
        "In a waterfall, you rank networks and price floors in a fixed order. The first network gets the chance to fill the ad at its floor price; if it passes, the next network is called, and so on.",
        "Waterfalls need constant manual tuning of order and floors, and a network lower in the list may have been willing to pay more than the one that won.",
      ]],
      ["How in-app bidding works", [
        "In in-app bidding, networks submit bids at the same time for each impression, and the highest bid wins. This increases competition and reduces the need to manage price floors manually.",
        "Bidding also reduces latency from calling networks one by one, which can help ads load faster.",
      ]],
      ["Hybrid setups", [
        "Not every network supports bidding, so many apps run bidding networks alongside a waterfall for the rest. The mediation platform compares bids with waterfall prices.",
        "Review regularly which networks to keep, based on their share of revenue and fill.",
      ]],
      ["Choosing ad formats", [
        "Rewarded ads, where users opt in for a reward, usually perform well and annoy users less. Interstitials earn well but can frustrate users if shown too often. Banners earn less but are unobtrusive.",
        "Place formats where they fit the user flow, not where they interrupt core tasks.",
      ]],
      ["Ad frequency and user experience", [
        "Too many ads reduce retention and lead to negative reviews, which hurt conversion and rankings. Set frequency caps and avoid ads at moments of frustration.",
        "Monitor ad-related review complaints, as covered in [improve app ratings](/blog/improve-app-ratings/).",
      ]],
      ["Combining ads with in-app purchases", [
        "Many apps earn from ads and also sell ad removal or a subscription. This lets users who dislike ads pay instead.",
        "See [in-app purchase types](/blog/in-app-purchase-types-explained/) and [how to make money from an app](/blog/how-to-make-money-from-an-app/).",
      ]],
      ["Privacy and consent", [
        "Ad revenue depends on consent and tracking rules. On iOS, App Tracking Transparency affects personalised ads; in some regions, consent management is legally required.",
        "See [ATT prompt opt-in rate](/blog/att-prompt-opt-in-rate/) and your privacy obligations in the [app privacy policy guide](/blog/app-privacy-policy-guide/).",
      ]],
      ["Measuring ad revenue", [
        "Track average revenue per daily active user, eCPM by format and network, fill rate, and ad impressions per user. Compare against retention so revenue gains do not come from driving users away.",
        "Test changes with controlled experiments where possible.",
      ]],
      ["Common mistakes", [
        "Common mistakes include running a stale waterfall without updates, showing interstitials at app launch, ignoring consent rules, and adding networks without measuring their contribution.",
        "Another is maximising short-term revenue at the cost of retention.",
      ]],
      ["A worked example: a casual game", [
        "A casual game moves from a manually managed waterfall to in-app bidding for its main networks, keeps two waterfall networks for extra fill, and adds a rewarded ad for extra lives.",
        "Revenue per user rises, interstitial frequency drops after a cap is set, and reviews mentioning ads decline.",
      ]],
    ],
    steps: [
      ["Pick a mediation platform", "Connect several networks through one SDK."],
      ["Enable bidding where available", "Let networks compete per impression."],
      ["Keep a lean waterfall", "Only for networks without bidding."],
      ["Set formats and frequency caps", "Prefer rewarded ads; cap interstitials."],
      ["Measure revenue and retention", "Track ARPDAU, eCPM and churn together."],
    ],
    examples: [
      ["Setup", "Fixed waterfall untouched for a year.", "Bidding plus a small reviewed waterfall.", "Competition raises prices."],
      ["Format", "Interstitial at app launch.", "Rewarded ad for an optional boost.", "Opt-in ads annoy users less."],
      ["Frequency", "No cap.", "Interstitial at most every few minutes of play.", "Caps protect retention and reviews."],
    ],
    playbook: ["Use mediation", "Prefer bidding", "Review waterfall networks", "Favour rewarded formats", "Cap frequency", "Measure revenue with retention"],
    metrics: ["ARPDAU", "eCPM by network", "Fill rate", "Impressions per user", "Retention and ad-related reviews"],
    faqs: [
      ["What is ad mediation?", "A system that requests ads from several networks to fill each ad slot at the best price."],
      ["What is the difference between bidding and waterfall?", "In a waterfall networks are called in a fixed order; in bidding they bid at the same time and the highest wins."],
      ["Is in-app bidding better?", "It usually increases competition and simplifies management, so many apps adopt it, often in a hybrid setup."],
      ["Which ad format earns the most?", "Interstitials and rewarded ads usually earn more than banners; rewarded ads tend to be better tolerated."],
      ["Do ads hurt app ratings?", "Too many or badly placed ads can, so use frequency caps and good placement."],
      ["Should I sell ad removal?", "Yes, it lets users who dislike ads pay instead and adds revenue."],
    ],
    related: ["admob-ad-monetization-guide", "how-to-make-money-from-an-app", "in-app-purchase-types-explained", "att-prompt-opt-in-rate"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "north-star-metric-for-apps",
    title: "North Star Metric for Apps: How to Choose One That Drives Real Growth",
    seoTitle: "North Star Metric for Apps: How to Choose Yours",
    description: "What a north star metric is, examples by app type, how to choose one tied to user value, its input metrics, and how it guides ASO and growth.",
    primaryKeyword: "north star metric for apps",
    secondaryKeywords: ["north star metric examples", "app growth metric", "product north star"],
    category: "Strategy and Operations",
    answer: "A north star metric is the single measure that best captures the value your app delivers to users and predicts long-term growth, such as weekly active listeners for a music app or completed workouts for a fitness app. Choose a metric tied to real user value, that the team can influence, and that leads to revenue. Support it with a few input metrics, such as activation, retention and conversion.",
    sections: [
      ["What a north star metric is", [
        "A north star metric focuses the whole team on one outcome that reflects users getting value. When it grows, the business should grow too.",
        "It is different from revenue or downloads, which can rise without users getting real value.",
      ]],
      ["Qualities of a good north star", [
        "A good north star reflects value delivered, is measurable regularly, can be influenced by product and marketing work, and leads to revenue over time. It should be easy to explain.",
        "Avoid vanity metrics such as total downloads, explained in [ASO KPIs](/blog/aso-kpis-metrics/).",
      ]],
      ["Examples by app type", [
        "A fitness app might use workouts completed per week; a meditation app, weekly meditators; a marketplace, completed transactions; a messaging app, daily active senders; a learning app, lessons completed.",
        "Each counts users doing the thing the app exists for.",
      ]],
      ["Input metrics", [
        "Input metrics are the levers that move the north star: new users, activation, frequency of use, retention and conversion. Teams own specific inputs.",
        "Store metrics such as conversion rate and installs feed the top of this tree.",
      ]],
      ["How ASO connects", [
        "ASO brings in the right users, which affects activation and retention as much as volume. Keywords and screenshots that attract mismatched users inflate installs but not the north star.",
        "See [impressions vs product page views](/blog/impressions-vs-product-page-views/) for store funnel metrics.",
      ]],
      ["Choosing yours", [
        "List candidate metrics, check whether each correlates with retention and revenue in your data, and choose the one most tied to value. Test the choice with the team: everyone should understand how their work moves it.",
        "Revisit the choice when the product or business model changes.",
      ]],
      ["Activation and the aha moment", [
        "Most north star metrics depend on users reaching their first moment of value quickly. Our [app activation and aha moment](/blog/app-activation-aha-moment/) guide explains how to find and shorten it.",
        "Activation is often the biggest early lever.",
      ]],
      ["Reporting the north star", [
        "Report the north star weekly with its input metrics, segmented by acquisition channel, platform and country. Annotate releases and marketing changes.",
        "See [ASO reporting dashboard setup](/blog/aso-reporting-dashboard-setup/).",
      ]],
      ["Common mistakes", [
        "Common mistakes include choosing revenue as the north star, picking a metric the team cannot influence, tracking too many top metrics, and never revisiting the choice.",
        "Another is optimizing the north star in ways that hurt user experience, such as forcing extra sessions.",
      ]],
      ["When to change it", [
        "Change the north star when your product strategy shifts, for example from single-player to social, or from free to subscription. Keep history so trends remain comparable.",
        "Changing too often confuses the team, so treat it as a yearly decision unless strategy changes.",
      ]],
      ["A worked example: a recipe app", [
        "A recipe app first tracked downloads, which grew while usage fell. It switched to recipes cooked per week, measured by users marking a recipe as cooked. Activation work, such as a quicker first recipe suggestion, became the priority.",
        "The team also changed store screenshots to show quick weeknight recipes, attracting users who cooked more.",
      ]],
    ],
    steps: [
      ["List candidate metrics", "Focus on users getting value."],
      ["Check links to retention and revenue", "Use your own data."],
      ["Pick one north star", "Easy to explain and influence."],
      ["Define input metrics", "Activation, frequency, retention, conversion."],
      ["Report weekly", "Segment and annotate changes."],
    ],
    examples: [
      ["Metric", "Total downloads.", "Workouts completed per week.", "Value delivered beats vanity volume."],
      ["Team focus", "Each team tracks different goals.", "Each team owns an input to one north star.", "Alignment speeds progress."],
      ["ASO", "Keywords chosen for volume.", "Keywords chosen for users who activate.", "Better users move the north star."],
    ],
    playbook: ["Tie the metric to value", "Check correlation with revenue", "Define inputs", "Align team ownership", "Report weekly", "Revisit yearly"],
    metrics: ["North star metric", "Activation rate", "Weekly active users", "Retention", "Conversion to paid"],
    faqs: [
      ["What is a north star metric?", "The single metric that best captures the value an app delivers and predicts long-term growth."],
      ["Should revenue be my north star?", "Usually not. Revenue follows value; choose a metric that reflects users getting value."],
      ["How many north star metrics should I have?", "One, supported by a few input metrics."],
      ["What are input metrics?", "Levers that move the north star, such as activation, retention and conversion."],
      ["How does ASO affect the north star?", "ASO decides which users arrive; attracting the right users improves activation and retention."],
      ["When should I change my north star?", "When product strategy or the business model changes significantly."],
    ],
    related: ["app-activation-aha-moment", "aso-kpis-metrics", "dau-mau-stickiness-ratio", "cohort-analysis-for-mobile-apps"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "app-activation-aha-moment",
    title: "App Activation: How to Find Your Aha Moment and Get Users There Faster",
    seoTitle: "App Activation: Find and Shorten Your Aha Moment",
    description: "Improve app activation: find your aha moment with data, measure time to value, cut onboarding friction and match your store listing to it.",
    primaryKeyword: "app activation",
    secondaryKeywords: ["aha moment app", "time to value", "activation rate mobile app"],
    category: "Retention and Engagement",
    answer: "App activation is the point where a new user first experiences the core value of your app, often called the aha moment. Find it by comparing what retained users did early with what churned users did, define it as a measurable action, then shorten the path to it by removing onboarding friction and setting expectations correctly on your store listing.",
    sections: [
      ["Why activation matters", [
        "Many new users leave in the first days. Users who reach the aha moment early are far more likely to keep using the app, subscribe and leave positive reviews.",
        "Improving activation often lifts retention more than any other change. See [mobile app retention rate benchmarks](/blog/mobile-app-retention-rate-benchmarks/).",
      ]],
      ["Finding your aha moment", [
        "Compare early actions of users who are still active after 30 days with those who left. Look for an action, often repeated a few times in the first days, that strongly separates the groups.",
        "Use [cohort analysis](/blog/cohort-analysis-for-mobile-apps/) to test candidate actions.",
      ]],
      ["Defining activation clearly", [
        "Write activation as a specific action within a time frame, such as completing a first workout within three days, or adding three friends in the first week. It must be measurable in analytics.",
        "A clear definition lets the whole team work on the same goal.",
      ]],
      ["Measuring time to value", [
        "Time to value is how long it takes a new user to reach activation. Track it as a distribution, not just an average, since a long tail of slow users hides problems.",
        "Break it down by acquisition channel and platform to find where users struggle.",
      ]],
      ["Remove onboarding friction", [
        "Cut steps that do not help users reach value: long sign-up forms, permission requests before they are needed, and tutorials users skip. Ask for information when it is useful.",
        "See [app onboarding best practices](/blog/app-onboarding-best-practices/).",
      ]],
      ["Personalise the first session", [
        "A short question about goals can tailor the first experience, showing each user the most relevant content or feature first.",
        "Keep personalisation questions few and clearly useful.",
      ]],
      ["Set the right expectations in the store", [
        "Users arrive with expectations from your screenshots and description. If the first experience does not match, they leave. Show the actual first-session experience in your first screenshots.",
        "See [first three screenshots strategy](/blog/first-three-screenshots-strategy/).",
      ]],
      ["Use messages to guide new users", [
        "Push notifications and in-app messages can bring back users who stopped before activation, with a helpful next step rather than a generic reminder.",
        "See [push notification strategy](/blog/push-notification-strategy/).",
      ]],
      ["Activation and ratings", [
        "Users who have just experienced value are the best people to ask for a rating. Trigger rating prompts after activation, not on first launch.",
        "See [in-app rating prompt timing](/blog/in-app-rating-prompt-timing/).",
      ]],
      ["Common mistakes", [
        "Common mistakes include defining activation as sign-up, showing long tutorials, asking for every permission upfront, and attracting the wrong users with misleading listings.",
        "Another is measuring activation without acting on it.",
      ]],
      ["A worked example: a budgeting app", [
        "A budgeting app finds that users who connect an account and create one budget in the first two days retain much better. It moves account connection earlier, adds a default budget template and sends a reminder to users who connected but did not create a budget.",
        "Activation rises, and its store screenshots now show creating a first budget in under a minute.",
      ]],
    ],
    steps: [
      ["Compare retained and churned users", "Find early actions that separate them."],
      ["Define activation", "A measurable action within a time frame."],
      ["Measure time to value", "Track the distribution by channel."],
      ["Remove friction", "Cut steps and delay permissions."],
      ["Align the store listing", "Show the first experience in screenshots."],
    ],
    examples: [
      ["Activation definition", "User signed up.", "User completed first workout within 3 days.", "Value, not registration, predicts retention."],
      ["Permissions", "Ask for notifications, location and contacts at launch.", "Ask for each when it is first needed.", "Context raises acceptance."],
      ["Rating prompt", "On first launch.", "Right after activation.", "Happy users rate higher."],
    ],
    playbook: ["Find the aha moment", "Define activation", "Track time to value", "Cut onboarding friction", "Match listing to experience", "Prompt ratings after value"],
    metrics: ["Activation rate", "Time to value", "Day 1 and day 7 retention", "Onboarding completion", "Rating after activation"],
    faqs: [
      ["What is app activation?", "The point where a new user first experiences the app's core value."],
      ["What is an aha moment?", "The early action or experience that makes users understand why the app is valuable."],
      ["How do I find my aha moment?", "Compare early actions of retained and churned users to find what separates them."],
      ["Is sign-up the same as activation?", "No. Activation means experiencing value, not just creating an account."],
      ["How does ASO affect activation?", "Listings set expectations; accurate screenshots bring users who activate."],
      ["When should I ask for ratings?", "After users reach activation or another success moment."],
    ],
    related: ["app-onboarding-best-practices", "north-star-metric-for-apps", "cohort-analysis-for-mobile-apps", "mobile-app-retention-rate-benchmarks"],
    serviceLinks: ["/services/app-store-optimization/"],
  }),
  P({
    slug: "in-app-feedback-surveys",
    title: "In-App Feedback and Surveys: Collect Insights Without Hurting Ratings",
    seoTitle: "In-App Feedback and Surveys: A Practical Guide",
    description: "Collect in-app feedback the right way: survey types, timing, NPS and CSAT, store rules on rating prompts, and turning feedback into fixes.",
    primaryKeyword: "in-app feedback",
    secondaryKeywords: ["in-app survey", "app NPS survey", "user feedback mobile app"],
    category: "Ratings and Reviews",
    answer: "In-app feedback gives users a direct channel to share problems and ideas inside the app, so you learn faster and fewer frustrations end up as public one-star reviews. Use short, well-timed surveys such as NPS or a single question after a key action, make support easy to reach, and act on what you hear. Never gate store rating prompts so only happy users reach them.",
    sections: [
      ["Why in-app feedback matters", [
        "Store reviews are public, slow and often written in frustration. In-app feedback reaches you privately and early, with context about what the user was doing.",
        "Fixing issues raised in feedback improves ratings over time. See [improve app ratings](/blog/improve-app-ratings/).",
      ]],
      ["Types of in-app feedback", [
        "Common types include NPS surveys asking how likely users are to recommend the app, CSAT questions after a specific action, feature request forms, bug reports with screenshots, and contact-support options.",
        "Pick the type that answers the question you need answered.",
      ]],
      ["Timing surveys well", [
        "Ask after users have had enough experience to answer, and right after relevant actions, such as completing a purchase or finishing a task. Avoid interrupting users mid-task.",
        "Limit how often each user sees surveys.",
      ]],
      ["Keep surveys short", [
        "One or two questions get far more responses than long forms. Use an optional open-text follow-up to capture detail.",
        "Short surveys also feel respectful, which protects the experience.",
      ]],
      ["Make support easy to find", [
        "A visible help or contact option gives frustrated users somewhere to go other than the store review box. Reply quickly and close the loop when issues are fixed.",
        "Users whose problems are solved often update reviews.",
      ]],
      ["Store rules on rating prompts", [
        "Apple and Google rating prompts must not be gated: you should not ask whether users are happy and only send happy users to rate. Use feedback tools for listening, and use rating prompts at success moments for everyone.",
        "See [in-app rating prompt timing](/blog/in-app-rating-prompt-timing/) and the [Google Play In-App Review API](/blog/google-play-in-app-review-api/).",
      ]],
      ["Turning feedback into action", [
        "Tag feedback by theme, count frequency, and combine it with store review themes from [mining reviews for keywords](/blog/mining-reviews-for-keywords/). Prioritise fixes by frequency and impact.",
        "Share a monthly summary with product and support teams.",
      ]],
      ["Closing the loop", [
        "Tell users when their requested feature or fix ships, through release notes or in-app messages. This builds goodwill and encourages more feedback.",
        "See [what's new release notes](/blog/whats-new-release-notes-aso/).",
      ]],
      ["Privacy", [
        "Explain how feedback data is used, avoid collecting unnecessary personal information, and reflect data collection in your privacy disclosures.",
        "See the [app privacy policy guide](/blog/app-privacy-policy-guide/).",
      ]],
      ["Common mistakes", [
        "Common mistakes include long surveys, surveys on first launch, gating rating prompts, collecting feedback without acting, and hiding support.",
        "Another is asking the same users repeatedly.",
      ]],
      ["A worked example: a delivery app", [
        "A delivery app adds a one-question rating after each order with an optional comment, and a help button on the order screen. Comments reveal repeated complaints about inaccurate delivery times.",
        "The team improves time estimates, mentions it in release notes, and store reviews about late deliveries drop.",
      ]],
    ],
    steps: [
      ["Choose feedback types", "NPS, CSAT, bug reports and support."],
      ["Time surveys after key actions", "Avoid interrupting tasks."],
      ["Keep surveys short", "One or two questions."],
      ["Make support visible", "Reply quickly and close the loop."],
      ["Act on themes", "Prioritise fixes and announce them."],
    ],
    examples: [
      ["Survey", "Ten-question form on launch.", "One question after a completed order.", "Short, timely surveys get answers."],
      ["Rating prompt", "Only happy users sent to the store.", "Rating prompt for everyone at success moments.", "Gating breaks store rules."],
      ["Support", "Contact email buried in settings.", "Help button on key screens.", "Visible help prevents angry reviews."],
    ],
    playbook: ["Listen in-app", "Time surveys carefully", "Keep them short", "Offer visible support", "Act on themes", "Close the loop"],
    metrics: ["Survey response rate", "NPS or CSAT", "Support response time", "Share of feedback acted on", "Average store rating"],
    faqs: [
      ["What is in-app feedback?", "A way for users to share problems and ideas directly inside the app."],
      ["When should I show an in-app survey?", "After users complete a relevant action, not on first launch or mid-task."],
      ["Can I ask users if they are happy before asking for a rating?", "You should not gate rating prompts so only happy users reach the store."],
      ["What is NPS?", "Net Promoter Score, based on how likely users are to recommend the app."],
      ["Does in-app feedback improve ratings?", "Indirectly, by surfacing issues to fix and giving users a channel other than reviews."],
      ["How short should surveys be?", "One or two questions with an optional comment."],
    ],
    related: ["improve-app-ratings", "in-app-rating-prompt-timing", "mining-reviews-for-keywords", "app-review-management"],
    serviceLinks: ["/services/app-reputation-management/"],
  }),
];

// Deeper follow-up sections for each guide.
const EXTRA = {
  "in-app-purchase-types-explained": [
    ["Purchase types and family sharing", ["On the App Store, developers can enable Family Sharing for non-consumables and auto-renewable subscriptions, so family members get access without paying again. It can make an app more attractive to families and reduce refund requests.", "Consumables cannot be shared. Decide per product whether sharing fits your business model."]],
    ["Pricing each purchase type", ["Price consumables in packs that reward larger purchases, price non-consumables against the value of permanent access, and price subscriptions so the yearly plan offers a clear saving over monthly. Use the stores' price tiers and local pricing so each country sees sensible amounts.", "Review prices at least yearly. Our [App Store pricing and subscription messaging](/blog/app-store-pricing-and-subscription-messaging/) guide covers how to present prices on the listing."]],
  ],
  "involuntary-churn-billing-retry": [
    ["Key takeaways", ["Involuntary churn is lost revenue from users who did not choose to leave. Enable grace periods, listen to server notifications, message users calmly in the app, and win back those who expire.", "Measured separately, it often becomes one of the quickest revenue wins for a subscription app."]],
    ["Checklist for subscription billing health", ["Confirm that server notifications are received and processed, grace periods are enabled, the app reads subscription status from your server, in-app messages appear during billing problems, and reports separate voluntary from involuntary churn.", "Review the checklist after every major billing or account change, since small bugs here quietly lose revenue every month."]],
    ["Billing problems by region and payment method", ["Payment failures are more common in some markets and with some payment methods, such as prepaid cards or carrier billing. Segment billing retry rates by country and payment method to see where users struggle.", "Where failures are high, consider annual plans with reminders, local pricing and clear in-app guidance on updating payment methods in that market."]],
    ["What to show during grace", ["During a grace period, keep the full experience available and show a calm banner rather than a blocking screen. Users who keep using the app are more motivated to fix payment.", "After the grace period, show a clear screen explaining that the subscription paused because payment failed, with one button to fix it and a link to restore purchases."]],
  ],
  "lifetime-deal-vs-subscription": [
    ["Lifetime purchases and family plans", ["Some apps pair a lifetime option with family sharing so a household pays once. This can lift perceived value, but model the cost if each family member uses paid resources.", "Explain clearly on the paywall what family access includes."]],
    ["Key takeaways", ["Subscriptions fit ongoing value and costs; lifetime purchases fit one-time value. Offering both often converts the widest range of users, with the lifetime price set high enough to protect recurring revenue.", "Decide with cost modelling and long-term revenue tests, and keep pricing clear on the listing and paywall so reviews stay positive."]],
    ["Communicating price changes", ["If you move from one-time pricing to subscriptions, protect existing buyers by keeping what they paid for. Explain the change in release notes and in-app, focusing on what new value the subscription brings.", "Changes that remove features from paying users cause review waves and refund requests."]],
    ["Regional pricing", ["Lifetime and subscription prices should reflect local purchasing power. Both stores let you set prices per country.", "A price that works in the US may block conversions in India or Brazil, so review regional conversion before deciding a model works or fails."]],
    ["Lifetime options and refunds", ["Lifetime purchases are usually large one-time payments, so users expect them to keep working for years. Plan to support lifetime buyers when you redesign the app, and state clearly what lifetime includes, for example core features but not future cloud services.", "Clear terms prevent refund requests and negative reviews when the product changes."]],
    ["How competitors price", ["Check how leading apps in your category price: subscription only, one-time, or both. Users compare, and a pricing model far out of line with the category needs a strong reason.", "Use [competitor ASO analysis](/blog/competitor-aso-analysis/) to record competitor pricing and how they present it on their listings."]],
  ],
  "hard-vs-soft-paywall": [
    ["Key takeaways", ["A hard paywall suits apps with a clear immediate promise; a soft paywall suits apps that build value over time. Whichever you pick, make paid access clear on the listing and judge tests on long-term revenue and retention."]],
    ["Paywall copy that converts", ["State the outcome users get, not a list of features. Show the trial length and the price after the trial clearly, and add a short line of social proof if you have it, such as your average rating.", "Clear copy reduces refunds and complaints as well as increasing conversion."]],
    ["Measuring paywall views correctly", ["Track how many users see the paywall, how many start a trial, and how many pay after the trial. For soft paywalls, also track how many users never see a paywall because they never reach a limit.", "Those users may need a better upgrade moment rather than a different paywall."]],
    ["Paywall placement and the free trial", ["Free trials often pair with hard paywalls: users start a trial to access the app, then decide whether to pay. Trial length should match how long users need to experience value, and reminders before the trial ends reduce refunds and complaints.", "Our [free trial strategies](/blog/free-trial-strategies/) guide covers trial length and messaging."]],
    ["Category norms", ["Users' expectations differ by category. Fitness, education and productivity apps commonly use trials and hard paywalls; games and social apps rarely do. Match category norms unless you have tested a different approach.", "Check how top apps in your category present paid access on their listings before choosing."]],
  ],
  "ad-mediation-bidding-vs-waterfall": [
    ["App size and performance", ["Each ad network SDK adds to app size and can affect startup time and stability. Larger downloads lower conversion on slow networks, as explained in [app size and conversion](/blog/app-size-and-conversion/).", "Keep only networks that earn their place, and monitor crash rates after adding any SDK."]],
    ["Key takeaways", ["Use mediation with in-app bidding where possible, keep a small reviewed waterfall for other networks, favour rewarded ads, and cap interstitial frequency.", "Measure ad revenue together with retention and reviews, since revenue that drives users away is not a gain."]],
    ["When to remove a network", ["Remove networks that add little revenue but increase app size, crashes or loading time. Each SDK adds weight and potential stability issues.", "Review network contribution quarterly, and test removal with a holdout group to confirm revenue impact."]],
    ["Ads in kids and family apps", ["Apps for children have strict rules on ads and data collection on both stores. Use only certified ad networks and non-personalised ads where required.", "See [kids and family app ASO](/blog/kids-family-app-aso/) for the store context."]],
    ["Rewarded ads design", ["Rewarded ads work best when the reward is useful but optional: an extra life, a hint, a bonus or temporary premium access. Explain the reward before the ad and deliver it immediately afterwards.", "Place rewarded ad offers at moments where users want more, such as after losing a level, rather than as constant buttons."]],
    ["Ads and app store listing", ["The stores show whether an app contains ads. Users who dislike ads read reviews about them, so heavy ad loads can lower conversion on the listing as well as retention.", "Mention ad-free options in your description and screenshots if you sell ad removal."]],
  ],
  "north-star-metric-for-apps": [
    ["North star for marketplaces", ["Marketplaces need value on both sides, so many use completed transactions or matches as the north star. Input metrics then cover supply, demand and the success rate of matches.", "Track each side's activation separately so one side's growth does not hide the other's problems."]],
    ["Key takeaways", ["Pick one metric that reflects users getting value, support it with input and guardrail metrics, segment it by channel and country, and report it weekly.", "Let ASO and acquisition choices be judged by how they move the north star, not just installs."]],
    ["Questions to test your choice", ["Would this metric rise if users got more value? Could it rise while users are unhappy? Can every team name an input they influence? Does it predict revenue in your data?", "If any answer is weak, refine the metric before committing."]],
    ["Communicating the north star", ["Share the north star and its trend in every team meeting and release review. Explain how each project is expected to move it.", "When people understand the link, they make better trade-offs in daily decisions."]],
    ["North star for subscription apps", ["Subscription apps often pick a metric like weekly active subscribers using the core feature, which captures both value and revenue. Pair it with trial-to-paid conversion as an input.", "See [subscription app pricing strategy](/blog/subscription-app-pricing-strategy/) for related metrics."]],
    ["North star versus OKRs", ["OKRs set goals for a quarter; the north star stays stable for longer. Teams can set quarterly objectives that move input metrics, such as improving activation or conversion, all pointing toward the same north star.", "This keeps short-term goals aligned with long-term value."]],
    ["Guardrail metrics", ["Pair the north star with guardrails that must not get worse, such as crash rate, average rating, refund rate and unsubscribe rate. Growth that damages guardrails is not real growth.", "Track guardrails on the same dashboard as the north star, using [crash rate and store ranking](/blog/crash-rate-and-store-ranking/) as one example of why they matter."]],
    ["Segmenting the north star", ["Break the north star down by acquisition channel, country, platform and user cohort. A rising total can hide a weak segment, such as users from one ad network who never reach value.", "Segment reports show where to focus ASO and acquisition."]],
  ],
  "app-activation-aha-moment": [
    ["Activation benchmarks", ["Activation rates vary widely by category and definition, so compare against your own past cohorts rather than generic numbers. A steady rise in activation for new cohorts is the signal that matters.", "Pair activation with day 7 retention to confirm the definition still predicts long-term use."]],
    ["Activation for games", ["In games, activation is often completing the tutorial and first few levels, or making a first meaningful choice. Short, playable tutorials beat text explanations.", "See [gaming app ASO](/blog/gaming-app-aso/) for how first impressions start in the store."]],
    ["Key takeaways", ["Define activation as a measurable value moment, find it with retention data, shorten the path with less friction and personalisation, and set accurate expectations on the store listing.", "Prompt for ratings after activation, and treat users who never activated as a re-activation opportunity."]],
    ["Questions to ask your team", ["What is the first moment users get value? How many steps does it take today? Which steps could move later or disappear? Do our screenshots show that moment?", "Answering these regularly keeps activation improving release after release."]],
    ["Activation for different user types", ["Apps with several user types, such as buyers and sellers, need an activation definition for each. A marketplace seller activates by listing an item; a buyer by making a first purchase.", "Track each separately so improvements for one side are visible."]],
    ["Activation and push permission", ["Asking for notification permission after users experience value usually gets more acceptance than asking at launch. Those permissions then help bring users back to deepen activation.", "Plan the permission request as part of the activation flow."]],
    ["Activation by acquisition channel", ["Users from different channels activate at different rates. Users from store search often arrive with clear intent, while users from broad social ads may need more guidance.", "Compare activation by channel and keyword theme, and adjust messaging or onboarding for weak segments. See [app user acquisition strategies](/blog/app-user-acquisition-strategies/)."]],
    ["Testing activation improvements", ["Test onboarding changes with controlled experiments, comparing activation and retention for new users. Change one major element at a time so you know what worked.", "Run tests long enough to see day 7 retention, not just day 1 behaviour."]],
    ["Re-activation", ["Users who installed but never activated are a large, cheap audience to win back. A helpful message pointing to the first step, or a simplified path, can recover many of them.", "Track re-activation separately from new activation."]],
  ],
  "in-app-feedback-surveys": [
    ["Avoid survey fatigue", ["Set a global cap on how often any user sees a survey, and rotate survey topics so the same users are not asked repeatedly. Exclude users who recently gave feedback or contacted support.", "Fewer, better-timed surveys produce more honest answers and protect the experience."]],
    ["Linking feedback to releases", ["Tag each fix with the feedback that prompted it, so you can report how many user-reported issues each release resolved.", "This also gives you material for release notes and replies to reviewers."]],
    ["Key takeaways", ["Give users an easy private channel, ask short questions at the right moments, never gate rating prompts, and act visibly on what you hear.", "Done well, in-app feedback reduces negative reviews and turns user insight into better releases."]],
    ["Questions to ask", ["Where do frustrated users go today? How quickly do we reply? Which themes repeat in feedback and in store reviews? What did we fix last month because of feedback?", "Clear answers show whether the program is working."]],
    ["Choosing a feedback tool", ["Options range from simple forms to dedicated survey and feedback platforms that target users by behaviour. Choose a tool that integrates with your analytics so you can connect feedback to user actions.", "Start simple and add tools when volume grows."]],
    ["Measuring feedback impact", ["Track how many issues raised in feedback were fixed, and whether related review complaints and support tickets fell afterwards.", "This shows the value of the feedback program and keeps teams engaged with it."]],
    ["Feedback during beta", ["Beta testers on TestFlight and Google Play testing tracks can send feedback before public release. Ask focused questions about new features.", "See [TestFlight beta testing](/blog/testflight-beta-testing-guide/)."]],
    ["Feature requests and roadmaps", ["Collect feature requests in one place, count how often each is asked for, and weigh them against strategy. Popular requests are not always right, but repeated themes show what users need.", "Sharing a public roadmap or changelog shows users their feedback matters."]],
    ["Feedback from churned users", ["A short question when users cancel a subscription or delete an account reveals why they leave. Offer a few fixed answers plus an optional comment.", "Combine these answers with [reduce app uninstalls and churn](/blog/reduce-app-uninstalls-churn/) tactics."]],
    ["Feedback in multiple languages", ["Offer surveys in each user's language and reply in it. Translate responses for analysis so themes from smaller markets are not missed.", "Localized feedback also improves localized store listings."]],
  ],
};

export const growth03 = base.map((post) =>
  EXTRA[post.slug]
    ? { ...post, sections: [...post.sections, ...EXTRA[post.slug].map(([heading, paragraphs]) => ({ heading, paragraphs }))] }
    : post,
);
