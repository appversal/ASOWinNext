'use client';

import React, { useState } from 'react';

const BestASOAgencyGrowthFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What does an ASO agency do?',
      answer: 'An ASO agency helps apps improve visibility, rankings, and conversions on the Apple App Store and Google Play Store. This usually includes keyword research, metadata optimization, screenshot strategy, review management, competitor tracking, and performance reporting.'
    },
    {
      id: '2',
      question: 'What makes ASOWin different from other ASO agencies?',
      answer: 'ASOWin combines ASO strategy, creative optimization, reputation management, custom listing planning, keyword tracking, and paid growth alignment. We focus on improving the full app store funnel, not just adding keywords.'
    },
    {
      id: '3',
      question: 'How long does ASO take to show results?',
      answer: 'ASO is usually an ongoing process. Some improvements, such as conversion changes from better screenshots, may show results faster. Keyword ranking and organic growth improvements often require consistent testing, tracking, and iteration over several weeks or months.'
    },
    {
      id: '4',
      question: 'Is ASO only for new apps?',
      answer: 'No. ASO is useful for new apps, growing apps, and established apps. New apps need a strong launch foundation, while existing apps often need ranking improvement, conversion optimization, review management, and category expansion.'
    },
    {
      id: '5',
      question: 'Why should I choose ASOWin as my ASO agency?',
      answer: 'You should choose ASOWin if you want a full-service ASO partner that understands both App Store and Play Store growth. We help apps improve discoverability, trust, conversion, and long-term organic performance.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Growth ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about choosing the best ASO agency for app growth</p>
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

export default BestASOAgencyGrowthFaq;
