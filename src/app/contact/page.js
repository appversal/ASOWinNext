// import React from "react";
// import Head from "next/head";
// import GetStarted from "../components/GetStarted";
// import Footer from "../components/Footer";
// import ContactHero from "../components/ContactHero";
// import Faq from "../components/Faq";

// const Contact = () => {
//     return (
//         <div className="min-h-screen">
//             {/* Next.js Head for SEO Metadata */}
//             <Head>
//                 <title>Contact - App Store Optimization - ASOWin</title>
//                 <meta
//                     name="description"
//                     content="Get in touch with ASOWin! Reach out to our team for expert ASO solutions, and personalized strategies to boost your app's performance. Let’s connect and grow together!"
//                 />
//                 <meta
//                     name="keywords"
//                     content="aso, app store optimisation, app reputation, creative a/b testing, design, keyword install, aso solution, automated aso, user acquisition, search ad aso, competitor analysis, keyword research."
//                 />

//                 <GoogleAnalytics/>
//             </Head>

//             {/* Page Components */}
//             <ContactHero />
//             <Faq />
//             <GetStarted />
//             <Footer />


//         </div>
//     );
// };

// export default Contact;


import ContactHero from "../components/ContactHero";
import Faq from "../components/Faq";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact ASOWin | Best USA ASO Agency | App Keyword Ranking",
  description:
    "Contact ASOWin to work with the best USA ASO agency. Improve your App Keyword Ranking with our elite online reputation management agency team.",
};

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Google Analytics */}

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

      {/* Page Components */}
      <ContactHero />
      <Faq />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default Contact;
