import { Avatar, Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import { logOut } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { FaUser } from "react-icons/fa6";
const { Header, Content } = Layout;

export const DashboardLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Sidebar />
      <Layout>
        <Header>
          <div className="flex justify-end items-center h-full">
            <button
              style={{ padding: "8px 20px", fontSize: "16px" }}
              className="primary-btn mr-8"
              onClick={handleLogout}
            >
              Logout
            </button>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<FaUser />} />
          </div>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
