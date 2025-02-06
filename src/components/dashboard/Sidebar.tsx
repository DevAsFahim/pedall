import { Layout, Menu } from "antd";
import logo from "../../assets/logo.png";
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
  //   const user = useAppSelector(selectCurrentUser);

  const sidebarItems = [
    {
      key: "Dashboard",
      label: "Dashboard",
    },
    {
      key: "Dashboaard",
      label: "Dashboaard",
    },
  ];

  //   switch (user!.role) {
  //     case userRole.ADMIN:
  //       sidebarItems = sidebarItemsGenerator(adminPaths, "admin");
  //       break;
  //     case userRole.FACULTY:
  //       sidebarItems = sidebarItemsGenerator(facultyPaths, "faculty");
  //       break;
  //     case userRole.STUDENT:
  //       sidebarItems = sidebarItemsGenerator(studentPaths, "student");
  //   }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      // onBreakpoint={(broken) => {
      //   console.log(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}
    >
      <div
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
      </div>
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
