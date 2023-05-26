import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center sm:w-4/12 mx-auto mb-10 mt-14">
      <p className="text-xl text-[#D99904] mb-4">---{subHeading}---</p>
      <h3 className="text-[40px] uppercase border-y-4 py-5">{heading}</h3>
    </div>
  );
};

export default SectionTitle;