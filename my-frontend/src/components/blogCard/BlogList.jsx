"use client";

import React from "react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/app/data/blogData";

export default function BlogList() {
  return (
    <main className="blog-section">
      <div className="blog__list">
        <h4 className="blog__title">Latest News and Stories</h4>
        <div className="blog-grid">
          {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            description={post.shortDescription}
            slug={post.slug}
            date={post.date}
            readTime={post.readTime}
            mainImage={post.mainImage}
          />
        ))}
        </div>
      </div>
    </main>
  );
}
