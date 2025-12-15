import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt:
        "Learn the best practices for structuring large-scale React applications with proper state management and component architecture.",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      featured: true,
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better UX",
      excerpt:
        "Explore advanced CSS features like Grid, Flexbox, and custom properties to create stunning user interfaces.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "CSS",
      featured: false,
    },
    {
      id: 3,
      title: "Node.js Performance Optimization",
      excerpt:
        "Discover techniques to optimize your Node.js applications for better performance and scalability.",
      image:
        "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Node.js",
      featured: true,
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt:
        "A look into emerging technologies and trends that will shape the future of web development.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-12-28",
      readTime: "12 min read",
      category: "Technology",
      featured: false,
    },
    {
      id: 5,
      title: "Database Design Best Practices",
      excerpt:
        "Essential principles for designing efficient and scalable database schemas for modern applications.",
      image:
        "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-12-20",
      readTime: "9 min read",
      category: "Database",
      featured: false,
    },
    {
      id: 6,
      title: "API Security Fundamentals",
      excerpt:
        "Learn how to secure your APIs with authentication, authorization, and other security best practices.",
      image:
        "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "2023-12-15",
      readTime: "7 min read",
      category: "Security",
      featured: true,
    },
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 4);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development and technology
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Featured Articles
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.slice(0, 2).map((post) => (
              <div
                key={post.id}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{formatDate(post.date)}</span>

                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    <span className="mr-2">Read More</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Posts
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentPosts.map((post) => (
              <div
                key={post.id}
                className="card overflow-hidden group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">{formatDate(post.date)}</span>

                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700">
                    <span className="mr-2">Read More</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">View All Articles</button>
        </div>
      </div>
    </section>
  );
}
