export const metadata = {
  title: "App Store Optimization Success Stories | ASOWin Client Results",
  description:
    "Discover ASOWin's success stories showcasing proven ASO strategies for top brands. Learn how we achieved #1 rankings, increased downloads, and improved app visibility for Pepperfry, Indiabulls Securities, LSM Apps, and more.",
  keywords:
    "ASO success stories, App Store Optimization results, app ranking success, mobile app marketing results, app store ranking improvements",
  openGraph: {
    title: "App Store Optimization Success Stories | ASOWin Client Results",
    description:
      "Discover ASOWin's success stories showcasing proven ASO strategies for top brands. Learn how we achieved #1 rankings, increased downloads, and improved app visibility.",
    url: "https://www.asowin.com/success-stories",
    siteName: "ASOWin",
    images: [
      {
        url: "/og-success-stories.jpg",
        width: 1200,
        height: 630,
        alt: "ASOWin Success Stories",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Store Optimization Success Stories | ASOWin Client Results",
    description:
      "Discover ASOWin's success stories showcasing proven ASO strategies for top brands.",
    images: ["/og-success-stories.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SuccessStoriesLayout({ children }) {
  return <>{children}</>;
}
