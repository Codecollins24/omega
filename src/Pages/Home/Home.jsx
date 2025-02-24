import React from "react";
import SwiperHero from "../../Components/Swiper/SwiperHero";
import Admission from "../../Components/Admission/Admission";
import CampusLife from "../../Components/CampusLife/CampusLife";
import Programs from "../../Components/Programs/Programs";
import Course from "../../Components/Course/Course";
import Blog from "../../Components/Blog/Blog";
import Testimonial from "../../Components/Testimonial/Testimonial";
import CallToAction from "../../Components/CallToAction/CallToAction";
import CounterContainer from "../../Components/Counter/Counter";

const Home = () => {
  return (
    <>
      <SwiperHero />
      <Admission />
      <Programs />
      <Course />
      <CampusLife />
      <CounterContainer />
      <Testimonial />
      <CallToAction />
      <Blog />
    </>
  );
};

export default Home;
