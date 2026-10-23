export const metadata = {
    title: "Agensi ASO Indonesia | Layanan Optimasi App Store - ASOWin",
    description: "Agensi ASO terkemuka di Indonesia. Peringkat lebih tinggi di Play Store & App Store dalam 90 hari. Hasil terjamin dengan layanan optimasi app store komprehensif kami.",
    openGraph: {
        title: "Agensi ASO Indonesia | Layanan Optimasi App Store - ASOWin",
        description: "Agensi ASO terkemuka di Indonesia. Peringkat lebih tinggi di Play Store & App Store dalam 90 hari. Hasil terjamin.",
        url: "https://www.asowin.com/aso-agency-indonesia",
        siteName: "ASOWin",
        type: "website",
        images: [{ url: "/og-indonesia.jpg", width: 1200, height: 630, alt: "ASOWin agensi ASO Indonesia" }],
    },
    twitter: { card: "summary_large_image", images: ["/og-indonesia.jpg"] },
};

export default function AsoAgencyLayout({ children }) {
    return children;
}
