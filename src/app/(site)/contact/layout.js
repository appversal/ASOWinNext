export const metadata = {
    title: "Contact ASOWin | Talk to an App Store Optimization Agency",
    description:
      "Contact ASOWin for a free ASO audit. Our team helps apps improve keyword rankings, ratings and conversion on the App Store and Google Play.",
    openGraph: {
      title: "Contact ASOWin | Talk to an App Store Optimization Agency",
      description:
        "Contact ASOWin for a free ASO audit. Our team helps apps improve keyword rankings, ratings and conversion on the App Store and Google Play.",
      url: "https://www.asowin.com/contact",
      siteName: "ASOWin",
      images: [
        {
          url: "/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: "Contact ASOWin",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact ASOWin | Talk to an App Store Optimization Agency",
      description:
        "Contact ASOWin for a free ASO audit. Our team helps apps improve keyword rankings, ratings and conversion on the App Store and Google Play.",
      images: ["/og-contact.jpg"],
      site: "@asowin",
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
  
  export default function ContactLayout({ children }) {
    return <>{children}</>;
  }
  