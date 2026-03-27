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

      {/* Page Content */}
      <main>
        <HeroSection />
        <Services />
        <Carousel />
        <AIAgent />
        <Stats />
        <CaseStudy />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
