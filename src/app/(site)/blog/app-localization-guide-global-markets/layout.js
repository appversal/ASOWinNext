import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Localization Guide: How to Expand ASO to Global Markets | ASOWin",
  description: "A practical guide to app localization for ASO: prioritizing markets, translating versus transcreating metadata, localized screenshots, and country-specific keyword research.",
};

export const metadata = postMetadata("app-localization-guide-global-markets", baseMetadata);

export default function AppLocalizationGuideGlobalMarketsLayout({ children }) {
  return <>{children}</>;
}
