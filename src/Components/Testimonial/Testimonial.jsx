import "./Testimonial.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const Testimonial = () => {
  return (
    <section className="section">
      <div className="title">
        <h3 className="mini-title">TESTIMONIAL</h3>
        <h1 className="main-title">What Our Students Say</h1>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          id="swiper-slide"
        >
          <SwiperSlide id="swiper-slide">
            <div class="testimonial-slide-content">
              <FontAwesomeIcon icon={faQuoteLeft} className="test-icon" />
              <p class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur molestiae impedit, adipisci quo odio fuga, aliquid
                velit minima, fugiat dolor ducimus.
              </p>
              <div class="img">
                <img src="/profile1.jpg" />
              </div>
              <div class="txt">
                <h3>Grace Morgan</h3>
                <h4>Computer Science</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial-slide-content">
              <FontAwesomeIcon icon={faQuoteLeft} className="test-icon" />
              <p class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur molestiae impedit, adipisci quo odio fuga, aliquid
                velit minima, fugiat dolor ducimus.
              </p>
              <div class="img">
                <img src="/profile2.png" />
              </div>
              <div class="txt">
                <h3>Tinah Williams</h3>
                <h4>Computer Science</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial-slide-content">
              <FontAwesomeIcon icon={faQuoteLeft} className="test-icon" />
              <p class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur molestiae impedit, adipisci quo odio fuga, aliquid
                velit minima, fugiat dolor ducimus.
              </p>
              <div class="img">
                <img src="/profile3.jpg" />
              </div>
              <div class="txt">
                <h3>Titus Johns</h3>
                <h4>Computer Education</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="testimonial-slide-content">
              <FontAwesomeIcon icon={faQuoteLeft} className="test-icon" />
              <p class="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur molestiae impedit, adipisci quo odio fuga, aliquid
                velit minima, fugiat dolor ducimus.
              </p>
              <div class="img">
                <img src="/profile4.jpg" />
              </div>
              <div class="txt">
                <h3>Donald Ressler</h3>
                <h4>Public Health</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
