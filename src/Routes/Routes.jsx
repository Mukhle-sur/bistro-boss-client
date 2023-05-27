import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/OurMenu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
        path:'signUp',
        element:<Register></Register>
      }
    ],
  },
]);

export default router;
