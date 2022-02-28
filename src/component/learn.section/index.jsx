import React from "react";
import "./style.scss";
import CardLearn from "../card.learn";
import Picture1 from "../../pictures/png/learn1.png";
import Picture2 from "../../pictures/png/learn2.png";
import Picture3 from "../../pictures/png/learn3.png";
import Search from "../search";

const LearnSection = function (){
  return (
    <section className="learn">
      <div className="container">
        <div className="learn__place">
          <div className="learn__head flex justify-content-center">
            <CardLearn
              image={Picture1}
              title={"Frankie"}
              desc={"Member since 2016"}
            />
            <CardLearn
              image={Picture2}
              title={"Camile"}
              desc={"Member since 2012"}
            />
            <CardLearn
              image={Picture3}
              title={"Elayne"}
              desc={"Member since 2018"}
            />
          </div>
          <div className="learn__search flex flex-direction-column align-items-center">
            <h4 className="learn__h4">Learn how others are reaching their audience easier than ever before.</h4>
            <div className="learn__search">
              <Search/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LearnSection;