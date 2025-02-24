import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button style={props.auto} onClick={props.buttonLink}>
      {props.name}
    </button>
  );
};

export default Button;
