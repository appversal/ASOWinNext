import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Google App Campaigns Best Practices for Higher ROAS | ASOWin",
  description: "Learn Google App Campaigns best practices for higher ROAS, including creative asset requirements, tCPA and tROAS bidding, audience signals, and aligning paid UA with ASO.",
};

export const metadata = postMetadata("google-app-campaigns-best-practices", baseMetadata);

export default function GoogleAppCampaignsBestPracticesLayout({ children }) {
  return <>{children}</>;
}
