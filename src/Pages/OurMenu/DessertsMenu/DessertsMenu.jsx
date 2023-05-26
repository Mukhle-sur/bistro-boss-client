import React from "react";
import dessert from "../../../assets/menu/dessert-bg.jpeg";
import MenuBanner from "../../../components/MenuBanner/MenuBanner";
import useMenu from "../../../Hooks/useMenu";
import MenuCart from "../../Shared/MenuCard/MenuCart";
import { Link } from "react-router-dom";

const DessertsMenu = () => {
  const [menu] = useMenu();
  const dessertItem = menu.filter((item) => item.category === "dessert");
  return (
    <div className="mt-12">
      <MenuBanner
        img={dessert}
        title={"Desserts"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuBanner>

      <div className="grid md:grid-cols-2 gap-6 mt-32">
        {dessertItem.map((item) => (
          <MenuCart key={item._id} item={item}></MenuCart>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link to={`/shop/${dessertItem}`}>
          {" "}
          <button className="btn btn-outline border-0 border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DessertsMenu;
