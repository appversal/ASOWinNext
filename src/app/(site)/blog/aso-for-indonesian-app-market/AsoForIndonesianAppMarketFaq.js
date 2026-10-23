'use client';

import React, { useState } from 'react';

const AsoForIndonesianAppMarketFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Do apps need full Bahasa Indonesia localization to succeed in Indonesia?',
      answer: 'Full localization is strongly recommended. While many Indonesian users understand some English, apps with complete Bahasa Indonesia store listings, including title, description, and screenshots, consistently convert better than apps relying on English-only listings, since users trust and understand fully localized listings more readily.'
    },
    {
      id: '2',
      question: 'Why does app size matter so much for the Indonesian market?',
      answer: 'A large share of Indonesian smartphone users own budget or mid-range Android devices with limited storage, and mobile data affordability varies widely across the country. Smaller app size directly improves install completion rates and reduces uninstalls caused by storage pressure.'
    },
    {
      id: '3',
      question: 'Is Google Play or the Apple App Store more important in Indonesia?',
      answer: 'Google Play is overwhelmingly more important, since Android holds a dominant share of the Indonesian smartphone market. Most ASO investment for apps targeting Indonesian users should prioritize Google Play strategy, though App Store presence still matters for apps targeting the smaller iOS user segment.'
    },
    {
      id: '4',
      question: 'What payment and pricing considerations matter for Indonesian app users?',
      answer: 'Local payment method support, such as popular Indonesian e-wallets and bank transfer options, along with clear pricing shown in Indonesian Rupiah, meaningfully affects trust and conversion. Store listings and screenshots that reflect familiar local payment options tend to perform better than generic international payment messaging.'
    },
    {
      id: '5',
      question: 'How does Indonesia compare to other emerging Southeast Asian markets for ASO?',
      answer: 'Indonesia shares some structural similarities with other price-sensitive, mobile-first emerging markets, such as high sensitivity to app size and strong price consciousness, but it has its own distinct language, payment ecosystem, and cultural context that require a dedicated localization approach rather than a shared regional template.'
    },
    {
      id: '6',
      question: 'How does ASOWin approach ASO for the Indonesian market?',
      answer: 'We prioritize Google Play given Android dominance, build full Bahasa Indonesia localization rather than partial translation, factor app size into technical and creative recommendations, and calibrate store listing messaging to reflect local payment methods and price-sensitive purchasing behavior.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">ASO for Indonesia: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about App Store Optimization for the Indonesian app market</p>
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

export default AsoForIndonesianAppMarketFaq;
