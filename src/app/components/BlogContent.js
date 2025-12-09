'use client';
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const BlogContent = ({ content, embeddedImage, embeddedImageAlt }) => {
  const [headings, setHeadings] = useState([]);
  const [activeHeading, setActiveHeading] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    // Extract headings from rendered content
    if (contentRef.current) {
      const h2Elements = Array.from(contentRef.current.querySelectorAll('h2, h3, h4'));

      const tocItems = h2Elements.map((heading, index) => {
        const id = heading.id || `heading-${index}`;
        if (!heading.id) {
          heading.id = id;
        }
        return {
          id,
          text: heading.textContent,
          level: heading.tagName.toLowerCase()
        };
      });

      setHeadings(tocItems);

      // Set up scroll spy
      const handleScroll = () => {
        const scrollPosition = window.scrollY + 200;

        for (let i = tocItems.length - 1; i >= 0; i--) {
          const element = document.getElementById(tocItems[i].id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveHeading(tocItems[i].id);
            break;
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [content]);

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = typeof document !== 'undefined' ? document.title : '';

  const handleShare = (platform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);

    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content Column */}
          <div className="flex-1 lg:w-[70%]">
            <article
              ref={contentRef}
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Embedded Image */}
            {embeddedImage && (
              <div className="my-12">
                <div className="relative w-full min-h-[300px] rounded-lg overflow-hidden bg-white flex items-center justify-center">
                  <Image
                    src={embeddedImage}
                    alt={embeddedImageAlt || "Blog content image"}
                    fill
                    className="object-contain object-center"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 70vw"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-[30%]">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Table of contents
                  </h3>
                  <ul className="space-y-2">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <a
                          href={`#${heading.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToHeading(heading.id);
                          }}
                          className={`text-sm block py-1 transition-colors ${activeHeading === heading.id
                            ? 'text-[#306777] font-semibold'
                            : 'text-blue-600 hover:text-[#306777]'
                            }`}
                          style={{
                            paddingLeft: heading.level === 'h3' ? '1rem' : heading.level === 'h4' ? '1.5rem' : '0'
                          }}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share Section */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Share
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.203 24 24 23.226 24 22.271V1.729C24 .774 23.203 0 22.225 0zm-14.47 20.451h-3.96v-11.74h3.96v11.74zM6.474 7.336c-1.26 0-2.283-1.046-2.283-2.336 0-1.291 1.023-2.336 2.283-2.336 1.26 0 2.283 1.045 2.283 2.336s-1.023 2.336-2.283 2.336zM20.451 20.451h-3.96v-5.66c0-1.348-.027-3.088-1.884-3.088-1.886 0-2.175 1.476-2.175 2.994v5.754h-3.96v-11.74h3.803v1.604h.053c.528-1 1.818-2.057 3.741-2.057 4.005 0 4.748 2.637 4.748 6.066v6.128z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors"
                    aria-label="Share via Email"
                  >
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
