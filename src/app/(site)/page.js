import AIAgent from "../components/AIAgent";
import Carousel from "../components/Carousel";
import CaseStudy from "../components/CaseStudy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Stats from "../components/Stats";
import ServiceFaq from "../components/ServiceFaq";

export const metadata = {
  title: "ASOWin | Global App Store Optimization (ASO) Agency",
  description:
    "ASOWin is a global ASO agency that grows app rankings, ratings and installs on the App Store and Google Play with ASO, review management and Apple Search Ads.",
  authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
  robots: "index, follow",
  openGraph: {
    title: "ASOWin | Global App Store Optimization (ASO) Agency",
    description:
      "ASOWin is a global ASO agency that grows app rankings, ratings and installs on the App Store and Google Play with ASO, review management and Apple Search Ads.",
    url: "https://www.asowin.com/",
    siteName: "ASOWin",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASOWin Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOWin | Global App Store Optimization (ASO) Agency",
    description:
      "ASOWin is a global ASO agency that grows app rankings, ratings and installs on the App Store and Google Play with ASO, review management and Apple Search Ads.",
    images: ["/og-image.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const HOME_SERVICES = [
  ["App Store Optimization", "/services/app-store-optimization/"],
  ["App Reputation Management", "/services/app-reputation-management/"],
  ["Creative A/B Testing & Design", "/services/creative-ab-testing/"],
  ["Paid User Acquisition & Apple Search Ads", "/services/paid-user-acquisition/"],
  ["App Store Localization", "/services/app-store-localization/"],
  ["Automated ASO with AI", "/services/automated-aso-ai/"],
  ["AI Review Replies", "/automated-review-replies/"],
];

export default function Home() {
  return (
    <>
      {/* Google Analytics - Load once per page */}

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": metadata.title,
            "description": metadata.description,
            "url": "https://www.asowin.com/",
            "image": "https://www.asowin.com/og-image.jpg",
            "isPartOf": { "@id": "https://www.asowin.com/#website" },
            "about": { "@id": "https://www.asowin.com/#organization" },
            "publisher": { "@id": "https://www.asowin.com/#organization" },
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.asowin.com/#service",
            "serviceType": "App Store Optimization",
            "provider": { "@id": "https://www.asowin.com/#organization" },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "App Growth Services",
              "itemListElement": HOME_SERVICES.map(([name, path]) => ({
                "@type": "Offer",
                "itemOffered": { "@type": "Service", "name": name, "url": `https://www.asowin.com${path}` },
              })),
            },
          }),
        }}
      />

      {/* Page Content */}
      <main>
        <HeroSection />
        <Carousel />
        <Services />
        <AIAgent />
        <Stats />
        <CaseStudy />
        <ServiceFaq slug="home" />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
