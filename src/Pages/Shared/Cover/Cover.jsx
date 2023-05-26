import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, desc }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15}}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content ">
          <div className="py-28 px-60 bg-[#151515] bg-opacity-40">
            <h1 className="mb-5 text-7xl text-white font-bold uppercase">
              {title}
            </h1>
            <p className="text-white text-2xl uppercase">{desc}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
