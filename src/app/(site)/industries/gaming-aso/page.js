import IndustryPage from "../../../components/industry/IndustryPage";
import { INDUSTRIES } from "../../../components/industry/industries";

const industry = INDUSTRIES.gaming;

export const metadata = {
  title: industry.title,
  description: industry.description,
  alternates: { canonical: industry.path },
  openGraph: {
    type: "website",
    url: industry.path,
    siteName: "ASOWin",
    title: industry.title,
    description: industry.description,
    images: [{ url: "/og-aso.jpg", width: 1200, height: 630, alt: industry.h1 }],
  },
  twitter: { card: "summary_large_image", title: industry.title, description: industry.description, site: "@asowin" },
};

export default function GamingAsoPage() {
  return <IndustryPage industry={industry} />;
}
