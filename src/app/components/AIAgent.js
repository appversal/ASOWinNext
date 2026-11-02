import React from "react";
import Image from "next/image";
import Link from "next/link";

const AIAgent = () => {
  const features = [
    {
      id: "1. INTELLIGENT KEYWORD RESEARCH",
      description:
        "AI clusters keywords by intent and relevance for your app's niche, so specialists can prioritise the terms most likely to drive installs.",
    },
    {
      id: "2. AUTOMATED COMPETITOR ANALYSIS",
      description:
        "Gain real-time insights into your competitors' performance. AI tracks shifts in competitors' rankings, keywords and store listings and flags the changes worth acting on.",
    },
    {
      id: "3. DESIGN TESTING WITH AI PRECISION",
      description:
        "AI helps us generate and prioritise creative variants for store listing A/B tests, determining which visuals and messaging resonate most with your audience.",
    },
    {
      id: "4. USER ENGAGEMENT OPTIMIZATION",
      description:
        "Leverage AI insights to enhance user engagement and retention through personalized recommendations and dynamic content adjustments.",
    },
  ];

  const CubeIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z" />
    </svg>
  );

  return (
    <div className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgmain.png" // Place your imgmain.png inside the public folder
          alt=""
          fill
          className="object-cover md:object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col lg:flex-row items-start gap-16">
        {/* Left Section with Heading */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[#FF6B00] text-4xl md:text-5xl lg:text-[45px] xl:text-6xl font-normal leading-tight">
            How ASOWin Uses AI<br />
            in App Store<br />
            Optimization
          </h2>
        </div>

        {/* Right Section with Description, Button, and Cards */}
        <div className="lg:w-1/2 space-y-10 flex flex-col gap-y-10">
          {/* Paragraph */}
          <div>
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              ASOWin uses AI for keyword research, competitor tracking, creative
              testing and review analysis, with every change reviewed by an ASO
              specialist before it goes live. It powers our{" "}
              <Link href="/services/automated-aso-ai/" className="text-[#FF6B00] font-medium hover:underline">
                Automated ASO with AI
              </Link>{" "}
              service and our{" "}
              <Link href="/automated-review-replies/" className="text-[#FF6B00] font-medium hover:underline">
                AI review replies
              </Link>{" "}
              product.
            </p>
          </div>

          {/* Cards */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-[#F5F7F9] rounded-lg p-8 border-2 border-transparent hover:border-[#FF6B00] hover:bg-white transition-all duration-300"
              >
                <div className="mb-8 text-gray-400 group-hover:text-[#FF6B00] transition-colors">
                  <CubeIcon />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">{feature.id}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AIAgent;
