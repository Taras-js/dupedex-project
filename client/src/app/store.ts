/* eslint-disable @typescript-eslint/indent */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

<<<<<<< HEAD
import counterReducer from '../features/counter/counterSlice';
import productReducer from '../components/ToolbarContainer/toolbarSlice';
import modalReducer from '../components/UIKit/Modal/modalSlice';
=======
import counterReducer from "../features/counter/counterSlice";
import goodsReducer from "../features/Search/productSlice";
import productReducer from "../components/ToolbarContainer/toolbarSlice";
>>>>>>> develop

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      product: productReducer,
<<<<<<< HEAD
      modal: modalReducer,
=======
      goods: goodsReducer,
>>>>>>> develop
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
