/* eslint-disable @typescript-eslint/indent */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import productsReducer from "../components/ProductContainer/productSlice";
import toolbarReducer from "../components/ToolbarContainer/toolbarSlice";
import counterReducer from "../features/counter/counterSlice";
import goodsReducer from "../features/Search/productSlice";
import productReducer from "../components/ToolbarContainer/toolbarSlice";
import modalReducer from "../components/UIKit/Modal/modalSlice";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

export function makeStore() {
  return configureStore({
    reducer: {
      toolbar: toolbarReducer,
      products: productsReducer,
      counter: counterReducer,
      product: productReducer,
      modal: modalReducer,
      goods: goodsReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type RootStore = ReturnType<typeof makeStore>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;

export const wrapper = createWrapper<RootStore>(makeStore);
