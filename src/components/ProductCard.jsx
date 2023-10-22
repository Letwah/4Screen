import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  removeQuantity,
  selectCart,
} from "../features/appSlice";

const ProductCard = ({
  title,
  price,
  buttonText,
  iconSrc,
  inStock,
  quantity,
  showQuantityControl,
  id,
}) => {
  console.log("showQuantityControl:", showQuantityControl);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const cartItem = cart.find((item) => {
    return item.id === id;
  });

  const handleIncrement = () => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrement = () => {
    dispatch(removeQuantity(id));
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
        {/* {showQuantityControl && quantity > 1 && (
          
        )} */}
        {showQuantityControl ? (
          <div className="quantityControl">
            <button onClick={handleDecrement}>
              <p>-</p>
            </button>
            <p class="number">{cartItem ? cartItem.quantity : 0}</p>
            <button onClick={handleIncrement} disabled={!inStock}>
              <p>+</p>
            </button>
          </div>
        ) : (
          <button
            className={`addDefault  ${!inStock && "outOfStockButton"}`}
            onClick={handleIncrement}
            disabled={!inStock}
          >
            <img src={iconSrc} className="icon" alt="Basket Icon" />
            <p>{buttonText}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
