'use client';
import React from 'react';

const ASOHeroVideo = () => {
  return (
    <section className="w-full py-6 md:py-8 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                poster="/asowin_hero_video.png"
              >
                <source src="/asowin_hero_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ASOHeroVideo;
