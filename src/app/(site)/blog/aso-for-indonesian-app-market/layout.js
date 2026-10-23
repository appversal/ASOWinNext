import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Optimize Your App for the Indonesian Market | ASOWin",
  description: "Learn how Bahasa Indonesia localization, mobile-first budget-device users, app size optimization, and local payment expectations shape a winning ASO strategy for the Indonesian app market.",
};

export const metadata = postMetadata("aso-for-indonesian-app-market", baseMetadata);

export default function AsoForIndonesianAppMarketLayout({ children }) {
  return <>{children}</>;
}
