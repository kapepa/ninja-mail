import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const MenuDefault = function () {
  return (
    <nav className="nav-def">
      <ul className="nav-def__ul flex">
        <li className="nav-def__li flex">
          <Link className="nav-def__link flex align-items-center justify-content-center"  to="/">FEATURES</Link>
        </li>
        <li className="nav-def__li flex">
          <Link className="nav-def__link flex align-items-center justify-content-center" to="/">PRICING</Link>
        </li>
        <li className="nav-def__li flex">
          <Link className="nav-def__link flex align-items-center justify-content-center" to="/">SERVICES</Link>
        </li>
        <li className="nav-def__li flex">
          <Link className="nav-def__link flex align-items-center justify-content-center" to="/">PARTNERS</Link>
        </li>
      </ul>
    </nav>
  )
};

export default MenuDefault;