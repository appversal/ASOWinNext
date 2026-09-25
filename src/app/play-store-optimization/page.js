import KeywordLandingPage from "../components/landing/KeywordLandingPage";
import { landingPages, landingMetadata } from "../components/landing/pages";

export const metadata = landingMetadata(landingPages.playStoreOptimization);

export default function PlayStoreOptimizationLanding() {
  return <KeywordLandingPage page={landingPages.playStoreOptimization} />;
}
