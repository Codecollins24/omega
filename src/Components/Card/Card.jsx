import React from "react";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
const Card = ({
  imgSrc,
  title,
  price,
  text,
  cardLink,
  cardLinkName,
  dateText,
  dateIcon,
}) => {
  return (
    <div className="card-container">
      <div className="img-box">
        <img src={imgSrc} />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="price">{price}</p>
        <p className="date">
          {dateIcon} {dateText}
        </p>
        <p className="desc">{text}</p>
        <p className="card-link" onClick={cardLink}>
          {cardLinkName} <FontAwesomeIcon icon={faAngleDoubleRight} />
        </p>
      </div>
    </div>
  );
};

export default Card;
