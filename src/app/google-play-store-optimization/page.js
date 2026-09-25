import KeywordLandingPage from "../components/landing/KeywordLandingPage";
import { landingPages, landingMetadata } from "../components/landing/pages";

export const metadata = landingMetadata(landingPages.googlePlayStoreOptimization);

export default function GooglePlayStoreOptimizationLanding() {
  return <KeywordLandingPage page={landingPages.googlePlayStoreOptimization} />;
}
