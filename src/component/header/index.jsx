import React from "react";
import './style.scss'
import Logo from "../logo";
import MenuDefault from "../menu.default";
import Button from "../button";

const Header = function () {
  return (
    <header className='header section'>
      <div className='container'>
        <div className='header__frame flex flex space-between'>
          <Logo/>
          <div className='header__menu flex'>
            <MenuDefault />
            <Button/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;