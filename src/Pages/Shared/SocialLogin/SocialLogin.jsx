import React from "react";
import { useContext } from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser)
        const saveUser = {
          name: loginUser.displayName,
          email: loginUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">Or Sign In with</div>
      <div className="flex justify-center my-8">
        <FaGoogle
          onClick={handleGoogleLogin}
          className="text-red-600 text-4xl cursor-pointer"
        ></FaGoogle>
        <FaFacebookF className="text-blue-600 text-4xl mx-5 cursor-pointer"></FaFacebookF>
        <FaGithub className="text-lime-600 text-4xl cursor-pointer"></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
