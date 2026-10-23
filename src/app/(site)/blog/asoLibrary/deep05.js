export const deep05 = {
  "statistical-significance-store-experiments": {
    steps: [
      ["Pick the primary metric", "Use conversion from page views to first-time downloads."],
      ["Estimate required traffic", "Use baseline conversion and the smallest lift you care about."],
      ["Plan the duration", "Run at least one full weekly cycle and avoid campaigns."],
      ["Do not peek and stop", "Decide the end date in advance."],
      ["Read intervals and practical size", "Check the range, not only the point estimate."],
    ],
    examples: [
      ["Stopping", "Stop on day two because B is ahead", "Wait until the planned end after full weekly cycles", "Early gaps are mostly noise."],
      ["Reading", "B wins by 4%", "B shows +4% with a range from -2% to +10%", "The range includes zero, so the result is inconclusive."],
      ["Decision", "Any lift is a win", "Act only if the lift exceeds the minimum worth the change", "Practical size matters."],
    ],
    calc: ["A quick calculation (illustrative numbers)", ["Say the control converts at 20%. To reliably detect a 10% relative lift (to 22%) you need roughly 6,500 visitors per variant at 95% confidence and 80% power. A page with 500 views a week would need about six months to get there.", "If traffic is low, test bolder changes with bigger expected effects, or accept directional evidence and combine it with other signals."]],
  },
  "aso-experimentation-roadmap": {
    steps: [
      ["Run a funnel diagnosis", "Compare impressions, tap-through, and conversion against benchmarks."],
      ["List experiments by funnel stage", "Match tests to the weakest stage."],
      ["Sequence by value and dependency", "Order tests and avoid overlaps."],
      ["Assign owners and dates", "Name design, implementation, and analysis owners."],
      ["Review monthly", "Update the backlog and share learnings."],
    ],
    examples: [
      ["Diagnosis", "Test everything", "Low impressions, healthy conversion, so test keywords first", "Fix the real bottleneck."],
      ["Month plan", "Ad hoc", "Month 1 metadata, Month 2 creative, Month 3 localization", "A rhythm builds learning."],
      ["Review", "No reviews", "A 30-minute monthly review with product and design", "Learning compounds."],
    ],
  },
  "aso-reporting-dashboard-setup": {
    steps: [
      ["List the decisions", "Write the questions the dashboard must answer."],
      ["Connect sources", "Combine store console, rank tracker, and product analytics."],
      ["Define each metric", "Document formulas and sources."],
      ["Add annotations", "Log releases, experiments, and campaigns."],
      ["Set a cadence", "Review weekly and monthly."],
    ],
    examples: [
      ["Metrics", "Thirty charts", "Impressions, page views, first-time downloads, conversion, rating, crash-free rate", "Few metrics, reviewed often."],
      ["Segmentation", "Global averages", "Conversion by country and source", "Segments reveal problems."],
      ["Annotations", "None", "Rows for each release and test", "They explain movements."],
    ],
  },
  "impressions-vs-product-page-views": {
    steps: [
      ["Pull the three numbers", "Get impressions, page views, and first-time downloads for the same period and source."],
      ["Compute the ratios", "Tap-through is page views divided by impressions; page conversion is downloads divided by page views."],
      ["Compare with prior periods", "Look for changes in each ratio."],
      ["Diagnose the weak stage", "Low tap-through points to icon and name; low page conversion points to page content."],
      ["Test the right elements", "Test the elements visible at the weak stage."],
    ],
    examples: [
      ["Ratios", "100,000 impressions, 5,000 views, 1,000 downloads", "Tap-through 5%, page conversion 20%", "Two ratios show two different stages."],
      ["Diagnosis", "Redesign all screenshots", "Test the icon and subtitle if tap-through is low", "Fix the stage that fails."],
      ["Source", "Blended metrics", "Search and browse reported separately", "They behave differently."],
    ],
    calc: ["A quick calculation (illustrative numbers)", ["Suppose a listing gets 100,000 impressions and 5,000 page views (5% tap-through), then 1,000 downloads (20% page conversion), so overall 1%. Raising tap-through to 6% through a clearer icon gives 6,000 views and 1,200 downloads. Raising page conversion to 22% instead gives 1,100 downloads.", "The same effort on the weaker stage often gives a bigger return, which is why you diagnose first."]],
  },
  "aso-glossary-key-terms": {
    steps: [
      ["Share the glossary", "Send it to new team members and partners."],
      ["Agree on definitions", "Pick one definition for conversion rate and install."],
      ["Label dashboards", "Add definitions to charts."],
      ["Check platform differences", "Note where Apple and Google define metrics differently."],
      ["Review quarterly", "Update terms."],
    ],
    examples: [
      ["Conversion rate", "Conversion", "Page views to first-time downloads", "Define the numerator and denominator."],
      ["Install", "Installs and downloads mixed", "First-time downloads reported separately from redownloads", "They answer different questions."],
      ["Custom pages", "Custom page everywhere", "Custom product pages on iOS, custom store listings on Google Play", "Use platform-correct names."],
    ],
  },
  "aso-vs-seo-differences": {
    steps: [
      ["Share research", "Use the same user language for web and store."],
      ["Align messaging", "Keep positioning consistent."],
      ["Link web to store", "Use deep links with tracking."],
      ["Measure separately", "Use search console for web and store consoles for the app."],
      ["Track the full funnel", "Follow users from search to install."],
    ],
    examples: [
      ["Keyword research", "Separate teams", "One shared sheet of user phrases", "It saves effort."],
      ["Blog post", "A generic post with no link", "A guide with a tracked store link", "It captures intent."],
      ["Reporting", "Add web and store traffic together", "Report each, then a combined funnel", "Systems differ."],
    ],
  },
  "aso-vs-app-store-marketing": {
    steps: [
      ["Fix the page first", "Improve obvious conversion issues before paid spend."],
      ["Use paid for hypotheses", "Test phrases in ads."],
      ["Align custom pages with ad groups", "Match message to intent."],
      ["Measure brand incrementality", "Hold out or pause to see the effect."],
      ["Report blended and separate", "Show both views."],
    ],
    examples: [
      ["Paid insight", "Ad runs, no follow-up", "A phrase that converts in ads is tested in the subtitle", "Learn from paid."],
      ["Brand ads", "Always on", "Test pauses and measure the change in total installs", "Check incrementality."],
      ["Landing", "Default page for all ads", "A custom page per ad group", "Message match lifts conversion."],
    ],
  },
  "attribution-and-organic-uplift": {
    steps: [
      ["Define organic", "List what the number includes."],
      ["Choose a control", "Use a similar market or an experiment."],
      ["Hold other variables steady", "Avoid other major changes in the window."],
      ["Compare with the prior year", "Adjust for season."],
      ["Report ranges", "State assumptions."],
    ],
    examples: [
      ["Claim", "ASO drove 30% growth", "Estimated uplift of 8% to 15% with assumptions listed", "Ranges are more honest."],
      ["Control", "Before-and-after only", "A changed market against a similar unchanged one", "Controls separate effects."],
      ["Window", "A launch week", "A stable period without campaigns", "Cleaner comparison."],
    ],
  },
  "aso-for-no-budget-startups": {
    steps: [
      ["Choose one positioning", "Pick a single audience and job."],
      ["Research ten competitors", "Review titles, subtitles, and screenshots."],
      ["Write natural metadata", "Use store suggestions and plain language."],
      ["Make clear screenshots", "Use a template and real screens."],
      ["Review weekly", "Check impressions, conversion, and reviews."],
    ],
    examples: [
      ["Keyword research", "Paid tools only", "Store search suggestions and a spreadsheet", "Free sources are a good start."],
      ["Screenshots", "Wait for a designer", "A simple template and real app screens", "Shipping starts learning."],
      ["Reviews", "Ignore", "Prompt after success and reply to every review", "It builds social proof."],
    ],
  },
  "aso-sprint-planning-for-small-teams": {
    steps: [
      ["Keep a scored backlog", "List ideas by impact, confidence, and effort."],
      ["Plan one or two changes", "Pick items that can be measured in two weeks."],
      ["Assign owners", "Name one person per task."],
      ["Annotate changes", "Log date and variant."],
      ["Review at sprint end", "Record results and decisions."],
    ],
    examples: [
      ["Sprint 1", "New subtitle and three other changes", "New subtitle only", "One change keeps results readable."],
      ["Log", "Informal", "A table with date, change, result, decision", "It supports learning."],
      ["Summary", "None", "A five-line note in the team channel", "Visibility builds support."],
    ],
  },
  "app-store-pricing-and-subscription-messaging": {
    steps: [
      ["List what is free and paid", "Write it in one paragraph."],
      ["Add it to the description and one screenshot", "Make it visible before install."],
      ["State the trial and billing", "Include length, price, and renewal."],
      ["Match the paywall", "Use the same terms in onboarding."],
      ["Track refunds and billing reviews", "Compare by creative."],
    ],
    examples: [
      ["Trial", "Try free!", "7-day free trial, then 499 per month. Cancel anytime in settings.", "Full disclosure."],
      ["Screenshot", "A premium feature without a label", "A feature tagged Pro", "Honesty reduces complaints."],
      ["Cancellation", "Hidden", "A line explaining where to cancel", "It builds trust."],
    ],
  },
  "paywall-and-store-listing-alignment": {
    steps: [
      ["List the top three promises", "Take them from screenshots and description."],
      ["Map each to the first session", "Find where users see it."],
      ["Fix gaps", "Change onboarding or the listing."],
      ["Test paywall timing", "Compare early and late paywalls."],
      ["Compare cohorts by creative", "Use custom pages."],
    ],
    examples: [
      ["Promise", "Unlimited filters", "Free filters shown first, premium labeled", "Match the experience."],
      ["Timing", "Paywall before any value", "Paywall after the first completed edit", "Value before the ask."],
      ["Terms", "Different plan names", "The same plan names everywhere", "Consistency reduces confusion."],
    ],
  },
  "privacy-labels-data-safety-conversion": {
    steps: [
      ["List data types", "Create an inventory of what each feature collects."],
      ["List SDKs", "Check what each collects and shares."],
      ["Verify with network checks", "Observe actual traffic."],
      ["Complete forms with legal review", "Match your policy."],
      ["Add to the release checklist", "Update with each release."],
    ],
    examples: [
      ["Inventory", "We collect nothing", "Email, device ID for analytics, and crash logs", "Accuracy avoids rejection."],
      ["SDK", "Forgot the ad SDK", "Declared advertising data collected by the SDK", "SDK data counts."],
      ["Policy", "Policy and forms disagree", "Both say the same thing", "Consistency builds trust."],
    ],
  },
  "age-rating-and-content-ratings-aso": {
    steps: [
      ["Answer each question honestly", "Include user-generated content and web access."],
      ["Check ads and third-party content", "See whether they raise the rating."],
      ["Match marketing to the rating", "Avoid targeting a different audience."],
      ["Update on new features", "Revisit after adding chat or media."],
      ["Document", "Keep notes on decisions."],
    ],
    examples: [
      ["Chat", "No update after adding chat", "Revisit the questionnaire and answer for user-to-user messages", "A new feature changes the rating."],
      ["Goal", "Pick a low rating for reach", "Adjust the content if you need a broader audience", "Misreporting risks removal."],
      ["Creative", "Child-focused images on a mature app", "Imagery that matches the rating", "Consistency avoids issues."],
    ],
  },
  "app-clips-instant-apps-discovery": {
    steps: [
      ["List short tasks", "Find tasks that users complete in under a minute."],
      ["Check platform limits", "Review size and feature constraints."],
      ["Remove sign-up from the flow", "Allow use without an account."],
      ["Add an install prompt", "Show it after value is delivered."],
      ["Measure", "Track starts, completion, and installs."],
    ],
    examples: [
      ["Use case", "A full shopping app as an App Clip", "Pay for parking by scanning a code", "Short tasks fit."],
      ["Flow", "Create an account first", "Complete the task, then offer to save the receipt", "Friction is removed."],
      ["Metric", "Count starts only", "Starts, completions, and later installs", "It shows real value."],
    ],
  },
  "google-play-pre-registration-launch": {
    steps: [
      ["Prepare the page", "Add screenshots, description, and a short video."],
      ["Set honest expectations", "State the release window and regions."],
      ["Promote the link", "Share on website, social, and email with tracking."],
      ["Load-test", "Test servers a week before launch."],
      ["Monitor launch", "Track crashes and reviews."],
    ],
    examples: [
      ["Page", "Bare page with a logo", "Screenshots, a short video, and a clear pitch", "It converts interest."],
      ["Date", "Launching next week (then slips)", "Planned for this quarter in the countries listed", "Avoid broken promises."],
      ["Tracking", "One shared link", "A link per channel", "You learn what works."],
    ],
  },
  "app-rejection-recovery-guide": {
    steps: [
      ["Read the guideline cited", "Identify the exact rule and the part of the app."],
      ["Reproduce", "Test on a clean install."],
      ["Fix the root cause", "Check similar issues elsewhere."],
      ["Reply clearly", "Summarize what changed and add test details."],
      ["Update the checklist", "Add the lesson."],
    ],
    examples: [
      ["Reply", "Fixed.", "We removed the unsupported claims from screenshots and metadata, and added a demo account in the review notes.", "Specific and complete."],
      ["Scope", "Fix only the example", "Audit all screenshots for the same issue", "Prevent repeat rejections."],
      ["Test", "Check on a dev device", "Test on a clean install with a new account", "It matches the review setup."],
    ],
  },
  "developer-account-transfer-aso": {
    steps: [
      ["Check eligibility", "Review the platform's requirements."],
      ["Gather configuration", "List agreements, certificates, keys, and services."],
      ["Benchmark", "Record ratings, rankings, and revenue."],
      ["Transfer officially", "Use the platform's transfer process."],
      ["Test", "Verify purchases, sign-in, and notifications."],
    ],
    examples: [
      ["Approach", "Publish a new copy", "Use the official transfer", "Copies lose ratings."],
      ["Checklist", "Start the transfer, then discover missing keys", "A list of keys and services prepared first", "Prevents delays."],
      ["Verification", "Assume it works", "Test a purchase and a sign-in", "Catch problems early."],
    ],
  },
  "aso-and-ai-search-discoverability": {
    steps: [
      ["Write one clear description", "Use the same wording across web, store, and press."],
      ["Publish helpful content", "Answer the real questions in your category."],
      ["Build credible mentions", "Earn reviews and coverage."],
      ["Add structure", "Use clear headings and structured data."],
      ["Ask users how they found you", "Add a short survey."],
    ],
    examples: [
      ["Description", "Three different descriptions", "One clear sentence reused everywhere", "Consistency helps systems and people."],
      ["Content", "Thin pages for queries", "A guide that helps solve a task", "Quality matters."],
      ["Measurement", "Guess", "A how did you hear about us question", "It shows discovery sources."],
    ],
  },
  "aso-competitive-moat-brand-building": {
    steps: [
      ["Track branded search", "Add it as a lead indicator."],
      ["Fix product friction", "Use reviews to find top causes of low ratings."],
      ["Feed the roadmap", "Share themes with product."],
      ["Align the story", "Use the same message across channels."],
      ["Review yearly", "Reset strategy."],
    ],
    examples: [
      ["Metric", "Keyword ranks only", "Rank plus branded search volume and brand share", "Brand strength shows up here."],
      ["Product", "Optimize metadata around a poor onboarding", "Fix onboarding first", "Retention supports ratings."],
      ["Story", "Different messages per channel", "One story across store, site, and community", "It builds recognition."],
    ],
  },
};
