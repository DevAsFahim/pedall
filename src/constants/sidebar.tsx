import { Link } from "react-router-dom";

export const adminItems = [
  {
    key: "Dashboard",
    label: <Link to="/admin/dashboard">Dashboard</Link>,
  },
  {
    key: "Manage Users",
    label: <Link to="/admin/manage-users">Manage Users</Link>,
  },
  {
    key: "Orders",
    label: <Link to="/admin/orders">Orders</Link>,
  },
  {
    key: "Create Bicycle",
    label: <Link to="/admin/create-bicycle">Create Bicycle</Link>,
  },
  {
    key: "Bicycles",
    label: <Link to="/admin/bicycles">Bicycles</Link>,
  },
];

export const customerItems = [
  {
    key: "Dashboard",
    label: <Link to="/user/dashboard">Dashboard</Link>,
  },
  {
    key: "My Orders",
    label: <Link to="/user/my-orders">My Orders</Link>,
  },
  {
    key: "Change Password",
    label: <Link to="/user/change-password">Change Password</Link>,
  },
];
