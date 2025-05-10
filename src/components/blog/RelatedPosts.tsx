import { IBlog } from "../../types/blog.type"

const RelatedPosts = ({ posts }: {posts: IBlog[]}) => {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a key={post.id} href={`/blog/${post.slug}`} className="group">
            <div className="rounded-lg overflow-hidden mb-3">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">{post.title}</h4>
            <p className="text-sm text-gray-500">{post.date}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default RelatedPosts
