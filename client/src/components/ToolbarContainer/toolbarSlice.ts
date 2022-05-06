/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

import { Filter, ToolbarContent } from "../../shared/types";
import { itemsIdListMock } from "../../shared/mocks/consts";

export interface ToolbarState extends ToolbarContent {
  history: ToolbarContent[];
  historyStep: number;
}

const initialState: ToolbarState = {
  itemsListOnScreen: itemsIdListMock,
  currentItemId: itemsIdListMock[0],
  filter: null,
  isReviewShown: true,
  history: [
    {
      currentItemId: 1,
      itemsListOnScreen: itemsIdListMock,
      filter: null,
      isReviewShown: true,
    },
  ],
  historyStep: 1,
};

const saveStep = (state: ToolbarState) => {
  if (state.historyStep !== state.history.length) {
    state.history = state.history.slice(0, state.historyStep);
  }
  state.history.push({
    currentItemId: state.currentItemId,
    itemsListOnScreen: state.itemsListOnScreen,
    filter: state.filter,
    isReviewShown: state.isReviewShown,
  });
  state.historyStep = state.history.length;
};

export const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    showItem: (state, action: { type: ""; payload: number[] }) => {
      state.itemsListOnScreen = action.payload;
      saveStep(state);
    },
    setCurrentItem: (state, action: { type: ""; payload: number }) => {
      state.currentItemId = action.payload;
      saveStep(state);
    },
    removeItem: (state, action: { type: ""; payload: number }) => {
      state.itemsListOnScreen = state.itemsListOnScreen.filter(
        (id) => id !== action.payload,
      );
      saveStep(state);
    },
    setFilter: (state, action: { type: ""; payload: Filter }) => {
      if (state.filter !== action.payload) state.filter = action.payload;
      else state.filter = null;
      saveStep(state);
    },
    toggleReviews: (state) => {
      state.isReviewShown = !state.isReviewShown;
      saveStep(state);
    },
    getHistoryStep: (state, action: { type: ""; payload: 1 | -1 }) => {
      state.historyStep += action.payload;
      state.currentItemId = current(state.history)[
        state.historyStep - 1
      ].currentItemId;
      state.itemsListOnScreen = current(state.history)[
        state.historyStep - 1
      ].itemsListOnScreen;
      state.filter = current(state.history)[state.historyStep - 1].filter;
      state.isReviewShown = current(state.history)[
        state.historyStep - 1
      ].isReviewShown;
    },
  },
});

export const {
  showItem,
  setCurrentItem,
  removeItem,
  setFilter,
  toggleReviews,
  getHistoryStep,
} = toolbarSlice.actions;

export const toolbarState = (state: AppState) => state.toolbar;

export default toolbarSlice.reducer;
