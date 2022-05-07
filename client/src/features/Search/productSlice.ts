import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

interface ProductState {
  products: any[];
  reviews: {
    id: number,
    reviews: any[]
  }[]
}

export const initialState: ProductState = {
  products: [],
  reviews: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: { type: ""; payload: any[] }) {
      const idSaved = state.products.map((product) => product.id);

      const newProducts = action.payload.filter(
        (product) => !idSaved.includes(product.id),
      );

      // eslint-disable-next-line no-param-reassign
      state.products.push(...newProducts);
    },
    setReviews(state, action: { type: ""; payload: { id: number, reviews: any[] } }) {
      // eslint-disable-next-line no-param-reassign
      state.reviews.push(action.payload);
    },
  },
});

export const { setProducts, setReviews } = productSlice.actions;

export const productsState = (state: AppState) => state.products.products;
export const reviewsState = (state: AppState) => state.products.reviews;

export default productSlice.reducer;
