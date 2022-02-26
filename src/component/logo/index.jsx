import React from "react";
import { Link } from "react-router-dom";
import LogoSVG from "../../pictures/svg/logo.svg"
import './style.scss';

const Logo = function () {
  return (
    <Link to="/" className="logo flex align-items-center">
      <picture>
        <source width={45} height={26} srcSet={LogoSVG} type="image/svg+xml" media="(max-width: 996px)" />
        <img className="logo__img" width={70} height={38} src={LogoSVG} alt="logo" />
      </picture>
      <span className="logo__name">NinjaMail</span>
    </Link>
  )
}

export default Logo;