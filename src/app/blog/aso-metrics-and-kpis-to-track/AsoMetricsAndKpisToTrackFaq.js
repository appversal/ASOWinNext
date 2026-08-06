'use client';

import React, { useState } from 'react';

const AsoMetricsAndKpisToTrackFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What are the most important ASO metrics to track?',
      answer: 'The most important ASO metrics are impressions, product page views, conversion rate, keyword rankings, install-to-open rate, retention, and ratings velocity. Together these metrics cover the full journey from discovery through installation to long-term engagement.'
    },
    {
      id: '2',
      question: 'What is a good app store conversion rate?',
      answer: 'Conversion rate benchmarks vary widely by category, but many apps see product page to install conversion somewhere between 20 and 40 percent, with top performers exceeding that. The more useful benchmark is your own trend over time as you test creative and metadata changes.'
    },
    {
      id: '3',
      question: 'How often should I check my ASO dashboard?',
      answer: 'Impressions, conversion rate, and keyword rankings are worth checking weekly, while retention and review sentiment are better reviewed on a monthly cadence since they change more slowly and need a larger sample to be meaningful.'
    },
    {
      id: '4',
      question: 'Why does retention matter for ASO if it happens after install?',
      answer: 'Both Apple and Google factor engagement and retention signals into how they rank apps in search and category browsing, so an app with poor retention can see its organic visibility decline over time even if its listing itself looks strong.'
    },
    {
      id: '5',
      question: 'What is ratings velocity and why does it matter?',
      answer: 'Ratings velocity measures how quickly new ratings and reviews accumulate. A steady, healthy velocity signals an actively used, trusted app to both users and store algorithms, while a stagnant or declining velocity can quietly hurt both trust and ranking.'
    },
    {
      id: '6',
      question: 'How does ASOWin help teams build an ASO measurement system?',
      answer: 'ASOWin sets up a structured dashboard covering visibility, conversion, and retention metrics, then ties reporting to a regular review cadence so every metadata, creative, or keyword change can be measured against a clear baseline.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ASO Metrics: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about tracking App Store Optimization performance</p>
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

export default AsoMetricsAndKpisToTrackFaq;
