import Image from 'next/image';

const CaseStudyResult6 = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 space-y-10 md:space-y-12">
      {/* Results Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0 relative">
            <Image
              src="/tick.png"
              alt="Results icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-serif text-[#7D6D54]">
            RESULTS
          </h2>
        </div>

        <div className="space-y-4 text-[#858285] text-[16px] sm:text-[18px]">
          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • 90+ Screens:
            </span>
            <span className="min-w-0">
              Successfully integrated custom CSAT feedback flows across 90+ key application screens.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Improved Ratings:
            </span>
            <span className="min-w-0">
              Average app ratings improved significantly on both Google Play Store and Apple App Store.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Customer Insights:
            </span>
            <span className="min-w-0">
              Gained deeper insights into customer experience across multiple app flows and journeys.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Industry Recognition:
            </span>
            <span className="min-w-0">
              The project was formally recognized with an award from Bajaj Finserv for successful implementation and technical excellence.
            </span>
          </div>
        </div>
      </div>

      {/* Key Metrics Section */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          <div className="w-8 h-8 flex-shrink-0 relative">
            <Image
              src="/bars.png"
              alt="Metrics icon"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-bold font-serif text-[#7D6D54]">
            KEY METRICS
          </h2>
        </div>
        <div className="space-y-4 text-[#858285] text-[16px] sm:text-[18px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <span className="text-[#333333] font-semibold">Solution Type:</span>
              <p className="mt-2">Custom CSAT Integration using CleverTap HTML Popups</p>
            </div>
            <div>
              <span className="text-[#333333] font-semibold">Impact:</span>
              <p className="mt-2">Enhanced user satisfaction and app store ratings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResult6;
