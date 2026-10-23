import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Building an App Review Management Strategy That Scales | ASOWin",
  description: "Learn how growing teams build a scalable app review management strategy with triage workflows, sentiment tagging, escalation paths, reporting cadence, and automation.",
};

export const metadata = postMetadata("app-review-management-strategy", baseMetadata);

export default function AppReviewManagementStrategyLayout({ children }) {
  return <>{children}</>;
}
