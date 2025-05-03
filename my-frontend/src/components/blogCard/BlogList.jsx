"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "../../app/data/blogData";

export default function BlogList() {
  return (
    <main className="blog-section">
      <div className="container">
        <h4 className="blog__title">Latest Blog Posts</h4>
        <div className="blog-grid">
          {blogPosts.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </main>
  );
}
