export const metadata = {
  title: "Our Book - ASOWin Book | App Store Optimization Guide",
  description:
    "Download and read the ASOWin Book - A comprehensive guide to App Store Optimization, ASO strategies, and mobile app growth.",
  keywords:
    "ASO Book, App Store Optimization Guide, ASOWin Book, Mobile App Marketing, ASO Strategies",
  openGraph: {
    title: "Our Book - ASOWin Book | App Store Optimization Guide",
    description:
      "Download and read the ASOWin Book - A comprehensive guide to App Store Optimization, ASO strategies, and mobile app growth.",
    url: "https://www.asowin.com/book",
    siteName: "ASOWin",
    images: [
      {
        url: "/ASOWin.png",
        width: 1200,
        height: 630,
        alt: "ASOWin Book",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Book - ASOWin Book | App Store Optimization Guide",
    description:
      "Download and read the ASOWin Book - A comprehensive guide to App Store Optimization, ASO strategies, and mobile app growth.",
    images: ["/ASOWin.png"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function BookLayout({ children }) {
  return <>{children}</>;
}


