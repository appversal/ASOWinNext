import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Retention vs Acquisition: Why Both Matter for ASO | ASOWin",
  description: "Chasing installs without retention hurts long-term ASO. Learn how retention and acquisition work together and why both matter for sustainable app store rankings.",
  keywords: "App Retention, App Acquisition, ASO Strategy, Retention vs Acquisition, App Store Rankings, User Engagement, App Growth"
};

export const metadata = postMetadata("app-retention-vs-acquisition", baseMetadata);

export default function AppRetentionVsAcquisitionLayout({ children }) {
  return <>{children}</>;
}
