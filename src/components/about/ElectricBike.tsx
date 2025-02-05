import shadeImage from "../../assets/shade-2.png";
import productImage from "../../assets/featured-product-2.webp";

const ElectricBike = () => {
  return (
    <section className="bg-muted-body min-h-[600px] overflow-hidden">
      <div className="p-container ">
        <div className="relative pt-14 lg:pt-36 pb-0 lg:pb-[340px]">
          <div className="lg:max-w-1/2">
            <h1 className="text-[35px] xl:text-5xl font-medium mb-4">
              Pedall reimagined what electric scooter could be.{" "}
              <span className="text-gray-500">
                Now, we are doing the same for electric bikes.
              </span>
            </h1>

            <p className="text-[#838080] text-lg">
              Where your cycling journey begins! As avid cyclists not ourselves,
              we understand the joy and freedom that for a comes from pedaling
            </p>
          </div>

          {/* Image */}
          <div className="lg:absolute lg:bottom-0 lg:right-0 flex justify-center">
            <img
              src={productImage}
              alt="Eura Electric Bike"
              className="lg:max-w-[600px] banner-cycle"
            />
          </div>

          <div className="hidden lg:block lg:absolute lg:left-0 lg:bottom-11 w-[350px]">
            <img
              className="w-full vertical-move"
              src={shadeImage}
              alt="shade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricBike;
