import { FaCheckCircle } from "react-icons/fa";
import { FaBoxOpen, FaHourglassHalf } from "react-icons/fa6";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderApi";
import LoadingSpinner from "../../../pages/LoadingSpinner";
import { TOrder } from "../../../types/order.type";

const OrderInfo = () => {
  const { data: orderData, isLoading } = useGetAllOrdersQuery([
    { name: "page", value: 1 },
    { name: "sort", value: "id" },
  ]);

  console.log(orderData);
  const pendingOrders = orderData?.data?.result?.filter((item: TOrder) => item.status === "Pending")
  const paidOrders = orderData?.data?.result?.filter((item: TOrder) => item.status === "Paid")

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <div className="mb-10">
      <h2 className="font-semibold md:text-[24px] mb-4">Order Info</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="rounded-lg p-5 shadow flex items-center gap-8">
          <FaBoxOpen className="text-4xl text-blue-600" />
          <div>
            <h2 className="font-bold text-xl mb-2">Total Orders</h2>
            <p className="text-2xl font-semibold">
              {orderData?.data?.result?.length}
            </p>
          </div>
        </div>
        <div className="rounded-lg p-5 shadow flex items-center gap-8">
          <FaHourglassHalf className="text-3xl text-yellow-500" />
          <div>
            <h2 className="font-bold text-xl mb-2">Pending</h2>
            <p className="text-2xl font-semibold">{pendingOrders.length}</p>
          </div>
        </div>
        <div className="rounded-lg p-5 shadow flex items-center gap-8">
          <FaCheckCircle className="text-3xl text-green-500" />
          <div>
            <h2 className="font-bold text-xl mb-2">Completed</h2>
            <p className="text-2xl font-semibold">{paidOrders.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfo;
