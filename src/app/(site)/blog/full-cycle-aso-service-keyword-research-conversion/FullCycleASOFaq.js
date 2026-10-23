'use client';

import React, { useState } from 'react';

const FullCycleASOFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What exactly is a Full-Cycle App Store Optimization Service?',
      answer: 'A full-cycle ASO service is a comprehensive, integrated approach to app store optimization that covers the entire journey: strategic keyword research, metadata optimization, visual design refinement, and continuous conversion optimization. Unlike fragmented approaches, full-cycle ASO treats each element as part of an interconnected system where keywords inform metadata, metadata drives traffic, and visual design converts installations into active users.'
    },
    {
      id: '2',
      question: 'How does full-cycle ASO differ from traditional piecemeal ASO approaches?',
      answer: 'Traditional ASO often involves disconnected tasks—keyword research by one team, icon testing by another, with little coordination. Full-cycle ASO eliminates inefficiencies by ensuring all phases work together: keywords directly align with your metadata, metadata attracts relevant traffic, visual design maximizes conversion of that traffic, and monitoring enables continuous improvement. This integrated approach delivers faster results and prevents wasted visibility on unconverted traffic.'
    },
    {
      id: '3',
      question: 'Why is strategic keyword research the foundation of Full-Cycle ASO?',
      answer: 'Strategic keyword research forms the foundation because it informs every other optimization phase. It identifies high-volume, achievable keywords aligned with user intent and your app\'s capabilities. By understanding what users search for, competitive landscape analysis, and search difficulty, you ensure that all subsequent metadata optimization and visual design efforts target the right audience rather than wasting resources on low-intent or overly competitive keywords.'
    },
    {
      id: '4',
      question: 'What is included in the Metadata Optimization phase?',
      answer: 'The Metadata Optimization phase includes: optimizing your app name to balance brand recognition with keyword relevance; creating a subtitle that adds keyword real estate and highlights your unique value proposition; strategically populating the keyword field with target keywords and competitor names; and writing compelling, benefit-focused descriptions that influence conversion rates and address user pain points. All metadata is informed by your keyword research phase.'
    },
    {
      id: '5',
      question: 'How does visual design impact app conversions in Full-Cycle ASO?',
      answer: 'Visual design is crucial for converting traffic into installations. This phase includes: A/B testing icon variations to identify highest click-through rate designs in search results; testing different screenshot designs and copy sequences to maximize conversion percentage; creating preview videos that showcase functionality in motion; and maintaining strong ratings and reviews (4+ stars) to signal quality. Traffic only matters when it converts—this phase ensures it does.'
    },
    {
      id: '6',
      question: 'What metrics should we track to measure Full-Cycle ASO success?',
      answer: 'Key performance indicators include: App keyword ranking positions across priority keywords; organic download volume and cost per install; conversion rate (impressions-to-installs percentage)—small improvements here compound across millions of impressions; and quality metrics like retention rate, session engagement, and rating trends. These metrics together show whether ranking improvements translate to actual user acquisition from engaged users.'
    },
    {
      id: '7',
      question: 'How long does it typically take to see results from a Full-Cycle ASO strategy?',
      answer: 'ASO is an ongoing process with compound effects. While some initial improvements may be visible within 2-4 weeks as metadata changes take effect, significant ranking improvements typically appear within 3-6 months of consistent effort. However, the ongoing monitoring and optimization phase means improvements continue indefinitely—the longer you maintain the strategy, the stronger your competitive position becomes.'
    },
    {
      id: '8',
      question: 'Does the Full-Cycle ASO approach work for all app categories?',
      answer: 'Yes, the framework applies universally, but emphasis varies by category. Games benefit most from conversion optimization (icons, screenshots, videos) with active review management since audiences are review-sensitive. Utilities emphasize keyword research and metadata for function-specific searches with clear benefit-focused titles. Social apps balance discovery keywords with visual design and social proof through ratings. The core four-phase framework adapts to each category\'s unique requirements.'
    },
    {
      id: '9',
      question: 'What role does Continuous Monitoring and Optimization play?',
      answer: 'Continuous monitoring ensures your app stays competitive over time. This phase includes: daily ranking tracking for target keywords to understand movement and competitive pressure; performance analytics tracking downloads, conversion rates, retention, and engagement; competitive intelligence monitoring what competitors are doing with their metadata and keywords; and iterative A/B testing where small improvements compound into significant gains. Optimization is never truly complete—successful apps treat this as an ongoing process.'
    },
    {
      id: '10',
      question: 'How should we handle competitor analysis in Full-Cycle ASO?',
      answer: 'Comprehensive competitor analysis informs your entire strategy. Analyze which keywords competitors rank for and why, examine their metadata strategies (app names, subtitles, keyword fields), study their visual design choices (icon styles, screenshot messaging), and track their rating trends and review management. This intelligence helps identify ranking gaps, optimization opportunities, and potential keywords to target. During the continuous monitoring phase, competitor intelligence becomes an ongoing practice.'
    },
    {
      id: '11',
      question: 'Can Full-Cycle ASO help apps in countries like USA, Indonesia, and India?',
      answer: 'Absolutely yes. While the four-phase framework is universal, localization requires adapting keyword research and metadata for regional preferences, search behaviors, and languages. For example, USA, Indonesia, and India markets may have different user intents, search volumes, and competitive landscapes for similar apps. A full-cycle ASO strategy accounts for these regional differences to optimize for each market independently.'
    },
    {
      id: '12',
      question: 'What tools and technology are essential for Full-Cycle ASO?',
      answer: 'A comprehensive full-cycle ASO strategy combines: keyword research platforms with deep search volume and trend data; ranking trackers for daily position monitoring across keywords and devices; A/B testing software for data-driven creative optimization; competitor intelligence systems that automate tracking of competitor strategies; and unified analytics dashboards providing complete performance visibility. These tools enable data-driven decision-making across all four phases.'
    },
    {
      id: '13',
      question: 'How do you prevent wasting traffic on keywords your app cannot convert?',
      answer: 'Full-cycle ASO prevents this through integration: keyword research ensures you target keywords aligned with what your app actually does. Metadata optimization then clearly communicates your app\'s value for those keywords. Visual design optimization maximizes the conversion of users who click through based on that metadata. Monthly performance analysis identifies if specific keywords are driving traffic without converting, allowing you to adjust either your targeting or your conversion elements accordingly.'
    },
    {
      id: '14',
      question: 'What is the Implementation Framework for Full-Cycle ASO?',
      answer: 'The framework consists of: Comprehensive Planning before implementation; Integrated Execution with all teams coordinating around unified strategy; Regular Communication sharing findings across all phases; Continuous Monitoring tracking all elements ongoing (not just at launch); and Data-Driven Iteration where every change is informed by performance data. This structured approach ensures coherence across keyword research, metadata optimization, visual design, and monitoring phases.'
    },
    {
      id: '15',
      question: 'How can misaligned keywords impact my app\'s ASO performance?',
      answer: 'When keywords don\'t align with your metadata and visual design, they create inefficiencies: you may rank well for keywords your listing cannot effectively communicate value for; traffic arrives but doesn\'t convert because your metadata contradicts the keyword\'s promise; inconsistent messaging between keywords, title, subtitle, and description confuses users; and resources are wasted on visibility that doesn\'t translate to downloads. Full-cycle ASO prevents this by ensuring every phase supports the others—keywords inform what your metadata communicates.'
    },
    {
      id: '16',
      question: 'Why should I work with an ASO agency for Full-Cycle optimization?',
      answer: 'Full-cycle ASO requires expertise across multiple domains: data analysis for keyword research, copywriting for metadata, design for visual optimization, analytics for performance tracking, and strategic thinking to connect all phases. An experienced ASO agency brings institutional knowledge of platform algorithms, access to advanced tools, tested methodologies, and coordinated execution across all phases. This integrated approach delivers better results faster than attempting fragmented DIY efforts.'
    },
    {
      id: '17',
      question: 'How does A/B testing fit into the Full-Cycle ASO strategy?',
      answer: 'A/B testing is central to the Conversion Optimization and Continuous Monitoring phases. You systematically test different icon designs to measure click-through rates, screenshot variations to compare conversion percentages, preview video formats, and even small metadata changes like subtitle variations. Rather than guessing what works, A/B testing lets data drive decisions. Over time, small improvements compound—a 1% conversion lift across millions of impressions becomes significant download volume gains.'
    },
    {
      id: '18',
      question: 'What happens after my app ranks well? Does optimization stop?',
      answer: 'No, ranking well is a starting point, not the finish line. The Continuous Monitoring phase ensures you maintain and improve that position through: daily tracking to understand competitive pressure and ranking volatility; performance analytics ensuring conversions stay strong; competitive intelligence to stay ahead of competitor optimization efforts; and iterative testing to compound improvements. Strong apps treat ASO as an ongoing discipline, not a one-time project, which is why full-cycle approaches emphasize continuous monitoring.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Full-Cycle ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about comprehensive App Store Optimization from keyword research to conversion</p>
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

export default FullCycleASOFaq;
