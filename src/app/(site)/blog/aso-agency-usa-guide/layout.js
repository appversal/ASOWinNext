import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Why US Apps Need a Local App Store Optimization Agency | ASOWin",
  description: "See why US apps face uniquely competitive App Store and Google Play dynamics, and how a US-market-focused ASO agency like ASOWin helps brands rank, convert, and build trust with American users.",
};

export const metadata = postMetadata("aso-agency-usa-guide", baseMetadata);

export default function AsoAgencyUsaGuideLayout({ children }) {
  return <>{children}</>;
}
