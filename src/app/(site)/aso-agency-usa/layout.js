export const metadata = {
    title: "ASO Agency USA | App Store Optimization Services - ASOWin",
    description: "Leading ASO agency in USA. Rank higher on Play Store & App Store in 90 days. Guaranteed results with our comprehensive app store optimization services.",
    openGraph: {
        title: "ASO Agency USA | App Store Optimization Services - ASOWin",
        description: "Leading ASO agency in USA. Rank higher on Play Store & App Store in 90 days. Guaranteed results.",
        url: "https://www.asowin.com/aso-agency-usa",
        siteName: "ASOWin",
        type: "website",
        images: [{ url: "/og-usa.jpg", width: 1200, height: 630, alt: "ASOWin ASO agency in the USA" }],
    },
    twitter: { card: "summary_large_image", images: ["/og-usa.jpg"] },
};

export default function AsoAgencyLayout({ children }) {
    return children;
}
