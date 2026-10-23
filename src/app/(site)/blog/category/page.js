import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getCategoryHubs } from "../categories";

export const metadata = {
  title: "ASO Topics: Browse App Store Optimization Guides by Category | ASOWin",
  description: "Browse ASO guides by topic: industry playbooks, market guides, metadata, creative testing, ratings and reviews, measurement, policy, and growth strategy.",
  alternates: { canonical: "/blog/category/" },
};

export default function CategoryIndex() {
  const hubs = getCategoryHubs();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-full bg-gradient-to-b from-[#EEF6FF] to-[#FFFFFF] px-4 sm:px-6 lg:px-20 pt-12 pb-8 md:pt-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a1a1a] mb-4">ASO topics</h1>
          <p className="text-lg text-[#4B5563] max-w-3xl">Browse every ASOWin guide by topic.</p>
        </div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <Link
              key={hub.slug}
              href={`/blog/category/${hub.slug}/`}
              className="block rounded-xl border border-gray-200 p-6 hover:border-[#306777] hover:shadow-md transition"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-2">{hub.name}</h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">{hub.description}</p>
              <span className="text-sm font-semibold text-[#306777]">{hub.posts.length} guides →</span>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
