'use client';

import React, { useState } from 'react';

const GamingAppAsoStrategiesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How is ASO different for mobile games compared to other apps?',
      answer: 'Mobile games rely much more heavily on visual and video creative than most other app categories, since players decide quickly based on gameplay footage and screenshots. Games also see far more intense genre-level keyword competition and benefit from frequent, event-based store listing updates tied to in-game content.'
    },
    {
      id: '2',
      question: 'How often should a mobile game update its store listing?',
      answer: 'More often than most app categories. Games that run live events, seasons, or content updates typically refresh screenshots and preview videos alongside major content drops, sometimes monthly, to keep the store listing aligned with current gameplay and avoid looking outdated.'
    },
    {
      id: '3',
      question: 'Do preview videos actually improve game conversion rates?',
      answer: 'Yes, generally. Gameplay preview videos let players see the core loop in action before installing, which tends to improve conversion compared to static screenshots alone, especially for genres where gameplay feel is hard to convey through images.'
    },
    {
      id: '4',
      question: 'How important is genre category in game ASO?',
      answer: 'Very important. Genre and sub-genre keywords often carry heavy competition from established titles with large user bases and marketing budgets. A realistic game ASO strategy usually targets specific sub-genre and mechanic-based long-tail keywords alongside broader genre terms.'
    },
    {
      id: '5',
      question: 'Should mobile games use Custom Product Pages and Custom Store Listings?',
      answer: 'Yes. Testing different creative sets and messaging for different user segments or ad campaigns through Apple Custom Product Pages and Google Play Custom Store Listings is one of the highest-leverage ASO tactics available to mobile games specifically.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach ASO for mobile games?',
      answer: 'ASOWin builds game-specific ASO strategies around high-frequency creative testing, video-first store listings, event-based keyword and asset updates, and genre-aware keyword targeting, rather than applying a generic ASO template built for non-gaming apps.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Mobile Game ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about App Store Optimization strategy for mobile games</p>
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

export default GamingAppAsoStrategiesFaq;
