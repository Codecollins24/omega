import React, { useContext } from "react";
import "./CallToAction.css";
import Button from "../button/button";
import { StoreContext } from "../../StoreContext/StoreContext";

const CallToAction = () => {
  const marginAuto = {
    display: "inline-block",
    margin: "auto",
  };
  const { handleCourses } = useContext(StoreContext);
  return (
    <div className="cta-container">
      <h3>Limitless Learning, Limitless Possibilities</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam
        optio accusantium reprehenderit necessitatibus autem.
      </p>
      <Button
        name="Start learning today"
        auto={marginAuto}
        buttonLink={handleCourses}
      />
    </div>
  );
};

export default CallToAction;
