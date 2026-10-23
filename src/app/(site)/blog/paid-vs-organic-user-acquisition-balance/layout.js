import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Paid vs Organic User Acquisition: Finding the Right Balance | ASOWin",
  description: "Learn how to balance paid and organic user acquisition by growth stage, how paid spend accelerates organic ranking signals, and how to avoid over-reliance on paid channels.",
};

export const metadata = postMetadata("paid-vs-organic-user-acquisition-balance", baseMetadata);

export default function PaidVsOrganicUserAcquisitionBalanceLayout({ children }) {
  return <>{children}</>;
}
