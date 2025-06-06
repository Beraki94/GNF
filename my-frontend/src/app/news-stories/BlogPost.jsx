'use client';

import React, { useState } from 'react';
import BlogCard from "../../components/blogCard/BlogCard";
import { blogPosts } from '../data/blogData';
import "./blog.css";

const categories = ["All Post", "Godlight", "Events", "Videos"];

const BlogPost = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Post");

const filteredPosts = (selectedCategory === "All Post"
  ? blogPosts
  : blogPosts.filter((post) => post.category === selectedCategory)
).sort((a, b) => new Date(b.date) - new Date(a.date));


  return (
    <div className="blog-list-wrapper blog__container">
      <div className="category-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-button ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <div className="empty-state">
          <h2>No news or stories found</h2>
          <p>Check back soon. We’re working on something inspiring.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {filteredPosts.map((post) => (
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
      )}
    </div>
  );
};

export default BlogPost;
