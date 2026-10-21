import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Market Research: The Complete Guide for Building Apps That Win | ASOWin Blog",
  description: "Learn how app market research separates successful apps from failures. Discover strategies for validating demand, understanding competitors, sizing markets, and turning research into growth.",
};

export const metadata = postMetadata("app-market-research-complete-guide", baseMetadata);

export default function AppMarketResearchLayout({ children }) {
  return <>{children}</>;
}
