import { growthMetadata } from "../GrowthCaseStudy";
import { lsm } from "../growth-stories";
export const metadata = growthMetadata(lsm);
export default function LSMLayout({ children }) {
  return children;
}
