import React from "react";
import Link from "next/link";
import { PROOF } from "./proofFacts";

const Star = ({ color }) => (
  <svg 
    className="absolute top-4 right-4 w-4 h-4" 
    viewBox="0 0 24 24" 
    fill={color}
  >
    <path d="M12 0L14.645 8.355L23 11L14.645 13.645L12 22L9.355 13.645L1 11L9.355 8.355L12 0Z" />
  </svg>
);

// Each card quotes a published case study and links to it.
const cards = [
  { proof: PROOF.pepperfry, value: PROOF.pepperfry.stats[0].value, text: "Pepperfry app rating,\nup from about 3.9", color: "#3B82F6", tone: "text-blue-500" },
  { proof: PROOF.indiabulls, value: PROOF.indiabulls.stats[0].value, text: "Indiabulls Securities keywords\nmoved into the Top 50", color: "#EC4899", tone: "text-pink-500" },
  { proof: PROOF.viker, value: PROOF.viker.stats[0].value, text: "Viker Games in Top Free Games,\nAustralia", color: "#EAB308", tone: "text-yellow-500" },
];

const Stats = () => {
  return (
    // Main container with background image
    <div 
      className="w-full lg:h-[35.36vw] lg:max-h-[679px] min-h-[800px] md:min-h-[600px] lg:min-h-[700px] relative overflow-hidden"
      style={{
        backgroundImage: "url('/statsbg.png')", // Reference image from the public folder
        backgroundColor: "#FFF6EA",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Content container */}
      <div className="container mx-auto h-full px-4 py-8 lg:py-0">
        <div className="max-w-4xl mx-auto text-center h-full flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[39px] font-medium font-serif text-[#1A1A1A] mb-6 px-4">
            Results Across Our Clients
          </h2>
          
          <p className="text-[#1A1A1A] font-normal text-base md:text-lg lg:text-xl mb-8 lg:mb-12 max-w-3xl mx-auto px-4">
            Results from our published client case studies, across e-commerce, fintech and gaming apps:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 justify-items-center px-4">
            {cards.map((card, index) => (
              <Link
                key={card.proof.href}
                href={card.proof.href}
                className={`bg-white w-full md:w-[285px] h-[273px] rounded-lg shadow-lg relative flex flex-col items-center justify-center p-6 hover:shadow-xl transition-shadow ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <Star color={card.color} />
                <div className={`text-6xl md:text-7xl lg:text-[92px] font-medium font-inter ${card.tone} mb-4 leading-none`}>
                  {card.value}
                </div>
                <p className="text-gray-600 font-manrope text-sm lg:text-[15px] text-center whitespace-pre-line">
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
