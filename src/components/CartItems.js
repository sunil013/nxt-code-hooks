import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

const CartItems = () => {
  const cartList = useSelector((state) => state.cart.cartList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartList.map((item) => (
          <li key={item.id}>
            <CartItem
              name={item.name}
              id={item.id}
              price={item.price}
              total={item.totalPrice}
              quantity={item.quantity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
