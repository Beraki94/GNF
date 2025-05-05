// app/blog/[slug]/page.jsx
import { blogPosts } from "../../data/blogData"; // adjust path
import { notFound } from "next/navigation";

export default function BlogDetailPage({ params }) {
  const { slug } = params; // make sure you're extracting it correctly

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
