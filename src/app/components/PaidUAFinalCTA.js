'use client';
import React from 'react';

const PaidUAFinalCTA = () => {
  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-r from-[#014458] to-[#0a2f3f] text-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Accelerate App Growth With Smarter Paid Acquisition
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Paid growth should do more than generate installs — it should create sustainable momentum.
        </p>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          ASOWin helps apps scale visibility, improve acquisition efficiency, and maximize ROI through strategic paid user acquisition and search advertising campaigns.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-[#fdb124] hover:bg-[#e09910] text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
            Get Started Today
          </button>
          <button className="border-2 border-[#fdb124] text-[#fdb124] hover:bg-[#fdb124] hover:text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
            Schedule Demo
          </button>
        </div>

        <p className="text-lg text-gray-300">
          <span className="text-[#fdb124] font-semibold">Reach the right users faster</span> with performance-focused app growth strategies.
        </p>
      </div>
    </section>
  );
};

export default PaidUAFinalCTA;
