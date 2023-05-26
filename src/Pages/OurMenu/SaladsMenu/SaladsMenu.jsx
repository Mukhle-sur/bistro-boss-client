import React from 'react';
import MenuBanner from '../../../components/MenuBanner/MenuBanner';
import MenuCart from '../../Shared/MenuCard/MenuCart';
import useMenu from '../../../Hooks/useMenu';

import salad from "../../../assets/menu/salad-bg.jpg"
import { Link } from 'react-router-dom';

const SaladsMenu = () => {
    const [menu] = useMenu();
    const saladItem = menu.filter((item) => item.category === "salad");
    return (
        <div className="mt-12">
        <MenuBanner
          img={salad}
          title={"Salad"}
          description={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></MenuBanner>
  
        <div className="grid md:grid-cols-2 gap-6 mt-32">
          {saladItem.map((item) => (
            <MenuCart key={item._id} item={item}></MenuCart>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to={`/shop/${saladItem}`}><button className="btn btn-outline border-0 border-b-4">
            ORDER YOUR FAVOURITE FOOD
          </button></Link>
        </div>
      </div>
    );
};

export default SaladsMenu;