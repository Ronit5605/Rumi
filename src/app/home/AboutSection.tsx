"use client";
import styles from "./home.module.css";

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <h2>About <span className={styles.us}>Us</span></h2>
      <div className={styles.aboutFrame}>
        <div className={styles.aboutCardDark}>
          <p>At IIIT Surat’s Ruminate Club, we believe that every idea holds the potential to spark a revolution...</p>
          <br />
          <p>At Ruminate, we don’t just dream — we build... shape the future, one idea at a time.</p>
        </div>
      </div>
    </section>
  );
}