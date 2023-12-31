import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../store/pageVarients";
import "../styles/styles.css";

const Vending2 = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition="transition"
      variants={pageVariants}
    >
      <section className="contents vending">
        <div className="success1Cont">
          <div classname="cartTitle">
            <h3>Success</h3>
          </div>

          <div className="thumbWrapper">
            <div className="thumbCont">
              <img src="./assets/itemBlue.png" alt="blue item" />

              <div className="numberItems">
                <p>1</p>
              </div>
            </div>
            <div className="thumbCont">
              <img src="./assets/itemRed.png" alt="blue item" />
              <div className="numberItems">
                <p>1</p>
              </div>
            </div>
            <div className="thumbCont">
              <img src="./assets/itemYellow.png" alt="blue item" />
              <div className="numberItems">
                <p>1</p>
              </div>
            </div>
          </div>
          <div className="feedback">
            <p>We would love your feedback</p>
          </div>

          <div className="stars">
            <img src="./assets/star_shape_fill.svg" alt="stars Solid"></img>
            <img src="./assets/star_shape_fill.svg" alt="stars Solid"></img>
            <img src="./assets/star_shape_fill.svg" alt="stars Solid"></img>
            <img src="./assets/star_shape_fill.svg" alt="stars Solid"></img>
            <img src="./assets/star_shape.svg" alt="stars Solid"></img>
          </div>

          <div>
            <h3>Please collect your purchase</h3>
          </div>
          <div className="fridge">
            <div className="fridgeWindow"></div>
            <div className="fridgeIcons">
              <div className="chevrons">
                <img src="./assets/chevrons.svg" alt="Chevron Icon" />
              </div>
              <div className="dispenser">
                <img src="./assets/dispenser.png" alt="Chevron Icon" />
              </div>
            </div>
            <Link to="/">
              <button className="collect">COLLECT HERE</button>
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Vending2;
