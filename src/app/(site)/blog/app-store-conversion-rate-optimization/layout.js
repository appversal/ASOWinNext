import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Store Conversion Rate Optimization: Turning Views Into Installs | ASOWin",
  description: "Learn what actually moves app store conversion rate, from icon and screenshots to video, ratings, and description clarity, and how to run a structured CRO testing program.",
};

export const metadata = postMetadata("app-store-conversion-rate-optimization", baseMetadata);

export default function AppStoreConversionRateOptimizationLayout({ children }) {
  return <>{children}</>;
}
