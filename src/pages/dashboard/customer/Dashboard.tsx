import { selectCurrentUser } from "../../../redux/features/auth/authSlice";
import { useAppSelector } from "../../../redux/hooks";

const Dashboard = () => {
  const user = useAppSelector(selectCurrentUser);

  const orders = [
    { id: "ORD001", date: "2025-05-15", status: "Completed", total: 599.99 },
    { id: "ORD002", date: "2025-05-20", status: "Pending", total: 799.99 },
    { id: "ORD003", date: "2025-05-25", status: "Canceled", total: 449.99 },
    { id: "ORD004", date: "2025-05-30", status: "Completed", total: 699.99 },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="">
        {/* Account Overview Section */}
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600">
                  Name:{" "}
                  <span className="font-medium text-gray-800">AS Fahim</span>
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <span className="font-medium text-gray-800">
                    {user?.email}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-gray-600">
                  Member Since:{" "}
                  <span className="font-medium text-gray-800">May 1, 2024</span>
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

        {/* Recent Orders Section */}
        <div className="mt-8 px-4 py-6 sm:px-0">
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${order.total.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
