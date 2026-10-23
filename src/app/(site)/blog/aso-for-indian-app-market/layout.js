import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "ASO Strategies for Winning the Indian App Market | ASOWin",
  description: "Learn how Android-dominant device dynamics, app size constraints, regional language localization, and price-sensitive user behavior shape a winning ASO strategy for the Indian app market.",
};

export const metadata = postMetadata("aso-for-indian-app-market", baseMetadata);

export default function AsoForIndianAppMarketLayout({ children }) {
  return <>{children}</>;
}
