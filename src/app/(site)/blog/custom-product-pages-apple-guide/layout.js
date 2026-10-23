import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "Apple Custom Product Pages: The Complete Guide for 2026 | ASOWin",
  description: "Everything you need to know about Apple Custom Product Pages: what they are, using them for paid vs organic traffic, testing methodology, and reporting.",
};

export const metadata = postMetadata("custom-product-pages-apple-guide", baseMetadata);

export default function CustomProductPagesAppleGuideLayout({ children }) {
  return <>{children}</>;
}
