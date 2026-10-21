import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How Review Sentiment Analysis Became a Direct Ranking Factor in 2026 | ASOWin Blog",
  description: "Learn how app store algorithms now analyze review sentiment as a direct ranking factor. Discover why generic reviews harm rankings and how to get more app reviews that improve keyword ranking and app ratings.",
};

export const metadata = postMetadata("review-sentiment-analysis-ranking-factor", baseMetadata);

export default function ReviewSentimentAnalysisRankingFactorLayout({ children }) {
  return <>{children}</>;
}
