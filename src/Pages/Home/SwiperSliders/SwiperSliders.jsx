import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import "./Swiper.css";

import slider1 from "../../../assets/home/slide1.jpg";
import slider2 from "../../../assets/home/slide2.jpg";
import slider3 from "../../../assets/home/slide3.jpg";
import slider4 from "../../../assets/home/slide4.jpg";
import slider5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const SwiperSliders = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-12"
        >
          <SwiperSlide>
            <img src={slider1} alt="" className="mx-auto" />
            <h3 className="text-center text-3xl uppercase text-white -mt-14">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" className="mx-auto" />
            <h3 className="text-center text-3xl uppercase text-white -mt-14">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" className="mx-auto" />
            <h3 className="text-center text-3xl uppercase text-white -mt-14">
              {" "}
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" className="mx-auto" />
            <h3 className="text-center text-3xl uppercase text-white -mt-14">
              desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider5} alt="" className="mx-auto" />
            <h3 className="text-center text-3xl uppercase text-white -mt-12">
              Soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" className="mx-auto" />
            <h3 className="text-center text-3xl uppercase text-white -mt-14">
              desserts
            </h3>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SwiperSliders;
