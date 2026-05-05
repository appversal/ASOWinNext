'use client';
import React from 'react';

const KeywordInstallsWhyItMattersSection = () => {
  const benefits = [
    'Increase organic traffic',
    'Improve app discoverability',
    'Strengthen category authority',
    'Reduce dependency on paid acquisition',
    'Generate sustainable long-term growth',
    'Improve overall ASO performance'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Stats/Visual */}
          <div className="bg-gradient-to-br from-[#014458] to-[#0a2f3f] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-8">Search Visibility = Growth</h3>
            
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-[#fdb124] mb-2">85%</div>
                <p className="text-gray-300">Of app installs begin with search discovery</p>
              </div>
              
              <div className="border-t border-white/20 pt-6">
                <div className="text-3xl font-bold text-[#fdb124] mb-2">Top 5 Keywords</div>
                <p className="text-gray-300">Account for 40-60% of organic search traffic</p>
              </div>

              <div className="border-t border-white/20 pt-6">
                <div className="text-3xl font-bold text-[#fdb124] mb-2">3x-5x</div>
                <p className="text-gray-300">Higher CTR for top-ranked apps vs mid-position rankings</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Keyword Installs Matter
            </h2>
            
            <p className="text-lg text-gray-700 font-semibold mb-6">
              Most app downloads begin with search.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Higher keyword rankings help strengthen your app's market position and drive sustainable growth.
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
                Apps ranking in top search positions consistently receive significantly higher visibility and install opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordInstallsWhyItMattersSection;
