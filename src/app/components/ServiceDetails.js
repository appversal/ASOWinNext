import React from "react";

const ServiceDetails = () => {
  const details = [
    {
      title: "Comprehensive App Store Keyword Research",
      content: "Identify high-traffic, relevant keywords that resonate with your target audience. Our proprietary Keyword Research Tool analyzes competition and search volumes to ensure your app ranks for the terms that matter most. We focus on both short-tail and long-tail keywords to cover all search intents.",
    },
    {
      title: "Data-Driven App Reputation Management",
      content: "Build user trust through proactive review and rating management. Our App Reputation Management Solution tracks user feedback, identifies sentiment trends, and provides actionable recommendations to improve your app's public perception. Better ratings lead directly to higher conversion rates and improved search rankings.",
    },
    {
      title: "Creative Asset Optimization (A/B Testing)",
      content: "Stop guessing and start knowing. We conduct extensive A/B split testing on icons, screenshots, and video previews to determine what truly drives conversions. By optimizing your app's visual identity, we maximize Click-Through Rates (CTR) and reduce your overall Cost Per Install (CPI).",
    },
    {
      title: "Localized ASO for Global Success",
      content: "Take your app to international markets with confidence. We offer localized App Store Optimization services tailored to specific cultural nuances and linguistic preferences in USA, India, Indonesia, and beyond. Every market is different, and our expert team ensures your app feels native everywhere.",
    },
    {
      title: "Continuous Algorithm Monitoring and Adaptation",
      content: "The app store algorithms are constantly changing. Our team of ASO experts stays ahead of trends, monitoring Apple and Google updates in real-time. We continuously refine your strategy to ensure sustainable organic growth, keeping you ahead of competitors through every update.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-bold text-[#111122] mb-12 text-center">
          In-Depth App Store Optimization Strategies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {details.map((detail, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-[#306777]">
                {detail.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {detail.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-[#F37A60] rounded-[36px] text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Partner with ASOWin?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            ASOWin is recognized as a leading ASO platform and agency precisely because we treat App Store Optimization as a science. We don&apos;t just look at ranking; we look at the entire funnel—from visibility to acquisition and engagement. With our expert team, you gain a partner dedicated to your mobile success, utilizing the most advanced tools and methodologies available today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
