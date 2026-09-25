import KeywordLandingPage from "../components/landing/KeywordLandingPage";
import { landingPages, landingMetadata } from "../components/landing/pages";

export const metadata = landingMetadata(landingPages.appStoreOptimization);

export default function AppStoreOptimizationLanding() {
  return <KeywordLandingPage page={landingPages.appStoreOptimization} />;
}
