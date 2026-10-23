'use client';

import React, { useState } from 'react';

const CommonAsoMistakesToAvoidFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is the most common ASO mistake apps make?',
      answer: 'The most common mistake is treating ASO as a one-time setup task instead of an ongoing process. Teams optimize metadata once at launch and never revisit keywords, screenshots, or reviews again, even as competitors and search behavior keep changing.'
    },
    {
      id: '2',
      question: 'Does keyword stuffing actually hurt my app?',
      answer: 'Yes. Repeating the same keyword unnaturally across your title, description, and metadata can trigger store review flags and reads poorly to users, which hurts conversion even if it does not directly harm your ranking.'
    },
    {
      id: '3',
      question: 'Why do generic screenshots hurt conversion so much?',
      answer: 'Generic screenshots fail to communicate a clear reason to install within the first few frames users see. Since most users never scroll through a full screenshot set, unclear or generic visuals in the first two or three positions directly reduce install rates.'
    },
    {
      id: '4',
      question: 'Is skipping localization really a mistake if my app is in English?',
      answer: 'If you have meaningful traffic or installs from non-English-speaking markets, skipping localization means your metadata and creatives are not matching how those users actually search, which leaves organic visibility and conversion on the table in those regions.'
    },
    {
      id: '5',
      question: 'Should I treat App Store and Play Store ASO the same way?',
      answer: 'No. Applying an identical strategy to both stores is a common mistake, since the platforms use different metadata fields, ranking signals, and listing tools that each require their own tailored approach.'
    },
    {
      id: '6',
      question: 'How can I avoid these ASO mistakes going forward?',
      answer: 'Build ASO into a recurring cycle: revisit keywords regularly, test creative assets, actively manage reviews, localize for priority markets, and track performance metrics consistently rather than making changes only when problems appear.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ASO Mistakes: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about avoiding costly App Store Optimization mistakes</p>
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

export default CommonAsoMistakesToAvoidFaq;
