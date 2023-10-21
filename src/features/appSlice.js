import { createSlice } from "@reduxjs/toolkit";
import { BASKET } from "../store/types";

const initialState = {
  page: BASKET,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { setPage } = appSlice.actions;
export const selectPage = (state) => state.app.page;

export default appSlice.reducer;
