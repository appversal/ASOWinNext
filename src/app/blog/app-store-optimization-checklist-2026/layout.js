import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "The Complete App Store Optimization Checklist for 2026 | ASOWin",
  description: "A complete, actionable App Store Optimization checklist for 2026 covering keywords, metadata, creatives, reviews, localization, and measurement to grow organic installs.",
  keywords: "App Store Optimization Checklist, ASO Checklist 2026, App Store Optimization, Play Store Optimization, ASO Strategy, Keyword Research, App Metadata, ASO KPIs"
};

export const metadata = postMetadata("app-store-optimization-checklist-2026", baseMetadata);

export default function AppStoreOptimizationChecklist2026Layout({ children }) {
  return <>{children}</>;
}
