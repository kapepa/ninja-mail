import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const MenuDefault = function () {
  return (
    <nav className="nav-def">
      <ul className="flex">
        <li className="nav-def__li">
          <Link className="nav-def__link" to="/">FEATURES</Link>
        </li>
        <li className="nav-def__li">
          <Link className="nav-def__link" to="/">PRICING</Link>
        </li>
        <li className="nav-def__li">
          <Link className="nav-def__link" to="/">SERVICES</Link>
        </li>
        <li className="nav-def__li">
          <Link className="nav-def__link" to="/">PARTNERS</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuDefault;