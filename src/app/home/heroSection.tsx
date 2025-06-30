"use client";
import styles from "./home.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Foster The <span className={styles.spark}>Spark</span>
        </h1>
        <p className={styles.subtitle}>
          Welcome to Ruminate – The E-Cell of IIT Surat
        </p>
      </div>
    </section>
  );
}