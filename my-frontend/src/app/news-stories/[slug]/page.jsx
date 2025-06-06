"use client";

import { useParams, useRouter } from "next/navigation";
import { blogPosts } from "../../data/blogData"; // adjust as needed
import { ArrowLeft, CheckCircle } from "@phosphor-icons/react";
import "../blog.css";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const router = useRouter();

  if (!post) {
    return <div>Post not found</div>; // Fallback UI
  }


  function convertToEmbedUrl(url) {
    const match = url?.match(/(?:youtu\.be\/|v=|embed\/)([a-zA-Z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }

  return (
    <div className="blog-detail__page">
      <div className="blog-detail-wrapper">

        <button className="back-button" onClick={() => router.back()}>
          <ArrowLeft size={20} weight="bold" />
          Back
        </button>

        <div className="blog-detail-header">
          <h1 className="blog-detail-title">{post.title}</h1>
          <div className="blog-detail-meta">
            <span>{post.date}</span> • <span>{post.readTime}</span>
          </div>
        </div>

        <div className="blog-detail-media">
          {post.mainImage.isVideo ? (
            <div className="blog-detail-video-wrapper">
              <iframe
                src={convertToEmbedUrl(post.mainImage.videoUrl)}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          ) : (
            <img
              src={post.mainImage.url}
              alt={post.title}
              className="blog-detail-image"
            />
          )}
        </div>

        <div
          className="blog-detail-content"
          dangerouslySetInnerHTML={{ __html: post.content1 }}
        ></div>

        {post.features && post.features.length > 0 && (
          <div className="blog-detail-features">
            <h3>Key Initiatives</h3>
            <ul>
              {post.features.map((feature, index) => (
                <li key={index}>
                  <CheckCircle size={16} weight="bold" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.extraImages && post.extraImages.length > 0 && (
          <div className="blog-detail-gallery">
            {post.extraImages.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.alt}
                className="blog-detail-gallery-image"
              />
            ))}
          </div>
        )}

        {post.content2 && (
          <div
            className="blog-detail-content"
            dangerouslySetInnerHTML={{ __html: post.content2 }}
          ></div>
        )}

        <div className="blog-detail-author">
          <p>
            <strong>{post.author.name}</strong>
            {post.author.title && ` – ${post.author.title}`}
          </p>
        </div>

      </div>
    </div>
  );
}
