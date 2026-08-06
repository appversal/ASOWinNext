'use client';

import React, { useState } from 'react';

const GooglePlayCustomStoreListingsGuideFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is a Google Play custom store listing?',
      answer: 'A custom store listing lets you create a variant of your Play Store page, including graphics, screenshots, videos, and description text, that is shown to a specific audience segment based on country, traffic source, or user acquisition campaign, instead of the default listing every visitor sees.'
    },
    {
      id: '2',
      question: 'How many custom store listings can I create on Google Play?',
      answer: 'Google Play allows a limited number of active custom store listings per app, and the exact cap has changed over time as Google expands the feature. At ASOWin, we prioritize the highest-impact segments first, typically top install-volume countries and highest-spend paid traffic sources, so every listing slot is used productively.'
    },
    {
      id: '3',
      question: 'Is a custom store listing the same as a Store Listing Experiment?',
      answer: 'No. A custom store listing is a targeted, always-on variant shown to a defined audience. A Store Listing Experiment is a temporary A/B test that splits traffic to compare two or more variants of your listing to find a statistically stronger version before you commit to it.'
    },
    {
      id: '4',
      question: 'How long should a Play Store listing experiment run?',
      answer: 'Most experiments need at least one to two weeks of consistent traffic to reach statistical significance, depending on your daily store visitor volume. Low-traffic apps may need several weeks. Ending a test early on partial data is one of the most common mistakes we see brands make.'
    },
    {
      id: '5',
      question: 'Can custom store listings hurt my organic keyword rankings?',
      answer: 'No, when set up correctly. Custom store listings target a segment without altering the main listing that most organic searchers land on. At ASOWin, we keep the default listing optimized for broad keyword relevance while using custom listings purely for segment-specific conversion gains.'
    },
    {
      id: '6',
      question: 'Do custom store listings work for Apple App Store apps too?',
      answer: 'Apple has an equivalent feature called Custom Product Pages, along with Product Page Optimization for A/B testing. The underlying strategy of tailoring creative to specific audiences is similar, but the setup, tracking links, and testing mechanics differ from Google Play.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Custom Store Listings: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about Google Play custom store listings and experiments</p>
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

export default GooglePlayCustomStoreListingsGuideFaq;
