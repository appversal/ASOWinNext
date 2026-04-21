import AIAgent from "./components/AIAgent";
import Carousel from "./components/Carousel";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Stats from "./components/Stats";

export const metadata = {
  title: "App Store Optimization Agency | ASOWin | Best ASO Platform",
  description:
    "ASOWin is the leading App Store Optimization Agency USA that offers App Store Optimization Service in USA. Boost your rankings with the Best ASO Platform",
  keywords:
    "App store optimization, SEO Agency, ASO, ASOWin, App Store Optimization, Mobile Growth, App Marketing",
  authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
  robots: "index, follow",
  openGraph: {
    title: "App Store Optimization Agency | ASOWin | Best ASO Platform",
    description:
      "ASOWin is the leading App Store Optimization Agency USA that offers App Store Optimization Service in USA. Boost your rankings with the Best ASO Platform",
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
    title: "App Store Optimization Agency | ASOWin | Best ASO Platform",
    description:
      "ASOWin is the leading App Store Optimization Agency USA that offers App Store Optimization Service in USA. Boost your rankings with the Best ASO Platform",
    keywords: "app store optimization, asowin, ASOWin",
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

      {/* Software Application Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "ASOWin Keyword Research Tool",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "120",
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
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
                "name": "What is the best ASO platform for USA market?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ASOWin is recognized as a leading ASO platform offering data-driven keyword research and reputation management specifically for the USA app market.",
                },
              },
              {
                "@type": "Question",
                "name": "How does App Reputation Management help ranking?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "App Reputation Management improves your star rating and conversion rates, which are key signals for Apple App Store Ranking algorithms.",
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
