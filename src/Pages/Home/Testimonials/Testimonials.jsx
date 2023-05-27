import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>
      <div className="text-center mt-12">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                  className="mx-auto"
                />
                <FaQuoteLeft className="text-5xl mx-auto mt-11 h-20 w-24"></FaQuoteLeft>
              </div>
              <div className="mx-16 mt-5">
                <p className="text-xl">{review.details}</p>
                <h4 className="text-3xl font-medium text-[#CD9003]">
                  {review.name}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
