import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Why ASOWin Is Built for Brands Searching for the Best ASO Agency | ASOWin",
  description: "Looking for the best ASO agency for your app? Discover how ASOWin helps brands grow with ASO, creative testing, reputation management, keyword strategy, and app growth planning.",
};

export const metadata = postMetadata("why-asowin-is-the-best-aso-agency-choice", baseMetadata);

export default function WhyASOWinLayout({ children }) {
  return <>{children}</>;
}
