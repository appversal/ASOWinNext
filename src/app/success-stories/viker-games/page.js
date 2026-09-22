import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { Arrow, CaseStudyCTA } from "../CaseStudyShell";
const viker = {
 description: "How Viker Games achieved a #1 Top Free Games ranking in Australia and 500,000+ installs in one day through ASOWin’s app store optimization campaign.",
 services: [
 { tag: "RESEARCH", title: "Analyze competing games.", text: "Competitive analysis helped shape the ASO strategy for Viker’s titles in crowded gaming categories." },
 { tag: "KEYWORDS", title: "Research and target gaming keywords.", text: "The team researched and targeted relevant gaming keywords to improve app store search visibility." },
 { tag: "LISTINGS", title: "Optimize store listings.", text: "Store listing optimization addressed how the games were presented to potential players, supporting the campaign’s conversion goals." },
 { tag: "CATEGORY", title: "Refine category positioning.", text: "Category positioning formed part of the end-to-end ASO work across multiple game titles." },
 ],
 related: [{ slug: "bybit", name: "Bybit", category: "Localized ASO" }, { slug: "lsm-apps", name: "LSM Apps", category: "Google Play ASO" }],
};
import styles from "../case-studies.module.css";
import local from "../bybit/bybit.module.css";

const url = "https://www.asowin.com/success-stories/viker-games/";
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article", "@id": `${url}#article`, url,
      headline: "Viker Games achieves #1 in Australia and 500,000+ installs in one day",
      description: viker.description, inLanguage: "en", mainEntityOfPage: url,
      image: ["https://www.asowin.com/viker-portfolio.webp", "https://www.asowin.com/viker-case-study-og.jpg"],
      author: { "@type": "Organization", "@id": "https://www.asowin.com/#organization", name: "ASOWin", url: "https://www.asowin.com/" },
      publisher: { "@type": "Organization", "@id": "https://www.asowin.com/#organization", name: "ASOWin" },
      about: { "@type": "Organization", name: "Viker Games" },
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asowin.com/" },
      { "@type": "ListItem", position: 2, name: "Success stories", item: "https://www.asowin.com/success-stories/" },
      { "@type": "ListItem", position: 3, name: "Viker Games", item: url },
    ] },
  ],
};

export default function VikerCaseStudy() {
  return (
    <CaseStudyShell>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <section className={styles.hero} aria-labelledby="case-title">
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/success-stories/">Success stories</Link><span aria-hidden="true">/</span><span aria-current="page">Viker Games</span>
          </nav>
          <div className={local.heading}>
            <p className={styles.eyebrow}>VIKER GAMES × ASOWIN / MOBILE GAME ASO CASE STUDY</p>
            <h1 id="case-title">Viker Games reaches #1 in Australia.<br /><em>500,000+ installs in one day.</em></h1>
            <p className={local.dek}>ASOWin delivered end-to-end app store optimization across multiple Viker game titles. The campaign reported a #1 Top Free Games ranking in Australia and more than half a million installs in a single day.</p>
          </div>
          <figure className={local.heroImage}>
            <Image style={{ objectFit: "contain", minHeight: 0 }} src="/viker-portfolio.webp" alt="Viker Games portfolio artwork showing casual and puzzle games" width={1196} height={488} priority sizes="(max-width:700px) 92vw, 90vw" />
            <figcaption>VIKER GAMES / MOBILE GAME STUDIO</figcaption>
          </figure>
          <dl className={styles.projectFacts}>
            <div><dt>CLIENT</dt><dd>Viker Games</dd></div><div><dt>INDUSTRY</dt><dd>Mobile gaming</dd></div><div><dt>MARKETS</dt><dd>Global / Australia result</dd></div><div><dt>ENGAGEMENT</dt><dd>App store optimization</dd></div>
          </dl>
        </section>
        <nav className={`${styles.sectionNav} ${local.nav}`} aria-label="Case study sections">
          <a href="#client">01 — Client</a><a href="#problem">02 — Problem</a><a href="#solution">03 — Solution</a><a href="#results">04 — Results</a>
        </nav>
        <section id="client" className={styles.editorial} aria-labelledby="client-title">
          <p className={styles.eyebrow}>01 / ABOUT THE CLIENT</p>
          <div><h2 id="client-title">About Viker Games</h2>
            <div className={styles.twoColumns}><p>Viker Games is a mobile game studio in London, UK, known for casual and puzzle games. Its portfolio includes multiple mobile game titles.</p><p>Viker partnered with ASOWin to improve global growth and app store visibility through app store optimization.</p></div>
          </div>
        </section>
        <section id="problem" className={`${styles.approach} ${local.problem}`} aria-labelledby="problem-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>02 / THE PROBLEM</p><h2 id="problem-title">Increase game visibility and organic installs.</h2><p>Viker wanted to improve global keyword rankings, optimize store creatives and conversion rates, and grow installs without heavy reliance on paid acquisition.</p></div>
          <div className={local.challenges}>
            <article><span>01</span><h3>Search visibility</h3><p>Improve keyword rankings globally and increase visibility in competitive gaming categories.</p></article>
            <article><span>02</span><h3>Listing conversion</h3><p>Improve store creatives and conversion rates so listing visits can become installs.</p></article>
            <article><span>03</span><h3>Organic acquisition</h3><p>Grow installs organically without heavy reliance on paid acquisition.</p></article>
          </div>
        </section>
        <section id="solution" className={local.solution} aria-labelledby="solution-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>03 / THE SOLUTION</p><h2 id="solution-title">End-to-end ASO across multiple game titles.</h2><p>The ASOWin team worked closely with Viker Games on competitive analysis, keyword research and targeting, store listing optimization, and category positioning.</p></div>
          <div className={local.solutionGrid}>
            <div className={local.steps}>{viker.services.map((service, i) => <article key={service.tag}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{service.title}</h3><p>{service.text}</p></div></article>)}<Link href="/services/app-store-optimization/" className={styles.textLink}>Explore our app store optimization services <Arrow diagonal /></Link></div>
            <figure className={local.searchFigure}>
              <div className={local.figureHeader}><span>THE ASO STRATEGY</span><strong>Four areas of optimization.</strong></div>
              <a href="/viker-strategy.webp" target="_blank" rel="noopener noreferrer" aria-label="Open the Viker ASO strategy diagram at full size"><Image src="/viker-strategy.webp" alt="Viker campaign diagram covering competitive analysis, keyword research and targeting, store listing optimization, and category positioning" width={1065} height={484} sizes="(max-width:800px) 90vw, 45vw" /></a>
              <figcaption>ASO strategy diagram from the Viker Games campaign deck. <a href="/viker-strategy.webp" target="_blank" rel="noopener noreferrer">View full size ↗</a></figcaption>
            </figure>
          </div>
        </section>
        <section id="results" className={styles.results} aria-labelledby="results-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>04 / THE RESULTS</p><h2 id="results-title">#1 in Australia. 500,000+ installs in a day.</h2><p>The campaign reported a #1 Top Free Games chart position in Australia, 500,000+ installs in a single day, and rankings for multiple high-value gaming keywords.</p></div>
          <div className={styles.growthMetrics}>
            <article className={styles.primaryGrowthMetric}><p className={styles.eyebrow}>AUSTRALIA / TOP FREE GAMES</p><strong>#1</strong><p>Reported chart ranking during the campaign.</p></article>
            <article className={styles.secondaryGrowthMetric}><p className={styles.eyebrow}>INSTALLS IN ONE DAY</p><strong>500,000+</strong><p>Reported single-day installs, not a daily average.</p></article>
            <article className={styles.secondaryGrowthMetric}><p className={styles.eyebrow}>GAMING KEYWORDS</p><strong>Multiple</strong><p>Rankings achieved for high-value gaming keywords.</p></article>
          </div>
          <p className={styles.sourceNote}>Results reported in the Viker Games campaign deck. The source does not specify campaign dates, the store, or the scope of the install total across game titles.</p>
          <div className={styles.continuity}><span className={styles.eyebrow}>LONG-TERM PARTNERSHIP</span><p>The campaign’s success led to a long-term partnership with Viker Games.</p></div>
        </section>
        <section className={styles.related} aria-labelledby="related-title"><div><p className={styles.eyebrow}>MORE FROM ASOWIN</p><h2 id="related-title">Explore more<br />client stories.</h2></div>{viker.related.map(item => <Link href={`/success-stories/${item.slug}/`} className={styles.relatedLink} key={item.slug}><span>{item.category}<strong>{item.name}</strong></span><Arrow diagonal /></Link>)}</section>
        <CaseStudyCTA />
      </main>
    </CaseStudyShell>
  );
}
