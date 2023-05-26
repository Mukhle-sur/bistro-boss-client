import React from "react";
import Banner from "../Banner/Banner";
import SwiperSliders from "../SwiperSliders/SwiperSliders";
import PopularMenu from "../PopularMenu/PopularMenu";
import CallUs from "../CallUs/CallUs";
import ChefCart from "../ChefCart/ChefCart";
import OurFeature from "../OurFeature/OurFeature";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";
import Boss from "../Boss/Boss";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>

      <Banner></Banner>
      <SwiperSliders></SwiperSliders>
      <Boss></Boss>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefCart></ChefCart>
      <OurFeature></OurFeature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
