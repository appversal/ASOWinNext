'use client';

import React, { useState } from 'react';

const LongTailKeywordsAppStoreOptimizationFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What counts as a long-tail keyword in ASO?',
      answer: 'A long-tail keyword is a longer, more specific search phrase, usually two to five words, that has lower search volume but also lower competition and higher user intent. Examples include "budget app for couples" instead of just "budget app."'
    },
    {
      id: '2',
      question: 'Why should I bother with low-volume long-tail keywords?',
      answer: 'Individually, long-tail terms bring in fewer searches, but collectively they often add up to more installs than a handful of broad, highly contested terms. They also tend to convert better because the searcher already knows more specifically what they want.'
    },
    {
      id: '3',
      question: 'Where can I find long-tail keyword ideas for my app?',
      answer: 'Good sources include user reviews (both your own and competitors\'), App Store and Play Store autocomplete suggestions, competitor listings, and customer support tickets. These reveal the actual language real users use, which is often different from internal product terminology.'
    },
    {
      id: '4',
      question: 'Do long-tail keywords work the same way on iOS and Android?',
      answer: 'Not exactly. On iOS, long-tail phrases usually need to be broken into individual words across the subtitle and keyword field since Apple\'s keyword field does not preserve full phrases well. On Android, long-tail phrases can be written naturally into the long description, closer to how they would appear in a web search query.'
    },
    {
      id: '5',
      question: 'How long does it take to rank for long-tail keywords?',
      answer: 'Because competition is lower, long-tail keywords often show ranking movement faster than head terms, sometimes within a few weeks of a metadata update, though results still depend on your app\'s existing authority, reviews, and conversion rate.'
    },
    {
      id: '6',
      question: 'Should I stop targeting broad, high-volume keywords entirely?',
      answer: 'No. A balanced strategy targets a small number of realistic head terms alongside a much larger set of long-tail phrases. Long-tail keywords build steady, compounding traffic while you work toward competing for broader terms over time.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Long-Tail Keywords: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about finding and ranking for long-tail keywords in app stores</p>
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

export default LongTailKeywordsAppStoreOptimizationFaq;
