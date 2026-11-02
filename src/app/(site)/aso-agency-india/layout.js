export const metadata = {
    title: "ASO Agency India | App Store Optimization Services - ASOWin",
    description: "ASO agency in India with offices in Mumbai and Noida: Google Play-first ASO, Hindi and regional-language listings, ratings and fintech app expertise.",
    openGraph: {
        title: "ASO Agency India | App Store Optimization Services - ASOWin",
        description: "ASO agency in India with offices in Mumbai and Noida: Google Play-first ASO, Hindi and regional-language listings, ratings and fintech app expertise.",
        url: "https://www.asowin.com/aso-agency-india/",
        siteName: "ASOWin",
        locale: "en_IN",
        type: "website",
        images: [{ url: "/og-india.jpg", width: 1200, height: 630, alt: "ASOWin ASO agency in India" }],
    },
    twitter: { card: "summary_large_image", images: ["/og-india.jpg"] },
};

export default function AsoAgencyLayout({ children }) {
    return children;
}
