import bannerImg from "../../assets/about-banner.png";
import shade from "../../assets/product-shade.png";

const Banner = () => {
  return (
    <div className=" bg-[#E7F6F5] pt-[40px] overflow-hidden">
      <div className="flex p-container flex-col md:flex-row">
        <div className="banner-left-wrapper">
          <div>
            <p className="banner-title">About Us</p>

            <p className="banner-subtitle">
              Pedal Your Way to Freedom - Choose the Best Bicycle for Your
              Needs!
            </p>
          </div>
          <img
            className="banner-shade"
            src={shade}
            alt="shade"
          />
        </div>
        <div className="flex-1 -mb-7 pt-7">
          <img className="banner-img" src={bannerImg} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
