import { Button, Space, Table, TableProps, Modal, Tag } from "antd";
import { Pagination } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import {
  useBlockACustomerMutation,
  useGetAllCustomerQuery,
} from "../../../redux/features/customer/customerApi";
import { TUserType } from "../../../types/user.type";

interface DataType {
  key: string;
  name: string;
  address: string;
  role: string;
  email: number;
}

const ManageUsers = () => {
  const [page, setPage] = useState(1);
  const { data: customerData } = useGetAllCustomerQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);
  const [blockCustomer] = useBlockACustomerMutation();

  const metaData = customerData?.meta;

  const { confirm } = Modal;
  const showBlockConfirm = (email: string) => {
    confirm({
      title: "Are you sure to block this User?",
      //   icon: <FaExclamation />,
      content: "Clicking 'yes' will block the user",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const toastId = toast.loading("Blocking User");
        try {
          await blockCustomer(email);
          toast.success("User is blocked successful", {
            id: toastId,
            duration: 2000,
          });
        } catch (err) {
          toast.error("Something went wrong!", { id: toastId, duration: 2000 });
          console.log(err);
        }
      },
    });
  };

  const tableData: DataType[] = customerData?.data?.map(
    ({ _id, name, address, email, role, isBlocked }: TUserType) => ({
      key: _id,
      name,
      address,
      email,
      role,
      isBlocked,
    })
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Status",
      key: "isBlocked",
      render: (item) => (
        <>
          <Space size="middle">
            <Tag color={!item.isBlocked ? "success" : "error"}>
              {!item.isBlocked ? "Active" : "Blocked"}
            </Tag>
          </Space>
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <Button
            onClick={() => showBlockConfirm(item.email)}
            color="danger"
            variant="solid"
            shape="round"
            size="small"
          >
            Block
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2 className="font-semibold md:text-[24px] mb-4">All Bicycles</h2>

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

export default ManageUsers;
