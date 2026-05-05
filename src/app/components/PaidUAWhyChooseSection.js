'use client';
import React from 'react';

const PaidUAWhyChooseSection = () => {
  const features = [
    {
      title: 'Performance-Driven Campaigns',
      description: 'Every strategy is designed to maximize growth and acquisition efficiency.'
    },
    {
      title: 'ASO + Paid Growth Expertise',
      description: 'We align paid acquisition with organic optimization for stronger results.'
    },
    {
      title: 'Advanced Optimization Systems',
      description: 'Continuous monitoring and refinement improve campaign performance over time.'
    },
    {
      title: 'Data-Backed Decision Making',
      description: 'Campaigns are guided by analytics, attribution, and performance insights.'
    },
    {
      title: 'Sustainable Growth Focus',
      description: 'We prioritize high-quality user acquisition and long-term scalability.'
    },
    {
      title: 'Expert Campaign Management',
      description: 'Hands-on management across Apple Search Ads, Google App Campaigns, and more.'
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
            Strategic paid acquisition expertise combined with app store optimization excellence
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
                  <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 101-1h-1a1 1 0 101 1v1zM15.657 14.243a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM5.757 15.657a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM2 10a1 1 0 101 1H2a1 1 0 10-1-1v1zM5.757 4.343a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707z" />
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

export default PaidUAWhyChooseSection;
