'use client';
import React from 'react';

const KeywordInstallsWhyChooseSection = () => {
  const features = [
    {
      title: 'Data-Driven Keyword Strategy',
      description: 'Every campaign is backed by keyword intelligence and market analysis.'
    },
    {
      title: 'Sustainable Ranking Growth',
      description: 'We focus on long-term visibility and stable ranking improvements.'
    },
    {
      title: 'Advanced Tracking Systems',
      description: 'Real-time monitoring helps optimize performance continuously.'
    },
    {
      title: 'App Store & Play Store Expertise',
      description: 'Platform-specific strategies tailored for modern ranking algorithms.'
    },
    {
      title: 'Growth-Focused Execution',
      description: 'Our campaigns are designed to improve discoverability, installs, and organic scale.'
    },
    {
      title: 'Transparent Reporting',
      description: 'Detailed insights into keyword performance, ranking movement, and search visibility gains.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Why Choose ASOWin?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strategic keyword install campaigns designed for sustainable ranking improvement
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-200 hover:border-[#014458] transition-all duration-300 hover:shadow-xl bg-white hover:bg-gradient-to-br hover:from-[#FFF4E6] hover:to-white"
            >
              {/* Icon */}
              <div className="mb-4 w-12 h-12 flex items-center justify-center bg-[#fdb124]/10 rounded-lg group-hover:bg-[#fdb124] transition-all">
                <svg className="w-6 h-6 text-[#fdb124] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#014458] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordInstallsWhyChooseSection;
