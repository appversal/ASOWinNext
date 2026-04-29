'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumb = () => {
  const pathname = usePathname();

  // Map case study URLs to readable names
  const breadcrumbMap = {
    '/success-stories/pepperfry': 'Pepperfry',
    '/success-stories/indiabulls-securities': 'Indiabulls Securities',
    '/success-stories/lsm-apps': 'LSM Apps',
    '/success-stories/viker-games': 'Viker Games',
    '/success-stories/bajaj-finserv': 'Bajaj Finserv',
    '/success-stories/playojo-games': 'PlayOJO Games',
  };

  // Only show breadcrumb on case study pages
  if (!breadcrumbMap[pathname]) {
    return null;
  }

  const caseStudyName = breadcrumbMap[pathname];

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <nav className="flex items-center gap-2 text-sm md:text-base">
          <Link
            href="/"
            className="text-[#306777] hover:text-[#1e4452] font-medium"
          >
            HOME
          </Link>
          <span className="text-gray-400">/</span>
          <Link
            href="/success-stories"
            className="text-[#306777] hover:text-[#1e4452] font-medium"
          >
            SUCCESS STORIES
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">{caseStudyName}</span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
