import React from "react";
import "./BlogsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Card from "../Card/Card";
const BlogsPage = () => {
  return (
    <div className="blogs-page-content">
      <h1 className="main-title">Cultural Event 2024</h1>
      <p>
        <FontAwesomeIcon icon={faCalendar} color="#04b104" /> Dec 3, 2024
      </p>
      <div className="blog-img">
        <img src="/cultural_event.jpg" alt="cultural galla" />
      </div>
      <p>By Patrick Olla</p>
      <div className="blog-text">
        <h3>Cultural Event 2024</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          fuga voluptates, architecto dignissimos adipisci maxime illo placeat
          molestias aliquid, dicta non voluptas magnam possimus doloremque
          consequatur? Maxime et doloribus rem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur, fuga voluptates,
          architecto dignissimos adipisci maxime illo placeat molestias aliquid,
          dicta non voluptas magnam possimus doloremque consequatur? Maxime et
          doloribus rem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur, fuga voluptates, architecto dignissimos adipisci
          maxime illo placeat molestias aliquid, dicta non voluptas magnam
          possimus doloremque consequatur? Maxime et doloribus rem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          fuga voluptates, architecto dignissimos adipisci maxime illo placeat
          molestias aliquid, dicta non voluptas magnam possimus doloremque
          consequatur? Maxime et doloribus rem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur, fuga voluptates,
          architecto dignissimos adipisci maxime illo placeat molestias aliquid,
          dicta non voluptas magnam possimus doloremque consequatur? Maxime et
          doloribus rem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur, fuga voluptates, architecto dignissimos adipisci
          maxime illo placeat molestias aliquid, dicta non voluptas magnam
          possimus doloremque consequatur? Maxime et doloribus rem.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          fuga voluptates, architecto dignissimos adipisci maxime illo placeat
          molestias aliquid, dicta non voluptas magnam possimus doloremque
          consequatur? Maxime et doloribus rem? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consequuntur, fuga voluptates,
          architecto dignissimos adipisci maxime illo placeat molestias aliquid,
          dicta non voluptas magnam possimus doloremque consequatur? Maxime et
          doloribus rem? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consequuntur, fuga voluptates, architecto dignissimos adipisci
          maxime illo placeat molestias aliquid, dicta non voluptas magnam
          possimus doloremque consequatur? Maxime et doloribus rem.
        </p>
      </div>
      <div className="other-blogs">
        <h3>Other Stories</h3>
        <div className="home-card-group">
          <Card
            imgSrc="/css_conference.jpg"
            title="Css Conference"
            dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
            dateText="Jan 21, 2025"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
            cardLinkName="READ MORE"
            cardLink="#"
          />
          <Card
            imgSrc="/cultural_event.jpg"
            title="Cultural Event"
            dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
            dateText="Dec 3, 2024"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
            cardLinkName="READ MORE"
            cardLink="#"
          />
          <Card
            imgSrc="/graduation.jpg"
            title="Graduation"
            dateIcon={<FontAwesomeIcon icon={faCalendar} color="#04b104" />}
            dateText="Nov 23, 2024"
            text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
            cardLinkName="READ MORE"
            cardLink="#"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
