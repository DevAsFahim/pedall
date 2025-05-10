import { useState, useEffect } from "react";
import blogsData from "../../data/blogs.json";
import BlogSidebar from "../../components/blog/BlogSidebar";
import BlogAuthor from "../../components/blog/BlogAuthor";
import { useParams } from "react-router-dom";
import { IBlog } from "../../types/blog.type";
import BlogDetailContent from "../../components/blog/BlogDetailContent";
import BlogShareLinks from "../../components/blog/BlogShareLinks";
import RelatedPosts from "../../components/blog/RelatedPosts";

const SingleBlog = () => {
  const params = useParams();
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<IBlog[]>([]);
  const [recentPosts, setRecentPosts] = useState<IBlog[]>([]);

  useEffect(() => {
    if (params.slug) {
      // Find the current blog post
      const currentBlog = blogsData.blogs.find(
        (blog) => blog.slug === params.slug
      );
      setBlog(currentBlog as IBlog);

      if (currentBlog) {
        // Find related posts (same category or shared tags)
        const related = blogsData.blogs
          .filter((post) => {
            if (post.id === currentBlog.id) return false;
            if (post.category === currentBlog.category) return true;
            if (post.tags && currentBlog.tags) {
              return post.tags.some((tag) => currentBlog.tags.includes(tag));
            }
            return false;
          })
          .slice(0, 3);
        setRelatedPosts(related);
      }

      // Get recent posts for sidebar
      //   const sortedByDate = [...blogsData.blogs].sort((a, b) => {
      //     return new Date(b.date) - new Date(a.date);
      //   });
      //get recent posts
      setRecentPosts(blogsData.blogs.slice(0, 3));
    }
  }, [params.slug]);

  // Extract all tags for the sidebar
  //   const allTags = blogsData.blogs.reduce((tags, blog) => {
  //     if (blog.tags) {
  //       return [...tags, ...blog.tags];
  //     }
  //     return tags;
  //   }, []);

  // Count occurrences of each tag and sort by popularity
  //   const tagCounts = {};
  //   allTags.forEach((tag) => {
  //     tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  //   });

  //   const popularTags = Object.keys(tagCounts)
  //     .sort((a, b) => tagCounts[b] - tagCounts[a])
  //     .slice(0, 10);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Blog Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <span className="bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded">
                {blog.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blog.title}
            </h1>
            <p className="text-xl text-blue-100 mb-8">{blog.excerpt}</p>
            <BlogAuthor
              author={blog.author}
              authorRole={blog.authorRole}
              authorImage={blog.authorImage}
              date={blog.date}
              readTime={blog.readTime}
            />
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full h-96 relative -mt-6">
        <img
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Blog Content */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-10">
              <BlogDetailContent content={blog.content} />

              <div className="mt-10 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-50 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
                    >
                      #{tag}
                    </a>
                  ))}
                </div>

                <BlogShareLinks />
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
          </div>

          <div>
            {/* <BlogSidebar recentPosts={recentPosts} popularTags={popularTags} /> */}
            <BlogSidebar recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
