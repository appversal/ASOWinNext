import { growthMetadata } from "../GrowthCaseStudy";
import { indiabulls } from "../growth-stories";
export const metadata = growthMetadata(indiabulls);
export default function IndiabullsLayout({ children }) {
  return children;
}
