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
  filterReview: {
    filter: boolean;
    filterTags: PayloadFilterReview[];
  };
}

export type PayloadFilterReview = {
  filterTag: string;
  mood: string;
};

export const initialState: ProductState = {
  idProductsSaved: [],
  products: [],
  idReviewsSaved: [],
  reviews: [],
  searches: [],
  filterReview: { filter: false, filterTags: [] },
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
      action: { type: ""; payload: { id: string; reviews: any[] } }
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
      }
    ) {
      state.searches.length = 0;
      state.searches.push(...action.payload);
    },
    setFilterReview: (
      state,
      action: { type: ""; payload: PayloadFilterReview }
    ) => {
      // let index = state.filterReview.filterTags.indexOf(action.payload.filterTag)
      let index = state.filterReview.filterTags.findIndex((element) => {
        return element.filterTag === action.payload.filterTag;
      });
      if (index !== -1) {
        state.filterReview.filterTags.splice(index, 1);
      } else {
        state.filterReview.filterTags.push(action.payload);
      }
      !state.filterReview.filterTags.length
        ? (state.filterReview.filter = false)
        : (state.filterReview.filter = true);
    },
    resetFilterReview: (state) => {
      state.filterReview.filter = false;
      state.filterReview.filterTags = [];
    },
  },
});

export const {
  setProducts,
  setReviews,
  setSearches,
  setFilterReview,
  resetFilterReview,
} = productSlice.actions;

export const productsState = (state: AppState) => state.products.products;
export const reviewsState = (state: AppState) => state.products.reviews;
export const filterReviewState = (state: AppState) =>
  state.products.filterReview;
// export const searchesState = (state: AppState) => state.products.searches;

export default productSlice.reducer;
