import React, { useContext, useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { StoreContext } from "../../StoreContext/StoreContext";
import Button from "../button/button";
const Footer = () => {
  const { isActive, toggleActive } = useContext(StoreContext);
  const resizeButton = {
    padding: "8px 1rem",
    fontsize: "14px",
  };

  return (
    <div className="footer">
      <div className="sitemap">
        <div className="sitemap-col">
          <div className="logo">
            <h3>
              COLVILLE<span>UNIVERSITY</span>
            </h3>
          </div>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            veniam aperiam voluptate distinctio modi similique est facilis
            impedit ad. Quo magnam corporis labore expedita ut quaerat, ipsam at
            numquam maiores.
          </p>
        </div>
        <div className="sitemap-col">
          <h3>USER LINKS</h3>
          <ul>
            <Link to="/">
              <li
                onClick={() => toggleActive("home")}
                className={isActive === "home" ? "active" : ""}
              >
                Home
              </li>
            </Link>
            <Link to="/about">
              <li
                onClick={() => toggleActive("about")}
                className={isActive === "about" ? "active" : ""}
              >
                About Us
              </li>
            </Link>
            <Link to="/courses">
              <li
                onClick={() => toggleActive("courses")}
                className={isActive === "courses" ? "active" : ""}
              >
                Courses
              </li>
            </Link>
            <Link to="/blogs">
              <li
                onClick={() => toggleActive("blogs")}
                className={isActive === "blogs" ? "active" : ""}
              >
                Blogs
              </li>
            </Link>
            <Link to="/contact">
              <li
                onClick={() => toggleActive("contact")}
                className={isActive === "contact" ? "active" : ""}
              >
                Contact Us
              </li>
            </Link>
          </ul>
        </div>
        <div className="sitemap-col">
          <h3>CONTACTS</h3>
          <div className="contact-info">
            <div className="info">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
              <p>+256701371124</p>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
              <p>P.O Box Kampala</p>
            </div>
            <div className="info">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>colville@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="sitemap-col">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <div className="icon">
              <a href="#facebook">
                <FontAwesomeIcon icon={faFacebook} className="font-awesome" />
              </a>
            </div>
            <div className="icon">
              <a href="#instagram">
                <FontAwesomeIcon icon={faInstagram} className="font-awesome" />
              </a>
            </div>
            <div className="icon">
              <a href="#x">
                <FontAwesomeIcon icon={faTwitter} className="font-awesome" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <p>&copy; Copyright Colvilleuniversity. All Right Reserved</p>
        <a href="#header">
          <Button name="Back To Top" auto={resizeButton} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
