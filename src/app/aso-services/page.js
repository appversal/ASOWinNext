import KeywordLandingPage from "../components/landing/KeywordLandingPage";
import { landingPages, landingMetadata } from "../components/landing/pages";

export const metadata = landingMetadata(landingPages.asoServices);

export default function AsoServicesLanding() {
  return <KeywordLandingPage page={landingPages.asoServices} />;
}
