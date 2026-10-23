export const metadata = {
    title: "ASO Services | App Store Optimization Agency | ASOWin",
    description:
      "ASOWin's ASO services: keyword research, metadata optimization, creative A/B testing, ratings and review management, and Apple Search Ads for the App Store and Google Play.",
    authors: [{ name: "ASOWin", url: "https://www.asowin.com" }],
    robots: "index, follow",
    openGraph: {
      title: "ASO Services | App Store Optimization Agency | ASOWin",
      description:
        "ASOWin's ASO services: keyword research, metadata optimization, creative A/B testing, ratings and review management, and Apple Search Ads for the App Store and Google Play.",
      url: "https://www.asowin.com/services",
      siteName: "ASOWin",
      images: [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "ASOWin Services",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "ASO Services | App Store Optimization Agency | ASOWin",
      description:
        "ASOWin's ASO services: keyword research, metadata optimization, creative A/B testing, ratings and review management, and Apple Search Ads for the App Store and Google Play.",
      images: ["/og-services.jpg"],
      site: "@asowin",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function ServicesLayout({ children }) {
    return <>{children}</>;
  }
  