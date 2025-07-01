"use client";

import { useEffect, useState } from "react";
import "./global.css";

interface Member {
  name: string;
  role: string;
  img: string; // filename like "member1.jpg"
}

const categories = [
  "Faculties",
  "Alumini",
  "Core Team 2025-2026",
  "Developers",
];

export default function TeamPage() {
  const [team, setTeam] = useState<Member[]>([]);
  const [activeCategory, setActiveCategory] = useState("Faculties");

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch(`/api/team?category=${encodeURIComponent(activeCategory)}`);
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.error("Error fetching team:", err);
      }
    };

    fetchTeam();
  }, [activeCategory]);

  return (
    <main className="team-main">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-left">
          <p className="hero-text">
            Together <span className="highlight-orange">as a team</span>, we{" "}
            <span className="highlight-orange">dream bigger</span>,{" "}
            <span className="highlight-orange">work harder</span>, and achieve{" "}
            <span className="highlight-gradient">the impossible</span>.
          </p>
        </div>

        <div className="hero-right">
          <div className="image-layer">
            <div className="back-layer"></div>
            <img
              className="front-image"
              src="/images/some2.jpg"
              alt="Team"
            />
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR */}
      <div className="category-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* TEAM DISPLAY */}
      <section className="team">
        <h2>{activeCategory}</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div className="card" key={index}>
              <img
                src={`/images/${member.img}`}
                alt={member.name}
              />
              <div className="info">
                <p className="name">{member.name}</p>
                <p className="role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
