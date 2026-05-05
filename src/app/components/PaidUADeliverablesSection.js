'use client';
import React from 'react';

const PaidUADeliverablesSection = () => {
  const deliverables = [
    'Apple Search Ads management',
    'Google App Campaign optimization',
    'Campaign setup and scaling',
    'Bid and keyword optimization',
    'Audience targeting strategy',
    'Creative performance optimization',
    'ROI tracking and reporting',
    'Continuous campaign monitoring'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Deliverables
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Everything included in our Paid Acquisition Services to ensure comprehensive reputation management and sustainable growth.
            </p>

            <div className="space-y-4">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-[#fdb124]">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{deliverable}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-[#fdb124]/30 shadow-lg">
              <div className="text-5xl font-bold text-[#014458] mb-3">3.2x</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">Average ROAS</p>
              <p className="text-gray-600">Based on client performance metrics</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#fdb124]/30 shadow-lg">
              <div className="text-5xl font-bold text-[#014458] mb-3">42%</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">CPI Reduction</p>
              <p className="text-gray-600">Average cost-per-install improvement</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#fdb124]/30 shadow-lg">
              <div className="text-5xl font-bold text-[#014458] mb-3">24/7</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">Campaign Monitoring</p>
              <p className="text-gray-600">Real-time optimization and tracking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidUADeliverablesSection;
