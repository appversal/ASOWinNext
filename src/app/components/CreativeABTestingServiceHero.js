'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

const CreativeABTestingServiceHero = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-16">
          {/* Content */}
          <div className="w-full relative">
            {/* Text Content */}
            <div className="text-center flex flex-col items-center mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gray-900 whitespace-nowrap">
                Creative A/B Testing & Design
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fdb124] mb-6">
                Design That Converts Visitors Into Installs
              </h2>
              
              <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
                Your app's visuals are the first thing users notice on the App Store and Google Play. In highly competitive marketplaces, strong creative assets can be the difference between a scroll and an install.
              </p>

              <p className="text-gray-600 text-base sm:text-lg max-w-[700px] mx-auto mb-8">
                At ASOWin, we create and optimize high-performing app store creatives designed to improve click-through rates, increase conversions, and maximize download growth. Through strategic design systems and data-driven A/B testing, we help brands identify the visual combinations that drive the best performance.
              </p>
              
              <button 
                className="bg-[#fdb124] w-full sm:w-auto min-w-[200px] px-6 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-semibold mb-8"
                onClick={() => router.push('/contact')} 
              >
                Get Your Creative Audit
              </button>
            </div>

            {/* A/B Testing Visualization Below Text */}
            <div className="w-full flex justify-center mt-12 px-4 md:px-6">
              <div className="relative w-full max-w-5xl">
                {/* A/B Testing Visualization */}
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl border-2 border-gray-200 p-12 shadow-2xl">
                  {/* Header */}
                  <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4 bg-gradient-to-r from-[#fdb124] to-[#E06F00] text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      A/B Testing
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Testing What Works</h3>
                  </div>

                  {/* A/B Comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 px-4 md:px-12 max-w-4xl mx-auto">
                    {/* Version A */}
                    <div className="relative group">
                      <div className="absolute -top-4 left-6 bg-white px-3 py-1 text-xs font-bold text-[#014458] uppercase tracking-wider">Version A</div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-6 md:p-8 border-2 border-gray-200 group-hover:border-blue-400 transition-colors h-full">
                        <div className="space-y-3 mb-6">
                          <div className="h-28 md:h-32 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl" />
                          <div className="h-3 bg-gray-300 rounded w-3/4" />
                          <div className="h-3 bg-gray-300 rounded w-1/2" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-blue-600">8.2%</div>
                          <p className="text-sm text-gray-600 font-medium">CTR</p>
                        </div>
                      </div>
                    </div>

                    {/* Version B */}
                    <div className="relative group">
                      <div className="absolute -top-4 right-6 bg-white px-3 py-1 text-xs font-bold text-[#E06F00] uppercase tracking-wider">Version B</div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-6 md:p-8 border-2 border-[#fdb124] shadow-lg group-hover:shadow-xl transition-shadow h-full">
                        <div className="space-y-3 mb-6">
                          <div className="h-28 md:h-32 bg-gradient-to-br from-[#fdb124] to-[#E06F00] rounded-xl" />
                          <div className="h-3 bg-gray-300 rounded w-3/4" />
                          <div className="h-3 bg-gray-300 rounded w-1/2" />
                        </div>
                        <div className="text-center">
                          <div className="text-2xl md:text-3xl font-bold text-[#E06F00]">12.4%</div>
                          <p className="text-sm text-gray-600 font-medium">CTR</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-bold text-gray-700">Performance Improvement</span>
                      <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">+51% Better</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-[#fdb124] to-[#E06F00] h-full rounded-full" style={{width: '51%'}} />
                    </div>
                  </div>

                  {/* Key Insight */}
                  <div className="bg-gradient-to-r from-[#fdb124]/10 to-[#E06F00]/10 rounded-2xl p-6 border border-[#fdb124]/30">
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-[#E06F00] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zm-11-1a1 1 0 11-2 0 1 1 0 012 0zM8 8a1 1 0 000 2h6a1 1 0 100-2H8zm0 4a1 1 0 100 2h3a1 1 0 100-2H8z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Smart Testing Insight</p>
                        <p className="text-sm text-gray-600">Data-driven creative variations tested to find what resonates with your audience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeABTestingServiceHero;
