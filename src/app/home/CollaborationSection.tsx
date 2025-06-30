"use client";
import { useEffect, useRef } from "react";
import styles from "./home.module.css";

export default function CollaborationSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const el = scrollRef.current;
      if (el) {
        el.scrollBy({ left: 1, behavior: "smooth" });
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.collabSection}>
      <div className={styles.collabTitleBlock}>
        <div className={styles.collabLine}></div>
        <h2 className={styles.collabHeading}>Collaboration</h2>
      </div>
      <div className={styles.collabScroll} ref={scrollRef}>
        <img src="/some2.jpg" alt="Vysion" />
        <img src="/some2.jpg" alt="StockGro" />
        <img src="/some2.jpg" alt="Inside FPV" />
        <img src="/some2.jpg" alt="KasperTech" />
      </div>
    </section>
  );
}
