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
      <div className="flex max-w-[1170px] mx-auto">
        <div className="flex-1 flex gap-8 lg:gap-32 items-center">
          <div>
            <p className="text-[46px] color-black font-medium leading-[50px] mb-5">
              {productName ? productName : "Products"}
            </p>
            {productName ? (
              <p className="text-primary-text font-semibold">
                Brand: <span className="text-black">{brand}</span>
              </p>
            ) : (
              <p className="text-primary-text">Find your desired Bicycle</p>
            )}
          </div>
          <img
            className="max-w-[200px] hidden lg:block"
            src={shade}
            alt="shade"
          />
        </div>
        <div className="flex-1">
          <img className="banner-cycle" src={bannerImg} alt="hero img" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
