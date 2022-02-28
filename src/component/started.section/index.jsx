import React from "react";
import "./style.scss"
import Button from "../button";

const StartedSection = function (){
  return (
    <section className="started">
      <div className="container">
        <div className="started__head">
          <h4 className="started__h4 flex justify-content-center">Get started today!</h4>
          <div className="started__content flex justify-content-center">
            <Button
              text={"PICK A PLAN"}
              classes="started__button"
            />
          </div>
        </div>
      </div>
    </section>
  )
};

export default StartedSection;