const BlogCategories = () => {
  const categories = [
    { name: "All", count: 12, active: true },
    { name: "Buying Guide", count: 3, active: false },
    { name: "Maintenance", count: 2, active: false },
    { name: "Adventure", count: 4, active: false },
    { name: "Technology", count: 3, active: false },
    { name: "Nutrition", count: 2, active: false },
    { name: "Wellness", count: 2, active: false },
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-12">
      {categories.map((category, index) => (
        <a
          key={index}
          href="#"
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
            category.active
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-700 border-gray-200 shadow-sm"
          }`}
        >
          {category.name} <span className="text-xs opacity-70">({category.count})</span>
        </a>
      ))}
    </div>
  )
}

export default BlogCategories
