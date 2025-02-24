import React, { useContext } from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRocket } from "@fortawesome/free-solid-svg-icons";

import Testimonial from "../../Components/Testimonial/Testimonial";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Button from "../../Components/button/button";
import { StoreContext } from "../../StoreContext/StoreContext";

const AboutUs = () => {
  const { handleApply } = useContext(StoreContext);
  return (
    <>
      <div className="aboutus-section">
        <div className="aboutus-title">
          <h1>ABOUT US</h1>
        </div>
        <section className="intro">
          <div className="intro-left">
            <h1>Let Us Introduce Ourselves</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
              quis voluptates commodi provident adipisci possimus ipsum quam
              nobis officia harum explicabo veniam ratione, similique itaque
              aperiam atque dignissimos sunt tempore.
            </p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              consequuntur aspernatur voluptas voluptatibus voluptatum
              molestias, non nesciunt quia dolor possimus laudantium praesentium
              dignissimos inventore recusandae totam pariatur atque accusamus
              delectus.
            </p>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              suscipit adipisci at distinctio iusto reprehenderit ut rerum,
              harum commodi esse.
            </p>
          </div>
          <div className="intro-right">
            <div className="img-container">
              <img src="/about-img.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="mission-vision-value-section">
          <div className="mission-vision">
            <div className="mission color-1">
              <FontAwesomeIcon
                icon={faRocket}
                className="icon-about color-mission"
              />
              <div className="mission-text">
                <h1>Our Mission</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  odit odio et, minus quod sapiente autem delectus at vitae id.
                  Vitae optio cum, fugit voluptatum eius ab deleniti atque
                  porro?
                </p>
              </div>
            </div>
            <div className="vision color-2">
              <FontAwesomeIcon
                icon={faEye}
                className="icon-about color-vision"
              />
              <div className="vision-text">
                <h1>Our Vision</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laborum, nostrum nesciunt autem quis cupiditate animi itaque
                  aspernatur aliquam nihil saepe doloremque ratione molestias
                  magnam similique neque laboriosam corporis harum sapiente?
                </p>
              </div>
            </div>
          </div>
          <div className="value color-3">
            <FontAwesomeIcon icon={faEye} className="icon-about color-vision" />
            <div className="vision-text">
              <h1>Our Core Values</h1>
              <ol>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  suscipit quidem molestias accusamus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  suscipit quidem molestias accusamus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  suscipit quidem molestias accusamus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  suscipit quidem molestias accusamus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  suscipit quidem molestias accusamus.
                </li>
                <li>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit
                  suscipit quidem molestias accusamus.
                </li>
              </ol>
            </div>
          </div>
        </section>
        <section className="cta-2">
          <div className="about-img-con">
            <img src="/cta-2.jpg" />
          </div>
          <div className="cta-2-col">
            <h1>UNLOCK STUDENTS' PONTENTIAL</h1>
            <p className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A placeat
              adipisci explicabo debitis eligendi! Architecto at atque quis
              expedita.
            </p>
            <Button name="Apply Now" buttonLink={handleApply} />
          </div>
        </section>
        <section>
          <div className="leadership-img-gallery">
            <h1>Meet Our Leaders</h1>
            <div className="img-gallery-container">
              <div className="leader-card-director">
                <div className="leader-card-img" id="leader-card-img">
                  <img src="/profile6.png" />
                </div>
                <div className="name-title">
                  <h3>Mr. Ainomugisha Collins</h3>
                  <p>Chancellor</p>
                </div>
              </div>
              <div className="leader-gallery">
                <div className="leader-card">
                  <div className="leader-card-img">
                    <img src="/profile6.png" />
                  </div>
                  <div className="name-title">
                    <h3>Mr. Lwasa Titus</h3>
                    <p>Vice Chancellor</p>
                  </div>
                </div>
                <div className="leader-card">
                  <div className="leader-card-img">
                    <img src="/profile6.png" />
                  </div>
                  <div className="name-title">
                    <h3>Mr. Kagga Hakim</h3>
                    <p>Deputy Vice Chancellor</p>
                  </div>
                </div>
                <div className="leader-card">
                  <div className="leader-card-img">
                    <img src="/profile6.png" />
                  </div>
                  <div className="name-title">
                    <h3>Mrs. Mugisha Patience</h3>
                    <p>Dean of Students</p>
                  </div>
                </div>
                <div className="leader-card">
                  <div className="leader-card-img">
                    <img src="/profile6.png" />
                  </div>
                  <div className="name-title">
                    <h3>Mrs. Mugisha Patience</h3>
                    <p>Dean of Students</p>
                  </div>
                </div>
                <div className="leader-card">
                  <div className="leader-card-img">
                    <img src="/profile6.png" />
                  </div>
                  <div className="name-title">
                    <h3>Mrs. Mugisha Patience</h3>
                    <p>Dean of Students</p>
                  </div>
                </div>
                <div className="leader-card">
                  <div className="leader-card-img">
                    <img src="/profile6.png" />
                  </div>
                  <div className="name-title">
                    <h3>Mrs. Mugisha Patience</h3>
                    <p>Dean of Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonial />
      </div>
      <CallToAction />
    </>
  );
};

export default AboutUs;
