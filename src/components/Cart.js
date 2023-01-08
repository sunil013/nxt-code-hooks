import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  //   const quantity = 5;
  const quantity = useSelector((state) => state.cart.totalQuantity);
  console.log(quantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
