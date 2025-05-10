const BlogHeader = () => {
  return (
    <div className="bg-primary text-white py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pedall Blog</h1>
          <p className="text-xl text-blue-100 mb-8">
            Insights, tips, and stories from the cycling world to enhance your riding experience
          </p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full py-3 px-5 pr-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-blue-100"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeader
