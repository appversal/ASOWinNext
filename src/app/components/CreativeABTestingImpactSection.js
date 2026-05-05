'use client';
import React from 'react';

const CreativeABTestingImpactSection = () => {
  const impacts = [
    'Increase click-through rates',
    'Improve install conversion rates',
    'Strengthen user engagement',
    'Boost organic rankings',
    'Improve paid campaign efficiency',
    'Reduce acquisition costs',
    'Increase revenue potential'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Why Creative Testing Matters
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              Modern app stores reward apps that convert effectively. Optimized creatives help:
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {impacts.map((impact, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#fdb124]">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg font-medium">{impact}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-700 text-base md:text-lg font-medium mt-8">
              Small visual improvements can create significant growth at scale.
            </p>
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-[#014458] to-[#0a2f3f] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Creative Performance</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-4xl font-bold text-[#fdb124] mb-2">50%+</div>
                  <p className="text-gray-300">Average CTR improvement from optimized creatives</p>
                </div>

                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-4xl font-bold text-[#fdb124] mb-2">45%+</div>
                  <p className="text-gray-300">Conversion rate lift from winning creatives</p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-[#fdb124] mb-2">Unlimited</div>
                  <p className="text-gray-300">Creative variations & testing cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeABTestingImpactSection;
