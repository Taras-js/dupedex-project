/* eslint-disable @typescript-eslint/indent */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import productsReducer from "../features/Search/productSlice";
import toolbarReducer from "../components/ToolbarContainer/toolbarSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      toolbar: toolbarReducer,
      products: productsReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
