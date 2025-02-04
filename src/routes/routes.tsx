import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CreateBicycle from "../pages/bicycle/createBicycle";
import Home from "../pages/Home";
import Bicycles from "../pages/bicycle/Bicycles";

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
