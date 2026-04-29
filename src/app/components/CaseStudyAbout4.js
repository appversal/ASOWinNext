'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const CaseStudyAbout4 = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* About Section - 40% */}
      <div className="w-full md:w-[40%] bg-[#EEE1DA] p-8 md:p-12 lg:p-16">
        <h2 className="text-4xl md:text-5xl lg:text-[50px] text-[#7D6D54] font-serif font-bold mb-6">
          ABOUT
        </h2>
        <p className="text-[#858285] lg:max-w-[400px] text-base font-medium md:text-[18px] leading-loose">
          A leading fintech platform that provides innovative financial services to millions of users across Asia. Focused on delivering seamless digital banking experiences and investment solutions for modern consumers.
        </p>

        {/* ASOWin Card */}
        <div className="bg-white rounded-xl p-6 mt-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-[#FDB124]">ASO<span className='text-[#FFD36F]'>Win</span></span> 
          </h3>
          <h4 className="text-xl md:text-2xl font-bold mb-1">
            Want to achieve similar results?
          </h4>
          <p className="text-[#434343] font-[13px] mb-4">Book a call with ASOWin</p>
          <button
            className="bg-[#FD5F03] text-white px-6 py-2 rounded-full text-sm hover:bg-[#FF6347] transition-colors"
            onClick={() => {
              router.push('/contact');
              window.scrollTo(0, 0);
            }}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>

      {/* Strategy Section - 60% */}
      <div className="w-full md:w-[60%] bg-white p-8 md:p-12 lg:p-16">
        <div className="flex items-center gap-3 mb-8">
          <img className='h-8 w-8' src="/bulb.png" alt="Strategy Icon" />
          <h2 className="text-3xl md:text-4xl lg:text-[36px] text-[#7D6D54] font-bold font-serif">
            STRATEGY
          </h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">1. Market-Specific Optimization:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Analyzed regional market trends and user behavior across multiple countries.</li>
              <li>Implemented localized keywords and metadata for maximum regional reach.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">2. Conversion Rate Optimization:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Conducted extensive A/B testing on screenshots, icons, and promotional materials.</li>
              <li>Optimized app store listing for maximum conversion rates.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">3. Rating & Review Management:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Implemented proactive review management strategy across both platforms.</li>
              <li>Maintained high app ratings through consistent user engagement.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-[#333333] font-semibold mb-4">4. Data-Driven Competitor Analysis:</h3>
            <ul className="list-disc ml-6 space-y-3 text-[18px] font-medium text-[#858285]">
              <li>Continuously monitored competitor strategies and market positioning.</li>
              <li>Adjusted tactics based on real-time market insights.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyAbout4;
