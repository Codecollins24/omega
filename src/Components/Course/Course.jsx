import React, { useContext } from "react";
import Card from "../Card/Card";
import Button from "../button/button";
import { StoreContext } from "../../StoreContext/StoreContext";
const Course = () => {
  const marginAuto = {
    display: "inline-block",
    margin: "auto",
  };
  const { handleApply, handleCourses } = useContext(StoreContext);
  return (
    <section className="course section">
      <div className="title">
        <h3 className="mini-title">COURSES</h3>
        <h1 className="main-title">Browse Our Top Courses</h1>
      </div>
      <div className="home-card-group">
        <Card
          imgSrc="/computerscience.png"
          title="Computer Science"
          price="$2000"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="APPLY NOW"
          cardLink={handleApply}
        />
        <Card
          imgSrc="/medicine-1.jpg"
          title="Medicine & Surgery"
          price="$3500"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="APPLY NOW"
          cardLink={handleApply}
        />
        <Card
          imgSrc="/ict.png"
          title="Information Technology"
          price="$900"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam qui impedit animi temporibus mollitia esse error adipisci, distinctio accusantium"
          cardLinkName="APPLY NOW"
          cardLink={handleApply}
        />
      </div>
      <Button
        name="View all courses"
        auto={marginAuto}
        buttonLink={handleCourses}
      />
    </section>
  );
};

export default Course;
