import Image from 'next/image';

const CaseStudyResult5 = () => {
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
              • #1 Ranking:
            </span>
            <span className="min-w-0">
              Achieved #1 position in the Top Free Games category in Australia, positioning Viker Games as a market leader.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Massive Install Spike:
            </span>
            <span className="min-w-0">
              Generated 500,000+ installs in a single day through strategic ASO and viral momentum.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Keyword Rankings:
            </span>
            <span className="min-w-0">
              Ranked for multiple high-value gaming keywords, significantly increasing organic visibility.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[auto,1fr] gap-2 items-start">
            <span className="text-[#333333] whitespace-nowrap">
              • Long-Term Partnership:
            </span>
            <span className="min-w-0">
              The success led to a long-term partnership with Viker Games for sustained growth and optimization.
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
              <span className="text-[#333333] font-semibold">Primary Market:</span>
              <p className="mt-2">Australia, with rapid expansion to other regions</p>
            </div>
            <div>
              <span className="text-[#333333] font-semibold">Category:</span>
              <p className="mt-2">Casual Mobile Gaming, Puzzle Games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResult5;
