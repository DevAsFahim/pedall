import bannerImg from "../../assets/product-banner.png";
import shade from "../../assets/product-shade.png";

const Banner = ({
  productName,
  brand,
}: {
  productName?: string;
  brand?: string;
}) => {
  return (
    <div className=" bg-[#E7F6F5] pt-[40px]">
      <div className="flex p-container flex-col md:flex-row">
        <div className="banner-left-wrapper">
          <div>
            <p className="banner-title">
              {productName ? productName : "Products"}
            </p>
            {productName ? (
              <p className="text-primary-text font-semibold">
                Brand: <span className="text-black">{brand}</span>
              </p>
            ) : (
              <p className="banner-subtitle">Find your desired Bicycle</p>
            )}
          </div>
          <img className="banner-shade" src={shade} alt="shade" />
        </div>
        <div className="flex-1">
          <img className="banner-cycle banner-img" src={bannerImg} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
