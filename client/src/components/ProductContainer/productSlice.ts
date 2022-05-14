/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

interface ProductState {
  idProductsSaved: string[];
  products: any[];
  idReviewsSaved: string[];
  reviews: {
    id: string;
    reviews: any[];
  }[];
  searches: {
    id: string;
    title: string;
    subtitle: string;
  }[];
}

export const initialState: ProductState = {
  idProductsSaved: [],
  products: [],
  idReviewsSaved: [],
  reviews: [],
  searches: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: { type: ""; payload: any }) {
      if (!state.idProductsSaved.includes(action.payload._id)) {
        state.idProductsSaved.push(action.payload._id);
        state.products.push(action.payload);
      }
    },

    setReviews(
      state,
      action: { type: ""; payload: { id: string; reviews: any[] } },
    ) {
      if (state.idReviewsSaved.includes(action.payload.id)) return;

      state.idReviewsSaved.push(action.payload.id);
      state.reviews.push(action.payload);
    },

    setSearches(
      state,
      action: {
        type: "";
        payload: { id: string; title: string; subtitle: string }[];
      },
    ) {
      state.searches.push(...action.payload);
    },
  },
});

export const { setProducts, setReviews, setSearches } = productSlice.actions;

export const productsState = (state: AppState) => state.products.products;
export const reviewsState = (state: AppState) => state.products.reviews;
export const searchesState = (state: AppState) => state.products.searches;

export default productSlice.reducer;
