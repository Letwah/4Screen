import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/appSlice";

const ProductCard = ({ title, price, buttonText, iconSrc, inStock }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (inStock) {
      dispatch(addToCart({ title, price }));
    }
  };

  return (
    <div className={`card ${!inStock && "outOfStock"}`}>
      <div className="imagePlaceholder">
        {!inStock && <div className="outOfStockOverlay">Out of Stock</div>}
      </div>
      <div className="productTitle">
        <h2>{title}</h2>
      </div>
      <div className="priceCTA">
        <p>{price}</p>
        <button
          className={`addDefault  ${!inStock && "outOfStockButton"}`}
          onClick={handleAddToCart}
          disabled={!inStock}
        >
          <img src={iconSrc} className="icon" alt="Basket Icon" />
          <p>{buttonText}</p>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
