// "use client";

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const caseStudyData = {
//   "03": {
//     logo: "/lsm.png", // Logo image for LSM Apps from public folder
//     title: "LSM Apps",
//     stats: [
//       {
//         value: "Top #2",
//         label: "Rank",
//       },
//       {
//         value: "+12,000",
//         label: "Daily Downloads",
//       },
//     ],
//     description: "Boosting Keyword Rankings and Downloads for Easy Phone",
//     image: "/casestudy.png", // Case study image from public folder
//   },
//   "01": {
//     logo: "/pflogo.jpg", // Pepperfry logo from public folder
//     title: "Pepperfry",
//     stats: [
//       {
//         value: "#1",
//         label: "Rankings",
//       },
//       {
//         value: "Keywords",
//         label: " Success",
//       },
//     ],
//     description:
//       "• Ranked highest for category keyword<br/><br/>• 10x increase in total rate",
//     image: "/casestudy2.png", // Case study image from public folder
//   },
//   "02": {
//     logo: "/iblogo.jpg", // Indiabulls Securities logo from public folder
//     title: "Indiabulls Securities",
//     stats: [
//       {
//         value: "50+",
//         label: "keywords",
//       },
//       {
//         value: "Visibility",
//         label: "Success Rate",
//       },
//     ],
//     description:
//       "• Managed month on month ASO for Indiabulls Securities<br/><br/>• Ranked for more than 25+ unranked keywords",
//     image: "/casestudy3.png", // Case study image from public folder
//   },
// };

// const CaseStudy = () => {
//   const [activeCase, setActiveCase] = useState("01");
//   const caseStudies = ["01", "02", "03"];

//   const handleNext = () => {
//     const currentIndex = caseStudies.indexOf(activeCase);
//     if (currentIndex < caseStudies.length - 1) {
//       setActiveCase(caseStudies[currentIndex + 1]);
//     }
//   };

//   const handlePrev = () => {
//     const currentIndex = caseStudies.indexOf(activeCase);
//     if (currentIndex > 0) {
//       setActiveCase(caseStudies[currentIndex - 1]);
//     }
//   };

//   const activeData = caseStudyData[activeCase];

//   return (
//     <div className="w-full mb-5">
//       {/* Case Study Navigation */}
//       <div className="pl-4 sm:pl-[80px] mt-10">
//         <nav className="flex space-x-6 sm:space-x-12 overflow-x-auto scrollbar-hide">
//           {caseStudies.map((study) => (
//             <button
//               key={study}
//               onClick={() => setActiveCase(study)}
//               className={`whitespace-nowrap text-sm sm:text-[16px] font-medium pb-4 ${
//                 activeCase === study
//                   ? "border-b-2 border-[#014458] text-[#014458]"
//                   : "text-[#014458] hover:text-[#014458]/80"
//               }`}
//             >
//               CASE STUDY {study}
//             </button>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
//         {/* Left Section */}
//         <div className="w-full px-4 sm:px-[80px] lg:w-[480px] lg:pl-[80px] lg:pr-8">
//           <div className="flex gap-4 mb-8 lg:mb-16">
//             {/* Fixed size container for the logo */}
//             <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
//               <Image 
//                 src={activeData.logo}
//                 alt={`${activeData.title} logo`}
//                 width={48}
//                 height={48}
//                 className="object-contain"
//               />
//             </div>
//             {/* Content container with flexible width */}
//             <div className="flex-grow">
//               <h2 className="text-3xl sm:text-[56px] leading-tight font-semibold lg:-mt-3">
//                 {activeData.title}
//               </h2>
//               <p className="text-sm sm:text-[16px] mt-3 sm:mt-5 text-black/80">
//                 {activeData.subtitle}
//               </p>
//               <button
//                 className="bg-[#FF6B00] text-white px-6 sm:px-8 py-2.5 sm:py-3 mt-4 sm:mt-5 rounded-full text-sm font-medium hover:bg-[#FF6B00]/90 transition-colors"
//                 onClick={() =>
//                   (window.location.href = `/casestudy${parseInt(activeCase, 10)}`)
//                 }
//               >
//                 READ THE CASE STUDY
//               </button>
//             </div>
//           </div>

//           <div className="mb-8 lg:mb-16">
//             <div className="grid grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
//               {activeData.stats.map((stat, index) => (
//                 <div key={index}>
//                   <h3 className="text-3xl sm:text-[43px] leading-none font-medium font-serif mb-2">
//                     {stat.value}
//                   </h3>
//                   <p className="text-xs sm:text-[14px] text-black/60">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>

//             <p
//               className="text-sm sm:text-[16px] text-black/80"
//               dangerouslySetInnerHTML={{ __html: activeData.description }}
//             />
//           </div>

//           <div className="flex space-x-4">
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
//               onClick={handlePrev}
//             >
//               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//             <button
//               className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors"
//               onClick={handleNext}
//             >
//               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Right Section - App Screenshots */}
//         <div className="w-full lg:w-[calc(100%-580px)] mt-8 lg:-mt-20 px-4 sm:px-[80px] lg:px-8">
//           <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3]">
//             <Image 
//               src={activeData.image}
//               alt={`${activeData.title} interface showcase`}
//               fill
//               className="object-contain"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudy;


"use client";


import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PROOF, CASE_STUDY_ORDER } from "./proofFacts";

const toCard = (key, proof, logo, image) => ({
  key,
  logo,
  title: proof.name,
  href: proof.href,
  stats: proof.stats,
  bullets: proof.bullets,
  image,
});

// All three stories are rendered into the HTML; tabs only show and hide them,
// so crawlers and AI engines read every story, not just the first.
const caseStudyData = [
  toCard("pepperfry", PROOF.pepperfry, "/pflogo.jpg", "/casestudy2.png"),
  toCard("indiabulls", PROOF.indiabulls, "/iblogo.jpg", "/casestudy3.png"),
  toCard("lsm", PROOF.lsm, "/lsm.png", "/casestudy.png"),
];

const CaseStudy = () => {
  const [active, setActive] = useState(0);
  const last = caseStudyData.length - 1;

  return (
    <div id="case-studies" className="w-full max-w-screen-2xl mx-auto mb-5">
      <h2 className="sr-only">ASOWin success stories</h2>
      {/* Case Study Navigation */}
      <div className="pl-4 sm:pl-[80px] mt-10">
        <div role="tablist" aria-label="Success stories" className="flex space-x-6 sm:space-x-12 overflow-x-auto scrollbar-hide">
          {caseStudyData.map((study, index) => (
            <button
              key={study.key}
              type="button"
              role="tab"
              id={`story-tab-${study.key}`}
              aria-controls={`story-${study.key}`}
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className={`whitespace-nowrap text-sm sm:text-[16px] font-medium pb-4 uppercase ${active === index
                ? "border-b-2 border-[#014458] text-[#014458]"
                : "text-[#014458] hover:text-[#014458]/80"
                }`}
            >
              {study.title}
            </button>
          ))}
        </div>
      </div>

      {caseStudyData.map((study, index) => (
        <section
          key={study.key}
          id={`story-${study.key}`}
          role="tabpanel"
          aria-labelledby={`story-tab-${study.key}`}
          hidden={active !== index}
          className={`${active === index ? "flex" : "hidden"} flex-col lg:flex-row mt-8 lg:mt-16 items-start`}
        >
          {/* Left Section */}
          <div className="w-full px-4 sm:px-[80px] lg:w-[480px] xl:w-[580px] lg:pl-[80px] lg:pr-8">
            <div className="flex gap-4 mb-8 lg:mb-16">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
                <Image
                  src={study.logo}
                  alt={`${study.title} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-3xl sm:text-[56px] leading-tight font-semibold lg:-mt-3">
                  {study.title}
                </h3>
                <Link
                  href={study.href}
                  className="inline-block bg-[#FF6B00] text-white px-6 sm:px-8 py-2.5 sm:py-3 mt-4 sm:mt-5 rounded-full text-sm font-medium hover:bg-[#FF6B00]/90 transition-colors"
                >
                  READ THE {study.title.toUpperCase()} SUCCESS STORY
                </Link>
              </div>
            </div>

            <div className="mb-8 lg:mb-16">
              <dl className="flex flex-wrap gap-x-10 gap-y-6 mb-8 sm:mb-12">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-2xl sm:text-[43px] leading-none font-medium font-serif mb-2 whitespace-nowrap">
                      {stat.value}
                    </dd>
                    <dt className="text-xs sm:text-[14px] text-black/60">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>

              <ul className="space-y-4 text-sm sm:text-[16px] text-black/80">
                {study.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-4">
              <button
                type="button"
                className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors disabled:opacity-50"
                onClick={() => setActive(Math.max(0, index - 1))}
                disabled={index === 0}
                aria-label="Previous success story"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </button>

              <button
                type="button"
                className="p-2 rounded-full bg-[#004258] text-white hover:bg-[#004258]/90 transition-colors disabled:opacity-50"
                onClick={() => setActive(Math.min(last, index + 1))}
                disabled={index === last}
                aria-label="Next success story"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Right Section - App Screenshots */}
          <div className="w-full lg:w-[calc(100%-580px)] xl:w-[calc(100%-680px)] mt-8 lg:-mt-20 px-4 sm:px-[80px] lg:px-8">
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]">
              <Image
                src={study.image}
                alt={`${study.title} app store listing after ASOWin's work`}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </div>
        </section>
      ))}

      {/* Every case study as a crawlable link, whichever tab is open */}
      <div className="px-4 sm:px-[80px] mt-12 lg:mt-20">
        <h3 className="text-sm font-semibold tracking-widest text-[#014458] uppercase mb-4">
          All success stories
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CASE_STUDY_ORDER.map((key) => {
            const proof = PROOF[key];
            return (
              <li key={key}>
                <Link
                  href={proof.href}
                  className="block h-full rounded-xl border border-gray-200 p-4 hover:border-[#FF6B00] hover:shadow-md transition-all group"
                >
                  <span className="block font-semibold text-[#111111] group-hover:text-[#FF6B00]">
                    {proof.name} ASO case study
                  </span>{" "}
                  <span className="block text-sm text-black/60 mt-1">{proof.summary}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link href="/success-stories/" className="inline-block mt-6 text-[#FF6B00] font-medium hover:underline">
          View all success stories →
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;




