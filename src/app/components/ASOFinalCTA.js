'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const ASOFinalCTA = () => {
  const router = useRouter();

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-[#014458] via-[#0a2f3f] to-[#014458]">
      <div className="max-w-[1440px] mx-auto text-center text-white">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Ready to Grow Your App Organically?
        </h2>
        
        <p className="text-gray-300 text-base md:text-lg max-w-[700px] mx-auto mb-6 leading-relaxed">
          Whether you're launching a new app or scaling an existing product, ASOWin helps you improve discoverability, strengthen rankings, and drive long-term organic growth through strategic App Store Optimization.
        </p>

        <p className="text-[#fdb124] text-lg md:text-xl font-semibold mb-8">
          Get your app discovered by the right users
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            className="bg-[#fdb124] hover:bg-[#e09910] text-gray-900 font-bold py-4 px-8 rounded-full transition-colors text-base md:text-lg"
            onClick={() => router.push('/contact')}
          >
            Start Your ASO Journey
          </button>
          <button 
            className="border-2 border-[#fdb124] text-[#fdb124] hover:bg-[#fdb124] hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-colors text-base md:text-lg"
            onClick={() => router.push('/success-stories')}
          >
            View Success Stories
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-12 pt-12 border-t border-white border-opacity-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#fdb124] mb-2">500+</div>
            <p className="text-gray-300">Apps Optimized</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#fdb124] mb-2">2B+</div>
            <p className="text-gray-300">Organic Downloads</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#fdb124] mb-2">50+</div>
            <p className="text-gray-300">Markets & Regions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOFinalCTA;
