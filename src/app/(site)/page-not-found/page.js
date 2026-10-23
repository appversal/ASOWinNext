import Link from "next/link";

export const metadata = {
  title: "Page not found | ASOWin",
  robots: { index: false, follow: true },
  // Served as /404.html for every missing URL, so it must not claim its own canonical.
  alternates: {},
};

export default function PageNotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-sm font-semibold tracking-widest text-[#014458] uppercase mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-bold text-[#111111] mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className="bg-[#fdb124] text-white px-8 py-3 rounded-full font-medium hover:bg-[#e09910] transition-colors">
        Back to ASOWin home
      </Link>
    </main>
  );
}
