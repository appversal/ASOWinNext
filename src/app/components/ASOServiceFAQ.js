'use client';
import React, { useState } from 'react';

const ASOServiceFAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to see results from ASO?',
      answer: 'While some improvements appear within weeks (like updated metadata and screenshots), significant sustainable results typically take 3-6 months of consistent optimization. The app store algorithms need time to recognize and reward changes. We focus on long-term organic growth rather than quick wins.'
    },
    {
      id: 2,
      question: 'What is the typical ROI for ASO services?',
      answer: 'ASO typically delivers 3-5x ROI compared to other user acquisition channels because you\'re acquiring organic users at minimal cost. For every $1 spent on ASO, clients typically see $3-5 in return. The ROI improves over time as your rankings strengthen.'
    },
    {
      id: 3,
      question: 'Do you only work with iOS, Android, or both?',
      answer: 'We optimize for both iOS (Apple App Store) and Android (Google Play Store). Each platform has unique optimization strategies and algorithms, which we tailor specifically. Many clients need optimization for both platforms to maximize reach.'
    },
    {
      id: 4,
      question: 'How often do you update keyword strategies?',
      answer: 'We continuously monitor keyword performance and market trends. We recommend strategy reviews and updates on a monthly basis, with major refreshes quarterly. App store trends change seasonally, so we adapt your strategy accordingly.'
    },
    {
      id: 5,
      question: 'Can ASO help with app store algorithm changes?',
      answer: 'Yes, ASO follows industry best practices that align with app store algorithms. Both Apple and Google regularly update their algorithms, but the fundamentals remain: relevance (keywords), quality (ratings/reviews), and engagement (installs). We monitor changes and adjust strategies proactively.'
    },
    {
      id: 6,
      question: 'Do you handle international optimization?',
      answer: 'Absolutely. We specialize in multi-market localization. We research keywords in different languages, create culturally adapted creatives, and optimize listings for 50+ markets worldwide. Global expansion is one of our key services.'
    },
    {
      id: 7,
      question: 'What metrics do you track and report on?',
      answer: 'We track: keyword rankings, search visibility, click-through rates, conversion rates, download volume, rating/review trends, competitor benchmarking, and revenue impact. We provide monthly reports with actionable insights and custom dashboards for real-time tracking.'
    },
    {
      id: 8,
      question: 'How do you handle competitive markets?',
      answer: 'In competitive markets, we employ advanced strategies: deep competitor analysis, niche keyword targeting, creative differentiation through A/B testing, and reputation management to stand out. We identify underexploited opportunities within saturated categories.'
    },
    {
      id: 9,
      question: 'Do you offer ongoing support or just one-time optimization?',
      answer: 'We offer flexible engagement models. Many clients prefer ongoing monthly optimization for continuous growth and algorithm adaptation. Others start with a 3-month intensive program and then reduce to quarterly updates. We customize packages based on your needs.'
    },
    {
      id: 10,
      question: 'What\'s your minimum commitment or contract length?',
      answer: 'We believe in earning your continued business, so we have NO minimum commitment requirement. You can pause or cancel anytime. That said, ASO is most effective with consistent optimization over time, so we recommend at least 3-6 month engagements for best results.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            Get answers to common questions about our ASO services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#fdb124]"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                className="w-full px-6 md:px-8 py-5 flex items-start justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 text-left">
                  {faq.question}
                </h3>
                <div className={`text-2xl text-[#fdb124] flex-shrink-0 transition-transform duration-300 ${expandedFAQ === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </div>
              </button>

              {/* Expanded Content */}
              {expandedFAQ === faq.id && (
                <div className="px-6 md:px-8 py-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-gradient-to-r from-[#014458] to-[#0a2f3f] rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-300 mb-6 max-w-[600px] mx-auto">
            Our ASO experts are here to answer any questions and help you understand how ASO can drive growth for your app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#fdb124] hover:bg-[#e09910] text-white font-bold py-3 px-8 rounded-full transition-colors">
              Talk to an Expert
            </button>
            <button className="border-2 border-[#fdb124] text-[#fdb124] hover:bg-[#fdb124] hover:text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOServiceFAQ;
