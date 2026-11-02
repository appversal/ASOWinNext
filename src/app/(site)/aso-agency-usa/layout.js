export const metadata = {
    title: "ASO Agency USA | App Store Optimization Services - ASOWin",
    description: "ASO agency for US apps: keyword research, Apple Search Ads, ratings and creative testing for the US App Store and Google Play, from Fremont, California.",
    openGraph: {
        title: "ASO Agency USA | App Store Optimization Services - ASOWin",
        description: "ASO agency for US apps: keyword research, Apple Search Ads, ratings and creative testing for the US App Store and Google Play, from Fremont, California.",
        url: "https://www.asowin.com/aso-agency-usa/",
        siteName: "ASOWin",
        locale: "en_US",
        type: "website",
        images: [{ url: "/og-usa.jpg", width: 1200, height: 630, alt: "ASOWin ASO agency in the USA" }],
    },
    twitter: { card: "summary_large_image", images: ["/og-usa.jpg"] },
};

export default function AsoAgencyLayout({ children }) {
    return children;
}
