'use client';
import React from 'react';

const AppReputationRatingsTransform = () => {
  const renderStars = (rating) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="py-16 lg:py-24 bg-white px-6 sm:px-12 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Transform <span className="text-[#014458]">Your Brand</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From struggling with poor ratings to building a trusted, thriving app community. See what's possible with strategic reputation management.
          </p>
        </div>

        {/* Transformation Card */}
        <div className="relative max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-red-50 via-gray-50 to-green-50 rounded-3xl border-2 border-gray-200 p-8 md:p-16 shadow-xl">
            {/* Before State */}
            <div className="text-center md:text-left md:border-r-2 md:border-gray-300 md:pr-12">
              <div className="inline-flex items-center gap-2 mb-6 bg-red-100 text-red-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                Your App Today
              </div>

              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-6">Without Reputation Management</h3>
              
              <div className="mb-6">
                <div className="text-7xl font-black text-red-600 leading-none mb-4">2.8</div>
                <div className="flex justify-center md:justify-start mb-4">{renderStars(2.8)}</div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1 font-semibold">Reviews</div>
                  <div className="text-2xl font-bold text-gray-900">~800</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2 font-semibold">User Sentiment</div>
                  <div className="inline-block bg-red-200 text-red-800 px-4 py-2 rounded-full text-xs font-bold">
                    Negative & Critical
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-red-500 to-green-500 rounded-full w-20 h-20 flex items-center justify-center shadow-2xl animate-pulse">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#fdb124]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* After State */}
            <div className="text-center md:text-right md:pl-12">
              <div className="inline-flex items-center gap-2 mb-6 bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Your Brand Future
              </div>

              <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-widest mb-6">With ASOWin Strategy</h3>
              
              <div className="mb-6">
                <div className="text-7xl font-black text-green-600 leading-none mb-4">4.7</div>
                <div className="flex justify-center md:justify-end mb-4">{renderStars(4.7)}</div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1 font-semibold">Reviews</div>
                  <div className="text-2xl font-bold text-gray-900">5,600+</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2 font-semibold">User Sentiment</div>
                  <div className="inline-block bg-green-200 text-green-800 px-4 py-2 rounded-full text-xs font-bold">
                    Positive & Enthusiastic
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 text-lg mb-6">Ready to transform your app's reputation?</p>
          <button className="bg-[#fdb124] hover:bg-[#e09910] text-white font-bold py-4 px-8 rounded-full transition-colors text-lg">
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppReputationRatingsTransform;
