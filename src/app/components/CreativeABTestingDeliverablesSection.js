'use client';
import React from 'react';

const CreativeABTestingDeliverablesSection = () => {
  const deliverables = [
    'Eye-catching app icons',
    'High-converting screenshot designs',
    'Localized creative assets',
    'Preview video optimization',
    'Multiple creative test variations',
    'CTR and conversion analysis',
    'Creative performance reporting',
    'Ongoing design optimization'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Key Deliverables
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Included in Our Creative Optimization Services
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#fdb124] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#fdb124]">
                    <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-700 font-medium">{deliverable}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-[#fdb124] to-[#E06F00] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Transform Your App Store Visuals?</h3>
          <p className="text-white text-center max-w-[600px] mx-auto mb-6">
            Let's discuss how strategic creative design and A/B testing can drive higher conversions and accelerate your app's growth.
          </p>
          <button className="bg-white hover:bg-gray-100 text-[#fdb124] font-bold py-3 px-8 rounded-full transition-colors">
            Start Your Creative Optimization
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeABTestingDeliverablesSection;
