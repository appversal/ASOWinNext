"use client";
import React from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13+
import Navbar from './Navbar';

const ServicesHero = () => {
  const router = useRouter(); // Initialize useRouter for navigation

  return (
    <div className="w-full bg-white">
      <Navbar />
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 gap-6 lg:gap-4">
          {/* Left side - Logo */}
          <div className="w-full lg:w-[45%] mb-4 lg:mb-0 flex-shrink-0">
            <div className="w-full max-w-[500px] mx-auto lg:mx-0">
              <img
                src="/Union1.png" // Using public folder path
                alt="Services Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-[55%] relative">
            {/* Decorative Stars */}
            <div className="hidden lg:block absolute w-4 h-4 -top-8 right-4 text-pink-500 text-2xl">★</div>
            <div className="hidden lg:block absolute w-4 h-4 -top-10 -left-12 text-yellow-400 text-2xl">★</div>
            <div className="hidden lg:block absolute w-4 h-4 bottom-0 right-2 text-blue-500 text-2xl">★</div>
            <div className="hidden lg:block absolute w-4 h-4 -bottom-12 left-1/2 text-blue-400 text-2xl">★</div>

            {/* Content */}
            <div className="text-center lg:text-left px-2 lg:px-0">
              <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 md:mb-6">
                <span className="block">App Store</span>
                <span className="block">Optimization Service</span>
              </h1>
              
              <p className="text-gray-700 text-base sm:text-lg md:text-lg max-w-[30rem] mx-auto lg:mx-0 mb-6 md:mb-8">
                We've handled ASO for some of the largest brands globally. We know ASO inside out.
              </p>
              
              <button 
                className="bg-[#fdb124] w-full sm:w-auto min-w-[200px] px-6 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors"
                onClick={() => router.push('/contact')} 
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
