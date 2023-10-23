import React from "react";
import ProductCard from "../components/ProductCard";
import basketIcon from "../../public/assets/bi_basket2-fill.svg";
import { motion } from "framer-motion";
import { pageVariants } from "../store/pageVarients";

import "../styles/styles.css";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      variants={pageVariants}
    >
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
              id={1}
            />

            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={false}
              quantity={0}
              showQuantityControl={false}
              id={2}
            />

            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={2}
              showQuantityControl={true}
              id={3}
            />

            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={2}
              showQuantityControl={true}
              id={4}
            />

            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={1}
              showQuantityControl={false}
              id={5}
            />

            <ProductCard
              title="Product 01"
              price="£12.99"
              buttonText="Add"
              iconSrc={basketIcon}
              inStock={true}
              quantity={1}
              showQuantityControl={false}
              id={6}
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
    </motion.div>
  );
};

export default Checkout;
