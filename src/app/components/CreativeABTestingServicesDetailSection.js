'use client';
import React from 'react';

const CreativeABTestingServicesDetailSection = () => {
  const services = [
    {
      title: 'App Icon Design & Testing',
      description: 'Your app icon is your first impression.',
      points: [
        'Stand out in crowded search results',
        'Improve click-through rates',
        'Align with your brand identity',
        'Increase recognition and memorability',
        'Adapt to regional audiences and categories',
        'Test multiple icon variations'
      ],
      note: 'We identify the highest-performing icon designs through rigorous testing.'
    },
    {
      title: 'Screenshot Design Optimization',
      description: 'Screenshots play a major role in conversion decisions.',
      points: [
        'High-converting screenshot layouts',
        'Benefit-focused messaging',
        'Platform-optimized visual structures',
        'Localized screenshot designs',
        'Story-driven user journeys',
        'Audience-specific creative variations'
      ],
      note: 'Every design is crafted to communicate value quickly and drive stronger install intent.'
    },
    {
      title: 'App Preview Video Optimization',
      description: 'Video previews help users understand your app experience instantly.',
      points: [
        'Capture user attention within seconds',
        'Highlight core app features',
        'Improve engagement and retention',
        'Increase conversion performance',
        'Support paid and organic campaigns',
        'Optimize for platform specifications'
      ],
      note: 'Our approach focuses on clarity, storytelling, and conversion-focused communication.'
    },
    {
      title: 'Localization-Focused Creative Design',
      description: 'Different markets respond to different visuals and messaging styles.',
      points: [
        'Region-specific messaging',
        'Cultural design adaptation',
        'Language-based visual optimization',
        'Audience behavior insights',
        'Country-specific conversion strategies',
        'Multi-market creative deployment'
      ],
      note: 'This helps improve relevance and install rates across international markets.'
    },
    {
      title: 'Data-Driven A/B Testing Strategy',
      description: 'We don\'t rely on assumptions — we rely on performance data.',
      points: [
        'Multiple creative variations',
        'User behavior analysis',
        'CTR performance tracking',
        'Conversion rate benchmarking',
        'Audience segmentation testing',
        'Iterative optimization cycles'
      ],
      note: 'We continuously refine creatives based on real user interactions to maximize conversion efficiency.'
    },
    {
      title: 'Performance Analytics & Reporting',
      description: 'Complete transparency on creative performance and impact.',
      points: [
        'Creative performance dashboards',
        'CTR and conversion tracking',
        'A/B test result analysis',
        'Audience response insights',
        'Competitor creative benchmarking',
        'Monthly optimization recommendations'
      ],
      note: 'Detailed reporting helps guide future design and optimization strategies.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Creative Optimization Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Comprehensive creative solutions designed to improve conversions and drive app growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-[#fdb124] hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Points List */}
              <div className="mb-6">
                <ul className="space-y-2">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="text-[#fdb124] font-bold mt-1 flex-shrink-0">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-xs md:text-sm italic">
                  {service.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeABTestingServicesDetailSection;
