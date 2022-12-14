import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <p>{props.title} </p>
      </div>
      <div className="card-contain">{props.content} </div>
    </div>
  );
};

export default Card;
