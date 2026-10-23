import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "iOS vs Android ASO: Key Differences Every App Marketer Should Know | ASOWin",
  description: "iOS and Android ASO are not the same game. Compare ranking algorithms, metadata fields, keyword strategy, and listing tools between the App Store and Google Play.",
};

export const metadata = postMetadata("ios-vs-android-aso-differences", baseMetadata);

export default function IosVsAndroidAsoDifferencesLayout({ children }) {
  return <>{children}</>;
}
