import Link from "next/link";
import Navbar from "../Navbar";
import GetStarted from "../GetStarted";
import ServiceFaq from "../ServiceFaq";
import Footer from "../Footer";
import GoogleAnalytics from "../GoogleAnalytics";

// Commercial page for one industry: the proof first, then how ASO differs in
// that category, then guides and FAQ. Copy lives in ./industries.js.
export default function IndustryPage({ industry }) {
  return (
    <div className="min-h-screen bg-white">
      <GoogleAnalytics />

      <div className="w-full bg-gradient-to-b from-[#FFEDE3] to-white">
        <Navbar />
        <header className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-16 md:pt-16 text-center">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-[#fdb124]">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-[#fdb124] font-semibold">{industry.name}</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#111111] mb-6 leading-tight">{industry.h1}</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">{industry.intro}</p>
          <Link
            href="/contact/"
            className="inline-block bg-[#fdb124] px-8 py-3 text-white text-base md:text-lg rounded-full hover:bg-[#e09910] transition-colors font-semibold"
          >
            {industry.cta}
          </Link>
        </header>
      </div>

      <main>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="industry-proof">
          <h2 id="industry-proof" className="text-3xl md:text-4xl font-bold text-[#111111] mb-8">
            {industry.proofHeading}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.proof.map((item) => (
              <li key={item.href} className="rounded-2xl bg-[#014458] text-white p-8">
                <p className="text-5xl font-bold text-[#fdb124]">{item.metric}</p>
                <p className="mt-2 text-white/85">{item.label}</p>
                <Link href={item.href} className="inline-block mt-5 text-sm font-semibold text-[#FFB842] hover:underline">
                  Read the {item.client} case study →
                </Link>
              </li>
            ))}
          </ul>
          {industry.clients && <p className="mt-6 text-gray-600">{industry.clients}</p>}
        </section>

        <section className="bg-[#FFF8F2] py-16" aria-labelledby="industry-different">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 id="industry-different" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              {industry.differentHeading}
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mb-10">{industry.differentIntro}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.points.map((point) => (
                <li key={point.title} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#111111] mb-2">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{point.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16" aria-labelledby="industry-guides">
          <h2 id="industry-guides" className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
            {industry.guidesHeading}
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mb-6">
            The services behind this work:{" "}
            {industry.services.map((service, index) => (
              <span key={service.href}>
                {index > 0 && (index === industry.services.length - 1 ? " and " : ", ")}
                <Link href={service.href} className="text-[#014458] font-semibold underline">{service.label}</Link>
              </span>
            ))}
            .
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {industry.guides.map((guide) => (
              <li key={guide.href}>
                <Link href={guide.href} className="text-[#014458] hover:text-[#fdb124] underline">{guide.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <ServiceFaq slug={industry.faqSlug} />
      </main>

      <GetStarted />
      <Footer />
    </div>
  );
}
