'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const RelatedCaseStudies = ({ currentCaseStudy }) => {
  const allCaseStudies = [
    {
      id: 1,
      logo: '/pflogo.jpg',
      title: 'Pepperfry',
      description: 'Furniture E-Commerce',
      highlight: 'Ranked highest for category keyword with 10x increase',
      link: '/success-stories/pepperfry',
    },
    {
      id: 2,
      logo: '/iblogo.jpg',
      title: 'Indiabulls Securities',
      description: 'Financial Services',
      highlight: 'Ranked for 25+ unranked keywords with improved visibility',
      link: '/success-stories/indiabulls-securities',
    },
    {
      id: 3,
      logo: '/lsm.png',
      title: 'LSM Apps',
      description: 'Mobile Application',
      highlight: 'Achieved top rankings with +12,000 daily downloads',
      link: '/success-stories/lsm-apps',
    },
    {
      id: 4,
      logo: '/placeholder.jpg',
      title: 'Viker Games',
      description: 'Mobile Gaming',
      highlight: '#1 Free Games ranking with 500,000+ daily installs',
      link: '/success-stories/viker-games',
    },
    {
      id: 5,
      logo: '/placeholder.jpg',
      title: 'Bajaj Finserv',
      description: 'Fintech / CSAT',
      highlight: 'Custom CSAT integration across 90+ screens with improved ratings',
      link: '/success-stories/bajaj-finserv',
    },
    {
      id: 6,
      logo: '/placeholder.jpg',
      title: 'PlayOJO Games',
      description: 'Online Gaming / iGaming',
      highlight: 'Scaled first-time deposits with 500+ monthly conversions',
      link: '/success-stories/playojo-games',
    },
  ];

  const relatedStudies = allCaseStudies.filter((study) => study.id !== currentCaseStudy).slice(0, 2);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#7D6D54] mb-4">
            Other Success Stories
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore how we've helped other leading brands achieve remarkable ASO results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedStudies.map((study) => (
            <Link href={study.link} key={study.id}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer h-full">
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-12 w-12 flex-shrink-0">
                      <Image
                        src={study.logo}
                        alt={study.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#333333]">
                        {study.title}
                      </h3>
                      <p className="text-sm text-gray-500">{study.description}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {study.highlight}
                  </p>
                  <div className="mt-6">
                    <span className="inline-flex items-center text-[#306777] font-semibold hover:text-[#1e4452]">
                      Read Case Study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/success-stories">
            <button className="bg-[#306777] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e4452] transition-colors">
              View All Success Stories
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;
