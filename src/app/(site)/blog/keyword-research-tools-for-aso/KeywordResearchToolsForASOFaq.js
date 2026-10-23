'use client';

import React, { useState } from 'react';

const KeywordResearchToolsForASOFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is the best free keyword research tool for ASO?',
      answer: 'App Store Connect (for iOS search terms) and Google Play Console (for Play Store search terms) are the best free starting points because the data comes directly from Apple and Google. They show real impressions and taps tied to your own listing, which no third-party estimator can replicate exactly.'
    },
    {
      id: '2',
      question: 'Do I need paid ASO tools if I already check App Store Connect and Play Console?',
      answer: 'Paid keyword trackers still add value because they show competitor rankings, estimated search volume for terms you do not yet rank for, and historical trend data. First-party dashboards only show performance for keywords tied to your existing listing, not the full opportunity landscape.'
    },
    {
      id: '3',
      question: 'How often should I refresh my keyword research?',
      answer: 'Most apps benefit from a full keyword refresh every 4 to 8 weeks, with lighter monitoring weekly. Search behavior shifts with seasons, competitor updates, and platform algorithm changes, so keyword sets that worked six months ago often need adjustment.'
    },
    {
      id: '4',
      question: 'Do keyword tools work the same way for iOS and Android?',
      answer: 'No. iOS keyword data centers on the app name, subtitle, and hidden keyword field, and ranking signals are more tightly tied to exact and close-match terms. Android relies more on the title and long description, where Google\'s indexing behaves closer to traditional web search with broader semantic matching.'
    },
    {
      id: '5',
      question: 'Can keyword research alone improve my app\'s rank?',
      answer: 'No. Keyword research identifies which terms to target, but ranking improvement also depends on where those terms are placed in your metadata, how your listing converts, and how strong your ratings, reviews, and retention signals are. Keyword data is an input, not the full strategy.'
    },
    {
      id: '6',
      question: 'How does ASOWin use keyword tool data differently from doing it manually?',
      answer: 'ASOWin combines first-party and third-party keyword data into a single prioritization model based on relevance, opportunity, and current ranking gaps, then maps the results directly into metadata fields for both stores. We also track post-change performance so the keyword strategy keeps evolving instead of sitting static after one update.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Keyword Research Tools: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about choosing and using ASO keyword research tools</p>
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

export default KeywordResearchToolsForASOFaq;
