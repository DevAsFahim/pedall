import { Table, TableProps } from "antd";
import { useGetMyOrdersQuery } from "../../../redux/features/order/orderApi";
import { TOrder } from "../../../types/order.type";

interface DataType {
  key: string;
  name: string;
  email: string;
  totalPrice: number;
  status: string;
}

const MyOrders = () => {
  const { data: orderData } = useGetMyOrdersQuery(undefined);

  const tableData: DataType[] = orderData?.data?.map(
    ({ _id, user, products, totalPrice, status, transaction }: TOrder) => ({
      key: _id,
      name: user?.name,
      email: user?.email,
      products,
      totalPrice,
      status,
      transactionId: transaction?.id,
    })
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
    },
    {
      title: "Transaction Id",
      dataIndex: "transactionId",
      key: "transactionId",
    },
  ];

  return (
    <div>
      <h2 className="font-semibold md:text-[24px] mb-4">My Orders</h2>

      <div className="overflow-x-scroll overflow-hidden">
        <Table<DataType>
          columns={columns}
          dataSource={tableData}
          pagination={false}
        />
      </div>
    </div>
  );
};

export default MyOrders;
