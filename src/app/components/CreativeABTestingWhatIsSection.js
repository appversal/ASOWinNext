'use client';
import React from 'react';

const CreativeABTestingWhatIsSection = () => {
  const testElements = [
    'App Icons',
    'Screenshots',
    'Feature Graphics',
    'Preview Videos',
    'Promotional Creatives',
    'Messaging Hierarchy',
    'Store Listing Layouts'
  ];

  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
          What is Creative A/B Testing?
        </h2>
        
        <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed max-w-[800px]">
          Creative A/B testing is the process of testing multiple visual variations of your app store assets to determine which version performs best with users.
        </p>

        <p className="text-gray-700 text-base md:text-lg font-medium mb-8">
          We test and optimize:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {testElements.map((element, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#fdb124] hover:bg-gradient-to-br hover:from-[#fdb124]/5 hover:to-[#E06F00]/5 transition-all duration-300 text-center"
            >
              <p className="text-gray-900 font-semibold">{element}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#014458] to-[#0a2f3f] rounded-xl p-8 md:p-12 text-white">
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            By analyzing user behavior and conversion data, we continuously refine creatives to improve engagement and install performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeABTestingWhatIsSection;
