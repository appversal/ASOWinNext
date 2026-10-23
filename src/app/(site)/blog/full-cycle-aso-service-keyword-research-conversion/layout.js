import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Full-Cycle App Store Optimization Service: Keyword Research to Conversion",
  description: "Learn how comprehensive App Store Optimization Services drive results from keyword research to conversion. Master ASO strategies that improve app keyword ranking and visibility.",
};

export const metadata = postMetadata("full-cycle-aso-service-keyword-research-conversion", baseMetadata);

export default function FullCycleASOServiceLayout({ children }) {
  return <>{children}</>;
}
