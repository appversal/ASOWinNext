import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Google Play Custom Store Listings: A Step-by-Step Guide | ASOWin",
  description: "Learn how to set up Google Play custom store listings by country, keyword, and audience segment, design valid experiments, and measure the impact on conversion and installs.",
};

export const metadata = postMetadata("google-play-custom-store-listings-guide", baseMetadata);

export default function GooglePlayCustomStoreListingsGuideLayout({ children }) {
  return <>{children}</>;
}
