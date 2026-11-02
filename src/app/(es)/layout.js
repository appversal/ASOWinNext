import RootShell, { rootMetadata } from "../RootShell";

export const metadata = rootMetadata;

// Spanish pages get their own root layout so <html lang="es"> is correct.
export default function SpanishLayout({ children }) {
  return <RootShell lang="es">{children}</RootShell>;
}
