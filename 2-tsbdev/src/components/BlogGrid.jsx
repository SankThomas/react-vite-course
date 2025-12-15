import { useState, useEffect } from "react";
import { getBlogPosts } from "../lib/sanity";
import BlogCard from "./BlogCard";
import { ClipboardIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogGrid({ searchQuery }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postsData = await getBlogPosts();
      setPosts(postsData);
      setFilteredPosts(postsData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags?.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );

      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(posts);
    }
  }, [posts, searchQuery]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="gradient-text">Dev</span>Blog
        </h1>

        <p className="text-xl text-gray-400 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          sapiente deleniti magni placeat dolorum, esse distinctio natus
          aspernatur molestias laborum?
        </p>
      </div>

      {/* Search results */}
      {searchQuery && (
        <div className="mb-8">
          <p className="text-gray-400">
            {filteredPosts.length}{" "}
            {filteredPosts.length === 1 ? "result" : "results"} for "
            {searchQuery}"
          </p>
        </div>
      )}

      {/* Posts grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">
            <ClipboardIcon />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            {searchQuery ? "No posts found" : "No posts yet"}
          </h2>
          <p className="text-gray-400">
            {searchQuery
              ? "Try searching with different keywords"
              : "Check back soon for new content!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link key={post._id} to={`/posts/${post.slug.current}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
