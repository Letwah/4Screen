import { createSlice } from "@reduxjs/toolkit";
import { BASKET } from "../store/types";

const initialState = {
  page: BASKET,
  cart: [],
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },

    increaseQuantity: (state, action) => {
      const indexOf = state.cart.findIndex((item) => {
        return item.id === action.payload;
      });
      if (indexOf > -1) {
        state.cart[indexOf].quantity += 1;
      } else {
        state.cart.push({ quantity: 1, id: action.payload });
      }
    },
    removeQuantity: (state, action) => {
      const indexOf = state.cart.findIndex((item) => {
        return item.id === action.payload;
      });

      if (indexOf > -1 && state.cart[indexOf].quantity >= 1) {
        state.cart[indexOf].quantity -= 1;
      }
    },
  },
});

export const { setPage, addToCart, increaseQuantity, removeQuantity } =
  appSlice.actions;
export const selectPage = (state) => state.app.page;
export const selectCart = (state) => state.app.cart;
export const selectQuantity = (state) => state.app.quantity;

export default appSlice.reducer;
