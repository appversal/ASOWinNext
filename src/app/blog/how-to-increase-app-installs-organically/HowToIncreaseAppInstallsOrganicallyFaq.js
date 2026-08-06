'use client';

import React, { useState } from 'react';

const HowToIncreaseAppInstallsOrganicallyFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is the fastest way to increase organic app installs?',
      answer: 'The fastest wins usually come from listing conversion improvements, better screenshots, a clearer icon, or a stronger first line of description, since these affect users who are already finding your app but not converting. Keyword and ranking gains tend to compound more slowly over weeks and months.'
    },
    {
      id: '2',
      question: 'Do organic installs really matter if I run paid user acquisition?',
      answer: 'Yes. Organic installs typically have better retention and lower long-term cost than paid installs, and a strong organic base also improves your app\'s ranking signals, which in turn can lower the cost of paid campaigns by improving overall store visibility.'
    },
    {
      id: '3',
      question: 'How long does it take to see organic install growth from ASO?',
      answer: 'Conversion-focused changes like new screenshots can show measurable impact within one to two weeks. Keyword ranking improvements and review-driven trust gains usually take four to twelve weeks to fully materialize, since they depend on consistent testing and accumulating data.'
    },
    {
      id: '4',
      question: 'Can reviews and ratings really affect organic installs?',
      answer: 'Yes, significantly. Both Apple and Google factor ratings and review sentiment into ranking, and users also weigh star ratings heavily when deciding whether to install, making review management one of the higher-leverage levers in organic growth.'
    },
    {
      id: '5',
      question: 'Does cross-promotion between apps still work for organic growth?',
      answer: 'Yes, especially for companies with multiple apps or an existing user base. Cross-promotion drives installs without paid spend and often produces higher-quality users since they already trust your brand from another product.'
    },
    {
      id: '6',
      question: 'How does ASOWin structure an organic growth program?',
      answer: 'ASOWin combines keyword strategy, listing conversion testing, review and rating management, and seasonal update planning into one ongoing program, with regular reporting so every lever can be measured and adjusted rather than treated as a one-time project.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Organic App Installs: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about increasing organic app installs</p>
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

export default HowToIncreaseAppInstallsOrganicallyFaq;
