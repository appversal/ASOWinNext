'use client';

import React, { useState } from 'react';

const HowToRespondToAppStoreReviewsFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Do developer replies to reviews affect App Store or Play Store rankings?',
      answer: 'Store algorithms do not treat a reply as a direct ranking input, but replies influence rating recovery, review sentiment, and conversion rate, all of which are tracked by both stores and shape how users and algorithms perceive app quality over time.'
    },
    {
      id: '2',
      question: 'How quickly should I respond to a negative app review?',
      answer: 'Aim to respond within 24 to 48 hours. Faster responses show active developer support, increase the chance a user updates their review, and reduce the visible window during which new users see an unanswered complaint.'
    },
    {
      id: '3',
      question: 'Should I respond to every single review, including short positive ones?',
      answer: 'You do not need to reply to every five-star review, but replying to a meaningful share of them, along with all negative and bug-related reviews, signals an active, responsive team to both users and store algorithms.'
    },
    {
      id: '4',
      question: 'Can I ask users to update their review after fixing a bug?',
      answer: 'Yes. Once you reply confirming a fix and the user has had time to verify it, a polite follow-up asking them to revisit their rating is standard practice and compliant with both Apple and Google guidelines.'
    },
    {
      id: '5',
      question: 'What should I avoid saying in a review response?',
      answer: 'Avoid defensive language, generic copy-paste replies, blaming the user, or making promises you cannot keep. Responses should be specific, empathetic, and action-oriented.'
    },
    {
      id: '6',
      question: 'How does ASOWin help with review response management?',
      answer: 'ASOWin builds tone-matched response frameworks, sets up sentiment tagging and triage workflows, and helps teams respond fast and consistently at scale, turning review management into a measurable part of app reputation and ASO strategy.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Review Responses: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about responding to App Store and Play Store reviews</p>
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

export default HowToRespondToAppStoreReviewsFaq;
