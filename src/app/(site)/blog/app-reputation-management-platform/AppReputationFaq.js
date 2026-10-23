'use client';

import React, { useState } from 'react';

const AppReputationFaq = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqData = [
    {
      id: '1',
      question: 'What is an App Reputation Management Platform?',
      answer: 'An App Reputation Management Platform is a specialized tool that aggregates reviews from Apple App Store and Google Play, analyzes review sentiment, tracks rating trends, manages developer responses, and identifies insights from user feedback. It centralizes reputation data, automates response workflows, and connects reputation metrics to app store algorithm performance and organic download growth.'
    },
    {
      id: '2',
      question: 'How do app ratings directly impact downloads and visibility?',
      answer: 'App store algorithms heavily weight ratings in their ranking factors. Apps with 4+ star ratings rank significantly higher than lower-rated competitors for relevant keywords. Additionally, user reviews directly influence download decisions—potential users read reviews before installing. A single star improvement can dramatically improve both visibility (through ranking boosts) and conversion rates (through increased user confidence), directly increasing organic downloads.'
    },
    {
      id: '3',
      question: 'Why is manual review management ineffective?',
      answer: 'Manual review management fails to scale because: 1) Teams miss reviews due to platform fragmentation; 2) Slow response times frustrate users; 3) Inconsistent messaging across responses damages brand voice; 4) No systematic pattern analysis of why users leave certain ratings; 5) As apps grow to millions of users, hundreds of reviews arrive daily—manual processes become impossible. A dedicated platform scales efficiently.'
    },
    {
      id: '4',
      question: 'How should review responses be handled?',
      answer: 'Effective review responses are personalised, not generic. While templates provide consistency, each response should acknowledge the specific issue mentioned. For negative reviews, a thoughtful response that apologizes for problems and outlines solutions demonstrates care and transforms negative sentiment into brand loyalty. For positive reviews, genuine thank-you messages build community. Response rates and sentiment improvement both signal quality to app store algorithms.'
    },
    {
      id: '5',
      question: 'Can we generate reviews without violating app store policies?',
      answer: 'Yes, ethical review generation is possible and effective. Best practices include: 1) Requesting reviews during positive user experiences; 2) Using in-app prompts at optimal moments (after successful completion, high-value feature usage); 3) Making review requests optional, not mandatory; 4) Filtering dissatisfied users before they reach app stores (offer support instead); 5) Never paying for reviews or requiring reviews for app functionality. Ethical approaches improve positive review volume sustainably.'
    },
    {
      id: '6',
      question: 'How does review sentiment analysis improve ASO?',
      answer: 'Review sentiment analysis provides critical insights for ASO optimization: 1) Identifies common pain points that indicate metadata misalignment or conversion friction; 2) Extracts feature keywords users naturally employ, informing keyword research strategy; 3) Reveals onboarding issues impacting retention, guiding visual design and description improvements; 4) Surfaces competitive differentiators mentioned positively in reviews; 5) Identifies PR opportunities (positive reviews show which features generate enthusiasm). This intelligence directly improves every ASO phase.'
    },
    {
      id: '7',
      question: 'What\'s the typical impact on rankings when app ratings improve?',
      answer: 'A 1-star rating increase typically improves keyword rankings by 20-40% depending on competitive landscape and review volume. Apps with 4+ star ratings rank significantly higher than 3-star competitors for identical keywords. The ranking boost compounds because improved visibility leads to more downloads, which generate more reviews, which further strengthen rankings. This creates a virtuous cycle where reputation improvement multiplies through ASO.'
    },
    {
      id: '8',
      question: 'How do ratings connect to conversion rates?',
      answer: 'Apps with 4+ star ratings convert 35-50% higher than lower-rated competitors. Potential users browsing app stores choose the highest-rated option when faced with similar apps. Negative reviews create friction—users become concerned about quality issues mentioned in reviews. Better ratings reduce user hesitation and increase confidence, directly improving the impression-to-install conversion percentage. This conversion uplift dramatically multiplies across millions of impressions.'
    },
    {
      id: '9',
      question: 'Should we respond to negative reviews differently than positive reviews?',
      answer: 'Yes, absolutely. For positive reviews, brief, genuine thank-you messages build community and encourage further engagement. For negative reviews, take time to: 1) Acknowledge the specific issue; 2) Apologize sincerely; 3) Explain how the problem is being addressed; 4) Offer direct support if appropriate. A thoughtful response to a negative review often results in users updating their review positively, demonstrating issue resolution to potential users and improving sentiment signals.'
    },
    {
      id: '10',
      question: 'How does review monitoring connect to product development?',
      answer: 'The most successful apps treat reviews as product roadmap input. Review analysis reveals feature requests, pain points, bugs end-users report before internal QA catches them, and usability confusion. By systematically analyzing review feedback, product teams prioritize fixes that improve user satisfaction (which improves ratings) and address the most common friction points. This data-driven approach to product improvement is more reliable than assumptions.'
    },
    {
      id: '11',
      question: 'What metrics should we track for reputation management success?',
      answer: 'Key metrics include: 1) Star rating trajectory—is average rating improving? 2) Review velocity—daily/weekly review volume growth; 3) Sentiment shift—are reviews becoming more positive over time?; 4) Response rate—percentage of reviews receiving developer responses; 5) Ranking impact—correlation between rating improvements and keyword ranking gains; 6) Download correlation—organic download volume changes following reputation improvements; 7) Retention metrics—do users acquired through improved ratings have better retention?'
    },
    {
      id: '12',
      question: 'Is competitive rating benchmarking important?',
      answer: 'Yes, competitive benchmarking is critical context. Knowing your app has a 4.2-star average means little without understanding: What\'s the competitive average in your category? Are leading apps 4.7 stars? Are you below category standard? This context reveals opportunities (catching up to leader ratings) and threats (new entrants with higher ratings). Benchmarking also surfaces competitive reputation management tactics that might be effective for your app.'
    },
    {
      id: '13',
      question: 'How should we handle review trends and seasonal patterns?',
      answer: 'Apps typically experience rating fluctuations based on: 1) Feature releases (new features temporarily generate reviews); 2) Bugs (negative comments spike when issues arise); 3) Seasonal usage patterns; 4) Competitive app launches. A good reputation platform tracks these patterns, helping teams distinguish between normal fluctuation and actual quality problems. Understanding patterns allows teams to prepare for predictable downturns and capitalize on upward trends.'
    },
    {
      id: '14',
      question: 'Can reputation management complement paid user acquisition?',
      answer: 'Absolutely. Reputation management and paid acquisition serve different purposes: Paid acquisition drives volume quickly; reputation management builds quality signals and improves organic conversion. Together they\'re powerful: Paid campaigns drive traffic, high ratings convert that traffic at higher percentages, ensuring efficient paid spend ROI. Additionally, users acquired through high-rating visibility (organic) have better retention than average paid users, creating sustainable growth alongside paid acceleration.'
    },
    {
      id: '15',
      question: 'What should we avoid in reputation management?',
      answer: 'Critical pitfalls to avoid: 1) Fake reviews—purchased reviews or fabricated positive reviews violate policies and damage trust when discovered; 2) Ignoring negative feedback—problems don\'t disappear, they compound; 3) Generic responses—copy-paste responses further frustrate already frustrated users; 4) Rating obsession without quality focus—improving ratings through manipulation rather than genuine improvement is unsustainable; 5) Isolated management—reputation management disconnected from product improvements means underlying issues never get fixed.'
    },
    {
      id: '16',
      question: 'How does reputation management integrate into full-cycle ASO?',
      answer: 'Reputation management is core to full-cycle ASO: 1) Keyword research incorporates review keyword analysis; 2) Metadata effectiveness is validated through review mentions; 3) Visual design feedback comes from review analysis of confusing UI comments; 4) Conversion optimization targets friction points identified in negative reviews; 5) Continuous monitoring includes reputation tracking. Rather than a standalone function, reputation management informs every ASO phase.'
    },
    {
      id: '17',
      question: 'Should we actively encourage users to leave reviews?',
      answer: 'Yes, ethical and strategic review generation is effective. The best approach: 1) Request reviews during positive moments (after successful app completion, high-value feature usage, purchase completion); 2) Use in-app prompts strategically timed to when users are most satisfied; 3) Make requests optional and non-intrusive; 4) Never force reviews for functionality access; 5) Handle dissatisfied users separately—offer support before they reach app stores; 6) Accept that not all users will review, and that\'s fine. Quality review generation increases positive volume sustainably.'
    },
    {
      id: '18',
      question: 'How do app reputation platforms help with localization and international markets?',
      answer: 'For apps serving multiple countries, reputation management becomes sophisticated: 1) Monitor reviews in multiple languages and markets; 2) Track location-specific rating patterns; 3) Identify language-specific feedback patterns (e.g., data privacy concerns from European users); 4) Manage responses in multiple languages; 5) Benchmark against regional competitors; 6) Understand cultural differences in how users provide feedback. Top platforms handle international reputation complexity at scale.'
    },
    {
      id: '19',
      question: 'What\'s the ROI timeline for reputation management investment?',
      answer: 'Timeline expectations: Weeks 1-4: Review monitoring and first responses implemented; Weeks 5-8: Initial sentiment trends visible, some ranking improvements begin; Months 2-3: Significant rating improvements measurable, ranking gains become substantial; Months 3-6: Download volume increases become pronounced, organic growth acceleration visible. Full compound effects (where improved ratings generate more organic installs for more reviews) typically take 3-6 months to fully develop but create lasting sustainable growth.'
    },
    {
      id: '20',
      question: 'How important is reviewing review language trends for SEO?',
      answer: 'Very important. Users naturally employ certain keywords and phrases in reviews that diverge from industry terminology. By analyzing review language, ASO teams discover: 1) Keywords users actually search and care about; 2) Use-case specific terminology that generates real search volume; 3) Feature descriptions that resonate with your actual audience; 4) Common misconceptions about your app (indicating metadata clarity issues). This user-generated keyword intelligence is more authentic than traditional keyword research tools.'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[52px] font-light mb-4">App Reputation Management: Frequently Asked Questions</h2>
        <p className="text-gray-600 text-lg">Everything you need to know about using reputation management to drive app store visibility and organic growth</p>
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

export default AppReputationFaq;
