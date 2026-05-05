'use client';
import React, { useState } from 'react';

const AutomatedASOAIServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'AI-Based Review Response Management',
      description: 'Timely and relevant review replies improve both trust and conversion performance.',
      points: [
        'Context-aware review responses',
        'Personalized user communication',
        'Multi-language reply management',
        'Brand-consistent messaging',
        'Faster response workflows'
      ]
    },
    {
      title: 'Proactive Rating Management',
      description: 'Ratings directly impact app visibility, conversion rates, and user acquisition.',
      points: [
        'Monitor rating fluctuations',
        'Detect negative sentiment patterns',
        'Identify user frustration triggers',
        'Improve rating consistency',
        'Support positive feedback generation'
      ]
    },
    {
      title: 'Community-Driven Rating Improvements',
      description: 'Strong communities create stronger app reputations.',
      points: [
        'User sentiment monitoring',
        'Engagement-focused communication',
        'Feedback-driven optimization',
        'Loyalty-focused interaction strategies',
        'Community trust enhancement systems'
      ]
    },
    {
      title: 'AI Sentiment Analysis & Reputation Intelligence',
      description: 'Understanding how users feel about your app is critical for growth.',
      points: [
        'User sentiment trends analysis',
        'Review quality patterns',
        'Common user complaints',
        'Feature-related feedback',
        'Support-related concerns'
      ]
    },
    {
      title: 'Real-Time Monitoring & Automation',
      description: 'App store reputation changes quickly.',
      points: [
        'Real-time review tracking',
        'Instant sentiment alerts',
        'Reputation risk detection',
        'Automated feedback categorization',
        'Performance-based recommendations'
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-18 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our AI-Powered ASO Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Intelligent systems designed to automate, optimize, and scale your app store reputation management
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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
            <span className="font-semibold text-gray-900">Each response is optimized</span> to maintain authentic engagement while improving user satisfaction and driving measurable rating improvements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AutomatedASOAIServicesSection;
