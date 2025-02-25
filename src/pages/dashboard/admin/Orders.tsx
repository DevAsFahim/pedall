import { Table, TableProps } from "antd";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderApi";
import { TOrder } from "../../../types/order.type";
import { Pagination } from "antd";
import { useState } from "react";

interface DataType {
  key: string;
  name: string;
  email: string;
  totalPrice: number;
  status: string;
}

const Orders = () => {
  const [page, setPage] = useState(1);
  const { data: orderData } = useGetAllOrdersQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);
  const metaData = orderData?.meta;

  const tableData: DataType[] = orderData?.data?.result.map(
    ({ _id, user, products, totalPrice, status, transaction }: TOrder) => ({
      key: _id,
      name: user?.name,
      email: user?.email,
      products,
      totalPrice,
      status,
      transactionId: transaction.id,
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
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  return (
    <div>
      <h2 className="font-semibold md:text-[24px] mb-4">Order Data</h2>

      <div className="overflow-x-scroll overflow-hidden">
        <Table<DataType>
          columns={columns}
          dataSource={tableData}
          pagination={false}
        />
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
};

export default Orders;
