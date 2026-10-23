import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Apple Search Ads vs Organic ASO: How They Work Together | ASOWin",
  description: "Understand how Apple Search Ads and organic ASO interact, including how paid impressions feed organic ranking signals, budget allocation, and keyword overlap strategy.",
};

export const metadata = postMetadata("apple-search-ads-vs-organic-aso", baseMetadata);

export default function AppleSearchAdsVsOrganicAsoLayout({ children }) {
  return <>{children}</>;
}
