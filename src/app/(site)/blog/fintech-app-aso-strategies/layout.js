import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "App Store Optimization for Fintech Apps: What's Different | ASOWin",
  description: "Fintech ASO requires trust signals, compliance-safe messaging, and security-focused screenshots that generic ASO playbooks miss. Learn what makes ASO for financial apps different.",
};

export const metadata = postMetadata("fintech-app-aso-strategies", baseMetadata);

export default function FintechAppASOStrategiesLayout({ children }) {
  return <>{children}</>;
}
