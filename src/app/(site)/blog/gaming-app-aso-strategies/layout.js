import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "ASO Strategies for Mobile Games: A Complete Playbook | ASOWin",
  description: "A complete ASO playbook for mobile games covering creative testing, video-first store listings, event-based keyword updates, and genre-specific keyword competition.",
};

export const metadata = postMetadata("gaming-app-aso-strategies", baseMetadata);

export default function GamingAppAsoStrategiesLayout({ children }) {
  return <>{children}</>;
}
