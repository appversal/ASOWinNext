'use client';

import React, { useState } from 'react';

const AiInAppStoreOptimizationFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How is AI changing App Store Optimization?',
      answer: 'AI now powers how both the Apple App Store and Google Play understand search queries, app metadata, and user reviews. Instead of matching exact keywords, store algorithms increasingly understand intent and context, which means ASO strategy has to focus on semantic relevance, not just keyword insertion.'
    },
    {
      id: '2',
      question: 'Do I still need keyword research if app stores use AI ranking?',
      answer: 'Yes. AI-driven ranking systems still rely on the words, phrases, and concepts present in your metadata and reviews as signals. Keyword research tells you which concepts matter to your audience; AI systems then decide how closely your listing matches those concepts in meaning, not just in text.'
    },
    {
      id: '3',
      question: 'What AI tools are useful for ASO teams?',
      answer: 'Useful categories include AI-assisted keyword clustering tools, review sentiment analysis platforms, generative tools for drafting metadata variations, and automated reporting dashboards that summarize rank changes and competitor movement. The right mix depends on your app category and team size.'
    },
    {
      id: '4',
      question: 'Can AI fully automate ASO?',
      answer: 'No. AI can automate data collection, pattern recognition, and first drafts, but strategic decisions like positioning, brand voice, and creative direction still need human judgment. At ASOWin, we use AI to speed up analysis while keeping strategy and quality control led by our team.'
    },
    {
      id: '5',
      question: 'Will AI make ASO agencies less necessary?',
      answer: 'The opposite is more likely. As ranking systems get more sophisticated, understanding how to work with them requires more expertise, not less. Agencies that combine AI tooling with ASO experience can move faster and interpret results more accurately than teams relying on either alone.'
    },
    {
      id: '6',
      question: 'How does ASOWin use AI in its ASO process?',
      answer: 'ASOWin uses AI-assisted tools for keyword clustering, review sentiment analysis, competitor benchmarking, and reporting automation, while keeping strategic decisions, creative direction, and quality assurance led by experienced ASO practitioners.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">AI in ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about how artificial intelligence is changing App Store Optimization</p>
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

export default AiInAppStoreOptimizationFaq;
