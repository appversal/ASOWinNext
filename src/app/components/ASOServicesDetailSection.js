'use client';
import React, { useState } from 'react';

const ASOServicesDetailSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Keyword Research & Strategy',
      image: '/services_images/keyword_research_and_strategy.png',
      description: 'We identify high-impact keywords that align with your category, audience behavior, and search intent.',
      points: [
        'High-volume keyword research',
        'Long-tail keyword targeting',
        'Competitor keyword gap analysis',
        'Search intent mapping',
        'Trending keyword discovery',
        'Semantic keyword clustering',
        'Localization keyword strategy'
      ],
      note: 'We continuously monitor keyword movement and adapt strategies based on market trends and algorithm updates.'
    },
    {
      title: 'App Metadata Optimization',
      image: '/services_images/app_metadata_optimization.png',
      description: 'Your app metadata directly impacts discoverability and rankings.',
      points: [
        'App Title',
        'Subtitle',
        'Short Description',
        'Long Description',
        'Promotional Text',
        'Keyword Fields',
        'Category Selection'
      ],
      note: 'Our approach balances keyword optimization with conversion-focused messaging to maximize both visibility and installs.'
    },
    {
      title: 'Competitor Analysis & Benchmarking',
      image: '/services_images/competitior_analysis_and_benchmarking.png',
      description: 'We analyze your competitors to uncover ranking opportunities and growth gaps.',
      points: [
        'Keyword positioning',
        'Ranking performance',
        'Metadata strategies',
        'Creative positioning',
        'Update frequency',
        'Review sentiment trends',
        'Feature comparison analysis'
      ],
      note: 'This allows us to build a smarter ASO roadmap based on real market intelligence.'
    },
    {
      title: 'AI-Driven ASO Insights',
      image: '/services_images/aidriven_aso_insights.png',
      description: 'Modern ASO requires constant adaptation.',
      points: [
        'Detect ranking opportunities',
        'Monitor keyword trends',
        'Analyze user behavior',
        'Predict performance shifts',
        'Track competitor movements',
        'Optimize search relevance'
      ],
      note: 'This enables faster decision-making and more effective optimization cycles.'
    },
    {
      title: 'Localization & International ASO',
      image: '/services_images/localization_and_international_iso.png',
      description: 'Expanding globally requires more than translation.',
      points: [
        'Region-specific keyword research',
        'Cultural messaging adaptation',
        'Local search behavior analysis',
        'Multi-language metadata optimization',
        'Country-specific ranking strategies'
      ],
      note: 'This helps improve visibility and install rates across international markets.'
    },
    {
      title: 'Performance Tracking & Reporting',
      image: '/services_images/performance_tracking_and_reporting.png',
      description: 'We provide transparent reporting with actionable insights.',
      points: [
        'Keyword ranking reports',
        'Organic growth tracking',
        'Search visibility analysis',
        'Competitor performance benchmarks',
        'Install trend analysis',
        'Metadata performance insights'
      ],
      note: 'Our reporting focuses on measurable growth and continuous optimization.'
    }
  ];

  return (
    <section className="w-full py-12 md:py-18 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our App Store Optimization Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Comprehensive ASO solutions designed to improve visibility and drive sustainable organic growth
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

                {/* Note - Visible on Hover */}
                {/* REMOVED */}

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

export default ASOServicesDetailSection;
