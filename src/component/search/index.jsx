import React from "react";
import "./style.scss";
import Button from "../button";

const Search = function () {
  return (
    <div className="search">
      <div className="search__wrapper flex align-items-center">
        <input className="search__input" name="search" placeholder="Enter your email" />
        <Button classes="search__button" text="JOIN OUR LIST" />
      </div>
      <span className="search__received flex">Thanks! Email received.</span>
    </div>
  )
}

export default Search;