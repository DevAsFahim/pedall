import heroImg from "../assets/hero-img.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className=" bg-[#E7F6F5] py-[40px]">
      <div className="flex min-h-screen p-container flex-col md:flex-row gap-10 md:gap-0">
        <div className="flex-1 flex flex-col justify-center items-start">
          <div className="text-[20px] md:text-[25px] text-primary-text mb-5 rounded-full border border-primary-text px-6 py-1 font-semibold tracking-wider">
            From $344
          </div>
          <div>
            <p className="text-[45px] lg:text-[66px] color-black font-bold leading-[50px] lg:leading-[90px] mb-5">
              Discover Your <br className="hidden md:block" /> Favorite Bike
            </p>
            <p className="text-primary-text mb-7">
              Performance built to handle any terrain & riding style.
            </p>
            <button className="primary-btn">
              Shop Bike <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img className="banner-cycle" src={heroImg} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
