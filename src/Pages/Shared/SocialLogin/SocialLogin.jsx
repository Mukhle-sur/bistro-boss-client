import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">Or Sign In with</div>
      <div className="flex justify-center my-8">
        <FaGoogle
          className="text-red-600 text-4xl cursor-pointer"
        ></FaGoogle>
        <FaFacebookF className="text-blue-600 text-4xl mx-5 cursor-pointer"></FaFacebookF>
        <FaGithub className="text-lime-600 text-4xl cursor-pointer"></FaGithub>
      </div>
    </div>
  );
};

export default SocialLogin;
