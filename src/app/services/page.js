import ServicesHero from "../components/ServicesHero";
import ServiceDetails from "../components/ServiceDetails";
import ASOSection from "../components/ASOSection";
import ASOSection2 from "../components/ASOSection2";
import ASOSection3 from "../components/ASOSection3";
import ASOSection4 from "../components/ASOSection4";
import PricingSection from "../components/PricingSection";
import Quality from "../components/Quality";
import WhyASO from "../components/WhyAso";
import Footer from "../components/Footer";

export const metadata = {
  title: "App Store Optimization Service | App Reputation Management Platform",
  description:
    "Master the charts with our App Store Optimization Service. Use our Keyword Research Tool and App Reputation Management Platform to dominate search.",
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Google Analytics */}

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

      {/* Page Components */}
      <ServicesHero />
      <ServiceDetails />
      <ASOSection />
      <ASOSection2 />
      <ASOSection3 />
      <ASOSection4 />
      <PricingSection />
      <Quality />
      <WhyASO />
      <Footer />
    </div>
  );
};

export default ServicesPage;
