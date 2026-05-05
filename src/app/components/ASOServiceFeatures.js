'use client';
import React from 'react';

const ASOServiceFeatures = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Keyword Research & Strategy',
      description: 'Discover high-volume, low-competition keywords your target audience is searching for. Our proprietary keyword research tools identify opportunities competitors miss.',
    },
    {
      icon: '📊',
      title: 'Metadata Optimization',
      description: 'Strategically optimize your app name, subtitle, description, and keywords to improve visibility and click-through rates on both App Store and Google Play.',
    },
    {
      icon: '🎨',
      title: 'Creative A/B Testing',
      description: 'Our in-house design team creates compelling app screenshots, preview videos, and icons. We A/B test every creative to maximize conversion rates.',
    },
    {
      icon: '⭐',
      title: 'Reputation Management',
      description: 'Maintain high ratings and positive reviews. We implement proven strategies to increase 5-star reviews and respond to user feedback professionally.',
    },
    {
      icon: '🌍',
      title: 'Localization & Global Expansion',
      description: 'Expand into new markets with fully localized app store listings. We handle translations, cultural adaptation, and market-specific optimization.',
    },
    {
      icon: '📈',
      title: 'Performance Analytics',
      description: 'Receive comprehensive, transparent reporting on all your ASO metrics. Track keyword rankings, download trends, and conversion improvements in real-time.',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our ASO Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            We provide comprehensive app store optimization services designed to maximize your downloads and increase user engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 hover:border-[#fdb124] transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#014458] to-[#0a2f3f] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your App Store Performance?</h3>
          <p className="text-gray-300 mb-6 max-w-[600px] mx-auto">
            Join 500+ successful apps that have grown with ASOWin. Get a free ASO audit and personalized growth strategy.
          </p>
          <button className="bg-[#fdb124] hover:bg-[#e09910] text-white font-bold py-3 px-8 rounded-full transition-colors">
            Get Your Free ASO Audit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ASOServiceFeatures;
