"use client";

import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import "./BlogCard.css";


const BlogCard = ({ title, description, slug, date, readTime }) => {
  return (
    <div className="blog-card">
      <div className="blog-card__image-placeholder">
       <img src="/news.jpg" alt="news badge" className="blog__img"/>
      </div>

      <div className="blog-card__details">
        <p className="blog-card__meta">
          {date} &bull; {readTime}
        </p>

        <h3 className="blog-card__title">{title}</h3>

        <p className="blog-card__description">{description}</p>

        <Link href={`/blog/${slug}`} className="blog-card__read-more">
          Read More <CaretRight size={16} weight="bold" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
