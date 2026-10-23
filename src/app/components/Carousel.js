"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { CLIENT_LOGOS as logos } from "./clientLogos";

const Carousel = () => {
  const containerRef = useRef(null);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      scrollPositionRef.current += scrollSpeed;

      // Get the width of one set of logos
      const scrollableWidth = container.scrollWidth / 2;

      // Reset position seamlessly when we've scrolled halfway
      if (scrollPositionRef.current >= scrollableWidth) {
        scrollPositionRef.current = 0;
      }

      container.style.transform = `translateX(-${scrollPositionRef.current}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="w-full mt-[-85px] bg-white overflow-hidden py-4 pt-24 pb-16">
      <div className="relative overflow-hidden">
        {/* Infinite scroll container */}
        <div
          ref={containerRef}
          className="flex space-x-12 md:space-x-16 lg:space-x-24 will-change-transform"
          style={{ transition: "none" }}
        >
          {/* Double the logos for seamless looping; the copy is hidden from screen readers and crawlers */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0 w-32"
              aria-hidden={index >= logos.length ? "true" : undefined}
            >
              <Image
                src={logo.img}
                alt={index >= logos.length ? "" : `${logo.name} logo`}
                width={128}
                height={48}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
