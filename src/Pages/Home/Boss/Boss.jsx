import React from "react";
import boss from "../../../assets/home/chef-service.jpg";

const Boss = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${boss}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="px-28 py-32"
    >
      <div
        className="text-center py-24 px-4 bg-white"
      >
        <h3 className="text-5xl text-[#151515] uppercase mb-2">Bistro Boss</h3>
        <p className="text-base text-[#151515]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default Boss;
