import React, { useContext } from "react";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";

import loginImg from "../../assets/others/authentication.png";
import img from "../../assets/others/authentication1.png";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
        updateUserProfile(data.name).then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        });
      })
      .then((error) => {
        console.log(error);
      });
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
          <h2 className="text-4xl font-semibold text-center mb-11">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label text-xl font-semibold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
                name="name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-700">Name field is required</span>
              )}
            </div>
            <div className="form-control mt-3">
              <label className="label text-xl font-semibold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                {...register("email", { required: true })}
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-700">Email field is required</span>
              )}
            </div>
            <div className="form-control mt-5">
              <label className="label text-xl font-semibold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                {...register("password", { required: true })}
                className="input input-bordered"
              />
              {errors.password && (
                <span className="text-red-700">Password field is required</span>
              )}
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
