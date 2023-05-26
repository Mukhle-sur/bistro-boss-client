import React from "react";
import ShopCart from "./ShopCart";

const ShopTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {items.map((item) => (
        <ShopCart key={item._id} item={item}></ShopCart>
      ))}
    </div>
  );
};

export default ShopTab;
