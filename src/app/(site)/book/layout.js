export const metadata = {
  title: "App Store Optimization: The Ultimate Book (Free PDF) | ASOWin",
  description:
    "Free ASO book by ASOWin: how the Apple App Store and Google Play rank apps, which metadata, ratings and creative factors matter, and how to execute ASO.",
  openGraph: {
    title: "App Store Optimization: The Ultimate Book (Free PDF) | ASOWin",
    description:
      "Free ASO book by ASOWin: how the Apple App Store and Google Play rank apps, which metadata, ratings and creative factors matter, and how to execute ASO.",
    url: "https://www.asowin.com/book",
    siteName: "ASOWin",
    images: [
      {
        url: "/og-book.jpg",
        width: 1200,
        height: 630,
        alt: "App Store Optimization: The Ultimate Book by ASOWin",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Store Optimization: The Ultimate Book (Free PDF) | ASOWin",
    description:
      "Free ASO book by ASOWin: how the Apple App Store and Google Play rank apps, which metadata, ratings and creative factors matter, and how to execute ASO.",
    images: ["/og-book.jpg"],
    site: "@asowin",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function BookLayout({ children }) {
  return <>{children}</>;
}


