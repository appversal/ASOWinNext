import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "iOS App Store Optimization Agency: What to Look For | ASOWin",
  description: "Choosing an iOS app store optimisation agency? What an ASO marketing agency should deliver: keywords, product pages, creatives, reviews and reporting.",
};

export const metadata = postMetadata("best-aso-agency-for-app-store-optimization", baseMetadata);

export default function BestASOAgencyLayout({ children }) {
  return <>{children}</>;
}
