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
    addToCart: (state, action) => {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
});

export const { setPage, addToCart, setQuantity } = appSlice.actions;
export const selectPage = (state) => state.app.page;
export const selectCart = (state) => state.app.cart;
export const selectQuantity = (state) => state.app.quantity;

export default appSlice.reducer;
