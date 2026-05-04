'use client';
import React from 'react';

const ASOWhyChooseSection = () => {
  const reasons = [
    {
      icon: '/why_asowin_icons/analysis.png',
      title: 'Data-Driven Optimization',
      description: 'Every ASO decision is backed by analytics, research, and performance insights.'
    },
    {
      icon: '/why_asowin_icons/earth.png',
      title: 'Global ASO Expertise',
      description: 'We manage App Store and Play Store optimization for apps across multiple industries and regions.'
    },
    {
      icon: '/why_asowin_icons/ai.png',
      title: 'AI-Assisted Strategies',
      description: 'We combine human expertise with intelligent optimization systems for scalable growth.'
    },
    {
      icon: '/why_asowin_icons/growth.png',
      title: 'Long-Term Organic Growth',
      description: 'Our focus is sustainable visibility, stronger rankings, and consistent install growth.'
    },
    {
      icon: '/why_asowin_icons/roadmap.png',
      title: 'End-to-End ASO Management',
      description: 'From strategy and optimization to monitoring and reporting — we handle the complete ASO process.'
    },
    {
      icon: '/why_asowin_icons/log.png',
      title: 'Proven Track Record',
      description: 'We\'ve driven billions of organic downloads and helped 500+ apps scale successfully.'
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
            We deliver strategic, results-driven ASO that transforms app visibility and drives sustainable growth
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#fdb124] hover:shadow-lg transition-all duration-300 text-center md:text-left"
            >
              <img src={reason.icon} alt={reason.title} className="w-16 h-16 mb-4 object-contain" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ASOWhyChooseSection;
