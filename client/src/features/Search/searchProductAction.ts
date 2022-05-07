import { AppDispatch } from "../../app/store";
import { productsMock } from "../../shared/mocks/productmock";
import { setProducts } from "./productSlice";

export const setProduct = () => async (dispatch: AppDispatch) => {
  await setTimeout(() => {
    // dispatch(setProducts(productsMock));
  }, 500);
};
