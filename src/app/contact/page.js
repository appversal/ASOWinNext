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
      {/* Contact Page Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "ContactPage",
              "name": "ASOWin",
              "url": "https://asowin.com/contact/",
              "logo": "https://asowin.com/ASOWin.png",
              "email": "support@asowin.com",
              "serviceType": "App Store Optimization Service",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "support@asowin.com",
                  "contactType": "customer support",
                  "availableLanguage": ["English"]
                }
              ]
            },
            "url": "https://asowin.com/contact/",
            "description": "Contact ASOWin for expert App Store Optimization services, app audits, and mobile growth consulting."
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
