'use client';
import React from 'react';

const PaidUAWorkflowSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Market & Competitor Analysis',
      description: 'We analyze your category, competitors, and growth opportunities to identify strategic advantages.'
    },
    {
      number: 2,
      title: 'Campaign Strategy Development',
      description: 'Custom acquisition strategies are created based on your goals, audience, and budget.'
    },
    {
      number: 3,
      title: 'Campaign Setup & Launch',
      description: 'Campaigns are structured and optimized for scalable performance across platforms.'
    },
    {
      number: 4,
      title: 'Continuous Optimization',
      description: 'Keywords, bids, creatives, and targeting are refined continuously for better results.'
    },
    {
      number: 5,
      title: 'Reporting & Scaling',
      description: 'Performance insights help maximize ROI and support long-term growth scaling.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Paid Growth Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven 5-step process to accelerate your app's visibility and installs
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-8 md:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 md:gap-8">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-full bg-gradient-to-br from-[#fdb124] to-[#e09910] text-white shadow-lg">
                  <span className="text-2xl md:text-3xl font-bold">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pt-2 md:pt-4">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaidUAWorkflowSection;
