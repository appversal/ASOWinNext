export const metadata = {
  title: "App Reputation Management Service | ASOWin",
  description: "Build trust and improve your app's ratings with our comprehensive reputation management services. Real-time review monitoring, AI-powered responses, and sentiment analysis.",
  openGraph: {
    title: "App Reputation Management Service | ASOWin",
    description: "Build trust and improve your app's ratings with our comprehensive reputation management services.",
    url: "https://www.asowin.com/services/app-reputation-management",
    type: "website",
    images: [{ url: "/og-reputation.jpg", width: 1200, height: 630, alt: "ASOWin app reputation management service" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-reputation.jpg"] },
};

export default function AppReputationServiceLayout({ children }) {
  return <>{children}</>;
}
