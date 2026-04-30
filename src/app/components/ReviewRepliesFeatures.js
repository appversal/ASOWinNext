import React from 'react';
import Image from 'next/image';

const ReviewRepliesFeatures = () => {
  const features = [
    {
      number: "01",
      title: "AI Trained For Your Brand",
      description: "Our proprietary AI learns and adapts to your brand's unique personality, style, and values. The more it works, the smarter it gets.",
      deliverables: [
        "Brand-Specific AI Training",
        "Continuous Learning from Your Feedback",
        "Personalized Brand Personality"
      ],
      bgColor: "from-[#ffd9b3] to-[#ffb366]",
      textColor: "text-orange-900"
    },
    {
      number: "02",
      title: "Brand Vernacular Matching",
      description: "Replies automatically adapt to your unique brand voice, tone, and communication style. No more generic responses.",
      deliverables: [
        "Custom Brand Voice Training",
        "Tone Consistency Across All Replies",
        "Multi-Language Brand Voice Support"
      ],
      bgColor: "from-[#ffb3dc] to-[#ff8eb3]",
      textColor: "text-red-800"
    },
    {
      number: "03",
      title: "10-Minute Lightning-Fast Replies",
      description: "Get intelligent, ready-to-send replies within 10 minutes of any review. Stay ahead of customer concerns.",
      deliverables: [
        "Real-Time Review Detection",
        "Instant AI Processing",
        "Immediate Notification Queue"
      ],
      bgColor: "from-[#e1f8ff] to-[#b3f0ff]",
      textColor: "text-blue-800"
    },
    {
      number: "04",
      title: "Smart Ticketing Integration",
      description: "Critical 1-star reviews automatically become tickets in your support system for immediate attention",
      deliverables: [
        "Auto-Ticket for 1-Star Reviews",
        "Custom Ticket Rules & Automation",
        "Integration with Jira, Linear, Zendesk"
      ],
      bgColor: "from-[#fff3e0] to-[#ffe0b2]",
      textColor: "text-orange-800"
    },
    {
      number: "05",
      title: "24/7 Fully Automated Responses",
      description: "No manual agents needed. Your reviews get intelligent, personalized replies 24/7 without human intervention",
      deliverables: [
        "Always-On Automation",
        "Zero Manual Work Required",
        "Consistent Quality Guaranteed"
      ],
      bgColor: "from-[#f0f4ff] to-[#d9e4ff]",
      textColor: "text-indigo-800"
    },
    {
      number: "06",
      title: "Weekly & Monthly Insights",
      description: "Get comprehensive reports tracking review volume, sentiment trends, and the impact of your automated replies",
      deliverables: [
        "Automated Weekly Summaries",
        "Monthly Performance Reports",
        "Sentiment Trend Analysis"
      ],
      bgColor: "from-[#e8f5e9] to-[#c8e6c9]",
      textColor: "text-green-800"
    }
  ];

  return (
    <section className="w-full bg-gray-50 pt-8 pb-4 md:pt-12 md:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Everything you need to automate, scale, and optimize your review management
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-4 md:space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Feature Card */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-lg">
                {/* Content Side */}
                <div className={`p-8 sm:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <span className="text-5xl font-bold text-[#fdb124] flex-shrink-0">{feature.number}</span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-[#111111]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-base sm:text-lg mb-8 leading-relaxed">
                    {feature.description}
                  </p>

                  <div>
                    <h4 className="text-[#fdb124] text-sm font-bold uppercase tracking-wider mb-4">Key Capabilities:</h4>
                    <ul className="space-y-2">
                      {feature.deliverables.map((item, idx) => (
                        <li key={idx} className="text-gray-700 text-base flex items-center gap-2">
                          <span className="text-[#fdb124] font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Visual Side */}
                <div className={`p-8 sm:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative w-full max-w-[500px] mx-auto transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={`/features_images/feature_${index + 1}.png`}
                      alt={feature.title}
                      width={800}
                      height={600}
                      className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewRepliesFeatures;
