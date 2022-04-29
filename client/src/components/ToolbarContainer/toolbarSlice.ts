/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";
import { itemsIdListMock } from "../../shared/mocks/consts";
import { Filter, ProductContent } from "../../shared/types";

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

const getStep = (state: ProductState, step: number) => {
  state.currentItemId = current(state.history)[step - 1].currentItemId;
  state.itemsIdList = current(state.history)[step - 1].itemsIdList;
  state.filter = current(state.history)[step - 1].filter;
  state.isReviewShown = current(state.history)[step - 1].isReviewShown;
  state.historyStep = step;
};

export const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    showItem: (state, action: { type: ""; payload: number[] }) => {
      state.itemsIdList = action.payload;
      saveStep(state);
    },
    posReviews: (state) => {
      if (state.filter !== Filter.positive) state.filter = Filter.positive;
      else state.filter = null;
      saveStep(state);
    },
    negReviews: (state) => {
      if (state.filter !== Filter.negative) state.filter = Filter.negative;
      else state.filter = null;
      saveStep(state);
    },
    showOrHideReviews: (state) => {
      state.isReviewShown = !state.isReviewShown;
      saveStep(state);
    },
    previousStep: (state) => {
      getStep(state, state.historyStep - 1);
    },
    followingStep: (state) => {
      getStep(state, state.historyStep + 1);
    },
  },
});

export const {
  showItem,
  posReviews,
  negReviews,
  showOrHideReviews,
  previousStep,
  followingStep,
} = toolbarSlice.actions;

export const productState = (state: AppState) => state.product;

export default toolbarSlice.reducer;
