import { useState, useEffect } from "react"
import BlogHeader from "../../components/blog/BlogHeader"
import blogsData from "../../data/blogs.json"
// import BlogCategories from "../../components/blog/BlogCategories"
import BlogCard from "../../components/blog/BlogCard"
import BlogSidebar from "../../components/blog/BlogSidebar"
// import BlogPagination from "../../components/blog/BlogPagination"
import { IBlog } from "../../types/blog.type"

const BlogPage = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([])
  const [featuredBlogs, setFeaturedBlogs] = useState<IBlog[]>([])
  const [recentBlogs, setRecentBlogs] = useState<IBlog[]>([])

  useEffect(() => {
    const allBlogs = blogsData.blogs
    setBlogs(allBlogs.filter((blog) => !blog.featured))
    setFeaturedBlogs(allBlogs.filter((blog) => blog.featured))

    // Get recent blogs for sidebar
    // const sortedByDate = [...allBlogs].sort((a, b) => {
    //   return new Date(b.date) - new Date(a.date)
    // })
    // set recent blogs
    setRecentBlogs(allBlogs.slice(0, 3))
  }, [])

  // Extract all tags for the sidebar
  // const allTags = blogsData.blogs.reduce((tags, blog) => {
  //   if (blog.tags) {
  //     return [...tags, ...blog.tags]
  //   }
  //   return tags
  // }, [])

  // Count occurrences of each tag and sort by popularity
  // const tagCounts = {}
  // allTags.forEach((tag) => {
  //   tagCounts[tag] = (tagCounts[tag] || 0) + 1
  // })

  // const popularTags = Object.keys(tagCounts)
  //   .sort((a, b) => tagCounts[b] - tagCounts[a])
  //   .slice(0, 10)

  return (
    <div>
      <BlogHeader />

      <div className="container mx-auto px-4 py-12">
        {/* <BlogCategories /> */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Featured Blogs */}
            {featuredBlogs.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
                <div className="grid grid-cols-1 gap-8">
                  {featuredBlogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} featured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* All Blogs */}
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>

            {/* <BlogPagination /> */}
          </div>

          <div className="mt-12 lg:mt-0">
            {/* <BlogSidebar recentPosts={recentBlogs} popularTags={popularTags} /> */}
            <BlogSidebar recentPosts={recentBlogs} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
