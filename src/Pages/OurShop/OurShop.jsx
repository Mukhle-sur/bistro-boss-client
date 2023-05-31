import React, { useState } from "react";
import Cover from "../Shared/Cover/Cover";
import shopBg from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import ShopTab from "./ShopTab";

import "./OurShop.css";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={shopBg}
        title={"OUR SHOP"}
        desc={"Would You Like To Try Dish?"}
      ></Cover>

      <div className="text-center my-12">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <ShopTab items={salad}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={pizza}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={soup}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={dessert}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={drinks}></ShopTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
