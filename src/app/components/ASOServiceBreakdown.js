'use client';
import React, { useState } from 'react';

const ASOServiceBreakdown = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Keyword Research & Analysis',
      icon: '🔍',
      shortDescription: 'Identify high-performing keywords for your target markets',
      fullDescription: 'Our advanced keyword research tools analyze search volume, competition, and relevance across multiple app store markets. We identify:',
      details: [
        'High-volume keywords with lower competition',
        'Long-tail keywords that convert better',
        'Competitor keyword analysis',
        'Seasonal and trending keyword opportunities',
        'Keyword performance tracking over time'
      ],
      results: ['50% increase in ranked keywords', '3x improvement in search visibility']
    },
    {
      id: 2,
      title: 'Metadata Optimization',
      icon: '✏️',
      shortDescription: 'Perfect your app name, subtitle, description, and more',
      fullDescription: 'We optimize every textual element of your app store listing to maximize visibility and appeal:',
      details: [
        'App name and subtitle optimization',
        'Compelling description writing with keyword integration',
        'Keyword field optimization (iOS)',
        'App preview text refinement',
        'Regular metadata updates based on performance'
      ],
      results: ['2x increase in click-through rate', '35% improvement in conversion rate']
    },
    {
      id: 3,
      title: 'Creative A/B Testing',
      icon: '🎨',
      shortDescription: 'Design and test visuals that convert',
      fullDescription: 'Our in-house creative team designs stunning app store visuals and rigorously tests them:',
      details: [
        'Professional app screenshot design',
        'Preview video production',
        'App icon design and optimization',
        'A/B testing with statistical significance',
        'Unlimited design variations and revisions',
        'Multi-variant testing across regions'
      ],
      results: ['40% average conversion uplift', '5x ROI on creative testing']
    },
    {
      id: 4,
      title: 'Reputation Management',
      icon: '⭐',
      shortDescription: 'Build and maintain a positive app reputation',
      fullDescription: 'Maintain high ratings and positive user sentiment with our proven reputation management strategies:',
      details: [
        'Rating and review monitoring',
        'Automated review collection system',
        'Professional review response templates',
        '5-star review encouragement strategies',
        'Negative review management',
        'Rating trend analysis and improvement'
      ],
      results: ['Maintain 4.5+ star rating', '3x more positive reviews received']
    },
    {
      id: 5,
      title: 'Localization & Global Expansion',
      icon: '🌍',
      shortDescription: 'Expand successfully into new markets',
      fullDescription: 'Launch your app globally with culturally adapted, market-specific optimizations:',
      details: [
        'Professional translations to 50+ languages',
        'Market-specific keyword research',
        'Cultural adaptation of creatives and messaging',
        'Regional pricing strategy',
        'Localized app store category selection',
        'Market-specific A/B testing'
      ],
      results: ['100%+ growth in new markets', 'Successful launches in 50+ countries']
    },
    {
      id: 6,
      title: 'Performance Analytics & Reporting',
      icon: '📊',
      shortDescription: 'Track and understand your ASO performance',
      fullDescription: 'Complete transparency with detailed analytics and actionable insights:',
      details: [
        'Real-time keyword ranking tracking',
        'Download and revenue trend analysis',
        'Conversion rate monitoring',
        'Competitor benchmarking',
        'Monthly performance reports',
        'Custom dashboard access'
      ],
      results: ['Daily insights and updates', '95% accuracy in performance tracking']
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Deep Dive Into Each Service
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Explore each component of our comprehensive ASO approach
          </p>
        </div>

        {/* Services Accordion */}
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#fdb124]"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                className="w-full px-6 md:px-8 py-6 flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4 text-left">
                  <span className="text-3xl md:text-4xl">{service.icon}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{service.shortDescription}</p>
                  </div>
                </div>
                <div className={`text-2xl text-[#fdb124] flex-shrink-0 transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </button>

              {/* Expanded Content */}
              {expandedService === service.id && (
                <div className="px-6 md:px-8 py-6 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 mb-4">{service.fullDescription}</p>
                  
                  {/* Details List */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-[#fdb124] font-bold mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="bg-gradient-to-r from-[#014458] to-[#0a2f3f] rounded-lg p-4 text-white">
                    <h4 className="font-semibold mb-2">Expected Results:</h4>
                    <ul className="space-y-1 text-sm">
                      {service.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#fdb124]">→</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 bg-[#fdb124] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Which Services Are Right For Your App?
          </h3>
          <p className="text-gray-100 mb-6 max-w-[600px] mx-auto">
            Every app is unique. Let's discuss which ASO services will deliver the best ROI for your goals.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#fdb124] font-bold py-3 px-8 rounded-full transition-colors">
            Schedule Your Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ASOServiceBreakdown;
