'use client';
import React from 'react';

const AppReputationASOConnection = () => {
  const impacts = [
    'Higher conversion rates',
    'Improved keyword rankings',
    'Increased user engagement',
    'Better retention signals',
    'Stronger search relevance',
    'More organic installs'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Reputation Management Supports ASO
            </h2>
            
            <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
              App reputation directly influences App Store Optimization performance.
            </p>

            <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
              Better reputation leads to:
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
          </div>

          {/* Right side - Visual */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-[#014458] to-[#0a2f3f] rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Why It Matters</h3>
              
              <p className="text-gray-300 leading-relaxed mb-8">
                Modern app store algorithms reward apps with healthy user engagement and strong review activity.
              </p>

              <div className="space-y-6">
                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-3xl font-bold text-[#fdb124] mb-2">Algorithm</div>
                  <p className="text-gray-300 text-sm">App stores now prioritize engagement signals</p>
                </div>

                <div className="border-b border-white border-opacity-20 pb-6">
                  <div className="text-3xl font-bold text-[#fdb124] mb-2">Trust</div>
                  <p className="text-gray-300 text-sm">Users check reviews before download decisions</p>
                </div>

                <div>
                  <div className="text-3xl font-bold text-[#fdb124] mb-2">Growth</div>
                  <p className="text-gray-300 text-sm">Strong reputation = higher conversion rates</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppReputationASOConnection;
