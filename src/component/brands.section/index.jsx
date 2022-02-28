import React, {useState} from "react";
import "./style.scss";
import label1 from "../../pictures/logo/Logo1.svg";
import label2 from "../../pictures/logo/Logo2.svg";
import label3 from "../../pictures/logo/Logo3.svg";
import label4 from "../../pictures/logo/Logo4.svg";
import label5 from "../../pictures/logo/Logo5.svg";

const BrandsSection = function () {
  const [label, seLabel] = useState([label1, label2, label3, label4, label5]);
  return (
    <section className="brands">
      <div className="container">
        <div className="brands__head flex align-items-center flex-direction-column">
          <h4 className="brands__h4">All the best brands already use us.</h4>
          <div className="brands__content flex justify-content-center">
            {label.map((image) => (
              <div className="brands__label flex align-items-center justify-content-center">
                <img src={image} alt="label" className="brands__image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandsSection;