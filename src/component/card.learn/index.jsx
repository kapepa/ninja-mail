import React from "react";
import "./style.scss";

const CardLearn = function ({image, title, desc}){
  return (
    <div className="card-learn flex flex-direction-column justify-content-end">
      <img className="card-learn__image" src={image} alt={title}/>
      <h4 className="card-learn__h4">{title}</h4>
      <span className="card-learn__span">{desc}</span>
    </div>
  )
};

export default CardLearn;