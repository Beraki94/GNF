// app/blog/[slug]/page.jsx
import { blogPosts } from "../../data/blogData"; // adjust path
import { notFound } from "next/navigation";
import "../blog.css"

export default function BlogDetailPage({ params }) {
  const { slug } = params; // make sure you're extracting it correctly

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  function convertToEmbedUrl(url) {
    const match = url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }
  

  return (
    <div className="blog-detail__page">
    <div className="blog-detail-wrapper">
      <div className="blog-detail-header">
        <h1 className="blog-detail-title">{post.title}</h1>

        <div className="blog-detail-meta">
          <span>{post.date}</span> • <span>{post.readTime}</span>
        </div>

        {post.author?.name && (
          <div className="blog-detail-author">
            <strong>{post.author.name}</strong>
            {post.author.title && <p>{post.author.title}</p>}
          </div>
        )}
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

      <div
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
    </div>
  );
}
