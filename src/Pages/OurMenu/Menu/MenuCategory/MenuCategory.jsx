import React from "react";
import MenuBanner from "../../../../components/MenuBanner/MenuBanner";
import { Link } from "react-router-dom";
import MenuCart from "../../../Shared/MenuCard/MenuCart";

const MenuCategory = ({ items, title}) => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-6 mt-32">
        {items.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
