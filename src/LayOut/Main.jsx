import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const removeNavFoot =
    location.pathname.includes("/login") ||
    location.pathname.includes("/signUp");
  return (
    <div>
      {removeNavFoot || <NavBar></NavBar>}
      <Outlet></Outlet>
      {removeNavFoot || <Footer></Footer>}
    </div>
  );
};

export default Main;
