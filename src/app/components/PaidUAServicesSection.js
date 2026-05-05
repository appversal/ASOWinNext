'use client';
import React, { useState } from 'react';

const PaidUAServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: 'Apple Search Ads Management',
      description: 'Apple Search Ads place your app directly in front of users actively searching within the App Store.',
      points: [
        'Campaign setup and structuring',
        'Keyword targeting strategy',
        'Bid optimization',
        'Search match optimization',
        'Audience segmentation',
        'Custom Product Page integration'
      ]
    },
    {
      title: 'Google App Campaign Optimization',
      description: 'We create and optimize Google App Campaigns focused on scalable user acquisition across multiple channels.',
      points: [
        'Google Play Store campaigns',
        'YouTube reach expansion',
        'Google Search integration',
        'Display Network optimization',
        'Discover Feed campaigns',
        'Audience targeting refinement'
      ]
    },
    {
      title: 'Keyword & Bid Optimization',
      description: 'Effective paid growth depends on continuous optimization across all campaign elements.',
      points: [
        'High-performing keyword refinement',
        'Dynamic bid strategy adjustment',
        'Cost-per-install efficiency',
        'Search relevance optimization',
        'Audience targeting refinement',
        'Campaign segmentation strategy'
      ]
    },
    {
      title: 'Audience Targeting & Segmentation',
      description: 'Not every install delivers value. We identify and target audiences based on quality metrics.',
      points: [
        'User intent analysis',
        'Geographic targeting',
        'Device behavior tracking',
        'Demographic segmentation',
        'App usage patterns',
        'Market performance insights'
      ]
    },
    {
      title: 'Creative Optimization for Paid Campaigns',
      description: 'Creative performance directly impacts campaign efficiency and user acquisition costs.',
      points: [
        'Ad creative optimization',
        'App screenshot testing',
        'Video preview creation',
        'Store listing alignment',
        'Audience-specific messaging',
        'Conversion-focused visuals'
      ]
    },
    {
      title: 'ASO + Paid Acquisition Integration',
      description: 'Paid campaigns work best when aligned with App Store Optimization strategies.',
      points: [
        'Improve keyword rankings',
        'Increase search visibility',
        'Strengthen conversion rates',
        'Accelerate install momentum',
        'Improve organic discovery',
        'Reduce long-term paid dependency'
      ]
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Paid Acquisition Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for scaling your app growth across premium advertising platforms
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative h-full rounded-2xl overflow-hidden border border-gray-200 hover:border-[#014458] transition-all duration-500 cursor-pointer hover:shadow-xl"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#014458]/5 to-[#fdb124]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full flex flex-col p-6 md:p-8">
                {/* Icon */}
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-[#fdb124]/10 rounded-lg group-hover:bg-[#fdb124]/20 transition-colors">
                  <svg className="w-6 h-6 text-[#fdb124]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#014458] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Points List */}
                <div className="space-y-2 flex-grow">
                  {service.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-[#fdb124] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-gray-700 text-sm">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-[#FFF4E6] to-[#FFE8D1] rounded-2xl border border-[#fdb124]/20">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900">Effective paid growth</span> depends on continuous optimization. Performance insights help maximize ROI while maintaining stable growth performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaidUAServicesSection;
