'use client';
import React, { useState } from 'react';

const KeywordInstallsStrategySection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Keyword Research & Targeting',
      description: 'Successful campaigns begin with the right keyword strategy.',
      points: [
        'High-volume keywords',
        'High-conversion search terms',
        'Low-competition ranking opportunities',
        'Category-specific keyword gaps',
        'Trending search queries',
        'Long-tail install opportunities'
      ]
    },
    {
      title: 'Search Ranking Optimization',
      description: 'We help improve your app\'s ranking position for targeted keywords through strategic optimization.',
      points: [
        'Search relevance improvement',
        'Keyword positioning growth',
        'Ranking consistency',
        'Search behavior alignment',
        'Visibility expansion',
        'Organic keyword stability'
      ]
    },
    {
      title: 'Controlled & Measured Install Campaigns',
      description: 'We execute carefully managed keyword install campaigns designed to support organic ranking growth.',
      points: [
        'Controlled install pacing',
        'Geographic targeting',
        'Keyword-specific tracking',
        'Ranking movement analysis',
        'Performance monitoring',
        'Ongoing optimization adjustments'
      ]
    },
    {
      title: 'Ranking Tracking & Performance Monitoring',
      description: 'Visibility growth requires continuous analysis.',
      points: [
        'Keyword ranking movement',
        'Search visibility trends',
        'Install growth patterns',
        'Competitor keyword performance',
        'Category ranking changes',
        'Organic traffic improvements'
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-18 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Keyword Install Strategy
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            We build controlled, data-driven keyword install campaigns focused on sustainable ranking growth and search visibility improvement.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-[#014458] transition-all duration-500 cursor-pointer hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#014458]/5 to-[#fdb124]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col p-6 md:p-8">
                {/* Icon */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-[#fdb124]/10 rounded-lg group-hover:bg-[#fdb124]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#fdb124]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#014458] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Points List */}
                <div className="space-y-2 flex-grow">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#fdb124] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[#FFF4E6] to-[#FFE8D1] rounded-2xl border border-[#fdb124]/20">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">The goal is long-term ranking improvement</span> — not short-term spikes. Every campaign is monitored closely to maximize efficiency and search impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeywordInstallsStrategySection;
