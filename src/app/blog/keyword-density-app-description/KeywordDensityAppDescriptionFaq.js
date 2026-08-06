'use client';

import React, { useState } from 'react';

const KeywordDensityAppDescriptionFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Does keyword density matter for the Apple App Store?',
      answer: 'Not in the way most people think. Apple\'s visible description does not directly influence search ranking, and the hidden 100-character keyword field is not density-based; it is treated as a pool of individual words, not a passage to repeat phrases in.'
    },
    {
      id: '2',
      question: 'Does keyword density matter for Google Play?',
      answer: 'Yes, more than on iOS. Google indexes the Play Store long description for ranking purposes, and natural keyword presence in that text does influence which searches your app can appear for, though excessive repetition still risks looking spammy to both users and Google\'s systems.'
    },
    {
      id: '3',
      question: 'What is considered keyword stuffing in an app description?',
      answer: 'Keyword stuffing is repeating the same word or phrase far more often than natural language would require, often in ways that make the copy read awkwardly or list-like rather than as genuine sentences aimed at a human reader.'
    },
    {
      id: '4',
      question: 'Can keyword stuffing get my app listing flagged or removed?',
      answer: 'Yes. Both Apple and Google have policies against deceptive or manipulative metadata practices, and listings that read as obviously keyword-stuffed risk manual review, ranking suppression, or removal in more severe cases.'
    },
    {
      id: '5',
      question: 'What keyword density percentage should I aim for in a Play Store description?',
      answer: 'There is no official target percentage from Google. As a practical guideline, most well-optimized long descriptions repeat a primary keyword a handful of times across several hundred words, always inside natural sentences, rather than hitting an exact formula.'
    },
    {
      id: '6',
      question: 'How does ASOWin balance keyword density with readability?',
      answer: 'We write descriptions for the human reader first and treat keyword placement as a structural layer underneath that copy, testing conversion impact alongside ranking impact so a listing never sacrifices installs for the sake of repeating a term.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Keyword Density: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about keyword density in app store descriptions</p>
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

export default KeywordDensityAppDescriptionFaq;
