'use client';
import React, { useState } from 'react';

const CreativeDesignShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('icons');

  const showcaseData = {
    icons: {
      title: 'App Icons That Stand Out',
      description: 'Bold, memorable icons that increase tap-through rates by 45% on average',
      examples: [
        { name: 'Finance App', style: 'Gradient Blue', improvement: '+52% CTR' },
        { name: 'Wellness App', style: 'Minimalist Green', improvement: '+38% CTR' },
        { name: 'Gaming App', style: 'Dynamic Red', improvement: '+67% CTR' },
      ],
    },
    screenshots: {
      title: 'Screenshots Built for Conversion',
      description: 'Story-driven screenshots that highlight key features and benefits',
      examples: [
        { name: 'E-commerce', style: 'Product-focused', improvement: '+41% Installs' },
        { name: 'Productivity', style: 'Feature-showcase', improvement: '+55% Installs' },
        { name: 'Social', style: 'Community-driven', improvement: '+48% Installs' },
      ],
    },
    videos: {
      title: 'Preview Videos That Engage',
      description: '15-30 second videos optimized for mobile viewers with instant impact',
      examples: [
        { name: 'Action Game', style: 'Fast-paced', improvement: '+73% CVR' },
        { name: 'Learning App', style: 'Educational flow', improvement: '+44% CVR' },
        { name: 'Fitness', style: 'Motivational', improvement: '+59% CVR' },
      ],
    },
  };

  const categories = ['icons', 'screenshots', 'videos'];
  const current = showcaseData[activeCategory];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#014458]/5 to-white px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Design <span className="text-[#014458]">Excellence</span> Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Each design is crafted for maximum conversion. Explore our creative portfolio and see what's possible.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${
                activeCategory === cat
                  ? 'bg-[#014458] text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">{current.title}</h3>
          <p className="text-lg text-gray-600 mb-8">{current.description}</p>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.examples.map((example, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-[#fdb124] transition-all duration-300 bg-gradient-to-br from-gray-50 to-white p-8 hover:shadow-xl"
              >
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#fdb124] opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity"></div>

                <div className="relative z-10">
                  {/* Design Mockup Placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-[#014458]/20 to-[#fdb124]/20 rounded-lg mb-6 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#014458]/50" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                    </svg>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-2">{example.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{example.style}</p>

                  {/* Impact Badge */}
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-green-100 to-green-50 text-green-700 text-sm font-bold rounded-full">
                    {example.improvement}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#014458] to-[#0a2d3a] rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-3">See How Creative Testing Can Transform Your App</h3>
          <p className="text-gray-100 mb-6 max-w-2xl mx-auto">
            Get a free creative audit and discover which design elements are holding your app back from higher conversions.
          </p>
          <button className="px-8 py-3 bg-[#fdb124] text-[#014458] font-bold rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg">
            Request Creative Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreativeDesignShowcase;
