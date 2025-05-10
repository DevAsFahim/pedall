"use client"

import { useState, useEffect } from "react"

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Jack Reacher",
      role: "Mountain Bike Enthusiast",
      quote:
        "The Schwinn Fastback completely transformed my riding experience. The build quality is exceptional, and it handles rough terrain with ease. Customer service was also top-notch when I had questions about maintenance.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop",
      rating: 5,
      location: "Helsinki",
      bikeModel: "Schwinn Fastback",
    },
    {
      id: 2,
      name: "Dixon",
      role: "Daily Commuter",
      quote:
        "I've been using my Electric Bike from Pedall for my daily commute for over a year now, and it's been a game-changer. The battery life is impressive, and the bike is still running as smoothly as day one.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop",
      rating: 5,
      location: "Berlin",
      bikeModel: "Pedall Electric Commuter",
    },
    {
      id: 3,
      name: "Andrew Silk",
      role: "Professional Cyclist",
      quote:
        "As someone who cycles professionally, I have high standards for my equipment. The Merida Scultura Supra exceeded all my expectations. The lightweight frame and responsive handling make it perfect for competitions.",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1476&auto=format&fit=crop",
      rating: 4,
      location: "New York",
      bikeModel: "Merida Scultura Supra",
    },
    {
      id: 4,
      name: "Emilia Clark",
      role: "Weekend Rider",
      quote:
        "I was hesitant to invest in a quality bike, but my Gear Bike from Pedall has made weekend rides so much more enjoyable. The comfort and ease of use are exactly what I was looking for.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop",
      rating: 5,
      location: "United Kingdom",
      bikeModel: "Gear Bike - 152",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Hear from cyclists who have transformed their riding experience with
            Pedall.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center -ml-4 md:-ml-6 z-20">
              <button
                onClick={prevSlide}
                className="bg-white hover:bg-gray-100 p-2 md:p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 transition-all transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>

            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-2/5 relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/90 to-blue-600/70"></div>
                          <img
                            src="https://images.unsplash.com/photo-1571333250630-f0230c320b6d?q=80&w=1374&auto=format&fit=crop"
                            alt="Cycling background"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                            <div className="w-24 h-24 rounded-full border-4 border-white/30 overflow-hidden mb-4">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="text-2xl font-bold mb-1">{testimonial.name}</h3>
                            <p className="text-blue-100 mb-2">{testimonial.role}</p>
                            <div className="flex items-center mb-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 mr-1"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                              </svg>
                              <span className="text-sm">{testimonial.location}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm mr-2">Rides:</span>
                              <span className="text-sm font-medium">{testimonial.bikeModel}</span>
                            </div>
                          </div>
                        </div>

                        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex mb-6">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill={i < testimonial.rating ? "currentColor" : "none"}
                                stroke={i < testimonial.rating ? "none" : "currentColor"}
                                className={`w-6 h-6 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ))}
                          </div>

                          <svg
                            className="w-12 h-12 text-blue-100 mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>

                          <blockquote className="text-gray-700 text-lg italic mb-8 leading-relaxed">
                            "{testimonial.quote}"
                          </blockquote>

                          <div className="mt-auto">
                            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4 mr-2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              Verified Purchase
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center -mr-4 md:-mr-6 z-20">
              <button
                onClick={nextSlide}
                className="bg-white hover:bg-gray-100 p-2 md:p-3 rounded-full shadow-lg text-blue-600 hover:text-blue-800 transition-all transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 md:w-6 md:h-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-full transition-colors"
          >
            Read all customer reviews
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
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default TestimonialCarousel
