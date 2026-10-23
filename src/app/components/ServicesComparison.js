import Link from "next/link";

// "Which service fits?" table for the /services/ hub.
const rows = [
  {
    name: "App Store Optimization",
    href: "/services/app-store-optimization/",
    bestFor: "Apps that want more organic installs from App Store and Google Play search",
    includes: "Keyword research, metadata, competitor analysis, localization",
  },
  {
    name: "App Reputation Management",
    href: "/services/app-reputation-management/",
    bestFor: "Apps whose star rating or review sentiment is holding back installs",
    includes: "Review replies, in-app rating prompt strategy, issue analysis",
  },
  {
    name: "Creative A/B Testing & Design",
    href: "/services/creative-ab-testing/",
    bestFor: "Listings that get views but convert too few visitors into installs",
    includes: "Icons, screenshots, preview videos, store A/B tests",
  },
  {
    name: "Keyword Installs",
    href: "/services/keyword-installs/",
    bestFor: "Launches or campaigns that need a short push for specific keywords",
    includes: "Keyword-targeted install campaigns alongside ASO",
  },
  {
    name: "Automated ASO with AI",
    href: "/services/automated-aso-ai/",
    bestFor: "Teams with high review volume or many apps and markets to monitor",
    includes: "AI review analysis, reply drafts, change alerts, reporting",
  },
  {
    name: "Paid UA & Apple Search Ads",
    href: "/services/paid-user-acquisition/",
    bestFor: "Apps ready to scale installs with paid budget on top of organic",
    includes: "Apple Search Ads, app install campaigns, ROAS tracking",
  },
  {
    name: "AI Review Replies",
    href: "/automated-review-replies/",
    bestFor: "Support teams that want every review answered in the brand voice",
    includes: "Automated replies, ticketing for critical reviews, reports",
  },
];

const ServicesComparison = () => (
  <section className="w-full px-4 sm:px-8 lg:px-16 py-16 md:py-24 bg-white" aria-labelledby="services-compare-title">
    <div className="max-w-7xl mx-auto">
      <h2 id="services-compare-title" className="text-3xl md:text-5xl font-medium text-[#111111] mb-4">
        Which service fits your app?
      </h2>
      <p className="text-gray-600 text-base md:text-lg max-w-3xl mb-10">
        Most clients start with App Store Optimization and add other services as their goals change.
      </p>
      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full min-w-[720px] text-left text-sm md:text-base">
          <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
            <tr>
              <th scope="col" className="px-5 py-4 font-semibold">Service</th>
              <th scope="col" className="px-5 py-4 font-semibold">Best for</th>
              <th scope="col" className="px-5 py-4 font-semibold">Includes</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.href} className="border-t border-gray-200 align-top">
                <th scope="row" className="px-5 py-4 font-semibold">
                  <Link href={row.href} className="text-[#014458] hover:text-[#E06F00]">
                    {row.name}
                  </Link>
                </th>
                <td className="px-5 py-4 text-gray-700">{row.bestFor}</td>
                <td className="px-5 py-4 text-gray-600">{row.includes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ServicesComparison;
