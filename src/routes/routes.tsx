import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Home from "../pages/Home";
import Bicycles from "../pages/bicycle/Bicycles";
import SingleBicycle from "../pages/bicycle/SingleBicycle";
import About from "../pages/About";
import Dashboard from "../pages/dashboard/Main";
import AdminDashboard from "../pages/dashboard/admin/Dashboard";
import Orders from "../pages/dashboard/admin/Orders";
import CreateBicycle from "../pages/dashboard/admin/createBicycle";
import AdminBicycles from "../pages/dashboard/admin/Bicycles";
import CustomerDashboard from "../pages/dashboard/customer/Dashboard";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import CheckoutPage from "../pages/Checkout";
import VerifyOrder from "../pages/VerifyOrder";
import ManageUsers from "../pages/dashboard/admin/ManageUsers";
import MyOrders from "../pages/dashboard/customer/MyOrders";
import ChangePassword from "../pages/dashboard/customer/ChangePassword";
import BlogPage from "../pages/blogs/Blogs";
import SingleBlog from "../pages/blogs/SingleBlog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Bicycles />,
      },
      {
        path: "/products/:bicycleId",
        element: <SingleBicycle />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/blogs/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "order/verify",
        element: (
          <ProtectedRoute>
            <VerifyOrder />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "create-bicycle",
        element: <CreateBicycle />,
      },
      {
        path: "bicycles",
        element: <AdminBicycles />,
      },
    ],
  },
  {
    path: "/user",
    element: <Dashboard />,
    children: [
      {
        path: "dashboard",
        element: <CustomerDashboard />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default routes;
