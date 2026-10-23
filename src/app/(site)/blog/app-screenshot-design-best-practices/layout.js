import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Screenshot Design Best Practices That Boost Conversions | ASOWin",
  description: "Learn app screenshot design best practices that boost conversions, including sequencing, caption hierarchy, device frames vs full-bleed, localization, and testing cadence.",
};

export const metadata = postMetadata("app-screenshot-design-best-practices", baseMetadata);

export default function AppScreenshotDesignBestPracticesLayout({ children }) {
  return <>{children}</>;
}
