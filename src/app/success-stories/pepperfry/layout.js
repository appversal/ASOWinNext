const title = "Pepperfry App Reputation & ASO Case Study | ASOWin";
const description =
  "How ASOWin helped Pepperfry improve app ratings from around 3.9 to 4.4+ through app reputation management, AI review replies, ASO, and social media ORM.";

export const metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.asowin.com/success-stories/pepperfry/",
  },
  openGraph: {
    title,
    description,
    url: "https://www.asowin.com/success-stories/pepperfry/",
    siteName: "ASOWin",
    type: "article",
    images: [
      {
        url: "/pepperfry-case-study-og.jpg",
        width: 1200,
        height: 630,
        alt: "Pepperfry and ASOWin: app ratings from around 3.9 to 4.4+",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/pepperfry-case-study-og.jpg"],
    site: "@asowin",
  },
};

export default function PepperfryLayout({ children }) {
  return children;
}
