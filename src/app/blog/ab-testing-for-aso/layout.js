import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "A/B Testing for ASO: How ASOWin Maximizes Your App's Conversion Rate | ASOWin Blog",
  description: "Learn how A/B testing for App Store Optimization (ASO) compares multiple versions of your app store listing to determine which creative variation delivers the highest install rate. ASOWin helps app teams unlock higher conversion rates through precise, data-driven A/B testing.",
};

export const metadata = postMetadata("ab-testing-for-aso", baseMetadata);

export default function ABTestingForASOLayout({ children }) {
  return <>{children}</>;
}
