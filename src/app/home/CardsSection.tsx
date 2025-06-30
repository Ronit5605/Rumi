"use client";
import styles from "./home.module.css";

export default function CardsSection() {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>We foster a culture of innovation...</div>
      <div className={styles.cardHighlight}>We foster a culture of innovation...</div>
      <div className={styles.card}>We foster a culture of innovation...</div>
    </div>
  );
}