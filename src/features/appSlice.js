import { createSlice } from "@reduxjs/toolkit";
import { BASKET } from "../store/types";

const initialState = {
  page: BASKET,
  cart: [], // Add a cart array to keep track of added items
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { setPage, addToCart } = appSlice.actions;
export const selectPage = (state) => state.app.page;
export const selectCart = (state) => state.app.cart;

export default appSlice.reducer;
