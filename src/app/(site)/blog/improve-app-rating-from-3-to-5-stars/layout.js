import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Improve Your App Rating From 3 Stars to 5 Stars | ASOWin",
  description: "A practical guide to improving your app rating from 3 stars to 5 stars, covering in-app rating prompts, root-cause bug fixes, compliant review strategies, and realistic recovery timelines.",
};

export const metadata = postMetadata("improve-app-rating-from-3-to-5-stars", baseMetadata);

export default function ImproveAppRatingFrom3To5StarsLayout({ children }) {
  return <>{children}</>;
}
