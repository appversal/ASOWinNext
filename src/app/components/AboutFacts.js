import Link from "next/link";
import { PROOF, CASE_STUDY_ORDER } from "./proofFacts";

// Verifiable facts about ASOWin, each backed by a page on the site.
const offices = ["California", "Delaware", "Jakarta", "Singapore", "Mumbai", "Noida"];

const services = [
  { name: "App Store Optimization", href: "/services/app-store-optimization/" },
  { name: "App Reputation Management", href: "/services/app-reputation-management/" },
  { name: "Creative A/B Testing & Design", href: "/services/creative-ab-testing/" },
  { name: "Paid User Acquisition & Apple Search Ads", href: "/services/paid-user-acquisition/" },
  { name: "Automated ASO with AI", href: "/services/automated-aso-ai/" },
  { name: "AI Review Replies", href: "/automated-review-replies/" },
];

const caseStudies = CASE_STUDY_ORDER.map((key) => PROOF[key]);

const AboutFacts = () => (
  <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-20" aria-labelledby="about-facts-title">
    <div className="max-w-7xl mx-auto">
      <h2 id="about-facts-title" className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#1a1a1a] mb-4">
        ASOWin at a glance
      </h2>
      <p className="text-base md:text-lg text-gray-600 max-w-3xl mb-12">
        ASOWin is a global App Store Optimization (ASO) agency. We grow app rankings, ratings and installs on the
        Apple App Store and Google Play for brands in fintech, e-commerce, gaming and consumer apps.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-[#E9A63A] uppercase mb-4">Offices</h3>
          <ul className="space-y-2 text-[#374151] text-lg">
            {offices.map((office) => (
              <li key={office}>{office}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-[#E9A63A] uppercase mb-4">What we do</h3>
          <ul className="space-y-2 text-lg">
            {services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="text-[#374151] hover:text-[#E9A63A] transition-colors">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-[#E9A63A] uppercase mb-4">Client results</h3>
          <ul className="space-y-3">
            {caseStudies.map((study) => (
              <li key={study.href}>
                <Link href={study.href} className="group">
                  <span className="block text-lg text-[#1a1a1a] group-hover:text-[#E9A63A] transition-colors">
                    {study.name}
                  </span>
                  <span className="block text-sm text-gray-600">{study.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-12 text-base md:text-lg text-gray-600">
        We also publish{" "}
        <Link href="/book/" className="text-[#E9A63A] font-medium hover:underline">
          App Store Optimization: The Ultimate Book
        </Link>
        , a free guide to how the App Store and Google Play rank apps.
      </p>
    </div>
  </section>
);

export default AboutFacts;
