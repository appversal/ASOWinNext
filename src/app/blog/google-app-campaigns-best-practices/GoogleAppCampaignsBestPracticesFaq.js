'use client';

import React, { useState } from 'react';

const GoogleAppCampaignsBestPracticesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What creative assets does a Google App Campaign need?',
      answer: 'Google App Campaigns require a mix of text assets, images, HTML5 assets, and video, since Google\'s machine learning automatically assembles combinations across Search, Play, YouTube, and the Display Network. Providing a wide, high-quality variety of assets, rather than a minimal set, gives the algorithm more combinations to test and typically improves performance.'
    },
    {
      id: '2',
      question: 'Should I use tCPA or tROAS bidding for Google App Campaigns?',
      answer: 'Target CPA (tCPA) works well when your goal is simply driving installs at a predictable cost, common for apps early in their lifecycle still building install volume. Target ROAS (tROAS) works better once you have reliable in-app revenue or purchase event data, since it optimizes for value per install rather than install volume alone.'
    },
    {
      id: '3',
      question: 'How much conversion data does Google need before a campaign performs well?',
      answer: 'Google generally recommends accumulating at least 10 conversions per week, and ideally 50 or more per month, before a campaign has enough data for its machine learning to optimize effectively. Campaigns with very low conversion volume often underperform simply because the algorithm has not learned enough yet.'
    },
    {
      id: '4',
      question: 'Do Google App Campaigns affect my organic Play Store ranking?',
      answer: 'Google App Campaigns do not directly influence organic Play Store ranking, but the installs they generate contribute to your overall download volume, install velocity, and retention data, all of which are factors Google Play\'s organic ranking system also considers over time.'
    },
    {
      id: '5',
      question: 'What audience signals should I provide to Google App Campaigns?',
      answer: 'Audience signals such as customer match lists, similar audiences, and in-market or affinity segments help Google\'s algorithm find relevant users faster, particularly in the early learning phase of a campaign. These signals act as a starting hint rather than a hard restriction, since Google\'s system will expand beyond them as it learns.'
    },
    {
      id: '6',
      question: 'Should my paid campaign creative match my organic store listing?',
      answer: 'Yes, in most cases. When paid creative and organic store listing messaging are aligned, users experience a consistent story from ad to install, which tends to improve post-click conversion. Testing store listing creative and paid ad creative together, rather than in separate silos, usually produces the strongest results.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Google App Campaigns: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about running high-ROAS Google App Campaigns</p>
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

export default GoogleAppCampaignsBestPracticesFaq;
