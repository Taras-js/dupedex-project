/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import type { AppState } from '../../../app/store';

export enum Modals {
  ModalLogin = "ModalLogin",
  ModalShare = "ModalShare",
}

export interface ModalState {
  isModalShown: boolean
  modalComponent: Modals
  isUnclosable: boolean
}

const initialState: ModalState = {
  isModalShown: false,
  modalComponent: null,
  isUnclosable: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
    setIsUnclosable: (state, action: { type: ''; payload: boolean }) => {
      state.isUnclosable = action.payload;
    },
    setModalComponent: (state, action: { type: ''; payload: Modals }) => {
      state.isModalShown = !state.isModalShown;
      state.modalComponent = action.payload;
    },
  },
});

export const { toggleModal, setModalComponent, setIsUnclosable } = modalSlice.actions;

export const modalState = (state: AppState) => state.modal;

export default modalSlice.reducer;
