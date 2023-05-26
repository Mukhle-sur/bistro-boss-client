import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./OurFeature.css";

import feature from "../../../assets/home/featured.jpg";

const OurFeature = () => {
  return (
    <section className="feature py-32 text-white bg-fixed container mt-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="md:flex justify-center items-center px-32">
        <img src={feature} alt="" className="md:w-[650px]" />
        <div className="ml-16">
          <p className="">March 20, 2023</p>
          <h4 className="">WHERE CAN I GET SOME?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <div className="">
            <button className="hover:text-white hover:btn-success py-5 px-8 rounded-lg border-b-4 border-white text-xl font-medium uppercase text-white">
            Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeature;
