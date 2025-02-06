import { FaCheckCircle } from "react-icons/fa";
import { FaBoxOpen, FaHourglassHalf } from "react-icons/fa6";

const OrderInfo = () => {
  return (
    <div className="mb-10">
      <h2 className="font-semibold md:text-[24px] mb-4">Order Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-lg p-5 shadow-xs bg-[#ffe1a8] flex items-center gap-8">
          <FaBoxOpen className="text-4xl text-blue-600" />
          <div>
            <h2 className="font-bold text-xl mb-2">Total Orders</h2>
            <p className="text-2xl font-semibold">40</p>
          </div>
        </div>
        <div className="rounded-lg p-5 shadow-xs bg-[#d4e09b] flex items-center gap-8">
          <FaHourglassHalf className="text-3xl text-yellow-500" />
          <div>
            <h2 className="font-bold text-xl mb-2">Pending</h2>
            <p className="text-2xl font-semibold">40</p>
          </div>
        </div>
        <div className="rounded-lg p-5 shadow-xs bg-[#ffb5a7] flex items-center gap-8">
          <FaCheckCircle className="text-3xl text-green-500" />
          <div>
            <h2 className="font-bold text-xl mb-2">Completed</h2>
            <p className="text-2xl font-semibold">40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
