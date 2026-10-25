import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "ASO A/B Testing: How to Test Icons and Screenshots | ASOWin",
  description: "ASO A/B and split testing on the App Store and Google Play: what to test first, how to set up experiments and how to read the results.",
};

export const metadata = postMetadata("ab-testing-for-aso", baseMetadata);

export default function ABTestingForASOLayout({ children }) {
  return <>{children}</>;
}
