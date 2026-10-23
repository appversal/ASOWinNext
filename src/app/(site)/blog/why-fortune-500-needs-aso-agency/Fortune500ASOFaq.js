'use client';

import React, { useState } from 'react';

const Fortune500ASOFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'Why do Fortune 500 companies struggle with app store visibility despite their brand recognition?',
      answer: 'Brand recognition doesn\'t translate to app store rankings because app store algorithms prioritize different factors than traditional marketing. Apple App Store and Google Play prioritize keywords in metadata, download velocity, user engagement metrics, conversion rates, and ratings/reviews. A startup with optimized metadata can outrank a Fortune 500 company with poor optimization. App stores don\'t rank by company size—they rank by relevance, engagement, and user satisfaction.'
    },
    {
      id: '2',
      question: 'What makes ASO different from traditional digital marketing and SEO?',
      answer: 'ASO (App Store Optimization) is fundamentally different because it operates within closed app store ecosystems with unique algorithms. Unlike SEO which targets web search, ASO must optimize for app store search algorithms, which value download velocity, user retention, in-app engagement, and conversion rates. Additionally, ASO requires platform-specific expertise for both Apple App Store and Google Play, which have different ranking factors, review systems, and metadata requirements.'
    },
    {
      id: '3',
      question: 'Why can\'t Fortune 500 companies handle ASO with in-house teams?',
      answer: 'Fortune 500 companies often struggle with ASO internally because: 1) Specialized expertise - ASO requires distinct skills that differ from marketing, design, or product teams\' core competencies; 2) Algorithm blindness - Apple and Google frequently update algorithms, making it hard for internal teams to keep pace; 3) Limited tools - Competitive intelligence platforms and ASO tools are expensive and specialized; 4) Diluted focus - Generalist teams struggle to prioritize ASO with competing responsibilities. A dedicated ASO agency focuses exclusively on this expertise.'
    },
    {
      id: '4',
      question: 'How much faster can an external ASO agency deliver results compared to in-house teams?',
      answer: 'Dedicated ASO agencies typically complete optimization cycles in weeks, not months. Because they focus exclusively on app optimization and have refined processes, they can implement keyword research, metadata optimization, A/B testing, and monitoring much faster than internal teams juggling multiple responsibilities. For Fortune 500 companies managing multiple apps, this speed advantage compounds significantly—getting apps to market faster and achieving top rankings quicker.'
    },
    {
      id: '5',
      question: 'What kind of ROI should Fortune 500 companies expect from ASO investment?',
      answer: 'Typical improvements include 150-300% increase in organic downloads within 6 months, 40-60% reduction in customer acquisition cost from organic channels, 30-50% improvement in conversion rates, and achievement of top-10 rankings for priority keywords. For major apps with millions of users, these improvements translate directly to millions in additional revenue. Additionally, organic users acquired through ASO have 2-3x better 30-day retention compared to paid cohorts and higher lifetime value.'
    },
    {
      id: '6',
      question: 'How does competitive intelligence from an ASO agency help Fortune 500 companies?',
      answer: 'Top-tier ASO agencies provide real-time competitor tracking, showing which keywords competitors rank for and why, what their metadata strategies are, how their ratings and reviews compare, and emerging trends in your app category. This intelligence helps Fortune 500 companies identify ranking gaps, find high-opportunity keywords, understand competitive pressure, and adjust strategies proactively. Without this intelligence, companies are essentially guessing at their market position.'
    },
    {
      id: '7',
      question: 'Do ASO agencies work with both Apple App Store and Google Play?',
      answer: 'Top ASO agencies provide platform expertise for both ecosystems. Apple App Store and Google Play have different algorithms, review systems, keyword fields, and ranking factors. A comprehensive ASO strategy requires understanding both platforms\' unique requirements and optimizing metadata, keywords, and visuals accordingly. Because both platforms are essential for Fortune 500 apps serving global audiences, agencies must have deep expertise in both systems.'
    },
    {
      id: '8',
      question: 'How do ASO agencies prevent the problem of ranking for keywords your app cannot convert?',
      answer: 'A good ASO agency follows a full-cycle approach: 1) Strategic keyword research identifies high-intent, achievable keywords aligned with your app\'s actual features; 2) Metadata optimization clearly communicates your app\'s value for those keywords; 3) Visual design (icons, screenshots, videos) maximizes conversion of users who click through; 4) Continuous monitoring tracks whether specific keywords drive traffic that converts. This integrated approach prevents wasted visibility on keywords your app cannot serve effectively.'
    },
    {
      id: '9',
      question: 'What role does localization play in ASO for Fortune 500 companies operating in multiple markets?',
      answer: 'Localization is critical for global Fortune 500 apps. This goes beyond translation to include keyword research for each market (search volumes and intent differ by language/region), cultural adaptation of metadata and messaging, regional competition analysis, and platform preferences (some markets favor Apple, others Android). Companies operating in USA, Europe, Asia, and other regions need market-specific optimization strategies rather than one-size-fits-all approaches. Top ASO agencies handle localization across multiple languages and markets.'
    },
    {
      id: '10',
      question: 'How should Fortune 500 companies evaluate prospective ASO agencies?',
      answer: 'Key evaluation criteria include: Enterprise experience - proven success with Fortune 500 and large-scale apps; Transparent reporting - detailed metrics on rankings, downloads, conversion rates, and ROI; Platform expertise - deep knowledge of both Apple App Store and Google Play algorithms; Localization capabilities - ability to optimize for multiple markets and languages; Continuous optimization focus - emphasis on ongoing testing and refinement rather than one-time solutions; Team credentials - experienced practitioners with app optimization backgrounds.'
    },
    {
      id: '11',
      question: 'What metrics matter most for measuring ASO success?',
      answer: 'Key metrics include: Keyword rankings - position improvements for priority keywords across both platforms; Organic downloads - total volume, trends, and sources; Conversion rate - impressions-to-installs percentage (critical because small improvements compound across millions of impressions); User quality - retention rates, session engagement, and rating trends (important for long-term app success); Cost per install - comparing organic CAC to paid acquisition; Competitive benchmarking - how your rankings and metrics compare to competitors.'
    },
    {
      id: '12',
      question: 'Can an ASO agency help prevent app cannibalization for companies with multiple similar apps?',
      answer: 'Yes, this is a critical service for Fortune 500 companies with app portfolios. When a company has multiple similar apps, poor optimization can result in them competing for the same keywords, confusing users about which app to download, or cannibalizing each other\'s install volume. A specialized ASO agency can segment keywords across your portfolio, optimize metadata to differentiate apps by use case or audience, coordinate your strategy to maximize total portfolio downloads, and prevent internal competition for visibility.'
    },
    {
      id: '13',
      question: 'How often should ASO strategies be updated and refined?',
      answer: 'ASO is not a one-time project. Successful strategies require continuous monitoring and refinement because: 1) App store algorithms change frequently - platforms update ranking factors and display algorithms multiple times per year; 2) Competition evolves - competitors launch new apps and update their optimization strategies; 3) User behavior shifts - search trends and user intent change seasonally and over time; 4) A/B testing drives improvement - small iterative changes compound into significant gains. Top agencies treat ASO as an ongoing discipline with monthly monitoring and quarterly strategic reviews.'
    },
    {
      id: '14',
      question: 'Do ASO services include review and rating management?',
      answer: 'Yes, comprehensive ASO includes review and rating management because ratings significantly impact rankings and conversion rates. This involves monitoring user reviews, responding professionally to positive and negative feedback, understanding sentiment trends, developing strategies to encourage satisfied users to leave reviews, and managing the overall star rating to maintain 4+ average. This builds trust signals that improve rankings and increase conversion rates. It\'s distinct from paid review manipulation—legitimate agencies focus on encouraging genuine reviews from satisfied users.'
    },
    {
      id: '15',
      question: 'How do ASO agencies conduct A/B testing for apps?',
      answer: 'A/B testing in ASO is systematic and data-driven. Common test elements include: icon variations to identify highest click-through rate designs; screenshot sequences and copy messaging to maximize conversion percentage; preview video formats and lengths; metadata variations like subtitle or keyword field combinations; and even small description changes. Agencies track performance metrics for each variation, identify statistical significance, and implement winning variations while continuously testing new improvements. This testing culture drives incremental gains that compound over time.'
    },
    {
      id: '16',
      question: 'Is ASO investment essential for Fortune 500 companies in 2026?',
      answer: 'Yes, ASO investment is now a strategic imperative rather than optional. In 2026\'s crowded app marketplace where millions of apps compete for visibility: 1) Your competitors are invested in specialized ASO; 2) Organic users have better retention and lifetime value than paid users; 3) App store discovery is the primary way users find apps; 4) Competing on brand name alone is insufficient for app visibility; 5) ASO delivers measurable ROI through increased downloads and reduced acquisition costs. Fortune 500 companies cannot afford to leave app store visibility to chance.'
    },
    {
      id: '17',
      question: 'How does an ASO agency help manage portfolio strategy across multiple apps?',
      answer: 'For Fortune 500 companies with multiple apps, a strategic ASO agency provides portfolio-level optimization including: keyword segmentation - dividing keywords across apps by target audience and use case; cross-promotion strategies - using apps to drive installs for complementary apps; cannibalization prevention - preventing competitive apps from competing for identical rankings; market expansion - identifying which apps can succeed in new geographic markets; resource optimization - prioritizing optimization efforts based on revenue impact; coordinated monitoring - tracking the portfolio\'s collective performance and competitive position in your category.'
    },
    {
      id: '18',
      question: 'What\'s the difference between organic ASO and paid user acquisition, and should companies do both?',
      answer: 'ASO drives organic downloads through app store optimization (free channel); paid user acquisition focuses on advertising to drive installs (paid channels). Both strategies complement each other: ASO provides sustainable, long-term organic growth with low CAC and high lifetime value; paid acquisition accelerates early-stage growth and tackles competitive keywords aggressively. Fortune 500 companies benefit from both—ASO for sustainable baseline organic growth, and paid acquisition for strategic scaling. A balanced approach maximizes total downloads while optimizing cost structure.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Fortune 500 & ASO: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything enterprise companies need to know about App Store Optimization agencies and strategies</p>
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

export default Fortune500ASOFaq;
