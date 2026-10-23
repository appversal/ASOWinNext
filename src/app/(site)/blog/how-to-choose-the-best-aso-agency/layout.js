import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Choose the Best ASO Agency for Your App | ASOWin",
  description: "Choosing the best ASO agency for your app? Here is a practical checklist to compare ASO partners and understand why ASOWin is built for long-term app growth.",
};

export const metadata = postMetadata("how-to-choose-the-best-aso-agency", baseMetadata);

export default function HowToChooseBestASOAgencyLayout({ children }) {
  return <>{children}</>;
}
