/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../../app/store';

export interface ModalState {
  isModalShown: boolean,
  modalComponent: string
}

const initialState: ModalState = {
  isModalShown: false,
  modalComponent: "ModalLogin"
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
    setModalComponent: (state, data) => {
      state.modalComponent = data.payload
    }
  },
});

export const {
  toggleModal,
  setModalComponent
} = modalSlice.actions;

export const modalState = (state: AppState) => state.modal;

export default modalSlice.reducer;
