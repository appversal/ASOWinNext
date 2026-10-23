export const extras04 = {
  "app-icon-ab-testing-guide": [
    ["Mistakes that quietly cost installs", ["Testing near-identical shades is the most common waste of traffic. Another mistake is testing an icon during a campaign that changes who sees your page, since the audience shift can swamp the icon effect. Stopping the test the first day a variant leads is a third.", "Teams also forget that an icon appears in places the experiment does not cover, such as the home screen and ads, and ship a winner that clashes with the brand."]],
    ["A worked example", ["A budgeting app has a green coin icon. The team writes two hypotheses: a simpler single-shape icon will be recognized faster in search, and a character mascot will feel friendlier. They build one variant for each and keep the control.", "After a full run covering several weekly cycles, the simple shape shows a modest, consistent lift while the mascot shows no clear difference. The team applies the simple icon, then checks that the lift holds in the following weeks."]],
  ],
  "screenshot-captions-copywriting": [
    ["Mistakes that quietly cost installs", ["The usual mistakes are captions that describe the interface instead of the benefit, such as Home screen, and captions that cram three ideas into one image. Low contrast text and tiny type that disappears in search results are next.", "Another is writing every caption in the same abstract voice. Specific words that visitors recognize from their own searches convert better than polished generic copy."]],
    ["A worked example", ["A meal planning app has the caption Powerful recipe features. Review mining shows users talk about not knowing what to cook tonight. The team rewrites it as Never wonder what to cook tonight, adds a clear plan view, and keeps the caption to seven words.", "They test it against the original in a store experiment and check the result by country before applying it."]],
  ],
  "localizing-screenshots-without-redesign": [
    ["Mistakes that quietly cost installs", ["Exporting translated text into a layout that was sized for English causes overflow and truncation that nobody catches until after release. Another mistake is localizing captions but leaving the app screens in the original language, which breaks the promise.", "Teams also lose track of which locales were reviewed, so errors reappear in later updates."]],
    ["A worked example", ["A team builds one master template with text styles that tolerate 30 percent longer strings. Top-tier markets get full adaptation, including local currency and examples; the next tier gets caption translation and native review; the rest stay on the default.", "A tracking sheet records locale, reviewer, and date, so a later UI change triggers a clear list of screens to update."]],
  ],
  "first-three-screenshots-strategy": [
    ["Mistakes that quietly cost installs", ["Opening with a splash graphic, a logo, or an award collage wastes the most valuable slot. Another mistake is showing three similar screens that all make the same point. Leaving the biggest objection unaddressed is a third.", "Many teams also build screenshots once and never revisit them, even as search terms and competitors change."]],
    ["A worked example", ["A language app's first three screens were a logo, a feature list, and a lesson screen. The team restructures them: first, a clear promise tied to its top keyword; second, a real conversation practice screen; third, a visible note that the first lessons are free.", "After testing, they confirm which order lifts conversion and move the logo to the end."]],
  ],
  "preview-video-first-seconds": [
    ["Mistakes that quietly cost installs", ["Long intros and logo animations burn the seconds that matter most. Using sound-dependent explanations fails for muted viewers. Another mistake is producing a video that does not match current specifications and gets rejected.", "Teams also keep outdated videos after the interface changes, which creates expectation gaps."]],
    ["A worked example", ["A task manager's video used to open with a five-second brand animation. The team re-cuts it to start on adding a task by voice, then shows the day plan, with large captions throughout.", "They compare conversion with and without the video where possible, and update it when the interface changes."]],
  ],
  "feature-graphic-google-play": [
    ["Mistakes that quietly cost installs", ["Cramming a headline, screenshots, badges, and a logo into one banner makes it unreadable at small sizes. Placing text where the video play button overlays it is common. Another mistake is using claims such as number one that policies do not allow.", "Teams also design it in isolation, so it clashes with the icon and screenshots."]],
    ["A worked example", ["A fitness app replaces a crowded banner with a clean image of one workout screen, a short headline, and the logo, all placed inside safe margins.", "It tests the new graphic through a listing experiment and keeps the style consistent with the icon and screenshots."]],
  ],
  "dark-mode-screenshots-store-assets": [
    ["Mistakes that quietly cost installs", ["Choosing dark mode purely because it looks modern, without checking how it appears against both store themes, is the main mistake. Gray captions on near-black backgrounds fail contrast checks. Showing a theme the app does not actually offer is a third.", "Teams also skip testing because the design team has a strong opinion."]],
    ["A worked example", ["A stock market app's users mostly use dark mode, so the team builds a dark set and a light set. In a custom page test, the dark set wins with its core audience, while the light set performs better for new users from search.", "They keep dark as default for the main page and use the light set for a broader campaign."]],
  ],
  "tablet-foldable-store-assets": [
    ["Mistakes that quietly cost installs", ["Stretching phone screenshots across a tablet frame is the usual shortcut and it looks unfinished. Another mistake is claiming tablet support when the layout is just scaled up. Teams also skip large-screen assets entirely even when a notable share of users are on tablets.", "Not testing the product itself on large screens leads to creative that the app cannot live up to."]],
    ["A worked example", ["A drawing app with a split-view canvas on tablets builds tablet-specific screenshots showing the tool panel and canvas side by side. It checks current requirements, reuses its template layers, and compares conversion for tablet visitors before and after.", "The lift justifies repeating the process for foldables."]],
  ],
  "social-proof-in-store-creatives": [
    ["Mistakes that quietly cost installs", ["Using outdated figures, such as an old user count, is the most damaging mistake because it is easy to disprove. Using logos or quotes without permission is another. A third is placing proof on every screenshot, which dilutes it.", "Fake or inflated numbers violate policies and destroy trust."]],
    ["A worked example", ["A finance app has a respected industry award and a large verified user base. It places the award in the third screenshot, where trust is the main objection, with a note on the year, and schedules a quarterly check of the user count.", "It tests with and without the proof and keeps it only where conversion improves."]],
  ],
  "creative-testing-backlog-prioritization": [
    ["Mistakes that quietly cost installs", ["Random testing, driven by whoever shouts loudest, is the main mistake. Another is running overlapping tests on the same audience and not knowing which change worked. A third is not logging results, so teams repeat old failed ideas.", "Overvaluing tiny cosmetic tests while avoiding bigger messaging bets wastes traffic."]],
    ["A worked example", ["A team lists ten hypotheses and scores each from one to five on impact, confidence, and effort. A caption rewrite based on review language scores high on all three. A full redesign scores high on impact but low on confidence and effort.", "They run the caption test first, log the result, and schedule the redesign test once evidence supports it."]],
  ],
  "in-app-rating-prompt-timing": [
    ["Mistakes that quietly cost installs", ["Asking at launch, after an error, or in the middle of a task are the common mistakes. Showing a custom happy-or-not screen that sends only happy users to the store breaks policy. Offering rewards for ratings is another violation.", "Teams also forget to suppress prompts for users with open support issues."]],
    ["A worked example", ["A running app triggers the prompt after a user completes a third run and views the summary, but not if a crash occurred during the last session. It tracks prompt shown, dismissed, and rating results.", "After a month it tests requiring five runs instead of three and compares rating quality."]],
  ],
  "ios-rating-prompt-best-practices": [
    ["Mistakes that quietly cost installs", ["Calling the review API from a Rate us button is the typical implementation error, because the system may show nothing. Another mistake is asking too often or too early. Treating the API as a guarantee leads to wrong assumptions.", "Teams also overlook that ratings reset decisions are tied to version releases."]],
    ["A worked example", ["A note app uses the system prompt after a user saves their tenth note, and adds a separate Rate on the App Store link in settings that opens the review page directly.", "It tracks prompt-to-review rates and reviews recent ratings per version."]],
  ],
  "google-play-in-app-review-api": [
    ["Mistakes that quietly cost installs", ["Expecting a dialog every time ignores quotas. Another mistake is asking after a negative event. Teams also sometimes try to detect whether the user reviewed, which the API does not allow.", "Forgetting to test the flow in a supported test setup leads to surprises in production."]],
    ["A worked example", ["A budgeting app requests the flow after a user reaches a monthly goal. It tests with Google's tools, measures review volume changes in Play Console, and replies to new reviews.", "A permanent link in settings offers a direct route to the Play page."]],
  ],
  "review-reply-templates-that-convert": [
    ["Mistakes that quietly cost installs", ["Pasting the same apology under every review is the clearest mistake, since users and prospective visitors notice. Arguing with a reviewer in public is another. Sharing personal details in a public reply is a privacy risk.", "Promising features with dates you cannot keep damages trust later."]],
    ["A worked example", ["A user writes that the app crashes when exporting. The reply: Thanks for letting us know. Exporting large files crashed on some devices and a fix shipped in version 4.2. Please update, and contact support if it still happens so we can look at your device details.", "The user updates the review to four stars after the fix works."]],
  ],
  "mining-reviews-for-keywords": [
    ["Mistakes that quietly cost installs", ["Treating a handful of reviews as truth is the main mistake. Another is copying competitor review text instead of analyzing themes. Using review phrases as keywords without checking search data can waste metadata space.", "Ignoring reviews in other languages misses market-specific vocabulary."]],
    ["A worked example", ["A bookkeeping app tags 500 reviews and finds users repeatedly say send invoices from my phone. The team checks store suggestions, confirms demand, and adds invoice to the subtitle and a caption.", "It watches visibility and conversion for the term over the next month."]],
  ],
  "crash-rate-and-store-ranking": [
    ["Mistakes that quietly cost installs", ["Launching a big creative push before checking stability is a common error. Another is looking only at the global crash rate, which hides a severe problem on one device model. Ignoring ANRs on Android is a third.", "Waiting for a scheduled release to fix a critical crash costs ratings."]],
    ["A worked example", ["A shopping app notices rising one-star reviews mentioning crashes on checkout. Segmenting crash data shows a spike on one Android version after a release. The team halts the staged rollout, ships a hotfix, and replies to affected reviews.", "Only then does it resume its campaign."]],
  ],
  "app-size-and-conversion": [
    ["Mistakes that quietly cost installs", ["Letting size creep with every release is the usual cause. Shipping uncompressed images and unused libraries is another. Assuming global averages apply to your audience can lead to wrong priorities.", "Another mistake is requiring a large additional download on first launch."]],
    ["A worked example", ["A video app measures conversion by market and sees a drop in markets with limited data. It compresses assets, moves rarely used features to on-demand delivery, and cuts the download size noticeably.", "It then compares conversion and early uninstalls in those markets before and after."]],
  ],
  "version-rollout-ratings-protection": [
    ["Mistakes that quietly cost installs", ["Releasing to everyone at once with no monitoring is the main mistake. Another is having no agreed threshold for pausing. Teams also forget that some changes, such as server-side issues, cannot be rolled back by pausing the app release.", "Not watching reviews in the first days misses early signals."]],
    ["A worked example", ["A team releases to a small share of users, with thresholds for crash-free rate and checkout conversion. Reviews flag a login problem on one device within hours, and the team pauses, patches, and resumes.", "The incident is logged and thresholds updated."]],
  ],
  "handling-review-bombing": [
    ["Mistakes that quietly cost installs", ["Assuming all negative reviews are fake and ignoring genuine problems is a mistake. So is fighting back with fake positive reviews. Another is waiting weeks to report.", "Replying defensively to hostile reviews escalates the situation."]],
    ["A worked example", ["After a public controversy, an app receives many one-star reviews with identical phrasing in an hour. The team saves screenshots and timestamps, reports them through the platform, posts a calm statement, and checks for real issues.", "A compliant prompt after success moments gradually restores the average."]],
  ],
  "app-store-ratings-reset-policy": [
    ["Mistakes that quietly cost installs", ["Resetting to escape a rating that reflects ongoing problems is the main mistake, since new reviews will reflect the same issues. Another is resetting without a plan to gather new ratings quickly. Ignoring conversion effects of a low rating count is a third.", "Not documenting the decision leaves the team confused later."]],
    ["A worked example", ["After a redesign that caused bugs, an app fixes the main issues in a major release. The team estimates how many ratings it can collect in a month with compliant prompts and decides to reset.", "It monitors conversion and reviews closely and replies to new feedback."]],
  ],
};
