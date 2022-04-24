import { AppDispatch } from '../../app/store';
import { products } from '../../mock/product';
import { productSlice } from './productSlice';

export const searchProduct = (search: string) => (dispatch: AppDispatch) => {
  const result = products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
  dispatch(productSlice.actions.setProducts(result));
};
