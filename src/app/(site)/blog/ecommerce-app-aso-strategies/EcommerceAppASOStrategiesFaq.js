'use client';

import React, { useState } from 'react';

const EcommerceAppASOStrategiesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How often should e-commerce apps update their store listing?',
      answer: 'E-commerce apps should plan store listing updates around a seasonal calendar, typically refreshing screenshots and messaging ahead of major sales events, holidays, and seasonal shopping peaks, rather than updating only once or twice a year.'
    },
    {
      id: '2',
      question: 'Can I show discount percentages or sale messaging in app store screenshots?',
      answer: 'Yes, promotional messaging in screenshots is common and effective for shopping apps, though it should be updated promptly once a sale ends so the listing does not show an expired promotion to new users.'
    },
    {
      id: '3',
      question: 'How much do reviews affect purchase decisions in shopping apps?',
      answer: 'Significantly. Shopping app users read reviews specifically to gauge delivery reliability, product authenticity, and refund experience before trusting an app with a purchase, making review management directly tied to conversion, not just reputation.'
    },
    {
      id: '4',
      question: 'What is cross-border keyword strategy for e-commerce apps?',
      answer: 'It means researching and localizing keywords separately for each market you sell in, since shopping search behavior, seasonal calendars, and even preferred payment or delivery terms vary significantly by country.'
    },
    {
      id: '5',
      question: 'Should e-commerce apps use Custom Product Pages or Custom Store Listings?',
      answer: 'Yes, these features let e-commerce brands tailor screenshots and messaging to specific campaigns, ad traffic, or seasonal promotions without changing the default listing every user sees.'
    },
    {
      id: '6',
      question: 'How does ASOWin help e-commerce apps improve store performance?',
      answer: 'ASOWin builds seasonal update calendars, promo-driven creative testing, cross-border keyword strategy, and review management workflows specifically tuned to how shopping app users research and decide to purchase.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">E-commerce ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about App Store Optimization for shopping and e-commerce apps</p>
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

export default EcommerceAppASOStrategiesFaq;
