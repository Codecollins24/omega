import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//import own css style
import "./SwiperHero.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Button from "../button/button";
import { StoreContext } from "../../StoreContext/StoreContext";

const SwiperHero = () => {
  const { handleApply, handleCourses } = useContext(StoreContext);
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        id="swiper-hero"
      >
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="img-container">
              <img src="/hero1.jpg" />
            </div>
            <div className="slide-text">
              <div>
                <h3>Welcome to Colville University</h3>
                <h1>World's leading University for best career</h1>
                <Button name="Apply Now" buttonLink={handleApply} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="img-container">
              <img src="/hero2.jpg" />
            </div>

            <div className="slide-text">
              <div>
                <h1>1000+ Courses Available</h1>
                <h3>
                  Acquire global knowledge and build your professional skills
                </h3>
                <Button name="View Courses" buttonLink={handleCourses} />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>
            <div className="img-container">
              <img src="/hero3.jpg" />
            </div>
            <div className="slide-text">
              <div>
                <h1>State of the Art Facilities</h1>
                <h3>
                  Modern, advanced facilities fostering innovation and learning.
                </h3>

                <Button name="Apply Now" buttonLink={handleApply} />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperHero;
