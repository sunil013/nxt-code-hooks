import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
const Layout = () => {
  let total = 0;
  const cartList = useSelector((state) => state.cart.cartList);
  const showCart = useSelector((state) => state.cart.showCart);
  cartList.forEach((item) => {
    total += item.totalPrice;
  });
  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
