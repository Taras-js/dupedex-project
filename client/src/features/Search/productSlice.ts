import { createSlice } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";
import { productsMock } from "../../shared/mocks/productmock";

interface ProductState {
  idProductsSaved: number[];
  products: any[];
  idReviewsSaved: number[];
  reviews: {
    id: number,
    reviews: any[]
  }[];
  searches: {
    id: number,
    title: string,
    subtitle: string
  }[];
  isAddItemToList: boolean;
}

export const initialState: ProductState = {
  idProductsSaved: [],
  products: [],
  idReviewsSaved: [],
  reviews: [],
  searches: [],
  isAddItemToList: false,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: { type: ""; payload: number[] }) {
      const idNew = action.payload.filter(
        (id) => !state.idProductsSaved.includes(id),
      );

      const newProducts = productsMock.filter(
        (product) => idNew.includes(product.id),
      );

      state.idProductsSaved.push(...idNew);
      state.products.push(...newProducts);
    },

    setReviews(state, action: { type: ""; payload: { id: number, reviews: any[] } }) {
      if (state.idReviewsSaved.includes(action.payload.id)) return;

      state.idReviewsSaved.push(action.payload.id);
      state.reviews.push(action.payload);
    },

    setSearches(state, action: { type: ""; payload: { id: number, title: string, subtitle: string }[] }) {
      state.searches.push(...action.payload);
    },

    setAddItemToList(state) {
      // eslint-disable-next-line no-param-reassign
      state.isAddItemToList = !state.isAddItemToList;
    },
  },
});

export const {
  setProducts, setReviews, setSearches, setAddItemToList,
} = productSlice.actions;

export const productsState = (state: AppState) => state.products.products;
export const reviewsState = (state: AppState) => state.products.reviews;
export const searchesState = (state: AppState) => state.products.searches;

export default productSlice.reducer;
