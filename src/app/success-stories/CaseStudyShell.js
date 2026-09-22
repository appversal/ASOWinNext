import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./case-studies.module.css";

export function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function CaseStudyCTA() {
  return (
    <section className={styles.cta} aria-labelledby="next-chapter">
      <div>
        <p className={styles.eyebrow}>WORK WITH ASOWIN</p>
        <h2 id="next-chapter">
          Improve your app rankings
          <br />
          and review management.
        </h2>
        <p>
          Work with ASOWin, an app store optimization agency, on your next
          stage of growth. Explore our <Link href="/services/app-store-optimization/">ASO services</Link> or
          {" "}<Link href="/services/app-reputation-management/">app reputation management</Link> approach.
        </p>
      </div>
      <Link href="/contact" className={styles.lightButton}>
        Discuss your app’s ASO goals <Arrow diagonal />
      </Link>
    </section>
  );
}

export default function CaseStudyShell({ children }) {
  return (
    <>
      <div className={styles.site}>
        <Navbar />
        <a href="#main-content" className={styles.skip}>
          Skip to content
        </a>
        {children}
      </div>
      <Footer />
    </>
  );
}
