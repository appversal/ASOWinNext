import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "The Best ASO Agency for App Growth: What Brands Should Look For | ASOWin",
  description: "Looking for the best ASO agency for your app? Learn what makes an ASO partner effective and how ASOWin helps apps improve visibility, rankings, conversions, and organic growth.",
  keywords: "Best ASO Agency, App Growth, ASO Partner, App Store Optimization, Play Store Optimization, ASO Strategy, Organic App Growth"
};

export const metadata = postMetadata("best-aso-agency-for-app-growth", baseMetadata);

export default function BestASOAgencyAppGrowthLayout({ children }) {
  return <>{children}</>;
}
