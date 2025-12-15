import { useState, useEffect } from "react";
import { Calendar, Clock, ArrowLeft, MessageCircle } from "lucide-react";
import { getBlogPost } from "../lib/sanity";
import { urlFor } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import CommentsSection from "./CommentsSection";
import { useNavigate, useParams } from "react-router-dom";

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await getBlogPost(slug);
        setPost(postData);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (!post) {
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Post not found</h2>
        <button onClick={() => navigate("/")} className="btn-primary">
          <ArrowLeft className="size-4 mr-2" />
          Go Back
        </button>
      </div>
    </div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 fade-in">
      <button
        onClick={() => navigate("/")}
        className="flex items-center text-magenta hover:text-magenta-light mb-8 transition-colors"
      >
        <ArrowLeft className="size-4 mr-2" />
        Go Back
      </button>

      {post.mainImage && (
        <div className="aspect-video rounded-xl overflow-hidden mb-8">
          <img
            src={urlFor(post.mainImage).width(1200).height(600).url()}
            alt={post.title}
            className="size-full object-cover"
          />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="text-xl text-gray-400 mb-6">{post.excerpt}</p>
        )}

        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="size-4 mr-1" />
              {formatDate(post.publishedAt)}
            </div>

            {post.estimatedReadingTime && (
              <div className="flex items-center">
                <Clock className="size-4 mr-1" />
                {post.estimatedReadingTime} min read
              </div>
            )}

            {post.author && (
              <div className="flex items-center">
                {post.author.image && (
                  <img
                    src={urlFor(post.author.image).width(32).height(32).url()}
                    alt={post.author.name}
                    className="size-8 rounded-full mr-2"
                  />
                )}
                <span>By {post.author.name}</span>
              </div>
            )}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-magenta/10 text-magenta text-sm rounded-full border border-magenta/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="portable-text">
        <PortableText value={post.body} />
      </div>

      {/* Comments section */}
      <div className="border-t border-gray-800 pt-8">
        <div className="flex items-center mb-6">
          <MessageCircle className="size-6 mr-2 text-magenta" />
          <h2 className="text-2xl font-bold text-w">Comments</h2>
        </div>

        <CommentsSection postId={post._id} />
      </div>
    </div>
  );
}
