/**
 * BLOG POST TEMPLATE
 * 
 * To create a new blog post:
 * 1. Create a new directory: /blog/[your-slug]
 * 2. Create page.js and layout.js files
 * 3. Copy this template and customize the content
 * 
 * Example structure:
 * /blog/my-new-blog/
 *   ├── page.js (copy from this template)
 *   └── layout.js (copy metadata structure)
 */

'use client';
import BlogHero from "../../components/BlogHero";
import BlogContent from "../../components/BlogContent";
import BlogCTA from "../../components/BlogCTA";
import ReadMoreBlogs from "../../components/ReadMoreBlogs";
import BlogBottomCTA from "../../components/BlogBottomCTA";
import Footer from "../../components/Footer";
import GoogleAnalytics from "../../components/GoogleAnalytics";

export default function YourBlogPost() {
  // Format your content as HTML with proper heading IDs
  const blogContent = `
    <h2 id="heading-0">Your First Heading</h2>
    
    <p>Your first paragraph content here...</p>

    <h2 id="heading-1">Your Second Heading</h2>
    
    <p>Your second paragraph content here...</p>
    
    <!-- Optional: Add images directly in HTML -->
    <div style="margin: 3rem 0; text-align: center;">
      <img src="/your-image.png" alt="Image description" style="max-width: 100%; height: auto; border-radius: 0.5rem;" />
    </div>

    <h3 id="heading-2">Subheading (h3)</h3>
    
    <p>More content...</p>
  `;

  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      {/* Hero Section */}
      <BlogHero
        category="Category Name"           // e.g., "AI Blog", "ASO Tips"
        date="January 15, 2025"            // Publication date
        title="Your Blog Post Title"        // Main title
        description="Brief description of your blog post that appears in the hero section."
        author="Author Name"                // Author name
        readTime="8 min read"               // Estimated reading time
        heroImage="/your-hero-image.png"   // Hero image path
      />

      {/* Main Content */}
      <BlogContent
        content={blogContent}              // HTML content with headings
      // Optional: Use embeddedImage prop instead of inline HTML
      // embeddedImage="/your-image.png"
      // embeddedImageAlt="Image description"
      />

      {/* Mid-page CTA */}
      <BlogCTA
        title="Improve your App's visibility with ASOWin"
        subtitle=""
        buttonText="Request Demo"
        buttonLink="/contact"
      />

      {/* Related Blogs */}
      <ReadMoreBlogs />

      {/* Bottom CTA */}
      <BlogBottomCTA
        title="Ready to get started?"
        description=""
        buttonText="Request Demo"
        buttonLink="/contact"
      />

      <Footer />
    </div>
  );
}
