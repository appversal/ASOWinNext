'use client';

import React, { useState } from 'react';

const WhyASOWinFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What services does ASOWin offer?',
      answer: 'ASOWin offers full-service ASO, keyword research, metadata optimization, creative testing, screenshot strategy, app reputation management, custom listing planning, competitor tracking, and paid growth alignment.'
    },
    {
      id: '2',
      question: 'Is ASOWin only for large apps?',
      answer: 'No. ASOWin works for apps at different stages, including new launches, growing apps, and established brands. The strategy depends on the app’s category, goals, and current performance.'
    },
    {
      id: '3',
      question: 'Can ASOWin help improve app ratings?',
      answer: 'Yes. ASOWin helps with app reputation management, review response strategy, sentiment tracking, and rating improvement planning.'
    },
    {
      id: '4',
      question: 'Does ASOWin work on both App Store and Play Store?',
      answer: 'Yes. ASOWin works across both the Apple App Store and Google Play Store with platform-specific strategies.'
    },
    {
      id: '5',
      question: 'Why should I choose ASOWin as my ASO agency?',
      answer: 'You should choose ASOWin if you want an ASO partner that focuses on complete app growth, including rankings, conversions, reviews, creatives, custom listings, and long-term organic performance.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Why ASOWin: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about ASOWin and why we are built for your app growth</p>
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

export default WhyASOWinFaq;
