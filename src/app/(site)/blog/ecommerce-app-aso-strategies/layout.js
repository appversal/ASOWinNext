import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "ASO for E-commerce Apps: Turning Browsers Into Buyers | ASOWin",
  description: "Learn ASO strategies built for e-commerce apps, including seasonal listing updates, promo-driven screenshots, review-driven purchase trust, and cross-border keyword strategy.",
};

export const metadata = postMetadata("ecommerce-app-aso-strategies", baseMetadata);

export default function EcommerceAppASOStrategiesLayout({ children }) {
  return <>{children}</>;
}
