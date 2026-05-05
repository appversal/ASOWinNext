'use client';
import React from 'react';

const PaidUAWhatIsSection = () => {
  const benefits = [
    'Reach high-intent audiences',
    'Increase app visibility',
    'Drive faster install growth',
    'Improve keyword visibility',
    'Scale user acquisition efficiently',
    'Support long-term ASO performance'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is Paid User Acquisition?
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Paid User Acquisition (UA) is the process of acquiring app users through targeted advertising campaigns across app stores, search networks, and digital advertising platforms.
            </p>

            <p className="text-lg text-gray-700 font-semibold mb-6">
              These campaigns help apps:
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#fdb124] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Highlight Box */}
          <div className="bg-gradient-to-br from-[#FFF4E6] to-[#FFE8D1] rounded-2xl p-8 md:p-12 border border-[#fdb124]/20">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Key Insight</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              In 2026, successful app growth depends on combining paid acquisition with strong organic optimization strategies.
            </p>
            <p className="text-gray-700">
              By aligning paid campaigns with App Store Optimization strategies, we create sustainable growth systems that improve both visibility and long-term user acquisition performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidUAWhatIsSection;
