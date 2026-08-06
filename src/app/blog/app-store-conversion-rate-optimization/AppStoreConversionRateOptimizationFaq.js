'use client';

import React, { useState } from 'react';

const AppStoreConversionRateOptimizationFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is a good app store conversion rate?',
      answer: 'Conversion rates vary widely by category, but many apps see somewhere between 20 and 35 percent of listing views turn into installs. Apps with strong icons, clear screenshots, and healthy ratings often perform above that range, while weaker listings can fall well below it.'
    },
    {
      id: '2',
      question: 'Which element has the biggest impact on app store conversion?',
      answer: 'The app icon and the first two or three screenshots typically have the largest impact, since they are seen by every visitor within the first few seconds and determine whether a user keeps scrolling or decides to install right away.'
    },
    {
      id: '3',
      question: 'How do I A/B test my app store listing?',
      answer: 'On iOS, Apple\'s Product Page Optimization lets you test different icons, screenshots, and preview videos against a percentage of your traffic. On Android, Google Play\'s store listing experiments let you test different creative assets and description variants and measure the impact on conversion.'
    },
    {
      id: '4',
      question: 'Do ratings and reviews really affect conversion rate?',
      answer: 'Yes, significantly. Users consistently hesitate to install apps with low average ratings or a string of recent negative reviews, regardless of how strong the other creative assets are, making reputation management a core part of any conversion optimization plan.'
    },
    {
      id: '5',
      question: 'How long should I run an app store CRO test before deciding a winner?',
      answer: 'Most tests need enough traffic to reach statistical significance, which for smaller apps can mean two to four weeks. Ending a test too early based on a small sample size is one of the most common mistakes teams make when running listing experiments.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach app store conversion rate optimization?',
      answer: 'ASOWin runs a structured, ongoing testing program across icon, screenshots, video, and description, prioritized by expected impact, with every test measured against real conversion data rather than internal opinions about what looks best.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Store CRO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about app store conversion rate optimization</p>
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

export default AppStoreConversionRateOptimizationFaq;
