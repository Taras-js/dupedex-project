/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createSlice } from "@reduxjs/toolkit";
import { StringMap } from "ts-jest/dist/types";

import type { AppState } from "../../app/store";
import { reviewsMock } from "../../shared/mocks/reviewsmock";

export type Reviews = typeof reviewsMock;
export type ProductReviews = {
  id: string;
  reviews: Reviews;
};

interface ProductState {
  idProductsSaved: string[];
  products: any[];
  idReviewsSaved: string[];
  reviews: ProductReviews[];
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
      state.searches = [];
      state.searches.push(...action.payload);
    },
    setFilterReview: (
      state,
      action: { type: ""; payload: PayloadFilterReview },
    ) => {
      const index = state.filterReview.filterTags.findIndex((element) => element.filterTag === action.payload.filterTag);
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
export const filterReviewState = (state: AppState) => state.products.filterReview;
// export const searchesState = (state: AppState) => state.products.searches;

export default productSlice.reducer;
