import React from "react";
import "./style.scss"
import Button from "../button";

const ReachSection = function () {
  return (
    <section className="reach">
      <div className="container reach__container">
        <div className="reach__place">
          <div className="reach__harmonic"></div>
          <div className="reach__area">
            <div className="reach__content flex flex-direction-column justify-content-center align-items-center">
              <h2 className="reach__h2">Reach More Customers</h2>
              <Button
                text={"LEARN HOW"}
                classes={"reach__button"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachSection;