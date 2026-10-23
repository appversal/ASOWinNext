/**
 * BLOG LAYOUT TEMPLATE
 * 
 * Create a layout.js file in your blog post directory with this structure
 */

export const metadata = {
  title: "Your Blog Post Title | ASOWin Blog",
  description: "Your blog post meta description for SEO.",
};

export default function YourBlogLayout({ children }) {
  return <>{children}</>;
}
