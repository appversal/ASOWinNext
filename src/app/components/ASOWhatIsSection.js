'use client';
import React from 'react';

const ASOWhatIsSection = () => {
  const benefits = [
    'Rank higher for relevant keywords',
    'Increase organic downloads',
    'Improve search visibility',
    'Reach high-intent users',
    'Strengthen long-term app growth'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What is App Store Optimization?
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
              App Store Optimization (ASO) is the process of improving your app's visibility and conversion performance within app marketplaces.
            </p>

            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              A strong ASO strategy helps your app:
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#fdb124]">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
              In 2026, ASO goes beyond keywords — it combines search optimization, user intent analysis, and algorithm-driven growth strategies to improve app performance across every stage of the discovery journey.
            </p>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-[#ffe8a8] to-[#feedcd] rounded-2xl p-8 md:p-12 text-gray-900">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">ASO Drives Results</h3>
              
              <div className="space-y-6">
                <div className="border-b border-gray-300 border-opacity-40 pb-6">
                  <div className="text-4xl font-bold text-[#fdb124] mb-2">3-6</div>
                  <p className="text-gray-700">Months to see significant results</p>
                </div>

                <div className="border-b border-gray-300 border-opacity-40 pb-6">
                  <div className="text-4xl font-bold text-[#fdb124] mb-2">50%+</div>
                  <p className="text-gray-700">Average keyword ranking improvement</p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-[#fdb124] mb-2">3-5x</div>
                  <p className="text-gray-700">ROI compared to paid acquisition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOWhatIsSection;
