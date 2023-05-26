import React from "react";

const MenuCart = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex">
      <img
        className="w-32 h-28"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div className="ml-7">
        <h3 className="text-xl text-[#151515]">{name} ------------------</h3>
        <p className="text-base text-[#737373]">{recipe}</p>
      </div>
      <p className="text-xl text-[#BB8506]">${price}</p>
    </div>
  );
};

export default MenuCart;
