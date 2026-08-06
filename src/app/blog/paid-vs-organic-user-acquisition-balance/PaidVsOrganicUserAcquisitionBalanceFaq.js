'use client';

import React, { useState } from 'react';

const PaidVsOrganicUserAcquisitionBalanceFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Should a new app start with paid or organic user acquisition?',
      answer: 'Most new apps need some paid spend early because organic rankings take time to build without an install and engagement history. However, paid spend should be paired with strong metadata and creative from day one, so early paid installs also help establish keyword ranking signals rather than existing in isolation.'
    },
    {
      id: '2',
      question: 'Does paid user acquisition actually improve organic rankings?',
      answer: 'Paid installs themselves are not a direct ranking factor on either store, but the behavior around them matters. Higher install velocity, stronger conversion rates, and improved retention from well-targeted paid campaigns can indirectly support organic visibility, especially when paid traffic lands on a well-optimized store listing.'
    },
    {
      id: '3',
      question: 'What percentage of budget should go to paid versus organic ASO?',
      answer: 'There is no universal ratio. Early-stage apps often run 60 to 80 percent paid while organic rankings build. Mature apps with strong organic visibility often flip that ratio, investing more in ASO, retention, and conversion optimization while using paid channels for specific campaigns or new market entry.'
    },
    {
      id: '4',
      question: 'What is the risk of relying too heavily on paid user acquisition?',
      answer: 'Over-reliance on paid channels creates a growth model that stops the moment budget stops. It also tends to mask weaknesses in the core store listing and conversion funnel, since paid campaigns can drive volume even when the listing itself is underperforming for organic search traffic.'
    },
    {
      id: '5',
      question: 'How does ASOWin decide the right paid to organic ratio for a client?',
      answer: 'We look at current keyword ranking strength, category competitiveness, retention data, and growth stage. From there we build a phased budget model that shifts spend toward organic-supporting activities like ASO and reputation management as organic rankings mature, while keeping paid channels active for high-intent segments.'
    },
    {
      id: '6',
      question: 'Can organic ASO work alone without any paid acquisition?',
      answer: 'It can, particularly for apps in less competitive categories or with strong existing brand awareness, but it is usually slower. Most apps benefit from at least some paid activity to accelerate visibility in competitive categories, launch in new geographies faster, or test messaging before rolling it out organically.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Paid vs Organic UA: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about balancing paid and organic user acquisition</p>
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

export default PaidVsOrganicUserAcquisitionBalanceFaq;
