import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { blogPosts, authors, slugifyAuthor } from '../../blog/blogData';

export default function AuthorProfile() {
  const author = authors['khwahish-kapoor'];

  // Get all posts by this author
  const authorPosts = blogPosts.filter(
    (post) => slugifyAuthor(post.author) === 'khwahish-kapoor'
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Decorative Banner - Matching Website Theme (Half Height) */}
      <div className="relative w-full h-48 md:h-64 bg-gradient-to-b from-[#FFEDE3] to-[#FFFFFF] overflow-hidden">
        {/* Decorative Pattern - Same as Home Page */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image
            src="/pattern.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Profile Card Section - Overlapping the banner */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-8 border border-gray-100">
          {/* Avatar */}
          <div className="w-48 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 bg-[#306777] text-white flex items-center justify-center text-5xl md:text-7xl font-bold shadow-lg border-4 border-white relative">
            {author.avatar ? (
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                priority
                className="object-cover object-center"
              />
            ) : (
              author.name.charAt(0)
            )}
          </div>

          {/* Details */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {author.name}
              </h1>
              <p className="text-lg md:text-xl text-[#306777] font-medium uppercase tracking-wider">
                {author.role}
              </p>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {author.bio}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
              {author.social.email && (
                <a
                  href={`mailto:${author.social.email}`}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-[#D44638] hover:text-white transition-all duration-300 shadow-sm"
                  title="Email"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 bg-white">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#306777] pl-4">
            Articles by {author.name}
          </h2>
          <Link href="/blog" className="text-gray-500 hover:text-[#306777] font-medium flex items-center gap-2 transition-colors">
            View All Blogs <span className="text-xl">→</span>
          </Link>
        </div>

        {authorPosts.length === 0 ? (
          <div className="text-center py-10 bg-gray-50 rounded-xl">
            <p className="text-xl text-gray-600">No common posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authorPosts.map((blog) => (
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
                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500">
                    {blog.date && <span>{blog.date}</span>}
                    {blog.readTime && <span>• {blog.readTime}</span>}
                  </div>
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#306777] transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                    {blog.description}
                  </p>
                  <div className="mt-auto">
                    <Link href={`/blog/${blog.slug}`} className="text-[#306777] font-semibold hover:underline flex items-center gap-1">
                      Read Full Article <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
