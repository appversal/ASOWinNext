import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Google Play Custom Store Listings: Setup Guide (2026) | ASOWin",
  description: "How to create Google Play custom store listings by country, search keyword and campaign: step-by-step setup, experiments and measuring the lift in installs.",
};

export const metadata = postMetadata("google-play-custom-store-listings-guide", baseMetadata);

export default function GooglePlayCustomStoreListingsGuideLayout({ children }) {
  return <>{children}</>;
}
