import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { PROOF, CASE_STUDY_ORDER } from "../../components/proofFacts";

const url = "https://www.asowin.com/media-kit/";

export const metadata = {
  title: "ASOWin Media Kit | Facts, Client Results and Logos",
  description:
    "ASOWin media kit for editors and journalists: company description, services, offices, published client results, the ASOWin ASO book, logos and press contact.",
  alternates: { canonical: url },
  openGraph: {
    title: "ASOWin Media Kit | Facts, Client Results and Logos",
    description: "Company facts, published client results, logos and press contact for ASOWin, a global App Store Optimization agency.",
    url,
    siteName: "ASOWin",
    type: "website",
    images: [{ url: "/og-media-kit.jpg", width: 1200, height: 630, alt: "ASOWin media kit" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-media-kit.jpg"] },
};

// The one-sentence description editors can quote word for word.
const DEFINITION =
  "ASOWin is a global App Store Optimization (ASO) agency with teams in the USA, India, Indonesia and Singapore, offering ASO, app reputation management, Apple Search Ads and paid UA, creative A/B testing and AI-powered review replies.";

const facts = [
  { label: "Company", value: "ASOWin Inc." },
  { label: "What we do", value: "App Store Optimization agency for the Apple App Store and Google Play" },
  { label: "Offices", value: "California, Delaware, Jakarta, Singapore, Mumbai, Noida" },
  { label: "Client industries", value: "Fintech, e-commerce, gaming and consumer apps" },
  { label: "Website", value: "www.asowin.com" },
  { label: "Press contact", value: "support@asowin.com" },
];

const services = [
  { name: "App Store Optimization", href: "/services/app-store-optimization/" },
  { name: "App Reputation Management", href: "/services/app-reputation-management/" },
  { name: "Creative A/B Testing & Design", href: "/services/creative-ab-testing/" },
  { name: "Paid User Acquisition & Apple Search Ads", href: "/services/paid-user-acquisition/" },
  { name: "Automated ASO with AI", href: "/services/automated-aso-ai/" },
  { name: "AI Review Replies (product)", href: "/automated-review-replies/" },
];

const assets = [
  { name: "ASOWin logo (PNG, 473×89)", href: "/ASOWin.png" },
  { name: "ASOWin icon (PNG, 256×256)", href: "/icon.png" },
  { name: "Book cover (JPG)", href: "/asowin-book-cover.jpg" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url,
  name: "ASOWin Media Kit",
  about: { "@id": "https://www.asowin.com/#organization" },
  description: DEFINITION,
};

export default function MediaKitPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="w-full bg-gradient-to-b from-[#FFEDE3] to-white">
        <Navbar />
        <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-12 md:pt-16">
          <p className="text-sm font-semibold tracking-widest text-[#014458] uppercase mb-4">Media kit</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">
            ASOWin facts, results and logos
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            For editors, journalists and list authors writing about App Store Optimization agencies. Everything
            on this page links to a public source on asowin.com and may be quoted.
          </p>
        </header>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-14">
        <section aria-labelledby="mk-definition">
          <h2 id="mk-definition" className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
            About ASOWin in one sentence
          </h2>
          <blockquote className="border-l-4 border-[#fdb124] bg-gray-50 rounded-r-xl p-6 text-lg text-[#111111]">
            {DEFINITION}
          </blockquote>
        </section>

        <section aria-labelledby="mk-facts">
          <h2 id="mk-facts" className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">Company facts</h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-gray-200 pb-3">
                <dt className="text-xs font-semibold tracking-widest text-gray-500 uppercase">{fact.label}</dt>
                <dd className="text-[#111111] text-lg mt-1">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="mk-results">
          <h2 id="mk-results" className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">Published client results</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CASE_STUDY_ORDER.map((key) => (
              <li key={key}>
                <Link
                  href={PROOF[key].href}
                  className="block h-full rounded-xl border border-gray-200 p-5 hover:border-[#fdb124] hover:shadow-md transition-all"
                >
                  <span className="block text-lg font-semibold text-[#111111]">{PROOF[key].name}</span>
                  <span className="block text-gray-600 mt-1">{PROOF[key].summary}</span>
                  <span className="block text-sm text-[#014458] mt-3">Read the case study →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="mk-services">
          <h2 id="mk-services" className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-[#014458] text-lg hover:text-[#E06F00]">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="mk-book" className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 items-center">
          <Image
            src="/asowin-book-cover.jpg"
            alt="Cover of App Store Optimization: The Ultimate Book by ASOWin"
            width={719}
            height={1130}
            className="w-32 sm:w-full h-auto rounded-lg shadow-lg"
          />
          <div>
            <h2 id="mk-book" className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">Published book</h2>
            <p className="text-gray-700 text-lg">
              <Link href="/book/" className="text-[#014458] font-medium hover:underline">
                App Store Optimization: The Ultimate Book
              </Link>{" "}
              is ASOWin&apos;s free 18-page guide to how the App Store and Google Play rank apps.
            </p>
          </div>
        </section>

        <section aria-labelledby="mk-assets">
          <h2 id="mk-assets" className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">Logos and images</h2>
          <ul className="space-y-2">
            {assets.map((asset) => (
              <li key={asset.href}>
                <a href={asset.href} download className="text-[#014458] text-lg hover:text-[#E06F00]">
                  {asset.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="mk-contact" className="rounded-2xl bg-[#014458] text-white p-8">
          <h2 id="mk-contact" className="text-2xl md:text-3xl font-bold mb-3">Press and list enquiries</h2>
          <p className="text-white/80 text-lg">
            For interviews, data requests or agency list submissions, email{" "}
            <a href="mailto:support@asowin.com" className="text-[#FFB842] font-medium hover:underline">
              support@asowin.com
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
