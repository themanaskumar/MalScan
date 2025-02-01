import React from "react";
import "../styles/Card.css"
const Card = (props) => {
  return (
    <div className="card">
      <span className="header">{props.header}</span>
      <div className="card-inter">
        <h2 className="title">{props.title}</h2>
        <img src={props.imgPath} alt={props.imgPath} />
      </div>
    </div>
  );
};

export default Card;
