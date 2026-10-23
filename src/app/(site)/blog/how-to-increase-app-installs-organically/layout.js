import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Increase App Installs Organically: A Data-Driven Guide | ASOWin",
  description: "A complete, data-driven playbook for increasing organic app installs, covering keywords, listing conversion, reviews, virality loops, cross-promotion, and seasonal updates.",
};

export const metadata = postMetadata("how-to-increase-app-installs-organically", baseMetadata);

export default function HowToIncreaseAppInstallsOrganicallyLayout({ children }) {
  return <>{children}</>;
}
