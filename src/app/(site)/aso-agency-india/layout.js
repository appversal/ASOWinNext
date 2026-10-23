export const metadata = {
    title: "ASO Agency India | App Store Optimization Services - ASOWin",
    description: "Leading ASO agency in India. Rank higher on Play Store & App Store in 90 days. Guaranteed results with our comprehensive app store optimization services.",
    openGraph: {
        title: "ASO Agency India | App Store Optimization Services - ASOWin",
        description: "Leading ASO agency in India. Rank higher on Play Store & App Store in 90 days. Guaranteed results.",
        url: "https://www.asowin.com/aso-agency-india",
        siteName: "ASOWin",
        type: "website",
        images: [{ url: "/og-india.jpg", width: 1200, height: 630, alt: "ASOWin ASO agency in India" }],
    },
    twitter: { card: "summary_large_image", images: ["/og-india.jpg"] },
};

export default function AsoAgencyLayout({ children }) {
    return children;
}
