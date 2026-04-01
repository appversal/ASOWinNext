import ServicesHero from "../components/ServicesHero";

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

      {/* Service Schema and FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "serviceType": "App Store Optimization (ASO) Services",
                "provider": {
                  "@type": "Organization",
                  "name": "ASOWin",
                  "url": "https://asowin.com/",
                  "logo": "https://asowin.com/ASOWin.png"
                },
                "description": "Comprehensive ASO solutions including Keyword Research, Metadata Optimization, A/B Testing, and Reputation Management for iOS and Android apps.",
                "areaServed": "Worldwide",
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "ASO Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Keyword Research and Optimization"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "App Store Creative A/B Testing"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "App Reputation and Review Management"
                      }
                    }
                  ]
                }
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is App Store Optimization (ASO)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "ASO is the process of improving an app's visibility and discoverability in app stores like Google Play and Apple's App Store to increase organic downloads."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does ASOWin provide a free ASO audit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, ASOWin offers a free ASO audit to identify areas for improvement in your app's metadata, visuals, and keyword strategy."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to see results from ASO?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "While some improvements appear within weeks, significant and sustainable results typically take 3-6 months of consistent optimization."
                    }
                  }
                ]
              }
            ]
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
