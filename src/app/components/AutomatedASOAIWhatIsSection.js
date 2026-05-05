'use client';
import React from 'react';

const AutomatedASOAIWhatIsSection = () => {
  const benefits = [
    'Respond to reviews faster',
    'Analyze user sentiment instantly',
    'Detect reputation risks early',
    'Improve engagement quality',
    'Strengthen rating performance',
    'Scale app store operations efficiently'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What is Automated ASO with AI?
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Automated ASO with AI uses intelligent systems and machine learning workflows to optimize app store engagement, reputation management, and user communication in real time.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Instead of relying on slow manual processes, AI-powered ASO helps:
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
              In 2026, AI-assisted engagement has become a critical factor for maintaining strong app visibility and user trust.
            </p>
          </div>

          {/* Right Side - Highlight Box */}
          <div className="bg-gradient-to-br from-[#FFF4E6] to-[#FFE8D1] rounded-3xl p-8 md:p-12 border border-[#fdb124]/20">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why AI Matters Now
            </h3>
            
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Modern app store optimization requires speed, scale, and intelligence that manual processes cannot provide.
              </p>
              
              <div className="bg-white rounded-2xl p-4 border border-[#fdb124]/30">
                <p className="text-sm font-semibold text-[#014458] mb-2">Key Insight</p>
                <p className="text-gray-700">
                  AI-powered systems can respond to thousands of reviews, analyze sentiment patterns, and optimize engagement automatically while maintaining authentic user relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomatedASOAIWhatIsSection;
