import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Hire an App Store Optimization Expert: 10 Critical Questions | ASOWin",
  description: "Learn how to hire the right App Store Optimization Expert. Discover 10 essential questions to ask, red flags to avoid, and how to find the best ASO agency or specialist for your app.",
};

export const metadata = postMetadata("how-to-hire-app-store-optimization-expert", baseMetadata);

export default function HiringASOExpertLayout({ children }) {
  return <>{children}</>;
}
