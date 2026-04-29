'use client';

import Image from 'next/image';

const CaseStudy7Stats = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-100 min-h-[500px]">
      {/* Left Section */}
      <div className="w-full md:w-[45%] bg-zinc-900 p-6 md:p-12 flex flex-col justify-center">
        <div className="space-y-6">
          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold mb-1">500+</div>
            <div className="text-white text-[22px]">FTDs/Month</div>
          </div>
          <br />

          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold font-serif mb-1">🎯</div>
            <div className="text-white text-[22px]">Top Performer</div>
          </div>
          <br />

          <div>
            <div className="text-white text-3xl md:text-5xl lg:text-[65px] font-semibold font-serif mb-1">📈</div>
            <div className="text-white text-[22px]">Multi-Channel</div>
          </div>
        </div>
      </div>

      {/* Right Section - Placeholder */}
      <div className="w-full md:w-[55%] bg-gray-200 p-6 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-2xl h-96 bg-gray-300 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-lg">Placeholder Image</span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy7Stats;
