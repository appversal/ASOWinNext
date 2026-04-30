import React from 'react';
import Image from 'next/image';

const ReviewRepliesCaseStudy = () => {
  const stats = [
    {
      number: "78%",
      label: "Increase in response rate"
    },
    {
      number: "4.2 → 4.5",
      label: "Average rating improvement"
    },
    {
      number: "15hrs/week",
      label: "Time saved per team"
    },
    {
      number: "35%",
      label: "Higher user retention"
    }
  ];

  return (
    <section className="w-full bg-white pt-8 md:pt-12 pb-16 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4">
            Real Results
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            See what our customers achieved with automated review replies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#FFF9F3] to-[#FFE8D1] rounded-xl p-8 text-center hover:shadow-2xl transition-shadow duration-300 min-h-[180px] flex flex-col justify-center border border-[#FFD9B3]"
            >
              <div className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl font-bold text-[#fdb124] mb-3 whitespace-nowrap overflow-hidden text-ellipsis leading-tight">
                {stat.number}
              </div>
              <p className="text-black text-sm sm:text-base font-medium leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Key Metrics Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-[#fdb124] mb-2">10 mins</div>
            <p className="text-gray-700">Average reply turnaround time</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-[#fdb124] mb-2">24/7</div>
            <p className="text-gray-700">Fully automated - no manual agents needed</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div className="text-3xl font-bold text-[#fdb124] mb-2">Weekly</div>
            <p className="text-gray-700">Automated sentiment & performance reports</p>
          </div>
        </div>

        {/* Case Study Details */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
          <div className="mb-8 pb-8 border-b border-gray-300 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center w-24 h-24">
              <Image 
                src="/automate_reviews_logos/bajaj_icon.png" 
                alt="Bajaj Finserv" 
                width={70} 
                height={70}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-2">
                Bajaj Finserv
              </h2>
              <p className="text-gray-600 text-lg">
                Improves App Ratings with Custom CSAT Integration Across 90+ App Screens
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Profile */}
            <div>
              <h3 className="text-[#111111] font-bold text-lg mb-4 flex items-center gap-2">
                About the Company
              </h3>
              <p className="text-gray-700 text-base mb-4">
                Bajaj Finserv is one of India's leading financial services companies, offering a wide range of products including loans, insurance, and digital financial solutions through its highly popular mobile application used by millions of customers.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Industry:</strong> Finance (Fintech)</p>
                <p><strong>Solution:</strong> CSAT Integration</p>
                <p><strong>Key Product:</strong> CleverTap</p>
              </div>
            </div>

            {/* Challenges */}
            <div>
              <h3 className="text-[#111111] font-bold text-lg mb-4">
                The Challenges
              </h3>
              <ul className="space-y-3">
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  Integrating CSAT feedback flows across 90+ screens within the app
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  Using CleverTap's HTML popup module with multiple technical limitations
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  Resolving inconsistencies between preview behavior and live app rendering
                </li>
              </ul>
              <p className="text-gray-600 text-sm mt-4 italic">
                The implementation was technically complex and required extensive experimentation and coordination.
              </p>
            </div>

            {/* Solution & Results */}
            <div>
              <h3 className="text-[#111111] font-bold text-lg mb-4">
                The Solution
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  <span>Designed and implemented CSAT feedback flows across 90+ key app screens</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  <span>Resolved rendering issues caused by HTML popup inconsistencies</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  <span>Ensured accurate UI behavior within the live app through iteration</span>
                </li>
              </ul>

              <h4 className="text-[#111111] font-bold mb-3">Results Achieved:</h4>
              <ul className="space-y-2">
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  <span>Average app ratings improved on both Play Store and App Store</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  <span>Deeper insights into customer experience across multiple app flows</span>
                </li>
                <li className="text-gray-700 flex items-start gap-2">
                  <span className="text-[#fdb124] flex-shrink-0">•</span>
                  <span>Received award from Bajaj Finserv for successful implementation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-[#111111] text-lg italic mb-4">
              "AppVersal's development team worked closely with our product and marketing teams to build and deploy a custom CSAT feedback system using CleverTap's HTML popup infrastructure. Despite the technical challenges, they successfully engineered a stable and scalable solution that transformed our customer experience insights."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#fdb124] to-[#E06F00] rounded-full flex items-center justify-center text-white font-bold">
                BF
              </div>
              <div>
                <p className="text-[#111111] font-bold">Bajaj Finserv</p>
                <p className="text-gray-600 text-sm">Finance / Fintech Sector</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-800 text-lg mb-6">
            Ready to see similar results for your app?
          </p>
          <button className="bg-[#fdb124] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e09910] transition-colors">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewRepliesCaseStudy;
