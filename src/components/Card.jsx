import React from "react";
import "../styles/Card.css"
const Card = (props) => {
  return (
    <div className="card" style={{borderLeft: `4px solid ${props.borderColor}`}}>
      <span className="header" style={{color: props.borderColor}}> {props.header}</span>
      <div className="card-inter">
        <h2 className="title">{props.title}</h2>
        <img src={props.imgPath} alt={props.imgPath} />
      </div>
    </div>
  );
};

export default Card;
