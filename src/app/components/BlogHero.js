'use client';
import Image from "next/image";
import Navbar from "./Navbar";

const BlogHero = ({ category, date, title, description, author, authorAvatar, readTime, heroImage }) => {
  return (
    <div className="w-full bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full px-4 sm:px-6 lg:px-20 pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="flex-1 lg:w-[55%]">
              <div className="flex items-center gap-4 mb-4">
                {category && (
                  <span className="text-sm text-gray-500 uppercase tracking-wide">
                    {category}
                  </span>
                )}
                {date && (
                  <span className="text-sm text-gray-500">
                    {date}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {title}
              </h1>

              {description && (
                <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
                  {description}
                </p>
              )}

              <div className="flex items-center gap-4">
                {authorAvatar && (
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={authorAvatar}
                      alt={author || "Author"}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  {author && (
                    <p className="text-sm font-semibold text-gray-900">
                      {author}
                    </p>
                  )}
                  {readTime && (
                    <p className="text-sm text-gray-500">
                      {readTime}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            {heroImage && (
              <div className="w-full lg:w-[45%] lg:flex-shrink-0">
                <div className="relative w-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-contain object-center"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 45vw"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
