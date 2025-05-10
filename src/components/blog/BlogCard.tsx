import { Link } from "react-router-dom";
import { IBlog } from "../../types/blog.type";

const BlogCard = ({
  blog,
  featured = false,
}: {
  blog: IBlog;
  featured?: boolean;
}) => {
  return (
    <article
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div
        className={`relative ${
          featured ? "md:w-1/2 h-64 md:h-auto" : "h-48"
        } overflow-hidden`}
      >
        <img
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
            {blog.category}
          </span>
        </div>
      </div>
      <div
        className={`p-6 flex flex-col flex-grow ${
          featured ? "md:w-1/2 md:p-8" : ""
        }`}
      >
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <span>{blog.date}</span>
          <span className="mx-2">•</span>
          <span>{blog.readTime}</span>
        </div>
        <h3
          className={`${
            featured ? "text-2xl md:text-3xl" : "text-xl"
          } font-bold mb-3 text-gray-800`}
        >
          {blog.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">{blog.excerpt}</p>
        <div className="flex items-center mt-auto">
          <img
            src={blog.authorImage || "/placeholder.svg"}
            alt={blog.author}
            className="w-10 h-10 rounded-full mr-4 object-cover"
          />
          <div>
            <p className="font-medium text-gray-800">{blog.author}</p>
            <p className="text-sm text-gray-500">{blog.authorRole}</p>
          </div>
        </div>
        <Link
          to={`/blogs/${blog.slug}`}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="text-blue-600 text-sm font-medium hover:text-blue-800 inline-flex items-center mt-4 group"
        >
          Read more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
