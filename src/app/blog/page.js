import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogPosts, slugifyAuthor } from "./blogData";
import { seoClusterPosts } from "./seoClusterData";

const allPosts = [...blogPosts, ...seoClusterPosts].sort(
  (a, b) => new Date(b.publishedAt || b.date) - new Date(a.publishedAt || a.date),
);

export const metadata = {
  title: "App Store Optimization Blog: ASO Guides & Research | ASOWin",
  description:
    "Practical app store optimization guides covering ASO keywords, conversion, creative testing, localization, ratings, analytics, launches, and organic app growth.",
  alternates: { canonical: "/blog/" },
};

export default function BlogListing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Blog Collection Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "headline": "AsoWin Blog: App Store Optimization & Mobile Marketing Insights",
            "description": "Expert tips, case studies, and the latest trends in App Store Optimization (ASO) and mobile app growth from the Asowin team.",
            "url": "https://www.asowin.com/blog/",
            "publisher": {
              "@type": "Organization",
              "name": "ASOWin",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.asowin.com/ASOWin.png"
              }
            },
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": allPosts.length,
              "itemListElement": allPosts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://www.asowin.com/blog/${post.slug}/`,
                "name": post.title
              }))
            }
          }),
        }}
      />

      <Navbar />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-[#EEF6FF] to-[#FFFFFF] px-4 sm:px-6 lg:px-20 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-tight">
              ASOWin Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Evidence-led guides for app discovery, conversion, ratings, localization, and sustainable mobile growth
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {allPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allPosts.map((blog) => (
                <div
                  key={blog.slug}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group flex flex-col"
                >
                  <Link href={`/blog/${blog.slug}`} className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={blog.heroImage}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      {blog.category && (
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                          {blog.category}
                        </span>
                      )}
                      {blog.date && (
                        <span className="text-xs text-gray-500">
                          {blog.date}
                        </span>
                      )}
                      {blog.author && (
                        <div className="flex items-center text-xs text-gray-500 font-medium">
                          <span className="mr-1">• By</span>
                          {blog.author === "Khwahish Kapoor" ? (
                            <Link
                              href={`/author/${slugifyAuthor(blog.author)}`}
                              className="hover:text-[#306777] transition-colors"
                            >
                              {blog.author}
                            </Link>
                          ) : (
                            <span>{blog.author}</span>
                          )}
                        </div>
                      )}
                    </div>
                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#306777] transition-colors">
                        {blog.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      {blog.readTime && (
                        <span className="text-sm text-gray-500">
                          {blog.readTime}
                        </span>
                      )}
                      <Link href={`/blog/${blog.slug}`} className="text-[#306777] font-semibold hover:underline">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
