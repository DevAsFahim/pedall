import { Link, useSearchParams } from "react-router-dom";
import { Spin, Card, Tag, Row, Col, Button } from "antd";
import { useVerifyOrderQuery } from "../redux/features/order/orderApi";
import { FaCheckCircle, FaExclamation } from "react-icons/fa";
import { LoadingOutlined } from "@ant-design/icons";

interface OrderData {
  id: number;
  order_id: string;
  currency: string;
  amount: number;
  payable_amount: number;
  discsount_amount: number | null;
  disc_percent: number;
  received_amount: string;
  usd_amt: number;
  usd_rate: number;
  is_verify: number;
  card_holder_name: string | null;
  card_number: string | null;
  phone_no: string;
  bank_trx_id: string;
  invoice_no: string;
  bank_status: string;
  customer_order_id: string;
  sp_code: string;
  sp_message: string;
  name: string;
  email: string;
  address: string;
  city: string;
  value1: string | null;
  value2: string | null;
  value3: string | null;
  value4: string | null;
  transaction_status: string | null;
  method: string;
  date_time: string;
}

export default function VerifyOrder() {
  const [searchParams] = useSearchParams();
  const { isLoading, data } = useVerifyOrderQuery(
    searchParams.get("order_id"),
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const orderData: OrderData = data?.data?.[0];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
      </div>
    );
  }

  const statusTag = (status: string) => {
    const statusColor = status === "Success" ? "success" : "error";
    return <Tag color={statusColor}>{status}</Tag>;
  };

  const verificationStatus = () => (
    <div className="flex items-center gap-2">
      {orderData?.is_verify === 1 ? (
        <>
          <FaCheckCircle className="text-green-500 text-xl" />
          <span className="text-green-600 font-medium">Verified</span>
        </>
      ) : (
        <>
          <FaExclamation className="text-yellow-500 text-xl" />
          <span className="text-yellow-600 font-medium">Not Verified</span>
        </>
      )}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Order Verification
      </h1>

      <Row gutter={[16, 16]}>
        {/* Order Details */}
        <Col xs={24} md={12}>
          <Card title="Order Details" className="shadow-md">
            <dl className="grid grid-cols-2 gap-4">
              <dt className="text-gray-600 font-medium">Order ID:</dt>
              <dd className="text-gray-800">{orderData?.order_id}</dd>

              <dt className="text-gray-600 font-medium">Amount:</dt>
              <dd className="text-gray-800">
                {orderData?.currency} {orderData?.amount?.toFixed(2)}
              </dd>

              <dt className="text-gray-600 font-medium">Status:</dt>
              <dd>{statusTag(orderData?.bank_status)}</dd>

              <dt className="text-gray-600 font-medium">Date:</dt>
              <dd className="text-gray-800">
                {new Date(orderData?.date_time)?.toLocaleString()}
              </dd>
            </dl>
          </Card>
        </Col>

        {/* Payment Information */}
        <Col xs={24} md={12}>
          <Card title="Payment Information" className="shadow-md">
            <dl className="grid grid-cols-2 gap-4">
              <dt className="text-gray-600 font-medium">Method:</dt>
              <dd className="text-gray-800">{orderData?.method}</dd>

              <dt className="text-gray-600 font-medium">Transaction ID:</dt>
              <dd className="text-gray-800">
                {orderData?.bank_trx_id || "N/A"}
              </dd>

              <dt className="text-gray-600 font-medium">Invoice No:</dt>
              <dd className="text-gray-800">{orderData?.invoice_no}</dd>

              <dt className="text-gray-600 font-medium">SP Code:</dt>
              <dd className="text-gray-800">{orderData?.sp_code}</dd>

              <dt className="text-gray-600 font-medium">SP Message:</dt>
              <dd className="text-gray-800">{orderData?.sp_message}</dd>
            </dl>
          </Card>
        </Col>

        {/* Customer Information */}
        <Col xs={24} md={12}>
          <Card title="Customer Information" className="shadow-md">
            <dl className="grid grid-cols-2 gap-4">
              <dt className="text-gray-600 font-medium">Name:</dt>
              <dd className="text-gray-800">{orderData?.name}</dd>

              <dt className="text-gray-600 font-medium">Email:</dt>
              <dd className="text-gray-800">{orderData?.email}</dd>

              <dt className="text-gray-600 font-medium">Phone:</dt>
              <dd className="text-gray-800">{orderData?.phone_no}</dd>

              <dt className="text-gray-600 font-medium">Address:</dt>
              <dd className="text-gray-800">{orderData?.address}</dd>

              <dt className="text-gray-600 font-medium">City:</dt>
              <dd className="text-gray-800">{orderData?.city}</dd>
            </dl>
          </Card>
        </Col>

        {/* Verification Status */}
        <Col xs={24} md={12}>
          <Card title="Verification Status" className="shadow-md">
            <div className="flex flex-col gap-6">
              <div className="text-lg">{verificationStatus()}</div>

              <Link to="/order">
                <Button
                  type="primary"
                  className="w-full bg-blue-600 hover:bg-blue-700 h-10 font-medium"
                >
                  View Orders
                </Button>
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
