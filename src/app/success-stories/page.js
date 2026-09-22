import Image from "next/image";
import Link from "next/link";
import CaseStudyShell, { Arrow, CaseStudyCTA } from "./CaseStudyShell";
import styles from "./case-studies.module.css";

const title = "ASO Agency Case Studies & App Growth Results | ASOWin";
const description =
  "Compare ASOWin’s ASO agency case studies: Bybit, Viker Games, Pepperfry, Indiabulls Securities, and LSM Apps. Explore keyword rankings, localized ASO, and app reputation.";
export const metadata = {
  title,
  description,
  alternates: { canonical: "https://www.asowin.com/success-stories/" },
  openGraph: {
    title,
    description,
    url: "https://www.asowin.com/success-stories/",
    siteName: "ASOWin",
    type: "website",
    images: [
      {
        url: "/success-stories-og.jpg",
        width: 1200,
        height: 630,
        alt: "ASOWin case studies: app store optimization and client results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/success-stories-og.jpg"],
    site: "@asowin",
  },
};

const stories = [
  { name: "Viker Games", category: "MOBILE GAMING · APP STORE OPTIMIZATION", description: "#1 Top Free Games ranking in Australia and 500,000+ installs in one day.", image: "/viker-portfolio.webp", imageAlt: "Viker Games casual and puzzle game portfolio", href: "/success-stories/viker-games" },
  { name: "Pepperfry", category: "APP REPUTATION MANAGEMENT", description: "App ratings improved from around 3.9 to 4.4+ with ongoing review management and social media ORM.", image: "/pepperfry-apps.webp", href: "/success-stories/pepperfry" },
  {
    name: "Indiabulls Securities",
    category: "FINANCIAL SERVICES · APP STORE OPTIMIZATION",
    description:
      "50+ previously unranked keywords reached the Top 50 across both app stores.",
    image: "/indiabulls-apps.webp",
    href: "/success-stories/indiabulls-securities",
  },
  {
    name: "LSM Apps",
    category: "MOBILE APPLICATIONS · ORGANIC GROWTH",
    description: "From #10 to #2 for “Phone” in the US Play Store, with 12,000 additional daily downloads reported.",
    image: "/lsm-apps.webp",
    href: "/success-stories/lsm-apps",
  },
];

export default function SuccessStories() {
  return (
    <CaseStudyShell>
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://www.asowin.com/success-stories/#webpage",
          url: "https://www.asowin.com/success-stories/",
          name: title,
          description,
          inLanguage: "en",
          publisher: { "@id": "https://www.asowin.com/#organization" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [{ name: "Bybit", href: "/success-stories/bybit" }, ...stories].map((story, index) => ({
              "@type": "ListItem", position: index + 1, name: story.name, url: `https://www.asowin.com${story.href}/`,
            })),
          },
        }) }} />
        <section className={styles.listing} aria-labelledby="stories-title">
          <div className={styles.listingHero}>
            <div>
              <p className={styles.eyebrow}>OUR WORK / SUCCESS STORIES</p>
              <h1 id="stories-title">
                <span className={styles.caseTopic}>ASO agency case studies</span>
                App store optimization.
                <br />
                <em>Client results.</em>
              </h1>
            </div>
            <p>
              Explore how our app store optimization agency helps brands improve
              keyword visibility, localize app listings, and manage app reputation.
            </p>
          </div>
          <Link href="/success-stories/bybit" className={styles.featured}>
            <div className={`${styles.featuredArt} ${styles.featuredBybit}`}>
              <Image
                src="/bybit-cover.webp"
                alt="Concept artwork of a Bybit-branded phone and gold Bitcoin coin against a global backdrop"
                width={1660}
                height={948}
                priority
                sizes="(max-width:700px) 95vw, 55vw"
              />
            </div>
            <div className={styles.featuredCopy}>
              <p className={styles.eyebrow}>FEATURED STORY / BYBIT</p>
              <h2>
                Bybit achieves Top 3 rankings
                <br />
                in Spain & Latin America.
              </h2>
              <p>
                Strategic app store optimization for Spanish-speaking markets,
                from keyword research to localized store listings.
              </p>
              <div className={styles.featuredMetric}>
                Top 3
                <span>Rankings · as reported in the campaign overview</span>
              </div>
              <span className={styles.textLink}>
                Explore the Bybit story <Arrow diagonal />
              </span>
            </div>
          </Link>
          <div className={styles.listingSubheading}>
            <h2>More ASO case studies</h2>
            <span>{String(stories.length).padStart(2, "0")} STORIES</span>
          </div>
          <div className={styles.storyGrid}>
            {stories.map((story) => (
              <Link
                key={story.href}
                href={story.href}
                className={styles.storyCard}
              >
                <div className={styles.storyArt}>
                  <Image
                    src={story.image}
                    alt={story.imageAlt || `${story.name} app screens`}
                    fill
                    sizes="(max-width:700px) 90vw, 45vw"
                  />
                </div>
                <div className={styles.storyCopy}>
                  <p className={styles.eyebrow}>{story.category}</p>
                  <h3>
                    {story.name}
                    <Arrow diagonal />
                  </h3>
                  <p>{story.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.editorial} aria-labelledby="agency-selection-title">
          <p className={styles.eyebrow}>CHOOSING AN ASO PARTNER</p>
          <div>
            <h2 id="agency-selection-title">What makes an ASO agency right for your app?</h2>
            <div className={styles.twoColumns}>
              <p>The best ASO agency for your app should demonstrate relevant experience in your category, platform, and target market. Compare the starting point, work delivered, and reported outcomes in these case studies—not just a headline number.</p>
              <p>Viker Games covers mobile game ASO, Bybit highlights localized ASO, Indiabulls Securities focuses on finance keyword visibility, LSM Apps covers Google Play discovery, and Pepperfry shows ongoing reputation management. Explore our <Link href="/services/app-store-optimization/">app store optimization services</Link> to see how we approach a new campaign.</p>
            </div>
            <Link className={styles.textLink} href="/blog/how-to-choose-the-best-aso-agency/">Read our guide to choosing an ASO agency <Arrow diagonal /></Link>
          </div>
        </section>
        <CaseStudyCTA />
      </main>
    </CaseStudyShell>
  );
}
