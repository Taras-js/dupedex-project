/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit';

import type { AppState } from '../../app/store';
import { FilterType, ProductContent } from '../../shared/types';

export interface ProductState {
  currentItemId: number;
  itemsIdList: number[];
  filter: FilterType;
  isReviewShown: boolean,
  history: ProductContent[],
  historyStep: number,
}

const initialState: ProductState = {
  currentItemId: 1,
  itemsIdList: [1, 2, 3, 4],
  filter: null,
  isReviewShown: true,
  history: [{
    currentItemId: 1,
    itemsIdList: [1, 2, 3, 4],
    filter: null,
    isReviewShown: true,
  }],
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

const prevStep = (state: ProductState) => {
  state.historyStep -= 1;
  state.currentItemId = current(state.history)[state.historyStep - 1].currentItemId;
  state.itemsIdList = current(state.history)[state.historyStep - 1].itemsIdList;
  state.filter = current(state.history)[state.historyStep - 1].filter;
  state.isReviewShown = current(state.history)[state.historyStep - 1].isReviewShown;
};

const nextStep = (state: ProductState) => {
  state.historyStep += 1;
  state.currentItemId = current(state.history)[state.historyStep - 1].currentItemId;
  state.itemsIdList = current(state.history)[state.historyStep - 1].itemsIdList;
  state.filter = current(state.history)[state.historyStep - 1].filter;
  state.isReviewShown = current(state.history)[state.historyStep - 1].isReviewShown;
};

export const toolbarSlice = createSlice({
  name: 'toolbar',
  initialState,
  reducers: {
    oneItem: (state) => {
      state.itemsIdList = [1];
      saveStep(state);
    },
    fourItems: (state) => {
      state.itemsIdList = [1, 2, 3, 4];
      saveStep(state);
    },
    posReviews: (state) => {
      if (state.filter !== 'positive') state.filter = 'positive';
      else state.filter = null;
      saveStep(state);
    },
    negReviews: (state) => {
      if (state.filter !== 'negative') state.filter = 'negative';
      else state.filter = null;
      saveStep(state);
    },
    showOrHideReviews: (state) => {
      state.isReviewShown = !state.isReviewShown;
      saveStep(state);
    },
    previousStep: (state) => {
      prevStep(state);
    },
    followingStep: (state) => {
      nextStep(state);
    },
  },
});

export const {
  oneItem, fourItems, posReviews, negReviews, showOrHideReviews, previousStep, followingStep,
} = toolbarSlice.actions;

export const productState = (state: AppState) => state.product;

export default toolbarSlice.reducer;
