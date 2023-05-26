import React from "react";

import cart from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ChefCart = () => {
  return (
    <section className="mt-20">
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="md:flex justify-between gap-10">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={cart} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="text-base text-[#151515]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={cart} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="text-base text-[#151515]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
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
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={cart} alt="Shoes" className="w-full h-80" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p className="text-base text-[#151515]">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
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
      </div>
    </section>
  );
};

export default ChefCart;
