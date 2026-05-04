'use client';
import React, { useState } from 'react';

const ASOIndustriesSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      name: 'Fintech Apps',
      description: 'Payment solutions, banking, and financial management'
    },
    {
      name: 'Gaming Apps',
      description: 'Casual, mid-core, and hardcore game optimization'
    },
    {
      name: 'AI Applications',
      description: 'AI-powered tools and intelligent solutions'
    },
    {
      name: 'Health & Fitness Apps',
      description: 'Wellness, fitness tracking, and health monitoring'
    },
    {
      name: 'SaaS Platforms',
      description: 'Subscription and cloud-based solutions'
    },
    {
      name: 'EdTech Apps',
      description: 'Online learning and educational technology'
    },
    {
      name: 'E-commerce Platforms',
      description: 'Retail, shopping, and marketplace apps'
    },
    {
      name: 'Social Apps',
      description: 'Messaging, social networking, and communities'
    },
    {
      name: 'Utility Apps',
      description: 'Productivity, tools, and lifestyle utilities'
    },
    {
      name: 'Enterprise Solutions',
      description: 'B2B software and enterprise tools'
    }
  ];

  return (
    <section className="w-full py-6 md:py-8 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-block mb-4">
            
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[700px] mx-auto leading-relaxed">
            We provide tailored ASO solutions for diverse app categories and business models. No matter your industry, we've optimized apps like yours.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer
                ${hoveredCard === index
                  ? 'bg-gradient-to-br from-[#014458] to-[#0a2f3f] shadow-2xl scale-105 z-10'
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-lg'
                }
              `}
            >
              {/* Gradient Border Effect on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[#fdb124]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* Card Content */}
              <div className="relative p-8 h-full flex flex-col min-h-[180px]">
                
                {/* Number Badge */}
                <div className={`text-xs font-bold uppercase tracking-widest mb-4 transition-colors duration-300
                  ${hoveredCard === index ? 'text-[#fdb124]' : 'text-[#E06F00]'}
                `}>
                  0{index + 1}
                </div>

                {/* Industry Name */}
                <h3 className={`text-lg md:text-lg font-bold transition-colors duration-300 mb-4 flex-grow
                  ${hoveredCard === index ? 'text-white' : 'text-gray-900'}
                `}>
                  {industry.name}
                </h3>

                {/* Description - Visible on Hover */}
                <div className={`transition-all duration-500 overflow-hidden
                  ${hoveredCard === index ? 'max-h-20 opacity-100 mb-4' : 'max-h-0 opacity-0'}
                `}>
                  <p className={`text-xs leading-relaxed transition-colors duration-300
                    ${hoveredCard === index ? 'text-gray-200' : 'text-gray-600'}
                  `}>
                    {industry.description}
                  </p>
                </div>

                {/* Arrow Icon - Visible on Hover */}
                <div className={`inline-flex items-center gap-2 transition-all duration-500
                  ${hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
                `}>
                  <span className="text-[#fdb124] text-sm font-bold">→</span>
                  <span className={`text-xs font-semibold transition-colors duration-300
                    ${hoveredCard === index ? 'text-[#fdb124]' : 'text-gray-600'}
                  `}>
                    Learn more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffe8a8] to-[#feedcd]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#fdb124]/8 rounded-full blur-3xl" />
          
          <div className="relative p-8 md:p-16 text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              Don't see your industry listed?
            </h3>
            <p className="text-gray-700 text-base md:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
              We work across all app categories and business models. Let's discuss how strategic ASO can drive measurable growth for your unique app ecosystem.
            </p>
            <button className="bg-gray-900 hover:bg-gray-800 text-[#ffffff] font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base md:text-lg">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOIndustriesSection;
