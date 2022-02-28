import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Logo from "../logo";

const FooterSection = function () {
  const [navone, setNavone] = useState(["Features", "Pricing", "Services", "Partners"]);
  const [navtwo, setNavtwo] = useState(["About Us", "Tutorials", "Resources", "Help Center", "Templates", "Case Studies"]);
  const [navthree, setNavhree] = useState(["Medium", "Twitter", "Facebook", "Instagram", "LinkedIn"]);
  const [navfour, setNavfour] = useState(["Contact Us", "Slack", "Jobs"]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__place flex space-between">
          <div className="footer__logo flex">
            <Logo size="small"/>
          </div>
          <nav className="footer__nav flex">
            <ul className="footer__ul">
              {navone.map(name => (
                <li className="footer__li">
                  <Link className="footer__link" to="/">{name}</Link>
                </li>
              ))}
            </ul>
            <ul className="footer__ul">
              {navtwo.map(name => (
                <li className="footer__li">
                  <Link className="footer__link" to="/">{name}</Link>
                </li>
              ))}
            </ul>
            <ul className="footer__ul">
              {navthree.map(name => (
                <li className="footer__li">
                  <Link className="footer__link" to="/">{name}</Link>
                </li>
              ))}
            </ul>
            <ul className="footer__ul">
              {navfour.map(name => (
                <li className="footer__li">
                  <Link className="footer__link" to="/">{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__info flex justify-content-center">
          <div className="footer__license">NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.</div>
          <Link className="footer__agreement" to="/">Terms & Conditions</Link>
          <Link className="footer__agreement" to="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection;