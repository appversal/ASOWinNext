import Link from "next/link";
import Navbar from "../../../components/Navbar";
import HeroBreadcrumb from "../../../components/HeroBreadcrumb";
import GetStarted from "../../../components/GetStarted";
import ServiceFaq from "../../../components/ServiceFaq";
import RelatedServices from "../../../components/RelatedServices";
import Footer from "../../../components/Footer";
import GoogleAnalytics from "../../../components/GoogleAnalytics";

const title = "App Store Localization Agency | Multi-Language ASO | ASOWin";
const description =
  "App store localization for the App Store and Google Play: keyword research in each language, localized metadata and screenshots, and cross-localization.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/services/app-store-localization/" },
  openGraph: {
    type: "website",
    url: "/services/app-store-localization/",
    siteName: "ASOWin",
    title,
    description,
    images: [{ url: "/og-aso.jpg", width: 1200, height: 630, alt: "ASOWin app store localization" }],
  },
  twitter: { card: "summary_large_image", title, description, site: "@asowin" },
};

const deliverables = [
  {
    title: "Keyword research in each language",
    text: "We start from what people in each market search for, including local terms, brand names and English loanwords, instead of translating your English keyword list.",
  },
  {
    title: "Localized metadata for both stores",
    text: "App name, subtitle and keyword field on the App Store; title, short description and full description on Google Play, written by native speakers for each locale.",
  },
  {
    title: "Cross-localization",
    text: "Each App Store storefront indexes more than one localization. The US storefront also reads Spanish (Mexico), for example. We use those extra fields for new keywords rather than repeats.",
  },
  {
    title: "Localized screenshots and video",
    text: "Translated captions, local currency and examples, and culturally relevant visuals for your priority markets, tested before they roll out everywhere.",
  },
  {
    title: "Localized review replies",
    text: "Replies to reviews in the reviewer's language, so ratings in new markets get the same care as your home market.",
  },
  {
    title: "Market prioritisation",
    text: "We size each market by search demand and competition, so you localize first where it will pay back fastest.",
  },
];

const steps = [
  { title: "Market and language audit", text: "Which storefronts already send impressions, where competitors are localized, and which languages to add first." },
  { title: "Native keyword research", text: "Keyword lists built in each language with search popularity, relevance and difficulty." },
  { title: "Metadata and creative", text: "Localized listings and screenshots for each priority market, reviewed by native speakers." },
  { title: "Test and measure", text: "Store listing experiments on Google Play, product page optimization on the App Store, and keyword tracking per storefront." },
];

const guides = [
  { href: "/blog/app-store-localization-strategy/", label: "App store localization strategy" },
  { href: "/blog/app-store-cross-localization-keywords/", label: "Cross-localization keywords on the App Store" },
  { href: "/blog/localizing-screenshots-without-redesign/", label: "Localizing screenshots without a redesign" },
  { href: "/blog/game-localization-aso/", label: "Game localization and ASO" },
  { href: "/blog/app-localization-guide-global-markets/", label: "App localization guide for global markets" },
];

export default function AppStoreLocalizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      <div className="w-full bg-gradient-to-b from-[#FFEDE3] to-white">
        <Navbar />
        <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-16 text-center">
          <HeroBreadcrumb serviceName="App Store Localization" serviceSlug="app-store-localization" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
            App Store Localization Agency
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-4">
            App store localization adapts your App Store and Google Play listings to each language and market, from
            keywords and metadata to screenshots, so your app ranks and converts outside your home market.
          </p>
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-8">
            For Bybit, Spanish-language ASO produced{" "}
            <Link href="/success-stories/bybit/" className="text-[#014458] font-semibold underline">
              Top 3 rankings in Spain and Latin America
            </Link>
            .
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-[#fdb124] px-8 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-semibold"
          >
            Get a free localization audit
          </Link>
        </header>
      </div>

      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="loc-what">
          <h2 id="loc-what" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Localization, not translation
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mb-10">
            A translated listing keeps your English keywords in another language, but people in each market search in
            their own words. We rebuild the keyword strategy for every locale, then write metadata and creative that
            match local search behaviour on each store.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item) => (
              <li key={item.title} className="rounded-2xl border border-gray-200 p-6 hover:border-[#fdb124] transition-colors">
                <h3 className="text-lg font-semibold text-[#111111] mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#FFF8F2] py-16" aria-labelledby="loc-process">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 id="loc-process" className="text-3xl md:text-4xl font-bold text-[#111111] mb-10">
              How a localization project works
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <li key={step.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <span className="text-[#fdb124] font-bold text-2xl">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-lg font-semibold text-[#111111] mt-2 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="loc-markets">
          <h2 id="loc-markets" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            Markets and languages
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mb-6">
            Our teams work from Fremont, Mumbai, Noida, Jakarta and Singapore, and we bring in native-speaking
            specialists for other languages. See how we approach{" "}
            <Link href="/aso-agency-usa/" className="text-[#014458] font-semibold underline">the US</Link>,{" "}
            <Link href="/aso-agency-india/" className="text-[#014458] font-semibold underline">India</Link>,{" "}
            <Link href="/aso-agency-indonesia/" className="text-[#014458] font-semibold underline">Indonesia</Link> and{" "}
            <Link href="/es/agencia-aso/" className="text-[#014458] font-semibold underline">Spain and Latin America</Link>, or read
            how localization fits into our{" "}
            <Link href="/services/app-store-optimization/" className="text-[#014458] font-semibold underline">
              App Store Optimization service
            </Link>
            .
          </p>
          <h3 className="text-xl font-semibold text-[#111111] mt-10 mb-4">Localization guides</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="text-[#014458] hover:text-[#fdb124] underline">
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <ServiceFaq slug="app-store-localization" />
      </main>

      <GetStarted />
      <RelatedServices currentServiceSlug="app-store-localization" />
      <Footer />
    </div>
  );
}
