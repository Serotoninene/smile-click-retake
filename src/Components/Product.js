import React from "react";
// Component
import Button from "./Button";

export default function (props) {
  const { title, price, oldPrice, nuance, bgColor, productImg, dark } = props;
  return (
    <div
      className="Product flex-column align-center justify-between"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h2 className="relative">{title}</h2>
      </div>
      <div className="productImg">
        <img src={productImg} alt={title} className="img-fluid" />
      </div>
      <div className="prices text-center">
        <p>
          {price} <span className="HT">HT</span>
        </p>
        <p>
          <span className="oldPrice relative">{oldPrice}</span>{" "}
          <span className="HT">HT</span>
        </p>
      </div>
      <div className="text-center">
        <p>L'encaissement en toute {nuance}</p>
      </div>

      <div>
        <Button color="#162761" bgColor="#ffffff" padding="15px 30px">
          VOIR LE DÉTAIL
        </Button>
      </div>
    </div>
  );
}
