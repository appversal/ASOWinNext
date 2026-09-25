import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LeadForm from "./LeadForm";
import styles from "./landing.module.css";

// Shared layout for the paid-search landing pages. Each page passes its own
// copy (see ./pages.js) so the headline and body match the keyword it serves.
export default function KeywordLandingPage({ page }) {
  const url = `https://www.asowin.com${page.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.seoTitle,
        description: page.description,
        inLanguage: "en",
        isPartOf: { "@type": "WebSite", name: "ASOWin", url: "https://www.asowin.com/" },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asowin.com/" },
          { "@type": "ListItem", position: 2, name: page.serviceName, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        serviceType: page.serviceName,
        description: page.description,
        url,
        provider: { "@id": "https://www.asowin.com/#organization" },
        areaServed: "Worldwide",
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <div className={styles.site}>
        <Navbar />
        <main id="main-content">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

          <section className={styles.hero} aria-labelledby="landing-title">
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>{page.eyebrow}</p>
              <h1 id="landing-title">
                {page.title} <em>{page.titleEmphasis}</em>
              </h1>
              <p className={styles.intro}>{page.intro}</p>
              <ul className={styles.checks}>
                {page.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.formCard} id="get-audit">
              <h2>{page.formTitle}</h2>
              <p>{page.formIntro}</p>
              <LeadForm source={page.serviceName} ctaLabel={page.ctaLabel} />
            </div>
          </section>

          <section className={styles.proof} aria-label="Client results">
            {page.proof.map((item) => (
              <Link key={item.client} href={item.href} className={styles.proofItem}>
                <strong>{item.metric}</strong>
                <span>{item.label}</span>
                <small>
                  {item.client} case study <span aria-hidden="true">↗</span>
                </small>
              </Link>
            ))}
          </section>

          <section className={styles.services} aria-labelledby="services-title">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{page.servicesEyebrow || "WHAT’S INCLUDED"}</p>
              <h2 id="services-title">{page.servicesTitle}</h2>
              <p>{page.servicesIntro}</p>
            </div>
            <div className={styles.serviceGrid}>
              {page.services.map((service, i) => (
                <article key={service.title} className={styles.service}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.editorial} aria-labelledby="editorial-title">
            <p className={styles.eyebrow}>{page.editorialEyebrow}</p>
            <div>
              <h2 id="editorial-title">{page.editorialTitle}</h2>
              <div className={styles.twoColumns}>
                {page.editorial.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.process} aria-labelledby="process-title">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>{page.processEyebrow || "HOW IT WORKS"}</p>
              <h2 id="process-title">{page.processTitle}</h2>
            </div>
            <ol className={styles.steps}>
              {page.steps.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.faq} aria-labelledby="faq-title">
            <div>
              <p className={styles.eyebrow}>FAQ</p>
              <h2 id="faq-title">{page.faqTitle}</h2>
            </div>
            <div>
              {page.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className={styles.cta} aria-labelledby="cta-title">
            <div>
              <p className={styles.eyebrow}>FREE ASO AUDIT</p>
              <h2 id="cta-title">{page.ctaTitle}</h2>
              <p>
                Related: {page.related.map((link, i) => (
                  <span key={link.href}>
                    {i > 0 && " · "}
                    <Link href={link.href}>{link.label}</Link>
                  </span>
                ))}
              </p>
            </div>
            <a href="#get-audit" className={styles.lightButton}>
              {page.ctaLabel} <span aria-hidden="true">↑</span>
            </a>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
