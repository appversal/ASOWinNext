import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "How to Automate ASO Reporting and Save Hours Every Week | ASOWin",
  description: "Manual ASO reporting eats hours every week. Learn how to automate keyword rank tracking, review sentiment summaries, and competitor benchmarking with AI-assisted dashboards.",
  keywords: "automate ASO reporting, ASO dashboard, keyword rank tracking automation, review sentiment analysis, competitor benchmarking ASO, AI ASO reporting"
};

export const metadata = postMetadata("automate-aso-reporting-with-ai", baseMetadata);

export default function AutomateAsoReportingWithAiLayout({ children }) {
  return <>{children}</>;
}
