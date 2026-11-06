import Link from "next/link";
import Navbar from "../../components/Navbar";
import ServiceFaq from "../../components/ServiceFaq";
import GetStarted from "../../components/GetStarted";
import Footer from "../../components/Footer";
import { ENTITY_DEFINITION } from "../../components/entity";

const url = "https://www.asowin.com/faq/";
const title = "ASOWin FAQ: Company, Services, Pricing and Results";
const description =
  "Answers about ASOWin: who we are, whether we're legit, AppVersal, services, clients, pricing, ranking guarantees, timelines, markets and how to contact us.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/faq/" },
  openGraph: {
    type: "website",
    url: "/faq/",
    siteName: "ASOWin",
    title,
    description,
    images: [{ url: "/og-about.jpg", width: 1200, height: 630, alt: "ASOWin FAQ" }],
  },
  twitter: { card: "summary_large_image", title, description, site: "@asowin" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  url,
  name: title,
  description,
  about: { "@id": "https://www.asowin.com/#organization" },
  isPartOf: { "@id": "https://www.asowin.com/#website" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asowin.com/" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: url },
    ],
  },
};

const links = [
  { href: "/about/", label: "About ASOWin" },
  { href: "/success-stories/", label: "Case studies" },
  { href: "/services/", label: "Services" },
  { href: "/media-kit/", label: "Media kit" },
  { href: "/contact/", label: "Contact" },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="w-full bg-gradient-to-b from-[#FFEDE3] to-white">
        <Navbar />
        <header className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-10 md:pt-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">ASOWin FAQ</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">{ENTITY_DEFINITION}</p>
          <nav aria-label="Related pages" className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm text-[#014458] hover:border-[#fdb124]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>
      </div>
      <main>
        <ServiceFaq slug="company" />
      </main>
      <GetStarted />
      <Footer />
    </div>
  );
}
