import React from "react";
import Card from "../Card/Card";
const Programs = () => {
  return (
    <section className="section">
      <div className="title">
        <h3 className="mini-title">Programs</h3>
        <h1 className="main-title">OUR ACADEMIC PROGRAMS</h1>
      </div>
      <div className="home-card-group">
        <Card
          imgSrc="/program1.png"
          title="Undergraduate"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="VIEW COURSES"
          cardLink="#"
        />
        <Card
          imgSrc="/program2.png"
          title="Postgraduate"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="VIEW COURSES"
          cardLink="#"
        />
        <Card
          imgSrc="/program3.png"
          title="PhD Programs"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="VIEW COURSES"
          cardLink="#"
        />
      </div>
    </section>
  );
};

export default Programs;
