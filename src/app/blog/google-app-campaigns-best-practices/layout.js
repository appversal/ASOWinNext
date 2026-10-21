import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Google App Campaigns Best Practices for Higher ROAS | ASOWin",
  description: "Learn Google App Campaigns best practices for higher ROAS, including creative asset requirements, tCPA and tROAS bidding, audience signals, and aligning paid UA with ASO.",
  keywords: "Google App Campaigns, Google Ads UA, tCPA, tROAS, Paid User Acquisition, Google Play ASO, App Marketing"
};

export const metadata = postMetadata("google-app-campaigns-best-practices", baseMetadata);

export default function GoogleAppCampaignsBestPracticesLayout({ children }) {
  return <>{children}</>;
}
