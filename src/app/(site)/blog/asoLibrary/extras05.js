export const extras05 = {
  "statistical-significance-store-experiments": [
    ["Mistakes that quietly cost installs", ["Stopping the moment a variant looks ahead is the most common error, because early swings are mostly noise. Running tests for only a few days misses weekday and weekend differences. Testing several things at once makes the winner uninterpretable.", "Another mistake is ignoring practical size. A tiny lift on a huge page may be real but not worth a brand change."]],
    ["A worked example", ["A team with moderate traffic wants to detect a 5 percent relative lift. It estimates that the test will need several weeks, so it plans around a release and avoids a major campaign during the window.", "At the end, the lift interval includes zero, so the team records the test as inconclusive and designs a bolder variant for the next round."]],
  ],
  "aso-experimentation-roadmap": [
    ["Mistakes that quietly cost installs", ["Testing without a diagnosis of the funnel is the usual error, leading to creative tests when the real problem is visibility. Another is stacking many big changes in one release. A third is having no owner or decision date, so tests drift.", "Skipping the review step means learning never compounds."]],
    ["A worked example", ["An audit shows decent page conversion but low impressions. The quarter's roadmap prioritizes keyword and subtitle changes in month one, creative tests in month two, and localization for two markets in month three, with a review at the end of each month.", "Results feed the next quarter's backlog."]],
  ],
  "aso-reporting-dashboard-setup": [
    ["Mistakes that quietly cost installs", ["Putting every available metric on one page makes none of them useful. Mixing definitions across tools produces numbers that never match. Another mistake is omitting annotations, so a drop cannot be explained.", "Reporting brand and generic traffic together hides discovery problems."]],
    ["A worked example", ["A small team builds a weekly view with impressions, page views, first-time downloads, and conversion by country, plus rating and crash-free rate from product analytics. A separate tab tracks priority keywords.", "Each experiment and release has a row on an annotation tab, which lets them explain changes in review."]],
  ],
  "impressions-vs-product-page-views": [
    ["Mistakes that quietly cost installs", ["Treating the overall conversion rate as a single number hides which stage is failing. Comparing numbers across platforms without checking definitions is a second mistake. Optimizing screenshots when the real issue is low tap-through from search results is a third.", "Ignoring traffic mix, such as a spike from a campaign, distorts ratios."]],
    ["A worked example", ["An app sees healthy page-to-download conversion but poor tap-through from search. The team tests the icon and subtitle, which are the elements visible in results, rather than later screenshots.", "Tap-through improves, and the page conversion stays steady, confirming the diagnosis."]],
  ],
  "aso-glossary-key-terms": [
    ["Mistakes that quietly cost installs", ["Using terms loosely is the biggest problem. Installs, downloads, and first-time downloads are not the same, and reports that mix them mislead. Another common confusion is between custom product pages on iOS and custom store listings on Android, which work differently.", "Teams also assume that conversion rate means the same thing in every tool."]],
    ["A worked example", ["Two stakeholders compare reports and see different conversion rates. One uses page views to downloads in the store console; the other uses impressions to installs from an analytics tool. The glossary lets the team label each metric and agree on one definition for the dashboard.", "The discussion ends in minutes instead of a long debate."]],
  ],
  "aso-vs-seo-differences": [
    ["Mistakes that quietly cost installs", ["Assuming web SEO tactics apply directly to store listings is a common mistake. Backlink building, for example, does not work the same way. Another is treating the website and the store listing as separate projects with different messaging.", "Ignoring the link between the two means losing visitors who start on the web."]],
    ["A worked example", ["A team uses the same keyword research for blog topics and subtitle terms. The blog posts answer questions people ask, link to the store with tracked links, and use the same positioning as the listing.", "It reports web-to-store clicks and store conversion for that traffic."]],
  ],
  "aso-vs-app-store-marketing": [
    ["Mistakes that quietly cost installs", ["Running paid campaigns to a weak product page wastes money. Assuming paid keyword data matches organic behavior is another mistake. Spending heavily on brand ads without measuring incrementality is a third.", "Reporting only blended numbers hides which channel is working."]],
    ["A worked example", ["A team notices paid ads on a certain phrase convert well. It tests that phrase in its subtitle, uses a custom page that mirrors the ad message, and compares organic visibility and conversion for the phrase.", "It measures whether paid brand spend adds installs or just captures existing demand."]],
  ],
  "attribution-and-organic-uplift": [
    ["Mistakes that quietly cost installs", ["Crediting all organic growth to ASO is the usual overreach. Another is comparing a launch week to a quiet week and calling it uplift. Reporting a single number without assumptions invites distrust.", "Changing several variables during the measurement window makes any attribution weak."]],
    ["A worked example", ["A team staggers a creative change across two similar countries and uses a third as a control. It compares conversion trends over several weeks, annotates campaigns, and reports an estimated lift range with assumptions.", "Stakeholders can see what is measured and what is inferred."]],
  ],
  "aso-for-no-budget-startups": [
    ["Mistakes that quietly cost installs", ["Trying to optimize everything at once is the main error for small teams. Copying a large competitor's listing without matching its position is another. Waiting for perfect creative delays learning.", "Neglecting ratings early leaves little social proof."]],
    ["A worked example", ["A two-person team picks one audience, writes metadata around three keyword themes, builds six clear screenshots with a free design tool, and publishes. A weekly fifteen-minute review looks at impressions, conversion, and reviews.", "In month two, it tests a new first screenshot and decides whether to invest further."]],
  ],
  "aso-sprint-planning-for-small-teams": [
    ["Mistakes that quietly cost installs", ["Planning too many changes per sprint makes results unreadable. Not annotating changes means results cannot be explained. Letting ASO work wait behind every product task is a third.", "Skipping the review means the same ideas return."]],
    ["A worked example", ["In sprint one, a team ships a new subtitle and annotates it. In sprint two, it reviews visibility and conversion, records the result, and ships a caption test. Each sprint ends with a short summary posted to the team channel.", "A monthly session looks at trends and updates the backlog."]],
  ],
  "app-store-pricing-and-subscription-messaging": [
    ["Mistakes that quietly cost installs", ["Hiding the paywall until after install is the primary mistake and a reliable source of one-star reviews. Another is showing a price in a screenshot that differs by region. Burying cancellation instructions is a third.", "Unclear trial length and what follows it generates refunds."]],
    ["A worked example", ["A fitness app notices refund requests rising after a creative change that emphasized a free start. The team rewrites the description and a screenshot to state the trial length and the price after it, and adds a note on how to cancel.", "Installs dip slightly, refunds and billing reviews fall, and revenue per install rises."]],
  ],
  "paywall-and-store-listing-alignment": [
    ["Mistakes that quietly cost installs", ["Showing a feature in screenshots that is behind a paywall without saying so is the key mistake. Another is delaying all value until after payment. Using different feature names in the listing and the app confuses users.", "Treating store and product teams as separate leaves gaps unnoticed."]],
    ["A worked example", ["A photo app's top screenshot shows a premium filter. The team marks it as part of the paid plan, adjusts onboarding to let users try a free alternative first, and tests paywall timing.", "It compares install-to-paid conversion and early refund rates between the two onboarding flows."]],
  ],
  "privacy-labels-data-safety-conversion": [
    ["Mistakes that quietly cost installs", ["Filling in the forms once and never updating them is the biggest risk. Forgetting about third-party SDKs is another, since they often collect data. Inconsistent statements between the policy, the app, and the store forms create trust and review problems.", "Guessing instead of checking actual data flows leads to inaccuracies."]],
    ["A worked example", ["Before a release that adds a new analytics SDK, the team reviews what it collects, updates the disclosure forms, and aligns the privacy policy. The release checklist includes a privacy check owned by an engineer and a legal contact.", "The team monitors reviews for privacy concerns after release."]],
  ],
  "age-rating-and-content-ratings-aso": [
    ["Mistakes that quietly cost installs", ["Choosing answers to get a lower rating is the primary mistake and can lead to removal. Another is forgetting that user-generated content or an embedded browser may change the rating. Not updating answers after adding chat is a third.", "Marketing creative that implies a different audience than the rating allows creates mismatches."]],
    ["A worked example", ["A social app adds direct messaging. The team revisits the questionnaires, answers accurately for the new feature, and updates its description and screenshots to match the resulting rating.", "It documents the change and informs its support team."]],
  ],
  "app-clips-instant-apps-discovery": [
    ["Mistakes that quietly cost installs", ["Building a lightweight experience that needs login and setup defeats the purpose. Another is making it too large or slow. A third is offering no clear path to the full app.", "Building one for a product that does not suit instant tasks wastes effort."]],
    ["A worked example", ["A parking app builds a lightweight experience for pay-by-plate at a car park. A user scans a code, pays, and sees a prompt to install the full app to save the vehicle and receipts.", "The team measures how many lightweight users later install and retain."]],
  ],
  "google-play-pre-registration-launch": [
    ["Mistakes that quietly cost installs", ["Leaving the pre-registration page bare is a missed chance. Another mistake is promising a date that slips. Not preparing infrastructure for a launch spike is a third.", "Offering prohibited rewards for registering can violate policy."]],
    ["A worked example", ["A game studio promotes its pre-registration page across its website and community, shares behind-the-scenes content, and tracks registrations by source. It runs a load test a week before launch.", "On launch day, it monitors crash rates and replies to early reviews."]],
  ],
  "app-rejection-recovery-guide": [
    ["Mistakes that quietly cost installs", ["Resubmitting the same build with a vague note is the common mistake and often leads to a repeat rejection. Another is fixing only the cited example while the same issue exists elsewhere. Arguing emotionally in the reply rarely helps.", "Not keeping records of rejections hides recurring patterns."]],
    ["A worked example", ["An app is rejected because screenshots show features not present in the build. The team removes the claims, replaces the screenshots, reviews all metadata for similar issues, and replies with a clear summary and test instructions.", "It adds a metadata accuracy check to its pre-submission list."]],
  ],
  "developer-account-transfer-aso": [
    ["Mistakes that quietly cost installs", ["Publishing a copy as a new app is the worst mistake, since ratings and rankings do not move. Another is forgetting subscriptions, push certificates, or third-party keys until the transfer fails. Not benchmarking before the move makes problems hard to spot.", "Skipping post-transfer testing of purchases and sign-in leaves defects live."]],
    ["A worked example", ["Two companies agree an app acquisition. They check eligibility, gather agreements and keys, schedule the transfer outside a release window, record ratings and rankings, and test purchases and notifications immediately afterward.", "They update support emails and policy links the same day."]],
  ],
  "aso-and-ai-search-discoverability": [
    ["Mistakes that quietly cost installs", ["Chasing hacks to appear in assistant answers is a poor use of time, since behavior changes constantly. Another mistake is inconsistent descriptions across the website, store, and press. Neglecting reviews and credible mentions weakens signals.", "Publishing thin content on the web to catch queries can backfire."]],
    ["A worked example", ["A team rewrites its homepage and store description to say the same clear thing about who the app helps and how. It publishes a genuinely useful guide on a task its users face, links to the store, and asks new users how they found the app.", "Over time it sees assistant mentions appear in survey answers and referrals."]],
  ],
  "aso-competitive-moat-brand-building": [
    ["Mistakes that quietly cost installs", ["Believing metadata alone creates durable advantage is the core mistake, since competitors can copy it. Another is chasing short-term conversion at the cost of expectation match. Ignoring product quality, which drives ratings and retention, is a third.", "Neglecting branded search as a lead indicator hides brand health."]],
    ["A worked example", ["A team notices branded search growing after a community program and a podcast sponsorship. It aligns the store message with those stories, monitors brand share of installs and rating trends, and keeps a regular optimization cadence.", "When a competitor copies its keywords, the brand effect keeps conversion ahead."]],
  ],
};
