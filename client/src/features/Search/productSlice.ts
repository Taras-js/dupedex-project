import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  products: [{
  },
  ],
  isAddItemToList: false,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.products = action.payload;
    },
    setAddItemToList(state) {
      // eslint-disable-next-line no-param-reassign
      state.isAddItemToList = true;
    },
    noSetAddItemToList(state) {
      // eslint-disable-next-line no-param-reassign
      state.isAddItemToList = false;
    },
  },
});

export default productSlice.reducer;
