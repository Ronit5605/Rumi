"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./blogs.css";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string; // should now be a filename like "blog1.jpg"
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/blogs") // ✅ updated from API_BASE to direct API route
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setBlogs(data);
        else console.error("Invalid blog response:", data);
      })
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  const handleReadMore = (id: string) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <h1 className="blogs-title">Blogs</h1>
        <div className="underline" />
        <p className="blogs-subtitle">
          “The moments we capture, become memories we never forget.”
        </p>
      </div>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img
              src={`/images/${blog.imageUrl}`} // ✅ loads from /public/images/
              alt={blog.title}
              className="blog-card-image"
            />
            <div className="blog-card-content">
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-description">{blog.excerpt}</p>
              <button
                className="read-more-button"
                onClick={() => handleReadMore(blog.id)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
