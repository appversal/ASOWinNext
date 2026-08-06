'use client';

import React, { useState } from 'react';

const AppleSearchAdsVsOrganicAsoFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Does running Apple Search Ads improve my organic App Store ranking?',
      answer: 'Apple Search Ads do not directly boost organic keyword rankings, but there is a well-documented indirect relationship. Paid installs contribute to overall download velocity and keyword-specific conversion data, both of which are signals Apple\'s organic search algorithm also considers, so a well-run campaign can support organic visibility over time.'
    },
    {
      id: '2',
      question: 'Should I bid on keywords I already rank organically for?',
      answer: 'In many cases yes, particularly for high-value branded or competitive terms. Owning both the top ad slot and a strong organic position increases total screen real estate for that search, reduces the chance a competitor\'s ad appears above your organic listing, and typically improves overall conversion for that keyword.'
    },
    {
      id: '3',
      question: 'How should I split budget between Apple Search Ads and organic ASO efforts?',
      answer: 'A practical approach is to fund organic ASO work, such as metadata, creative testing, and reputation management, as a fixed ongoing investment, then treat Apple Search Ads budget as flexible and tied to measurable ROAS targets. Organic ASO compounds over time and lowers your effective cost per install everywhere, including paid.'
    },
    {
      id: '4',
      question: 'Can Apple Search Ads data help my organic keyword strategy?',
      answer: 'Yes. Search Ads reporting shows exactly which search terms are driving impressions, taps, and installs at the keyword level, which is far more precise than most organic rank tracking tools. This data is one of the most reliable ways to validate which keywords are worth prioritizing in your organic metadata.'
    },
    {
      id: '5',
      question: 'What happens to my organic ranking if I stop running Apple Search Ads?',
      answer: 'Your organic ranking should not drop simply because paid campaigns stop, since Apple keeps paid and organic ranking systems fundamentally separate. However, if paid traffic was contributing meaningfully to your total download velocity, the loss of that volume could indirectly soften some of the momentum signals that support organic visibility.'
    },
    {
      id: '6',
      question: 'Is it worth running Apple Search Ads if my organic ASO is already strong?',
      answer: 'Often yes, particularly for defending high-value branded terms from competitor bidding and for capturing additional volume on keywords where organic ranking alone is not enough. Strong organic ASO actually makes paid spend more efficient, since users landing from ads see a listing that is already optimized to convert.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Apple Search Ads and Organic ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about combining paid and organic App Store strategy</p>
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

export default AppleSearchAdsVsOrganicAsoFaq;
