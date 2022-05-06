import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

export const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.products.push(...action.payload);
    },
  },
});

export const productsState = (state: AppState) => state.products;

export default productSlice.reducer;
