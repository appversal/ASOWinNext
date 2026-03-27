// import React from "react";
// import Head from "next/head";
// import AboutHero from "../components/AboutHero";
// import AboutSection from "../components/AboutSection";
// import WhyChooseSection from "../components/WhyChooseSection";
// import GetStarted from "../components/GetStarted";
// import Footer from "../components/Footer";

// const About = () => {
//     return (
//         <div className="min-h-screen">
//             {/* Next.js Head for SEO Metadata */}
//             <Head>
//                 <title>About - App Store Optimization - ASOWin</title>
//                 <meta
//                     name="description"
//                     content="Learn about ASOWin, a results-driven app agency specializing in ASO, AI-powered strategies, and creative solutions to help apps grow, boost visibility, and achieve success in competitive app markets."
//                 />
//                 <meta
//                     name="keywords"
//                     content="aso, app store optimisation, app reputation, creative a/b testing, design, keyword install, aso solution, automated aso, user acquisition, search ad aso, competitor analysis, keyword research."
//                 />

//                 <GoogleAnalytics/>
//             </Head>

//             {/* Page Components */}
//             <AboutHero />
//             <AboutSection/>
//             <WhyChooseSection/>
//             <GetStarted/>
//             <Footer/>

         
//         </div>
//     );
// };

// export default About;


import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import WhyChooseSection from "../components/WhyChooseSection";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

export const metadata = {
  title: "App Growth Company | About | App Reputation Management Solution",
  description:
    "Discover ASOWin a leading App Growth Company in USA. Our App Reputation Management Solution helps brands build trust and dominate the app stores.",
};

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Google Analytics */}

      {/* Page Components */}
      <AboutHero />
      <AboutSection />
      <WhyChooseSection />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default About;
