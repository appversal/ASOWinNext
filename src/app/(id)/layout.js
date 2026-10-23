import RootShell, { rootMetadata } from "../RootShell";

export const metadata = rootMetadata;

// Bahasa Indonesia pages get their own root layout so <html lang="id"> is correct.
export default function IndonesianLayout({ children }) {
  return <RootShell lang="id">{children}</RootShell>;
}
