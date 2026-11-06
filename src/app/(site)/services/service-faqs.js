// One source for each service page's visible FAQ and its Service / BreadcrumbList / FAQPage schema,
// so the structured data always matches what visitors see.
// An entry with `faqs: []` outputs only the Service and BreadcrumbList schema (no visible FAQ).

import { ENTITY_DEFINITION, PARENT } from "../../components/entity";

export const SERVICE_FAQS = {
  "app-store-optimization": {
    name: "App Store Optimization (ASO)",
    path: "/services/app-store-optimization/",
    serviceType: "App Store Optimization",
    description:
      "Keyword research, metadata optimization, creative testing and ratings strategy that grow app rankings and installs on the App Store and Google Play.",
    faqs: [
      {
        q: "What is App Store Optimization (ASO)?",
        a: "App Store Optimization is the process of improving an app's visibility and conversion on the App Store and Google Play. It covers keyword research, the app title, subtitle and description, screenshots and icons, and ratings, so the app ranks for the searches its users make and more visitors install it.",
      },
      {
        q: "How long does ASO take to show results?",
        a: "Most apps see early movement in keyword rankings within a few weeks of a metadata update, because both stores re-index listings after each release. Lasting gains in rankings and organic installs usually take three to six months of testing, iteration and tracking against competitors.",
      },
      {
        q: "What is the difference between ASO for the App Store and Google Play?",
        a: "The App Store indexes the app name, subtitle and a hidden 100-character keyword field, while Google Play indexes the title, short description and full description. Both reward conversion and ratings, so ASOWin writes separate metadata for each store and tests creatives on each one.",
      },
      {
        q: "Does ASO replace paid user acquisition?",
        a: "No. ASO grows organic installs from store search and browse, while paid campaigns buy additional reach. They work best together: a well-optimized listing converts paid traffic at a lower cost, and Apple Search Ads data shows which keywords are worth targeting organically.",
      },
      {
        q: "What does ASOWin need to start an ASO project?",
        a: "We need store links for your apps, access to App Store Connect and Google Play Console analytics, your target markets and languages, and your main competitors. We then deliver a free ASO audit covering keywords, metadata, creatives and ratings before agreeing a plan.",
      },
    ],
  },
  "app-reputation-management": {
    name: "App Reputation Management",
    path: "/services/app-reputation-management/",
    serviceType: "App review and rating management",
    description:
      "Review monitoring, reply strategy, in-app rating prompts and issue analysis that improve app ratings on the App Store and Google Play.",
    faqs: [
      {
        q: "What is app reputation management?",
        a: "App reputation management is the work of improving how an app is rated and reviewed on the App Store and Google Play. It includes monitoring reviews, replying to users, finding the issues behind negative feedback, and timing in-app rating prompts so satisfied users are asked to rate the app.",
      },
      {
        q: "How do app ratings affect rankings and installs?",
        a: "Ratings affect installs directly and rankings indirectly. Both stores show the star rating in search results, so a higher rating raises the share of visitors who install, and that engagement feeds ranking. Pepperfry's rating rose from about 3.9 to 4.4+ while working with ASOWin.",
      },
      {
        q: "Is it allowed to ask users for ratings?",
        a: "Yes, when you use the stores' own tools. Apple's in-app review prompt and Google Play's In-App Review API let apps ask users to rate without leaving the app. Paying for, incentivizing or faking ratings and reviews is prohibited by both stores, and ASOWin does not do it.",
      },
      {
        q: "Should we reply to every app review?",
        a: "Prioritize replies to negative and detailed reviews first, because users can update their rating after a helpful answer and future visitors read the replies. A short, specific reply that names the fix or the next step works better than a generic thank-you.",
      },
      {
        q: "How quickly can an app rating improve?",
        a: "Google Play weights recent ratings more heavily, so improvements can show within weeks once prompts and fixes are in place. The App Store average moves more slowly. The pace depends on review volume and on fixing the product issues that cause low ratings.",
      },
    ],
  },
  "creative-ab-testing": {
    name: "Creative A/B Testing & Design",
    path: "/services/creative-ab-testing/",
    serviceType: "App store creative design and A/B testing",
    description:
      "Icon, screenshot and preview video design with A/B testing on the App Store and Google Play to raise store listing conversion.",
    faqs: [
      {
        q: "What is app store creative A/B testing?",
        a: "Creative A/B testing compares two or more versions of an app's icon, screenshots or preview video with real store visitors to see which one gets more installs. Apple runs these tests through Product Page Optimization and Google Play through Store Listing Experiments.",
      },
      {
        q: "Which creative assets should we test first?",
        a: "Start with the icon and the first two or three screenshots, because they appear in search results and decide whether people open the listing at all. Preview videos and later screenshots matter mainly to visitors who are already on the product page.",
      },
      {
        q: "How long should an app store A/B test run?",
        a: "Run each test for at least seven days so it covers a full weekly cycle, and until the store reports a confident result. Low-traffic apps may need several weeks. Ending a test early often picks a winner that does not hold up.",
      },
      {
        q: "What is the difference between product page optimization and store listing experiments?",
        a: "Both are native A/B tests. Product page optimization on the App Store tests up to three treatments of the icon, screenshots and preview videos against the original. Store listing experiments on Google Play test up to three variants of graphics and text against the current listing. Each splits real store traffic and reports the conversion difference.",
      },
      {
        q: "What are Custom Product Pages and Custom Store Listings?",
        a: "They are alternate versions of an app's store page. Apple's Custom Product Pages and Google Play's Custom Store Listings let you show different screenshots and messaging to different audiences, ads or countries, so each visitor sees the most relevant version.",
      },
    ],
  },
  "paid-user-acquisition": {
    name: "Paid User Acquisition & Apple Search Ads",
    path: "/services/paid-user-acquisition/",
    serviceType: "Mobile app user acquisition and Apple Search Ads management",
    description:
      "Apple Search Ads and paid user acquisition campaigns planned alongside ASO to grow app installs at a sustainable cost.",
    faqs: [
      {
        q: "What is Apple Search Ads?",
        a: "Apple Search Ads is Apple's advertising platform for promoting apps in App Store search results and other App Store placements. Advertisers bid on keywords, and ads appear at the top of results for people already searching for an app like theirs.",
      },
      {
        q: "How does Apple Search Ads work?",
        a: "Apple Search Ads places your app at the top of App Store search results for keywords you bid on. You pay per tap or per install, Apple matches ads to searches by relevance and bid, and the ad uses your product page or a custom product page as its creative.",
      },
      {
        q: "How do paid campaigns and ASO work together?",
        a: "Paid campaigns bring extra visitors to the store listing, and ASO decides how many of them install. A better listing lowers the cost per install, while Apple Search Ads keyword data shows which search terms convert and are worth targeting in organic metadata.",
      },
      {
        q: "Which channels does ASOWin manage for user acquisition?",
        a: "ASOWin manages Apple Search Ads and plans paid acquisition across other app install channels, choosing the mix by market, budget and the cost per install or retention target you set. Campaigns are reported together with organic results so you see total growth.",
      },
      {
        q: "How should we measure paid user acquisition?",
        a: "Measure cost per install alongside what happens after the install: retention, activation and revenue per user. A cheap install that never opens the app twice costs more than it looks, so we optimize campaigns toward the in-app events that matter to your business.",
      },
    ],
  },
  "automated-aso-ai": {
    name: "Automated ASO with AI",
    path: "/services/automated-aso-ai/",
    serviceType: "AI-assisted app store optimization",
    description:
      "AI-assisted review analysis, reply workflows and ASO reporting that help app teams act on store data faster.",
    faqs: [
      {
        q: "What is automated ASO with AI?",
        a: "Automated ASO uses AI to handle repetitive store work: sorting and analyzing reviews, drafting replies in your brand voice, spotting rating and keyword changes, and building reports. ASOWin's team reviews the output and turns it into ASO decisions, so automation speeds up the work without replacing judgment.",
      },
      {
        q: "Can AI reply to app reviews for us?",
        a: "Yes. ASOWin's AI drafts replies that match your brand voice and can post routine replies automatically, while critical reviews are routed to your team or support tool. You decide which review types are answered automatically and which need a person.",
      },
      {
        q: "Does automation replace an ASO specialist?",
        a: "No. AI is good at volume work such as tagging thousands of reviews or tracking ranking changes. Choosing keywords, writing metadata and deciding what to test still need a specialist who understands your market, competitors and product roadmap.",
      },
      {
        q: "What insights does AI review analysis provide?",
        a: "It groups reviews by topic and sentiment, so you can see which bugs, features or pricing issues drive low ratings and how that changes after each release. Those insights guide product fixes, reply priorities and the messaging in your store listing.",
      },
    ],
  },
  "keyword-installs": {
    name: "Keyword Installs",
    path: "/services/keyword-installs/",
    serviceType: "Keyword-targeted app install campaigns",
    description:
      "Keyword install campaigns planned alongside ASO to support app rankings for target search terms.",
    faqs: [
      {
        q: "What are keyword installs?",
        a: "Keyword installs are installs from people who searched a specific term in the App Store or Google Play and then installed your app. Installs that follow a search tell the store the app is relevant to that term, which can support its ranking for it.",
      },
      {
        q: "How do keyword install campaigns relate to ASO?",
        a: "They work on top of ASO, not instead of it. The app's title, keywords and screenshots have to match the term first, so the people who search it actually install and keep the app. Without that, a campaign's ranking effect fades when it stops.",
      },
      {
        q: "Are incentivized or fake installs allowed?",
        a: "No. Google Play's Developer Program Policy prohibits manipulating store placement with fraudulent or incentivized installs, and Apple's App Review Guidelines prohibit manipulating charts or search. Keyword-targeted installs should come from real users reached through channels such as Apple Search Ads and Google App Campaigns.",
      },
      {
        q: "What should a keyword install campaign report?",
        a: "Rankings for each target keyword before, during and after the campaign, installs and conversion rate by keyword, and retention of the users acquired. Rankings that drop back as soon as the campaign ends are a sign the listing or keyword choice needs work.",
      },
    ],
  },
  "automated-review-replies": {
    name: "AI Review Replies",
    path: "/automated-review-replies/",
    serviceType: "AI-powered app review reply automation",
    description:
      "ASOWin's AI product that drafts and posts app review replies in your brand voice and routes critical reviews to your support team.",
    faqs: [],
  },
  home: {
    name: "ASOWin",
    path: "/",
    faqOnly: true,
    title: "ASO questions, answered",
    intro: "What app brands ask before they hire an App Store Optimization agency",
    faqs: [
      {
        q: "What does an App Store Optimization agency do?",
        a: "An ASO agency improves how apps rank and convert on the App Store and Google Play. ASOWin, a global ASO agency, handles keyword research, metadata, creative A/B testing, ratings and review management, and Apple Search Ads for app brands.",
      },
      {
        q: "How long does ASO take to show results?",
        a: "Keyword rankings usually start to move within a few weeks of a metadata update, once the store re-indexes the new release. Lasting gains in rankings and organic installs usually take three to six months of testing and iteration.",
      },
      {
        q: "How much does an ASO agency cost?",
        a: "It depends on the number of apps, stores, languages and markets, and on whether you need creative production, review management or paid campaigns as well. ASOWin starts every project with a free ASO audit and then quotes a monthly retainer for the agreed scope.",
      },
      {
        q: "Does ASOWin guarantee App Store or Google Play rankings?",
        a: "No. Apple and Google decide rankings, and no agency can control them, so a ranking guarantee is a warning sign. We commit to the research, tests and transparent reporting, and our published case studies show the results that approach has produced.",
      },
      {
        q: "Which markets does ASOWin work in?",
        a: "ASOWin works worldwide from offices in Fremont (California), Mumbai, Noida, Jakarta and Singapore. Published results include the US (LSM Apps), India (Pepperfry, Indiabulls Securities), Spain and Latin America (Bybit) and Australia (Viker Games).",
      },
      {
        q: "Should I hire an ASO agency or use an ASO tool?",
        a: "Tools give you keyword and ranking data; an agency turns that data into metadata, creative tests and review work, and does the work for you. Teams with an in-house ASO specialist often only need a tool. Teams without one, or with many apps and markets, usually get more from an agency.",
      },
      {
        q: "How does App Reputation Management help ranking?",
        a: "App Reputation Management improves your star rating and conversion rate, which influence how both the App Store and Google Play rank apps.",
      },
    ],
  },
  "aso-agency-usa": {
    name: "ASO Agency USA",
    path: "/aso-agency-usa/",
    serviceType: "App Store Optimization",
    areaServed: { "@type": "Country", name: "United States" },
    description:
      "App Store Optimization, Apple Search Ads and ratings management for apps on the US App Store and Google Play.",
    intro: "Common questions from US app teams",
    faqs: [
      {
        q: "What does an ASO agency in the USA do?",
        a: "It researches the keywords US users search, rewrites your App Store and Google Play metadata, tests icons and screenshots, manages ratings and reviews, and often runs Apple Search Ads. ASOWin does this from its headquarters in Fremont, California.",
      },
      {
        q: "How is ASO for the US App Store different?",
        a: "The US storefront is crowded, so conversion rate and ratings matter as much as keywords. It also indexes the Spanish (Mexico) localization, which gives you a second set of keyword fields, and Apple Search Ads take the first slot in search results.",
      },
      {
        q: "Has ASOWin worked with US apps?",
        a: "Yes. For LSM Apps, Easy Phone moved from #10 to #2 for “Phone” on US Google Play, with 12,000 additional daily downloads reported. The full case study is on asowin.com.",
      },
      {
        q: "Do you run Apple Search Ads for US apps?",
        a: "Yes. We plan Apple Search Ads alongside ASO, use search term reports to find organic keyword opportunities, and send ad traffic to custom product pages that match each keyword theme.",
      },
      {
        q: "How much does ASO cost for a US app?",
        a: "Cost depends on the number of apps, stores and languages and whether you need creative production or paid campaigns. We start with a free ASO audit, then quote a monthly retainer for the agreed scope.",
      },
      {
        q: "Do you guarantee rankings in the US?",
        a: "No. Apple and Google decide rankings and no agency controls them. We commit to the research, testing and transparent reporting, and our case studies show what that approach has produced.",
      },
    ],
  },
  "aso-agency-india": {
    name: "ASO Agency India",
    path: "/aso-agency-india/",
    serviceType: "App Store Optimization",
    areaServed: { "@type": "Country", name: "India" },
    description:
      "Google Play-first App Store Optimization, regional-language listings and ratings management for apps in India.",
    intro: "Common questions from Indian app teams",
    faqs: [
      {
        q: "Why do Indian apps need a different ASO approach?",
        a: "Most smartphones in India run Android, users search in English, Hindi, regional languages and Hinglish, and many use budget phones with limited storage. That makes Google Play metadata, regional-language listings and app size central to ASO in India.",
      },
      {
        q: "Do you create Hindi and regional-language store listings?",
        a: "Yes. Google Play supports listings in Hindi and other Indian languages such as Bengali, Marathi, Tamil and Telugu. We research keywords in each language, including transliterated searches, instead of translating English keywords.",
      },
      {
        q: "Which Indian apps has ASOWin worked with?",
        a: "Published case studies include Pepperfry, whose app rating rose from about 3.9 to 4.4+, and Indiabulls Securities, where 50+ previously unranked keywords moved into the Top 50 on both stores.",
      },
      {
        q: "Can you work on fintech and lending apps in India?",
        a: "Yes. Finance apps in India face extra Google Play declarations and close review of their claims. We keep listings accurate, avoid promises about returns or approvals, and check metadata against current store policy.",
      },
      {
        q: "How much does ASO cost in India?",
        a: "It depends on the number of apps, stores and Indian languages, and on whether you need creative production or review management as well. ASOWin starts with a free ASO audit, then quotes a monthly retainer for the agreed scope. Regional-language listings add cost per language, so a common approach is to start with English and Hindi and expand from there.",
      },
      {
        q: "Where is ASOWin's team in India?",
        a: "ASOWin has offices in Mumbai and Noida, so Indian clients work with a team in their own time zone.",
      },
      {
        q: "Do you guarantee rankings on the Play Store?",
        a: "No. Google and Apple decide rankings and no agency controls them. We commit to the research, testing and transparent reporting, and our case studies show the results.",
      },
    ],
  },
  "aso-agency-indonesia": {
    name: "Agensi ASO Indonesia",
    path: "/aso-agency-indonesia/",
    serviceType: "App Store Optimization",
    areaServed: { "@type": "Country", name: "Indonesia" },
    lang: "id",
    description:
      "Layanan App Store Optimization dalam Bahasa Indonesia, manajemen rating, dan Apple Search Ads untuk aplikasi di Indonesia.",
    intro: "Pertanyaan umum dari tim aplikasi di Indonesia",
    faqs: [
      {
        q: "Apa yang dilakukan agensi ASO?",
        a: "Agensi ASO meningkatkan peringkat dan konversi aplikasi di App Store dan Google Play melalui riset kata kunci, optimasi judul dan deskripsi, pengujian ikon dan screenshot, serta manajemen rating dan ulasan.",
      },
      {
        q: "Apakah ASOWin punya tim di Indonesia?",
        a: "Ya. ASOWin memiliki kantor di Jakarta, sehingga klien di Indonesia bekerja dengan tim di zona waktu yang sama.",
      },
      {
        q: "Apakah ASOWin mengoptimalkan listing dalam Bahasa Indonesia?",
        a: "Ya. Kami meneliti kata kunci langsung dalam Bahasa Indonesia, termasuk istilah sehari-hari dan campuran bahasa Inggris, lalu menulis metadata untuk App Store dan Google Play.",
      },
      {
        q: "Berapa lama hasil ASO mulai terlihat?",
        a: "Peringkat kata kunci biasanya mulai bergerak beberapa minggu setelah pembaruan metadata. Kenaikan yang stabil pada peringkat dan instalasi organik umumnya membutuhkan tiga sampai enam bulan pengujian dan iterasi.",
      },
      {
        q: "Berapa biaya layanan ASO?",
        a: "Biaya tergantung jumlah aplikasi, toko aplikasi, bahasa, dan pasar. Setiap proyek dimulai dengan audit ASO gratis, lalu kami memberikan penawaran bulanan sesuai cakupan kerja.",
      },
      {
        q: "Apakah ASOWin menjamin peringkat?",
        a: "Tidak. Apple dan Google yang menentukan peringkat, dan tidak ada agensi yang bisa mengendalikannya. Kami berkomitmen pada riset, pengujian, dan laporan yang transparan.",
      },
    ],
  },
  "app-store-localization": {
    name: "App Store Localization",
    path: "/services/app-store-localization/",
    serviceType: "App store localization",
    description:
      "Multi-language App Store and Google Play metadata, localized keyword research and localized screenshots that help apps rank and convert in new markets.",
    faqs: [
      {
        q: "What is app store localization?",
        a: "App store localization adapts your App Store and Google Play listing for each language and market: the title, subtitle or short description, keywords, description, screenshots and preview video. Done well, it is new keyword research in each language, not a translation of the English listing.",
      },
      {
        q: "How is localization different from translation?",
        a: "Translation converts your English words. Localization starts from what people in each market actually search for, which is often a different term, a local brand name or a mix of English and the local language, and from what makes them install.",
      },
      {
        q: "What is cross-localization on the App Store?",
        a: "Each App Store storefront indexes more than one localization. The US storefront, for example, also indexes Spanish (Mexico) metadata. Filling those extra fields with different keywords increases the number of searches an app can rank for.",
      },
      {
        q: "Which languages do you localize into?",
        a: "Our published results include English and Spanish-language ASO, our Jakarta team works in Bahasa Indonesia, and we work with native-speaking specialists for other languages. For Bybit, Spanish-language ASO produced Top 3 rankings in Spain and Latin America.",
      },
      {
        q: "Should screenshots be localized too?",
        a: "Yes, for priority markets. Localized captions and culturally relevant visuals usually convert better than English screenshots. We test localized creatives with store listing experiments on Google Play and product page optimization on the App Store.",
      },
    ],
  },
  "agencia-aso-es": {
    name: "Agencia ASO para España y Latinoamérica",
    path: "/es/agencia-aso/",
    serviceType: "App Store Optimization",
    areaServed: [
      { "@type": "Country", name: "Spain" },
      { "@type": "Place", name: "Latin America" },
    ],
    lang: "es",
    description:
      "App Store Optimization en español para España y Latinoamérica: investigación de palabras clave, fichas localizadas, valoraciones y Apple Search Ads.",
    intro: "Lo que preguntan los equipos de apps antes de contratar una agencia ASO",
    faqs: [
      {
        q: "¿Qué hace una agencia ASO?",
        a: "Una agencia ASO mejora el posicionamiento y la conversión de una app en el App Store y Google Play: investiga palabras clave, optimiza el título y las descripciones, prueba iconos y capturas, y gestiona valoraciones y reseñas.",
      },
      {
        q: "¿Habéis trabajado con apps en España y Latinoamérica?",
        a: "Sí. Para Bybit, la estrategia ASO en español empezó en España y se amplió a Latinoamérica, con posiciones Top 3 en ambos mercados según el caso de estudio publicado en asowin.com.",
      },
      {
        q: "¿Es lo mismo el español de España que el de Latinoamérica para ASO?",
        a: "No. App Store Connect ofrece español de España y español de México, y Google Play ofrece es-ES, español de Latinoamérica (es-419) y español de Estados Unidos. Las búsquedas cambian entre países, así que investigamos palabras clave para cada variante.",
      },
      {
        q: "¿Cuánto tarda el ASO en dar resultados?",
        a: "Las posiciones de palabras clave suelen moverse pocas semanas después de actualizar los metadatos. Las mejoras sostenidas en posiciones e instalaciones orgánicas suelen requerir de tres a seis meses de pruebas e iteración.",
      },
      {
        q: "¿Cuánto cuesta una agencia ASO?",
        a: "Depende del número de apps, tiendas, idiomas y mercados. Cada proyecto empieza con una auditoría ASO gratuita y después proponemos una cuota mensual según el alcance acordado.",
      },
      {
        q: "¿Garantizáis posiciones en las tiendas?",
        a: "No. Apple y Google deciden las posiciones y ninguna agencia puede controlarlas. Nos comprometemos con la investigación, las pruebas y unos informes transparentes.",
      },
    ],
  },
  "fintech-aso": {
    name: "Fintech ASO",
    path: "/industries/fintech-aso/",
    serviceType: "App Store Optimization for fintech apps",
    description:
      "App Store Optimization for banking, trading, crypto, payments and lending apps on the App Store and Google Play.",
    intro: "Common questions from fintech app teams",
    faqs: [
      {
        q: "What does an ASO agency do for fintech apps?",
        a: "It researches the finance searches your users make, writes accurate metadata for each store, tests trust-led screenshots, and manages ratings around onboarding and payouts. ASOWin's finance work includes Indiabulls Securities, where 50+ unranked keywords moved into the Top 50.",
      },
      {
        q: "Can fintech apps promise returns or instant approval in their listing?",
        a: "They shouldn't. Claims like guaranteed returns, risk-free investing or instant approval can get a listing rejected, attract regulators' attention and damage trust. Specific, accurate benefits work better and stay within store policy.",
      },
      {
        q: "Do crypto and lending apps face extra store rules?",
        a: "Yes. Google Play asks every app for a financial features declaration, and crypto, trading and lending apps need the right licences in many countries on both stores. Rules change, so we check each market's current policy before planning a listing.",
      },
      {
        q: "How do ratings affect finance app installs?",
        a: "Finance users compare ratings closely before trusting an app with money. Replying to reviews about verification or payouts, fixing recurring issues and prompting for ratings after successful transactions all help lift the rating and conversion.",
      },
      {
        q: "Do you localize fintech listings?",
        a: "Yes. Finance vocabulary varies by market and language. For Bybit, Spanish-language crypto keywords produced Top 3 rankings in Spain and Latin America.",
      },
    ],
  },
  "gaming-aso": {
    name: "Gaming ASO",
    path: "/industries/gaming-aso/",
    serviceType: "App Store Optimization for mobile games",
    description:
      "App Store Optimization for mobile games: genre keywords, creative testing, in-app events, localization and ratings.",
    intro: "Common questions from game studios",
    faqs: [
      {
        q: "How is ASO for games different from ASO for apps?",
        a: "Games convert mostly on creative: the icon, preview video and first screenshots. Players search by genre and mechanic, and listings need regular refreshes for events and updates, so game ASO leans on creative testing and live events more than app ASO does.",
      },
      {
        q: "What results has ASOWin achieved for games?",
        a: "For Viker Games, ASOWin's campaign reported a #1 Top Free Games position in Australia, 500,000+ installs in a single day and rankings for multiple high-value gaming keywords.",
      },
      {
        q: "Do in-app events help game rankings?",
        a: "They can help visibility. Apple in-app events and Google Play promotional content appear on the store and in search results, giving players a reason to install or return. Plan them around real content updates.",
      },
      {
        q: "Should we test creatives before a global launch?",
        a: "Yes. A soft launch or Google Play pre-registration gives early data on which icon, video and screenshots convert, so the global launch starts with proven creatives.",
      },
      {
        q: "Do you localize games for different markets?",
        a: "Yes. Charts are country by country, so localized keywords and screenshots help a game compete in each market. We work with native-speaking specialists for each language.",
      },
    ],
  },
  company: {
    name: "ASOWin",
    path: "/faq/",
    faqOnly: true,
    title: "Questions about ASOWin",
    intro: "Straight answers about who we are, what we do and how we work",
    faqs: [
      {
        q: "What is ASOWin?",
        a: `${ENTITY_DEFINITION} Its services include ASO, app reputation management, creative A/B testing, localization and Apple Search Ads.`,
      },
      {
        q: "Is ASOWin a legitimate company?",
        a: "Yes. ASOWin Inc. is registered in Delaware, USA, and headquartered in Fremont, California, with offices in Mumbai, Noida, Jakarta and Singapore. Its client results are published as named case studies on asowin.com, including Pepperfry, Bybit, Indiabulls Securities, LSM Apps and Viker Games.",
      },
      ...(PARENT
        ? [
            {
              q: `Is ASOWin part of ${PARENT.name}?`,
              a: `Yes. ASOWin is part of the ${PARENT.name} group. ASOWin delivers the group's App Store Optimization work, and the case studies on asowin.com are the primary source for ASOWin's results.`,
            },
          ]
        : []),
      {
        q: "What services does ASOWin offer?",
        a: "App Store Optimization, app reputation management, creative A/B testing and design, app store localization, Apple Search Ads and paid user acquisition, keyword install campaigns, Automated ASO with AI, and AI Review Replies, ASOWin's own product for replying to app reviews.",
      },
      {
        q: "Which clients has ASOWin worked with?",
        a: "Published case studies include Pepperfry (app rating from about 3.9 to 4.4+), Indiabulls Securities (50+ keywords from unranked into the Top 50), LSM Apps (#10 to #2 for \u201cPhone\u201d on US Google Play), Bybit (Top 3 in Spain and Latin America) and Viker Games (#1 Top Free Games in Australia).",
      },
      {
        q: "How much does ASOWin cost?",
        a: "Pricing depends on the number of apps, stores, languages and markets, and on whether you need creative production, review management or paid campaigns. Every project starts with a free ASO audit, then ASOWin quotes a monthly retainer or a project fee for the agreed scope.",
      },
      {
        q: "Does ASOWin guarantee rankings?",
        a: "No. Apple and Google decide rankings, and no agency can control them. ASOWin commits to research, testing and transparent reporting, and its published case studies show the results that approach has produced.",
      },
      {
        q: "How long does it take to see results?",
        a: "Keyword rankings usually start to move within a few weeks of a metadata update. Lasting gains in rankings and organic installs usually take three to six months of testing and iteration.",
      },
      {
        q: "Which markets and languages does ASOWin work in?",
        a: "ASOWin works worldwide. It has teams in the USA, India, Indonesia and Singapore, has published results in the US, India, Spain and Latin America, and Australia, and runs localized ASO with native-speaking specialists for other languages.",
      },
      {
        q: "How do I contact ASOWin?",
        a: "Email support@asowin.com, call +1 510-365-7173, or use the contact form on asowin.com/contact to request a free ASO audit.",
      },
    ],
  },
};
