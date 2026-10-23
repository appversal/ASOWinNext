import RootShell, { rootMetadata } from "../RootShell";

export const metadata = rootMetadata;

export default function SiteLayout({ children }) {
  return <RootShell lang="en">{children}</RootShell>;
}
