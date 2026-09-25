import KeywordLandingPage from "../components/landing/KeywordLandingPage";
import { landingPages, landingMetadata } from "../components/landing/pages";

export const metadata = landingMetadata(landingPages.appStoreOptimizationServices);

export default function AppStoreOptimizationServicesLanding() {
  return <KeywordLandingPage page={landingPages.appStoreOptimizationServices} />;
}
