"use client";

import Link from "next/link";
import Image from "next/image";
import { CaretRight } from "@phosphor-icons/react";
import "./BlogCard.css";

const BlogCard = ({ title, description, slug, date, readTime, mainImage }) => {
  const imageUrl = mainImage?.url || "/images/placeholder.jpg";
  const isExternal = imageUrl.startsWith("http");

  return (
    <div className="blog-card">
      <div className="blog-card__image-placeholder">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="blog__img"
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: "cover" }}
          unoptimized={isExternal} // Prevent Next from optimizing YouTube thumbnails
        />
        {mainImage?.isVideo && (
          <div className="blog-card__video-tag">🎥 Video</div>
        )}
      </div>

      <div className="blog-card__details">
        <p className="blog-card__meta">
          {date} &bull; {readTime}
        </p>

        <h3 className="blog-card__title">{title}</h3>

        <p className="blog-card__description">{description}</p>

        <Link href={`/news-stories/${slug}`} className="blog-card__read-more">
          Read More <CaretRight size={16} weight="bold" />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
