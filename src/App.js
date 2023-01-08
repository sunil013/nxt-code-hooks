import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Notification from "./components/Notification";
import Layout from "./components/Layout";
// import { uiActions } from "./store/ui-slice";
import { SendCartData, FetchData } from "./store/cart-actions";
let isFirstRender = true;

function App() {
  const notification = useSelector((state) => state.ui.notification);
  //   console.log(notification);
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchData());
  }, [dispatch]);
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if (cart.changed) {
      dispatch(SendCartData(cart));
    }
  }, [cart, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
