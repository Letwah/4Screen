import React from "react";
import ProductCard from "../components/ProductCard";
import basketIcon from "../assets/bi_basket2-fill.svg";
import "../styles/styles.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <section className="contents">
        <div className="checkoutWrapper">
          <div className="gridCont">
            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={1}
              showQuantityControl={false}
            />
            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={false}
              quantity={0}
              showQuantityControl={false}
            />
            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={2}
              showQuantityControl={true}
            />
            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={2}
              showQuantityControl={true}
            />
            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={1}
              showQuantityControl={false}
            />
            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={1}
              showQuantityControl={false}
            />
          </div>
        </div>
        <div className="bottomCTA">
          <Link to="/basket">
            <button className="solid" id="checkoutButton">
              Go to Checkout
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Checkout;
