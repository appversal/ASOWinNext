'use client';

import React, { useState } from 'react';

const HiringASOExpertFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is the difference between an ASO Expert and an ASO Agency?',
      answer: 'An ASO Expert (freelancer or consultant) typically specializes in one or more aspects of ASO and works independently. They offer flexibility, often lower cost, and specialized focus. An ASO Agency employs multiple specialists (keyword researchers, designers, developers, analysts), provides comprehensive full-cycle services, follows established processes, and has higher costs. Choose a freelancer for specific tasks; choose an agency for comprehensive strategy and portfolio management.'
    },
    {
      id: '2',
      question: 'How much should I budget for hiring an ASO Expert?',
      answer: 'Pricing varies dramatically: Freelancers typically range $50-200/hour or $2,000-10,000 for projects. Specialized consultants $150-300+/hour. Agencies have project-based fees ($5,000-25,000+) or monthly retainers ($3,000-20,000+). Your budget depends on hiring model (freelancer vs. agency), project scope (comprehensive vs. specific task), market competitiveness, and app complexity. Higher investment usually correlates with better results and more experienced professionals.'
    },
    {
      id: '3',
      question: 'What should I look for in case studies and client proof?',
      answer: 'Look for: Specific metrics (percentage improvements, not vague percentages); before/after comparisons; realistic timelines; apps in your category; permission to contact clients as references; honest discussion of challenges faced and how they were overcome. Be skeptical of: Generic metrics (\"top rankings\"), unnamed apps, vague claims, unrealistic improvements (500% download gains in weeks), or refusal to share results due to NDAs. Request anonymized data if NDAs prevent named examples.'
    },
    {
      id: '4',
      question: 'How do I know if an ASO Expert understands my market (e.g., Delaware, California)?',
      answer: 'Ask about their regional market experience directly. Good indicators: Named apps they\'ve optimized in your region; understanding of regional user behavior and device preferences; knowledge of local competition; experience with regional language nuances or cultural factors; discussion of how strategies differ by region. Red flags: Treating all US markets identically, no regional case studies, inability to discuss market-specific challenges or opportunities.'
    },
    {
      id: '5',
      question: 'Is ASO the same as SEO? Can an SEO expert do ASO?',
      answer: 'No, they\'re different disciplines. SEO targets web search; ASO targets app store search. While principles overlap (keyword research, user intent), the algorithms, platforms, ranking factors, and tools differ significantly. An SEO expert may understand some ASO concepts but likely lacks platform-specific expertise. Specialized ASO experts deliver better results. Some professionals develop both skill sets, but verify their ASO-specific experience and results before hiring.'
    },
    {
      id: '6',
      question: 'How long does it take to see results from ASO optimization?',
      answer: 'Realistic timeline: Weeks 1-2: Changes implemented (metadata updates, screenshots); Weeks 2-4: Initial ranking movement visible; Weeks 4-8: Meaningful ranking changes; Months 2-3: Download volume increases become apparent; Months 3-6: Significant compounding effects visible. Full impact requires 3-6 months. Anyone promising overnight results is overselling. However, changes to top-ranking keywords show movement faster than competitive keywords requiring significant ranking gains.'
    },
    {
      id: '7',
      question: 'Should I hire an ASO Expert just for keyword research, or should I get full-cycle optimization?',
      answer: 'Full-cycle optimization delivers better ROI because phases integrate: keyword research informs metadata; metadata attracts traffic; visual design converts traffic; monitoring enables continuous improvement. However, budget constraints matter. If forced to choose, keyword research is foundational—bad keywords waste all downstream efforts. If you can afford it, full-cycle optimization from quality experts delivers superior results and faster timeline.'
    },
    {
      id: '8',
      question: 'What red flags should disqualify an ASO Expert candidate?',
      answer: 'Major red flags: Guaranteed rankings; no case studies or client references; one-size-fits-all approach; no interest in your business goals; dismissing your concerns; unwillingness to sign clear contracts; no discussion of timelines or ROI; suggesting manipulative tactics (fake reviews); not staying current with platform changes; treating ASO as isolated tasks rather than integrated strategy. These signal experience gaps or quality issues.'
    },
    {
      id: '9',
      question: 'How important is category-specific experience for an ASO Expert?',
      answer: 'Very important. ASO differs dramatically by category: Games require heavy visual optimization; Utilities emphasize keyword research and metadata; Finance apps face strict App Store review standards; Social apps need community building strategies. An expert with your category experience understands these nuances, category-specific competitive dynamics, and has data from similar apps. Category generalists lack context. Prioritize category expertise, especially for competitive categories.'
    },
    {
      id: '10',
      question: 'Should I hire someone full-time or use a consultant/agency?',
      answer: 'Depends on your company: Full-time hire if: ASO is central to business; you have long-term commitment and budget; you want deep company immersion. Consultant/Agency if: You need specialized expertise without full-time commitment; your app development is intermittent; you want multiple specialists (you can\'t get strategy AND design AND analytics in one person); you want flexibility to scale. Many companies use agencies initially, then hire full-time ASO managers as programs mature.'
    },
    {
      id: '11',
      question: 'How do I verify that an ASO Expert truly understands both Apple App Store and Google Play?',
      answer: 'Ask specific questions: What are your differences in keyword research between platforms? How do you optimize differently for each? What metadata fields are unique to each? Discuss recent algorithm updates for each platform. Request case studies for both platforms. Ask about platform-specific tools they use. Listen for discussion of iOS vs. Android user behavior differences, performance metrics, and ranking factors. If they discuss platforms identically, they lack deep expertise.'
    },
    {
      id: '12',
      question: 'What should I expect in terms of communication and reporting from an ASO Expert?',
      answer: 'Expect: Regular reporting (weekly minimum, monthly best practice); clear KPI dashboards showing keywords, rankings, downloads, conversion rates; explanation of what changed and why; honest assessment of progress; transparent discussion of challenges; proactive sharing of opportunities. Communication frequency depends on engagement level. Ask candidates about their reporting practice during hiring. Poor communication about results is a red flag—you should understand progress at all times.'
    },
    {
      id: '13',
      question: 'How does an ASO Expert connect reputation and review management to rankings?',
      answer: 'Good experts understand ratings significantly impact rankings and conversion. They discuss: Systematic review monitoring; strategies to encourage positive reviews ethically; professional response protocols for negative reviews; sentiment analysis of review language; how review trends affect algorithm signals; integration of review insights into product roadmap. Poor candidates ignore reviews or suggest manipulative tactics. Ask how they\'ve improved client ratings and the resulting ranking improvements—this reveals their understanding of the connection.'
    },
    {
      id: '14',
      question: 'What questions should I ask references when checking an ASO Expert\'s background?',
      answer: 'Ask references: Did they deliver promised results? Was the timeline accurate? How was communication? Did they explain technical concepts clearly? Were they proactive or reactive? Did ratings/rankings improve as promised? Would you hire them again? What could they improve? Ask for examples of challenges faced and how they handled them. Ask if they\'re still working with the expert (retention indicates satisfaction). Trust references more than promises.'
    },
    {
      id: '15',
      question: 'Should pricing be based on hourly rates, project fees, or performance?',
      answer: 'Different models suit different situations: Hourly works for: consulting, strategic guidance, ad-hoc work. Project fees work for: specific tasks (keyword research, icon design), clear scope. Retainer (monthly) works for: ongoing optimization, continuous monitoring, long-term partnership. Performance-based (rare) works for: high-certainty tasks with agreed metrics. Best practice: Retainers align incentives long-term and encourage strategic thinking. Ask candidates about options and pricing flexibility. Hybrid models (base retainer + performance bonus) balance cost and incentive alignment.'
    },
    {
      id: '16',
      question: 'How should I evaluate an ASO Expert\'s approach to A/B testing?',
      answer: 'Good experts treat A/B testing as continuous practice: Testing methodology (statistical significance, sample size); which elements they test (icons, screenshots, descriptions, keywords); how they measure success; cycle time for testing; integration of testing into strategy. They discuss: Testing isn\'t one-time activity; small improvements compound; data drives all decisions; testing requires ongoing budget and discipline. Poor candidates ignore testing or treat it as one-time effort. Ask for examples of successful tests and how results drove strategy changes.'
    },
    {
      id: '17',
      question: 'What should I ask about their experience with multi-app portfolio optimization?',
      answer: 'If you have multiple apps, ask: How do you prevent cannibalization? How do you segment keywords across apps? What\'s your approach to portfolio-level strategy? Can you manage cross-promotion between apps? How do you prioritize optimization efforts across portfolio? How do you track portfolio metrics vs. individual app metrics? Portfolio optimization requires strategic thinking beyond single-app expertise. If you have multiple apps, experience with portfolio management is valuable.'
    },
    {
      id: '18',
      question: 'How does an ASO Expert connect App Store Optimization to business goals?',
      answer: 'Good experts ask: What\'s your business model (freemium, paid, in-app purchase)? What metrics matter most (downloads, revenue, retention)? What are your growth targets? Who is your target user? What\'s your competitive landscape? They understand ASO metrics (rankings, downloads) must connect to business metrics (revenue, retention, user quality). Poor candidates focus only on rankings without understanding business context. During hiring, assess whether candidates ask about your business or only talk ASO tactics.'
    },
    {
      id: '19',
      question: 'What happens after the initial ASO optimization project completes?',
      answer: 'Ask candidates: Do you provide ongoing monitoring? How much does continuous optimization cost? How often do you test and refine? How do you handle algorithm updates? Do rankings require maintenance effort? Most experts charge for ongoing work—ASO isn\'t completed at some point; it requires continuous effort. Realistic experts discuss ongoing costs. Be wary of anyone suggesting optimization is ever truly \"done.\" Plan for continuous investment to maintain and improve positions.'
    },
    {
      id: '20',
      question: 'How do I know if an App Store Optimization Expert is the right strategic fit for my company?',
      answer: 'Beyond expertise assessment, evaluate cultural fit: Do they ask questions about your goals and constraints? Do they listen and adapt recommendations? Are they willing to collaborate with your team? Do they explain technical concepts clearly? Can you see a long-term partnership? Do they push back with data when you disagree? Do they acknowledge what they don\'t know? Do they prioritize your success or just billing? Trust your instincts—good partnerships involve mutual respect. The best expert is one you enjoy working with and trust implicitly.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">Hiring an ASO Expert: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about finding, evaluating, and hiring the right App Store Optimization professional</p>
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

export default HiringASOExpertFaq;
