'use client';
import React from 'react';

const AppReputationWorkflowSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Review & Sentiment Audit',
      description: 'We analyze your current ratings, review quality, and user perception.'
    },
    {
      number: '2',
      title: 'Feedback Categorization',
      description: 'User feedback is grouped into actionable insights and growth opportunities.'
    },
    {
      number: '3',
      title: 'Response Strategy Development',
      description: 'We create brand-aligned communication frameworks and escalation systems.'
    },
    {
      number: '4',
      title: 'Continuous Monitoring',
      description: 'We track review trends, sentiment shifts, and engagement performance in real time.'
    },
    {
      number: '5',
      title: 'Reporting & Optimization',
      description: 'Detailed reporting helps improve product, support, and communication strategies continuously.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Reputation Management Workflow
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            A systematic approach to building and maintaining strong app reputation
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200 h-full hover:border-[#fdb124] transition-all duration-300">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#fdb124] text-white font-bold text-lg mb-4">
                  {step.number}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-1/2 transform -translate-y-1/2 text-[#fdb124] text-2xl z-10">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppReputationWorkflowSection;
