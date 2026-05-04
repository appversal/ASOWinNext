'use client';
import React from 'react';

const CreativeABTestingWorkflowSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Creative Audit',
      description: 'We analyze your current app store visuals and identify conversion gaps.'
    },
    {
      number: '2',
      title: 'Competitor Benchmarking',
      description: 'We study top-performing competitors and category trends.'
    },
    {
      number: '3',
      title: 'Design Strategy Development',
      description: 'Our team creates conversion-focused visual concepts tailored to your audience.'
    },
    {
      number: '4',
      title: 'A/B Testing Execution',
      description: 'We test multiple variations to identify winning creative combinations.'
    },
    {
      number: '5',
      title: 'Performance Optimization',
      description: 'Winning assets are continuously refined for sustained growth and improved conversion.'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Creative Testing Workflow
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-[600px] mx-auto">
            A systematic approach to creating and optimizing high-converting app store creatives
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

export default CreativeABTestingWorkflowSection;
