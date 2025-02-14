import { useEffect, useState } from "react";
import { useGetAllBicyclesQuery } from "../../redux/features/bicycle/bicycleApi";
import { BicycleCard } from "./BicycleCard";
import { Button, Pagination, Select } from "antd";
import { TBicycle } from "../../types/bicycle.type";
import PForm from "../form/PForm";
import PInput from "../form/PInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { TQueryParam } from "../../types/global.type";

export function AllBicycles() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [type, setType] = useState("");
  const [params, setParams] = useState<TQueryParam[]>([
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);
  const { data: bicycleData } = useGetAllBicyclesQuery(params);

  const metaData = bicycleData?.meta;

  const handleSearch: SubmitHandler<FieldValues> = (data) => {
    setSearchTerm(data.search);
  };

  const updateParam = (key: string, value: string) => {
    if (!value) return; // Avoid unnecessary updates

    setParams((prevParams) => {
      const hasParam = prevParams.some((param) => param.name === key);

      if (hasParam) {
        return prevParams.map((param) =>
          param.name === key ? { ...param, value } : param
        );
      } else {
        return [{ name: key, value }, ...prevParams];
      }
    });
  };

  useEffect(() => {
    updateParam("searchTerm", searchTerm);
    updateParam("type", type);
  }, [searchTerm, type]);

  const bicycleType = ["Mountain", "Road", "Hybrid", "BMX", "Electric"];

  const bicycleTypeOptions = bicycleType.map((item) => ({
    value: item,
    label: item,
  }));

  const handleFilterType = (value: string) => {
    setType(value);
  };

  return (
    <div className="p-container py-8 mt-10 lg:mt-24">
      <div className="flex justify-between items-center gap-5 pb-10">
        <div className="flex items-center gap-5">
          <h2 className="text-xl md:text-2xl font-medium text-primary-text">
            Products
          </h2>

          <Select
            placeholder="Select Type"
            style={{ width: 200 }}
            onChange={handleFilterType}
            options={bicycleTypeOptions}
          />
        </div>
        <div className="w-[250px] relative">
          <PForm onSubmit={handleSearch} defaultValues={{ search: searchTerm }}>
            <PInput type="text" name="search" placeholder="Search Product" />
            <div className="absolute top-1 right-1">
              <Button htmlType="submit" type="primary" icon={<FaSearch />} />
            </div>
          </PForm>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bicycleData?.data &&
          bicycleData?.data.map((bicycle: TBicycle) => (
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
