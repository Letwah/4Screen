import React from "react";
import "../styles/styles.css";

const Basket = () => {
  return (
    <>
      <section className="contents basket">
        <div className="basketWrapper">
          <div classname="cartTitle">
            <h3>Order Summary</h3>
          </div>
          <div className="cartProduct">
            <div className="cartPlaceholder"></div>
            <div>
              <p className="productName">Product 01</p>
            </div>
            <div>
              <p className="productPrice">£2.99</p>
            </div>
          </div>
          <div className="cartProduct">
            <div className="cartPlaceholder"></div>
            <div>
              <p className="productName">Product 01</p>
            </div>
            <div>
              <p className="productPrice">£2.99</p>
            </div>
          </div>
        </div>
        <div className="total">
          <p className="discounts">Discounts: £-0.50</p>
          <p>Total £2.99</p>
        </div>
        <div className="bottomCTA">
          <button className="outline" id="ContButton">
            Continue Shopping
          </button>
          <button className="solid" id="payButton">
            Pay and collect
          </button>
        </div>
      </section>
    </>
  );
};

export default Basket;
