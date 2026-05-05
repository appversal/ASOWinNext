'use client';
import React from 'react';

const AutomatedASOAIWhyMattersSection = () => {
  const benefits = [
    'Increase install conversion rates',
    'Improve app store rankings',
    'Strengthen user trust',
    'Reduce negative review impact',
    'Improve retention signals',
    'Scale engagement efficiently',
    'Support long-term organic growth'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats/Visual */}
          <div className="bg-gradient-to-br from-[#014458] to-[#0a2f3f] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">AI Delivers Results</h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-[#fdb124] mb-2">10x Faster</div>
                <p className="text-gray-300">Response times compared to manual review management</p>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <div className="text-3xl font-bold text-[#fdb124] mb-2">24/7 Monitoring</div>
                <p className="text-gray-300">Continuous reputation tracking and sentiment analysis</p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="text-3xl font-bold text-[#fdb124] mb-2">Scalable</div>
                <p className="text-gray-300">Manage thousands of reviews without additional resources</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Automated ASO Matters
            </h2>
            
            <p className="text-lg text-gray-700 font-semibold mb-6">
              Apps with stronger ratings and active engagement consistently perform better in app marketplaces.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              AI-powered ASO helps you scale your reputation management while maintaining authentic user relationships.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#fdb124]">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-[#FFF4E6] rounded-2xl border border-[#fdb124]/20">
              <p className="text-gray-900 font-semibold">
                Higher ratings directly influence user acquisition and download performance across app stores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedASOAIWhyMattersSection;
