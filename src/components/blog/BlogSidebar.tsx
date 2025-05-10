import { Link } from "react-router-dom";
import { IBlog } from "../../types/blog.type";

// const BlogSidebar = ({ recentPosts, popularTags }) => {
const BlogSidebar = ({ recentPosts }: { recentPosts: IBlog[] }) => {
  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              to={`/blogs/${post.slug}`}
              className="flex group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      {/* <div>
        <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="px-3 py-1 bg-gray-100 hover:bg-blue-50 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors"
            >
              {tag}
            </a>
          ))}
        </div>
      </div> */}

      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-800">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 mb-4">
          Get the latest cycling tips and news delivered to your inbox.
        </p>
        <form>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Featured Ad */}
      <div className="rounded-xl overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=1422&auto=format&fit=crop"
          alt="Special offer"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/40 p-6 flex flex-col justify-end">
          <span className="bg-yellow-400 text-blue-900 text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
            SPECIAL OFFER
          </span>
          <h3 className="text-xl font-bold text-white mb-2">
            Summer Sale: 20% Off All Road Bikes
          </h3>
          <p className="text-blue-100 mb-4">
            Limited time offer. Don't miss out!
          </p>
          <Link
            to="products"
            className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-4 py-2 rounded-lg inline-block text-center transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
