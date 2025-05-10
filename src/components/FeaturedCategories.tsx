import { Link } from "react-router-dom"

const FeaturedCategories = () => {
    const categories = [
      {
        id: 1,
        title: "Road Bikes",
        description: "Built for speed and efficiency on paved surfaces",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1470&auto=format&fit=crop",
        count: 24,
        color: "from-blue-500 to-blue-700",
      },
      {
        id: 2,
        title: "Mountain Bikes",
        description: "Designed for off-road cycling on rough terrain",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1548&auto=format&fit=crop",
        count: 36,
        color: "from-green-500 to-green-700",
      },
      {
        id: 3,
        title: "Electric Bikes",
        description: "Power-assisted cycling for commuting and leisure",
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?q=80&w=1470&auto=format&fit=crop",
        count: 18,
        color: "from-purple-500 to-purple-700",
      },
      {
        id: 4,
        title: "Hybrid Bikes",
        description: "Versatile bikes for various terrains and uses",
        image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?q=80&w=1548&auto=format&fit=crop",
        count: 29,
        color: "from-amber-500 to-amber-700",
      },
    ]
  
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Explore Categories</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Find the perfect bike for your riding style and terrain preferences
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="group relative rounded-2xl overflow-hidden shadow-lg h-80">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
  
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90">{category.description}</p>
                  </div>
  
                  <div className="flex items-center justify-between">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {category.count} products
                    </span>
  
                    <a
                      href="#"
                      className="inline-flex items-center bg-white text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Explore
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-1"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-12 text-center">
            <Link to='/products'
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 px-8 py-4 rounded-full transition-colors"
            >
              View All Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    )
  }
  
  export default FeaturedCategories
  