import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import counterReducer from '../features/counter/counterSlice';
import productReducer from '../components/ToolbarContainer/toolbarSlice';
import modalReducer from '../components/UIKit/Modal/modalSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      counter: counterReducer,
      product: productReducer,
      modal: modalReducer,
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
