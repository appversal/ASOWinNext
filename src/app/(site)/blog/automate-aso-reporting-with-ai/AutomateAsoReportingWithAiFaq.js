'use client';

import React, { useState } from 'react';

const AutomateAsoReportingWithAiFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What parts of ASO reporting can actually be automated?',
      answer: 'Keyword rank tracking, review sentiment summaries, competitor metadata monitoring, and conversion rate tracking can all be automated into recurring dashboards. What still needs a human is interpreting what the changes mean and deciding what to do about them.'
    },
    {
      id: '2',
      question: 'How much time does automated ASO reporting actually save?',
      answer: 'Teams manually pulling rank data, reading reviews, and checking competitors often spend several hours a week compiling reports. Automated dashboards that refresh on a schedule can cut that to minutes of review time, freeing the team to focus on strategy instead of data collection.'
    },
    {
      id: '3',
      question: 'Do I need a developer to build an automated ASO dashboard?',
      answer: 'Not necessarily. Many ASO tracking platforms offer built-in automated reporting and API access. For custom needs, such as combining rank data with in-house analytics, a lightweight integration is usually enough rather than a full custom build.'
    },
    {
      id: '4',
      question: 'Is AI-generated ASO reporting accurate?',
      answer: 'Accuracy depends on the underlying data source, not the AI layer itself. Rank tracking and review data need to come from reliable sources. The AI or automation layer summarizes and organizes that data, so it is only as accurate as what feeds into it.'
    },
    {
      id: '5',
      question: 'What should an automated ASO report actually include?',
      answer: 'A useful automated ASO report typically includes keyword rank movement, conversion rate trends, review sentiment themes, competitor changes, and flagged anomalies that need attention, rather than raw data dumps that require manual analysis.'
    },
    {
      id: '6',
      question: 'How does ASOWin handle ASO reporting for clients?',
      answer: 'ASOWin combines automated tracking and AI-assisted summarization with human review, so clients get consistent, easy-to-read reports on rankings, conversion, and reviews, alongside expert interpretation of what the data means for their growth strategy.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Automated ASO Reporting: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">What ASO teams ask about automating rank tracking, sentiment analysis, and reporting</p>
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

export default AutomateAsoReportingWithAiFaq;
