import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const CardSource = function ({image, text, classes}) {
  return (
    <div className={`card-source ${classes ? classes : ''}`}>
      <div className="card-source__cap">
        <img className="card-source__image" src={image} alt="card"/>
      </div>
      <div className="card-source__content">
        <span className="card-source__span">{text}</span>
        <Link className="card-source__link" to="/">Learn More ></Link>
      </div>
    </div>
  )
};

export default CardSource;