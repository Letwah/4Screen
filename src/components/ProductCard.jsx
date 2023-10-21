import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, setQuantity } from "../features/appSlice";

const ProductCard = ({
  title,
  price,
  buttonText,
  iconSrc,
  inStock,
  quantity,
  showQuantityControl,
}) => {
  console.log("showQuantityControl:", showQuantityControl);
  const dispatch = useDispatch();

  // const quantity = useSelector(selectQuantity);

  const handleAddToCart = () => {
    if (inStock && quantity > 0) {
      dispatch(addToCart({ title, price, quantity }));
      dispatch(setQuantity(0)); // reset quantity
    }
  };

  const handleIncrement = () => {
    if (inStock) {
      dispatch(setQuantity(quantity + 1));
    }
  };

  const handleDecrement = () => {
    if (inStock && quantity > 0) {
      dispatch(setQuantity(quantity - 1));
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
        {showQuantityControl && quantity > 1 && (
          <div className="quantityControl">
            <button
              onClick={handleDecrement}
              disabled={!inStock || quantity <= 1}
            >
              <p>-</p>
            </button>
            <p class="number">{quantity}</p>
            <button onClick={handleIncrement} disabled={!inStock}>
              <p>+</p>
            </button>
          </div>
        )}
        {showQuantityControl ||
          (quantity <= 1 && (
            <button
              className={`addDefault  ${!inStock && "outOfStockButton"}`}
              onClick={handleAddToCart}
              disabled={!inStock || quantity === 0}
            >
              <img src={iconSrc} className="icon" alt="Basket Icon" />
              <p>{buttonText}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProductCard;
