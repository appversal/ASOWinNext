import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Create App Store Video Previews That Convert | ASOWin",
  description: "A complete guide to app store video previews: length and format requirements, the hook-in-first-3-seconds principle, autoplay behavior, and measuring conversion lift.",
  keywords: "App Store Video Preview, App Preview Video, Google Play Video, Video ASO, Creative Testing, App Store Conversion Rate"
};

export const metadata = postMetadata("app-store-video-preview-guide", baseMetadata);

export default function AppStoreVideoPreviewGuideLayout({ children }) {
  return <>{children}</>;
}
