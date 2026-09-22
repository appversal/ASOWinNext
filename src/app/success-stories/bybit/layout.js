import { growthMetadata } from "../GrowthCaseStudy";
import { bybit } from "../bybit-story";

export const metadata = growthMetadata(bybit);

export default function BybitLayout({ children }) {
  return children;
}
