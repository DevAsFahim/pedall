import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateBicycle from "../pages/bicycle/createBicycle";
import Home from "../pages/Home";
import Bicycles from "../pages/bicycle/Bicycles";
import SingleBicycle from "../pages/bicycle/SingleBicycle";
import About from "../pages/About";
import Dashboard from "../pages/dashboard/Dashboard";

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
        path: "/create-bicycle",
        element: <CreateBicycle />,
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
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
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
