'use client';

import React from 'react';
import Link from 'next/link';

const BackButton = ({ to = '/success-stories', label = 'Back to Success Stories' }) => {
  return (
    <Link href={to}>
      <div className="inline-flex items-center gap-2 text-[#306777] hover:text-[#1e4452] font-semibold mb-6 cursor-pointer transition-colors">
        <span className="text-xl">←</span>
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default BackButton;
