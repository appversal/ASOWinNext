'use client';
import React from 'react';

const AppReputationIndustriesSection = () => {
  const industries = [
    { name: 'Fintech Apps', icon: '💳', color: 'from-blue-50 to-blue-100', borderColor: 'hover:border-blue-400' },
    { name: 'Gaming Platforms', icon: '🎮', color: 'from-purple-50 to-purple-100', borderColor: 'hover:border-purple-400' },
    { name: 'Health & Wellness Apps', icon: '🏥', color: 'from-red-50 to-red-100', borderColor: 'hover:border-red-400' },
    { name: 'AI Applications', icon: '🤖', color: 'from-cyan-50 to-cyan-100', borderColor: 'hover:border-cyan-400' },
    { name: 'E-commerce Apps', icon: '🛍️', color: 'from-orange-50 to-orange-100', borderColor: 'hover:border-orange-400' },
    { name: 'SaaS Platforms', icon: '☁️', color: 'from-green-50 to-green-100', borderColor: 'hover:border-green-400' },
    { name: 'EdTech Products', icon: '📚', color: 'from-indigo-50 to-indigo-100', borderColor: 'hover:border-indigo-400' },
    { name: 'Utility Apps', icon: '🔧', color: 'from-slate-50 to-slate-100', borderColor: 'hover:border-slate-400' },
    { name: 'Enterprise Applications', icon: '🏢', color: 'from-gray-50 to-gray-100', borderColor: 'hover:border-gray-400' }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Industries We Support
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[700px] mx-auto">
            We provide app reputation management services for diverse app categories and business models
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${industry.color} rounded-2xl p-6 md:p-8 border-2 border-gray-200 ${industry.borderColor} transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden`}
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdb124]/10 to-[#E06F00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                
                {/* Industry Name */}
                <p className="text-gray-900 font-bold text-base md:text-lg leading-snug group-hover:text-[#014458] transition-colors duration-300">
                  {industry.name}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fdb124] to-[#E06F00] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#fdb124] via-[#E09910] to-[#E06F00] p-0">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Don't see your industry?
            </h3>
            <p className="text-white/90 text-base md:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
              We work across all app categories. Let's discuss how reputation management can drive growth for your unique app ecosystem.
            </p>
            <button className="inline-block bg-white text-[#E06F00] font-bold px-8 py-3 md:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppReputationIndustriesSection;
