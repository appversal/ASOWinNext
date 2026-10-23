export const metadata = {
  title: "Automated Review Replies | AI-Powered App Review Management | ASOWin",
  description:
    "Engage with users at scale using AI-powered, personalized replies to app store reviews. Improve ratings, save time, and boost user trust. Try free today!",
  openGraph: {
    title: "Automated Review Replies - Manage App Reviews at Scale",
    description: "AI-powered intelligent replies to app store reviews. Save time, boost ratings, and improve user engagement.",
    url: "https://www.asowin.com/automated-review-replies",
    type: "website",
    images: [{ url: "/og-review-replies.jpg", width: 1200, height: 630, alt: "ASOWin AI review replies" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-review-replies.jpg"] },
};

export default function ReviewRepliesLayout({ children }) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
