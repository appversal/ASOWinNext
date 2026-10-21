import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Apple App Store Ranking Factors for 2026 | ASOWin Blog",
  description: "Complete guide to organic search ranking factors in the Apple App Store. Learn about metadata optimization, engagement signals, and ASO strategies for 2026.",
};

export const metadata = postMetadata("app-store-ranking-factors-2026", baseMetadata);

export default function AppStoreRankingLayout({ children }) {
  return <>{children}</>;
}
