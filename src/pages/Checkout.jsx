import React from "react";
import basketIcon from "../assets/bi_basket2-fill.svg";
import "../styles/styles.css";

const Checkout = () => {
  return (
    <>
      <section className="contents">
        <div className="checkoutWrapper">
          <div className="card">
            <div className="imagePlaceholder"></div>
            <div className="productTitle">
              <h2>Product 01</h2>
            </div>
            <div className="priceCTA">
              <p>£12.99</p>
              <button className="addDefault">
                <img src={basketIcon} className="icon" alt="Basket Icon" />
                <p>Add</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
