import { useState, useEffect } from "react";
import { MessageCircle, Trash2, User, Send } from "lucide-react";
import { getComments, addComment, deleteComment } from "../lib/sanity";
import { useAuth } from "../context/AuthContext";

export default function CommentsSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { user, isAdmin, login } = useAuth();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getComments(postId);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    if (!newComment.trim()) return;

    setSubmitting(true);

    try {
      const comment = {
        post: { _type: "reference", _ref: postId },
        name: user.name,
        email: user.email,
        message: newComment.trim(),
        userId: user.id,
      };

      const newCommentData = await addComment(comment);
      setComments([...comments, { ...newCommentData, ...comment }]);
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteComment = async (commentId, commentUserId) => {
    if (!user || (!isAdmin && user.id !== commentUserId)) return;

    try {
      await deleteComment(commentId);
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleQuickLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const name = formData.get("name");

    if (email && name) {
      await login(email, name);
      setShowLoginPrompt(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    <div className="flex items-center justify-center py-8">
      <div className="loading-spinner"></div>
    </div>;
  }

  return (
    <div className="space-y-8">
      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold text-white mb-4">
          Leave a Comment
        </h3>

        {showLoginPrompt ? (
          <form onSubmit={handleQuickLogin} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-magenta text-white placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="youremail@example.com"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-magenta text-white placeholder-gray-400"
              />
            </div>

            <div className="flex space-x-3">
              <button type="submit" className="btn-primary">
                Continue
              </button>

              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowLoginPrompt(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmitComment}>
            <div className="mb-4">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder={
                  user
                    ? "Share your thoughts..."
                    : "Please login to leave a comment"
                }
                rows={4}
                disabled={!user}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-magenta text-white placeholder-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="flex items-center justify-between">
              {user && (
                <span className="text-sm text-gray-400">
                  Commenting as{" "}
                  <span className="text-magenta">{user.name}</span>
                </span>
              )}

              <button
                type="submit"
                disabled={!user || !newComment.trim() || submitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {submitting ? (
                  <div className="loading-spinner mr-2"></div>
                ) : (
                  <Send className="size-4 mr-2" />
                )}
                Post Comment
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Comments list */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            <MessageCircle className="size-12 mx-auto mb-4 opacity-50" />
            <p>No comments yet. be the first to share your thoughts!</p>
          </div>
        ) : (
          comments.map((comment) => (
            <div
              key={comment._id}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 fade-in"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="size-10 bg-magenta/20 rounded-full flex items-center justify-center">
                    <User className="size-5 text-magenta" />
                  </div>

                  <div>
                    <h4 className="font-medium text-white">{comment.name}</h4>
                    <p className="text-xs text-gray-500">
                      {formatDate(comment._createdAt)}
                    </p>
                  </div>
                </div>

                {/* Delete button */}
                {user && (isAdmin || user.id === comment.userId) && (
                  <button
                    onClick={() =>
                      handleDeleteComment(comment._id, comment.userId)
                    }
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>

              <p className="text-gray-300 leading-relaxed">{comment.message}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
