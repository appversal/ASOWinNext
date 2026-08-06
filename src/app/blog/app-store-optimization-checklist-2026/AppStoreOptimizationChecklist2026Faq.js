'use client';

import React, { useState } from 'react';

const AppStoreOptimizationChecklist2026Faq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What should be included in an ASO checklist for 2026?',
      answer: 'A complete ASO checklist for 2026 should cover keyword research and mapping, title and metadata optimization for both stores, icon and screenshot testing, review and rating management, localization for priority markets, technical store listing health, competitor benchmarking, and a regular measurement cadence tied to real KPIs.'
    },
    {
      id: '2',
      question: 'How often should I revisit my ASO checklist?',
      answer: 'Most growth teams revisit metadata and keyword mapping every 4 to 6 weeks, review creative assets every quarter, and check competitor positioning monthly. Reviews, ratings, and store health should be monitored continuously rather than on a fixed schedule.'
    },
    {
      id: '3',
      question: 'Is App Store Optimization different from SEO?',
      answer: 'ASO and SEO share the same underlying goal of matching content to search intent, but ASO works within the constraints of app store algorithms, limited metadata fields, and conversion-focused creative assets rather than open web pages and backlinks.'
    },
    {
      id: '4',
      question: 'Do I need separate checklists for iOS and Android?',
      answer: 'Yes. The Apple App Store and Google Play Store use different ranking signals, metadata fields, and listing tools, so a single checklist should still branch into platform-specific steps for each store rather than treating them identically.'
    },
    {
      id: '5',
      question: 'What is the single most important item on an ASO checklist?',
      answer: 'Keyword research and mapping typically has the largest impact because it determines which searches your app can even be found for, and every other checklist item, from metadata to creatives, depends on getting this foundation right first.'
    },
    {
      id: '6',
      question: 'How can ASOWin help with ASO in 2026?',
      answer: 'ASOWin runs the full checklist as an ongoing system rather than a one-time task, combining keyword strategy, metadata optimization, creative testing, review management, localization, and performance reporting into a single accountable ASO program.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ASO Checklist 2026: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about building a complete App Store Optimization checklist</p>
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

export default AppStoreOptimizationChecklist2026Faq;
