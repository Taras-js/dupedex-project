/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

import { Filter, ProductContent } from "../../shared/types";
import { itemsIdListMock } from "../../shared/mocks/consts";

export interface ProductState extends ProductContent {
  history: ProductContent[];
  historyStep: number;
}

const initialState: ProductState = {
  currentItemId: 1,
  itemsIdList: itemsIdListMock,
  filter: null,
  isReviewShown: true,
  history: [
    {
      currentItemId: 1,
      itemsIdList: itemsIdListMock,
      filter: null,
      isReviewShown: true,
    },
  ],
  historyStep: 1,
};

const saveStep = (state: ProductState) => {
  if (state.historyStep !== state.history.length) {
    state.history = state.history.slice(0, state.historyStep);
  }
  state.history.push({
    currentItemId: state.currentItemId,
    itemsIdList: state.itemsIdList,
    filter: state.filter,
    isReviewShown: state.isReviewShown,
  });
  state.historyStep = state.history.length;
};

export const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    AddItem: (state, action: { type: ""; payload }) => {
      state.itemsIdList.push(action.payload);
      saveStep(state);
    },
    showItem: (state, action: { type: ""; payload: number[] }) => {
      state.itemsIdList = action.payload;
      saveStep(state);
    },
    removeItem: (state, action: { type: '', payload: number }) => {
      state.itemsIdList = state.itemsIdList.filter((id) => id !== action.payload);
      saveStep(state);
    },
    setFilter: (state, action: { type: '', payload: Filter }) => {
      if (state.filter !== action.payload) state.filter = action.payload;
      else state.filter = null;
      saveStep(state);
    },
    toggleReviews: (state) => {
      state.isReviewShown = !state.isReviewShown;
      saveStep(state);
    },
    getHistoryStep: (state, action: { type: '', payload: 1 | -1 }) => {
      state.historyStep += action.payload;
      state.currentItemId = current(state.history)[state.historyStep - 1].currentItemId;
      state.itemsIdList = current(state.history)[state.historyStep - 1].itemsIdList;
      state.filter = current(state.history)[state.historyStep - 1].filter;
      state.isReviewShown = current(state.history)[state.historyStep - 1].isReviewShown;
    },
  },
});

export const {
  AddItem,
  showItem,
  removeItem,
  setFilter,
  toggleReviews,
  getHistoryStep,
} = toolbarSlice.actions;

export const productState = (state: AppState) => state.product;

export default toolbarSlice.reducer;
