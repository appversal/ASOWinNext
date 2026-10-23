'use client';

import React, { useState } from 'react';

const IosVsAndroidAsoDifferencesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is the biggest difference between iOS and Android ASO?',
      answer: 'The biggest difference is how keywords are indexed. The App Store relies on a dedicated hidden keyword field alongside the name and subtitle, while Google Play indexes keywords from the title, short description, and the full long description text.'
    },
    {
      id: '2',
      question: 'Do Apple and Google use the same ranking algorithm?',
      answer: 'No. Apple and Google both weigh keyword relevance, download velocity, engagement, and ratings, but they apply different weightings and update their algorithms on their own timelines, which means a keyword that ranks well on one store may not perform the same way on the other.'
    },
    {
      id: '3',
      question: 'What are Custom Product Pages and Custom Store Listings?',
      answer: 'Custom Product Pages on the App Store and Custom Store Listings on Google Play both let you create variant versions of your store listing for different traffic sources or audience segments, so you can tailor creative and messaging without changing your default listing.'
    },
    {
      id: '4',
      question: 'Should I use the same screenshots on both stores?',
      answer: 'You can start from the same creative concept, but screenshot dimensions, safe zones, and even user expectations differ between the two stores, so screenshots typically need platform-specific adjustments rather than a direct one-to-one copy.'
    },
    {
      id: '5',
      question: 'Does the review and rating system work the same way on both platforms?',
      answer: 'Both platforms let users leave star ratings and written reviews, and developers can respond to reviews on each, but the prompts, review request timing rules, and how prominently ratings display on the listing differ between Apple and Google.'
    },
    {
      id: '6',
      question: 'Can one team run ASO for both platforms effectively?',
      answer: 'Yes, but the strategy needs to branch by platform rather than applying one identical playbook. A single ASO program can absolutely manage both stores well as long as keyword mapping, metadata, and creative testing are built separately for each.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">iOS vs Android ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about platform-specific App Store Optimization</p>
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

export default IosVsAndroidAsoDifferencesFaq;
