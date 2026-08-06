'use client';

import React, { useState } from 'react';

const AppReviewManagementStrategyFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is an app review management strategy?',
      answer: 'An app review management strategy is a repeatable system for aggregating, triaging, responding to, and reporting on user reviews across app stores and markets, so review handling does not depend on any single person or an ad hoc process.'
    },
    {
      id: '2',
      question: 'When does a team need a formal review management workflow instead of an ad hoc process?',
      answer: 'Once review volume crosses a few hundred per month, spans multiple markets or languages, or involves more than one team responding, an ad hoc process starts to break down. That is usually the signal to formalize triage, ownership, and reporting.'
    },
    {
      id: '3',
      question: 'What is sentiment tagging in review management?',
      answer: 'Sentiment tagging is the practice of categorizing incoming reviews by tone and topic, such as crash reports, billing complaints, or praise, so the highest-urgency issues can be routed and answered before lower-priority feedback.'
    },
    {
      id: '4',
      question: 'How often should review management be reported to leadership?',
      answer: 'Most enterprise teams report review and rating trends weekly for operational tracking, with a monthly rollup for leadership that highlights sentiment trends, response SLAs, and recurring product issues surfaced through reviews.'
    },
    {
      id: '5',
      question: 'Can review management be automated?',
      answer: 'Parts of it can. Aggregation, sentiment tagging, and initial routing are well suited to automation and tooling, while the actual response writing and product escalation decisions typically still benefit from human judgment, especially for sensitive or high-profile reviews.'
    },
    {
      id: '6',
      question: 'How does ASOWin help enterprise teams manage reviews at scale?',
      answer: 'ASOWin builds full triage and escalation workflows, sets up sentiment tagging and reporting cadences, and connects review data into a single reputation management system, so review handling stays consistent as review volume and team size grow.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Review Management Strategy: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about building an app review management strategy that scales</p>
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

export default AppReviewManagementStrategyFaq;
