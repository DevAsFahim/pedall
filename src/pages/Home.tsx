import BikeHero from "../components/about/BikeHero";
import Features from "../components/about/Features";
import Banner from "../components/Banner";
import BlogSection from "../components/BlogSection";
import FeaturedCategories from "../components/FeaturedCategories";
import FeaturedProducts from "../components/FeaturedProducts";
import SeasonalCollection from "../components/SeasonalCollections";
import TestimonialCarousel from "../components/TestimonialCarousel";

const Home = () => {
  return (
    <>
      <Banner />
      <SeasonalCollection />
      <FeaturedProducts />
      <FeaturedCategories />
      <BikeHero />
      <TestimonialCarousel />
      <BlogSection />
      <Features />
    </>
  );
};

export default Home;
