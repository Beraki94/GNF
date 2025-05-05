import Image from "next/image";
import { blogPosts } from "@/app/data/blogData";
import "@/app/news-and-stories/[slug]/blogDetail.css";

export default function BlogDetail({ params }) {
  const { slug } = params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <div className="blog-detail-wrapper">Post not found</div>;
  }

  return (
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
              src={post.mainImage.videoUrl}
              title={post.title}
              frameBorder="0"
              allowFullScreen
              width="100%"
              height="500"
            ></iframe>
          </div>
        ) : (
          <Image
            src={post.mainImage.url || "/images/placeholder.jpg"}
            alt={post.title}
            width={1000}
            height={500}
            className="blog-detail-image"
            priority
          />
        )}
      </div>

      <div
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </div>
  );
}
