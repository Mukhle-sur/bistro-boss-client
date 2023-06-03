import React from "react";
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaCalendarPlus,
  FaHome,
  FaRegEnvelope,
  FaShopify,
  FaShoppingCart,
  FaStarOfDavid,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import "./Dashboard.css";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  return (
    <>
      <div className="bg-[#D1A054] max-w-xs pt-12 pl-8">
        <a className="text-3xl font-extrabold uppercase text-black">
          BISTRO BOSS <br></br>
          <span className="text-2xl tracking-[0.38em]">Restaurant</span>
        </a>
      </div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full w-full flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-5 w-80  text-[#151515] bg-[#D1A054] uppercase">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/dashboard/adminUser"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaHome></FaHome> Admin User
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addItem"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaUtensils></FaUtensils> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageItem"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaWallet></FaWallet> Manage Item
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manageBooking"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaBook></FaBook> Manage Booking
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/allUser"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaUsers></FaUsers> All User
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/dashboard/user"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaHome></FaHome> USER HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaCalendarAlt></FaCalendarAlt> RESERVATION
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payHistory"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaWallet></FaWallet> PAYMENT HISTORY
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myCart"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaShoppingCart></FaShoppingCart> MY CART
                    <span className="badge badge-secondary">
                      {cart?.length}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/addReview"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaStarOfDavid></FaStarOfDavid> ADD REVIEW
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/myBooking"
                    className={({ isActive }) => (isActive ? "text" : "")}
                  >
                    <FaCalendarPlus></FaCalendarPlus> MY BOOKING
                  </NavLink>
                </li>
              </>
            )}

            {/* main-page-start  */}
            <div className="divider"></div>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text" : "")}
              >
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) => (isActive ? "text" : "")}
              >
                <FaBars></FaBars> Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop/salad"
                className={({ isActive }) => (isActive ? "text" : "")}
              >
                <FaShopify></FaShopify> Shop
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text" : "")}
              >
                <FaRegEnvelope></FaRegEnvelope> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
