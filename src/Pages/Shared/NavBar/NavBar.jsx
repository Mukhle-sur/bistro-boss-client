import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const menuBar = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Contact Us</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <Link to="menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/salad">Our Shop</Link>
      </li>
      <li>
        <Link to="dashboard/myCart" className="justify-between">
          <FaShoppingCart></FaShoppingCart>
          <span className="badge badge-secondary">+{cart?.length}</span>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-[#3E2604] bg-opacity-50 fixed z-50 container">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {menuBar}
            </ul>
          </div>
          <a className="text-3xl font-extrabold uppercase text-white">
            BISTRO BOSS <br></br>
            <span className="text-2xl tracking-[0.38em]">Restaurant</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{menuBar}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={handleLogOut} className="btn">
              LogOut
            </button>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
