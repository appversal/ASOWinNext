// Shared crawl policy; canonical URLs remain specific to each page.
export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function SuccessStoriesLayout({ children }) {
  return children;
}
