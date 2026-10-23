import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Essential ASO Metrics and KPIs Every App Team Should Track | ASOWin",
  description: "Learn the essential App Store Optimization metrics and KPIs, from impressions to retention, and how to build a measurement dashboard that actually drives decisions.",
};

export const metadata = postMetadata("aso-metrics-and-kpis-to-track", baseMetadata);

export default function AsoMetricsAndKpisToTrackLayout({ children }) {
  return <>{children}</>;
}
