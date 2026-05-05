'use client';
import React from 'react';

const AutomatedASOAIWorkflowSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Review & Reputation Audit',
      description: 'We analyze your current ratings, reviews, and user sentiment to establish baseline metrics.'
    },
    {
      number: 2,
      title: 'AI System Integration',
      description: 'Intelligent workflows are implemented for monitoring and engagement optimization.'
    },
    {
      number: 3,
      title: 'Automated Response Optimization',
      description: 'AI-assisted response systems are configured for faster and smarter communication.'
    },
    {
      number: 4,
      title: 'Continuous Sentiment Tracking',
      description: 'User feedback and reputation trends are monitored in real time with automated alerts.'
    },
    {
      number: 5,
      title: 'Growth & Reputation Optimization',
      description: 'Strategies are continuously refined to improve ratings, engagement, and user perception.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our AI-Powered ASO Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to AI-driven reputation management and growth
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

export default AutomatedASOAIWorkflowSection;
