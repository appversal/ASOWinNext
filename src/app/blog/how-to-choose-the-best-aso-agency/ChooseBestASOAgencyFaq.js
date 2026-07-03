'use client';

import React, { useState } from 'react';

const ChooseBestASOAgencyFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How do I know if an ASO agency is good?',
      answer: 'A good ASO agency should be able to explain your app\'s current visibility, keyword gaps, conversion issues, competitor position, review problems, and growth opportunities. It should also provide a clear roadmap, not just generic recommendations.'
    },
    {
      id: '2',
      question: 'Should I hire an ASO agency or do ASO in-house?',
      answer: 'If your team has deep ASO expertise, design resources, tracking tools, and time for regular testing, in-house ASO can work. If not, an agency like ASOWin can bring structure, speed, and cross-category experience.'
    },
    {
      id: '3',
      question: 'What should an ASO agency report every month?',
      answer: 'An ASO agency should report keyword rankings, visibility movement, conversion changes, metadata updates, creative learnings, review trends, competitor movement, and next steps.'
    },
    {
      id: '4',
      question: 'Is ASO a one-time project?',
      answer: 'No. ASO works best as an ongoing process. App stores change, competitors update listings, user behavior shifts, and new keywords emerge. Regular optimization is important for long-term growth.'
    },
    {
      id: '5',
      question: 'Why choose ASOWin?',
      answer: 'Choose ASOWin if you want an ASO agency that works across rankings, conversions, reviews, creatives, custom listings, and growth strategy instead of focusing on only one part of app store optimization.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Best ASO Agency: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about choosing the right ASO agency for your app</p>
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

export default ChooseBestASOAgencyFaq;
