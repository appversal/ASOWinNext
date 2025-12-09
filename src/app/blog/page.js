'use client';
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import { blogPosts } from "./blogData";

export default function BlogListing() {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      <Navbar />

      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-[#EEF6FF] to-[#FFFFFF] px-4 sm:px-6 lg:px-20 pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-4 md:mb-6 leading-tight">
              ASOWin Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
              Insights, strategies, and updates about App Store Optimization and mobile app growth
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-20 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {blogPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((blog) => (
                <Link
                  key={blog.slug}
                  href={`/blog/${blog.slug}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
                >
                  <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-white flex items-center justify-center">
                    <Image
                      src={blog.heroImage}
                      alt={blog.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                  </div>
                  <div className="p-6">
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
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#306777] transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.description}
                    </p>
                    <div className="flex items-center justify-between">
                      {blog.readTime && (
                        <span className="text-sm text-gray-500">
                          {blog.readTime}
                        </span>
                      )}
                      <span className="text-[#306777] font-semibold group-hover:underline">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
