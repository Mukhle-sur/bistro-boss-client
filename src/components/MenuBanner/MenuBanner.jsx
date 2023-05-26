import React from "react";
const MenuBanner = ({ img, title, description}) => {
  return (
    <div
      style={{
        backgroundImage: `url("${img}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="px-28 py-32 mt-12"
    >
      <div className="text-center p-20 bg-[#151515] bg-opacity-40">
        <h3 className="text-5xl text-white uppercase mb-2">{title}</h3>
        <p className="text-base text-white"> {description}</p>
      </div>
    </div>
  );
};

export default MenuBanner;
