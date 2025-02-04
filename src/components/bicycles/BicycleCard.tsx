import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface ProductCardProps {
  bicycleData: {
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
}
export function BicycleCard({ bicycleData }: ProductCardProps) {
  const { image, name, price, brand, _id } = bicycleData;

  return (
    <div className="overflow-hidden group ">
      <div className="aspect-square lg:aspect-auto lg:h-[300px] relative bg-[#E6E6E6] p-2 flex items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-contain w-full h-full rounded-lg max-w-[70%] group-hover:scale-105 transition-all duration-500"
        />
        <div className="p-4 pt-0 absolute left-1/2 -bottom-10 opacity-0 invisible -translate-x-1/2 w-full group-hover:opacity-100 group-hover:visible group-hover:bottom-0 transition-all duration-500 ease-in-out">
          <button className="flex items-center whitespace-nowrap w-full justify-center gap-4 bg-primary-text text-[20px] font-semibold px-8 py-2 rounded-full text-white hover:gap-5 hover:bg-deep-blue transition-all cursor-pointer ">
            Add to cart
            <FaCartPlus />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <p className="text-sm text-gray-600">
          Brand: <span className="font-semibold">{brand}</span>
        </p>
        <div className="flex items-center justify-between">
          <Link
            to={`/products/${_id}`}
            className="text-lg font-semibold mt-1 hover:text-primary"
          >
            {name}
          </Link>
          <p className="text-xl font-bold mt-1">${price}</p>
        </div>
      </div>
    </div>
  );
}
