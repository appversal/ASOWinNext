'use client';
import React from 'react';

const KeywordInstallsDeliverablesSection = () => {
  const deliverables = [
    'Keyword research and targeting',
    'Search ranking strategy',
    'Controlled install campaigns',
    'Keyword performance tracking',
    'Ranking improvement monitoring',
    'Search visibility analysis',
    'Competitor keyword benchmarking',
    'Ongoing campaign optimization'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-[#FFF4E6]">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Key Deliverables
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Everything included in our Keyword Install Services to ensure comprehensive ranking improvement and visibility growth.
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
              <div className="text-5xl font-bold text-[#014458] mb-3">100%</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">Organic Ranking Focus</p>
              <p className="text-gray-600">All campaigns optimized for sustainable search rankings without algorithm penalties</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#fdb124]/30 shadow-lg">
              <div className="text-5xl font-bold text-[#014458] mb-3">Real-time</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">Performance Tracking</p>
              <p className="text-gray-600">Monitor keyword rankings, install velocity, and search visibility continuously</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-[#fdb124]/30 shadow-lg">
              <div className="text-5xl font-bold text-[#014458] mb-3">Data-Driven</div>
              <p className="text-xl text-gray-700 font-semibold mb-2">Optimization</p>
              <p className="text-gray-600">Every campaign adjustment backed by keyword intelligence and market analysis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeywordInstallsDeliverablesSection;
