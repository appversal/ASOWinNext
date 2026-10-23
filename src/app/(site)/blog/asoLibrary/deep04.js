export const deep04 = {
  "app-icon-ab-testing-guide": {
    steps: [
      ["Write one hypothesis per variant", "For example, a simpler single-shape icon will be recognized faster in search results."],
      ["Design variants that differ in idea", "Change the subject, palette family, or level of detail, not just a shade."],
      ["Review at small sizes", "Preview every candidate at search-result size, on the home screen, and in dark and light contexts."],
      ["Set up the experiment", "Use the store's testing tool, change only the icon, and avoid launching alongside campaigns."],
      ["Decide and verify", "Apply a clear winner, then confirm the lift holds in the weeks after."],
    ],
    examples: [
      ["Hypothesis A", "Slightly lighter green", "A single bold coin symbol on a flat background", "A different idea can produce a measurable difference; a shade rarely does."],
      ["Hypothesis B", "Same coin, new gradient", "A friendly character holding a coin", "It tests an emotional route against a symbol."],
      ["Decision rule", "Pick whichever is ahead on day two", "Run through full weekly cycles, then act on a clear, practical lift", "Early swings are mostly noise."],
    ],
    calc: ["A quick calculation (illustrative numbers)", ["If a page receives 100,000 views a month at a 20% conversion rate, that is 20,000 installs. A 3% relative lift from an icon change takes conversion to 20.6%, or 20,600 installs, an extra 600 per month. Whether that justifies a brand change depends on how well the old icon is recognized.", "To detect a lift this small with confidence, a test needs large traffic and several weeks, which is why low-traffic apps should test bolder ideas."]],
  },
  "screenshot-captions-copywriting": {
    steps: [
      ["Mine the words", "Collect phrases from reviews and search suggestions that describe the benefit."],
      ["Write one idea per screenshot", "Draft a caption of about five to seven words for each."],
      ["Cut and sharpen", "Remove adjectives like powerful and smart, and add a concrete noun or number."],
      ["Check legibility", "Test contrast and size at thumbnail scale."],
      ["Localize and test", "Translate meaning, check length, and run experiments."],
    ],
    examples: [
      ["Meal planner", "Powerful recipe features", "Never wonder what to cook tonight", "It names the user's problem."],
      ["Budget app", "Track your finances", "See where your money went this month", "It describes a visible result."],
      ["Language app", "Learn faster", "Chat in Spanish in 10 minutes a day", "A concrete time and skill is believable."],
    ],
  },
  "localizing-screenshots-without-redesign": {
    steps: [
      ["Split the layers", "Separate background, device frame, caption, and app screen in your design file."],
      ["Allow text growth", "Design caption boxes that tolerate strings at least 30 percent longer than English."],
      ["Decide what changes per tier", "Define full adaptation, caption-only translation, and default tiers."],
      ["Build a glossary", "List product terms and approved translations."],
      ["Record reviews", "Keep a sheet of locale, reviewer, and date."],
    ],
    examples: [
      ["Overflow", "German caption cut off at the edge", "A caption box that adapts to the longer word", "German and Finnish often run longer."],
      ["App screen", "English UI behind a translated caption", "The app screen exported in the same language", "It keeps the promise consistent."],
      ["Tracking", "Unknown which locales are current", "A sheet that lists each locale, reviewer, and date", "UI changes trigger a clear update list."],
    ],
  },
  "first-three-screenshots-strategy": {
    steps: [
      ["Write the promise", "Use the top keyword or ad message as the first caption."],
      ["Choose the proof screen", "Show the key workflow with a real result."],
      ["Find the top objection", "Read reviews for the most common hesitation, such as price or privacy."],
      ["Address it in screenshot three", "Add a clear answer, such as the first lessons are free."],
      ["Test the order", "Run experiments on order and compare."],
    ],
    examples: [
      ["First screenshot", "Brand logo and tagline", "Practice speaking Spanish with an AI partner", "It gives the reason to install."],
      ["Second screenshot", "Feature list", "A real conversation practice screen with feedback", "It proves the promise."],
      ["Third screenshot", "More features", "First lessons free, no card needed", "It answers a common hesitation."],
    ],
  },
  "preview-video-first-seconds": {
    steps: [
      ["Script the first three seconds", "Start on the key action, such as adding a task by voice."],
      ["Add on-screen text", "Write short captions so the video works muted."],
      ["Check specifications", "Confirm length, format, and content rules in the current documentation."],
      ["Show real in-app footage", "Avoid mockups that differ from the product."],
      ["Compare with and without video", "Test the effect on conversion."],
    ],
    examples: [
      ["Opening", "Five-second logo animation", "A task added by voice in the first two seconds", "The core action appears immediately."],
      ["Audio", "A voiceover explains everything", "Large captions that carry meaning silently", "Many views are muted."],
      ["Footage", "A rendered concept", "A screen recording of the current app", "It matches what users will see."],
    ],
  },
  "feature-graphic-google-play": {
    steps: [
      ["Check current specifications", "Confirm dimensions and file rules in Play Console."],
      ["Write one headline", "Use a short message that matches the listing."],
      ["Design inside safe margins", "Keep text and logos away from edges and the video play button area."],
      ["Match the icon and screenshots", "Use the same color and style."],
      ["Test", "Compare variants in a listing experiment."],
    ],
    examples: [
      ["Content", "Logo, three badges, four screenshots, and small text", "One workout screen, a headline, and the logo", "Simplicity reads at small sizes."],
      ["Text position", "Headline under the play button", "Headline in the upper left safe area", "Overlays can hide text."],
      ["Claims", "No. 1 app", "Plan your week in one tap", "Superlatives can break policy."],
    ],
  },
  "dark-mode-screenshots-store-assets": {
    steps: [
      ["Preview in both store themes", "Check how each set looks on light and dark pages."],
      ["Match the product", "Use the theme your users prefer or that matches the brand."],
      ["Check caption contrast", "Measure contrast ratios for text."],
      ["Test", "Compare dark and light sets in custom pages or experiments."],
      ["Document", "Record which theme wins for which audience."],
    ],
    examples: [
      ["Caption color", "Gray text on near-black", "White or high-contrast text on dark", "Readability matters."],
      ["Theme", "Dark only because it looks modern", "Dark set tested against a light set", "Test beats opinion."],
      ["Accuracy", "Showing a dark theme the app lacks", "Showing only themes the app supports", "Creative must match the product."],
    ],
  },
  "tablet-foldable-store-assets": {
    steps: [
      ["Check requirements", "Verify which screenshot sizes are needed for supported devices."],
      ["Capture real large-screen layouts", "Take screens from tablets and foldables."],
      ["Highlight large-screen benefits", "Show split view, side panels, or multitasking."],
      ["Reuse templates", "Adapt phone templates to larger frames."],
      ["Compare by device", "Measure conversion for tablet visitors."],
    ],
    examples: [
      ["Screenshot", "A stretched phone screenshot in a tablet frame", "A real tablet layout with a side panel", "Stretched images look careless."],
      ["Caption", "Works on all devices", "Draw with the tool panel and canvas side by side", "It shows the benefit."],
      ["Claim", "Tablet ready", "Optimized split view for tablets", "It reflects real support."],
    ],
  },
  "social-proof-in-store-creatives": {
    steps: [
      ["Identify the objection", "Decide whether trust, quality, or popularity is the biggest barrier."],
      ["Choose verifiable proof", "Select awards, press, or counts you can document."],
      ["Check policy and permission", "Review store rules and get permission for logos and quotes."],
      ["Set a refresh schedule", "Calendar a quarterly review of figures."],
      ["Test placement", "Try proof in different screenshots."],
    ],
    examples: [
      ["Number", "Millions of happy users", "Used by 2.4 million people as of March (if accurate)", "A dated, specific figure is more believable."],
      ["Award", "Award-winning app", "Winner of the 2025 industry award for fintech (if true)", "It names the award and year."],
      ["Press", "As seen in the news", "Quote from a named publication, with permission", "Permission avoids disputes."],
    ],
  },
  "creative-testing-backlog-prioritization": {
    steps: [
      ["Collect hypotheses", "List ideas from reviews, analytics, and research."],
      ["Write each as a testable statement", "Use the format If we change X for Y, then Z improves because R."],
      ["Score from one to five", "Rate impact, confidence, and effort."],
      ["Choose the next three", "Pick high-impact, low-effort tests that do not overlap."],
      ["Log results", "Record the result and decision."],
    ],
    examples: [
      ["Hypothesis", "Try a new icon", "If we use a simpler icon, search tap-through will rise because the current one is hard to read at small sizes", "A reason makes learning possible."],
      ["Score", "Everyone's favorite idea first", "Impact 4, confidence 3, effort 2 for the caption test", "Scores make trade-offs visible."],
      ["Log", "Remember results informally", "A table with date, variants, result, decision", "It prevents repeating failed ideas."],
    ],
  },
  "in-app-rating-prompt-timing": {
    steps: [
      ["List success events", "Identify moments such as finishing a run or exporting a file."],
      ["Set thresholds", "Require a few sessions and a recent success."],
      ["Exclude bad moments", "Suppress prompts after crashes or open support tickets."],
      ["Use the native prompt", "Do not build sentiment-gated dialogs."],
      ["Track results", "Measure shown, dismissed, and submitted."],
    ],
    examples: [
      ["Trigger", "On first launch", "After a user completes their third run and views the summary", "Value has been delivered."],
      ["Custom dialog", "Do you like the app? Yes goes to the store, no goes to feedback", "Use the system prompt and offer a separate feedback link", "Sentiment gating breaks policy."],
      ["Suppression", "Prompt after a crash", "Skip if a crash happened in the last session", "Do not ask after a bad experience."],
    ],
  },
  "ios-rating-prompt-best-practices": {
    steps: [
      ["Call the system API at the right moment", "Request a review after a success event."],
      ["Do not tie it to a button", "Use a direct review link for the manual option."],
      ["Set usage thresholds", "Require several sessions."],
      ["Test in TestFlight", "Know that behavior differs from production."],
      ["Monitor", "Track prompt-to-review rates and ratings."],
    ],
    examples: [
      ["Button", "A Rate us button calls the review API", "The button opens the App Store review page directly", "The API may show nothing."],
      ["Frequency", "Ask every launch", "Ask after meaningful success, once the system allows it", "Over-asking annoys users."],
      ["Settings link", "None", "A Rate on the App Store link in Settings", "It gives willing users a route."],
    ],
  },
  "google-play-in-app-review-api": {
    steps: [
      ["Pick the moment", "Choose a success event."],
      ["Request the flow", "Call the API to request and then launch the review flow."],
      ["Do not depend on display", "Expect quotas."],
      ["Test", "Use Google's test tools."],
      ["Measure and reply", "Check Play Console reviews and reply."],
    ],
    examples: [
      ["Trigger", "At app start", "After reaching a monthly goal", "A positive moment increases willingness."],
      ["Result check", "Try to detect if the user reviewed", "Track overall review volume in Play Console", "The API does not tell you."],
      ["Fallback", "None", "A permanent link to your Play listing in settings", "Users can still review on demand."],
    ],
  },
  "review-reply-templates-that-convert": {
    steps: [
      ["Sort reviews by type", "Tag bug, billing, feature request, praise, and abuse."],
      ["Write four-part frameworks", "Acknowledge, address, solve, invite follow-up."],
      ["Personalize each reply", "Mention the specific detail the user raised."],
      ["Move private details to support", "Never ask for personal data in public."],
      ["Review monthly", "Update templates and share themes."],
    ],
    examples: [
      ["Bug review", "We apologize for the inconvenience.", "Thanks for flagging this. Export crashed on some devices; version 4.2 fixes it. Please update, and write to support if it persists.", "It names the problem and the fix."],
      ["Billing review", "Please contact support.", "You can cancel in Settings, then Subscriptions. We have also emailed our team to check your charge.", "It gives steps."],
      ["Feature request", "We will add it soon!", "Thanks, this is on our list. We read every request and cannot promise a date.", "It avoids a promise."],
    ],
  },
  "mining-reviews-for-keywords": {
    steps: [
      ["Export reviews", "Collect recent reviews for your app and three competitors in each priority market."],
      ["Tag themes", "Mark features, use cases, complaints, and praise."],
      ["Count recurring phrases", "List the phrases that appear most often."],
      ["Validate with search data", "Check store suggestions and ranking tools."],
      ["Use in metadata and captions", "Test the strongest phrases."],
    ],
    examples: [
      ["Review phrase", "send invoices from my phone", "Add invoice to the subtitle and a caption", "The phrase matches real intent."],
      ["Complaint theme", "sync problems", "A caption stating real-time sync (if fixed)", "Address a known objection."],
      ["Competitor", "Copy their listing", "Use their complaint themes to shape your differentiators", "Insight beats imitation."],
    ],
  },
  "crash-rate-and-store-ranking": {
    steps: [
      ["Set up monitoring", "Track crash-free users and ANR rate in your crash tool and Play Console."],
      ["Segment", "Break results down by device, OS, and app version."],
      ["Use staged rollouts", "Release gradually and watch vitals."],
      ["Mine reviews", "Tag crash-related reviews."],
      ["Pause growth pushes", "Fix top crashes before big campaigns."],
    ],
    examples: [
      ["Metric", "Global crash rate only", "Crash rate by device model and version", "A problem on one device is hidden in the average."],
      ["Release", "Release to everyone", "Release to a small share, then expand", "It limits harm."],
      ["Campaign", "Launch ads while crashes rise", "Fix checkout crashes first, then scale", "Quality protects return on spend."],
    ],
  },
  "app-size-and-conversion": {
    steps: [
      ["Measure", "Compare conversion by market and device class."],
      ["Audit size", "Use platform tools to list the biggest assets and libraries."],
      ["Compress and remove", "Reduce images and remove unused code."],
      ["Use on-demand delivery", "Move rarely used content out of the first download."],
      ["Track per release", "Add size to release checks."],
    ],
    examples: [
      ["Assets", "Uncompressed PNGs", "Compressed WebP images", "Smaller files, similar quality."],
      ["Features", "All features in the first download", "Rare features downloaded on demand", "Lighter first install."],
      ["Process", "Size checked at the end", "A size budget in every release", "Prevents creep."],
    ],
  },
  "version-rollout-ratings-protection": {
    steps: [
      ["Choose phased release", "Use Apple's phased release or Google's staged rollout."],
      ["Set pause thresholds", "Define crash rate, conversion, and rating limits."],
      ["Assign an owner", "Name who watches during the rollout."],
      ["Monitor reviews", "Check new reviews every few hours at first."],
      ["Review the lessons", "Record what you caught and missed."],
    ],
    examples: [
      ["Threshold", "We will see how it goes", "Pause if crash-free users drop below 99.5% or checkout conversion falls 10%", "A rule removes debate."],
      ["Owner", "Everyone watches", "One named owner with an on-call backup", "Clear responsibility speeds response."],
      ["Reviews", "Check weekly", "Check hourly on day one", "Early signals matter."],
    ],
  },
  "handling-review-bombing": {
    steps: [
      ["Set rating alerts", "Alert on unusual drops and review bursts."],
      ["Check for real issues", "Compare with support tickets and release changes."],
      ["Collect evidence", "Save screenshots, timestamps, and patterns."],
      ["Report through official channels", "Use store tools and developer support."],
      ["Respond calmly", "Reply factually and rebuild with compliant prompts."],
    ],
    examples: [
      ["Evidence", "It looks fake", "Twenty reviews with identical text in one hour, saved with timestamps", "Evidence supports a report."],
      ["Reply", "These reviews are lies!", "We are aware of recent reviews unrelated to the app. Real issues can be reported in Settings, Help.", "A calm tone protects credibility."],
      ["Rebuild", "Buy positive reviews", "Compliant rating prompts after success moments", "Fake reviews violate policy."],
    ],
  },
  "app-store-ratings-reset-policy": {
    steps: [
      ["Confirm the fix is real", "Make sure the new version resolves the main causes."],
      ["Estimate rebuilding time", "Forecast how many ratings you can collect in a month."],
      ["Prepare compliant prompts", "Set triggers after success events."],
      ["Monitor conversion", "Watch conversion after the reset."],
      ["Document", "Record the decision and results."],
    ],
    examples: [
      ["Decision", "Reset to hide old reviews", "Reset after fixing the bugs that drove low ratings", "The product must be clearly better."],
      ["Plan", "Hope for ratings", "Prompt after the third completed task", "A plan rebuilds volume."],
      ["Review", "Never revisit", "Check conversion weekly for the first month", "A low rating count can hurt trust."],
    ],
  },
};
