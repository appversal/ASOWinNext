'use client';

import React, { useState } from 'react';

const FintechAppASOStrategiesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Why is ASO different for fintech apps compared to other categories?',
      answer: 'Fintech apps carry a higher trust burden because users are handing over financial data and money. Store listings need to emphasize security, compliance, and credibility signals in addition to the usual ASO fundamentals of keywords and conversion design.'
    },
    {
      id: '2',
      question: 'Can fintech apps use words like "guaranteed returns" or "risk-free" in their store listing?',
      answer: 'This kind of language is risky and often restricted, since financial promises can trigger regulatory scrutiny and store policy violations in many markets. Compliance-safe messaging should focus on features, security, and transparency rather than performance promises.'
    },
    {
      id: '3',
      question: 'How important are reviews for fintech app conversion?',
      answer: 'Extremely important. Because fintech apps deal with money, prospective users read reviews specifically looking for stories about failed transactions, support responsiveness, and account security, making review management a higher-stakes activity than in most other categories.'
    },
    {
      id: '4',
      question: 'What should fintech app screenshots emphasize?',
      answer: 'Fintech screenshots should balance clarity of the core feature with visible trust cues such as encryption mentions, regulatory badges, biometric security, or partner bank logos, without overwhelming the screen with disclaimers.'
    },
    {
      id: '5',
      question: 'How should fintech apps benchmark against competitors?',
      answer: 'Benchmark against direct category competitors, such as other neobanks or payment apps in your specific market and use case, rather than generic top-chart apps, since user expectations and search behavior differ meaningfully by financial product type.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach ASO for fintech and regulated apps?',
      answer: 'ASOWin builds compliance-aware ASO strategies that work closely with legal and compliance teams, prioritize trust signals in creative and metadata, and treat review management as a core reputational safeguard rather than an afterthought.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Fintech ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about App Store Optimization for fintech and financial apps</p>
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

export default FintechAppASOStrategiesFaq;
