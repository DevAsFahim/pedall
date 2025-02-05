import bannerImg from "../../assets/about-banner.png";
import shade from "../../assets/product-shade.png";

const Banner = () => {
  return (
    <div className=" bg-[#E7F6F5] pt-[40px] overflow-hidden">
      <div className="flex max-w-[1170px] mx-auto">
        <div className="flex-1 flex gap-8 lg:gap-32 items-center">
          <div>
            <p className="text-[46px] color-black font-medium leading-[50px] mb-5">
              About Us
            </p>

            <p className="text-primary-text">
              Pedal Your Way to Freedom – Choose the Best Bicycle for Your
              Needs!
            </p>
          </div>
          <img
            className="max-w-[200px] hidden lg:block"
            src={shade}
            alt="shade"
          />
        </div>
        <div className="flex-1 -mb-7 pt-7">
          <img className="" src={bannerImg} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
