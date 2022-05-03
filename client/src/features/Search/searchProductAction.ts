import { AppDispatch } from "../../app/store";
import { productsMock } from "../../shared/mocks/productmock";
import { productSlice } from "./productSlice";

export const setProduct = () => async (dispatch: AppDispatch) => {
  await setTimeout(() => {
    dispatch(productSlice.actions.setProducts(productsMock));
  }, 500);
};
