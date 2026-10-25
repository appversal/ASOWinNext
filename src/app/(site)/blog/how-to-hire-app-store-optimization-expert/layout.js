import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Store Optimization Expert: How to Hire the Right One | ASOWin",
  description: "Hiring an app store optimization expert or ASO consultant? 10 questions to ask, red flags to avoid, and when to choose an ASO agency over a freelancer.",
};

export const metadata = postMetadata("how-to-hire-app-store-optimization-expert", baseMetadata);

export default function HiringASOExpertLayout({ children }) {
  return <>{children}</>;
}
