import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const FetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://shopping-redux-8c4fc-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "sending request failed",
          open: true,
          type: "error",
        })
      );
    }
  };
};

export const SendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        message: "sending request",
        open: true,
        type: "warning",
      })
    );
    const sendCartItemsData = async () => {
      const url =
        "https://shopping-redux-8c4fc-default-rtdb.firebaseio.com/cartItems.json";
      const options = {
        method: "PUT",
        body: JSON.stringify(cart),
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      dispatch(
        uiActions.showNotification({
          message: "send request successful",
          open: true,
          type: "success",
        })
      );
    };
    try {
      await sendCartItemsData();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          message: "sending request failed",
          open: true,
          type: "error",
        })
      );
    }
  };
};
