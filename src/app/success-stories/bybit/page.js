import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { Arrow, CaseStudyCTA } from "../CaseStudyShell";
import { bybit } from "../bybit-story";
import styles from "../case-studies.module.css";
import local from "./bybit.module.css";

const url = "https://www.asowin.com/success-stories/bybit/";
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", "@id": `${url}#article`, url,
      headline: "Bybit ASO case study: Top 3 rankings across Spain and Latin America",
      description: bybit.description, inLanguage: "en", mainEntityOfPage: url,
      image: ["https://www.asowin.com/bybit-cover.webp", "https://www.asowin.com/bybit-case-study-og.jpg"],
      author: { "@type": "Organization", "@id": "https://www.asowin.com/#organization", name: "ASOWin", url: "https://www.asowin.com/" },
      publisher: { "@type": "Organization", "@id": "https://www.asowin.com/#organization", name: "ASOWin" },
      about: { "@type": "Organization", name: "Bybit" },
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asowin.com/" },
      { "@type": "ListItem", position: 2, name: "Success stories", item: "https://www.asowin.com/success-stories/" },
      { "@type": "ListItem", position: 3, name: "Bybit", item: url },
    ] },
  ],
};

export default function BybitCaseStudy() {
  return (
    <CaseStudyShell>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className={styles.hero} aria-labelledby="case-title">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/success-stories/">Success stories</Link><span aria-hidden="true">/</span><span aria-current="page">Bybit</span>
          </nav>
          <div className={local.heading}>
            <p className={styles.eyebrow}>BYBIT × ASOWIN / LOCALIZED ASO CASE STUDY</p>
            <h1 id="case-title">Bybit achieves Top 3 rankings<br /><em>across Spain & Latin America.</em></h1>
            <p className={local.dek}>ASOWin implemented a strategic app store optimization campaign for Spanish-speaking markets, focusing on keyword rankings and store listings.</p>
          </div>
          <figure className={local.heroImage}>
            <Image src="/bybit-cover.webp" alt="Concept artwork of a Bybit-branded phone and gold Bitcoin coin against a global backdrop" width={1660} height={948} priority sizes="(max-width:700px) 92vw, 90vw" />
            <figcaption>BYBIT / CONCEPT ARTWORK</figcaption>
          </figure>
          <dl className={styles.projectFacts}>
            <div><dt>CLIENT</dt><dd>Bybit</dd></div><div><dt>INDUSTRY</dt><dd>Crypto / FinTech</dd></div><div><dt>MARKETS</dt><dd>Spain & Latin America</dd></div><div><dt>ENGAGEMENT</dt><dd>Localized app store optimization</dd></div>
          </dl>
        </section>
        <nav className={`${styles.sectionNav} ${local.nav}`} aria-label="Case study sections">
          <a href="#client">01 — Client</a><a href="#problem">02 — Problem</a><a href="#solution">03 — Solution</a><a href="#results">04 — Results</a>
        </nav>
        <section id="client" className={styles.editorial} aria-labelledby="client-title">
          <p className={styles.eyebrow}>01 / ABOUT THE CLIENT</p>
          <div><h2 id="client-title">About Bybit</h2>
            <div className={styles.twoColumns}><p>Bybit is a cryptocurrency exchange with products spanning spot trading, derivatives, and copy trading. Its mobile app brings these trading tools to a global audience.</p><p>With an established international presence, Bybit wanted to expand mobile app visibility and user acquisition in Spanish-speaking markets, including Spain and Latin America.</p></div>
          </div>
        </section>
        <section id="problem" className={`${styles.approach} ${local.problem}`} aria-labelledby="problem-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>02 / THE PROBLEM</p><h2 id="problem-title">Improve organic visibility in Spanish-speaking markets.</h2><p>The crypto app category is competitive. Bybit needed a stronger organic presence in the searches used by Spanish-speaking audiences.</p></div>
          <div className={local.challenges}>
            <article><span>01</span><h3>Search visibility</h3><p>Improve keyword rankings in Spain and become easier to discover for relevant crypto searches.</p></article>
            <article><span>02</span><h3>Local relevance</h3><p>Connect the store listing with Spanish-language search intent in a crowded app category.</p></article>
            <article><span>03</span><h3>Regional acquisition</h3><p>Support organic user acquisition in Spanish-speaking Latin American markets.</p></article>
          </div>
        </section>
        <section id="solution" className={local.solution} aria-labelledby="solution-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>03 / THE SOLUTION</p><h2 id="solution-title">Optimize Spanish keywords and app store listings.</h2><p>ASOWin began with Spain, bringing keyword optimization and store listing relevance together around the needs of Spanish-speaking users.</p></div>
          <div className={local.solutionGrid}>
            <div className={local.steps}>{bybit.services.map((service, i) => <article key={service.tag}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{service.title}</h3><p>{service.text}</p></div></article>)}<Link href="/services/app-store-optimization/" className={styles.textLink}>Explore our app store optimization services <Arrow diagonal /></Link></div>
            <figure className={local.searchFigure}>
              <div className={local.figureHeader}><span>THE DISCOVERY EXPERIENCE</span><strong>Bybit in Spanish-language Google Play search.</strong></div>
              <a href="/bybit-store-search.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the Google Play search visual at full size"><Image src="/bybit-store-search.webp" alt="Google Play search visual from the Bybit campaign deck, showing Bybit alongside Binance and Coinbase in a Spanish-language interface" width={956} height={592} sizes="(max-width:800px) 90vw, 45vw" /></a>
              <figcaption>Google Play search visual supplied in the campaign deck. Shown for context; it does not independently establish a dated ranking result. <a href="/bybit-store-search.webp" target="_blank" rel="noopener noreferrer">View full size ↗</a></figcaption>
            </figure>
          </div>
        </section>
        <section id="results" className={styles.results} aria-labelledby="results-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>04 / THE RESULTS</p><h2 id="results-title">Top 3 rankings in Spain and Latin America.</h2><p>The Bybit campaign overview reports Top 3 rankings across Spain and Latin America through strategic app store optimization.</p></div>
          <div className={local.resultPanel}><strong>Top 3</strong><div><span>REPORTED CAMPAIGN RESULT</span><h3>Spain & Latin America</h3><p>Localized keyword strategy and store listing optimization, focused on Spanish-speaking discovery.</p></div></div>
          <p className={styles.sourceNote}>Source: ASOWin’s Bybit campaign overview. The result describes the campaign outcome, not live rankings. The supplied overview does not specify the ranking dates or individual keywords.</p>
        </section>
        <section className={styles.related} aria-labelledby="related-title"><div><p className={styles.eyebrow}>MORE FROM ASOWIN</p><h2 id="related-title">Explore more<br />client stories.</h2></div>{bybit.related.map(item => <Link href={`/success-stories/${item.slug}/`} className={styles.relatedLink} key={item.slug}><span>{item.category}<strong>{item.name}</strong></span><Arrow diagonal /></Link>)}</section>
        <CaseStudyCTA />
      </main>
    </CaseStudyShell>
  );
}
