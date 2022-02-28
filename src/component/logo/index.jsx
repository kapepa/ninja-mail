import React from "react";
import { Link } from "react-router-dom";
import LogoSVG from "../../pictures/svg/logo.svg"
import './style.scss';

const Logo = function ({size}) {
  return (
    <Link to="/" className="logo flex align-items-center">
      {size === "small" &&
        <picture>
          <source width={34} height={19} srcSet={LogoSVG} type="image/svg+xml" media="(max-width: 996px)" />
          <img className="logo__img" width={54} height={29} src={LogoSVG} alt="logo" />
        </picture>
      }
      {size === "default" &&
        <picture>
          <source width={45} height={26} srcSet={LogoSVG} type="image/svg+xml" media="(max-width: 996px)" />
          <img className="logo__img" width={70} height={38} src={LogoSVG} alt="logo" />
        </picture>
      }
      <span className={`logo__name ${size === "small" ? "logo__name--small" : ""}`}>NinjaMail</span>
    </Link>
  )
}

export default Logo;