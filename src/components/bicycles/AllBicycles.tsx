import { useGetAllBicyclesQuery } from "../../redux/features/bicycle/bicycleApi";
import { BicycleCard } from "./BicycleCard";

type TBicycleData = {
  _id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  brand: string;
  model: string;
  type: string;
  description: string;
};

export function AllBicycles() {
  const { data: bicycleData } = useGetAllBicyclesQuery(undefined);

  return (
    <div className="max-w-[1170px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bicycleData?.data &&
          bicycleData?.data.map((bicycle: TBicycleData) => (
            <BicycleCard key={bicycle._id} bicycleData={bicycle} />
          ))}
      </div>
    </div>
  );
}
