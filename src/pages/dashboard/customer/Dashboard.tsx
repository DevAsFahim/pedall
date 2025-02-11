import MyOrders from "../../../components/dashboard/customer/MyOrders";
import { useGetMeQuery } from "../../../redux/features/customer/customerApi";

const Dashboard = () => {
  const { data: userData } = useGetMeQuery(undefined);
  console.log(userData);

  const orders = [
    { id: "ORD001", date: "2025-05-15", status: "Completed", total: 599.99 },
    { id: "ORD002", date: "2025-05-20", status: "Pending", total: 799.99 },
    { id: "ORD003", date: "2025-05-25", status: "Canceled", total: 449.99 },
    { id: "ORD004", date: "2025-05-30", status: "Completed", total: 699.99 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  Name:{" "}
                  <span className="font-medium text-gray-800">
                    {userData?.data?.name}
                  </span>
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <span className="font-medium text-gray-800">
                    {userData?.data?.email}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Address:
                  <span className="font-medium text-gray-800">
                    {userData?.data?.address}
                  </span>
                </p>
                <p className="text-gray-600">
                  Total Orders:{" "}
                  <span className="font-medium text-gray-800">
                    {orders.length}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <MyOrders />
      </main>
    </div>
  );
};

export default Dashboard;
