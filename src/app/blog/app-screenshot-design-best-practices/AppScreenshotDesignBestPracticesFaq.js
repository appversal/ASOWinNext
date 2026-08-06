'use client';

import React, { useState } from 'react';

const AppScreenshotDesignBestPracticesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How many app store screenshots should I use?',
      answer: 'Apple allows up to 10 screenshots per device size and Google Play allows up to 8. You do not need to use the maximum. Most high-converting listings use 5 to 7 screenshots that tell a clear, sequential story, since attention drops sharply after the first few images.'
    },
    {
      id: '2',
      question: 'Should app screenshots use device frames or full-bleed images?',
      answer: 'Both work, but they suit different apps. Device frames build trust for finance, health, and productivity apps by making the interface feel real and credible. Full-bleed, edge-to-edge screenshots often perform better for games and lifestyle apps because they feel more immersive and visually bold in a crowded search results grid.'
    },
    {
      id: '3',
      question: 'Do captions matter more than the screenshots themselves?',
      answer: 'Captions often matter more. Most users skim the store listing in under a second, and a short, benefit-led headline is what gets read first. The underlying screenshot supports the claim, but a weak caption on a great screenshot will still lose the user\'s attention.'
    },
    {
      id: '4',
      question: 'Should I localize my app screenshots for every market?',
      answer: 'You should at least localize the caption text and any on-screen copy for your top markets. Full visual localization, such as swapping currency symbols, local faces, or region-specific content, is worth the investment in markets that drive meaningful install volume.'
    },
    {
      id: '5',
      question: 'How often should I test new screenshot designs?',
      answer: 'At ASOWin, we recommend running a screenshot test every 4 to 6 weeks for apps with meaningful traffic. This gives enough time to collect statistically significant data while still allowing you to iterate frequently on messaging, sequencing, and visual style.'
    },
    {
      id: '6',
      question: 'Can screenshot testing actually improve app store rankings?',
      answer: 'Screenshots do not directly influence keyword rankings, but they strongly affect conversion rate. Higher conversion rates lead to more installs from the same search traffic, and sustained install velocity is a signal that store algorithms reward with improved organic visibility over time.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Screenshot Design: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about designing app screenshots that convert</p>
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

export default AppScreenshotDesignBestPracticesFaq;
