import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuCart from "../../Shared/MenuCard/MenuCart";

const OfferMenu = () => {
  const [menu] = useMenu();
  const offerMenu = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {offerMenu.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
      </div>
    </div>
  );
};

export default OfferMenu;
