import { P } from "./release";

export const platform02 = [
  P({
    slug: "app-store-screenshot-sizes",
    title: "App Store Screenshot Sizes and Specifications: The Current Cheat Sheet",
    seoTitle: "App Store Screenshot Sizes 2026: iPhone, iPad, Mac, Watch",
    description: "Current App Store screenshot sizes for iPhone, iPad, Mac, Apple TV, and Vision Pro, plus file rules, how many to upload, and which sizes are required.",
    primaryKeyword: "App Store screenshot sizes",
    secondaryKeywords: ["iPhone screenshot size", "iPad screenshot dimensions", "App Store Connect screenshot specifications"],
    category: "Platform Guides",
    answer: "For iPhone, upload either the 6.9-inch size (1320 x 2868, 1290 x 2796, or 1260 x 2736 pixels in portrait) or the 6.5-inch size (1284 x 2778 or 1242 x 2688). For iPad, upload the 13-inch size (2064 x 2752 or 2048 x 2732). App Store Connect scales these down for smaller devices. Each localization accepts one to ten screenshots per device size in JPEG or PNG. Mac screenshots use a 16:10 ratio, such as 2880 x 1800.",
    sections: [
      ["Which sizes are actually required", [
        "Apple simplified screenshot requirements so you no longer need a separate set for every iPhone. If your app runs on iPhone, you must provide screenshots for the 6.9-inch display, or for the 6.5-inch display if you do not provide 6.9-inch images. If it runs on iPad, you must provide the 13-inch iPad size. App Store Connect then uses these for smaller devices automatically.",
        "You can still upload sizes for smaller devices if you want pixel-perfect control, for example when a layout looks noticeably different on a compact phone. Most teams upload only the largest required size and spend the saved time on better [screenshot design](/blog/app-store-screenshot-design/) and testing. Apple adds new sizes when new devices launch, so check the official specification page before each major creative refresh.",
      ]],
      ["iPhone screenshot dimensions", [
        "6.9-inch display: 1320 x 2868, 1290 x 2796, or 1260 x 2736 pixels in portrait, or the same values reversed for landscape. 6.5-inch display: 1284 x 2778 or 1242 x 2688 pixels in portrait. These two sizes cover the requirement for iPhone, and the 6.9-inch size is the safest choice for new creative because it matches current flagship phones.",
        "Smaller optional sizes include the 6.3-inch display (1206 x 2622 or 1179 x 2556), the 6.1-inch display (1170 x 2532, 1125 x 2436, or 1080 x 2340), and the 5.5-inch display (1242 x 2208). Design captions so they remain legible when scaled down, because many users browse on these smaller devices even if you upload only the largest size.",
      ]],
      ["iPad, Mac, Apple TV, Watch, and Vision Pro", [
        "iPad 13-inch: 2064 x 2752 or 2048 x 2732 pixels in portrait, and the reverse in landscape. Optional 11-inch sizes include 1668 x 2388 and 1640 x 2360. Do not simply stretch phone screenshots onto an iPad canvas; reviewers and users both notice. Our guide to [tablet and foldable store assets](/blog/tablet-foldable-store-assets/) explains how to design for large screens.",
        "Mac screenshots use a 16:10 aspect ratio at 1280 x 800, 1440 x 900, 2560 x 1600, or 2880 x 1800. Apple TV uses 1920 x 1080 or 3840 x 2160, and Apple Vision Pro uses 3840 x 2160. Apple Watch has several sizes by case size, and you provide the largest relevant one. See our guides to [Mac App Store optimization](/blog/mac-app-store-optimization/) and [smart TV app stores](/blog/smart-tv-app-store-optimization/) for platform-specific creative advice.",
      ]],
      ["File rules, counts, and app previews", [
        "Screenshots must be JPEG or PNG in RGB, and you can upload one to ten per device size for each localization. Flatten transparency before export to avoid upload errors. Every image must show the app in use; splash screens or pure marketing art can trigger a metadata rejection under guideline 2.3.",
        "You can also add up to three app preview videos per device size and localization. Previews must be 15 to 30 seconds long and use footage captured from the app. The first preview autoplays muted in search results and on the product page, which is why our [preview video guide](/blog/preview-video-first-seconds/) focuses on the first three seconds.",
      ]],
      ["Design for search results, not just the product page", [
        "In App Store search results, users usually see the first three portrait screenshots, or the first landscape screenshot, next to your icon and rating. Those images decide whether someone taps through. Lead with the core outcome, keep captions short, and make the first frame understandable without reading the description. The [first three screenshots strategy](/blog/first-three-screenshots-strategy/) guide goes deeper.",
        "If a preview video is present, it replaces the first screenshot in search results for many users. Make sure the video's opening frame works as a static image too, because autoplay depends on device settings. Test caption wording with the patterns in [screenshot caption copywriting](/blog/screenshot-captions-copywriting/).",
      ]],
      ["Localize and test without rebuilding everything", [
        "Each localization can have its own screenshots, and custom product pages can use different screenshot sets for different audiences. Build a template system with editable caption layers so translation does not require redesign. Our guide to [localizing screenshots without redesign](/blog/localizing-screenshots-without-redesign/) shows a practical workflow.",
        "Once you have a strong base set, test variations with [product page optimization](/blog/product-page-optimization-ios/) in App Store Connect. Test one meaningful change at a time, such as the first screenshot's message, so you learn what moved conversion rather than simply finding a winner by chance.",
      ]],
    ],
    steps: [
      ["Confirm the platforms your app supports", "List iPhone, iPad, Mac, Apple TV, Watch, and Vision Pro support so you know which screenshot sets are required."],
      ["Design at the largest required size", "Use 1320 x 2868 for iPhone and 2064 x 2752 for iPad as master canvases, with captions large enough to stay readable when scaled."],
      ["Export clean RGB files", "Export JPEG or PNG without transparency, named in display order, and check the pixel dimensions match exactly."],
      ["Order for search results", "Place your clearest value proposition in the first three portrait screenshots, because they appear in search."],
      ["Upload per localization and verify", "Upload in App Store Connect, preview each device size, and confirm text is legible on the smallest supported phone."],
    ],
    examples: [
      ["iPhone canvas", "Design at 1080 x 1920 and upscale.", "Design at 1320 x 2868 and let App Store Connect scale down.", "Upscaled images look soft and may be rejected for wrong dimensions; designing at the largest size keeps text crisp."],
      ["First screenshot", "App logo on a gradient with the text Welcome.", "The core screen with the caption Track every bill in one place.", "Splash-style images waste the most visible slot and can breach guideline 2.3."],
      ["iPad set", "Phone screenshots centered on a 13-inch canvas with empty margins.", "Native iPad layouts showing split view and the larger canvas.", "Large-screen users expect to see how the app uses the space."],
    ],
    playbook: ["Upload 6.9-inch iPhone and 13-inch iPad as master sizes", "Check Apple's specification page before every refresh", "Flatten transparency and export RGB", "Make the first three screenshots work in search", "Use editable caption layers for localization", "Test the first screenshot message with product page optimization"],
    metrics: ["Product page conversion rate", "Search tap-through rate from impressions", "Conversion by device type", "Test lift from screenshot experiments"],
    faqs: [
      ["What size should App Store screenshots be in 2026?", "Use 1320 x 2868 pixels (6.9-inch) or 1284 x 2778 pixels (6.5-inch) in portrait for iPhone, and 2064 x 2752 pixels (13-inch) for iPad. App Store Connect scales them for smaller devices."],
      ["How many screenshots can I upload to the App Store?", "Up to ten per device size for each localization, with a minimum of one. You can also add up to three app preview videos."],
      ["Do I need screenshots for every iPhone size?", "No. Providing the 6.9-inch or 6.5-inch set covers iPhone, and smaller sizes are generated automatically. You can still upload smaller sizes for more control."],
      ["Can App Store screenshots include marketing text?", "Yes. Captions and device frames are common, but each screenshot must show the app in use and claims must be accurate."],
    ],
    related: ["app-store-screenshot-design", "google-play-screenshot-sizes-and-assets", "first-three-screenshots-strategy", "app-icon-sizes-guide"],
    serviceLinks: ["/services/creative-ab-testing/", "/services/app-store-optimization/"],
    sources: [
      { label: "Apple: Screenshot specifications", url: "https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications" },
      { label: "Apple: App preview specifications", url: "https://developer.apple.com/help/app-store-connect/reference/app-preview-specifications" },
    ],
  }),
  P({
    slug: "google-play-screenshot-sizes-and-assets",
    title: "Google Play Screenshot Sizes and Store Asset Specs: Icons, Graphics, and Video",
    seoTitle: "Google Play Screenshot Sizes and Asset Specs (2026)",
    description: "Google Play screenshot sizes, feature graphic and icon specs, video rules, and the asset requirements that make an app eligible for promotion surfaces.",
    primaryKeyword: "Google Play screenshot sizes",
    secondaryKeywords: ["Play Store screenshot dimensions", "Google Play feature graphic size", "Google Play icon size"],
    category: "Platform Guides",
    answer: "Google Play screenshots must be JPEG or 24-bit PNG with no transparency. Each side must be between 320 and 3,840 pixels, and the longer side can be no more than twice the shorter. Upload two to eight per device type. For phone apps, at least four screenshots of at least 1080 pixels (for example 1080 x 1920) are recommended for promotion eligibility. The icon is 512 x 512 (32-bit PNG, up to 1 MB) and the feature graphic is 1024 x 500.",
    sections: [
      ["Screenshot rules for phones", [
        "Google Play accepts JPEG or 24-bit PNG screenshots without an alpha channel. The minimum dimension is 320 pixels and the maximum is 3,840 pixels, and the longer side cannot be more than twice the shorter side. You can upload between two and eight screenshots per device type, and they appear in the order you set.",
        "For apps that want to appear in recommendations and other promotional surfaces, Google recommends at least four screenshots with a minimum resolution of 1080 pixels on the shorter side, such as 1080 x 1920 in portrait or 1920 x 1080 in landscape. Designing at 1080 x 1920 or 1440 x 2560 gives sharp results on modern devices while staying within the limits.",
      ]],
      ["Tablets, Chromebooks, Wear OS, TV, and cars", [
        "Google Play supports separate screenshot sets for 7-inch and 10-inch tablets, Chromebooks, Wear OS, Android TV, Android Automotive, and Android XR. Large-screen sets matter because Google promotes apps with good large-screen experiences on tablets and Chromebooks, and users on those devices see the matching set first. Our guide to [tablet and foldable store assets](/blog/tablet-foldable-store-assets/) covers design choices.",
        "Wear OS screenshots should be square and show the watch interface without device frames or extra text, and Android TV needs a 1280 x 720 banner as well as 16:9 screenshots. If you ship on these form factors, treat their listings as separate storefronts with their own conversion goals, as described in our [smart TV app store optimization](/blog/smart-tv-app-store-optimization/) guide.",
      ]],
      ["App icon specifications", [
        "The Google Play store icon must be a 512 x 512 pixel 32-bit PNG with a maximum file size of 1,024 KB. Provide a full square image: Google Play applies rounded corners and a shadow dynamically, so adding your own creates a doubled, unprofessional look. Keep important details away from the edges so the mask does not clip them.",
        "The store icon is separate from your launcher icon, which uses Android's adaptive icon format inside the app. Keep both visually consistent so users recognize the app after installing it. Our [app icon sizes guide](/blog/app-icon-sizes-guide/) covers both, and our [icon A/B testing guide](/blog/app-icon-ab-testing-guide/) shows how to test changes safely.",
      ]],
      ["Feature graphic and promo video", [
        "The feature graphic is a 1024 x 500 pixel JPEG or 24-bit PNG without transparency, and it is required to publish. It appears in some promotional placements and at the top of the listing when you add a video, where it acts as the video thumbnail with a play button. Avoid placing key text near the center or the edges, where overlays can cover it.",
        "The promo video is a YouTube URL, not an uploaded file. It must be public or unlisted, embeddable, free of ads, and not age-restricted. A strong video with a clear thumbnail can lift conversion for apps whose value is easier to show than describe. See our [feature graphic guide](/blog/feature-graphic-google-play/) and [app preview video guide](/blog/app-preview-video-guide/) for creative direction.",
      ]],
      ["Policy limits on what assets can say", [
        "Google Play's metadata policy restricts certain claims in store assets. Graphics and titles should not include performance or ranking claims such as top or number one, price or promotional information such as free or sale, or calls to action such as download now. Screenshots must reflect the real app experience, and misleading graphics can lead to rejection or removal.",
        "These rules push creative toward clear benefit statements and real product screens, which tend to convert better anyway. Our guide to [screenshot caption copywriting](/blog/screenshot-captions-copywriting/) shows how to write persuasive captions that stay within policy, and the [white hat ASO guide](/blog/aso-white-hat-vs-black-hat-guidelines/) covers the wider rules.",
      ]],
      ["Use custom listings and experiments", [
        "Google Play lets you create custom store listings for specific countries, pre-registration audiences, and ad campaigns, each with its own screenshots and text. This is how you show region-specific features or campaign-matched messages without changing the main listing. Our guide to [Google Play custom store listings](/blog/google-play-custom-store-listings-guide/) explains setup and targeting.",
        "Store listing experiments let you test graphics and text against the current listing with a share of traffic. Start with the first two or three screenshots, which are the most visible in search and on the listing. The [store listing experiments playbook](/blog/store-listing-experiments-google-play/) covers test design and how to read results.",
      ]],
    ],
    steps: [
      ["Pick a master canvas", "Design phone screenshots at 1080 x 1920 or 1440 x 2560 in portrait so they meet the 1080-pixel recommendation and the 2:1 ratio limit."],
      ["Prepare at least four phone screenshots", "Order them by importance and make the first two understandable without captions, since they are the most visible."],
      ["Export the icon and feature graphic", "Create a full-square 512 x 512 PNG icon under 1 MB and a 1024 x 500 feature graphic with no transparency."],
      ["Add large-screen and form factor sets", "If the app supports tablets, Chromebooks, Wear OS, or TV, upload dedicated screenshots for each."],
      ["Check copy against the metadata policy", "Remove ranking claims, pricing words, and calls to action from graphics, then test the strongest variant with store listing experiments."],
    ],
    examples: [
      ["Icon export", "Rounded-corner icon with a drop shadow baked in.", "Full-square 512 x 512 artwork with no shadow; Google applies the mask.", "Baked-in corners and shadows double up with Play's own treatment."],
      ["Screenshot caption", "#1 Free Photo Editor - Download Now!", "Remove backgrounds in one tap", "Ranking claims, pricing terms, and calls to action conflict with Google Play's metadata policy."],
      ["Feature graphic", "Dense text and a logo across the full width.", "A bold product visual with a short line of text away from the center play button.", "When a video is attached, the play button overlays the center of the graphic."],
    ],
    playbook: ["Design phone screenshots at 1080 x 1920 or larger", "Upload at least four phone screenshots", "Export a full-square 512 x 512 icon", "Keep the feature graphic's center clear for the play button", "Add tablet and Chromebook sets for large-screen reach", "Remove claims that breach the metadata policy"],
    metrics: ["Store listing visitor to installer conversion", "Conversion by device type", "Experiment lift by asset type", "Share of traffic from promotional surfaces"],
    faqs: [
      ["What is the best screenshot size for Google Play?", "1080 x 1920 pixels in portrait, or 1920 x 1080 in landscape, is a safe standard. It meets the 1080-pixel recommendation for promotion and stays within the 2:1 ratio limit."],
      ["How many screenshots can I upload to Google Play?", "Between two and eight per device type. At least four high-resolution phone screenshots are recommended."],
      ["What size is the Google Play feature graphic?", "1024 x 500 pixels, JPEG or 24-bit PNG, with no transparency. It is required to publish."],
      ["Can I upload a video file to Google Play?", "No. Google Play uses a YouTube URL. The video must be public or unlisted, embeddable, ad-free, and not age-restricted."],
    ],
    related: ["app-store-screenshot-sizes", "feature-graphic-google-play", "google-play-custom-store-listings-guide", "store-listing-experiments-google-play"],
    serviceLinks: ["/google-play-store-optimization/", "/services/creative-ab-testing/"],
    sources: [
      { label: "Google Play Console Help Center", url: "https://support.google.com/googleplay/android-developer/" },
      { label: "Google Play: Store listing best practices", url: "https://support.google.com/googleplay/android-developer/answer/13393723" },
    ],
  }),
  P({
    slug: "app-icon-sizes-guide",
    title: "App Icon Sizes for iOS, Android, and Google Play: The Complete Reference",
    seoTitle: "App Icon Sizes for iOS and Android: Complete 2026 Guide",
    description: "Every app icon size you need for the App Store, Google Play, iOS home screens, and Android adaptive icons, plus dark, tinted, and themed variants.",
    primaryKeyword: "app icon sizes",
    secondaryKeywords: ["iOS app icon size", "Android adaptive icon size", "Google Play icon size"],
    category: "Platform Guides",
    answer: "The App Store icon is 1024 x 1024 pixels, a PNG with no transparency or rounded corners. Xcode can generate every device size from this single image. The Google Play store icon is 512 x 512 pixels, a 32-bit PNG up to 1 MB, supplied as a full square. Android launcher icons use the adaptive format: 108 x 108 dp foreground and background layers with a 66 dp safe zone. Modern iOS also supports dark, tinted, and Liquid Glass appearances.",
    sections: [
      ["The two store icons you must supply", [
        "Apple requires a 1024 x 1024 pixel App Store icon in PNG format, with no transparency, no alpha channel, and square corners. iOS applies its own rounded mask, so adding corners or a border creates artifacts. Google Play requires a separate 512 x 512 pixel store icon as a 32-bit PNG of no more than 1,024 KB, also as a full square, because Google applies rounded corners and a subtle shadow.",
        "These store icons are what people see in search results, charts, and product pages, so they carry a lot of conversion weight. Design them at large sizes, but judge them at small sizes: an icon that looks rich at 1024 pixels can turn into noise at 60. Our [app icon design tips](/blog/app-icon-design-tips-and-practices/) cover the creative principles that hold up at every size.",
      ]],
      ["iOS device icon sizes", [
        "Since Xcode 14, you can provide a single 1024 x 1024 image and let Xcode generate the device sizes, which is the recommended approach for most apps. If you need manual control, the common iPhone sizes are 180 x 180 (home screen at 3x), 120 x 120 (home screen at 2x and Spotlight at 3x), 87 x 87 and 58 x 58 for Settings, and 60 x 60 and 40 x 40 for notifications. iPad uses 167 x 167 for iPad Pro and 152 x 152 for other iPads.",
        "Manual sizes are useful when small icons need simplified detail, such as removing fine text or thin lines that blur at 40 pixels. Whatever you choose, test on real devices in both light and dark wallpapers, because icons are seen against busy backgrounds far more often than in mockups.",
      ]],
      ["Dark, tinted, and Liquid Glass appearances", [
        "iOS 18 introduced dark and tinted icon appearances, and iOS 26 introduced Liquid Glass with layered icons built in Apple's Icon Composer tool. Layered icons separate the background and foreground elements so the system can render default, dark, clear, and tinted versions with depth and lighting. If you do not provide variants, the system derives them, often with less polished results.",
        "Providing intentional variants keeps the icon recognizable however users customize their home screens. Our guide to [Liquid Glass app icons for iOS 26](/blog/liquid-glass-app-icons-ios-26/) walks through the layered workflow. On macOS 26, icons that are not in the standard rounded-square shape are placed inside one, so check Mac icons too.",
      ]],
      ["Android adaptive and themed icons", [
        "Android launcher icons use the adaptive icon format: a foreground layer and a background layer, each 108 x 108 dp. Launchers mask the combined icon into circles, squircles, or rounded squares, and may animate the layers. Only the inner 72 x 72 dp is guaranteed to be visible, and key content should fit within a 66 dp diameter circle at the center.",
        "Since Android 13, users can turn on themed icons, which use a monochrome layer that the system tints to match the wallpaper. Provide this layer so the icon does not look out of place on themed home screens. For legacy devices, Android Studio's Image Asset tool still generates bitmap sizes from 48 x 48 pixels (mdpi) up to 192 x 192 pixels (xxxhdpi).",
      ]],
      ["Design rules that survive every size", [
        "Use one focal shape, strong contrast, and few colors. Avoid words, except a single letter that is part of the brand, and avoid photographs, which lose meaning at small sizes. Keep the silhouette distinct from your top competitors in search results, because icons are viewed side by side. Our [competitor ASO analysis](/blog/competitor-aso-analysis/) method includes an icon lineup exercise.",
        "Test variations before committing. On Google Play you can test icons with [store listing experiments](/blog/store-listing-experiments-google-play/), and on iOS with [product page optimization](/blog/product-page-optimization-ios/), although alternate icons tested on iOS must be included in the app binary. Our [app icon A/B testing guide](/blog/app-icon-ab-testing-guide/) explains what to test and how to read results.",
      ]],
      ["A worked example: refreshing an icon safely", [
        "A budgeting app's icon shows a detailed wallet with coins, a chart, and a small logo. At 60 pixels, it reads as a brown blob next to cleaner competitors. The team simplifies it to a single bold coin shape on a solid brand color, creates dark and tinted variants, and builds an adaptive version with a monochrome layer for Android.",
        "They test the new icon against the old one on Google Play first, where tests are quick to set up, and see a modest conversion lift without a drop in retention. They then ship it on iOS with the next app version and monitor brand search, because returning users must still recognize the app. Annotating the change date makes later analysis in [App Store Connect Analytics](/blog/app-store-connect-analytics/) far easier.",
      ]],
    ],
    steps: [
      ["Design a master at 1024 x 1024", "Create the artwork on a square canvas with no transparency and no rounded corners, keeping the focal shape centered."],
      ["Check legibility at small sizes", "Preview the icon at 40, 60, and 120 pixels against light, dark, and photo wallpapers, and simplify any detail that disappears."],
      ["Create appearance variants", "Prepare dark and tinted versions for iOS, and a layered Icon Composer file if you target iOS 26 and later."],
      ["Build the Android adaptive icon", "Split foreground and background layers at 108 x 108 dp, keep content in the 66 dp safe zone, and add a monochrome layer for themed icons."],
      ["Export store icons and test", "Export the 1024 App Store icon and the 512 Google Play icon, then test the change on Google Play before shipping everywhere."],
    ],
    examples: [
      ["App Store icon file", "1024 x 1024 PNG with transparent rounded corners.", "1024 x 1024 PNG with square corners and a solid background.", "App Store Connect rejects icons with transparency, and iOS applies its own mask."],
      ["Small-size detail", "Wallet, coins, chart, and app name in one icon.", "One bold coin shape on a solid brand color.", "Simple silhouettes stay recognizable at 40 to 60 pixels in search results."],
      ["Android adaptive icon", "Logo placed edge to edge on the foreground layer.", "Logo within the 66 dp center circle with a separate background layer and monochrome layer.", "Launcher masks clip anything outside the safe zone, and themed icons need the monochrome layer."],
    ],
    playbook: ["Design one master at 1024 x 1024", "Supply the 512 x 512 Google Play icon as a full square", "Let Xcode generate iOS sizes unless detail needs simplifying", "Provide dark, tinted, and layered appearances", "Keep Android content in the 66 dp safe zone", "Test icon changes before shipping on both stores"],
    metrics: ["Search tap-through rate", "Product page conversion rate", "Experiment lift from icon tests", "Branded search volume after a redesign"],
    faqs: [
      ["What size is an iOS app icon?", "The App Store icon is 1024 x 1024 pixels. Xcode can generate all device sizes, such as 180 x 180 for the iPhone home screen, from that single image."],
      ["What size is the Google Play app icon?", "512 x 512 pixels, a 32-bit PNG of up to 1,024 KB, supplied as a full square without rounded corners or shadows."],
      ["Can an App Store icon have a transparent background?", "No. The App Store icon must not contain transparency or an alpha channel."],
      ["What is the safe zone for Android adaptive icons?", "Layers are 108 x 108 dp, the inner 72 x 72 dp is visible, and key content should sit inside a 66 dp diameter circle at the center."],
    ],
    related: ["app-icon-design-tips-and-practices", "app-icon-ab-testing-guide", "liquid-glass-app-icons-ios-26", "app-store-screenshot-sizes"],
    serviceLinks: ["/services/creative-ab-testing/", "/services/app-store-optimization/"],
    sources: [
      { label: "Apple Human Interface Guidelines: App icons", url: "https://developer.apple.com/design/human-interface-guidelines/app-icons" },
      { label: "Android Developers: Adaptive icons", url: "https://developer.android.com/develop/ui/views/launch/icon_design_adaptive" },
    ],
  }),
  P({
    slug: "testflight-beta-testing-guide",
    title: "TestFlight Beta Testing Guide: Internal and External Testers Without the Headaches",
    seoTitle: "TestFlight Guide: How to Beta Test iOS Apps (2026)",
    description: "How to use TestFlight for iOS beta testing: internal vs external testers, public links, Beta App Review, build expiry, feedback, and launch readiness.",
    primaryKeyword: "TestFlight beta testing",
    secondaryKeywords: ["TestFlight external testers", "TestFlight public link", "iOS beta testing"],
    category: "Platform Guides",
    answer: "TestFlight is Apple's beta testing service in App Store Connect. You can invite up to 100 internal testers from your team, with no review needed, and up to 10,000 external testers by email or public link once a build passes Beta App Review. Builds stay available for 90 days. Testers send feedback and screenshots from the TestFlight app, and crash reports appear in App Store Connect and Xcode.",
    sections: [
      ["Internal vs external testers", [
        "Internal testers are members of your App Store Connect team with an appropriate role. You can add up to 100, and they can test builds as soon as processing finishes, without Beta App Review. Use internal testing for daily QA, design review, and stakeholder previews where speed matters more than scale.",
        "External testers are anyone with an email address or your public link. You can have up to 10,000 per app, organized into groups. The first build of each version sent to external testers needs Beta App Review, which checks the build against the App Review Guidelines in a lighter way. Later builds of the same version often go through faster.",
      ]],
      ["Set up test information properly", [
        "Before inviting external testers, fill in the test information: a beta app description, what to test, a feedback email, a privacy policy URL, and sign-in details if the app needs an account. Clear instructions produce focused feedback. A vague what to test field produces vague replies or none at all.",
        "Treat Beta App Review like a smaller version of App Review. Provide a working demo account, explain hardware or location requirements, and make sure the build does not crash on launch. The same habits will speed up your production submission, covered in our guide to [publishing on the App Store](/blog/how-to-publish-app-on-app-store/).",
      ]],
      ["Public links and recruiting testers", [
        "A public link lets anyone with the link join a group, up to a limit you set. It is the easiest way to recruit from a waitlist, a community, social media, or a [Product Hunt launch](/blog/product-hunt-app-launch/). Set a tester limit so a viral post does not flood a fragile build, and you can disable the link at any time.",
        "Recruit testers who resemble your target users rather than friends who will be polite. A short screener survey before sharing the link helps you pick people with the right devices, use cases, and motivation. Their feedback is also a rich source of user vocabulary for [keyword research](/blog/aso-keyword-research/) and screenshot captions.",
      ]],
      ["Builds, groups, and expiry", [
        "Each build is available to testers for 90 days from upload, after which it expires and testers must move to a newer build. Plan release cadence so active testers always have a current build, and use groups to send different builds to different audiences, such as a stable group and an experimental group.",
        "TestFlight supports iOS, iPadOS, macOS, tvOS, watchOS, and visionOS apps. Testers install the TestFlight app and receive update notifications automatically. Expired or abandoned builds frustrate testers, so retire old groups when a test ends and thank participants.",
      ]],
      ["Collect feedback and crash data you can act on", [
        "Testers can send feedback with screenshots directly from the app, and TestFlight records crash reports with device and OS details. Review these in App Store Connect or the Xcode Organizer, tag them by theme, and close the loop with testers when you fix something. Responsive teams get better feedback in the next round.",
        "Use beta data to protect your launch rating. Crashes found in TestFlight never reach the store, and stability affects both ratings and visibility, as explained in [crash rate and store ranking](/blog/crash-rate-and-store-ranking/). Testers who enjoyed the beta are also good candidates to rate the app after launch, within the rules covered in our [iOS rating prompt guide](/blog/ios-rating-prompt-best-practices/).",
      ]],
      ["Common TestFlight mistakes", [
        "The most frequent mistake is treating external testing as a formality. Teams send a build to hundreds of people with no instructions, receive a handful of vague comments, and conclude that beta testing does not work. Another is letting builds expire during a long test, which silently removes access and makes the app look abandoned to the very people you want as early advocates.",
        "Teams also forget that TestFlight feedback is not a substitute for analytics. Testers who report nothing may still be churning on day two. Instrument the beta build with the same events you plan to use in production, so you can see activation and retention alongside written feedback, and compare them with the benchmarks in our guide to [retention rate](/blog/mobile-app-retention-rate-benchmarks/).",
      ]],
      ["A worked example: a two-stage beta before launch", [
        "A habit tracker starts with 15 internal testers for two weeks to stabilize core flows. It then opens a public link capped at 500 people from its waitlist, with a screener that asks about current habit tools. The what to test field asks testers to complete three days of check-ins and report anything confusing.",
        "Feedback reveals that testers call the feature streaks, not chains, so the team updates in-app copy, screenshot captions, and the subtitle. Crash-free sessions rise above 99.5% before submission. On launch day, the team invites engaged testers to download the public version, building early ratings from real users. The approach mirrors the [pre-launch ASO strategy](/blog/pre-launch-aso-strategy/) guide.",
      ]],
    ],
    steps: [
      ["Upload a build and test internally", "Upload from Xcode, add internal testers from your team, and fix launch-blocking issues before going external."],
      ["Write test information", "Add a beta description, specific what to test instructions, a feedback email, a privacy policy URL, and demo credentials."],
      ["Submit for Beta App Review", "Send the first external build for review, with the same care you would give a production submission."],
      ["Recruit with a capped public link", "Share a public link with a tester limit to a screened audience that matches your target users."],
      ["Triage feedback weekly", "Tag feedback and crashes by theme, fix the highest-impact issues, and tell testers what changed in the next build."],
    ],
    examples: [
      ["What to test", "Please test the app.", "Create a habit, check in daily for three days, and try editing the reminder time. Tell us anything that felt confusing.", "Specific tasks produce specific, comparable feedback."],
      ["Public link", "Posted with no limit.", "Capped at 500 testers and shared with a screened waitlist segment.", "A cap protects a fragile build and keeps feedback manageable."],
      ["Closing the loop", "Silently ship fixes.", "Build notes: Fixed the reminder bug many of you reported. Thank you, keep it coming.", "Testers who see their impact give more feedback in later rounds."],
    ],
    playbook: ["Stabilize with internal testers first", "Write specific what to test instructions", "Cap public links and screen testers", "Watch the 90-day build expiry", "Triage feedback and crashes weekly", "Convert engaged testers into launch-day users"],
    metrics: ["Crash-free sessions in beta", "Feedback items per active tester", "Tester retention between builds", "Issues fixed before launch"],
    faqs: [
      ["How many testers can TestFlight have?", "Up to 100 internal testers from your App Store Connect team and up to 10,000 external testers per app."],
      ["Do TestFlight builds need review?", "Internal builds do not. The first build of each version sent to external testers needs Beta App Review."],
      ["How long do TestFlight builds last?", "Each build is available for 90 days from upload. After that it expires and testers need a newer build."],
      ["Is TestFlight free?", "Yes. TestFlight is included with the Apple Developer Program, and testers install the free TestFlight app."],
    ],
    related: ["how-to-publish-app-on-app-store", "google-play-closed-testing-requirement", "pre-launch-aso-strategy", "app-launch-aso-checklist"],
    serviceLinks: ["/services/app-store-optimization/", "/contact/"],
    sources: [
      { label: "Apple: TestFlight", url: "https://developer.apple.com/testflight/" },
      { label: "App Store Connect Help", url: "https://developer.apple.com/help/app-store-connect/" },
    ],
  }),
  P({
    slug: "google-play-closed-testing-requirement",
    title: "Google Play Closed Testing Requirement: 12 Testers for 14 Days, Explained",
    seoTitle: "Google Play 12 Testers for 14 Days: Closed Testing Guide",
    description: "Who must run Google Play's closed test with 12 testers for 14 days, how to recruit real testers, and how to answer the production access questions.",
    primaryKeyword: "Google Play closed testing requirement",
    secondaryKeywords: ["12 testers 14 days", "Google Play production access", "closed testing Play Console"],
    category: "Platform Guides",
    answer: "Personal Google Play developer accounts created after November 13, 2023 must run a closed test with at least 12 testers who stay opted in for at least 14 continuous days before they can apply for production access. Google lowered the count from 20 to 12 in late 2024. Organization accounts are exempt. After the test, you answer questions about how you tested, what feedback you received, and why the app is ready.",
    sections: [
      ["Who the requirement applies to and why", [
        "The requirement applies to personal developer accounts created after November 13, 2023. Google introduced it to raise app quality and reduce low-effort or malicious apps from new accounts. Organization accounts, which go through business verification, do not have to meet it, which is one reason companies should register as organizations from the start.",
        "The rule is not just a hurdle; it is a forcing function for real testing. Apps that skip meaningful pre-launch testing often launch with crashes, confusing onboarding, and early one-star reviews that are hard to recover from. Used well, the 14 days give you feedback and stability data before your listing goes public.",
      ]],
      ["How the 12 testers and 14 days are counted", [
        "Testers join a closed testing track through an email list or a Google Group and opt in through the testing link, then install the app from Google Play. You need at least 12 testers opted in, and they need to remain opted in for at least 14 continuous days. Play Console shows your progress on the dashboard.",
        "If testers opt out and your count drops below 12, progress can be affected, so recruit more than the minimum. Aim for 20 or more committed testers to absorb drop-off. Testers need a Google account and an Android device that can install your app.",
      ]],
      ["Recruit testers who give real feedback", [
        "The best testers resemble your target users: people on your waitlist, members of communities related to your app, early customers of a web product, or beta groups for your niche. Explain what you need, such as using the app a few times a week and reporting problems, and make feedback easy with a short form or in-app link.",
        "Be cautious with tester-exchange schemes and paid services that supply anonymous testers who install and never open the app. Google asks how you recruited testers and what you learned, and an app with no engagement during testing gives you nothing to say. Real users also become your first reviewers after launch, which supports [improving app ratings ethically](/blog/improve-app-ratings/).",
      ]],
      ["Answer the production access questions well", [
        "After the test, you apply for production access from the Play Console dashboard. Google asks about the closed test, including how easy it was to recruit testers and how engaged they were, about the app's intended audience and value, and about production readiness, including what you changed based on feedback.",
        "Answer specifically. Describe how many testers used key features, the main issues reported, and the fixes you shipped. Vague or copied answers can lead to rejection and another round of testing. Keep a simple log during the 14 days so you can answer accurately rather than from memory.",
      ]],
      ["Use the 14 days for ASO groundwork", [
        "The testing window is the perfect time to prepare the public listing. Draft the title, short description, and full description from [Google Play keyword research](/blog/google-play-keyword-optimization/), and test captions with testers to learn which words they use for the app's main benefit. Collect their exact phrases for [screenshot captions](/blog/screenshot-captions-copywriting/).",
        "You can also set up [pre-registration](/blog/google-play-pre-registration-launch/) for games and apps that qualify, build your [launch checklist](/blog/app-launch-aso-checklist/), and prepare screenshots at the right [Google Play sizes](/blog/google-play-screenshot-sizes-and-assets/). By the time production access arrives, the listing is ready rather than rushed.",
      ]],
      ["Common mistakes that restart the clock", [
        "Inviting exactly 12 people is the classic error: one or two opt out, the count drops, and the developer loses days. Another is sharing the wrong link, such as the internal testing link, or adding testers to a list that is not attached to the closed track. Check the track, the list, and the opt-in link before announcing the test.",
        "Developers also rush the production application with one-line answers or ship a build during the test that breaks core features. Keep the app stable, log what testers do, and document every fix with a version number. If an application is rejected, read the reason carefully, address it directly, and run a better-organized test rather than repeating the same one.",
      ]],
      ["A worked example: from first upload to production", [
        "A solo developer builds a plant-care reminder app on a personal account. On day one, they create a closed testing track, invite 25 people from a gardening forum and their newsletter, and share a feedback form. By day three, 21 testers have opted in. Feedback shows that the photo-identification feature is slow on older phones.",
        "The developer ships two updates during the test, improving image processing and simplifying onboarding. On day 15, they apply for production access, citing tester counts, the performance fix, and the onboarding change. Access is granted, and the developer launches with a staged rollout and a listing built from tester vocabulary. The full process mirrors our guide to [publishing on Google Play](/blog/how-to-publish-app-on-google-play/).",
      ]],
    ],
    steps: [
      ["Confirm whether your account is affected", "Check your account type and creation date. Organization accounts and personal accounts created before November 13, 2023 are not subject to the rule."],
      ["Create a closed testing track", "Upload an App Bundle to closed testing and add testers by email list or Google Group."],
      ["Recruit 20 or more real testers", "Invite people who match your audience so you stay above 12 even if some opt out."],
      ["Run 14 days of structured testing", "Ask testers to use specific features, collect feedback through a form, and ship fixes during the window."],
      ["Apply for production with specifics", "Answer Google's questions with tester counts, issues found, and changes made, then launch with a staged rollout."],
    ],
    examples: [
      ["Recruitment message", "Please install my app to help me get 12 testers.", "We are testing a plant-care reminder app for two weeks. Use it three times a week and tell us what is confusing. Testers get early access to premium features.", "A clear, motivating ask attracts testers who engage, which strengthens your production application."],
      ["Production access answer", "Testing went well.", "23 testers used reminders an average of nine times. Main issue: slow photo identification on older devices, fixed in version 1.0.3. Onboarding reduced from five screens to three.", "Specific evidence shows Google the test was real and the app improved."],
      ["Tester count planning", "Invite exactly 12 testers.", "Invite 25, expecting some to drop off, and monitor opt-ins daily.", "Falling below 12 can affect progress toward the 14 days."],
    ],
    playbook: ["Register companies as organization accounts", "Recruit at least 20 testers who match the audience", "Give testers specific tasks and a feedback form", "Ship fixes during the 14-day window", "Log metrics and changes for the application", "Prepare the public listing while you wait"],
    metrics: ["Opted-in tester count by day", "Active testers using key features", "Feedback items and fixes shipped", "Crash-free users during testing", "Time from first upload to production access"],
    faqs: [
      ["How many testers do I need for Google Play?", "At least 12 testers opted in to a closed test for 14 continuous days, if you have a personal account created after November 13, 2023."],
      ["Does the closed testing requirement apply to organization accounts?", "No. Organization accounts are exempt, although they still need to complete business verification."],
      ["What happens if a tester opts out during the 14 days?", "Your count can drop below 12, which may affect progress. Recruiting more than the minimum protects you against drop-off."],
      ["Can I use paid tester services?", "It is risky. Google asks how you recruited testers and how engaged they were, and testers who never use the app give you nothing useful to report."],
    ],
    related: ["how-to-publish-app-on-google-play", "testflight-beta-testing-guide", "google-play-pre-registration-launch", "pre-launch-aso-strategy"],
    serviceLinks: ["/google-play-store-optimization/", "/services/app-store-optimization/"],
    sources: [
      { label: "Google Play Console Help: App testing requirements for new personal developer accounts", url: "https://support.google.com/googleplay/android-developer/answer/14151465" },
    ],
  }),
];
