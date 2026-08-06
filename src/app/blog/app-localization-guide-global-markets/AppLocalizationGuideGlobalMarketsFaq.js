'use client';

import React, { useState } from 'react';

const AppLocalizationGuideGlobalMarketsFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is the difference between translation and transcreation for app metadata?',
      answer: 'Translation converts text word for word into another language, which can miss local idioms, search behavior, and cultural context. Transcreation adapts the message, keywords, and tone for a specific market, so it reads naturally and matches how local users actually search and think about the app.'
    },
    {
      id: '2',
      question: 'How do I decide which markets to localize for first?',
      answer: 'Prioritize markets based on existing organic traffic and installs from that region, market size and smartphone penetration, competitive intensity, and monetization potential. Markets already showing organic interest without localization are often strong early candidates since localization tends to amplify existing demand.'
    },
    {
      id: '3',
      question: 'Do I need different keywords for every localized market?',
      answer: 'Yes, in most cases. Search behavior varies by language and culture, so directly translated keywords often miss how local users actually phrase their searches. Country-specific keyword research is necessary to find the terms that actually drive traffic in each market.'
    },
    {
      id: '4',
      question: 'Should screenshots be localized along with text?',
      answer: 'Yes. Localized screenshots that show local currency, language, culturally relevant imagery, and region-appropriate use cases typically convert better than screenshots that only translate on-screen text without adapting the visual context.'
    },
    {
      id: '5',
      question: 'How many languages should an app support before expanding globally?',
      answer: 'There is no fixed number. It depends on target markets and business priorities. Many apps start with two to four high-priority languages tied to their largest addressable markets, then expand based on performance data rather than localizing broadly from day one.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach app localization for global ASO?',
      answer: 'ASOWin prioritizes markets based on data, builds transcreated metadata rather than direct translations, localizes screenshots and creative for cultural relevance, and conducts country-specific keyword research so each market gets a strategy built around how local users actually search.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Localization: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Common questions about expanding ASO strategy to global markets</p>
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

export default AppLocalizationGuideGlobalMarketsFaq;
