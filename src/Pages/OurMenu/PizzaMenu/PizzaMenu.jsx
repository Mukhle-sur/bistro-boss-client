import React, { useState } from "react";
import MenuCart from "../../Shared/MenuCard/MenuCart";
import pizza from "../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import MenuBanner from "../../../components/MenuBanner/MenuBanner";
import { Link } from "react-router-dom";

const PizzaMenu = () => {
  const [menu] = useMenu();
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  return (
    <div className="mt-12">
      <MenuBanner
        img={pizza}
        title={"Pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuBanner>

      <div className="grid md:grid-cols-2 gap-6 mt-32">
        {pizzaItem.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to={`/shop`}>
          <button className="btn btn-outline border-0 border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PizzaMenu;
