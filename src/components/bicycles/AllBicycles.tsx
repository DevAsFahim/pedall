import { useState } from "react";
import { useGetAllBicyclesQuery } from "../../redux/features/bicycle/bicycleApi";
import { BicycleCard } from "./BicycleCard";
import { Pagination } from "antd";

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
  const [page, setPage] = useState(1);
  const { data: bicycleData } = useGetAllBicyclesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);

  const metaData = bicycleData?.meta;

  return (
    <div className="p-container py-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bicycleData?.data &&
          bicycleData?.data.map((bicycle: TBicycleData) => (
            <BicycleCard key={bicycle._id} bicycleData={bicycle} />
          ))}
      </div>

      <div className="flex item-center justify-center mt-6">
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          pageSize={metaData?.limit}
          total={metaData?.total}
        />
      </div>
    </div>
  );
}
