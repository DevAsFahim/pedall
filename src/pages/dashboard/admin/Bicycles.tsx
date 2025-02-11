import { Button, Space, Table, TableProps, Modal } from "antd";
import { Pagination } from "antd";
import { useState } from "react";
import { TBicycle } from "../../../types/bicycle.type";
import {
  useDeleteBicycleMutation,
  useGetAllBicyclesQuery,
  useUpdateBicycleMutation,
} from "../../../redux/features/bicycle/bicycleApi";
import { FaExclamation } from "react-icons/fa6";
import { toast } from "sonner";
import PForm from "../../../components/form/PForm";
import PInput from "../../../components/form/PInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

interface DataType {
  key: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  quantity: number;
  // status: string;
}
interface IProductInTable {
  key: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  quantity: number;
}

const Bicycles = () => {
  const [page, setPage] = useState(1);
  const { data: bicycleData } = useGetAllBicyclesQuery([
    { name: "page", value: page },
    { name: "sort", value: "id" },
  ]);
  const [deleteBicycle] = useDeleteBicycleMutation();

  const metaData = bicycleData?.meta;

  const { confirm } = Modal;
  const showDeleteConfirm = (id: string) => {
    confirm({
      title: "Are you sure delete this Bicycle?",
      icon: <FaExclamation />,
      content: "Some descriptions",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        const toastId = toast.loading("Deleting bicycle");
        try {
          await deleteBicycle(id);
          toast.success("Bicycle is deleted successful", {
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

  const tableData: DataType[] = bicycleData?.data?.map(
    ({ _id, name, brand, quantity, model, price }: TBicycle) => ({
      key: _id,
      name,
      brand,
      model,
      price,
      quantity,
    })
  );

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Model",
      dataIndex: "model",
      key: "model",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Action",
      key: "action",
      render: (item) => (
        <Space size="middle">
          <Button
            onClick={() => showDeleteConfirm(item.key)}
            color="danger"
            variant="solid"
            shape="round"
            size="small"
          >
            Delete
          </Button>
          <UpdateBicycleModal itemInfo={item} />
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

const UpdateBicycleModal = ({ itemInfo }: { itemInfo: IProductInTable }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateBicycle] = useUpdateBicycleMutation();

  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const updatedData = {
      price: data?.price,
      quantity: data?.quantity,
    };

    await updateBicycle({ id: itemInfo?.key, data: updatedData });

    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        color="primary"
        variant="solid"
        shape="round"
        size="small"
      >
        Update
      </Button>
      <Modal
        title="Update Product"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PForm onSubmit={handleSubmit}>
          <PInput type="text" name="price" label="Price" />
          <PInput type="text" name="quantity" label="Quantity" />
          <button className="primary-btn mx-auto" type="submit">
            Submit
          </button>
        </PForm>
      </Modal>
    </>
  );
};

export default Bicycles;
