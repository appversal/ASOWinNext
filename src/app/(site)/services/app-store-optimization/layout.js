export const metadata = {
  title: "App Store Optimization (ASO) Service | ASOWin",
  description: "Master app store rankings with our comprehensive ASO services. Keyword research, metadata optimization, A/B testing, and reputation management to drive organic downloads.",
  openGraph: {
    title: "App Store Optimization (ASO) Service | ASOWin",
    description: "Master app store rankings with our comprehensive ASO services.",
    url: "https://www.asowin.com/services/app-store-optimization",
    type: "website",
    images: [{ url: "/og-aso.jpg", width: 1200, height: 630, alt: "ASOWin App Store Optimization service" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-aso.jpg"] },
};

export default function ASOServiceLayout({ children }) {
  return <>{children}</>;
}
