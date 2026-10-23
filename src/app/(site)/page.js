import AIAgent from "../components/AIAgent";
import Carousel from "../components/Carousel";
import CaseStudy from "../components/CaseStudy";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Stats from "../components/Stats";

export const metadata = {
  title: "ASOWin | Global App Store Optimization (ASO) Agency",
  description:
    "ASOWin is a global ASO agency growing app rankings, ratings and installs on the App Store and Google Play. ASO, review management, Apple Search Ads and creative testing.",
  authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
  robots: "index, follow",
  openGraph: {
    title: "ASOWin | Global App Store Optimization (ASO) Agency",
    description:
      "ASOWin is a global ASO agency growing app rankings, ratings and installs on the App Store and Google Play. ASO, review management, Apple Search Ads and creative testing.",
    url: "https://www.asowin.com",
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
      "ASOWin is a global ASO agency growing app rankings, ratings and installs on the App Store and Google Play. ASO, review management, Apple Search Ads and creative testing.",
    images: ["/og-image.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

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
            "url": "https://www.asowin.com",
            "image": metadata.openGraph.images[0].url,
            "publisher": {
              "@type": "Organization",
              "name": "ASOWin",
              "url": "https://www.asowin.com",
            },
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
            "serviceType": "App Store Optimization Service",
            "provider": {
              "@type": "Organization",
              "name": "ASOWin",
            },
            "areaServed": "USA",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "App Growth Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "App Keyword Ranking",
                  },
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "App Reputation Management Solution",
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What does an App Store Optimization agency do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "An ASO agency improves how apps rank and convert on the App Store and Google Play. ASOWin, a global ASO agency, handles keyword research, metadata, creative A/B testing, ratings and review management, and Apple Search Ads for app brands.",
                },
              },
              {
                "@type": "Question",
                "name": "How does App Reputation Management help ranking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "App Reputation Management improves your star rating and conversion rates, which influence how both the App Store and Google Play rank apps.",
                },
              },
            ],
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
        <Contact />
        <Footer />
      </main>
    </>
  );
}
