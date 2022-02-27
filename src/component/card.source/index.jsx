import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const CardSource = function ({image, text, classes}) {
  return (
    <div className={`card-source ${classes ? classes : ''}`}>
      <div className="card-source__cap">
        <picture>
          <source width={210} height={162} media="(max-width: 996px)"  srcset={image} alt="card"/>
          <img width={320} height={249} className="card-source__image"  src={image} alt="card"/>
        </picture>
      </div>
      <div className="card-source__content">
        <span className="card-source__span">{text}</span>
        <Link className="card-source__link" to="/">Learn More ></Link>
      </div>
    </div>
  )
};

export default CardSource;