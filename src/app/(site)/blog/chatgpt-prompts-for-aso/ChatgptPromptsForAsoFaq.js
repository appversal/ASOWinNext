'use client';

import React, { useState } from 'react';

const ChatgptPromptsForAsoFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Can ChatGPT replace an ASO strategist?',
      answer: 'No. ChatGPT is useful for speeding up research, clustering, and first drafts, but it does not have access to your live rank data, real competitor listings, or your brand guidelines unless you provide them. It works best as an assistant to a strategist, not a replacement for one.'
    },
    {
      id: '2',
      question: 'Is it safe to publish ChatGPT-written app metadata directly?',
      answer: 'We do not recommend it. AI-generated metadata should always be reviewed for accuracy, compliance with store guidelines, brand voice, and factual correctness before publishing. Treat AI output as a draft that needs human editing, not a finished asset.'
    },
    {
      id: '3',
      question: 'What kind of ASO tasks are ChatGPT prompts best suited for?',
      answer: 'Prompts work well for keyword clustering, drafting metadata variations, summarizing review themes, structuring competitor comparisons, and generating localization checklists. They work less well for tasks that require live data, such as exact keyword search volume or current competitor rankings.'
    },
    {
      id: '4',
      question: 'How do I make ChatGPT prompts more useful for ASO work?',
      answer: 'Give the model real context: your app category, target audience, actual keyword list, or real review excerpts, rather than asking generic questions. The more specific and grounded the input, the more useful and accurate the output tends to be.'
    },
    {
      id: '5',
      question: 'Should I fact-check ChatGPT output before using it?',
      answer: 'Yes, always. Language models can produce fluent, confident-sounding text that is factually wrong, especially around specific data points like keyword volume or store policy details. Validate anything data-dependent against real sources before acting on it.'
    },
    {
      id: '6',
      question: 'How does ASOWin use AI prompts in its ASO workflow?',
      answer: 'ASOWin uses structured AI prompts to speed up keyword clustering, review analysis, and first-draft metadata, then applies human review and real ranking data to validate and refine every recommendation before it becomes part of a client strategy.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ChatGPT for ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">What ASO managers ask about using AI prompts responsibly</p>
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

export default ChatgptPromptsForAsoFaq;
