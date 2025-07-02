"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const toggleMenu = () => {
    setClick(!click);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span className={styles.brand}>Ruminate</span>
        <span className={styles.tagline}>E-CELL IIIT SURAT</span>
      </div>

      <nav className={`${styles.navLinks} ${click ? styles.show : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/team">Our Team</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/gallary">Gallary</Link>
      </nav>

      <button
        onClick={toggleMenu}
        className={styles.menuOption}
        aria-label="Toggle Menu"
      >
        {click ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      <div className={styles.socialIcons}>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>
    </header>
  );
}
