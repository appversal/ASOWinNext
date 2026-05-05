'use client';
import React from 'react';

const KeywordInstallsWhatIsSection = () => {
  const benefits = [
    'Improve keyword rankings',
    'Increase search relevance',
    'Strengthen organic discoverability',
    'Drive long-term organic traffic',
    'Improve category positioning'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Are Keyword Installs?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Keyword installs are installs generated through targeted keyword searches within app marketplaces.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When users search for specific terms and install your app, app store algorithms recognize your app as relevant for those keywords. Over time, this can improve your ranking position and increase search visibility.
            </p>

            <p className="text-lg text-gray-700 font-semibold mb-6">
              Keyword install strategies help:
            </p>

            <div className="space-y-3">
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

            <p className="text-lg text-gray-700 mt-8 leading-relaxed">
              In 2026, search intent and user relevance signals play a major role in app store ranking algorithms, making keyword optimization more important than ever.
            </p>
          </div>

          {/* Right Side - Highlight Box */}
          <div className="bg-gradient-to-br from-[#FFF4E6] to-[#FFE8D1] rounded-3xl p-8 md:p-12 border border-[#fdb124]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why It Matters
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Most app downloads begin with search. Higher keyword rankings consistently receive significantly higher visibility and install opportunities.
              </p>
              
              <div className="bg-white rounded-2xl p-4 border border-[#fdb124]/30">
                <p className="text-sm font-semibold text-[#014458] mb-2">Key Insight</p>
                <p className="text-gray-700">
                  Search visibility improvement leads to sustainable long-term growth without heavy paid acquisition dependency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordInstallsWhatIsSection;
