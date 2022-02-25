import React from "react";
import './style.scss'

const Button = function ({text}){
  return (
    <button className="btn-def">{text}</button>
  )
};

export default Button;