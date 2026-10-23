export const metadata = {
  title: "Creative A/B Testing & Design Service | ASOWin",
  description: "High-converting app store creatives through strategic design and data-driven A/B testing. Optimize icons, screenshots, videos, and more to drive installs.",
  openGraph: {
    title: "Creative A/B Testing & Design Service | ASOWin",
    description: "High-converting app store creatives through strategic design and data-driven A/B testing.",
    url: "https://www.asowin.com/services/creative-ab-testing",
    type: "website",
    images: [{ url: "/og-creative.jpg", width: 1200, height: 630, alt: "ASOWin creative A/B testing service" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-creative.jpg"] },
};

export default function CreativeABTestingLayout({ children }) {
  return <>{children}</>;
}
