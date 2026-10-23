'use client';

import React, { useState } from 'react';

const CustomProductPagesAppleGuideFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What are Apple Custom Product Pages?',
      answer: 'Custom Product Pages, or CPPs, let developers create up to 35 additional variants of their App Store product page, each with its own screenshots, video previews, and app icon, while keeping the same app description and metadata. Each variant gets a unique URL that can be used in specific marketing campaigns or ad sources.'
    },
    {
      id: '2',
      question: 'How many Custom Product Pages can I create?',
      answer: 'Apple allows up to 35 Custom Product Pages per app at any given time, in addition to the default product page. Most teams do not need anywhere close to that number and instead focus on 3 to 6 high-intent variants tied to their most important acquisition channels or audience segments.'
    },
    {
      id: '3',
      question: 'Do Custom Product Pages affect App Store search rankings?',
      answer: 'Custom Product Pages do not appear in organic App Store search results and do not directly influence keyword rankings. They are used exclusively for traffic you direct to them, such as paid ads, social links, or email campaigns. Your default product page remains the one indexed for organic search.'
    },
    {
      id: '4',
      question: 'Can I use Custom Product Pages with Apple Search Ads?',
      answer: 'Yes. Apple Search Ads campaigns can be linked directly to a specific Custom Product Page, allowing you to show ad clickers a different set of screenshots, video, or messaging than what organic searchers see on the default listing. This is one of the most common and effective uses of CPPs.'
    },
    {
      id: '5',
      question: 'How do I test Custom Product Pages against each other?',
      answer: 'Apple provides Product Page Optimization, a built-in A/B testing tool that lets you test up to three treatments against your default page, splitting organic App Store traffic between variants and reporting on conversion rate differences with statistical confidence.'
    },
    {
      id: '6',
      question: 'How often should I update my Custom Product Pages?',
      answer: 'Review CPP performance at least quarterly, and refresh creative sooner if a specific campaign, season, or promotion changes. Since CPPs are tied to specific traffic sources, they should evolve alongside your paid acquisition strategy rather than sit static once created.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Custom Product Pages: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about Apple Custom Product Pages</p>
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

export default CustomProductPagesAppleGuideFaq;
