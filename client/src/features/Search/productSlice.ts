import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  products: [{
  },
  ],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer;
