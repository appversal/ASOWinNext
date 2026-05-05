'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

const ASOServiceHero = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center justify-center py-8 md:py-12 lg:py-20 px-4 sm:px-6 lg:px-16">
          {/* Content */}
          <div className="w-full max-w-[900px] relative">
            {/* Content */}
            <div className="text-center flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 md:mb-6 text-gray-900 whitespace-nowrap">
                App Store Optimization (ASO)
              </h1>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#fdb124] mb-6">
                Rank Higher. Get More Installs. Scale Organically.
              </h2>
              
              <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-[700px] mx-auto mb-8 leading-relaxed">
                At ASOWin, we help apps improve visibility, increase organic installs, and dominate search rankings through strategic optimization across the Apple App Store and Google Play Store.
              </p>

              <p className="text-gray-600 text-base sm:text-lg max-w-[700px] mx-auto mb-8">
                We work with startups, scale-ups, and global brands to maximize discoverability and reduce dependency on paid acquisition channels.
              </p>
              
              <button 
                className="bg-[#fdb124] w-full sm:w-auto min-w-[200px] px-6 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-semibold"
                onClick={() => router.push('/contact')} 
              >
                Let's Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ASOServiceHero;
