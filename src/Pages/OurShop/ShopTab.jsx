import React from "react";
import ShopCart from "./ShopCart";

const ShopTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
      {items.map((item) => (
        <ShopCart key={item._id} item={item}></ShopCart>
      ))}
    </div>
  );
};

export default ShopTab;
