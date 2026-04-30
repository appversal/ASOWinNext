"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';

const ReviewRepliesHero = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-gradient-to-b from-[#FFF4E6] to-[#FFFFFF]">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between pt-8 pb-4 md:pt-12 md:pb-8 lg:pt-16 lg:pb-8">
          {/* Left side - Content */}
          <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">

            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] font-bold leading-tight mb-4 md:mb-6 text-[#111111]">
                <span className="block">Be the Brand</span>
                <span className="block">That Always Responds</span>
              </h1>

              <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-[35rem] mx-auto lg:mx-0 mb-4 md:mb-6">
                Intelligent automation powered by AI. Every review answered in 10 minutes. Perfect brand voice. Every single time.
              </p>

              <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-[35rem] mx-auto lg:mx-0 mb-8 md:mb-10">
                No manual agents. No ongoing costs. Just intelligent, always-on reputation management.
              </p>

              <button
                className="bg-[#fdb124] w-full sm:w-auto min-w-[200px] px-6 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-medium"
                onClick={() => router.push('/contact')}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right side - Illustration */}
          <div className="w-full lg:w-1/2 flex lg:justify-end mt-12 lg:mt-0">
            <div className="w-full max-w-[550px] mx-auto lg:ml-auto lg:mr-0 relative h-[420px] sm:h-[600px] lg:h-[650px] flex items-center justify-center">
              {/* Abstract Background Blobs */}
              <div className="absolute top-1/4 left-1/4 w-40 h-40 sm:w-64 sm:h-64 bg-[#fdb124]/10 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-70 animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#FFB366]/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-[#FFD9B3]/20 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>

              <div className="relative w-full max-w-[340px] sm:max-w-full mx-auto h-full transform scale-[0.9] sm:scale-100 origin-center">
                {/* Card 1 - Background Left */}
                <div className="absolute top-[8%] left-[0%] w-[90%] sm:w-[320px] bg-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgb(0,0,0,0.06)] border border-gray-200 transform -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">JD</div>
                    <div>
                      <div className="flex text-[#FFB800] text-sm">
                        {[...Array(4)].map((_, i) => <span key={i}>★</span>)}<span className="text-gray-300">★</span>
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">Google Play • 5m ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
                    "Love it! Works perfectly but crashes occasionally."
                  </p>
                  <div className="bg-[#FFF9F3] border border-[#FFD9B3] rounded-xl p-3 relative ml-4">
                    <div className="absolute -left-3 top-3 w-6 h-6 bg-[#fdb124] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-[#fdb124] mb-1">AI Response</p>
                    <p className="text-xs text-gray-700">We're sorry about the crashes! Please contact support so we can fix this.</p>
                  </div>
                </div>

                {/* Card 2 - Foreground Right */}
                <div className="absolute top-[32%] right-[0%] w-[95%] sm:w-[340px] bg-white rounded-2xl p-4 sm:p-5 shadow-[0_30px_60px_rgb(0,0,0,0.12)] border border-gray-200 transform rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 z-30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-bold text-pink-600">SM</div>
                    <div>
                      <div className="flex text-[#FFB800] text-sm">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">App Store • Just now</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
                    "Great app! But needs better UI and dark mode support."
                  </p>
                  <div className="bg-[#FFF9F3] border border-[#FFD9B3] rounded-xl p-3.5 relative ml-4">
                    <div className="absolute -left-3 top-3 w-6 h-6 bg-[#fdb124] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-xs font-bold text-[#fdb124]">AI Response</p>
                      <span className="text-[10px] font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Sent in 2s</span>
                    </div>
                    <p className="text-sm text-gray-800">Hi there! Thanks for the feedback. We're actually working on dark mode right now! Stay tuned.</p>
                  </div>
                </div>

                {/* Card 3 - Background Bottom Left */}
                <div className="absolute bottom-[2%] left-[5%] w-[90%] sm:w-[300px] bg-white rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgb(0,0,0,0.08)] border border-gray-200 transform -rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-300 z-20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">AL</div>
                    <div>
                      <div className="flex text-[#FFB800] text-sm">
                        {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                      </div>
                      <p className="text-[10px] text-gray-400 mt-0.5">App Store • 1h ago</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
                    "Best tool I've used this year."
                  </p>
                  <div className="bg-[#FFF9F3] border border-[#FFD9B3] rounded-xl p-3 relative ml-4">
                    <div className="absolute -left-3 top-3 w-6 h-6 bg-[#fdb124] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-xs font-bold text-[#fdb124] mb-1">AI Response</p>
                    <p className="text-xs text-gray-700">Thank you so much! We're thrilled you're enjoying it.</p>
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

export default ReviewRepliesHero;
