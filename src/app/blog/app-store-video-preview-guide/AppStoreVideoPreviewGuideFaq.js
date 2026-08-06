'use client';

import React, { useState } from 'react';

const AppStoreVideoPreviewGuideFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How long should an app preview video be?',
      answer: 'Apple App Previews can run up to 30 seconds, and Google Play videos can run up to 30 seconds as well, though Google also supports longer YouTube-hosted trailers. In practice, the highest-converting previews on both platforms run between 15 and 20 seconds, since most viewers do not watch to completion.'
    },
    {
      id: '2',
      question: 'Does the video autoplay on the App Store and Play Store?',
      answer: 'On the App Store, video previews autoplay muted when a user views the listing, and only the first frame of the first video appears in search results. On Google Play, video does not autoplay in search results but can autoplay on the full store listing page depending on placement and user settings, so the opening frame still needs to work as a static thumbnail.'
    },
    {
      id: '3',
      question: 'What should happen in the first 3 seconds of an app preview video?',
      answer: 'The first 3 seconds should show the single strongest visual hook of your app, whether that is the core gameplay moment, the clearest before-and-after result, or the most compelling use case. Since many previews autoplay muted with no sound, this hook must work purely on visuals and on-screen text.'
    },
    {
      id: '4',
      question: 'Do app preview videos affect keyword rankings?',
      answer: 'Video previews do not directly affect keyword rankings on either platform. Their primary role is improving conversion rate on the store listing. However, since conversion rate contributes to overall install velocity, a strong video can indirectly support the organic ranking signals that reward consistently converting listings.'
    },
    {
      id: '5',
      question: 'Should every app use a video preview?',
      answer: 'Not necessarily. Apps with highly visual, dynamic experiences, such as games, fitness apps, and creative tools, tend to see the strongest lift from video. Simpler utility apps sometimes see similar or better results from a well-sequenced screenshot set alone, which is why testing video against a static-only variant is worth doing before committing resources.'
    },
    {
      id: '6',
      question: 'How do I measure whether a video preview is actually improving conversion?',
      answer: 'Compare the listing view to install conversion rate for periods with and without the video, or run a controlled experiment through Google Play\'s store listing experiments or Apple\'s Custom Product Pages. At ASOWin, we treat video the same as any other creative asset: it needs a measurable lift over the control before it earns a permanent place in the listing.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Store Video Previews: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about creating app preview videos that convert</p>
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

export default AppStoreVideoPreviewGuideFaq;
