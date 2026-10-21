import { postMetadata } from "../postMetadata";

const baseMetadata = {
  title: "10 ChatGPT Prompts Every ASO Manager Should Be Using | ASOWin",
  description: "Practical ChatGPT prompts for keyword clustering, review sentiment tagging, competitor screenshot analysis, and metadata drafting, plus how to validate AI output before publishing.",
  keywords: "ChatGPT prompts for ASO, AI prompts app store optimization, ASO keyword clustering prompts, AI metadata writing, review sentiment prompts, ASO manager tools"
};

export const metadata = postMetadata("chatgpt-prompts-for-aso", baseMetadata);

export default function ChatgptPromptsForAsoLayout({ children }) {
  return <>{children}</>;
}
