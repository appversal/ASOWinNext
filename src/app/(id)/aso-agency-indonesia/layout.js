export const metadata = {
    title: "Agensi ASO Indonesia | Layanan Optimasi App Store - ASOWin",
    description: "Agensi ASO di Jakarta: riset kata kunci Bahasa Indonesia, optimasi Google Play dan App Store, manajemen rating, dan Apple Search Ads untuk aplikasi Indonesia.",
    openGraph: {
        title: "Agensi ASO Indonesia | Layanan Optimasi App Store - ASOWin",
        description: "Agensi ASO di Jakarta: riset kata kunci Bahasa Indonesia, optimasi Google Play dan App Store, manajemen rating, dan Apple Search Ads untuk aplikasi Indonesia.",
        url: "https://www.asowin.com/aso-agency-indonesia/",
        siteName: "ASOWin",
        locale: "id_ID",
        type: "website",
        images: [{ url: "/og-indonesia.jpg", width: 1200, height: 630, alt: "ASOWin agensi ASO Indonesia" }],
    },
    twitter: { card: "summary_large_image", images: ["/og-indonesia.jpg"] },
};

export default function AsoAgencyLayout({ children }) {
    return children;
}
