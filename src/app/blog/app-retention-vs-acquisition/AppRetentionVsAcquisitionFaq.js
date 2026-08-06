'use client';

import React, { useState } from 'react';

const AppRetentionVsAcquisitionFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Is app retention more important than acquisition?',
      answer: 'Neither is more important on its own. Acquisition brings new users in, but without retention those users churn quickly, which weakens the engagement signals that store algorithms use to rank apps. Sustainable growth requires both working together.'
    },
    {
      id: '2',
      question: 'How does retention actually affect ASO rankings?',
      answer: 'App stores factor engagement signals such as session frequency, time in app, and how long users keep the app installed into their ranking algorithms. Apps with strong retention tend to hold or improve their keyword rankings, while apps with poor retention often see visibility decline over time.'
    },
    {
      id: '3',
      question: 'Can paid acquisition hurt my organic ASO performance?',
      answer: 'Paid acquisition itself does not directly harm ASO, but if paid traffic brings in low-intent users who churn quickly, the resulting engagement and rating signals can drag down the metrics that influence organic visibility.'
    },
    {
      id: '4',
      question: 'What retention metrics should I track alongside acquisition?',
      answer: 'Track day 1, day 7, and day 30 retention alongside your install-to-open rate and session frequency. Comparing these against your acquisition cost and channel mix shows whether the users you are acquiring are actually the right ones.'
    },
    {
      id: '5',
      question: 'How can ASO improve retention, not just installs?',
      answer: 'Accurate metadata and screenshots that set correct expectations lead to better-fit installs from the start, and features like Custom Product Pages and Custom Store Listings let you route different user segments to messaging that matches their actual needs, improving early retention.'
    },
    {
      id: '6',
      question: 'How does ASOWin balance retention and acquisition in ASO strategy?',
      answer: 'ASOWin builds ASO programs around both sides of the funnel, aligning metadata, creative, and keyword strategy with genuine user expectations while tracking retention data to make sure organic growth is sustainable rather than just a short-term installs spike.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Retention vs Acquisition: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about balancing retention and acquisition in ASO</p>
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

export default AppRetentionVsAcquisitionFaq;
