export const metadata = {
    title: "About ASOWin | Global App Store Optimization Agency",
    description:
      "ASOWin is a global App Store Optimization agency with teams in the USA, India, Indonesia and Singapore, helping app brands grow rankings, ratings and installs.",
    openGraph: {
      title: "About ASOWin | Global App Store Optimization Agency",
      description:
        "ASOWin is a global App Store Optimization agency with teams in the USA, India, Indonesia and Singapore, helping app brands grow rankings, ratings and installs.",
      url: "https://www.asowin.com/about",
      siteName: "ASOWin",
      images: [
        {
          url: "/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About ASOWin",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "About ASOWin | Global App Store Optimization Agency",
      description:
        "ASOWin is a global App Store Optimization agency with teams in the USA, India, Indonesia and Singapore, helping app brands grow rankings, ratings and installs.",
      images: ["/og-about.jpg"],
      site: "@asowin",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function AboutLayout({ children }) {
    return <>{children}</>;
  }
  