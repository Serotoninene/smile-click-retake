import React from "react";
import Product from "../Components/Product";
// Assets
import mini from "../Assets/Images/mini.png";
import maxi from "../Assets/Images/maxi.png";
import superP from "../Assets/Images/super.png";

export default function Products() {
  return (
    <div id="Products" className="grid">
      <Product
        title="Mini"
        price="29€"
        oldPrice="49€"
        nuance="légèreté"
        bgColor="#162761"
        productImg={mini}
      />
      <Product
        title="Mini"
        price="29€"
        oldPrice="49€"
        nuance="légèreté"
        bgColor="#f43e3e"
        productImg={maxi}
      />
      <Product
        title="Mini"
        price="29€"
        oldPrice="49€"
        nuance="légèreté"
        bgColor="#fde302"
        productImg={superP}
      />
    </div>
  );
}
