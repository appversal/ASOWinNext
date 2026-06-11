"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does ASOWin improve our app store rankings?",
    answer: "We utilize data-driven keyword optimization, high-converting creative assets, and continuous A/B testing to significantly increase your organic visibility and download rates across both iOS and Android platforms."
  },
  {
    question: "How long does it take to see results from ASO?",
    answer: "While some keyword changes can show impact within a few weeks, a comprehensive ASO strategy typically takes 2-3 months to yield sustained, compounding growth in organic traffic and conversions."
  },
  {
    question: "Do you handle creative assets (screenshots, videos) as well?",
    answer: "Yes! Our in-house design team creates localized, high-performing app store screenshots, preview videos, and icons tailored to maximize conversion rates for your target audience."
  },
  {
    question: "Can ASOWin work alongside our existing marketing team?",
    answer: "Absolutely. We act as an extension of your growth team, collaborating closely with your performance marketing and product teams to ensure our ASO efforts align with your broader acquisition strategy."
  },
  {
    question: "How do you measure ASO success?",
    answer: "We focus on tangible business outcomes rather than vanity metrics. Our key performance indicators include increases in organic installs, keyword ranking improvements, conversion rate uplifts, and ultimately, a lower blended Cost Per Acquisition (CPA)."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-[#fdb124] italic font-serif text-[22px] mb-2 font-medium">Frequently Asked Questions</p>
          <h2 className="text-4xl md:text-[42px] font-extrabold text-[#111] tracking-tight">Got Questions?</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white border rounded-[16px] overflow-hidden transition-all duration-300 cursor-pointer ${isOpen ? 'border-[#fdb124] shadow-sm' : 'border-[#e5e5e5] hover:border-[#ddd]'}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="font-bold text-[#111] text-[16px] md:text-[18px] pr-4">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#fef0d8] text-[#fdb124]' : 'bg-[#f5f5f5] text-[#888]'}`}>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </div>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-[#555] text-[15px] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
