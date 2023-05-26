import React from "react";

const ShopCart = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="w-full h-80" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-base text-[#151515]">{recipe}</p>
        <div className="text-center">
          <button
            className=" hover:bg-[#1F2937] py-5 px-8 rounded-lg bg-[#E8E8E8] border-b-4 border-[#BB8506] text-xl font-medium uppercase text-[#BB8506]
   hover:ease-in-out duration-300
  "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
