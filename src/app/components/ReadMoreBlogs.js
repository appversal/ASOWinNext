'use client';
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../blog/blogData";

const ReadMoreBlogs = ({ currentSlug, blogs }) => {
  // Use provided blogs or get from blogData, excluding current blog post
  let availableBlogs = blogs || blogPosts;

  // Filter out the current blog post if currentSlug is provided
  if (currentSlug) {
    availableBlogs = availableBlogs.filter(blog => blog.slug !== currentSlug);
  }

  // Only show up to 3 blogs
  const displayBlogs = availableBlogs.slice(0, 3);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Read More Blogs
        </h2>

        {displayBlogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No other blog posts available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blog/${blog.slug}`}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative w-full h-56 md:h-64 lg:h-72 overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={blog.heroImage || blog.image || '/blogbg1.png'}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                </div>
                <div className="p-6">
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
  );
};

export default ReadMoreBlogs;
