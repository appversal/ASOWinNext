"use client"; // Only needed if using Next.js App Router

import Image from "next/image";
import Navbar from "./Navbar";
import { PARENT } from "./entity";

const AboutHero = () => {
  return (
    <>
      <div
        className="w-full mb-[50px] bg-[#EEF6FF]"
        style={{
          backgroundImage: "url('/abouthero.png')", // Direct reference from public/
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />

        {/* Content Container */}
        <div className="w-full h-full px-4 sm:px-6 lg:px-20 pt-20 pb-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
            <h1
              className="text-[2.5rem] sm:text-5xl lg:text-[80px] leading-[1.1] font-bold text-[#1a1a1a] mb-12"
              style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)" }}
            >
              About ASOWin,{" "}
              <br className="hidden lg:block" />a Global App Store Optimization Agency
            </h1>

            {/* Description Section */}
            <div className="space-y-6 max-w-3xl mt-24">
              {/* Company Info */}
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 flex-shrink-0">
                  <Image
                    className="w-[64px] h-[64px]"
                    src="/Union.png" // Direct path from public/
                    alt="Union Icon"
                    width={64}
                    height={64}
                    priority
                  />
                </div>

                <p className="lg:text-[26px] sm:text-xl text-[#374151] leading-loose max-w-[37rem]">
                  ASOWin is a global App Store Optimization agency
                  headquartered in{" "}
                  <span className="text-[#E9A63A] font-medium">
                    Fremont, California
                  </span>
                  , and registered in{" "}
                  <span className="text-[#E9A63A] font-medium">Delaware</span>
                  {PARENT && (
                    <>
                      , and part of the{" "}
                      <a href={PARENT.url} className="text-[#E9A63A] font-medium hover:underline">
                        {PARENT.name}
                      </a>{" "}
                      group
                    </>
                  )}
                  .
                </p>
              </div>

              {/* Additional Info */}
              <p className="text-[19px] sm:text-lg text-[#6B7280] ml-[5.2rem] leading-relaxed max-w-[37rem]">
                <span className="text-black">
                  Our teams in the USA, India, Indonesia and Singapore grow app
                  rankings, ratings and installs on the Apple App Store and
                  Google Play,
                </span>{" "}
                through ASO, app reputation management, Apple Search Ads and
                creative testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
