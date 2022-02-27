import React from "react";
import "./style.scss";
import CardSource from "../card.source";
import Image1 from "../../pictures/png/sourse-photo1.png";
import Image2 from "../../pictures/png/sourse-photo2.png";

const SourseSection = function () {
  return (
    <section className='sourse'>
      <div className="container">
        <div className="sourse__area flex">
          <div className="sourse__offer flex">
            <CardSource
              image={Image1}
              text={"Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end."}
              classes={"sourse__offer--card"}
            />
            <CardSource
              image={Image2}
              text={"Start building and sharing with your team today. NinjaMail is renowned for its industry leading ..."}
              classes={"sourse__offer--card"}
            />
          </div>
          <div className="sourse__desc flex flex-direction-column justify-content-center">
            <h3 className="sourse__h3">The source for proven, engaging email campaigns</h3>
            <span className="sourse__text">Whether you’re a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business.</span>
          </div>
        </div>
      </div>
      <div className="sourse__bg" ></div>
    </section>
  )
};

export default SourseSection;