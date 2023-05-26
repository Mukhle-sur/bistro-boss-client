import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";

import menuImg from "../../../assets/menu/banner3.jpg";
import MenuCategory from "./MenuCategory/MenuCategory";
import useMenu from "../../../Hooks/useMenu";
import OfferMenu from "../OfferMenu/OfferMenu";
import MenuBanner from "../../../components/MenuBanner/MenuBanner";
// import DessertsMenu from "../DessertsMenu/DessertsMenu";
// import PizzaMenu from "../PizzaMenu/PizzaMenu";
// import SaladsMenu from "../SaladsMenu/SaladsMenu";
// import SoupsMenu from "../SoupsMenu/SoupsMenu";
// import useMenu from "../../../Hooks/useMenu";

import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title={"OUR MENU"}
        desc={"Would You Like To Try A dish?"}
      ></Cover>
      <OfferMenu></OfferMenu>

      <MenuBanner
        img={dessertImg}
        title={"dessert"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuBanner>
      <MenuCategory items={dessert} title={"dessert"}></MenuCategory>

      <MenuBanner
        img={pizzaImg}
        title={"pizza"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuBanner>
      <MenuCategory items={pizza} title={"pizza"}></MenuCategory>

      <MenuBanner
        img={saladImg}
        title={"salad"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuBanner>
      <MenuCategory items={salad} title={"salad"}></MenuCategory>

      <MenuBanner
        img={soupImg}
        title={"soup"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuBanner>
      <MenuCategory items={soup} title={"soup"}></MenuCategory>
      {/* 
      <DessertsMenu></DessertsMenu>
      <PizzaMenu></PizzaMenu>
      <SaladsMenu></SaladsMenu>
      <SoupsMenu></SoupsMenu> */}
    </div>
  );
};

export default Menu;
