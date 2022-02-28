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
          <Logo size="default"/>
          <div className='header__menu flex'>
            <MenuDefault />
            <div className='header__btn'>
              <Button text={"SIGN UP FREE"}/>
            </div>
          </div>
        </div>
      </div>
      <div className='header__body'>
        <div className='container height'>
          <div className='header__content flex justify-content-center align-items-center'>
            <div className='header__info'>
              <h1 className='header__h1'>Create Stunning Email Campaigns</h1>
              <div className='header__layer'>
                <span className='header__span'>Create and launch email campaigns that captivate your customers in just a few clicks.</span>
              </div>
              <div className="header__btn-zone">
                <Button
                  text="TRY NOW"
                  classes="header__button"
                />
                <Button
                  text="GET A DEMO"
                  classes="header__button"
                />
              </div>
            </div>
            <div className='header__scope'>
              <div className="header__square">
                <div className='header__picture'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;