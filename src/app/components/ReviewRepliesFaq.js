'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ReviewRepliesFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'How is the AI trained for my brand?',
      answer: 'Our AI learns from your communication history, brand guidelines, and previous interactions. It analyzes your tone, vocabulary, and style to create a brand-specific model. The more interactions it processes, the smarter and more aligned it becomes with your unique brand personality.'
    },
    {
      id: '2',
      question: 'How does brand vernacular matching work?',
      answer: 'We analyze your brand voice and communication style, then train our AI to replicate it. Every automated reply sounds like it came from your team, maintaining consistency across all customer interactions.'
    },
    {
      id: '3',
      question: 'What does "10-minute turnaround" mean?',
      answer: 'From the moment a review is posted on the app store, our system detects it, analyzes it, generates an intelligent reply matching your brand voice, and has it ready for review/posting within 10 minutes.'
    },
    {
      id: '4',
      question: 'How does ticketing integration work?',
      answer: 'Critical 1-star reviews automatically become tickets in your support system (Jira, Linear, Zendesk, etc.). Your team can focus on genuine issues while the AI handles routine positive feedback automatically.'
    },
    {
      id: '5',
      question: 'Is this truly 24/7 without manual agents?',
      answer: 'Yes! The system runs 24/7 with zero manual intervention. Replies are generated, your brand voice is applied, critical tickets are created, and everything happens automatically.'
    },
    {
      id: '6',
      question: 'What do weekly and monthly reports include?',
      answer: 'Reports track review volume, sentiment trends, response rates, rating changes, top issues mentioned, and the impact your automated replies have on user ratings. Available weekly or monthly.'
    },
    {
      id: '7',
      question: 'Can I customize which reviews create tickets?',
      answer: 'Absolutely! Set custom rules like auto-ticket for 1-star reviews, specific keywords, or particular app versions. Full control over what triggers ticketing.'
    },
    {
      id: '8',
      question: 'How much does this save compared to manual agents?',
      answer: 'A typical support team managing 50K reviews manually costs $30-50K/month. Our solution eliminates this entirely while improving response rates from 10% to 90%.'
    },
    {
      id: '9',
      question: 'Can I manually review and edit replies before posting?',
      answer: 'Yes! You have three modes: Auto-post all, Queue for review (recommended), or Suggest for manual editing. Complete control over your brand reputation.'
    },
    {
      id: '10',
      question: 'Does this work for multiple apps?',
      answer: 'Yes! Manage reviews for unlimited apps with different brand voices. Each app gets its own vernacular training and reporting.'
    },
    {
      id: '11',
      question: 'What languages are supported?',
      answer: 'We support 50+ languages for reviews and auto-replies, with brand voice adaptation for each language.'
    },
    {
      id: '12',
      question: 'How is my data secured?',
      answer: 'Enterprise-grade encryption, GDPR & CCPA compliant, SOC 2 Type II certified. Your reviews and brand voice data are protected with military-grade security.'
    },
    {
      id: '13',
      question: 'Can I integrate with my existing CRM or ticketing tools?',
      answer: 'Yes! Direct integrations with Jira, Linear, Zendesk, Salesforce, Slack, and custom APIs for any tool you use.'
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about automated review replies
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
          {faqData.map((faq) => (
            <div 
              key={faq.id}
              className="border-b border-gray-200 py-6"
            >
              <div 
                className="flex justify-between items-start cursor-pointer group"
                onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-[#fdb124] font-bold text-lg flex-shrink-0 mt-1">
                    {faq.id}.
                  </span>
                  <h3 className="text-gray-800 font-semibold text-base group-hover:text-[#fdb124] transition-colors flex-1">
                    {faq.question}
                  </h3>
                </div>
                <span className={`text-[#fdb124] text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${openItem === faq.id ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </div>

              {/* Answer */}
              {openItem === faq.id && (
                <div className="mt-4 ml-12 text-gray-600 text-base leading-relaxed animate-in fade-in duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-gradient-to-r from-[#FFF9F3] to-[#FFE8D1] rounded-2xl p-8 md:p-12 text-center border border-[#FFD9B3]">
          <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Our team is ready to help. Get in touch for a personalized demo.
          </p>
          <Link href="/contact" className="bg-[#fdb124] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e09910] transition-colors inline-block">
            Schedule Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewRepliesFaq;
