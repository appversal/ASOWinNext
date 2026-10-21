import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Best ASO Agency for Play Store Optimization: How ASOWin Helps Android Apps Grow | ASOWin",
  description: "Looking for the best ASO agency for Google Play Store growth? Learn how ASOWin helps Android apps improve keyword rankings, listings, conversions, ratings, and organic installs.",
  keywords: "Best ASO Agency, Play Store Optimization, Google Play ASO, Android ASO, Play Store Keywords, Custom Store Listings, Play Store Rankings"
};

export const metadata = postMetadata("best-aso-agency-for-play-store-optimization", baseMetadata);

export default function BestASOAgencyPlayStoreLayout({ children }) {
  return <>{children}</>;
}
