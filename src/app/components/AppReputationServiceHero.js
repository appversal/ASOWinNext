'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

const AppReputationServiceHero = () => {
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
                App Reputation Management
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fdb124] mb-6">
                Build Trust. Improve Ratings. Strengthen User Loyalty.
              </h2>
              
              <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
                Your app's reputation directly impacts installs, retention, and long-term growth.
              </p>

              <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
                At ASOWin, we help brands manage and improve their app reputation across the Apple App Store and Google Play Store through intelligent review management, sentiment analysis, user engagement strategies, and AI-powered response systems.
              </p>

              <p className="text-gray-600 text-base sm:text-lg max-w-[700px] mx-auto mb-8">
                A strong reputation doesn't just improve perception — it improves conversion rates, keyword rankings, user trust, and overall app performance.
              </p>
              
              <button 
                className="bg-[#fdb124] w-full sm:w-auto min-w-[200px] px-6 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-semibold mb-8"
                onClick={() => router.push('/contact')} 
              >
                Get Started
              </button>
            </div>

            {/* App Reputation Visualization Below Text - TEMPORARILY COMMENTED OUT */}
            {/* 
            <div className="w-full flex justify-center mt-12 px-4 md:px-6">
              <div className="relative w-full max-w-3xl">
                Mobile phones visualization commented out for production
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppReputationServiceHero;
