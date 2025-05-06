// app/blog/[slug]/page.jsx
"use client";

import { blogPosts } from "../../data/blogData"; // adjust path
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation"; // ✅ import useRouter
import { CheckCircle, ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import "../blog.css";

export default function BlogDetailPage({ params }) {
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  function convertToEmbedUrl(url) {
    const match = url?.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }

  const router = useRouter(); // ✅ initialize router

  return (
    <div className="blog-detail__page">
      <div className="blog-detail-wrapper">

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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
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

        {post.content1 && (
          <div
            className="blog-detail-content"
            dangerouslySetInnerHTML={{ __html: post.content1 }}
          />
        )}

        {Array.isArray(post.features) && post.features.length > 0 && (
          <div className="blog-detail-content">
            <ul className="list-none space-y-2">
              {post.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle size={24} className="text-blue-600 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {post.content2 && (
          <div
            className="blog-detail-content"
            dangerouslySetInnerHTML={{ __html: post.content2 }}
          />
        )}

        {post.author?.name && (
          <div className="blog-detail-author">
            <strong>{post.author.name}</strong>
            {post.author.title && <p>{post.author.title}</p>}
          </div>
        )}

        <button
          onClick={() => router.push("/news-stories")}
          className="blog-back-button"
        >
          <ArrowLeft size={24} weight="bold" />
          <span>Back to Blog</span>
        </button>

      </div>
    </div>
  );
}
