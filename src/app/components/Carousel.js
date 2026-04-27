"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Hardcoded logos list
const logos = [
  { name: "bajaj_finserv", class: "w-32", img: "/carousel_logos/bajaj_finserv_logo.png" },
  { name: "delhivery", class: "w-32", img: "/carousel_logos/delhivery_logo.png" },
  { name: "lsm_apps", class: "w-32", img: "/carousel_logos/lsm_apps_logo.png" },
  { name: "pepperfry", class: "w-32", img: "/carousel_logos/pepperfry_logo.png" },
  { name: "playojo", class: "w-32", img: "/carousel_logos/playojo_logo.png" },
  { name: "ring_kisht", class: "w-32", img: "/carousel_logos/ring_kisht_logo.png" },
  { name: "shremaroo", class: "w-32", img: "/carousel_logos/shremaroo_logo.png" },
  { name: "vikergames", class: "w-32", img: "/carousel_logos/vikergames_logo.png" },
  { name: "volt_money", class: "w-32", img: "/carousel_logos/volt_money_logo.png" },
  { name: "zupee", class: "w-32", img: "/carousel_logos/zupee_logo.png" },
];

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
          {/* Double the logos for seamless looping */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className={`flex items-center justify-center flex-shrink-0 ${logo.class}`}
            >
              <Image
                src={logo.img}
                alt={logo.name}
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
