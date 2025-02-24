import React, { useContext } from "react";
import Card from "../Card/Card";
import Button from "../button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { StoreContext } from "../../StoreContext/StoreContext";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const marginAuto = {
    display: "inline-block",
    margin: "auto",
  };
  const { handleNavigate } = useContext(StoreContext);
  const navigate = useNavigate();
  const goToAllBlogs = () => navigate("/blogs");
  return (
    <section className="section">
      <div className="title">
        <h3 className="mini-title">FROM OUR BLOG</h3>
        <h1 className="main-title">LASTEST NEWS</h1>
      </div>
      <div className="home-card-group">
        <Card
          imgSrc="/css_conference.jpg"
          title="Css Conference"
          dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
          dateText="Jan 21, 2025"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="READ MORE"
          cardLink={handleNavigate}
        />
        <Card
          imgSrc="/cultural_event.jpg"
          title="Cultural Event"
          dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
          dateText="Dec 3, 2024"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="READ MORE"
          cardLink={handleNavigate}
        />
        <Card
          imgSrc="/graduation.jpg"
          title="Graduation"
          dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
          dateText="Nov 23, 2024"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="READ MORE"
          cardLink={handleNavigate}
        />
      </div>
      <Button
        name="View all blogs"
        auto={marginAuto}
        buttonLink={goToAllBlogs}
      />
    </section>
  );
};

export default Blog;
