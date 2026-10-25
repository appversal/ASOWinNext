import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Store Ranking Factors 2026: What Apple Actually Weighs | ASOWin",
  description: "The App Store ranking factors that matter in 2026: title, subtitle, keyword field, downloads, ratings, engagement and updates, and what to fix first.",
};

export const metadata = postMetadata("app-store-ranking-factors-2026", baseMetadata);

export default function AppStoreRankingLayout({ children }) {
  return <>{children}</>;
}
