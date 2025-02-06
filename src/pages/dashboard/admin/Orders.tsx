import { Space, Table, TableProps, Tag } from "antd";
import { useGetAllOrdersQuery } from "../../../redux/features/order/orderApi";

interface DataType {
  key: string;
  name: string;
  email: string;
  quantity: number;
  totalPrice: number;
  // status: string;
}

const Orders = () => {
  const { data: orderData } = useGetAllOrdersQuery(undefined);
  console.log(orderData);

  const tableData: DataType[] = orderData?.data?.map(
    ({ _id, user, product, quantity, totalPrice }) => ({
      key: _id,
      name: product.name,
      email: user.email,
      quantity,
      totalPrice,
    })
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "totalPrice",
      key: "totalPrice",
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

  const data: DataType[] = [
    {
      key: "1",
      name: "Cosmic cycle",
      email: "devasfahim@gmail.com",
      quantity: 3,
      totalPrice: 300,
    },
    {
      key: "2",
      name: "Electric",
      email: "asfahim@gmail.com",
      quantity: 3,
      totalPrice: 200,
    },
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
    </div>
  );
};

export default Orders;
