import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IBlog } from "../types/blog.type";
import blogsData from "../data/blogs.json";

const BlogSection = () => {
  // const blogPosts = [
  //   {
  //     id: 1,
  //     title: "How to Choose the Perfect Bike for Your Riding Style",
  //     excerpt:
  //       "Finding the right bike depends on where and how you plan to ride. Here's our comprehensive guide to help you make the best choice.",
  //     image:
  //       "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1470&auto=format&fit=crop",
  //     category: "Buying Guide",
  //     date: "June 15, 2023",
  //     readTime: "8 min read",
  //   },
  //   {
  //     id: 2,
  //     title: "Essential Maintenance Tips to Keep Your Bike in Top Condition",
  //     excerpt:
  //       "Regular maintenance not only extends the life of your bike but also ensures a safer and more enjoyable riding experience.",
  //     image:
  //       "https://images.unsplash.com/photo-1559348349-86f1f65817fe?q=80&w=1470&auto=format&fit=crop",
  //     category: "Maintenance",
  //     date: "July 3, 2023",
  //     readTime: "6 min read",
  //   },
  //   {
  //     id: 3,
  //     title: "5 Scenic Cycling Routes Every Enthusiast Should Experience",
  //     excerpt:
  //       "From coastal paths to mountain trails, we've compiled a list of breathtaking routes that offer unforgettable cycling adventures.",
  //     image:
  //       "https://images.unsplash.com/photo-1519583272095-6433daf26b6e?q=80&w=1469&auto=format&fit=crop",
  //     category: "Adventure",
  //     date: "July 28, 2023",
  //     readTime: "10 min read",
  //   },
  // ];

  // const featuredPost = {
  //   id: 4,
  //   title: "The Evolution of E-Bikes: Transforming Urban Commuting",
  //   excerpt:
  //     "Electric bikes are revolutionizing how we move through cities, offering a sustainable alternative to cars while making cycling accessible to more people than ever before.",
  //   image:
  //     "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1470&auto=format&fit=crop",
  //   category: "Technology",
  //   date: "August 5, 2023",
  //   readTime: "12 min read",
  // };

  const [blogPosts, setBlogPosts] = useState<IBlog[]>([]);
  const [featuredPost, setFeaturedPost] = useState<IBlog | null>(null);

  useEffect(() => {
    const allBlogs = blogsData.blogs;
    const otherPosts = allBlogs.filter((blog) => !blog.featured);
    const allFeaturedPosts = allBlogs.filter((blog) => blog.featured);

    setFeaturedPost(allFeaturedPosts[0]);
    setBlogPosts(otherPosts.slice(0, 3));
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold mb-4">Pedall Blog</h2>
            <div className="w-24 h-1 bg-blue-500 mb-6"></div>
            <p className="text-gray-600 max-w-2xl text-lg">
              Insights, tips, and stories from the cycling world
            </p>
          </div>
          <Link
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            to="/blogs"
            className="hidden md:inline-flex items-center text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors"
          >
            View all articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl overflow-hidden mb-16 shadow-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img
                src={featuredPost?.image || "/placeholder.svg"}
                alt={featuredPost?.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent md:bg-gradient-to-r"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:hidden">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {featuredPost?.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{featuredPost?.readTime}</span>
                </div>
                <h3 className="text-xl font-bold">{featuredPost?.title}</h3>
              </div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  {featuredPost?.category}
                </span>
                <span className="mx-2">•</span>
                <span>{featuredPost?.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost?.readTime}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                {featuredPost?.title}
              </h3>
              <p className="text-gray-600 mb-6">{featuredPost?.excerpt}</p>
              <Link
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                to={`/blogs/${featuredPost?.slug}`}
                className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center group"
              >
                Read full article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-3 text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">{post.excerpt}</p>
                <Link
                  to={`/blogs/${post.slug}`}
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="text-blue-600 text-sm font-medium hover:text-blue-800 inline-flex items-center mt-auto group"
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
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors"
          >
            View all articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        </div>

        {/* Topics */}
        {/* <div className="mt-16">
          <h3 className="text-xl font-bold mb-6">Popular Topics</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Maintenance",
              "Road Bikes",
              "Mountain Bikes",
              "E-Bikes",
              "Accessories",
              "Commuting",
              "Adventure",
              "Racing",
              "Fitness",
              "Urban Cycling",
            ].map((topic, index) => (
              <a
                key={index}
                href="#"
                className="px-4 py-2 bg-white hover:bg-blue-50 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-colors border border-gray-200 shadow-sm"
              >
                {topic}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
