import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import loginImg from "../../assets/others/authentication.png";
import img from "../../assets/others/authentication1.png";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

// const captchaRef = useRef();
// const user_captcha_value = captchaRef.current.value;

const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
//   console.log(user_captcha_value);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // if (validateCaptcha(user_captcha_value) === true) {
    //   alert("successfully");
    // } else {
    //   alert("Captcha Does Not Match");
    // }
  };

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
          <img src={img} alt="" />
        </div>
        <div className="">
          <h2 className="text-4xl font-semibold text-center mb-11">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control">
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
            <div className="form-control mt-2">
              <label className="label text-xl font-semibold">
                <LoadCanvasTemplateNoReload />
              </label>
              <input
                type="text"
                placeholder="Captcha Type Here"
                name="captcha"
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
              <label className="label text-xl font-semibold">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 ">
              <input
                type="submit"
                value="Sign In"
                className="btn btn-error bg-[#D1A054] bg-opacity-70 border-0 text-white"
              />
            </div>
          </form>
          <div>
            <p className="text-center text-[#D1A054] text-lg font-semibold mt-3">
              New here?{" "}
              <Link to="/signUp" className="">
                Create a New Account
              </Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
