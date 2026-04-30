import React from 'react';

const ReviewRepliesBenefits = () => {
  const benefits = [
    {
      title: "AI-Powered Personalization",
      description: "Generate contextual, personalized replies using advanced AI",
      icon: "🤖"
    },
    {
      title: "Brand Vernacular Matching",
      description: "Replies automatically match your brand voice and tone",
      icon: "🎯"
    },
    {
      title: "10-Minute Turnaround",
      description: "Get AI-generated replies ready within 10 minutes of new reviews",
      icon: "⚡"
    },
    {
      title: "24/7 Automation",
      description: "Eliminate manual agents - fully automated review responses",
      icon: "🔄"
    },
    {
      title: "Ticketing System Integration",
      description: "Auto-create tickets for 1-star reviews in your system",
      icon: "🎫"
    },
    {
      title: "Weekly & Monthly Reports",
      description: "Get comprehensive summaries of reviews and sentiment trends",
      icon: "📊"
    }
  ];

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-4">
            The Ultimate Review Reply Solution
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Fast. Smart. Automated. Never miss a review again with intelligent replies that match your brand and solve your support challenges.
          </p>
        </div>


      </div>
    </section>
  );
};

export default ReviewRepliesBenefits;
