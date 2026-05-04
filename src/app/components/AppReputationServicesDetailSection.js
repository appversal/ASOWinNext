'use client';
import React, { useState } from 'react';

const AppReputationServicesDetailSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Review Monitoring & Management',
      image: '/services_images/keyword_research_and_strategy.png',
      description: 'We continuously monitor reviews across the App Store and Google Play to identify user concerns, opportunities, and emerging trends.',
      points: [
        'Real-time review tracking',
        'Negative review escalation',
        'Priority issue identification',
        'User feedback categorization',
        'Competitor review benchmarking',
        'Performance trend analysis'
      ]
    },
    {
      title: 'AI-Powered Review Responses',
      image: '/services_images/app_metadata_optimization.png',
      description: 'Timely and contextual responses improve trust and user satisfaction.',
      points: [
        'Context-aware review replies',
        'Personalized user engagement',
        'Multi-language response management',
        'Brand-aligned communication',
        'Faster response turnaround'
      ]
    },
    {
      title: 'Ratings Optimization Strategy',
      image: '/services_images/competitior_analysis_and_benchmarking.png',
      description: 'Higher ratings improve both visibility and conversion.',
      points: [
        'User sentiment analysis',
        'Friction-point identification',
        'Review funnel optimization',
        'In-app feedback strategy recommendations',
        'Positive review encouragement systems',
        'User experience feedback mapping'
      ]
    },
    {
      title: 'Sentiment Analysis & Benchmarking',
      image: '/services_images/aidriven_aso_insights.png',
      description: 'Understanding user sentiment is essential for long-term growth.',
      points: [
        'Positive vs negative sentiment trends',
        'Common user pain points',
        'Feature feedback patterns',
        'Support-related complaints',
        'Market perception changes',
        'Competitor sentiment comparisons'
      ]
    },
    {
      title: 'Reputation Crisis Management',
      image: '/services_images/localization_and_international_iso.png',
      description: 'Negative review spikes and public dissatisfaction can impact growth rapidly.',
      points: [
        'Rapid response workflows',
        'Review escalation systems',
        'Feedback prioritization',
        'User trust recovery strategies',
        'Reputation stabilization planning'
      ]
    },
    {
      title: 'Organic Community Building',
      image: '/services_images/performance_tracking_and_reporting.png',
      description: 'Strong communities create stronger brands.',
      points: [
        'Positive feedback amplification',
        'Community engagement strategies',
        'User advocacy initiatives',
        'Loyalty-focused engagement systems',
        'Trust-building communication'
      ]
    }
  ];

  return (
    <section className="w-full py-12 md:py-18 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our App Reputation Management Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Comprehensive reputation solutions designed to build trust and strengthen user relationships
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-[#014458] transition-all duration-500 cursor-pointer hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#014458]/5 to-[#fdb124]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col p-0">
                
                {/* Thumbnail Image at Top */}
                <div className="w-full h-40 md:h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col p-6 md:p-8 flex-grow">
                  
                  {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#014458] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description - Always Visible */}
                <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Points List - Visible on Hover */}
                <div className={`transition-all duration-500 overflow-hidden mb-4
                  ${hoveredService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}>
                  <ul className="space-y-2 pt-4 border-t border-gray-200">
                    {service.points.slice(0, 4).map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-xs md:text-sm">
                        <span className="text-[#fdb124] font-bold mt-1 flex-shrink-0">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                    {service.points.length > 4 && (
                      <li className="text-gray-600 text-xs italic pt-1">
                        + {service.points.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                  {/* View Details Arrow */}
                  <div className={`flex items-center gap-2 mt-auto pt-4 transition-all duration-300
                    ${hoveredService === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                  `}>
                    <span className="text-[#014458] font-bold">→</span>
                    <span className="text-sm font-semibold text-[#014458]">View Details</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppReputationServicesDetailSection;
