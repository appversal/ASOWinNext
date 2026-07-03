'use client';

import React, { useState } from 'react';

const BestASOAgencyFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is App Store ASO?',
      answer: 'App Store ASO is the process of improving an iOS app\'s visibility and conversion on the Apple App Store. It includes keyword strategy, app name, subtitle, keyword field, screenshots, ratings, reviews, and product page optimization.'
    },
    {
      id: '2',
      question: 'Why is App Store ASO different from Play Store ASO?',
      answer: 'The App Store and Google Play Store use different listing fields, ranking systems, and optimization tools. A good ASO strategy should be tailored separately for iOS and Android. For example, iOS has a 100-character keyword field while Google Play uses the full description for indexing. Visual asset requirements, A/B testing tools, and category structures also differ significantly between the two platforms.'
    },
    {
      id: '3',
      question: 'Do screenshots matter for App Store ASO?',
      answer: 'Yes. Screenshots are one of the most important conversion assets on the App Store. They help users quickly understand the app\'s value and decide whether to install. Many users do not scroll past the first few screenshots, so the initial visual story must communicate the strongest reasons to install. A good screenshot set does not just show the app—it sells the app\'s value.'
    },
    {
      id: '4',
      question: 'Can ASOWin help with custom product pages?',
      answer: 'Yes. ASOWin can help plan custom product pages for different campaigns, audiences, features, and user intents. Custom product pages allow iOS apps to create different versions of their App Store product page for different audiences. For example, a travel app can create one page for flight booking and another for hotel deals. ASOWin helps brands decide when custom product pages make sense and how to connect them with ads, campaigns, and user intent.'
    },
    {
      id: '5',
      question: 'Why should iOS apps choose ASOWin?',
      answer: 'iOS apps should choose ASOWin because we combine keyword strategy, product page optimization, creative testing, review management, and competitor tracking into one complete App Store growth system. We do not stop at metadata. We work across the full product page experience, including app name and subtitle strategy, screenshot conversion, ratings and reviews, custom product pages, and performance reporting.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Store ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about finding the best ASO agency for App Store optimization</p>
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

export default BestASOAgencyFaq;
