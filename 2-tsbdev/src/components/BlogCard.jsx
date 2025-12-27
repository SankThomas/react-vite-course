import { Calendar, Clock, Tag } from "lucide-react";
import { urlFor } from "../lib/sanity";

export default function BlogCard({ post, onClick }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article
      onClick={() => onClick(post)}
      className="group cursor-pointer bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 border border-gray-800 hover:border-magenta/30 fade-in"
    >
      {post.mainImage && (
        <div className="aspect-video overflow-hidden">
          <img
            src={urlFor(post.mainImage).width(600).height(300).url()}
            className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
            alt={post.title}
          />
        </div>
      )}

      <div className="p-6">
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 bg-magenta/10 text-magenta text-xs rounded-full border border-magenta/20"
              >
                <Tag className="size-3 mr-2" />
                {tag.title}
              </span>
            ))}
          </div>
        )}

        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-magenta transition-colors line-clamp-1">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center justify-between text-xs text-gray-500">
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
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          {post.author && (
            <div className="flex items-center space-x-2">
              {post.author.image && (
                <img
                  src={urlFor(post.author.image).width(24).height(24).url()}
                  alt={post.author.name}
                  className="size-5 rounded-full"
                />
              )}
              <span>{post.author.name}</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
