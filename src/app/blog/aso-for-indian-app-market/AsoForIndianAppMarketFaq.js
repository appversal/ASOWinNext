'use client';

import React, { useState } from 'react';

const AsoForIndianAppMarketFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Why is Google Play more important than the App Store in India?',
      answer: 'Android holds a dominant share of the smartphone market in India, meaning the vast majority of app discovery and installs happen through Google Play. This makes Play Store optimization, including title, description, and keyword strategy, the primary ASO priority for apps targeting Indian users.'
    },
    {
      id: '2',
      question: 'Does app size actually affect rankings and installs in India?',
      answer: 'App size strongly affects install completion in India, where many users have limited storage and slower or metered mobile data connections. Google Play surfaces app size prominently, and a bloated app can lose installs before a user ever opens the listing fully, regardless of how well it ranks.'
    },
    {
      id: '3',
      question: 'How many languages should an app localize for in India?',
      answer: 'It depends on your target audience, but Hindi alongside English typically covers the largest combined user base. Apps targeting broader reach often add regional languages such as Tamil, Telugu, Bengali, or Marathi based on where their specific user base concentrates, rather than localizing for every listed Indian language at once.'
    },
    {
      id: '4',
      question: 'Are Indian app store users more price-sensitive than users in other markets?',
      answer: 'Generally yes. Price sensitivity is a significant factor in the Indian market, which affects how in-app purchase messaging, subscription tiers, and free trial structures should be presented in store listings and screenshots to avoid discouraging installs before users even try the app.'
    },
    {
      id: '5',
      question: 'What ASO mistakes do apps commonly make when entering the Indian market?',
      answer: 'Common mistakes include treating India as a single homogeneous market without regional language consideration, ignoring app size in creative and technical planning, using pricing messaging calibrated to Western markets, and underestimating how competitive Android ASO has become across major Indian app categories.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach ASO for apps entering the Indian market?',
      answer: 'We prioritize Google Play strategy given Android dominance, build localization plans around the specific regional languages relevant to each client, factor app size directly into technical and creative recommendations, and calibrate monetization messaging to Indian price sensitivity and purchasing behavior.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ASO for India: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about App Store Optimization for the Indian app market</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className="border-b border-gray-200 py-4"
          >
            <div
              className="flex justify-between items-start cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
            >
              <div className="flex items-start gap-4 flex-1">
                <span className="text-[#014458] font-medium text-lg mt-1 flex-shrink-0">{faq.id}.</span>
                <h3 className="text-gray-800 font-medium text-[16px] leading-relaxed">{faq.question}</h3>
              </div>
              <div className="ml-4 flex-shrink-0">
                <span className="text-[#014458] text-lg font-light">
                  {openItem === faq.id ? '−' : '+'}
                </span>
              </div>
            </div>

            {openItem === faq.id && (
              <div className="mt-4 ml-10 text-gray-600 text-[15px] leading-relaxed pb-4">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AsoForIndianAppMarketFaq;
