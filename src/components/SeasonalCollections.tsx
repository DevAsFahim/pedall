import { useState, useEffect } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const SeasonalCollections = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const seasonalOffers = [
    {
      id: 1,
      title: "Summer Cycling Collection",
      description: "Beat the heat with our lightweight bikes and accessories designed for summer adventures",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1470&auto=format&fit=crop",
      color: "bg-yellow-50",
      accent: "bg-yellow-500",
    },
    {
      id: 2,
      title: "Fall Adventure Series",
      description: "Explore autumn trails with our all-terrain bikes built for the changing seasons",
      image: "https://images.unsplash.com/photo-1511994298241-608e28f14fde?q=80&w=1470&auto=format&fit=crop",
      color: "bg-orange-50",
      accent: "bg-orange-500",
    },
    {
      id: 3,
      title: "Winter Performance Gear",
      description: "Cold weather? No problem with our winter-ready bikes and essential cold-weather gear",
      image: "https://plus.unsplash.com/premium_photo-1663090619355-ca3b6e7d01c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2ludGVyJTIwY3ljbGV8ZW58MHx8MHx8fDA%3D",
      color: "bg-blue-50",
      accent: "bg-blue-500",
    },
    {
      id: 4,
      title: "Spring Revival Collection",
      description: "Fresh starts with our newest spring models perfect for the season of renewal",
      image: "https://images.unsplash.com/photo-1681295692638-97ace05f56b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "bg-green-50",
      accent: "bg-green-500",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === seasonalOffers.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [seasonalOffers.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === seasonalOffers.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? seasonalOffers.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Seasonal Collections</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our curated collections designed specifically for every season of your cycling journey
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {seasonalOffers.map((offer) => (
                <div
                  key={offer.id}
                  className={`min-w-full ${offer.color} flex flex-col md:flex-row items-center overflow-hidden md:max-h-[400px]`}
                >
                  <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start">
                    <span
                      className={`inline-block ${offer.accent} text-white px-4 py-1 rounded-full text-sm font-medium mb-4`}
                    >
                      {offer.title}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Ride Every Season</h3>
                    <p className="text-gray-700 mb-8 text-lg">{offer.description}</p>
                    <Link to='products'
                      className={`${offer.accent} text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-3`}
                    >
                      <span>Shop Collection</span>
                      <FaArrowRightLong />
                    </Link>
                  </div>
                  <div className="md:w-1/2 md:h-full relative">
                    <img
                      src={offer.image || "/placeholder.svg"}
                      alt={offer.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 md:hidden">
                      <h3 className="text-2xl font-bold text-white">{offer.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 text-blue-600 hover:text-blue-800 transition-all transform hover:scale-110"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-10 text-blue-600 hover:text-blue-800 transition-all transform hover:scale-110"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {seasonalOffers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? "bg-blue-500 w-6" : "bg-gray-300 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SeasonalCollections
