import { Layout, Menu } from "antd";
import logo from "../../assets/logo.png";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { adminItems, customerItems } from "../../constants/sidebar";
import { Link } from "react-router-dom";
// import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
// import { adminPaths } from "../../routes/admin.routes";
// import { facultyPaths } from "../../routes/faculty.routes";
// import { studentPaths } from "../../routes/student.routes";
// import { useAppSelector } from "../../redux/hooks";
// import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const { Sider } = Layout;

// const userRole = {
//   ADMIN: "admin",
//   FACULTY: "faculty",
//   STUDENT: "student",
// };

const SideBar = () => {
  const user = useAppSelector(selectCurrentUser);

  let sidebarItems;

  switch (user!.role) {
    case "admin":
      sidebarItems = adminItems;
      break;
    case "customer":
      sidebarItems = customerItems;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
    >
      <Link
        to="/"
        style={{
          width: "120px",
          margin: "0 auto",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" />
      </Link>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default SideBar;
