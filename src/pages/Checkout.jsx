import React from "react";
import ProductCard from "../components/ProductCard";
import basketIcon from "../assets/bi_basket2-fill.svg";
import "../styles/styles.css";

const Checkout = () => {
  return (
    <>
      <section className="contents">
        <div className="checkoutWrapper">
          <ProductCard
            title="Product 01"
            price="£12.99"
            buttonText="Add"
            iconSrc={basketIcon}
            inStock={true}
          />
          <ProductCard
            title="Product 01"
            price="£12.99"
            buttonText="Add"
            iconSrc={basketIcon}
            inStock={false}
          />
          <ProductCard
            title="Product 01"
            price="£12.99"
            buttonText="Add"
            iconSrc={basketIcon}
            inStock={true}
          />
          <ProductCard
            title="Product 01"
            price="£12.99"
            buttonText="Add"
            iconSrc={basketIcon}
            inStock={true}
          />
          <ProductCard
            title="Product 01"
            price="£12.99"
            buttonText="Add"
            iconSrc={basketIcon}
            inStock={true}
          />
          <ProductCard
            title="Product 01"
            price="£12.99"
            buttonText="Add"
            iconSrc={basketIcon}
            inStock={true}
          />
        </div>
        <div className="bottomCTA">
          <button className="solid" id="checkoutButton">
            Go to Checkout
          </button>
        </div>
      </section>
    </>
  );
};

export default Checkout;
