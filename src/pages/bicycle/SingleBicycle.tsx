import { useParams } from "react-router-dom";
import { useGetSingleBicycleQuery } from "../../redux/features/bicycle/bicycleApi";
import Banner from "../../components/bicycles/Banner";
import { useState } from "react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa6";
import LoadingSpinner from "../LoadingSpinner";

const SingleBicycle = () => {
  const { bicycleId } = useParams();
  const {
    data: bicycleData,
    isLoading,
  } = useGetSingleBicycleQuery(bicycleId);
  const [orderQuantity, setOrderQuantity] = useState(1);

  // Handle error or missing data
  if (isLoading) {
    return <LoadingSpinner />;
  }

  const { name, brand, price, image, quantity, type, model } = bicycleData.data;

  return (
    <>
      <Banner productName={name} brand={brand} />

      <div className="mt-24 max-w-[1170px] mx-auto">
        <div className="flex gap-8">
          <div className="w-full py-[50px] lg:py-[100px] bg-[#E6E6E6] flex items-center justify-center basis-[60%]">
            <img
              className="object-contain w-full h-full rounded-lg max-w-[70%]"
              src={image}
              alt={name}
            />
          </div>

          <div className=" basis-[40%]">
            <p className="text-primary-text mb-1">
              Brand: <span className="text-black font-semibold">{brand}</span>
            </p>
            <h2 className="text-[22px] lg:text-[30px] font-semibold mb-3">
              {name}
            </h2>
            <p className="text-orange-500 font-bold text-[20px] mb-3">
              ${price}
            </p>
            <p className="text-[#635a5a] mb-5">
              Where your cycling journey begins! As avid cyclists not, we for
              understand the joy and freedom that for a comes
            </p>

            <div className="flex items-center gap-3 text-sm lg:text-base mb-4 border border-[#e7e4e4] px-5 py-2 text-primary-text rounded-full">
              <p>Availability: </p>
              <p className="text-black font-semibold">
                {quantity && quantity > 0 ? `${quantity} Left` : "Sold Out"}
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm lg:text-base mb-4 border border-[#e7e4e4] px-5 py-2 text-primary-text rounded-full">
              <p>Model: </p>
              <p className="text-black font-semibold">{model}</p>
            </div>
            <div className="flex items-center gap-3 text-sm lg:text-base mb-4 border border-[#e7e4e4] px-5 py-2 text-primary-text rounded-full">
              <p>Category: </p>
              <p className="text-black font-semibold">{type}</p>
            </div>

            <div className="flex items-center gap-5 mt-7">
              <div className="rounded-full border border-[#e7e4e4] px-4 py-2.5 text-sm lg:text-xl flex items-center gap-4">
                <button
                  onClick={() => setOrderQuantity(orderQuantity - 1)}
                  className="text-base cursor-pointer"
                >
                  <FaMinus />
                </button>
                <p>{orderQuantity}</p>
                <button
                  onClick={() => setOrderQuantity(orderQuantity + 1)}
                  className="text-base cursor-pointer"
                >
                  <FaPlus />
                </button>
              </div>

              <button className="flex items-center whitespace-nowrap justify-center gap-4 bg-primary-text text-[20px] font-semibold px-8 py-2 rounded-full text-white hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer ">
                Add to cart
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBicycle;
