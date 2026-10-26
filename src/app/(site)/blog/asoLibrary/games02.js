import { P } from "./release";

const author = "Khwahish Kapoor";

export const games02 = [
  P({
    slug: "game-soft-launch-strategy",
    author,
    title: "Mobile Game Soft Launch Strategy: Markets, KPIs, and When to Go Global",
    seoTitle: "Mobile Game Soft Launch: Markets, KPIs, Go-Global Criteria",
    description: "Plan a mobile game soft launch: choosing test markets, the KPIs to hit, ASO and creative testing, paid UA in soft launch, and criteria for global launch.",
    primaryKeyword: "game soft launch",
    secondaryKeywords: ["soft launch markets", "mobile game KPIs", "soft launch strategy"],
    category: "Game Growth",
    answer: "A soft launch releases a game in a few representative markets before going global, so you can measure retention, monetization, acquisition costs, and stability with real players. Pick markets that resemble your target audience but cost less, set KPI targets for day 1, day 7, and day 30 retention, revenue per user, and cost per install, and iterate in short cycles. Use the period to test store creative and keywords too. Go global only when the numbers support profitable scaling.",
    sections: [
      ["Why soft launch", [
        "Global launches are expensive and you only get one first impression. A soft launch lets you find and fix problems, such as onboarding drop-off, difficulty spikes, crashes on common devices, or weak monetization, while the audience is small. It also reveals whether players acquired through paid channels can be profitable, which determines whether a global launch can scale.",
        "Soft launch is not just about the game. It is the best time to test store creative, keywords, and positioning, because you have real traffic without the pressure of a global audience. Insights from this period shape the global listing.",
      ]],
      ["Choosing test markets", [
        "Good soft launch markets resemble your target audience in behavior and device mix while offering lower acquisition costs or manageable size. Teams often use English-speaking markets such as Canada, Australia, New Zealand, or the Philippines to approximate Western audiences, and Nordic or other European markets for specific behaviors. Markets with lower costs help test retention and creative cheaply.",
        "Choose markets for the questions you need to answer. Retention and gameplay questions can be tested in lower-cost markets; monetization questions need markets with spending patterns closer to your target. Many studios run staged soft launches: first for retention, then for monetization.",
      ]],
      ["The KPIs to watch", [
        "Retention is usually the first gate: day 1, day 7, and day 30 retention compared with genre expectations and your business model. Monetization follows: payer conversion, average revenue per daily active user, and cumulative revenue per install. Acquisition cost per install in each market, combined with revenue curves, shows whether paid scaling can be profitable.",
        "Also monitor technical health, such as crash rates, load times, and performance on low-end devices, and engagement, such as session length and sessions per day. Our guides to [mobile app retention rate](/blog/mobile-app-retention-rate-benchmarks/) and [LTV calculation](/blog/mobile-app-ltv-calculation/) explain how to measure these properly.",
      ]],
      ["Iterate in short cycles", [
        "Soft launch works best as a series of experiments. Each cycle targets a specific problem, such as the first-session funnel, level difficulty, or the first purchase offer, with a hypothesis, a change, and a measurement window. Two to four week cycles are common.",
        "Keep cohorts comparable. Changing many things at once makes it impossible to know what helped. Use A/B tests within the game where possible, and compare cohorts at the same ages, as described in [cohort analysis for mobile apps](/blog/cohort-analysis-for-mobile-apps/).",
      ]],
      ["Paid UA in soft launch", [
        "Most soft launches buy a controlled volume of installs to generate statistically useful cohorts. Use several creative concepts to learn which ones attract players who retain and spend. Creative insights from soft launch often become the foundation of global UA.",
        "Do not over-optimize for cheap installs. Players acquired through very broad campaigns may not represent your future audience. Track retention and revenue by campaign and creative, and use the data to set realistic cost targets. Our [creative strategy for app install ads](/blog/creative-strategy-for-app-install-ads/) guide explains testing.",
      ]],
      ["ASO testing during soft launch", [
        "Test icons, screenshots, and preview videos using store experiments in soft launch markets. On Google Play, [store listing experiments](/blog/store-listing-experiments-google-play/) are easy to run; on iOS, [product page optimization](/blog/product-page-optimization-ios/) allows tests of icons, screenshots, and previews. Even modest traffic can reveal large differences in creative appeal.",
        "Validate keywords too. Track which terms bring impressions and installs, and refine metadata before global launch. Our [game keyword research](/blog/game-keyword-research/) and [game app store creatives](/blog/game-app-store-creatives/) guides cover what to test.",
      ]],
      ["Deciding when to go global", [
        "Define go-global criteria before soft launch starts: minimum retention levels, revenue per install curves, cost per install ranges, and stability targets. When the game meets them consistently across cohorts, it is ready to scale. If it does not after several cycles, consider deeper changes or stopping the project.",
        "Prepare the global launch while finishing soft launch: localized listings, pre-registration, featuring pitches, creative libraries, and live ops plans. Our guides to [Google Play pre-registration](/blog/google-play-pre-registration-launch/) and [getting featured](/blog/get-featured-app-store-google-play/) help maximize launch momentum.",
      ]],
      ["Protecting the global launch", [
        "Ratings and reviews from soft launch markets are visible in those storefronts, and your global rating starts with whatever history exists in each country. On iOS, ratings are per storefront, so soft launch ratings stay in soft launch countries. On Google Play, ratings are also shown by country, but address soft launch complaints before global release anyway.",
        "Consider whether to keep the soft launch version or relaunch. Some studios release a new app ID for global launch if the soft launch build was very different, but that loses accumulated ratings and data. Plan this decision early.",
      ]],
      ["Common soft launch mistakes", [
        "Choosing markets that do not resemble the target audience leads to misleading data. Another mistake is buying too few installs, producing noisy cohorts. Teams also change too many things at once, losing the ability to learn.",
        "Some studios go global because of deadlines rather than data, scaling a game that cannot be profitable. Others never set go-global criteria, staying in soft launch indefinitely. Finally, ignoring store creative testing during soft launch wastes a valuable learning window.",
      ]],
      ["A worked example: a puzzle RPG's soft launch", [
        "A puzzle RPG soft launches in the Philippines and Canada. Initial day 1 retention is below target, and analytics show many players quit during a long tutorial. The team shortens the tutorial and lets players start their first battle within a minute. Day 1 retention rises meaningfully in the next cohort.",
        "In the second phase, the team adds Australia to test monetization and optimizes the first purchase offer. Store experiments show that an icon featuring the main hero outperforms a logo icon. After three months, retention and revenue curves meet the go-global criteria, and the game launches globally with the tested creative and a pre-registration campaign.",
      ]],
    ],
    steps: [
      ["Define questions and go-global criteria", "Write the KPIs and thresholds the game must reach before global launch."],
      ["Choose representative markets", "Pick markets that match your target audience for each question, such as retention or monetization."],
      ["Buy controlled install volume", "Acquire enough players for meaningful cohorts, using several creative concepts."],
      ["Iterate in short cycles", "Target one problem per cycle with a hypothesis, change, and measurement window."],
      ["Test store creative and prepare launch", "Run store experiments and prepare localized listings, pre-registration, and featuring pitches."],
    ],
    examples: [
      ["Market choice", "Soft launch only in a market with very different players.", "Retention tests in the Philippines, monetization tests in Canada and Australia.", "Markets should match the questions you need answered."],
      ["Iteration", "Change tutorial, economy, and art in one update.", "Shorten the tutorial only, then compare cohorts.", "Single changes produce clear learning."],
      ["Go-global decision", "Launch on the planned date regardless of results.", "Launch when retention and revenue per install meet pre-set criteria.", "Data-driven decisions prevent unprofitable scaling."],
    ],
    playbook: ["Set go-global criteria in advance", "Choose markets by question", "Buy enough installs for useful cohorts", "Iterate one problem per cycle", "Test icons and screenshots in soft launch", "Prepare global ASO before launch"],
    metrics: ["Day 1, 7, and 30 retention", "Revenue per install curve", "Cost per install by market", "Crash rate and performance", "Store experiment results"],
    faqs: [
      ["What is a soft launch for mobile games?", "A limited release in a few markets before global launch, used to test retention, monetization, acquisition costs, and stability."],
      ["Which countries are best for soft launch?", "Markets that resemble your target audience for the questions you need answered. English-speaking markets such as Canada, Australia, New Zealand, and the Philippines are common choices."],
      ["How long should a soft launch last?", "Long enough to reach your go-global criteria with stable data, often a few months, depending on how many iteration cycles are needed."],
      ["Should I test ASO during soft launch?", "Yes. It is an ideal time to test icons, screenshots, videos, and keywords before the global launch."],
    ],
    related: ["game-live-ops-events-aso", "game-app-store-creatives", "google-play-pre-registration-launch", "gaming-app-aso"],
    serviceLinks: ["/services/creative-ab-testing/", "/services/paid-user-acquisition/"],
    sources: [],
  }),
  P({
    slug: "game-live-ops-events-aso",
    author,
    title: "Game Live Ops and Events: Use In-App Events and Promotional Content for ASO",
    seoTitle: "Game Live Ops and Events for ASO: Visibility and Re-Engagement",
    description: "Use live ops for game ASO: planning an event calendar, Apple in-app events, Google Play promotional content, store creative refreshes, and measuring impact.",
    primaryKeyword: "game live ops ASO",
    secondaryKeywords: ["in-app events games", "Google Play promotional content games", "live ops calendar"],
    category: "Game Growth",
    answer: "Live ops, the ongoing events, seasons, and content updates that keep players engaged, can also drive store visibility. Apple's in-app events appear in search, on product pages, and in editorial placements, and Google Play's promotional content can surface events and offers in the store. Plan a calendar of meaningful events, publish them through both stores, refresh screenshots and promotional text for major moments, and measure installs, re-engagement, and revenue against a baseline.",
    sections: [
      ["Why live ops matters for ASO", [
        "Players expect games to evolve. Events, seasons, new characters, and limited-time challenges keep them engaged and give lapsed players reasons to return. Both major stores now let developers surface these moments in the store itself, turning live ops into a discovery and re-engagement channel.",
        "Live ops also improves the signals that support visibility: engagement, retention, and ratings. Players who enjoy events tend to rate games higher and recommend them. Our [mobile game ASO](/blog/gaming-app-aso/) playbook explains how these signals fit into game growth.",
      ]],
      ["Apple in-app events", [
        "Apple's in-app events let you showcase timely events, such as competitions, challenges, premieres, or major updates, on your product page, in search results, and in editorial placements on the App Store. Users can learn about the event, get notified when it starts, and open the app directly into the event if installed.",
        "Events must represent genuine, time-bound in-app content, not generic promotions. Each has a name, short and long descriptions, an event card image or video, a start and end time, and a badge type such as challenge, competition, live event, major update, new season, premiere, or special event. Our guide to [in-app events for ASO](/blog/in-app-events-aso-strategy/) covers setup and measurement.",
      ]],
      ["Google Play promotional content", [
        "Google Play's promotional content lets eligible apps and games submit events, offers, major updates, and other time-limited content that can appear in the Play Store, including on the Games and Apps tabs, in search, and on your store listing. It helps reach new players and re-engage existing ones.",
        "Promotional content needs compelling images and copy, accurate timing, and genuine value for players. Our [Google Play promotional content](/blog/google-play-promotional-content/) guide explains formats, eligibility, and best practices.",
      ]],
      ["Plan an event calendar", [
        "Map events a quarter or more ahead, aligned with content releases, seasons, holidays, and cultural moments in your key markets. Mix event types: competitive tournaments, cooperative challenges, collection events, new seasons, and crossovers. Avoid running so many events that none feels special.",
        "Coordinate the calendar across game design, marketing, and ASO. Each major event should have store assets ready: event cards, promotional content images, refreshed screenshots if appropriate, and promotional text. Our [seasonal ASO calendar](/blog/app-seasonality-aso-calendar/) explains planning across the year.",
      ]],
      ["Refresh store creative for major moments", [
        "For big updates and seasons, refresh screenshots and preview videos to show new content. A listing that shows last year's season looks stale. On iOS, screenshots change with a new version, while promotional text can change anytime; on Google Play, store listing changes are reviewed but typically quick.",
        "Seasonal creative can lift conversion during holidays and events, but test it against your evergreen creative and return to the evergreen version afterward if it performs better. Our guide to [promotional text](/blog/promotional-text-app-store/) explains how to use the field you can change anytime.",
      ]],
      ["Re-engagement and lapsed players", [
        "Events are one of the best re-engagement tools. Apple's in-app events can appear to users who have the app installed, and promotional content on Google Play can reach lapsed players. Pair store events with push notifications, email, and social posts for maximum reach, following the principles in our [push notification strategy](/blog/push-notification-strategy/).",
        "Make returning easy: lapsed players should land directly in the event with a short refresher, not a confusing menu after months away. Deep links from event cards and notifications help.",
      ]],
      ["Measure event impact", [
        "Compare installs, re-engagement, revenue, and retention during events against a representative baseline period, not just the previous week. App Store Connect reports event impressions and opens; Play Console reports promotional content performance. Combine with in-game analytics to see participation and spending.",
        "Not every event will lift installs. Some mainly drive engagement and revenue among existing players, which is still valuable. Track each event type's results to learn which formats work best for your game.",
      ]],
      ["Live ops and ratings", [
        "Well-designed events boost ratings when players feel rewarded. Poorly balanced events, such as ones that require excessive grinding or spending, can trigger negative reviews. Monitor reviews during events and respond quickly to complaints.",
        "Prompt for ratings after positive event moments, such as completing an event or receiving a reward, rather than during frustrating sections. See [rating prompt timing](/blog/in-app-rating-prompt-timing/) for guidance.",
      ]],
      ["Common live ops ASO mistakes", [
        "Running events without surfacing them in the stores wastes a free visibility opportunity. Another mistake is submitting generic sales as in-app events, which Apple's rules do not allow. Teams also leave outdated seasonal creative in place long after events end.",
        "Overloading the calendar with constant events reduces their impact and can exhaust players. Finally, measuring events only by installs misses their value for engagement and revenue.",
      ]],
      ["A worked example: a strategy game's season launch", [
        "A strategy game launches a new season with a new faction. Two weeks before, it submits an Apple in-app event with a new season badge and a Google Play promotional content entry with key art. It refreshes the first two screenshots to show the new faction and updates promotional text.",
        "On launch day, push notifications and social posts direct players to the event. Event impressions in the App Store reach many users who previously played, and returning players increase notably. Revenue during the first week of the season exceeds the baseline, and reviews praise the new faction.",
      ]],
    ],
    steps: [
      ["Build a quarterly event calendar", "Map events to content releases, seasons, and cultural moments in key markets."],
      ["Prepare store assets for each event", "Create event cards, promotional content images, and copy ahead of time."],
      ["Submit in-app events and promotional content", "Publish through App Store Connect and Play Console with accurate timing."],
      ["Refresh creative for major moments", "Update screenshots and promotional text for big seasons, then return to evergreen creative."],
      ["Measure against a baseline", "Compare installs, re-engagement, revenue, and retention with a representative period."],
    ],
    examples: [
      ["In-app event", "50% off all gems this weekend!", "New Season: The Frost Faction arrives with a 14-day campaign.", "Events must represent real in-app content, not generic sales."],
      ["Store creative", "Last winter's event screenshots still live in summer.", "Current season shown in the first two screenshots.", "Fresh creative signals an active game."],
      ["Measurement", "Compare event week with the week before.", "Compare event period with a representative non-event baseline.", "Better baselines produce more reliable conclusions."],
    ],
    playbook: ["Plan events a quarter ahead", "Surface events in both stores", "Keep events genuine and time-bound", "Refresh creative for big moments", "Pair store events with push and social", "Measure against representative baselines"],
    metrics: ["Event impressions and opens", "Returning player count during events", "Installs during events versus baseline", "Event revenue and participation", "Rating trend during events"],
    faqs: [
      ["What are Apple in-app events?", "Time-bound events, such as challenges, competitions, or new seasons, that can appear on your product page, in search, and in editorial placements on the App Store."],
      ["What is Google Play promotional content?", "A Play Console feature for submitting events, offers, and major updates that can appear in the Play Store to reach new and existing players."],
      ["Do in-app events help ASO?", "They can increase visibility and re-engagement, and improve engagement signals and ratings when events are well designed."],
      ["How often should games run events?", "Often enough to keep players engaged, but not so often that events lose impact. Many games run a mix of weekly and seasonal events."],
    ],
    related: ["in-app-events-aso-strategy", "google-play-promotional-content", "game-soft-launch-strategy", "app-seasonality-aso-calendar"],
    serviceLinks: ["/services/app-store-optimization/", "/services/creative-ab-testing/"],
    sources: [
      { label: "Apple: In-app events", url: "https://developer.apple.com/app-store/in-app-events/" },
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
    ],
  }),
  P({
    slug: "game-app-store-creatives",
    author,
    title: "Game App Store Creatives: Icons, Screenshots, and Trailers That Convert Players",
    seoTitle: "Game App Store Creatives: Icons, Screenshots, Trailers",
    description: "Design store creatives for mobile games: genre-clear icons, gameplay screenshots, preview videos and trailers, feature graphics, and how to test them.",
    primaryKeyword: "game app store creatives",
    secondaryKeywords: ["mobile game screenshots", "game icon design", "game trailer app store"],
    category: "Game Growth",
    answer: "Game store creatives should communicate genre, gameplay, and quality within seconds. Use an icon that signals the genre with a strong character or object, screenshots that show real gameplay and progression rather than only key art, and a preview video or trailer that opens with gameplay. On Google Play, a feature graphic frames the listing. Test icons and the first screenshots aggressively, and match creatives to the audiences your ads attract.",
    sections: [
      ["What game players look for", [
        "Players decide quickly whether a game is for them. They want to know the genre, what they will actually do, how it looks and feels, and whether it has depth. Store creatives must answer these questions at a glance, especially in search results where only the icon, first screenshots, and possibly a video are visible.",
        "Different genres emphasize different cues. Casual games sell satisfaction and simplicity; RPGs sell characters and progression; strategy games sell scale and tactics; puzzle games sell the puzzle itself. Our genre guides, such as [hyper-casual game ASO](/blog/hyper-casual-hybrid-casual-game-aso/), [puzzle game ASO](/blog/puzzle-game-aso/), and [RPG and strategy game ASO](/blog/rpg-strategy-game-aso/), go deeper.",
      ]],
      ["Icons that signal genre", [
        "Game icons often feature a character face with a strong expression, a key object, or a recognizable gameplay element. Characters can create emotional connection, while objects can communicate mechanics. Bold colors and simple compositions stand out among competitors.",
        "Icons are among the most impactful elements to test. Variations in character, expression, color, background, and framing can produce large conversion differences. Our [app icon A/B testing guide](/blog/app-icon-ab-testing-guide/) explains how to run reliable tests.",
      ]],
      ["Screenshots: gameplay first", [
        "Screenshots should show real gameplay, not just key art. Lead with the most exciting or representative moment, then show progression, variety, social features, and events. Short captions can clarify the goal or highlight features, but keep text minimal and readable.",
        "Many games use landscape or portrait screenshots based on gameplay orientation. Make sure the first screenshot works in search results, where it appears beside the icon. Our [first three screenshots strategy](/blog/first-three-screenshots-strategy/) explains why the first frames matter most.",
      ]],
      ["Preview videos and trailers", [
        "On the App Store, app previews autoplay muted in search results and on product pages, and must use footage captured from the app. They should open with gameplay in the first seconds rather than logos or cinematic intros. Our [preview video guide](/blog/preview-video-first-seconds/) covers best practices.",
        "On Google Play, promo videos are YouTube links, and the feature graphic acts as the video thumbnail. Game trailers can include cinematic content, but real gameplay should feature prominently so expectations match the game. See [app preview video guide](/blog/app-preview-video-guide/) for broader advice.",
      ]],
      ["Feature graphics and key art", [
        "On Google Play, the feature graphic frames the listing and appears in some promotional placements. For games, it often uses key art featuring characters or worlds. Keep the center clear if a video play button will overlay it, and avoid too much text. Our [feature graphic guide](/blog/feature-graphic-google-play/) explains design rules.",
        "Key art should be consistent with in-game visuals. Highly polished art that looks nothing like gameplay leads to disappointment and negative reviews.",
      ]],
      ["Localization and culturalization", [
        "Game creatives often need culturalization beyond translating captions. Character choices, color meanings, art styles, and themes can resonate differently across regions. Test localized creative in major markets, especially in Asia, where art style expectations can differ significantly.",
        "Our guide to [app store creative culturalization](/blog/culturalization-app-store-creatives/) and [game localization ASO](/blog/game-localization-aso/) explain how to adapt creative effectively.",
      ]],
      ["Testing and iteration", [
        "Test icons first, then the first screenshots, then videos. On Google Play, [store listing experiments](/blog/store-listing-experiments-google-play/) allow quick tests; on iOS, [product page optimization](/blog/product-page-optimization-ios/) supports icon, screenshot, and preview tests. Run tests long enough for reliable results.",
        "Use ad creative insights too. Concepts that win in paid campaigns, such as a particular character or mechanic, may also lift store conversion. Our [creative strategy for app install ads](/blog/creative-strategy-for-app-install-ads/) guide explains how to share learnings between paid and organic.",
      ]],
      ["Seasonal and event creative", [
        "Refresh creatives for major updates, seasons, and holidays to keep listings feeling alive. Seasonal icons and screenshots can lift conversion during peak periods, but test them against evergreen versions. Use Apple's in-app events and Google Play's promotional content to highlight events without changing core creative.",
        "Plan creative refreshes in a calendar aligned with live ops, as described in [game live ops events ASO](/blog/game-live-ops-events-aso/).",
      ]],
      ["Common game creative mistakes", [
        "Using only cinematic key art without gameplay is a frequent mistake that leads to mismatched expectations. Another is cluttered icons that become unreadable at small sizes. Many games also open preview videos with long logo intros, wasting the most valuable seconds.",
        "Teams sometimes never test icons, missing one of the largest conversion levers. Finally, leaving outdated seasonal creative live makes a game look neglected.",
      ]],
      ["A worked example: an action RPG's creative refresh", [
        "An action RPG's store page uses a logo icon and five cinematic art screenshots. Conversion is low compared with competitors. The team tests three icons featuring the main hero with different expressions and backgrounds; one lifts conversion significantly in Google Play experiments.",
        "It replaces three screenshots with gameplay showing combat, character upgrades, and co-op raids, and creates a preview video that opens with a boss fight. Conversion improves further, and early reviews mention that the game looks exactly like the store page, a sign that expectations now match the experience.",
      ]],
    ],
    steps: [
      ["Define genre cues", "List the visual and gameplay cues players in your genre expect to see."],
      ["Design and test icons", "Create several icon concepts with strong characters or objects and test them."],
      ["Build gameplay-first screenshots", "Lead with exciting gameplay, then show progression, variety, and social features."],
      ["Create a gameplay-led preview or trailer", "Open with gameplay in the first seconds and keep footage representative."],
      ["Localize, test, and refresh", "Culturalize creative for key markets, test regularly, and refresh for major events."],
    ],
    examples: [
      ["Icon", "Game logo on a dark background.", "Main hero with a fierce expression against a bright backdrop.", "Characters and bold contrast attract attention in search results."],
      ["Screenshots", "Five cinematic art images.", "Combat, upgrades, co-op raids, events, and one key art image.", "Real gameplay sets accurate expectations."],
      ["Preview video", "Ten-second logo intro before gameplay.", "Boss fight gameplay in the first second.", "The first seconds decide whether players keep watching."],
    ],
    playbook: ["Signal genre in the icon", "Lead screenshots with gameplay", "Open videos with gameplay", "Keep key art consistent with the game", "Culturalize for key markets", "Test icons first, then screenshots and videos"],
    metrics: ["Store conversion rate", "Experiment lift by asset", "Search tap-through rate", "Conversion by country", "Review mentions of mismatched expectations"],
    faqs: [
      ["What makes a good game icon?", "A bold, simple design that signals the genre, often featuring a character with strong expression or a key gameplay object, tested against variants."],
      ["Should game screenshots show key art or gameplay?", "Mostly gameplay, with key art used sparingly. Players want to see what they will actually do."],
      ["Do game preview videos improve conversion?", "Often yes, especially when they open with gameplay. Test them against static screenshots to confirm."],
      ["How often should game creatives be refreshed?", "Refresh for major updates and seasons, and test regularly. Remove outdated seasonal creative promptly."],
      ["Should game screenshots be portrait or landscape?", "Match the orientation players experience in the game. Portrait screenshots show more images in search results on phones, while landscape suits games played sideways. Some landscape games use a portrait first screenshot for search visibility, but every image must still show real gameplay and match what players will see."],
    ],
    related: ["gaming-app-aso", "app-icon-ab-testing-guide", "preview-video-first-seconds", "game-live-ops-events-aso"],
    serviceLinks: ["/services/creative-ab-testing/", "/services/app-store-optimization/"],
    sources: [],
  }),
  P({
    slug: "game-keyword-research",
    author,
    title: "Game Keyword Research: Find the Terms Players Use to Search for Games",
    seoTitle: "Game Keyword Research: How Players Search for Mobile Games",
    description: "Run keyword research for mobile games: genre, mechanic, theme, and mood terms, competitor and review mining, metadata placement, and avoiding trademarks.",
    primaryKeyword: "game keyword research",
    secondaryKeywords: ["mobile game keywords", "game ASO keywords", "game metadata"],
    category: "Game Growth",
    answer: "Players search for games by genre (RPG, puzzle, racing), mechanic (merge, match 3, tower defense), theme (zombie, fantasy, farm), mood or context (relaxing, offline, multiplayer), and audience (for kids, for adults). Build a keyword map from these dimensions using store suggestions, competitor listings, reviews, and keyword tools. Place the strongest terms in the title and subtitle or short description, avoid other games' trademarks, and refresh the map as trends and your game evolve.",
    sections: [
      ["How players search for games", [
        "Many game installs come from browsing charts, featured placements, and ads, but search remains important, especially for players looking for a specific type of experience. Their queries usually combine a few dimensions: genre, mechanic, theme, mood, and context. A player might search for offline zombie shooter, relaxing farm game, or tower defense strategy.",
        "Understanding these dimensions helps you find keywords that match your game honestly and attract players who will enjoy it. Ranking for broad terms like games is nearly impossible for most titles; ranking for specific combinations is achievable and brings better players.",
      ]],
      ["Build a keyword map by dimension", [
        "List terms for each dimension that fits your game. Genre: puzzle, RPG, strategy, racing, simulation. Mechanic: merge, match 3, idle, tower defense, battle royale, card battler. Theme: fantasy, sci-fi, medieval, zombie, farm, cooking. Mood and context: relaxing, offline, multiplayer, with friends, no wifi, short sessions. Audience: for kids, for adults, family.",
        "Combine dimensions into phrases and evaluate them for relevance, popularity, and competition. Our [ASO keyword research](/blog/aso-keyword-research/) framework explains scoring, and [long-tail app store keywords](/blog/long-tail-app-store-keywords/) shows how specific combinations can be easier to win.",
      ]],
      ["Sources: suggestions, competitors, and reviews", [
        "Store search suggestions show popular queries as players type. Explore suggestions for each dimension in your target markets. Competitor listings reveal which terms leaders emphasize in titles, subtitles, and descriptions. Our [competitor ASO analysis](/blog/competitor-aso-analysis/) guide explains how to analyze them.",
        "Player reviews and community discussions reveal the language players use, such as satisfying, grindy, or cozy. These words can become keywords and caption copy. Our guide to [mining reviews for keywords](/blog/mining-reviews-for-keywords/) shows how to extract them. Keyword tools add estimated popularity and difficulty; see [keyword research tools](/blog/keyword-research-tools-for-aso/).",
      ]],
      ["Placing keywords in metadata", [
        "On the App Store, the title and subtitle carry the most weight, and the 100-byte keyword field extends coverage. Use the title for your game's name plus a strong genre or mechanic term where natural, and the subtitle for a combination of genre, theme, or mood. Our [App Store keyword field](/blog/app-store-keyword-field/) guide explains how to use the field efficiently.",
        "On Google Play, the title, short description, and full description are indexed. Use natural language that includes priority terms without stuffing. Our [Google Play keyword optimization](/blog/google-play-keyword-optimization/) guide explains the balance.",
      ]],
      ["Avoid trademarks and misleading terms", [
        "Do not use other games' names or trademarked franchises in your metadata unless you hold a license. Store policies prohibit it, and players searching for a specific game rarely want an alternative. Avoid keywords that misrepresent your game, such as claiming multiplayer when it is single-player.",
        "Misleading keywords may bring impressions but produce low conversion, poor retention, and negative reviews, which ultimately hurt visibility. Our [white hat vs black hat ASO guide](/blog/aso-white-hat-vs-black-hat-guidelines/) explains the risks.",
      ]],
      ["Localize keyword research", [
        "Game vocabulary differs by language and culture. Genre names, slang, and popular themes vary, and direct translation often misses real queries. Research keywords in each priority market using local suggestions and native speakers. Our [game localization ASO](/blog/game-localization-aso/) guide covers this in depth.",
        "Some markets use English game terms alongside local language terms. Check which forms players actually use in search before choosing.",
      ]],
      ["Trends and seasonality", [
        "Game trends shift quickly. New sub-genres emerge, such as a mechanic popularized by a breakout hit, and seasonal themes like Halloween or winter holidays spike temporarily. Monitor trends and adapt promotional text, events, and seasonal content, but keep core metadata aligned with your game's lasting identity.",
        "Our [seasonal ASO calendar](/blog/app-seasonality-aso-calendar/) helps plan seasonal keyword and creative updates.",
      ]],
      ["Measure and iterate", [
        "Track rankings, impressions, and installs for priority keywords, and connect them to conversion and retention where possible. On iOS, App Store Connect shows search impressions; Apple Ads search terms reports reveal which queries convert. On Google Play, Play Console shows search terms that bring visitors and installs.",
        "Iterate metadata in planned cycles, changing a few elements at a time so you can attribute results. Our [keyword ranking tracking](/blog/app-store-keyword-ranking-tracking/) guide explains how to monitor rankings meaningfully.",
      ]],
      ["Common game keyword mistakes", [
        "Targeting only broad terms like game or fun game wastes metadata space on unwinnable keywords. Another mistake is using competitor names, risking rejection. Many games also ignore mood and context terms like offline or relaxing, which players frequently search.",
        "Teams sometimes translate keywords instead of researching locally, missing real queries. Finally, changing metadata too frequently makes it impossible to learn what works.",
      ]],
      ["A worked example: a cozy farming game", [
        "A cozy farming game uses the subtitle Fun and relaxing game, which is vague. Keyword research reveals players search for farm game, cozy games, offline farming, and farming simulator, and reviews frequently mention relaxing and cozy. The team rewrites the subtitle as Cozy farm and village simulator and fills the keyword field with related terms like harvest, crops, animals, offline, and village.",
        "On Google Play, the short description becomes Grow crops, raise animals, and build a cozy village, even offline. Search impressions for farming terms rise, and conversion improves because players see exactly the experience they searched for.",
      ]],
    ],
    steps: [
      ["List terms by dimension", "Write genre, mechanic, theme, mood, context, and audience terms that fit your game."],
      ["Gather data from multiple sources", "Use store suggestions, competitor listings, reviews, and keyword tools."],
      ["Score and prioritize", "Rank phrases by relevance, popularity, competition, and fit with your game."],
      ["Place keywords strategically", "Use title, subtitle or short description, keyword field, and description appropriately per store."],
      ["Localize and iterate", "Research each market locally and update metadata in planned cycles."],
    ],
    examples: [
      ["Subtitle", "Fun and relaxing game", "Cozy farm and village simulator", "Specific genre, theme, and mood terms match player searches."],
      ["Keyword field", "game,fun,best,free,farmville", "harvest,crops,animals,offline,village,cozy,simulator", "Relevant terms without trademarks or wasted words."],
      ["Short description", "The best farming game ever made!", "Grow crops, raise animals, and build a cozy village, even offline.", "Natural language with priority terms converts and ranks."],
    ],
    playbook: ["Map keywords by genre, mechanic, theme, and mood", "Mine store suggestions and reviews", "Prioritize specific combinations", "Avoid trademarks and misleading terms", "Localize research per market", "Iterate in planned cycles"],
    metrics: ["Rankings for priority keywords", "Search impressions and installs", "Conversion rate from search", "Retention of search-acquired players", "Search terms reported by stores"],
    faqs: [
      ["How do players search for mobile games?", "By combining genre, mechanic, theme, mood, and context, such as offline zombie shooter or relaxing puzzle game."],
      ["Can I use other game names as keywords?", "No, not without a license. It violates store policies and attracts players looking for a different game."],
      ["Where should game keywords go?", "In the title, subtitle, and keyword field on the App Store, and in the title, short description, and full description on Google Play."],
      ["Should game keywords be localized?", "Yes. Research keywords in each market, because game vocabulary differs by language and culture."],
    ],
    related: ["aso-keyword-research", "gaming-app-aso", "game-localization-aso", "long-tail-app-store-keywords"],
    serviceLinks: ["/services/app-store-optimization/", "/services/keyword-installs/"],
    sources: [],
  }),
  P({
    slug: "game-localization-aso",
    author,
    title: "Game Localization for ASO: Translate, Culturalize, and Win Global Players",
    seoTitle: "Game Localization for ASO: Win Players in Every Market",
    description: "Localize mobile games for ASO: prioritize markets, research local keywords, culturalize creative, protect in-game translation quality, and measure results.",
    primaryKeyword: "game localization",
    secondaryKeywords: ["mobile game localization", "localize game store listing", "game culturalization"],
    category: "Game Growth",
    answer: "Game localization for ASO means adapting the store listing and the game itself for each target market. Prioritize markets by opportunity, research local keywords instead of translating, localize titles, descriptions, and screenshot captions with native speakers, and culturalize creative such as art style, characters, and symbols where needed. In-game localization quality affects ratings, so test with local players. Measure conversion, retention, and revenue by market to guide investment.",
    sections: [
      ["Why localization matters for games", [
        "Games are played worldwide, and many of the largest game markets are not English-speaking. Players are more likely to install and stay with games available in their language, and store listings in the local language rank better for local searches. Localization can unlock significant growth with relatively modest investment compared with acquiring the same players through paid ads.",
        "Poor localization can backfire. Awkward translations, untranslated text, or culturally insensitive content generate negative reviews that hurt conversion in that market. Quality matters as much as coverage.",
      ]],
      ["Prioritize markets", [
        "Choose markets based on genre popularity, market size, monetization potential, competition, and your capacity to support players. Store analytics, competitor data, and soft launch results can guide decisions. Our [app store localization strategy](/blog/app-store-localization-strategy/) explains how to prioritize by opportunity.",
        "Start with store listing localization, which is cheaper, to test demand before full in-game localization. If localized listings drive strong conversion, invest in localizing the game itself.",
      ]],
      ["Localize keywords, not just text", [
        "Game vocabulary differs by language. Players in different countries may use different genre names, slang, or English loanwords. Research keywords in each market using local store suggestions, competitor listings, and native speakers. Our [game keyword research](/blog/game-keyword-research/) guide explains the dimensions to explore.",
        "Character limits behave differently by script. Some languages need more characters to express the same idea, while character-based languages fit more meaning into fewer characters but may use more bytes in the iOS keyword field. Adapt metadata to each language rather than forcing translations.",
      ]],
      ["Culturalize store creative", [
        "Screenshots and icons may need more than translated captions. Art style preferences differ, for example between Western and East Asian markets. Character designs, color meanings, symbols, and themes can resonate differently or cause offense. Test localized creative in major markets.",
        "Our guide to [app store creative culturalization](/blog/culturalization-app-store-creatives/) explains how to adapt beyond translation, and [localizing screenshots without redesign](/blog/localizing-screenshots-without-redesign/) shows workflows that keep production efficient.",
      ]],
      ["In-game localization quality", [
        "In-game text, tutorials, UI, and voice affect player experience and reviews. Use professional translators familiar with games, provide context such as screenshots and character notes, and test in-game with native speakers. Check text overflow, fonts, and right-to-left layouts for languages like Arabic.",
        "Localize pricing and offers too. Price points and bundle values should feel appropriate in each market. Our guide to [Arabic and right-to-left listings](/blog/arabic-rtl-app-store-listing/) covers RTL considerations.",
      ]],
      ["Local events and live ops", [
        "Cultural events and holidays differ by market. Local events, such as Lunar New Year in East Asia, Diwali in India, or Ramadan in many Muslim-majority countries, offer opportunities for themed content and store promotions. Plan localized events in your live ops calendar.",
        "Use Apple in-app events and Google Play promotional content with localized copy and art. Our [game live ops events ASO](/blog/game-live-ops-events-aso/) guide explains how to surface events in the stores.",
      ]],
      ["Support and community", [
        "Players expect support in their language, especially for purchases and account issues. Offer localized FAQs and, where feasible, support in major languages. Community channels in local languages build loyalty and gather feedback.",
        "Respond to reviews in the reviewer's language. Our guide to [review reply templates](/blog/review-reply-templates-that-convert/) can be adapted for multiple languages.",
      ]],
      ["Measure localization ROI", [
        "Compare conversion, retention, and revenue by market before and after localization. Store analytics show conversion by country; in-game analytics show retention and spending. Use these results to decide where to deepen localization or expand to new languages.",
        "Track ratings and review themes by market. A drop in ratings after localization may signal translation problems that need fixing.",
      ]],
      ["Machine translation and AI: where they fit", [
        "Machine translation and AI tools have improved and can speed up first drafts, especially for long descriptions, patch notes, and support articles. They are useful for testing demand in a market cheaply. But game text is full of humor, character voice, wordplay, and context that automated tools often get wrong, and store metadata depends on local search vocabulary that translation alone cannot discover.",
        "A practical approach is to use machine translation for drafts, then have native speakers who play games review and adapt them, with special care for the title, subtitle, short description, keywords, and screenshot captions. Our guide to [AI in app store optimization](/blog/ai-in-app-store-optimization/) covers how teams combine automation with human judgment.",
      ]],
      ["Common game localization mistakes", [
        "Translating keywords directly without local research is the most common ASO mistake. Another is localizing the store listing but not the game, leading to disappointed players and negative reviews. Machine translation without review often produces awkward or incorrect text.",
        "Teams also ignore cultural differences in creative, or forget to localize pricing and events. Finally, launching many languages at once without capacity to support them spreads resources too thin.",
      ]],
      ["A worked example: a strategy game expands to Japan and Brazil", [
        "A strategy game performing well in English-speaking markets localizes its store listing for Japan and Brazil. Local keyword research reveals different genre terms in each market. Japanese screenshots are redesigned with art adjustments preferred by local players, while Brazilian creative emphasizes multiplayer and alliances.",
        "Conversion rises in both markets, so the studio localizes the game fully, adds local events, and offers support in both languages. Revenue from Japan grows significantly, and Brazilian players drive strong community engagement and reviews.",
      ]],
    ],
    steps: [
      ["Prioritize markets", "Rank markets by genre popularity, size, monetization, competition, and capacity."],
      ["Localize store listings first", "Research local keywords and localize metadata and captions with native speakers."],
      ["Culturalize creative", "Adapt art, characters, and themes where needed, and test in major markets."],
      ["Localize the game with quality checks", "Use game-experienced translators and test in-game with native players."],
      ["Add local events and measure ROI", "Plan local events, offer localized support, and compare results by market."],
    ],
    examples: [
      ["Keywords", "Translate the English keyword list.", "Research local genre terms and slang with native speakers.", "Local research finds real queries."],
      ["Creative", "Same screenshots with translated captions everywhere.", "Japanese creative with art style adjustments; Brazilian creative emphasizing multiplayer.", "Culturalization raises appeal in each market."],
      ["Quality", "Machine-translated in-game text without review.", "Professional translation tested by native players.", "Quality localization protects ratings."],
    ],
    playbook: ["Prioritize markets by opportunity", "Research keywords locally", "Culturalize creative for major markets", "Localize the game with quality checks", "Plan local events", "Measure conversion and revenue by market"],
    metrics: ["Conversion rate by market", "Retention and revenue by market", "Rankings for local keywords", "Ratings and review themes by market", "Localization ROI"],
    faqs: [
      ["Should I localize my game's store listing before the game?", "Often yes. Localizing the listing first is cheaper and tests demand before investing in full in-game localization."],
      ["Can I translate game keywords directly?", "No. Research keywords in each market, because game vocabulary and slang differ by language."],
      ["What is culturalization in games?", "Adapting content, such as art, characters, symbols, and themes, so it resonates and avoids offense in each culture."],
      ["Which markets should games localize for first?", "Markets with strong genre popularity and monetization potential, and where you can support players, based on data rather than assumptions."],
    ],
    related: ["app-store-localization-strategy", "culturalization-app-store-creatives", "game-keyword-research", "localizing-screenshots-without-redesign"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [],
  }),
];
