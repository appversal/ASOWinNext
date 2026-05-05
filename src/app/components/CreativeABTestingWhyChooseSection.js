'use client';
import React from 'react';

const CreativeABTestingWhyChooseSection = () => {
  const reasons = [
    {
      icon: '🎨',
      title: 'Conversion-Focused Design',
      description: 'Every visual asset is built to improve installs and engagement.'
    },
    {
      icon: '📊',
      title: 'Data-Backed Testing',
      description: 'Creative decisions are guided by real performance insights, not guesswork.'
    },
    {
      icon: '🔧',
      title: 'Platform-Specific Optimization',
      description: 'We optimize separately for Apple App Store and Google Play behaviors.'
    },
    {
      icon: '🌍',
      title: 'Localization Expertise',
      description: 'Creatives are adapted for regional audiences and international growth.'
    },
    {
      icon: '🔄',
      title: 'Continuous Optimization',
      description: 'We continuously test and refine creatives to maximize long-term performance.'
    },
    {
      icon: '✨',
      title: 'In-House Design Team',
      description: 'Professional designers with proven app store creative experience.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Why Choose ASOWin?
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            We deliver strategic creative design and testing that drives measurable results
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#fdb124] hover:shadow-lg transition-all duration-300 text-center md:text-left"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#014458] to-[#0a2f3f] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create High-Converting App Store Creatives?
          </h3>
          <p className="text-gray-300 mb-6 max-w-[600px] mx-auto">
            Let's discuss your app's visual strategy and how we can help you improve conversions through strategic creative design and A/B testing.
          </p>
          <button className="bg-[#fdb124] hover:bg-[#e09910] text-white font-bold py-3 px-8 rounded-full transition-colors">
            Schedule Your Creative Strategy Session
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeABTestingWhyChooseSection;
