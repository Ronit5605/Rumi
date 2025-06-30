"use client";
import { useEffect, useState } from "react";
import styles from "./events.module.css"; // Make sure it's a CSS Module

const slides = [
  {
    image: "/images/some2.jpg",
    title: "E-Summit",
    description: "Welcome to Ruminate – The E-Cell of IIIT Surat",
  },
  {
    image: "/images/some2.jpg",
    title: "Spring Fiesta",
    description: "Celebrating innovation and entrepreneurship",
  },
  {
    image: "/images/some2.jpg",
    title: "Startup Talks",
    description: "Learn from the best minds in the ecosystem",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length); // loop back to 0 after last
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div
        className={styles.carouselTrack}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.carouselSlide} key={index}>
  <img
    src={slide.image}
    alt={slide.title}
    className={styles.slideImage}
  />
  <div className={styles.caption}>
    <h2>{slide.title}</h2>
    <p>{slide.description}</p>
  </div>
</div>

        ))}
      </div>

      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${styles.dot} ${
              current === index ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
