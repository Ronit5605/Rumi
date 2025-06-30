"use client";

import { useState, useEffect } from "react";
import "./gallery.css";

interface GalleryImage {
  img: string;
  event?: string;
}

export default function Gallery() {
  const [photos, setPhotos] = useState<GalleryImage[] | null>(null);
  const [year, setYear] = useState("2024");
  const [eventType, setEventType] = useState("All");
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const years = ["2024", "2023", "2022", "2021"];
  const events = ["All", "TechFest", "Cultural", "Workshop", "Sports"];

  useEffect(() => {
    setLoading(true);
    const baseUrl = `/api/gallary`;
    const query: string[] = [];

    if (year !== "All") query.push(`year=${year}`);
    if (eventType !== "All") query.push(`event=${eventType}`);

    const url = query.length ? `${baseUrl}?${query.join("&")}` : baseUrl;

    fetch(url)
      .then((res) => res.json())
      .then((data: GalleryImage[]) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setPhotos([]);
        setLoading(false);
      });
  }, [year, eventType]);

  return (
    <div className="gallery-container">
      <main>
        <h1>Photo Stream</h1>
        <p>The moments we capture become memories we never forget.</p>

        <div className="filters">
          <div className="dropdown-group">
            <label>Sort By Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              {years.map((yr) => (
                <option key={yr} value={yr}>
                  {yr}
                </option>
              ))}
            </select>
          </div>

          <div className="dropdown-group">
            <label>Sort By Events</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              {events.map((ev) => (
                <option key={ev} value={ev}>
                  {ev}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Image grid */}
        {loading ? (
          <p className="loading-text">Loading images...</p>
        ) : photos && photos.length > 0 ? (
          <div className="photo-grid">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="photo-card"
                onClick={() => setActiveImg(photo.img)}
              >
                <img
                  src={`/images/${photo.img}`}
                  alt={`Gallery ${idx}`}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="loading-text">No images found for this filter.</p>
        )}

        {/* Enlarged view */}
        {activeImg && (
          <div className="overlay" onClick={() => setActiveImg(null)}>
            <img
              className="enlarged"
              src={`/images/${activeImg}`}
              alt="Zoomed"
            />
          </div>
        )}
      </main>
    </div>
  );
}
