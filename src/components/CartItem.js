import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "./../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const decreaseQuantity = () => {
    dispatch(cartActions.decreaseQuantity(id));
  };
  const increaseQuantity = () => {
    dispatch(cartActions.increaseQuantity(id));
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={decreaseQuantity}>
        -
      </button>
      <button className="cart-actions" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default CartItem;
