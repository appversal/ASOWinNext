'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ASOKeywordSuccess = () => {
  const containerRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const [isHovering, setIsHovering] = useState(false);

  // Client logos - same as carousel on home page
  const clientLogos = [
    { name: "bajaj_finserv", img: "/carousel_logos/bajaj_finserv_logo.png" },
    { name: "delhivery", img: "/carousel_logos/delhivery_logo.png" },
    { name: "lsm_apps", img: "/carousel_logos/lsm_apps_logo.png" },
    { name: "pepperfry", img: "/carousel_logos/pepperfry_logo.png" },
    { name: "playojo", img: "/carousel_logos/playojo_logo.png" },
    { name: "ring_kisht", img: "/carousel_logos/ring_kisht_logo.png" },
    { name: "shremaroo", img: "/carousel_logos/shremaroo_logo.png" },
    { name: "vikergames", img: "/carousel_logos/vikergames_logo.png" },
    { name: "volt_money", img: "/carousel_logos/volt_money_logo.png" },
    { name: "zupee", img: "/carousel_logos/zupee_logo.png" },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const scrollSpeed = 0.5;

    const scroll = () => {
      // Only scroll if not hovering
      if (!isHovering) {
        scrollPositionRef.current += scrollSpeed;

        const scrollableWidth = container.scrollWidth / 2;

        if (scrollPositionRef.current >= scrollableWidth) {
          scrollPositionRef.current = 0;
        }

        container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering]);

  return (
    <section className="py-8 lg:py-12 bg-gradient-to-br from-slate-50 via-white to-slate-50 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Keyword Rankings That <span className="text-[#014458]">Convert</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading apps worldwide. See how we've helped these companies climb to the top positions for high-intent keywords that drive real installs.
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Infinite scroll container */}
            <div
              ref={containerRef}
              className="flex space-x-8 md:space-x-10 lg:space-x-12 will-change-transform"
              style={{ transition: "none" }}
            >
              {/* Double the logos for seamless looping */}
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0 w-48 h-24 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer group"
                >
                  <Image
                    src={logo.img}
                    alt={logo.name}
                    width={128}
                    height={48}
                    className="h-16 object-contain px-4 group-hover:scale-125 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <p className="text-gray-600 mb-6">Ready to see your app rank higher? Let's analyze your keyword opportunities.</p>
          <button className="px-8 py-3 bg-[#014458] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all hover:shadow-lg">
            Get Keyword Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ASOKeywordSuccess;
