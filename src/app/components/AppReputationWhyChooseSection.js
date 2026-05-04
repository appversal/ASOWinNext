'use client';
import React from 'react';

const AppReputationWhyChooseSection = () => {
  const reasons = [
    {
      icon: '🤖',
      title: 'AI-Assisted Reputation Intelligence',
      description: 'Smarter monitoring and faster response systems powered by modern AI workflows.'
    },
    {
      icon: '👥',
      title: 'Real User-Centric Engagement',
      description: 'We focus on authentic communication that builds trust and loyalty.'
    },
    {
      icon: '⚡',
      title: 'Faster Response Management',
      description: 'Timely review responses improve both perception and retention.'
    },
    {
      icon: '📊',
      title: 'Data-Driven Insights',
      description: 'Every strategy is backed by sentiment analytics and performance tracking.'
    },
    {
      icon: '🏆',
      title: 'Long-Term Brand Trust',
      description: 'We help apps create sustainable reputations that support long-term growth.'
    },
    {
      icon: '✨',
      title: 'Proven Track Record',
      description: 'We\'ve managed reputation for 500+ apps with average rating improvements to 4.5+ stars.'
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
            We deliver strategic reputation management that builds lasting trust and drives app growth
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
            Ready to Build a Stronger App Reputation?
          </h3>
          <p className="text-gray-300 mb-6 max-w-[600px] mx-auto">
            Let's discuss how we can improve your app's ratings, build user trust, and drive long-term growth through strategic reputation management.
          </p>
          <button className="bg-[#fdb124] hover:bg-[#e09910] text-white font-bold py-3 px-8 rounded-full transition-colors">
            Schedule Your Reputation Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppReputationWhyChooseSection;
