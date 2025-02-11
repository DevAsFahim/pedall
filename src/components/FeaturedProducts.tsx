import LoadingSpinner from "../pages/LoadingSpinner";
import { useGetAllBicyclesQuery } from "../redux/features/bicycle/bicycleApi";
import { TBicycle } from "../types/bicycle.type";
import { BicycleCard } from "./bicycles/BicycleCard";

const FeaturedProducts = () => {
  const { data: bicycleData, isLoading } = useGetAllBicyclesQuery([
    { name: "limit", value: 6 },
  ]);
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="p-container py-10 lg:py-24">
      <div className="flex justify-between items-center gap-5 pb-10">
        <h2 className="text-xl md:text-2xl font-medium text-primary-text">
          Featured Products
        </h2>
        <button className="primary-btn">View More</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bicycleData?.data &&
          bicycleData?.data.map((bicycle: TBicycle) => (
            <BicycleCard key={bicycle._id} bicycleData={bicycle} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
