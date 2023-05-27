import React from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

import loginImg from "../../assets/others/authentication.png";
import img from "../../assets/others/authentication1.png";

const Register = () => {
  const handleRegister = (event) => {};
  return (
    <div
      className=""
      style={{
        backgroundImage: `url("${loginImg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2  items-center p-24 justify-around gap-20"
        style={{
          boxShadow: " 10px 10px 10px 10px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div>
          <h2 className="text-4xl font-semibold text-center mb-11">Sign Up</h2>
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label text-xl font-semibold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-3">
              <label className="label text-xl font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label className="label text-xl font-semibold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 ">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-error bg-[#D1A054] bg-opacity-70 border-0 text-white"
              />
            </div>
          </form>
          <div>
            <p className="text-center text-[#D1A054] text-lg font-semibold mt-3">
              Already registered ?{" "}
              <Link to="/login" className="">
                Go to log in
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
        <div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
