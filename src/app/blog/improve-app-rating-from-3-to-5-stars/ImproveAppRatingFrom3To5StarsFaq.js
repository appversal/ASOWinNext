'use client';

import React, { useState } from 'react';

const ImproveAppRatingFrom3To5StarsFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How long does it take to improve an app rating from 3 stars to closer to 5?',
      answer: 'It depends on install volume and how quickly root-cause bugs are fixed, but most apps see a meaningful rating shift within 8 to 12 weeks of combining a bug fix release, an optimized in-app rating prompt, and consistent review responses.'
    },
    {
      id: '2',
      question: 'Is it against Apple or Google policy to ask users to rate the app?',
      answer: 'No. Asking users to rate your app is allowed and encouraged, provided you use the native rating APIs, such as SKStoreReviewController on iOS or the Play In-App Review API on Android, and you do not selectively filter who sees the prompt based on their expected rating.'
    },
    {
      id: '3',
      question: 'What is review gating and why is it risky?',
      answer: 'Review gating means only directing satisfied users to the public rating flow while redirecting unhappy users to a private feedback form. Both Apple and Google restrict manipulating who sees the native rating prompt based on predicted sentiment, so this practice creates real policy risk.'
    },
    {
      id: '4',
      question: 'When is the best moment to show an in-app rating prompt?',
      answer: 'The best moment is right after a user experiences a clear win, such as completing a task, hitting a milestone, or finishing a purchase successfully, not immediately after opening the app or during a loading screen.'
    },
    {
      id: '5',
      question: 'Can fixing bugs alone move a rating from 3 to 5 stars?',
      answer: 'Bug fixes are necessary but rarely sufficient on their own. You typically need a combination of root-cause fixes, a well-timed rating prompt, and active engagement with existing negative reviews to shift the average meaningfully.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach app rating recovery?',
      answer: 'ASOWin combines review sentiment analysis, root-cause bug triage, compliant in-app prompt strategy, and response management into one program, so rating improvement is treated as a system rather than a single tactic.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Rating Recovery: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about moving your app rating from 3 stars to 5 stars</p>
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

export default ImproveAppRatingFrom3To5StarsFaq;
