'use client';

import React, { useState } from 'react';

const BestASOAgencyPlayStoreFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is Play Store ASO?',
      answer: 'Play Store ASO is the process of improving an Android app\'s visibility and conversion on Google Play. It includes keyword optimization, metadata updates, creative improvements, ratings and reviews, and performance tracking.'
    },
    {
      id: '2',
      question: 'What is the most important part of Play Store ASO?',
      answer: 'There is no single part that works alone. Keywords, metadata, screenshots, ratings, reviews, retention, and conversion all matter. A strong ASO strategy improves the complete listing experience.'
    },
    {
      id: '3',
      question: 'Does Google Play use the long description for ASO?',
      answer: 'The long description is an important part of Play Store optimization because it helps explain the app, communicate benefits, and include relevant keywords naturally. Unlike the App Store, Google Play indexes the long description, making it a valuable field for keyword visibility.'
    },
    {
      id: '4',
      question: 'Can ASOWin help with custom store listings?',
      answer: 'Yes. ASOWin helps apps plan custom store listings for different keywords, audiences, countries, campaigns, and traffic sources. Custom store listings allow brands to create more relevant store experiences for different user segments.'
    },
    {
      id: '5',
      question: 'Why is ASOWin a good ASO agency for Android apps?',
      answer: 'ASOWin understands Play Store ranking, metadata, creative conversion, review management, custom listings, and app growth strategy. We help Android apps improve both visibility and installs through a complete, data-driven Play Store ASO system.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Play Store ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about finding the best ASO agency for Play Store optimization</p>
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

export default BestASOAgencyPlayStoreFaq;
