import { createSlice } from "@reduxjs/toolkit";
// import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
  },
  reducers: {
    replaceData(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.cartList = action.payload.cartList;
    },
    addItemToCart(state, action) {
      state.changed = true;
      const newItem = action.payload;
      const itemDetails = state.cartList.find((item) => item.id === newItem.id);
      if (itemDetails) {
        itemDetails.quantity++;
        itemDetails.totalPrice += newItem.price;
      } else {
        state.cartList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        });
        state.totalQuantity += 1;
      }
    },
    removeItemFromCart() {},
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const updatedCart = state.cartList.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            totalPrice: item.totalPrice + item.price,
          };
        } else {
          return item;
        }
      });
      state.cartList = updatedCart;
    },
    decreaseQuantity(state, action) {
      const itemId = action.payload;
      const updatedCart = state.cartList.map((item) => {
        if (item.id === itemId) {
          if (item.quantity >= 2) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
      state.cartList = updatedCart;
    },
  },
});

// export const sendCartData = (cart) => {
//   return async (dispatch) => {
//     dispatch(
//       uiActions.showNotification({
//         message: "sending request",
//         open: true,
//         type: "warning",
//       })
//     );
//     const sendCartItemsData = async () => {
//       const url =
//         "https://shopping-redux-8c4fc-default-rtdb.firebaseio.com/cartItems.json";
//       const options = {
//         method: "PUT",
//         body: JSON.stringify(cart),
//       };
//       const response = await fetch(url, options);
//       const data = await response.json();
//       console.log(data);
//       dispatch(
//         uiActions.showNotification({
//           message: "send request successful",
//           open: true,
//           type: "success",
//         })
//       );
//     };
//     try {
//       await sendCartItemsData();
//     } catch (err) {
//       dispatch(
//         uiActions.showNotification({
//           message: "sending request failed",
//           open: true,
//           type: "error",
//         })
//       );
//     }
//   };
// };

export const cartActions = cartSlice.actions;

export default cartSlice;
