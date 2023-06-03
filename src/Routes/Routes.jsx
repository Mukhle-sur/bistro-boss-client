import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import AdminUser from "../Pages/Dashboard/AdminUser/AdminUser";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signUp",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // admin-route
      {
        path: "allUser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>,
          </AdminRoute>
        ),
      },
      {
        path: "addItem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "adminUser",
        element: (
          <AdminRoute>
            <AdminUser></AdminUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageItem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
