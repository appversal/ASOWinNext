import Image from 'next/image';

const CaseStudyResult7 = () => {
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
              • 500+ FTDs:
            </span>
            <span className="min-w-0">
              Consistently delivered 500+ first-time deposits every month, scaling reliably across international markets.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Top Performer:
            </span>
            <span className="min-w-0">
              Established as one of PlayOJO's top-performing user acquisition suppliers within their ecosystem.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Multi-Channel Performance:
            </span>
            <span className="min-w-0">
              Strong conversion performance across multiple acquisition channels and traffic sources.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Partnership Expansion:
            </span>
            <span className="min-w-0">
              Due to success, PlayOJO expanded the partnership and entrusted us with user acquisition for additional platforms within their gaming ecosystem.
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
              <span className="text-[#333333] font-semibold">Focus Area:</span>
              <p className="mt-2">First-Time Deposit (FTD) User Acquisition</p>
            </div>
            <div>
              <span className="text-[#333333] font-semibold">Platform:</span>
              <p className="mt-2">Proprietary DSP with Multiple SSP Integrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResult7;
