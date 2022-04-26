/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../../app/store';

export interface ModalState {
  isModalShown: boolean,
}

const initialState: ModalState = {
  isModalShown: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
  },
});

export const {
  toggleModal,
} = modalSlice.actions;

export const modalState = (state: AppState) => state.modal;

export default modalSlice.reducer;
