"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import "./blognew.css";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
}

export default function BlogDetail() {
  const { id } = useParams() as { id: string };
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/blogs/${id}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok || data.error) throw new Error(data.error || "Failed to load blog");
        setBlog(data);
      })
      .catch((err) => {
        console.error("Error loading blog:", err);
        setError(true);
      });
  }, [id]);

  if (error) return <p className="loading-text">Blog not found.</p>;
  if (!blog) return <p className="loading-text">Loading blog...</p>;

  return (
    <div className="blog-detail-wrapper">
      <div className="blog-heading-block">
        <h1 className="blog-top-title">Blogs</h1>
      </div>

      <h1 className="blog-main-title">{blog.title}</h1>

      <div className="blog-image-wrapper">
        <img
          src={`/images/${blog.imageUrl}`}
          alt={blog.title}
          className="blog-image"
        />
      </div>

      <div
        className="blog-body"
        dangerouslySetInnerHTML={{
          __html: blog.content.replace(/\n/g, "<br />"),
        }}
      />
    </div>
  );
}
