import React, { useContext, useState } from "react";
import "./Navbar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { StoreContext } from "../../StoreContext/StoreContext";
library.add(
  faFacebook,
  faInstagram,
  faTwitter,
  faEnvelope,
  faPhone,
  faBars,
  faTimes
);

const Navbar = () => {
  const { isActive, toggleActive } = useContext(StoreContext);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggle = () => setIsNavbarOpen(!isNavbarOpen);
  //setIsActive

  return (
    //first install the react router dom to use the link
    <div className="header" id="header">
      <div className="header-top">
        <div className="header-contact-info">
          <p>Contact us:</p>
          <div className="contact-info-contents">
            <div className="contact-info-content">
              <FontAwesomeIcon icon={faPhone} />
              <p>+256701371124</p>
            </div>
            <div className="contact-info-content">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>colville@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="header-social-icons">
          <p>Follow Us:</p>
          <div className="icon-box">
            <span class="icon">
              <a href="#facebook">
                <FontAwesomeIcon icon={faFacebook} className="font-awesome" />
              </a>
            </span>
            <span class="icon">
              <a href="#instagram">
                <FontAwesomeIcon icon={faInstagram} className="font-awesome" />
              </a>
            </span>
            <span class="icon">
              <a href="#x">
                <FontAwesomeIcon icon={faTwitter} className="font-awesome" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="logo">
          <span>ColVille</span> University
        </div>
        <div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggle}
            className={`font-awesome ${isNavbarOpen ? "hidden" : ""}`}
          />
          <div className={`navbar ${isNavbarOpen ? "open" : ""}`}>
            <FontAwesomeIcon
              icon={faTimes}
              onClick={toggle}
              className={`font-awesome ${isNavbarOpen ? "" : "hidden"}`}
            />
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
