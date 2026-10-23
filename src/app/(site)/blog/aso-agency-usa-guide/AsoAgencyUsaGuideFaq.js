'use client';

import React, { useState } from 'react';

const AsoAgencyUsaGuideFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Why does the US app market need a different ASO approach than other regions?',
      answer: 'The US app market is one of the most competitive in the world, with high category saturation, an iOS-first premium user base, strict rating and review expectations, and consumers who compare apps quickly before installing. Generic global ASO strategies often underperform against apps built specifically around these dynamics.'
    },
    {
      id: '2',
      question: 'Is the App Store or Google Play more important for US ASO strategy?',
      answer: 'Both matter, but the iPhone holds a larger share of the US smartphone market than in most other major economies, making Apple App Store optimization, including Apple Search Ads and Custom Product Pages, especially important for apps targeting American users, without neglecting Google Play.'
    },
    {
      id: '3',
      question: 'How important are reviews and ratings for apps in the US market?',
      answer: 'Extremely important. US consumers are highly influenced by star ratings and recent review content before installing, and they expect brands to respond to negative feedback professionally and quickly. Weak review management is one of the fastest ways to lose conversion in this market.'
    },
    {
      id: '4',
      question: 'How competitive is ASO in the United States compared to other countries?',
      answer: 'The US consistently ranks among the most competitive app markets globally across nearly every category, from finance to gaming to productivity. Keyword difficulty tends to be higher, and category leaders are typically well-funded, well-optimized, and actively testing their listings.'
    },
    {
      id: '5',
      question: 'What does ASOWin do differently for apps targeting the US market?',
      answer: 'We combine deep keyword research calibrated to US search behavior, iOS-first creative and metadata strategy, proactive review and rating management, and coordinated paid and organic acquisition planning built around how competitive American categories actually behave.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ASO for the US Market: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about App Store Optimization for the United States</p>
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

export default AsoAgencyUsaGuideFaq;
