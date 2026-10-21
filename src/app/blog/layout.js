export const metadata = {
  title: "Blog | ASOWin",
  description: "Discover insights, strategies, and updates about App Store Optimization and mobile app growth.",
  alternates: { canonical: "./", types: { "application/rss+xml": "/blog/feed.xml" } },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
