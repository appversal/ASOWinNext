import KeywordLandingPage from "../components/landing/KeywordLandingPage";
import { landingPages, landingMetadata } from "../components/landing/pages";

export const metadata = landingMetadata(landingPages.asoAgency);

export default function AsoAgencyLanding() {
  return <KeywordLandingPage page={landingPages.asoAgency} />;
}
