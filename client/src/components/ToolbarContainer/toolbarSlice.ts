/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";

import { Filter, ToolbarContent } from "../../shared/types";
import { itemsIdProductsMock } from "../../shared/mocks/consts";

export interface ToolbarState extends ToolbarContent {
  history: ToolbarContent[];
  historyStep: number;
  isAddItemToList: boolean;
}

const initialState: ToolbarState = {
  idItemsOnScreen: itemsIdProductsMock,
  idCurrentItem: itemsIdProductsMock[0],
  filter: null,
  isReviewShown: true,
  history: [
    {
      idItemsOnScreen: itemsIdProductsMock,
      idCurrentItem: itemsIdProductsMock[0],
      filter: null,
      isReviewShown: true,
    },
  ],
  historyStep: 1,
  isAddItemToList: false,
};

const saveStep = (state: ToolbarState) => {
  if (state.historyStep !== state.history.length) {
    state.history = state.history.slice(0, state.historyStep);
  }
  state.history.push({
    idCurrentItem: state.idCurrentItem,
    idItemsOnScreen: state.idItemsOnScreen,
    filter: state.filter,
    isReviewShown: state.isReviewShown,
  });
  state.historyStep = state.history.length;
};

export const toolbarSlice = createSlice({
  name: "toolbar",
  initialState,
  reducers: {
    setCurrentItem: (state, action: { type: ""; payload: number }) => {
      state.idCurrentItem = action.payload;
      saveStep(state);
    },
    addIdItem: (state, action: { type: ""; payload: number }) => {
      state.idItemsOnScreen = [...state.idItemsOnScreen, action.payload];
      saveStep(state);
    },
    showItem: (state, action: { type: ""; payload: number[] }) => {
      state.idItemsOnScreen = action.payload;
      const [first, ...rest] = state.idItemsOnScreen;
      state.idCurrentItem = first;
      saveStep(state);
    },
    removeItem: (state, action: { type: ""; payload: number }) => {
      state.idItemsOnScreen = state.idItemsOnScreen.filter(
        (id) => id !== action.payload,
      );
      const [first, ...rest] = state.idItemsOnScreen;
      state.idCurrentItem = first;
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
    toggleAddItemToList(state) {
      state.isAddItemToList = !state.isAddItemToList;
    },
    getHistoryStep: (state, action: { type: ""; payload: 1 | -1 }) => {
      state.historyStep += action.payload;
      state.idCurrentItem = current(state.history)[
        state.historyStep - 1
      ].idCurrentItem;
      state.idItemsOnScreen = current(state.history)[
        state.historyStep - 1
      ].idItemsOnScreen;
      state.filter = current(state.history)[state.historyStep - 1].filter;
      state.isReviewShown = current(state.history)[
        state.historyStep - 1
      ].isReviewShown;
    },
  },
});

export const {
  addIdItem,
  showItem,
  setCurrentItem,
  removeItem,
  setFilter,
  toggleReviews,
  toggleAddItemToList,
  getHistoryStep,
} = toolbarSlice.actions;

export const toolbarState = (state: AppState) => state.toolbar;

export default toolbarSlice.reducer;
