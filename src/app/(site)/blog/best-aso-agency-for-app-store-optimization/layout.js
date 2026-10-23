import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Best ASO Agency for App Store Optimization: Why iOS Growth Needs More Than Metadata | ASOWin",
  description: "Searching for the best ASO agency for App Store growth? Learn how ASOWin helps iOS apps improve visibility, product pages, keywords, creatives, reviews, and conversions.",
};

export const metadata = postMetadata("best-aso-agency-for-app-store-optimization", baseMetadata);

export default function BestASOAgencyLayout({ children }) {
  return <>{children}</>;
}
