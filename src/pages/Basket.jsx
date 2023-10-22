import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

const Basket = () => {
  return (
    <>
      <section className="contents ">
        <div className="basketWrapper">
          <div
            classname="cartTitle"
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: "2rem",
            }}
          >
            <h3 style={{ fontSize: "2rem", color: "#221f20be" }}>
              Order Summary
            </h3>
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
          <div className="total">
            <div>
              <p className="discounts">Discounts: £-0.50</p>
              <p>Total £4.98</p>
            </div>
          </div>
        </div>

        <div className="bottomCTA_Basket">
          <Link to="/Checkout">
            <button className="outline" id="ContButton">
              Continue Shopping
            </button>
          </Link>
          <Link to="/Vending1">
            <button className="solid" id="payButton">
              Pay and collect
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Basket;
