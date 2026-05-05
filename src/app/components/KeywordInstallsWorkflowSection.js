'use client';
import React from 'react';

const KeywordInstallsWorkflowSection = () => {
  const steps = [
    {
      number: 1,
      title: 'Keyword Research & Analysis',
      description: 'We identify high-impact keywords with strong growth potential.'
    },
    {
      number: 2,
      title: 'Competitor Benchmarking',
      description: 'We analyze competitor rankings and search positioning.'
    },
    {
      number: 3,
      title: 'Campaign Planning',
      description: 'Keyword targeting strategies are developed based on category trends and ranking opportunities.'
    },
    {
      number: 4,
      title: 'Controlled Campaign Execution',
      description: 'Install campaigns are executed strategically with continuous monitoring.'
    },
    {
      number: 5,
      title: 'Performance Optimization',
      description: 'Campaigns are refined based on ranking movement, visibility growth, and search performance data.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Keyword Install Workflow
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach to keyword ranking improvement and sustainable growth
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

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[50px] w-1 h-12 bg-gradient-to-b from-[#fdb124] to-transparent mt-6 ml-[-40px]" />
                )}
              </div>

              {/* Divider line for mobile */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] w-0.5 h-20 bg-gradient-to-b from-[#fdb124] to-transparent md:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordInstallsWorkflowSection;
