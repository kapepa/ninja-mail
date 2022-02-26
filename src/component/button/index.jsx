import React from "react";
import './style.scss'
import { Link } from "react-router-dom"

const Button = function ({text, classes}){
  return (
    <button
      className={`btn-def ${classes ? classes : ''}`}
    >
      {text}
    </button>
  )
};

export default Button;