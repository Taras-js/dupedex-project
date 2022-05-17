/* eslint-disable no-param-reassign */
import { createSlice, current } from "@reduxjs/toolkit";

import type { AppState } from "../../app/store";
import { itemsIdProductsMock } from "../../shared/mocks/consts";

import { HYDRATE } from "next-redux-wrapper";
import { Filter, ToolbarContent } from "../../shared/types";

export interface ToolbarState extends ToolbarContent {
  history: ToolbarContent[];
  historyStep: number;
  isSearchBarFocused: boolean;
}

const initialState: ToolbarState = {
  idItemsOnScreen: itemsIdProductsMock,
  idCurrentItem: itemsIdProductsMock[0],
  filter: null,
  isReviewShown: false,
  history: [
    {
      idItemsOnScreen: itemsIdProductsMock,
      idCurrentItem: itemsIdProductsMock[0],
      filter: null,
      isReviewShown: true,
    },
  ],
  historyStep: 1,
  isSearchBarFocused: false,
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
    setCurrentItem: (state, action: { type: ""; payload: string }) => {
      state.idCurrentItem = action.payload;
      saveStep(state);
    },
    addIdItem: (state, action: { type: ""; payload: string }) => {
      state.idItemsOnScreen = [...state.idItemsOnScreen, action.payload];
      saveStep(state);
    },
    showItem: (state, action: { type: ""; payload: string[] }) => {
      state.idItemsOnScreen = action.payload;
      const [first, ...rest] = state.idItemsOnScreen;
      state.idCurrentItem = first;
      saveStep(state);
    },
    removeItem: (state, action: { type: ""; payload: string }) => {
      state.idItemsOnScreen = state.idItemsOnScreen.filter(
        (id) => id !== action.payload
      );
      saveStep(state);
    },
    changeIdList: (state, action: { type: ""; payload: [] }) => {
      state.idItemsOnScreen = action.payload;
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
    setSearchBarFocused(state) {
      state.isSearchBarFocused = true;
    },
    setSearchBarBlurred(state) {
      state.isSearchBarFocused = false;
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      };
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
  setSearchBarFocused,
  setSearchBarBlurred,
  getHistoryStep,
  changeIdList,
} = toolbarSlice.actions;

export const toolbarState = (state: AppState) => state.toolbar;

export default toolbarSlice.reducer;
